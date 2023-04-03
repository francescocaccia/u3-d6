import { Container, Row, Col } from "react-bootstrap";
import copyright from "../copyright.jpeg";

const MyFooter = () => (
  <Container fluid className="bg-info">
    <Row>
      <Col className="p-5">
        <div className="d-flex justify-content-center">
          <img src={copyright} alt="logo" className="rounded-circle" height={30} width={30} />
          <p className="ms-3 fw-bold">EpiBooks</p>
        </div>
      </Col>
    </Row>
  </Container>
);
export default MyFooter;
