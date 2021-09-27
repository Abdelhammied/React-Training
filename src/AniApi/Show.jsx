import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { API } from "./util/axios";

import { Card, CardImg, CardBody, CardHeader } from "reactstrap";

import { Layout } from "./util/Layout";
import AnimeGenres from "./components/AnimeGenres";
import AnimeItem from "./components/AnimeItem";

export default function Show(props) {
	const { id } = useParams();

	const [anime, setAnime] = useState({});
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		async function fetchAnime() {
			let { data } = await API.get(`/v1/anime/${id}`);

			setAnime(data.data);

			setLoading(false);
		}

		fetchAnime();
	}, [id]);

	return (
		<Layout>
			{loading ? (
				"Loading ..."
			) : (
				<AnimeItem anime={anime} showSingle={true}>
					{" "}
				</AnimeItem>
			)}
		</Layout>
	);
}
