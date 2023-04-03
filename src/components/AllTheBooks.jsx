import { Component } from "react";
import { Container, Row, Card, Col, Badge } from "react-bootstrap";
import data from "../data/history.json";

class AllTheBooks extends Component {
  render() {
    return (
      <Container>
        <Row className="p-5 justify-content-center">
          {data.map((data, index) => (
            <Col xs={4} key={`data-${index}`}>
              <Card>
                <Card.Img variant="top" src={data.img} height="600px" />
                <Card.Body>
                  <Card.Title className="fs-6 fw-bold">Title: {data.title}</Card.Title>
                  <Card.Text>
                    <Badge className="bg-warning">Price €{data.price}</Badge>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default AllTheBooks;
