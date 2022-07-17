import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

import AddUsers from "../Pages/AddUsers";
import Home from "../Pages/Home";
import Users from "../Pages/Users";

function NavbarComponents() {
  return (
    <Router>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">CRUD-REACTJS</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/users">Users</Nav.Link>
              <Nav.Link href="/users/add">Tambahkan Users</Nav.Link>
              {/* <NavDropdown title="User" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Settings</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Logout</NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/add" element={<AddUsers />} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </Router>
  );
}

export default NavbarComponents;
