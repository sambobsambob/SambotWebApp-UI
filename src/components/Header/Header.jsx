import React, { PureComponent } from "react";
import AuthService from "../../components/Auth/Auth.jsx";
import "./Header.css";


class Header extends PureComponent {

    constructor() {
        super();
        this.auth = new AuthService();
        this.onLogout = this.onLogout.bind(this);
        console.log(window.sessionStorage.getItem("username"));
    }

    async componentDidMount() {
        try {
            document.getElementById(this.props.page).style.backgroundColor = "#232323";
        } catch{}
        const loggedIn = await this.auth.isTokenValid();
        if(loggedIn) {
            console.log("logged in");
            document.getElementById("signUp").style.display = "none";
            document.getElementById("login").style.display = "none";
        } else {
            document.getElementById("logout").style.display = "none";
            document.getElementById("username").style.display = "none";
        }
    }

    onLogout() {
        this.auth.logout();
        window.location.replace("/");
    }

    render() {
        return (
            <header>
                <ul>
                    <li id="home" className="navigate"><a href="/">Home</a></li>
                    <li id="twitchBot" className="navigate"><a href="TwitchBot">TwitchBot</a></li>
                    <li id="discordBot" className="navigate"><a href="DiscordBot">DiscordBot</a></li>
                    <li id="signUp" className="account-management"><a href="SignUp">SignUp</a></li>
                    <li id="login" className="account-management"><a href="Login">Login</a></li>
                    
                    <div className="dropdown">
                        <li id="username" className="account-management"><span>{window.sessionStorage.getItem("username")}</span></li>
                        <div className="dropdown-content">
                            <button id="logout" onClick={this.onLogout}>Logout</button>
                        </div>
                    </div>
                </ul>
            </header>
        );
    }
}

export default Header;