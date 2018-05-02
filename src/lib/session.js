import Connection from "./connection";
const SESSION_KEY = "tr_session_key";
const SIGN_IN_PATH = "/sign_in";
const INDEX_PATH = "/";
const notAuthenticatedPaths = [
  "/sign_in",
  "/sign_up",
  "/password_recovery",
  "/reset_password"
];
let instance = null;

class Session {
  constructor() {
    if (!instance) {
      instance = this;
    }

    this.loadFromCache();

    return instance;
  }

  authenticate(email, password) {
    return Connection.query("POST", "sign_in", {
      "session": {
        "email": email,
        "password": password
      }
    }).then(response => {
      console.log(response);
    });
  }

  logout() {
    localStorage.clear();
    window.location.href = SIGN_IN_PATH;
  }

  loadFromCache() {
    this.session = localStorage.getItem(SESSION_KEY);
  }

  saveToCache(session) {
    localStorage.setItem(SESSION_KEY, session);
  }

  validatePath(positiveCallback) {
    const path = window.location.pathname;

    if (!this.isAuthenticated && !notAuthenticatedPaths.includes(path)) {
      window.location.href = SIGN_IN_PATH;
    } else {
      positiveCallback();
    }
  }

  get isAuthenticated() {
    return this.session !== null;
  }
}

export default new Session();
