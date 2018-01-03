export const AppActionTypes = {
  INCREMENT: '',
  DECREMENT: '',
};

for (const key in AppActionTypes) {
  AppActionTypes[key] = key;
}
Object.freeze(AppActionTypes);
