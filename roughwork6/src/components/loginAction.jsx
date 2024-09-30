export const updateUser = (userName) => {
  return {
    type: "UPDATE_USER",
    payload: { userName },
  };
};

export const updateMessage = (message) => {
  return {
    type: "UPDATE_MESSAGE",
    payload: { message },
  };
};

// export const updateUsers = () => async (dispatch) => {
//   dispatch({
//     type: "UPDATE_USERS",
//     payload: { userName },
//   });
// };

const updatemessage = () => async (dispatch) => {};
