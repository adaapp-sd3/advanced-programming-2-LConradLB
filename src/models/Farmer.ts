import Drawable from "./abstract/Drawable"
import Farm from "./Farm"
import Market from "./Market"
import FieldType from "./abstract/FieldType";

class Farmer extends Drawable {
  myFarm!: Farm
  localMarket!: Market
  budget: number = 1000
  showUI: boolean = true
  currentLocation: any
  imgUrl = "/img/farmer.png"
  constructor() {
    super()
    this.x = 100
    this.y = 100
    this.width = 72
    this.height = 72
  }

  public preload() {
    this.p5Img = this.p5.loadImage(this.imgUrl)
  }

  public keyPressed() {
    if (this.p5.keyCode === this.p5.ENTER) {
      this.showUI = true
    }
  }

  private update() {
    if (this.p5.keyIsDown(this.p5.RIGHT_ARROW)) {
      this.x = this.x + 3
    }
    if (this.p5.keyIsDown(this.p5.LEFT_ARROW)) {
      this.x = this.x - 3
    }
    if (this.p5.keyIsDown(this.p5.DOWN_ARROW)) {
      this.y = this.y + 3
    }
    if (this.p5.keyIsDown(this.p5.UP_ARROW)) {
      this.y = this.y - 3
    }
  }

  set farmerCurrentLocation(location: any) {
    this.currentLocation = location
  }

  private getCurrentLocation() {
    for (let field of this.myFarm.fields) {
      if (field.containsPoint(this.x + this.height, this.y + this.width)) {
        this.farmerCurrentLocation = field
        field.farmerPresent = true
        if(field.type === FieldType.Infrastructure){
            if(this.myFarm.solarPanels.totalBought > 0){
              field.placeInfrastructure(this.x, this.y, "solar panel")
              this.myFarm.solarPanels.totalBought -= 1
            }
        }
        if(field.type === FieldType.Planting){
          if(this.myFarm.seeds.total > 0){
            field.plant(this.x, this.y)
            this.myFarm.seeds.total -= 1
          }
      }
      } else {
        field.farmerPresent = false
      }
    }

    if (this.localMarket.containsPoint(this.x + this.height, this.y + this.width)) {
      this.farmerCurrentLocation = this.localMarket
      this.localMarket.farmerPresent = true
    } else {
      this.localMarket.farmerPresent = false
    }

    if (this.currentLocation && this.currentLocation.contents) {
      for (var item of this.currentLocation.contents) {
        if (item.containsPoint(this.x + this.height, this.y + this.width)) {
          item.farmerPresent = true
        } else {
          item.farmerPresent = false
        }
      }
    }
  }

  public draw() {
    this.update()
    this.getCurrentLocation()
    var bobAmount = Math.sin(this.p5.millis() / 60) * 3
    let that = this
    this.updateUI({ farmer: that })
    this.p5.image(
      this.p5Img,
      this.x,
      this.y + bobAmount,
      this.width,
      this.height
    )
  }

  set farm(farm: Farm) {
    this.myFarm = farm
  }

  set market(market: Market) {
    this.localMarket = market
  }
}

export default Farmer
