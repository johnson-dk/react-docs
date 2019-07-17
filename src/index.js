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
    return (
      <h2>
        It is <FormattedDate date={this.state.date} />.
      </h2>
    );
  }
}

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    )
  }
}

const user = {
  firstName: "Joe",
  lastName: "Bloggs"
};

function activateLasers() {
  console.log("fire those lazors");
}

function ActionLink() {
  function handleClick(e) {
    e.preventDefault();
    console.log("The link was clicked.");
  }

  return (
    <a href="#" onClick={handleClick}>
      Click me
    </a>
  );
}

const element = (
  <div>
    <Welcome user={user} />
    <Clock />
    <ActionLink />
    <button onClick={activateLasers}>Activate Lasers</button>
    <Toggle />
  </div>
);
ReactDOM.render(element, document.getElementById("root"));
