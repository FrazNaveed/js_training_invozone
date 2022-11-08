import React from "react";

export default class Counter extends React.Component {
  constructor(props) {
    console.log("constructor");
    super(props);
    this.state = {
      counter: 0,
    };
    this.increment = () => this.setState({ counter: this.state.counter + 1 });
    this.decrement = () => this.setState({ counter: this.state.counter - 1 });
  }

  componentDidMount(prevProps, prevState, snapshot) {
    console.log("component Did Mount");
    console.log("---------------------");
  }

  componentDidUpdate() {
    console.log("Component Did Update");
    console.log("---------------------");
  }

  componentWillUnmount() {
    console.log("Component Unmounted");
    console.log("---------------------");
  }
  render() {
    console.log("render");
    return (
      <div className="counter">
        <button onClick={this.increment}>increment</button>
        <button onClick={this.decrement}>decrement</button>
        <div>Counter:{this.state.counter}</div>
      </div>
    );
  }
}
