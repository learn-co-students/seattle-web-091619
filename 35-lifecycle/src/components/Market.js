import React, { Component } from "react";

class Market extends Component {
  constructor() {
    console.log("%cMARKET CONSTrUCTED", "color:red;")
    super();
    this.state = {
      marketTrend: 0
    };
  }

  changeMarket = () => {
    this.setState(prevState => {
      let change = Math.random().toFixed(2) * 5;
      if (Math.random() > 0.5) {
        change *= -1;
      }
      return {
        marketTrend: (
          parseFloat(prevState.marketTrend) + parseFloat(change)
        ).toFixed(2)
      };
    });
  };

  timer;

  componentWillMount() {
    this.timer = setInterval(this.props.onRunTimer, 1000)
  }

  componentWillUnmount() {
    console.log("%cUNMOUNTING", "color:orange;")
    clearInterval(this.timer)
  }

  render() {
    return (
      <div
        className={`container ${
          this.state.marketTrend >= 0 ? "positive" : "negative"
        }`}
      >
        <h2 onClick={this.changeMarket}>STOCK TICKER</h2>
        <h5>
          Stocks are {this.state.marketTrend >= 0 ? "rising" : "dropping"} by{" "}
          {this.state.marketTrend}%
        </h5>
      </div>
    );
  }
}

export default Market;
