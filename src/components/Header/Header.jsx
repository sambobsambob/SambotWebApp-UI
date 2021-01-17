import React, { PureComponent } from "react";
import "./Header.css";


class Header extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            username: "sambobsambob",
        }
    }

    render() {
        return (
            <header>
                <ul>
                    <li className="navigate"><a  className="active" href="/">Home</a></li>
                    <li className="navigate"><a href="TwitchBot">TwitchBot</a></li>
                    <li className="navigate"><a href="DiscordBot">DiscordBot</a></li>
                    <li className="navigate"><a href="about.asp">About</a></li>
                    <li className="navigate"><a href="Register">Register</a></li>
                    <li className="navigate"><a href="Login">Login</a></li>
                    
                </ul>
                
            </header>
        );
    }
}

export default Header;