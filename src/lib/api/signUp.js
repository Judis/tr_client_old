import Connection from "../connection";
import AuthenticationAPI from "./authentication";

function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function validatePassword(password) {
  const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).*/;
  return re.test(String(password));
}

const SIGN_UP_URL = "sign_up";
const MIN_PASSWORD_LENGTH = 8;
const EMAIL_IS_INVALID = "Email is invalid";
const EMAIL_IS_REQUIRED = "Email is required";
const PASSWORD_IS_REQUIRED = "Password is required";
const PASSWORD_IS_INVALID = "Password is invalid";
const PASSWORD_IS_TOO_SHORT = `Password is too short. Minimum is ${MIN_PASSWORD_LENGTH} symbols`;
const PASSWORDCONFIRMATION_IS_REQUIRED = "Password Confirmation is required";
const PASSWORDCONFIRMATION_IS_NOT_EQUAL =
  "Password Confirmation is not equal to Password";

export default class SignUpAPI {
  static do(email, password, passwordConfirmation) {
    const args = {
      email,
      password,
      passwordConfirmation
    };

    return new Promise((resolve, reject) => {
      this.validate(args)
        .then(() =>
          this.register(args)
            .then(response =>
              AuthenticationAPI.saveSessionAndRedirect(response.data)
            )
            .catch(errors => {
              reject(errors);
            })
        )
        .catch(errors => reject(errors));
    });
  }

  static validate(args) {
    return new Promise((resolve, reject) => {
      let errors = {};
      const isValid = Object.keys(args)
        .map(key => this[`__validate_${key}`](args, errors))
        .reduce((acc, value) => acc && value, true);

      if (isValid) {
        resolve();
      } else {
        reject(errors);
      }
    });
  }

  static register(args) {
    return new Promise((resolve, reject) => {
      Connection.post(SIGN_UP_URL, {
        user: {
          email: args.email,
          password: args.password,
          password_confirmation: args.passwordConfirmation
        }
      })
        .then(response => {
          if (response.errors) {
            reject(response.errors);
          } else {
            resolve(response);
          }
        })
        .catch(response => {
          reject(response.errors);
        });
    });
  }

  static __validate_email(args, errors) {
    errors.email = [];

    if (!args.email || args.email.length === 0) {
      errors.email.push(EMAIL_IS_REQUIRED);
    }

    if (!validateEmail(args.email)) {
      errors.email.push(EMAIL_IS_INVALID);
    }

    return errors.email.length === 0;
  }

  static __validate_password(args, errors) {
    errors.password = [];

    if (!args.password) {
      errors.password.push(PASSWORD_IS_REQUIRED);
    }

    if (args.password && args.password.length < MIN_PASSWORD_LENGTH) {
      errors.password.push(PASSWORD_IS_TOO_SHORT);
    }

    if (!validatePassword(args.password)) {
      errors.password.push(PASSWORD_IS_INVALID);
    }

    return errors.password.length === 0;
  }

  static __validate_passwordConfirmation(args, errors) {
    errors.passwordConfirmation = [];

    if (!args.passwordConfirmation) {
      errors.passwordConfirmation.push(PASSWORDCONFIRMATION_IS_REQUIRED);
    }

    if (
      args.password &&
      args.passwordConfirmation &&
      args.password !== args.passwordConfirmation
    ) {
      errors.passwordConfirmation.push(PASSWORDCONFIRMATION_IS_NOT_EQUAL);
    }

    return errors.passwordConfirmation.length === 0;
  }
}
