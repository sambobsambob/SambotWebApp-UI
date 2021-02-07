import React, {PureComponent} from "react";
import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import "./SignUp.css";

class SignUp extends PureComponent {

    constructor() {
        super();
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

    async handleFormSubmit(event) {
        event.preventDefault();
        const username = this.state.username;
        const email = this.state.email;
        const password = this.state.password;
        const confirmPassword = this.state.confirmPassword;
        if (!username || !email || !password) {
            this.setState({
                error: "You are missing details!"
            });
        } else if (password !== confirmPassword) {
            this.setState({
                error: "Passwords do not match!"
            });
        } else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!"£'@#~$%^&*)(+=._-]{8,}$/.test(password)) {
            console.log(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!"£'@#~$%^&*)(+=._-]{8,}$/.test(password));
            this.setState({
                error: "Password must be 8 or more characters and must at least contain 1 uppercase, 1 lowercase, 1 number and 1 speacial character"
            });
        } else {
            try {
                const requestOptions = {
                    method: "POST",
                    headers: {"content-type": "application/json"},
                    body: JSON.stringify({  username: username,
                                            email: email,
                                            password:password})
                };
                const fetchResult = fetch("http://localhost:8117/signUp", requestOptions);
                const response = await fetchResult;
                if (response.status === 200) {
                    this.props.history.replace("/Login");
                } else {
                    this.setState({
                        error: "Username or Email already in use"
                    });
                }
            } catch(e) {
                this.setState({
                    error: "An unknown error has occured"
                });
            }
        }
    }

    invalidInfo(error) {
        this.setState({
            error: error
        });
    }

    render() {
        return (
            <div className="parent">
                <Header page="signUp"/>
                <div className="body">
                    <form onSubmit={this.handleFormSubmit}>
                        <p className="sign-up-error">{this.state.error}</p>
                        <input autoComplete="off" placeholder="Username" name="username" type="text" onChange={this.handleChange}/><br/>
                        <input placeholder="Email" name="email" type="text" onChange={this.handleChange}/><br/>
                        <input autoComplete="off" placeholder="Password" name="password" type="password" onChange={this.handleChange}/><br/>
                        <input autoComplete="off" placeholder="Confirm Password" name="confirmPassword" type="password" onChange={this.handleChange}/><br/>
                        <input id="loginBtn" value="LOGIN" type="submit"/>
                    </form>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default SignUp;