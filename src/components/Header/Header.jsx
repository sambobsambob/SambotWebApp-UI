import React, { PureComponent } from "react";
import AuthService from "../../components/Auth/Auth.jsx";
import "./Header.css";


class Header extends PureComponent {

    constructor() {
        super();
        this.auth = new AuthService();
        this.state = {
            username: this.auth.getUsername,
        }
        console.log(this.state.username);
        this.onLogout = this.onLogout.bind(this);
    }

    onLogout() {
        this.auth.logout();
        this.props.history.replace("/Home");
    }

    render() {
        return (
            <header>
                <ul>
                    <li className="navigate"><a  className="active" href="/">Home</a></li>
                    <li className="navigate"><a href="TwitchBot">TwitchBot</a></li>
                    <li className="navigate"><a href="DiscordBot">DiscordBot</a></li>
                    <li className="navigate"><a href="about.asp">About</a></li>
                    <li className="navigate"><a href="SignUp">SignUp</a></li>
                    <li className="navigate"><a href="Login">Login</a></li>
                    <button onClick={this.onLogout}>Logout</button>
                </ul>
            </header>
        );
    }
}

export default Header;