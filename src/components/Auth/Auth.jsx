class AuthService {

    constructor() {
        this.login = this.login.bind(this);
        this.getUsername = this.getUsername.bind(this);
    }

    async login(username, password) {
        window.sessionStorage.setItem("username", username);
        try {
            const requestOptions = {
                method: "POST",
                headers: {"content-type": "application/json"},
                body: JSON.stringify({  username: username,
                                        password:password})
            };
            const fetchResult = fetch("http://localhost:8117/authenticate", requestOptions);
            const response = await fetchResult;
            try {
                const tokenJSON = await response.json();
                this.setToken(tokenJSON.token);
            } catch(e) {}
            return response;
        } catch(e) {}
    }

    setToken(token) {
        window.sessionStorage.setItem("Auth-Token", token);
    }

    async isTokenValid() {
        try {
            const requestOptions = {
                method: "POST",
                headers: {"content-type": "application/json"},
                body: JSON.stringify(this.getToken())
            };
            const fetchResult = fetch("http://localhost:8117/isValidToken", requestOptions);
            const response = await fetchResult;
            if (response.status === 200) {
                return true;
            } else {
                return false;
            }
        } catch(e) {
            return false;
        }
    }

    getToken() {
        return window.sessionStorage.getItem("Auth-Token");
    }

    logout() {
        window.sessionStorage.removeItem("Auth-Token");
        window.sessionStorage.removeItem("username");
    }

    getUsername() {
        return window.sessionStorage.getItem("username");
    }
}

export default AuthService;