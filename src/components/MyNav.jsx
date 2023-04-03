import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import LIBRI from "../LIBRI.jpg";

function MyNav() {
  return (
    <Navbar className="bg-info p-3 d-flex justify-content-center" expand="lg">
      <Container fluid>
        <img src={LIBRI} alt="logo" className="rounded-circle" height={60} width={60} />
        <p className="ms-3 fw-bold">EpiBooks</p>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-3 me-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#"> About</Nav.Link>
            <Nav.Link href="#">Browse</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNav;
