import NextLink from "next/link";
import { useRouter } from "next/router";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { SearchComponent } from "./SearchComponent";

export const NavBar = () => {
  const { asPath } = useRouter();
  return (
    <>
      <Navbar key="sm" bg="dark" expand="sm" className="mb-3">
        <Container fluid>
          <Navbar.Brand>
            <NextLink href="/" passHref>
              Navbar Offcanvas
            </NextLink>
          </Navbar.Brand>
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
                      variant={
                        asPath === "/category/news"
                          ? "secondary"
                          : "outline-secondary"
                      }
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
                      variant={
                        asPath === "/category/opinion"
                          ? "secondary"
                          : "outline-secondary"
                      }
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
                      variant={
                        asPath === "/category/advices"
                          ? "secondary"
                          : "outline-secondary"
                      }
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
              <div className="d-flex">
                <SearchComponent />
              </div>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};
