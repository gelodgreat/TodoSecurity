export const currentAuthentication = user => {
  return dispatch => {
    dispatch({
      type: 'SET_USER_AUTH',
      user,
    });
  };
};

export const clearCurrentUserAuth = () => {
  return dispatch => {
    dispatch({
      type: 'CLEAR_USER_AUTH',
      user: {},
    });
  };
};
