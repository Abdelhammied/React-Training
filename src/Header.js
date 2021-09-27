import React from "react";

import { Container, Row, Col, Nav, NavItem } from "reactstrap";
import { Link } from "react-router-dom";

// Routes
import { ANI_URL, TODO_URL } from "./routes";

const Layout = (props) => {
	return (
		<Container>
			<Row>
				<Col md="12">{props.children}</Col>
			</Row>
		</Container>
	);
};

export default function Header(props) {
	return (
		<Layout>
			<Nav tabs>
				<NavItem>
					<Link to={TODO_URL} className="nav-link">
						Todo App
					</Link>
				</NavItem>

				<NavItem>
					<Link to={ANI_URL} className="nav-link">
						Ani Api
					</Link>
				</NavItem>
			</Nav>
		</Layout>
	);
}
