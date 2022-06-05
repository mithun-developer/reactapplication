const initialstate = {
  username: "",
};

export const loginreducer = (state = initialstate, action) => {
  switch (action.type) {
    case "GET_USER":
      return { ...state, username: action.payload.username };
    default:
      return { state };
  }
};
