export const LOAD_CURRENT_USER = 'LOAD_CURRENT_USER';
export const CURRENT_USER_LOADED = 'CURRENT_USER_LOADED';
export const CURRENT_USER_FAILED_TO_LOAD = 'CURRENT_USER_FAILED_TO_LOAD';

export const LOAD_ACCOUNTS = 'LOAD_ACCOUNTS';
export const ACCOUNTS_LOADED = 'ACCOUNTS_LOADED';
export const ACCOUNTS_FAILED_TO_LOAD = 'ACCOUNTS_FAILED_TO_LOAD';
export const CLEAR_ACCOUNTS = 'CLEAR_ACCOUNTS';

export const UPDATE_ACCOUNT_DRAFT = 'UPDATE_ACCOUNT_DRAFT';
export const CREATE_ACCOUNT = 'CREATE_ACCOUNT';
export const ACCOUNT_CREATED = 'ACCOUNT_CREATED';
export const ACCOUNT_FAILED_TO_CREATE = 'ACCOUNT_FAILED_TO_CREATE';

export const UPDATE_LOGIN_DRAFT = 'UPDATE_LOGIN_DRAFT';
export const LOGIN = 'LOGIN';
export const LOGIN_SUCCEEDED = 'LOGIN_SUCCEEDED';
export const LOGIN_FAILED = 'LOGIN_FAILED';

export const UPDATE_REGISTRATION_DRAFT = 'UPDATE_REGISTRATION_DRAFT';
export const REGISTER = 'REGISTER';
export const REGISTRATION_SUCCEEDED = 'REGISTRATION_SUCCEEDED';
export const REGISTRATION_FAILED = 'REGISTRATION_FAILED';

export const loadCurrentUser = () => ({
  type: LOAD_CURRENT_USER,
});

export const loadAccounts = (force = false) => ({
  type: LOAD_ACCOUNTS,
  payload: {force},
});
//   axios
//     .get('/accounts')
//     .then((res) => {
//       console.log(res);
//       dispatch({
//         type: ACCOUNTS_LOADED,
//         payload: {
//           hasNext: res.data.hasNext,
//           list: res.data.accounts,
//         },
//       });
//     })
//     .catch((err) => {
//       console.log(err);
//       console.log(err.response);
//     });
// };

export const updateAccountDraft = (key, value) => ({
  type: UPDATE_ACCOUNT_DRAFT,
  payload: {[key]: value},
});

export const createNewAccount = (values) => ({
  type: CREATE_ACCOUNT,
});
//   axios
//     .post('/accounts', values)
//     .then((res) => {
//       console.log(res);
//     })
//     .catch((error) => {
//       console.log(error);
//       console.log(error.response);
//     });
// };

export const updateLoginDraft = (key, value) => ({
  type: UPDATE_LOGIN_DRAFT,
  payload: {[key]: value},
});

export const login = () => ({
  type: LOGIN,
});

export const updateRegistrationDraft = (key, value) => ({
  type: UPDATE_REGISTRATION_DRAFT,
  payload: {[key]: value},
});

export const register = () => ({
  type: REGISTER,
});
