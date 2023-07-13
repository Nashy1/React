import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import GitHub from './GitHub';
import GitHubUser from './GitHubUser';


class App extends Component {
  render() {
    return (
      <div>
        <Header />

      </div>
    );
  }
}
export default App;

class Header extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/github">GitHub</Nav.Link>
              <Nav.Link href="/About">About</Nav.Link>
            </Nav>

          </Navbar>
          <Routes>
            <Route path="/github/user/:login/:id" element={<GitHubUser />} />
            <Route path="/github" element={<GitHub />} />
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    )
  }
}
class Home extends Component {
  render() {
    return (
      <div>
        <h5>Home</h5>
      </div>
    )
  }
}
class About extends Component {
  render() {
    return (
      <div>
        <h5>About</h5>
      </div>
    )
  }
}
class NotFound extends Component {
  render() {
    return <div>Not Found</div>
  }
}