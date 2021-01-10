import React, { PureComponent } from "react";
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


class Header extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            username: "sambobsambob"
        }
    }

    render() {
        return (
            <div>
                <Navbar variant="dark" expand="lg">
                <Navbar.Brand href="#home">Sambot's Website</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Twitch Bot</Nav.Link>
                    <Nav.Link href="#link2">Discord Bot</Nav.Link>
                    </Nav>
                    <Nav>
                        <NavDropdown id="user" title={this.state.username} class="text-white">
                            <NavDropdown.Item href="#action/3.1">Account</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">Log out</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

export default Header;