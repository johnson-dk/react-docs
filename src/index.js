import React from "react";
import ReactDOM from "react-dom";

function formatName(user) {
  return user.firstName + " " + user.lastName;
}

class Welcome extends React.Component {
  render() {
    return <h1>Hello, {formatName(this.props.user)}</h1>;
  }
}

class FormattedDate extends React.Component {
  render() {
    return this.props.date.toLocaleTimeString();
  }
}

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return <h2>It is <FormattedDate date={this.state.date}/>.</h2>;
  }
}

const user = {
  firstName: "Joe",
  lastName: "Bloggs"
};

const element = (
  <div>
    <Welcome user={user} />
    <Clock />
  </div>

);
ReactDOM.render(element, document.getElementById("root"));
