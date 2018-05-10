import Connection from "../connection";

const PROJECT_URL = "projects";
const NAME_IS_REQUIRED = "Project Name is required";
const DEFAULT_LOCALE_IS_REQUIRED = "Default Locale is required";

export default class ProjectsAPI {
  static load() {
    return new Promise((resolve, reject) => {
      Connection.get(PROJECT_URL)
        .then(json => {
          resolve(json.data);
        })
        .catch(errors => {
          reject(errors);
        });
    });
  }

  static add(name, default_locale) {
    const args = {
      name,
      default_locale
    };

    return new Promise((resolve, reject) => {
      this.validate(args)
        .then(() =>
          this.create(args)
            .then(response => {
              resolve(response);
            })
            .catch(errors => {
              reject(errors);
            })
        )
        .catch(errors => reject(errors));
    });
  }

  static remove(projectId) {
    return new Promise((resolve, reject) => {
      Connection.delete(`${PROJECT_URL}/${projectId}`)
        .then(json => {
          resolve(json.data);
        })
        .catch(errors => {
          reject(errors);
        });
    });
  }

  static create(args) {
    return new Promise((resolve, reject) => {
      Connection.post(PROJECT_URL, {
        project: args
      })
        .then(json => {
          if (json.data && json.data.id) {
            resolve(json.data);
          } else {
            reject(json.errors);
          }
        })
        .catch(error => {
          reject(error);
        });
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

  static __validate_name(args, errors) {
    errors.name = [];

    if (!args.name || args.name.length === 0) {
      errors.name.push(NAME_IS_REQUIRED);
    }

    return errors.name.length === 0;
  }

  static __validate_default_locale(args, errors) {
    errors.default_locale = [];

    if (!args.default_locale || args.default_locale.length === 0) {
      errors.default_locale.push(DEFAULT_LOCALE_IS_REQUIRED);
    }

    return errors.default_locale.length === 0;
  }
}
