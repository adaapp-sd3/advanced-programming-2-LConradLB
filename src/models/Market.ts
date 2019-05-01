import Drawable from "./abstract/Drawable"
import Farmer from './Farmer';

class Market extends Drawable {
  imgUrl = "/img/twtr/1f3e2.png"
  currentFarmer!: Farmer
  
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
}

export default Market
