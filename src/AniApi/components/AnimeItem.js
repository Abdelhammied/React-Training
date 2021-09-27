import { Button } from "bootstrap";
import React, { Fragment, useEffect } from "react";
import { generatePath, Link } from "react-router-dom";
import { Card, CardBody, CardHeader, CardImg } from "reactstrap";
import { ANIME_URL, ANI_URL } from "../../routes/routes";
import { API } from "../util/axios";
import AnimeGenres from "./AnimeGenres";

const AnimeLink = ({ title, id }) => {
	return (
		<Link
			exact
			to={generatePath(ANIME_URL, {
				id: id,
			})}
		>
			{title}
		</Link>
	);
};

const AnimeAdditionalData = ({ animeId }) => {
	useEffect(() => {
		async function fetchSong() {
			let { data } = await API.get(`/v1/song?anime_id=${animeId}`);

			console.log(data);
		}

		fetchSong();
	}, []);

	return <div></div>;
};

export default function AnimeItem({ anime, showSingle = false }) {
	const animeDescription = showSingle
		? anime.descriptions.en
		: anime.descriptions.en.slice(0, 100);

	return (
		<Card title={anime.titles.en}>
			<CardImg
				top
				width="100%"
				src={showSingle ? anime.banner_image : anime.cover_image}
				alt={anime.titles.en}
			/>

			<CardHeader className="d-flex justify-content-between align-items-center">
				{showSingle ? (
					anime.titles.en
				) : (
					<AnimeLink
						title={anime.titles.en}
						id={anime.id}
					></AnimeLink>
				)}

				{showSingle ? <Link to={ANI_URL}>Go back</Link> : ""}
			</CardHeader>

			<CardBody>
				{anime.descriptions.en ? (
					<Fragment>
						<div
							dangerouslySetInnerHTML={{
								__html: animeDescription,
							}}
						></div>

						{showSingle ? null : (
							<AnimeLink
								title="Show more"
								id={anime.id}
							></AnimeLink>
						)}
					</Fragment>
				) : (
					`-`
				)}

				<hr />

				{<AnimeGenres anime={anime}></AnimeGenres>}

				{showSingle ? <AnimeAdditionalData animeId={anime.id} /> : ""}
			</CardBody>
		</Card>
	);
}
