import Drawable from "./abstract/Drawable"
import Farmer from './Farmer';

class Market extends Drawable {
  imgUrl = "/img/twtr/1f3e2.png"
  currentFarmer!: Farmer
  currentMarketTab: MarketTab = MarketTab.Buy

  greenGasDemand: number = 100
  milkDemand: number = 75
  beefDemand: number = 75

  milkPrice: number = 1
  beefPrice: number = 25
  greenGasPrice: number = 10
  eggPrice: number = 2
  woolPrice: number = 30
  solarPanelPrice: number = 10000
  grassSeedPrice: number = 1

  animal_chickenPrice: number = 20
  animal_sheepPrice: number = 40
  animal_cowPrice: number = 60

  food_cornPrice: number = 10
  food_strawPrice: number = 10

  meat_chickenPrice: number = 3
  meat_lambPrice: number = 7



  constructor() {
    super()
    this.x = 600
    this.y = 500
    this.width = 60
    this.height = 60
  }

  set farmer(farmer: Farmer) {
    this.currentFarmer = farmer
  }

  public preload() {
    this.p5Img = this.p5.loadImage(this.imgUrl)
  }

  public draw() {
    this.p5.image(this.p5Img, this.x, this.y, this.width, this.height)
  }

  public toggleTab(){
    if (this.currentMarketTab == MarketTab.Buy){
      this.currentMarketTab = MarketTab.Sell
    }else{
      this.currentMarketTab = MarketTab.Buy
    }
  }
}

enum MarketTab{
  Buy,
  Sell
}

export default Market
