import Session from "./session";

const API_VERSION = "/api/";

export default class Connection {
  static query(method, path, payload = null) {
    return fetch([API_VERSION, path].join(""), {
      body: payload ? JSON.stringify(payload) : null,
      method: method,
      headers: Session.session && Session.session.token
        ? {
            Authorization: `Bearer: ${Session.session.token}`,
            "Content-Type": "application/json"
          }
        : {
            "Content-Type": "application/json"
          }
    });
  }

  static post(path, payload = null) {
    return this.query("POST", path, payload);
  }

  static get(path, payload = null) {
    return this.query("GET", path, payload);
  }
}
