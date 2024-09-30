import React, { useState } from "react";

import { connect } from "react-redux";
import { useDispatch, useSelector } from "react-redux";

import { Increment } from "./components/actions";
import { Decrement } from "./components/actions";
import { updateMessage, updateUser } from "./components/loginAction";

function App({ local_variable, Increment, Decrement }) {
  const dispatch = useDispatch();
  const { userName, message } = useSelector((state) => state.login);
  const [name, setName] = useState("");
  const [msg, setMsg] = useState("");

  const handleUpdateUser = () => {
    dispatch(updateUser(name));
  };

  const handleUpdateMessage = () => {
    dispatch(updateMessage(msg));
  };

  console.log("----", userName);
  return (
    <div className="App">
      <center>
        {local_variable}
        <br />
        <button onClick={Increment}>Increment</button>
        <button onClick={Decrement}>Decrement</button>
      </center>
      <div>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>{" "}
        <button name="updateUserName" onClick={handleUpdateUser}>
          Update User
        </button>
      </div>
      <div>{userName}</div>
      <div>
        <input
          type="text"
          name="message"
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
        ></input>
        <button name="updateUserMsg" onClick={handleUpdateMessage}>
          Update Message
        </button>
      </div>
      <div>{message}</div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  local_variable: state.app,
});
export default connect(mapStateToProps, { Increment, Decrement })(App);
