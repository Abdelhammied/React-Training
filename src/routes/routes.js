import React from "react";
import { Route, Switch, Redirect } from "react-router";
import { TodoComponent, AniComponent, AnimeComponent } from "./components";

export default function routes(props) {
	return (
		<Switch>
			<Redirect exact from={HOME_URL} to={TODO_URL} />

			<Route
				isActive={() => true}
				path={TODO_URL}
				component={TodoComponent}
			/>

			<Route exact path={ANI_URL} component={AniComponent} />

			<Route exact path={ANIME_URL} component={AnimeComponent} />
		</Switch>
	);
}

export const TODO_URL = "/todo-app";
export const ANI_URL = "/animes";
export const ANIME_URL = "/animes/:id";
export const HOME_URL = "/";
