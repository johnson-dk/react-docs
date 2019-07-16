import React from "react";
import ReactDOM from "react-dom";

function formatName(user) {
  return user.firstName + " " + user.lastName;
}

const user = {
  firstName: "Joe",
  lastName: "Bloggs"
};
function tick() {
  const element = (
    <div>
      <h1>Hello, {formatName(user)}!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById("root"));
}

setInterval(tick, 1000);
