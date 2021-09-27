// Components
import { Container, Row, Col } from "reactstrap";

export const Layout = (props) => {
	return (
		<Container>
			<Row>
				<Col md="12">{props.children}</Col>
			</Row>
		</Container>
	);
};
