class Auth {
    constructor() {
        this.authenticated = false;
    }

    loging(cb) {
        this.authenticated = true;
        cb();
    }
    logout(cb) {
        this.authenticated = false;
        cb();
    }

    isAuthenticated() {
        return this.authenticated;
    }
}

export default new Auth();