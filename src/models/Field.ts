import Drawable from "./abstract/Drawable"
import { type } from "os";
import Animal from "./abstract/Animal";
import FieldType from "./abstract/FieldType";
import Infrastructure from "./abstract/Infrastructure";
import { instanceOf } from "prop-types";

class Field extends Drawable {
  image: any
  contents: any[]
  fillColour: string = ""
  type: FieldType = FieldType.Grazing

  constructor(
    xPos: number,
    yPos: number,
    w: number,
    h: number,
    initalContents: any[] = [],
    fillColour: string = "#b58969",
    type: FieldType = FieldType.Grazing
  ) {
    super()
    this.width = w
    this.height = h
    this.x = xPos
    this.y = yPos
    this.contents = initalContents
    this.fillColour = fillColour
    this.type = type
  }

  public draw() {

    //In JS, to my knowledge you can't pass an empty value and have it default to one.
    //So this does that if the colour is null.
    if(this.fillColour == ""){
      this.fillColour = "#b58969"
    }

    this.p5.stroke("#7c4011")
    this.p5.strokeWeight(10)
    this.p5.fill(this.fillColour)
    this.p5.rect(this.x, this.y, this.width, this.height, 10)

    //garbage Collection - remove anything that doesn't below on the field.
    // let weakSelf = this
    // var filtered = this.contents.filter(function(item, index, arr){
    //   if(weakSelf.type == FieldType.Grazing){
    //     // return item.instanceOf(Animal)
    //   }

    //   if(weakSelf.type == FieldType.Planting){
    //     // return item instanceof Animal
    //   }

    //   if(weakSelf.type == FieldType.Infrastructure){
    //     return item instanceof Infrastructure
    //   }
    // });

    // this.contents = filtered

    this.contents.forEach((item, index) => {
      item.draw()
    })
  }

  plant(x: number, y: number) {
    console.log("new plant")
    // Get the crop name from the field name
    // var cropName = this.name.split(" ") // => e.g. "Wheat"
    // // Add a new crop to the field's list of crops
    // this.crops.push(new Crop(cropName[0], this, x, y))
  }

  placeInfrastructure(x: number, y: number, name: string){
      let inf = new Infrastructure(name)
      inf.p5 = this.p5
      inf.preload()
      inf.setRandomPositionInField(this.x, this.y, this.width, this.height)
      this.contents.push(inf)
  }
}

export default Field
