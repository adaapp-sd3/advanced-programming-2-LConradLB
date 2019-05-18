import React, { Component } from "react"
import FieldType from "../../models/abstract/FieldType";

class FieldDashboard extends Component {

  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleContentChange = this.handleContentChange.bind(this);
  }

  milkCows = () => {
    for (var i=0; i<this.props.field.contents.length; i++) {
      this.props.field.contents[i].yieldMilk()
    }
  }

  yieldBeef = () => {
    //Have to start from the back of the list as we are setting the health to 0
    //then on each draw loop we are checking whether the health is less than or == 0
    //if true. Pop() from the array.
    //Can't start at front as the health would be 0 and it would pop from the end of the array
    //leaving you with 0 cows.
    let length = this.props.field.contents.length
    let midPoint = length/2
    let cows = this.props.field.contents[0].farm.cows
    for (var i=length-1; i>midPoint; i--) {
      cows.objects[i].yieldBeef()
    }
  }

  yieldLamb = () => {
    //Have to start from the back of the list as we are setting the health to 0
    //then on each draw loop we are checking whether the health is less than or == 0
    //if true. Pop() from the array.
    //Can't start at front as the health would be 0 and it would pop from the end of the array
    //leaving you with 0 cows.
    let length = this.props.field.contents.length
    let midPoint = length/2
    let sheep = this.props.field.contents[0].farm.sheep
    for (var i=length-1; i>midPoint; i--) {
      sheep.objects[i].yieldLamb()
    }
  }

  yieldChicken = () => {
    //Have to start from the back of the list as we are setting the health to 0
    //then on each draw loop we are checking whether the health is less than or == 0
    //if true. Pop() from the array.
    //Can't start at front as the health would be 0 and it would pop from the end of the array
    //leaving you with 0 cows.
    let length = this.props.field.contents.length
    let midPoint = length/2
    let chickens = this.props.field.contents[0].farm.chickens
    for (var i=length-1; i>midPoint; i--) {
      chickens.objects[i].yieldChicken()
    }
  }

  shearSheep = () => {
    for (var i=0; i<this.props.field.contents.length; i++) {
      this.props.field.contents[i].yieldWool()
    }
  }

  collectEggs = () => {
    for (var i=0; i<this.props.field.contents.length; i++) {
      this.props.field.contents[i].yieldEgg()
    }
  }

  handleChange(event) {
    this.props.field.type = event.target.value
    this.props.field.changeMadeToField()
  }

  handleContentChange(event) {
    this.props.field.changeContentOfField(event.target.value)
  }

  render() {
    return (
      <div className="FieldDashboard">
        <h2>Field</h2>
        <p>Field Type: {this.props.field.type} <br/></p>
        <select value={this.props.field.type} onChange={this.handleChange}>
            <option value={FieldType.Grazing}>Grazing</option>
            <option value={FieldType.Infrastructure}>Infrastructure</option>
            <option value={FieldType.Planting}>Planting</option>
        </select>

        <p>Field Content: {this.props.field.contentType} <br/></p>
        <select value={this.props.field.contentType} onChange={this.handleContentChange}>
            <option value="Cows">Cows</option>
            <option value="Chicken">Chicken</option>
            <option value="Sheep">Sheep</option>
            <option value="SolarPanel">Solar Panel</option>
        </select>
        {this.props.field.contents[0] && (
          <p>
            In this field you have {this.props.field.contents.length}{" "}
            {this.props.field.contents[0].name}s

            {this.props.field.contents[0].name === "Cow" && (
              <div>
                <button className="Button" onClick={this.milkCows}>Milk them</button>
                <button className="Button" onClick={this.yieldBeef}>Get beef from half of the cows</button>
              </div>
            )}

            {this.props.field.contents[0].name === "Sheep" && (
              <div>
                <button className="Button" onClick={this.shearSheep}>Shear them</button>
                <button className="Button" onClick={this.yieldLamb}>Get lamb from half of the sheep</button>
              </div>
            )}

            {this.props.field.contents[0].name === "Chicken" && (
              <div>
                <button className="Button" onClick={this.collectEggs}>Harvest eggs</button>
                <button className="Button" onClick={this.yieldChicken}>Get chicken from half of the chickens</button>
              </div>
            )}
          </p>
          
        )}
        
        {this.props.field.contents.map((item, i) => (
          <>
            {item.showUI && (
              <div className="fieldItem">
                <h3><img src={item.imgUrl} alt={item.name} /> {item.name}</h3>
                <dl>
                  <dt>Hunger</dt><dd>{item.hunger}</dd>
                </dl>
              </div>
            )}
          </>
        ))}
      </div>
    )
  }
}

export default FieldDashboard
