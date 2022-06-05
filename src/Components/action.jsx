export const getuser = (username) => async (dispatch) => {
  dispatch({
    type: "GET_USER",
    payload: { username },
  });
};
