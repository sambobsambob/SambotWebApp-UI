import React, {PureComponent} from "react";
import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer.jsx";

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
                        error: "Username or Email already exists"
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
                <Header/>
                <div className="body">
                    <form onSubmit={this.handleFormSubmit}>
                        <p>{this.state.error}</p>
                        <input placeholder="Username" name="username" type="text" onChange={this.handleChange}/><br/>
                        <input placeholder="Email" name="email" type="text" onChange={this.handleChange}/><br/>
                        <input placeholder="Password" name="password" type="password" onChange={this.handleChange}/><br/>
                        <input placeholder="Confirm Password" name="confirmPassword" type="password" onChange={this.handleChange}/><br/>
                        <input id="loginBtn" value="LOGIN" type="submit"/>
                    </form>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default SignUp;