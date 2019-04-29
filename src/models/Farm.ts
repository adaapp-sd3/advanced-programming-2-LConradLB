import Drawable from "./abstract/Drawable"
import Field from "./Field"
import Cow from "./animals/Cow"
import Sheep from "./animals/Sheep"
import Chicken from "./animals/Chicken"
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
  }

  public preload() {
    this.createBasicFarm()
  }

  private createBasicFarm = () => {
    let firstFieldX = 25
    let firstFieldY = 25
    let firstFieldW = 350
    let firstFieldH = 175

    //Cows
    for (let i = 0; i < this.cows.total; i++) {
      let cow = new Cow(this)
      cow.p5 = this.p5
      cow.preload()
      cow.setRandomPositionInField(
        firstFieldX,
        firstFieldY,
        firstFieldW,
        firstFieldH
      )
      this.cows.objects.push(cow)
    }

    //Sheep
    for (let i = 0; i < this.sheep.total; i++) {
      let sheep = new Sheep(this)
      sheep.p5 = this.p5
      sheep.preload()
      sheep.setRandomPositionInField(25, 275, 350, 125)
      
      this.sheep.objects.push(sheep)
    }

    //Chicken
    for (let i = 0; i < this.chickens.total; i++) {
      let chicken = new Chicken(this)
      chicken.p5 = this.p5
      chicken.preload()
      chicken.setRandomPositionInField(25, 450, 300, 125)
      
      this.chickens.objects.push(chicken)
    }

    this.fields.push(
      new Field(
        firstFieldX,
        firstFieldY,
        firstFieldW,
        firstFieldH,
        this.cows.objects,
        "#065535"
      )
    )
    this.fields.push(new Field(25, 275, 350, 125, this.sheep.objects, "#065535"))
    this.fields.push(new Field(475, 25, 200, 325,[],"#ff8969"))
    this.fields.push(new Field(25, 450, 300, 125, this.chickens.objects))
    for (let field of this.fields) {
      field.p5 = this.p5
      field.setHandleUpdate = this.updateUI
    }
  }

  public draw() {
    for (let field of this.fields) {
      field.draw()
    }
  }
}

export default Farm
