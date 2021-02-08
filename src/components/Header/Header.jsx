import React, { PureComponent } from "react";
import AuthService from "../../components/Auth/Auth.jsx";
import "./Header.css";


class Header extends PureComponent {

    constructor() {
        super();
        this.auth = new AuthService();
        this.state = {
            loggedIn: true
        };
        this.onLogout = this.onLogout.bind(this);
        console.log(window.sessionStorage.getItem("username"));
    }

    async componentDidMount() {
        this.setState({loggedIn: await this.auth.isTokenValid()});
        try {
            document.getElementById(this.props.page).style.backgroundColor = "#232323";
        } catch{} 
    }

    onLogout() {
        this.auth.logout();
        window.location.replace("/");
    }

    render() {
        let signUp;
        let login;
        let accountManagement
        if(this.state.loggedIn) {
            accountManagement = <div className="dropdown">
                                    <li id="username" className="account-management"><span>{window.sessionStorage.getItem("username")}</span></li>
                                    <div className="dropdown-content">
                                        <button id="logout" onClick={this.onLogout}>Logout</button>
                                    </div>
                                </div>;
        } else {
            signUp = <li id="signUp" className="account-management"><a href="SignUp">SignUp</a></li>;
            login = <li id="login" className="account-management"><a href="Login">Login</a></li>;
            
        }
        return (
            <header>
                <ul>
                    <li id="home" className="navigate"><a href="/">Home</a></li>
                    <li id="twitchBot" className="navigate"><a href="TwitchBot">TwitchBot</a></li>
                    <li id="discordBot" className="navigate"><a href="DiscordBot">DiscordBot</a></li>
                    {signUp}
                    {login}
                    {accountManagement}
                </ul>
            </header>
        );
    }
}

export default Header;