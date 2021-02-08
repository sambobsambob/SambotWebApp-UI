class AuthService {

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

    logout() {
        window.sessionStorage.removeItem("Auth-Token");
        window.sessionStorage.removeItem("username");
    }

    async isTokenValid() {
        try {
            let token = this.getToken();
            if(token == null) {
                token = "null";
            }
            const requestOptions = {
                method: "POST",
                headers: {"content-type": "application/json"},
                body: JSON.stringify(token)
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

    getUsername() {
        return window.sessionStorage.getItem("username");
    }

    setToken(token) {
        window.sessionStorage.setItem("Auth-Token", token);
    }

    getToken() {
        return window.sessionStorage.getItem("Auth-Token");
    }
}

export default AuthService;