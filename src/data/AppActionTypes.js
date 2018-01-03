export const AppActionTypes = {
  CHANGE_ROUTE: '',
  INCREMENT: '',
  DECREMENT: '',
};

for (const key in AppActionTypes) {
  AppActionTypes[key] = key;
}
Object.freeze(AppActionTypes);
