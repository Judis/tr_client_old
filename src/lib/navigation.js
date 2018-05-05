const SIGN_IN_URL = "/sign_in";

export default class Navigation {
  static to(url) {
    window.location.href = url;
  }

  static toSignIn() {
    this.to(SIGN_IN_URL);
  }

  static get pathname() {
    return window.location.pathname;
  }
}