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

      if(item instanceof Infrastructure){
        
      }
    })

    //garbage Collection - remove anything that doesn't below on the field.
    // let weakSelf = this
    // var filtered = this.contents.filter(function(item, index, arr){
    //   if(weakSelf.type == FieldType.Grazing){
    //     return (item instanceof Animal) 
    //   }else if(weakSelf.type == FieldType.Planting){
    //     // return item instanceof Animal
    //   }else if(weakSelf.type == FieldType.Infrastructure){
    //     return item instanceof Infrastructure
    //   }
    // });

    // this.contents = filtered
  }

  filterField(func: Function){
    this.contents.forEach((item, index) => {
      if (this.type == FieldType.Grazing){
        if(!(item instanceof Animal) /*|| !(item.genus == this.contentType)*/){
          this.contents[index] = null
        }
      }

      if (this.type == FieldType.Infrastructure){
        if(!(item instanceof SolarPanel) /*|| !(item.genus == this.contentType) */){
          this.contents[index] = null
        }
      }

      // if (this.type == FieldType.Grazing){
      //   if(!(item instanceof Animal)){
      //     this.contents[index] = null
      //   }
      // }
    })

    var filtered = this.contents.filter(function (el) {
      return el != null;
    });

    this.contents = filtered
    func()
    
  }

  changeMadeToField(){
    if(this.contents.length > 0){
      let contentType = this.contents[0].genus
      let strongSelf = this
      this.filterField(function() {
        switch(contentType){
          case "Cows": 
          strongSelf.farm.cows.total = strongSelf.contents.length;
          strongSelf.farm.cows.objects = strongSelf.contents;
          return

          case "Chicken": 
          strongSelf.farm.chickens.total = strongSelf.contents.length;
          strongSelf.farm.chickens.objects = strongSelf.contents;
          return

          case "Sheep": 
          strongSelf.farm.sheep.total = strongSelf.contents.length;
          strongSelf.farm.sheep.objects = strongSelf.contents;
          return

          case "Infrastructure": 
          strongSelf.farm.solarPanels.total = strongSelf.contents.length;
          strongSelf.farm.solarPanels.objects = strongSelf.contents;
          return
        }
      })
    }
  }

  changeContentOfField(newContent: string){
    let oldContent = this.contentType
    this.contentType = newContent

    this.contents.forEach((item, index) => {
    
        if(item.genus != this.contentType){
          this.contents[index] = null
        }
      
    })

    var filtered = this.contents.filter(function (el) {
      return el != null;
    });

    let strongSelf = this
    switch(oldContent){
      case "Cows": 
      this.farm.cows.total = this.farm.cows.total - this.contents.length;
      this.farm.cows.objects = this.farm.cows.objects.filter(function(el) {
        return !((el.xPos > strongSelf.x && el.xPos > strongSelf.x + strongSelf.width) && (el.yPos > strongSelf.y && el.yPos > strongSelf.y + strongSelf.height))
      })
      return

      case "Chicken": 
      this.farm.chickens.total = this.farm.chickens.total - this.contents.length;
      this.farm.chickens.objects = this.farm.chickens.objects.filter(function(el) {
        return !((el.xPos > strongSelf.x && el.xPos > strongSelf.x + strongSelf.width) && (el.yPos > strongSelf.y && el.yPos > strongSelf.y + strongSelf.height))
      })
      return

      case "Sheep": 
      this.farm.sheep.total = this.farm.sheep.total - this.contents.length;
      this.farm.sheep.objects = this.farm.sheep.objects.filter(function(el) {
        return !((el.xPos > strongSelf.x && el.xPos > strongSelf.x + strongSelf.width) && (el.yPos > strongSelf.y && el.yPos > strongSelf.y + strongSelf.height))
      })
      return

      case "Infrastructure": 
      this.farm.solarPanels.total = this.farm.solarPanels.total - this.contents.length;
      this.farm.solarPanels.objects = this.farm.solarPanels.objects.filter(function(el) {
        return !((el.xPos > strongSelf.x && el.xPos > strongSelf.x + strongSelf.width) && (el.yPos > strongSelf.y && el.yPos > strongSelf.y + strongSelf.height))
      })
      return
    }

    this.contents = filtered

    

  }

  plant(x: number, y: number) {
    console.log("new plant")
    // Get the crop name from the field name
    // var cropName = this.name.split(" ") // => e.g. "Wheat"
    // // Add a new crop to the field's list of crops
    // this.crops.push(new Crop(cropName[0], this, x, y))
  }

  placeInfrastructure(x: number, y: number, name: string){
      this.farm.createInfrastructure()
  }
}

export default Field
