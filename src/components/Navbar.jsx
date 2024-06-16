import { Container, Nav, Navbar, Image } from "react-bootstrap";
import pienotes from "../assets/pienotes.png";

const NavigasiBar = () => {
  return (
    <Navbar expand="lg" className="bg-primary">
      <Container>
        <Navbar.Brand href="#home">
          <Image src={pienotes} width={20} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto fw-semibold">
            <Nav.Link href={"/"} className="text-white">
              Home
            </Nav.Link>
            <Nav.Link href={"news"} className="text-white">
              News
            </Nav.Link>
            <Nav.Link href={"about"} className="text-white">
              About
            </Nav.Link>
            <Nav.Link href={"contact"} className="text-white">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href={"home"} className="text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bell-fill" viewBox="0 0 16 16">
                <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2m.995-14.901a1 1 0 1 0-1.99 0A5 5 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901" />
              </svg>
            </Nav.Link>
            <Nav.Link href={"settingAccount"} className="text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
              </svg>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigasiBar;
