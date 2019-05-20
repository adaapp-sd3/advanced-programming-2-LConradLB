import React, { Component } from "react"
import FarmManager from "./components/FarmManager"
import "./App.css"
import p5 from "p5"
import makeFarm from "./p5Setup"
import Farm from "./models/Farm"
import Farmer from "./models/Farmer"
import Market from "./models/Market"
import * as util from 'util'
const JSON = require('circular-json');
let request = require('request');

var saveFlag =  false

class App extends Component {
  

  // all instances live on the state
  state = {
    farmer: new Farmer(),
    farm: new Farm(),
    market: new Market(),
    showWeatherIcon: Boolean = false
  }

  // allow instances to to tell us when they change
  handleUpdateState = newThing => {
    
    if(saveFlag){
      // this.setState(JSON.parse(localStorage.getItem("farmState")))
      let state = JSON.parse(localStorage.getItem("farmState"))
      console.log("Saved", JSON.parse(localStorage.getItem("farmState")))
      saveFlag = false
      console.log(this.state)
      let sketch = makeFarm(
        state.farm,
        state.farmer,
        state.market,
        this.handleUpdateState
      )
      this.setState({
        myP5: new p5(sketch, "sketch")
      })
    }else{this.setState(newThing)}
  }

  saveGame(){
    if(this){
      let jsonFarm = JSON.stringify(this.state)
      console.log("SAVE")
      // for(var key in this.state.farm) {
      //   var value = this.state.farm[key];
      //   console.log(key ,value)
      // }
      localStorage.setItem('farmState', jsonFarm);
    }
    // saveFlag = true
  }

  loadGame(){
    // let farmState = localStorage.getItem('farmState')
    // if(farmState){
    //   console.log("attempting set state", farmState)
    //   this.state.farm = JSON.parse(farmState)
    // }
    console.log("Attempting to load", localStorage.getItem("farmState"))
    console.log(typeof JSON.parse(localStorage.getItem("farmState")))
    saveFlag = true
    // this.handleUpdateState(JSON.parse(localStorage.getItem("farmState")))
  }

  componentDidMount() {
    
    let sketch = makeFarm(
      this.state.farm,
      this.state.farmer,
      this.state.market,
      this.handleUpdateState
    )
    this.setState({
      myP5: new p5(sketch, "sketch")
    })
    this.queryWeather()
    // console.log("SESSION STORAGE", localStorage.getItem('farmState'))
    // if(localStorage.getItem('farmState')){
    //   console.log("attempting set state")
    //   this.state.farm = JSON.parse(localStorage.getItem('farmState'))
    // }

  }

  queryWeather() {
    let url = "http://api.openweathermap.org/data/2.5/weather?q=London&APPID=09a601738f81bf9c20b9fb5b5d380123"
    let strongSelf = this
    request(url, function (err, response, body) {
      if(err){
        console.log('error:', err);
      } else {
        let imageElement = strongSelf.refs.WeatherIcon
        let json = JSON.parse(body)

        strongSelf.setState({imgSrc: "http://openweathermap.org/img/w/" + json.weather[0].icon + ".png"})
        strongSelf.setState({ value : (Math.round(json.main.temp - 273.15) + "°C", json.weather[0].main) })
        strongSelf.setState({showWeatherIcon: true})
      }
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>
            <img src="/img/farmer.png" className="App-logo" alt="logo" />{" "}
            Dashboard
          </h2>
          <button className="Button" onClick={this.saveGame.bind(this)}>Save Game</button>
          <button className="Button" onClick={this.loadGame.bind(this)}>Load Game</button>
          <div className="Weather">
            <h3 ref="WeatherTemp">{this.state && this.state.value}</h3>
            {this.state.showWeatherIcon && <img ref="WeatherIcon" alt="Weather" src={this.state.imgSrc}></img>}
          </div>
        </header>
        <FarmManager farmer={this.state.farmer} farm={this.state.farm} market={this.state.market} />
      </div>
    )
  }
}

export default App
