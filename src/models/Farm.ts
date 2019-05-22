import Drawable from "./abstract/Drawable"
import Field from "./Field"
import Cow from "./animals/Cow"
import Sheep from "./animals/Sheep"
import Chicken from "./animals/Chicken"
import FieldType from "./abstract/FieldType";
import SolarPanel from "./abstract/Infrastructure";
import Plant from "./abstract/Plant";
class Farm extends Drawable {
  fields: Field[] = []
  width: number = 700
  height: number = 710
  cows: any
  sheep: any
  chickens: any
  straw: any
  corn: any
  milk: any
  wool: any
  eggs: any
  lamb: any
  beef: any
  chicken: any
  seeds: any
  solarPanels: any
  greenGas: any
  plants: any
  constructor(
    cows: any = {
      name: "Cows",
      total: 142,
      objects: []
    },
    sheep: any = {
      name: "Sheep",
      total: 42,
      objects: []
    },
    chickens: any = {
      name: "Chickens",
      total: 42,
      objects: []
    },
    straw: any = {
      name: "Straw",
      total: 1000,
      unit: "bails"
    },
    corn: any = {
      name: "Corn",
      total: 1000,
      unit: "kg"
    },
    milk: any = {
      name: "Milk",
      total: 0,
      unit: "pints"
    },
    wool: any = {
      name: "Wool",
      total: 0,
      unit: "kg"
    },
    eggs: any = {
      name: "Eggs",
      total: 0,
      unit: "eggs"
    },
    lamb: any = {
      name: "Lamb",
      total: 0,
      unit: "kg"
    },
    beef: any = {
      name: "Beef",
      total: 0,
      unit: "kg"
    },
    chicken: any = {
      name: "Chicken",
      total: 0,
      unit: "kg"
    },
    seeds: any = {
      name: "Grass seeds",
      total: 0,
      unit: "bunches"
    },
    solarPanels: any = {
      name: "SolarPanels",
      total: 0,
      totalBought: 0,
      unit: "units",
      objects: []
    },
    greenGas: any = {
      name: "Green Gas",
      total: 0,
      unit: "litres"
    },
    plants: any = {
      name: "Plant",
      total: 0,
      unit: "plants",
      objects: []
    }
  ) {
    super()
    this.cows = cows
    this.sheep = sheep
    this.chickens = chickens
    this.straw = straw
    this.milk = milk
    this.corn = corn
    this.wool = wool
    this.eggs = eggs
    this.seeds = seeds
    this.lamb = lamb
    this.beef = beef
    this.chicken = chicken
    this.solarPanels = solarPanels
    this.greenGas = greenGas
    this.plants = plants
  }

  public preload() {
    this.createBasicFarm()
  }

  createSheep(setup:boolean){
    let sheep = new Sheep(this)
    sheep.p5 = this.p5
    sheep.preload()
    if(!setup){
      let field = this.findFieldForType("Sheep")
      if(field == null){ alert("Need a field for sheep"); return }
      field.contents.push(sheep)
      this.sheep.total += 1
    }
    this.sheep.objects.push(sheep)
  }

  createCow(setup:boolean){
    let cow = new Cow(this)
      cow.p5 = this.p5
      cow.preload()
      if(!setup){
        let field = this.findFieldForType("Cows")
        if(field == null){ alert("Need a field for cows"); return }
        this.cows.total += 1
        field.contents.push(cow)
      }
      this.cows.objects.push(cow)
  }

  createChicken(setup:boolean){

    let chicken = new Chicken(this)
      chicken.p5 = this.p5
      chicken.preload()
      if(!setup){
        let field = this.findFieldForType("Chicken")
        if(field == null){ alert("Need a field for chickens"); return }
        this.chickens.total += 1
        field.contents.push(chicken)
      }
      
      this.chickens.objects.push(chicken)
  }

  createInfrastructure(){
    let inf = new SolarPanel(this)
    inf.p5 = this.p5
    inf.p5Img = this.p5.loadImage("/img/twtr/solarPanel.png")
    let field = this.findFieldForType("SolarPanel")
    if(field == null){ alert("Need a field for solar panels"); return }
    this.solarPanels.total += 1
    field.contents.push(inf)
    this.solarPanels.objects.push(inf)
  }

  createPlant(){
    let plant = new Plant(this)
    plant.p5 = this.p5
    plant.p5Img = this.p5.loadImage("/img/twtr/1f33f.png")
    let field = this.findFieldForType("Plant")
    if(field == null){ alert("Need a field for plants"); return }
    this.plants.total += 1
    field.contents.push(plant)
    this.plants.objects.push(plant)
  }

  private createBasicFarm = () => {
    let firstFieldX = 25
    let firstFieldY = 25
    let firstFieldW = 350
    let firstFieldH = 175

    //Cows
    for (let i = 0; i < this.cows.total; i++) {
      this.createCow(true)
    }

    //Sheep
    for (let i = 0; i < this.sheep.total; i++) {
    this.createSheep(true)
    }

    //Chicken
    for (let i = 0; i < this.chickens.total; i++) {
      this.createChicken(true)
    }

    this.fields.push(new Field(firstFieldX, firstFieldY, firstFieldW, firstFieldH, this.cows.objects, "#065535", FieldType.Grazing, this, "Cows"))
    this.fields.push(new Field(25, 275, 350, 125, this.sheep.objects, "#065535", FieldType.Grazing, this, "Sheep"))
    this.fields.push(new Field(475, 25, 200, 325,this.solarPanels.objects,"#ff8969", FieldType.Grazing, this, "SolarPanel"))
    this.fields.push(new Field(25, 450, 300, 125, this.chickens.objects, "", FieldType.Grazing, this, "Chicken"))
    for (let field of this.fields) {
      field.p5 = this.p5
      field.setHandleUpdate = this.updateUI
    }
  }

  findFieldForType(type: String){
    let field =  this.fields.find(function(field) {
      let doesContentTypeMatch = field.contentType == type
      return doesContentTypeMatch 
    })
    if(field){
      return field
    }else{
      return null
    }
  }

  public draw() {
    for (let field of this.fields) {
      field.draw()
    }
  }
}

export default Farm
