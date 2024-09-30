export const Increment = () => async (dispatch) => {
  dispatch({
    type: "INCREMENT",
  });
};

export const Decrement = () => async (dispatch) => {
  dispatch({
    type: "DECREMENT",
  });
};
