import Navigation from "./navigation";

const SESSION_KEY = "tr_session_key";
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

  clearStorage() {
    localStorage.removeItem(SESSION_KEY);
  }

  loadFromCache() {
    this.session = JSON.parse(localStorage.getItem(SESSION_KEY));
  }

  saveToCache(session) {
    localStorage.setItem(SESSION_KEY, JSON.stringify(session));
  }

  validatePath(positiveCallback) {
    const path = Navigation.pathname;

    if (!this.isAuthenticated && !notAuthenticatedPaths.includes(path)) {
      Navigation.toSignIn();
    } else {
      positiveCallback();
    }
  }

  get isAuthenticated() {
    return this.session !== null;
  }

  get username() {
    return this.session.email;
  }
}

export default new Session();
