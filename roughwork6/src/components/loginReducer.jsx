const initialState = {
  userName: "",
  message: "",
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_USER":
      return { ...state, userName: action.payload.userName };

    case "UPDATE_MESSAGE":
      return { ...state, message: action.payload.message };
    default:
      return { ...state };
  }
};
