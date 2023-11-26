import React from "react";

// This class is now a React component.
class Counter extends React.Component {
  // The constructor method is called when an instance of the component is created
  constructor(props) {
    super(props);
    this.state = { count: 5 };
    this.handleDecrement = this.handleDecrement.bind(this); //otherwise handleDecrement will loose binding with "this"
    this.handleIncrement = this.handleIncrement.bind(this);
  }

  handleDecrement() {
    this.setState((currState) => {
      return { count: currState.count - 1 };
    });
    // this.setState({ count: 0 });
    // this.setState(...)
  }

  handleIncrement() {
    this.setState((currState) => {
      return { count: currState.count + 1 };
    });
    // this.setState({ count: 0 });
    // this.setState(...)
  }
  // The render method is required in every React component.
  //  It defines what will be rendered to the DOM when the component is rendered
  //equivalent to function body of functional comp
  render() {
    const date = new Date("june 21 2027");
    date.setDate(date.getDate() + this.state.count);
    return (
      <div>
        <button onClick={this.handleDecrement}>-</button>
        <span>
          {date.toDateString()}[{this.state.count}]
        </span>
        <button onClick={this.handleIncrement}>+</button>
      </div>
    );
  }
}

export default Counter;
