import React, {PureComponent} from "react";
import AuthService from "./Auth.jsx";

export default function withAuth(AuthComponent) {

    const auth = new AuthService();

    return class AuthWrapped extends PureComponent {
        constructor() {
            super();
            this.state = {
                loaded: false
            }
            this.componentDidMount = this.componentDidMount.bind(this);
        }
        
        componentDidMount() {
            this.verifyToken();
            this.timerID = setInterval( () => {
                this.expiryCheck()
            }, 30000)
        }

        componentWillUnmount() {
            clearInterval(this.timerID);
        }

        async expiryCheck() {
            const loggedIn = await auth.isTokenValid();
            if (!loggedIn) {
                auth.logout();
                this.props.history.replace("/Login");
            }
        }

        async verifyToken() {
            const loggedIn = await auth.isTokenValid();
            if (!loggedIn) {
                auth.logout();
                this.props.history.replace("/Login");
            } else {
                this.setState({loaded: true});
            }
        }

        render() {
            if (this.state.loaded) {
                return (<AuthComponent history={this.props.history}/>);
            } else {
                return null;
            }
        }
    }
}