import { Container, Nav, Navbar } from "react-bootstrap";
import { BsCartPlus, BsFillPersonFill } from "react-icons/bs";
import { LinkContainer } from "react-router-bootstrap";

function Header() {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
          <Navbar.Brand >ProZone</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <LinkContainer to='/cart'>
              <Nav.Link>
                Cart <BsCartPlus />
              </Nav.Link>
              </LinkContainer>
              <LinkContainer to='/login'>
              <Nav.Link >
                Log In <BsFillPersonFill />{" "}
              </Nav.Link>
              </LinkContainer>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
