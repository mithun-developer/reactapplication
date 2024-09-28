import React from "react";
import { useSelector } from "react-redux";

function Home() {
  const { username } = useSelector((state) => state.app);
  return (
    <div>
      <h5>Welcome {username} ,</h5>
      <img src="./App/pics/11-04-2019 07-20-39.jpeg"></img>
    </div>
  );
}

export default Home;
