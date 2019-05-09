import React, { Component } from "react"

class MarketDashboard extends Component {

  buyItem = item => {
    if (item === "seeds") {
      if(this.props.market.currentFarmer.budget > this.props.market.grassSeedPrice){
        this.props.market.currentFarmer.myFarm.seeds.total = Math.floor(this.props.market.currentFarmer.budget / this.props.market.grassSeedPrice)
        let amount = 100
        this.props.market.currentFarmer.budget -= amount * this.grassSeedPrice
      }
    }

    if(item === "solarPanel"){
      if(this.props.market.currentFarmer.budget > this.props.market.solarPanelPrice){
        this.props.market.currentFarmer.myFarm.solarPanels.total += 1
        let amount = 1
        this.props.market.currentFarmer.budget -= amount * this.props.market.solarPanelPrice
      }
    }

    if(item === "greenGas"){
      if(this.props.market.currentFarmer.budget > this.props.market.greenGasPrice){
        this.props.market.currentFarmer.myFarm.greenGas.total = Math.floor(this.props.market.currentFarmer.budget / this.props.market.greenGasPrice)
        let amount = Math.floor(this.props.market.currentFarmer.budget / this.props.market.greenGasPrice)
        this.props.market.currentFarmer.budget -= amount * this.props.market.greenGasPrice
      }
    }

    if(item === "sheep"){
      if(this.props.market.currentFarmer.budget > this.props.market.animal_sheepPrice){
        this.props.market.currentFarmer.myFarm.sheep.total += 1
        let amount = 1
        this.props.market.currentFarmer.myFarm.createSheep()
        this.props.market.currentFarmer.budget -= amount * this.props.market.animal_sheepPrice
      }
    }

    if(item === "cow"){
      if(this.props.market.currentFarmer.budget > this.props.market.animal_cowPrice){
        this.props.market.currentFarmer.myFarm.cows.total += 1
        let amount = 1
        this.props.market.currentFarmer.myFarm.createCow()
        this.props.market.currentFarmer.budget -= amount * this.props.market.animal_cowPrice
      }
    }

    if(item === "chicken"){
      if(this.props.market.currentFarmer.budget > this.props.market.animal_eggPrice){
        this.props.market.currentFarmer.myFarm.chickens.total += 1
        let amount = 1
        this.props.market.currentFarmer.myFarm.createChicken()
        this.props.market.currentFarmer.budget -= amount * this.props.market.animal_chickenPrice
      }
    }

    if(item === "straw"){
      if(this.props.market.currentFarmer.budget > this.props.market.food_strawPrice){
        this.props.market.currentFarmer.myFarm.straw.total += 10
        let amount = 1
        this.props.market.currentFarmer.budget -= amount * this.props.market.food_strawPrice
      }
    }

    if(item === "corn"){
      if(this.props.market.currentFarmer.budget > this.props.market.food_cornPrice){
        this.props.market.currentFarmer.myFarm.corn.total += 10
        let amount = 1
        this.props.market.currentFarmer.budget -= amount * this.props.market.food_cornPrice
      }
    }
    
  }

  sellItem = item => {
    if(item === "milk"){
        this.props.market.currentFarmer.budget += this.props.market.milkPrice * this.props.market.currentFarmer.myFarm.milk.total
        this.props.market.currentFarmer.myFarm.milk.total = 0
    }else if(item === "beef"){
        this.props.market.currentFarmer.budget += this.props.market.beefPrice * this.props.market.currentFarmer.myFarm.beef.total
        this.props.market.currentFarmer.myFarm.beef.total = 0
    }else if(item === "eggs"){
          this.props.market.currentFarmer.budget += this.props.market.eggPrice * this.props.market.currentFarmer.myFarm.eggs.total
          this.props.market.currentFarmer.myFarm.eggs.total = 0
    }else if(item === "wool"){
      this.props.market.currentFarmer.budget += this.props.market.woolPrice * this.props.market.currentFarmer.myFarm.wool.total
      this.props.market.currentFarmer.myFarm.wool.total = 0
    }else if(item === "chicken"){
      this.props.market.currentFarmer.budget += this.props.market.meat_chickenPrice * this.props.market.currentFarmer.myFarm.chicken.total
      this.props.market.currentFarmer.myFarm.wool.total = 0
    }else if(item === "lamb"){
      this.props.market.currentFarmer.budget += this.props.market.meat_lambPrice * this.props.market.currentFarmer.myFarm.lamb.total
      this.props.market.currentFarmer.myFarm.lamb.total = 0
    }
  }

  render() {
    return (
      <div className="MarketDashboard">
      <div className="HeadingCentreInformation">
        <h2>Market</h2>
        <p>Welcome to the market! See our prices below:</p>
        </div>
        <div  className="Market Tab">
            <button onClick={() => this.props.market.toggleTab()}>Buy</button>
            <button onClick={() => this.props.market.toggleTab()}>Sell</button>
        </div>
        <div className="MarketProducts">
        {this.props.market.currentMarketTab == 0 && (
          <div className="BuyInfomation">
          <h3>Buy</h3>
          {/* <dl> */}
          <div className="ButtonContainer">
            <div className="Item">
              <dt>Seeds</dt>
              <dd> Buy seeds for {this.props.market.grassSeedPrice}</dd>
                <button className="Button" onClick={() => this.buyItem("seeds")}>
                  Buy Seeds
                </button>
            </div>
            <div className="Item">
              <dt>Solar panels</dt>
              <dd>{this.props.market.solarPanelPrice} per unit</dd>
              <button className="Button" onClick={() => this.buyItem("solarPanel")}>
                Buy Solar Panel
              </button>
            </div>
            <div className="Item">
              <dt>Green gas</dt>
              <dd>{this.props.market.greenGasPrice} per unit</dd>
              <button className="Button" onClick={() => this.buyItem("greenGas")}>
                Buy Green Gas
              </button>
            </div>
            <div className="Item">
              <dt>Sheep</dt>
              <dd>{this.props.market.animal_sheepPrice} per sheep</dd>
              <button className="Button" onClick={() => this.buyItem("sheep")}>Buy Sheep</button>
            </div>
            <div className="Item">
              <dt>Cow</dt>
              <dd>{this.props.market.animal_cowPrice} per cow</dd>
              <button className="Button" onClick={() => this.buyItem("cow")}>Buy Cow</button>
            </div>
            <div className="Item">
              <dt>Chicken</dt>
              <dd>{this.props.market.animal_chickenPrice} per chicken</dd>
              <button className="Button" onClick={() => this.buyItem("chicken")}>Buy Chicken</button>
            </div>
            <div className="Item">
              <dt>Straw</dt>
              <dd>{this.props.market.food_strawPrice} per 10kg</dd>
              <button className="Button" onClick={() => this.buyItem("straw")}>Buy Straw</button>
            </div>
            <div className="Item">
              <dt>Corn</dt>
              <dd>{this.props.market.food_cornPrice} per 10kg</dd>
              <button className="Button" onClick={() => this.buyItem("corn")}>Buy Corn</button>
            </div>
          {/* </dl> */}
          </div>
          </div>
        )}

        {this.props.market.currentMarketTab == 1 && (
          <div className="SellInformation">
          <h3>Sell</h3>
          <dl>
            <div className="Item">
              <dt>Milk</dt>
              <dd>{this.props.market.milkPrice} per pint</dd>
              <button className="Button" onClick={() => this.sellItem("milk")}>Sell milk</button>
            </div>
            <div className="Item">
              <dt>Beef</dt>
              <dd>{this.props.market.beefPrice} per unit</dd>
              <button className="Button" onClick={() => this.sellItem("beef")}>Sell beef</button>
            </div>
            <div className="Item">
              <dt>Eggs</dt>
              <dd>{this.props.market.eggPrice} per unit</dd>
              <button className="Button" onClick={() => this.sellItem("eggs")}>Sell eggs</button>
            </div>
            <div className="Item">
              <dt>Wool</dt>
              <dd>{this.props.market.woolPrice} per unit</dd>
              <button className="Button" onClick={() => this.sellItem("wool")}>Sell wool</button>
            </div>
            <div className="Item">
              <dt>Chicken</dt>
              <dd>{this.props.market.meat_chickenPrice} per unit</dd>
              <button className="Button" onClick={() => this.sellItem("chicken")}>Sell chicken</button>
            </div>
            <div className="Item">
              <dt>Lamb</dt>
              <dd>{this.props.market.meat_lambPrice} per unit</dd>
              <button className="Button" onClick={() => this.sellItem("lamb")}>Sell lamb</button>
            </div>
          </dl>
          </div>
        )}
        </div>
      </div>
    )
  }
}

export default MarketDashboard
