import Connection from "../connection";

const TRANSLATION_URL = "projects/:project_id/locales/:locale_id/translations";
const KEY_IS_REQUIRED = "Translation Key is required";

export default class TranslationsAPI {
  static save(id, translation_key_id, value, project_id, locale_id) {
    const args = {
      translation_key_id,
      value
    };

    return new Promise((resolve, reject) => {
      this.validate(args)
        .then(() => {
          if (id) {
            this.update(id, translation_key_id, value, project_id, locale_id)
              .then(response => {
                resolve(response);
              })
              .catch(errors => {
                reject(errors);
              });
          } else {
            this.create(translation_key_id, value, project_id, locale_id)
              .then(response => {
                resolve(response);
              })
              .catch(errors => {
                reject(errors);
              });
          }
        })
        .catch(errors => reject(errors));
    });
  }

  static create(translation_key_id, value, project_id, locale_id) {
    return Connection.post(
      this.url(project_id, locale_id),
      {
        "translation": {
          "translation_key_id": translation_key_id,
          "value": value
        }
      }
    );
  }

  static update(id, translation_key_id, value, project_id, locale_id) {
    return Connection.put(
      `${this.url(project_id, locale_id)}/${id}`,
      {
        "translation": {
          "translation_key_id": translation_key_id,
          "value": value
        }
      }
    )
  }

  static url(project_id, locale_id) {
    return TRANSLATION_URL
             .replace(":project_id", project_id)
             .replace(":locale_id", locale_id);
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
