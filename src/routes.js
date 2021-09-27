import React from "react";
import { Route, Switch, Redirect } from "react-router";
import { TodoComponent, AniComponent } from "./components";

export default function routes(props) {
	return (
		<Switch>
			<Redirect exact from={HOME_URL} to={TODO_URL} />

			<Route
				isActive={() => true}
				path={TODO_URL}
				component={TodoComponent}
			></Route>

			<Route path={ANI_URL} component={AniComponent}></Route>
		</Switch>
	);
}

export const TODO_URL = "/todo-app";
export const ANI_URL = "/ani-api";
export const HOME_URL = "/";
