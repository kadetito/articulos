import NextLink from "next/link";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

export const NavBar = () => {
  return (
    <>
      <Navbar key="sm" bg="dark" expand="sm" className="mb-3">
        <Container fluid>
          <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-$"sm"`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-$"sm"`}
            aria-labelledby={`offcanvasNavbarLabel-expand-$"sm"`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-$"sm"`}>
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav>
                  <NextLink href="/category/news" passHref>
                    <Button
                      variant="outline-secondary"
                      size="sm"
                      className="ms-2"
                    >
                      Novedades
                    </Button>
                  </NextLink>
                </Nav>
                <Nav>
                  <NextLink href="/category/opinion" passHref>
                    <Button
                      variant="outline-secondary"
                      size="sm"
                      className="ms-2"
                    >
                      Opinión
                    </Button>
                  </NextLink>
                </Nav>
                <Nav>
                  <NextLink href="/category/advices" passHref>
                    <Button
                      variant="outline-secondary"
                      size="sm"
                      className="ms-2"
                    >
                      Consejos
                    </Button>
                  </NextLink>
                </Nav>

                {/* <NavDropdown
                  title="Dropdown"
                  id={`offcanvasNavbarDropdown-expand-$"sm"`}
                >
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown> */}
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-secondary" size="sm" className="ms-2">
                  Search
                </Button>
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};
