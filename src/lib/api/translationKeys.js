import Connection from "../connection";

const TRANSLATION_KEYS_URL = "projects/:project_id/translation_keys";
const KEY_IS_REQUIRED = "Translation Key is required";

export default class TranslationKeyAPI {
  static load(projectId) {
    return new Promise((resolve, reject) => {
      Connection.get(this.url(projectId))
        .then(json => {
          resolve(json.data);
        })
        .catch(errors => {
          reject(errors);
        });
    });
  }

  static loadWithTranslations(projectId, localeId) {
    return new Promise((resolve, reject) => {
      Connection.get(
        `projects/${projectId}/locales/${localeId}/keys_and_translations`
      )
        .then(json => {
          resolve(json.data);
        })
        .catch(errors => {
          reject(errors);
        });
    });
  }

  static add(key, default_value, context, project_id) {
    const args = {
      key,
      default_value,
      context
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

  static url(project_id) {
    return TRANSLATION_KEYS_URL.replace(":project_id", project_id);
  }

  static validate(args) {
    return new Promise((resolve, reject) => {
      let errors = {};
      const isValid = Object.keys(args)
        .map(key => this[`__validate_${key}`] ? this[`__validate_${key}`](args, errors) : true)
        .reduce((acc, value) => acc && value, true);

      if (isValid) {
        resolve();
      } else {
        reject(errors);
      }
    });
  }

  static __validate_key(args, errors) {
    errors.key = [];

    if (!args.key || args.key.length === 0) {
      errors.key.push(KEY_IS_REQUIRED);
    }

    return errors.key.length === 0;
  }
}
