import Drawable from "./abstract/Drawable"
import { type } from "os";
import Animal from "./abstract/Animal";
import Cow from "./animals/Cow";
import FieldType from "./abstract/FieldType";
import Infrastructure from "./abstract/Infrastructure";
import { instanceOf } from "prop-types";
import Farm from "./Farm";
import SolarPanel from "./abstract/Infrastructure";

class Field extends Drawable {
  image: any
  contents: any[]
  fillColour: string = ""
  type: FieldType = FieldType.Grazing
  farm: Farm
  contentType: string

  constructor(
    xPos: number,
    yPos: number,
    w: number,
    h: number,
    initalContents: any[] = [],
    fillColour: string = "#b58969",
    type: FieldType = FieldType.Grazing,
    farm: Farm,
    contentType: string
  ) {
    super()
    this.width = w
    this.height = h
    this.x = xPos
    this.y = yPos
    this.contents = initalContents
    this.fillColour = fillColour
    this.type = type
    this.farm = farm
    this.contentType = contentType
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

    this.contents.forEach((item, index) => {
      item.draw()
      if(item.fieldX == null || item.fieldY == null){
        item.setRandomPositionInField(this.x, this.y, this.width, this.height)
      }
    })
  }

  filterField(func: Function){
    this.contents.forEach((item, index) => {
      if (this.type == FieldType.Grazing){
        if(!(item instanceof Animal)){
          this.contents[index] = null
        }
      }

      if (this.type == FieldType.Infrastructure){
        if(!(item instanceof SolarPanel)){
          this.contents[index] = null
        }
      }

    })

    var filtered = this.contents.filter(function (el) {
      return el != null;
    });

    this.contents = []
    func()
    
  }

  changeMadeToField(){
    if(this.contents.length > 0){
      let contentType = this.contents[0].genus
      let contentLength = this.contents.length
      let strongSelf = this
      this.filterField(function() {
        strongSelf.wipeField(contentLength, contentType)
      })
    }
  }

  changeContentOfField(newContent: string){
    let oldContentType = this.contentType 
    this.contentType = newContent
    let oldContentLength = this.contents.length

    this.contents.forEach((item, index) => {
    
        if(item.genus != this.contentType){
          this.contents[index] = null
        }
      
    })

    var filtered = this.contents.filter(function (el) {
      return el != null;
    });

    this.contents = filtered

    this.wipeField(oldContentLength, oldContentType)
    

  }
  
  wipeField(contentLength: number, contentType: string){
    let oldContent = contentType
    let strongSelf = this
    let newFilteredArray = []
    switch(oldContent){
      case "Cows": 
      this.farm.cows.total = this.farm.cows.total - contentLength;
      newFilteredArray = this.farm.cows.objects.filter(function(el: Cow) {
        if(el == null) {return} 
        return !((el.x > strongSelf.x && el.x > strongSelf.x + strongSelf.width) && (el.y > strongSelf.y && el.y > strongSelf.y + strongSelf.height))
      })
      this.farm.cows.objects = newFilteredArray

      return

      case "Chicken": 
      this.farm.chickens.total = this.farm.chickens.total - contentLength;
      
      newFilteredArray = this.farm.chickens.objects.filter(function(el: Drawable) {
        if(el == null) {return} 
        return !((el.x > strongSelf.x && el.x > strongSelf.x + strongSelf.width) && (el.y > strongSelf.y && el.y > strongSelf.y + strongSelf.height))
      })
      this.farm.chickens.objects = newFilteredArray
      return

      case "Sheep": 
      this.farm.sheep.total = this.farm.sheep.total - contentLength;
      
      newFilteredArray = this.farm.sheep.objects.filter(function(el: Drawable) {
        if(el == null) {return} 
        return !((el.x > strongSelf.x && el.x > strongSelf.x + strongSelf.width) && (el.y > strongSelf.y && el.y > strongSelf.y + strongSelf.height))
      })
      this.farm.sheep.objects =  newFilteredArray
      return

      case "Infrastructure": 
      this.farm.solarPanels.total = this.farm.solarPanels.total - contentLength;
      
      newFilteredArray =this.farm.solarPanels.objects.filter(function(el: Drawable) {
        if(el == null) {return} 
        return !((el.x > strongSelf.x && el.x > strongSelf.x + strongSelf.width) && (el.y > strongSelf.y && el.y > strongSelf.y + strongSelf.height))
      })
      this.farm.solarPanels.objects = newFilteredArray
      return

      case "Plant": 
      this.farm.solarPanels.total = this.farm.solarPanels.total - contentLength;
      
      newFilteredArray =this.farm.solarPanels.objects.filter(function(el: Drawable) {
        if(el == null) {return} 
        return !((el.x > strongSelf.x && el.x > strongSelf.x + strongSelf.width) && (el.y > strongSelf.y && el.y > strongSelf.y + strongSelf.height))
      })
      this.farm.solarPanels.objects = newFilteredArray
      return
    }
  }

  plant(x: number, y: number) {
    this.farm.createPlant()
  }

  placeInfrastructure(x: number, y: number, name: string){
      this.farm.createInfrastructure()
  }
}

export default Field
