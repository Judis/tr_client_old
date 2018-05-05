import Session from "./session";
import Navigation from "./navigation";

export default function logout() {
  Session.clearStorage();
  Navigation.toSignIn();
}