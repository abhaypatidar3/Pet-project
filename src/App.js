// src/App.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported
import { Navbar, Nav, Container } from 'react-bootstrap'; // Import necessary Bootstrap components
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Import React Router components
import PetDetails from './components/PetDetails'; // Import PetDetails component
import PetList from './components/PetList'; // Import PetDetails component
import Login from './components/Login'; // Import Login component
import PetEducation from './components/PetEducation'; // Import Login component
import Aboutus from './components/Aboutus'; // Import Login component

function App() {
  return (
    <Router>
      <div className="App">
        {/* Bootstrap Navbar */}
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand as={Link} to="/">Pet Adoption</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-nav" />
            <Navbar.Collapse id="navbar-nav">
              <Nav className="ml-auto">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/adopt">Adopt</Nav.Link>
                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                <Nav.Link as={Link} to="/about">Pet Education</Nav.Link>
                <Nav.Link as={Link} to="/about1">About us</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {/* Routing Section */}
        <Routes>
          <Route path="/" element={<PetDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/adopt" element={<PetList />} />
          <Route path="/about" element={<PetEducation />} />
          <Route path="/about1" element={<Aboutus />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
