import React from "react";
import Counter from "./components/Counter";
import CounterFunctional from "./components/CounterFunctional";
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mount: true,
    };

    this.mountCounter = () => this.setState({ mount: true });
    this.unmountCounter = () => this.setState({ mount: false });
    this.consoleThis = () => {
      console.log("this", this);
    };
  }
  render() {
    return (
      <div>
        <button onClick={this.mountCounter} disabled={this.state.mount}>
          Mount Counter
        </button>
        <button onClick={this.unmountCounter} disabled={!this.state.mount}>
          Unmount Counter
        </button>
        <button onClick={this.consoleThis}>this</button>
        {this.state.mount ? <Counter /> : null}
        <CounterFunctional />
      </div>
    );
  }
}
