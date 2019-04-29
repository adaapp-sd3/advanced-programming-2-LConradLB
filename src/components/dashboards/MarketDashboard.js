import React, { Component } from "react"

class MarketDashboard extends Component {

  buyItem = item => {
    if (item === "seeds") {
      this.props.market.currentFarmer.myFarm.seeds.total =
        this.props.market.currentFarmer.budget *
        this.props.market.grassSeedPrice
      console.log(this.props.market.currentFarmer.myFarm.seeds)
      this.props.market.currentFarmer.budget = 0
    }
  }

  sellItem = item => {
    if(item === "milk"){
      this.props.market.currentFarmer.myFarm.milk.total -= 1
        this.props.market.currentFarmer.budget += this.props.market.milkPrice
    } 
  }

  render() {
    return (
      <div className="MarketDashboard">
        <h2>Market</h2>
        <p>Welcome to the market! See our prices below:</p>
        <h3>Buy</h3>
        <dl>
          <dt>Seeds</dt>
          <dd>
            <button onClick={() => this.buyItem("seeds")}>
              Buy seeds for {this.props.market.grassSeedPrice}
            </button>
          </dd>
          <dt>Solar panels</dt>
          <dd>{this.props.market.solarPanelPrice} per unit</dd>
          <dt>Green gas</dt>
          <dd>{this.props.market.greenGasPrice} per unit</dd>
        </dl>
        <h3>Sell</h3>
        <dl>
          <dt>Milk</dt>
          <dd>{this.props.market.milkPrice} per pint</dd>
          <button onClick={() => this.sellItem("milk")}>Sell milk</button>
          <dt>Beef</dt>
          <dd>{this.props.market.beefPrice} per unit</dd>
          <button onClick={() => this.sellItem("beef")}>Sell beef</button>
        </dl>
      </div>
    )
  }
}

export default MarketDashboard
