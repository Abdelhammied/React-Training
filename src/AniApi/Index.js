import React, { useEffect, useState } from "react";

// Utils
import { API } from "./util/axios";

// Components
import {
	Container,
	Row,
	Col,
	Card,
	CardHeader,
	CardBody,
} from "reactstrap";

// Consts
import { ANIME_URL } from "../routes/routes";

import { Layout } from "./util/Layout";
import AnimeItem from "./components/AnimeItem";

const Animes = () => {
	const [loading, setLoading] = useState(true);

	const [animes, setAnimes] = useState([]);
	const [response, setResponse] = useState([]);
	const [page, setPage] = useState(1);

	const [queryParams, setQueryParams] = useState({
		page,
		per_page: 20,
	});

	const toggleLoading = () => setLoading(!loading);

	const fetch = async () => {
		let response = await API.get("/v1/anime", {
			params: queryParams,
		});

		setResponse(response);

		setAnimes(response.data.data.documents);

		toggleLoading();
	};

	useEffect(() => {
		const _fetch = async () => {
			await fetch();
		};

		_fetch();
	}, []);

	return (
		<div>
			{loading ? (
				"Loading ..."
			) : (
				<Container>
					<Row>
						{animes.map((anime, i) => {
							return (
								<Col md="4" key={i} className="mb-3">
									<AnimeItem anime={anime}></AnimeItem>
								</Col>
							);
						})}
					</Row>
				</Container>
			)}
		</div>
	);
};

export default function Index(props) {
	const [data, setData] = useState({});
	const [loading, setLoading] = useState(true);

	const fetchUser = async () => {
		try {
			let { data } = await API.get("/v1/auth/me");

			setData(data);

			setLoading(false);
		} catch (error) {}
	};

	useEffect(() => {
		const fetchUserState = async () => {
			await fetchUser();
		};

		fetchUserState();
	}, []);

	return (
		<Layout>
			<Card>
				<CardHeader tag="h5">
					{loading ? "Loading ..." : data.message}
				</CardHeader>
				<CardBody className="text-center">
					<Animes />
				</CardBody>
			</Card>
		</Layout>
	);
}
