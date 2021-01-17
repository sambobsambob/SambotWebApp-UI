import React, {PureComponent} from "react";
import AuthService from "../../components/Auth/Auth.jsx";

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
            error: ""
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
        })

    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleFormSubmit}>
                    <input placeholder="Username" name="username" type="text" onChange={this.handleChange}/>
                    <input placeholder="Password" name="password" type="password" onChange={this.handleChange}/>
                    <input id="loginBtn" value="LOGIN" type="submit"/>
                </form>
            </div>
        )
    }
}

export default Login;