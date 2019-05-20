import React, { Component } from 'react';

class FarmerDashboard extends Component {

  hideUI = () => {
    this.props.farmer.showUI = !this.props.farmer.showUI
  }

  render() {
    return (
      <div className="FarmerDashboard">
        <dl>
          <dt>Current budget</dt><dd>{this.props.farmer.budget}</dd>
          {this.props.farmer.myFarm && (<>
            <dt>Total cows</dt><dd>{this.props.farmer.myFarm.cows.total}</dd>
            <dt>Total sheep</dt><dd>{this.props.farmer.myFarm.sheep.total}</dd>
            <dt>Total chickens</dt><dd>{this.props.farmer.myFarm.chickens.total}</dd>
            <dt>Total Solar Panels</dt><dd>{this.props.farmer.myFarm.solarPanels.total}</dd>
            </>
            
          )}
          
          {this.props.farmer.myFarm && (<>
            <dt>Total Straw</dt><dd>{this.props.farmer.myFarm.straw.total} bails</dd>
            <dt>Total Corn</dt><dd>{this.props.farmer.myFarm.corn.total} kgs</dd>
            <dt>Total milk</dt><dd>{this.props.farmer.myFarm.milk.total} pints</dd>
            <dt>Total seeds</dt><dd>{this.props.farmer.myFarm.seeds.total} bunches</dd>
            <dt>Total Eggs</dt><dd>{this.props.farmer.myFarm.eggs.total} eggs</dd>
            <dt>Total Wool</dt><dd>{this.props.farmer.myFarm.wool.total} kg</dd>

            <dt>Total Beef</dt><dd>{this.props.farmer.myFarm.beef.total} kg</dd>
            <dt>Total Lamb</dt><dd>{this.props.farmer.myFarm.lamb.total} kg</dd>
            <dt>Total Chicken</dt><dd>{this.props.farmer.myFarm.chicken.total} kg</dd>

            </>
          )}
        </dl>
        <button onClick={this.hideUI}>Hide UI</button>
      </div>
    )
  }
}

export default FarmerDashboard;