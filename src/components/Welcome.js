import React from "react";
function Welcome(props) {
  return (
    <div>
      <h2>Welcome to react Learning,{props.name}</h2>
      <p>This is your first custom component</p>
    </div>
  );
}
export default Welcome;
