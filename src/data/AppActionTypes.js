export const AppActionTypes = {
  CHANGE_ROUTE: '',
  INCREMENT: '',
  DECREMENT: '',

  UPDATE_REGISTRATION_USER_NAME: '',
  UPDATE_REGISTRATION_EMAIL: '',
  UPDATE_REGISTRATION_PASSWORD: '',

  UPDATE_LOGIN_EMAIL: '',
  UPDATE_LOGIN_PASSWORD: '',

  REGISTER: '',

  LOGIN_SUCCEEDED: '',
  REGISTRATION_SUCCEEDED: '',

  SET_CURRENT_USER: '',
};

for (const key in AppActionTypes) {
  AppActionTypes[key] = key;
}
Object.freeze(AppActionTypes);
