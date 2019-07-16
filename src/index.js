import React from "react";
import ReactDOM from "react-dom";

function formatName(user) {
  return user.firstName + " " + user.lastName;
}

function Welcome(props) {
    return <h1>Hello, {formatName(props)}</h1>;
  }

const user = {
  firstName: "Joe",
  lastName: "Bloggs"
};
function tick() {
  const element = (
    <div>
        {Welcome(user)}
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById("root"));
}

setInterval(tick, 1000);
