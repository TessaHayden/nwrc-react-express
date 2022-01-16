import React, { Component } from "react";
import {
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  NavItem,
  Jumbotron,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { NavLink } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);

    this.handleLogin = this.handleLogin.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.toggleNav = this.toggleNav.bind(this);
    this.state = {
      isNavOpen: false,
      isModalOpen: false,
    };
  }
  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }
  handleLogin(event) {
    this.toggleModal();
    event.preventDefault();
  }
  render() {
    return (
      <React.Fragment>
        <Navbar dark sticky="top" expand="md">
          <div className="container">
            <div className="row">
              <div className="col-md-2">
                <NavbarBrand className="mr-auto" href="/">
                  <img
                    src="/assets/images/nwreslogo.svg"
                    height="90"
                    width="90"
                    alt="NW restaurant consultant logo"
                  />
                </NavbarBrand>
              </div>
              <div className="col-md-4">
                <NavbarToggler onClick={this.toggleNav} />
                <Collapse isOpen={this.state.isNavOpen} navbar>
                  <Nav navbar>
                    <NavItem>
                      <NavLink
                        className="nav-link"
                        to="/home"
                        data-bs-toggle="tooltip"
                        data-bs-placement="bottom"
                        title="Home"
                      >
                        <i className="fa fa-home" />
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className="nav-link"
                        to="/portfolio"
                        data-bs-toggle="tooltip"
                        data-bs-placement="bottom"
                        title="Portfolio"
                      >
                        <i className="fa fa-th-large" />
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className="nav-link"
                        to="/services"
                        data-bs-toggle="tooltip"
                        data-bs-placement="bottom"
                        title="Services"
                      >
                        <i className="fa fa-info" />
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className="nav-link"
                        to="/contactus"
                        data-bs-toggle="tooltip"
                        data-bs-placement="bottom"
                        title="Contact Us"
                      >
                        <i className="fa fa-paper-plane" />
                      </NavLink>
                    </NavItem>
                  </Nav>
                </Collapse>
              </div>
            </div>
          </div>
          <div>
            <NavItem>
              <Button
                style={{ marginRight: "2.6rem" }}
                outline
                onClick={this.toggleModal}
              >
                Login
              </Button>
            </NavItem>
          </div>
        </Navbar>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>User Login</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.handleLogin}>
              <FormGroup>
                <Label htmlFor="username">Username</Label>
                <Input
                  type="text"
                  id="username"
                  name="username"
                  innerRef={(input) => (this.remember = input)}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="password">Password</Label>
                <Input
                  type="password"
                  id="password"
                  name="password"
                  innerRef={(input) => (this.password = input)}
                />
                Password
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input
                    type="checkbox"
                    name="remember"
                    innerRef={(input) => (this.remember = input)}
                  />
                  Remember Me
                </Label>
              </FormGroup>
              <Button type="submit" value="submit" color="primary">
                Login
              </Button>
            </Form>
          </ModalBody>
        </Modal>
        <Jumbotron fluid style={{margin: "1.5rem"}}>
          <div className="container">
            <div className="row">
              <div className="col">
                <h1>Northwest Restaurant Consultants</h1>
                <h2>Serving the Pacific Northwest for over 20 years</h2>
                <hr />
              </div>
            </div>
          </div>
        </Jumbotron>
      </React.Fragment>
    );
  }
}

export default Header;
