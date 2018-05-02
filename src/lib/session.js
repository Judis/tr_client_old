const SESSION_KEY = "tr_session_key";
const SIGN_IN_PATH = "/sign_in";
const AUTHENTICATED_PATH = "/";
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
    // Fake logic going here
    // TODO: Implement server request to receive JWT session
    let self = this;
    return new Promise(function(resolve, reject) {
      setTimeout(() => {
        self.saveToCache(new Date().getTime());
        window.location.href = AUTHENTICATED_PATH;
        resolve();
      }, 2500);
    });
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
