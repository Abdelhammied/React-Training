import React from "react";
import { Container, Row, Col } from "reactstrap";

export const Layout = (props) => {
	return (
		<Container>
			<Row className="mt-5 mb-2">
				<Col md="12">
					<h3>Todo App</h3>
				</Col>
			</Row>

			<Row>
				<Col md="12">{props.children}</Col>
			</Row>
		</Container>
	);
};
