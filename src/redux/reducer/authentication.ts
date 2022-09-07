export const currentUserAuth = (
  state = {
    user: {},
    loading: true,
  },
  action: any,
) => {
  switch (action.type) {
    case 'SET_USER_AUTH': {
      return {...state, ...action.user, loading: false};
    }
    case 'CLEAR_USER_AUTH': {
      return {};
    }
    default:
      return state;
  }
};
