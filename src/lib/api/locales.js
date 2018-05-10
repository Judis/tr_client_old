import Connection from "../connection";

const LOCALES_URL = "projects/:project_id/locales";
const LOCALE_IS_REQUIRED = "Locale Name is required";

export default class LocalesAPI {
  static load(project_id) {
    return new Promise((resolve, reject) => {
      Connection.get(this.url(project_id))
        .then(json => {
          resolve(json.data);
        })
        .catch(errors => {
          reject(errors);
        });
    });
  }

  static add(locale, project_id) {
    const args = {
      locale
    };

    return new Promise((resolve, reject) => {
      this.validate(args)
        .then(() =>
          this.create(args, project_id)
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

  static remove(localeId, projectId) {
    return new Promise((resolve, reject) => {
      Connection.delete(`${this.url(projectId)}/${localeId}`)
        .then(json => {
          resolve(json.data);
        })
        .catch(errors => {
          reject(errors);
        });
    });
  }

  static create(args, project_id) {
    return new Promise((resolve, reject) => {
      Connection.post(this.url(project_id), {
        locale: args
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

  static url(project_id) {
    return LOCALES_URL.replace(':project_id', project_id);
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

  static __validate_locale(args, errors) {
    errors.locale = [];

    if (!args.locale || args.locale.length === 0) {
      errors.locale.push(LOCALE_IS_REQUIRED);
    }

    return errors.locale.length === 0;
  }
}
