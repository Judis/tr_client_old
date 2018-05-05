import Connection from "./connection";
import Navigation from "./navigation";
import Session from "./session";

const AUTH_URL = "sign_in";
const INDEX_PATH = "/";
const SUCCESS_STATUS = "ok";

export default function authentication(email, password) {
  return new Promise((resolve, reject) => {
    Connection.post(AUTH_URL, {
      session: {
        email: email,
        password: password
      }
    })
      .then(json => {
        if (json.status === SUCCESS_STATUS) {
          Session.saveToCache(json.data);
          resolve();
          Navigation.to(INDEX_PATH);
        } else {
          reject(json);
        }
      })
      .catch(error => {
        reject(error);
      });
  });
}
