import Session from "./session";

const ENDPOINT =
  process.env.NODE_ENV === "development" ? "http://localhost:4000" : "";
const API_VERSION = "/api/";

export default class Connection {
  static query(method, path, payload = null, authRequired = false) {
    return fetch([ENDPOINT, API_VERSION, path].join(""), {
      body: payload ? JSON.stringify(payload) : null,
      method: method,
      headers: authRequired
        ? {
            Authorization: `Bearer: ${Session.session.jwt}`
          }
        : {}
    });
  }
}
