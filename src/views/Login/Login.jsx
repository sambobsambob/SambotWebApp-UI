import React, {PureComponent} from "react";
import AuthService from "../../components/Auth/Auth.jsx";
import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer.jsx";

class Login extends PureComponent {

    constructor() {
        super();
        this.auth = new AuthService();
        this.state = {
            error: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
            error: "",
            errorShown: "none"
        });
    }

    handleFormSubmit(event) {
        event.preventDefault();
        const username = this.state.username;
        const password = this.state.password;
        if (!username || !password) {
            this.setState({
                error: "Username or Password is empty!"
            });
        } else {
            this.auth.login(username, password)
                .then(Response => {
                    try {
                        if (Response.status === 200) {
                            this.props.history.replace("/DiscordBot");
                        } else {
                            this.unauthorized("Invalid Credentials");
                        }
                    } catch(e) {
                        this.unauthorized("An unknown error has occured");
                    }
                });
        }
    }

    unauthorized(error) {
        this.setState({
            error: error
        });
    }

    render() {
        return (
            <div className="parent">
                <Header/>
                <div className="body">
                    <form onSubmit={this.handleFormSubmit}>
                        <p>{this.state.error}</p>
                        <input placeholder="Username" name="username" type="text" onChange={this.handleChange}/><br/>
                        <input placeholder="Password" name="password" type="password" onChange={this.handleChange}/><br/>
                        <input id="loginBtn" value="LOGIN" type="submit"/>
                    </form>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Login;