import Animal from "../abstract/Animal"
import Farm from "../Farm";
class Sheep extends Animal {
  name: string = "Sheep"
  genus: string = "Sheep"
  imgUrl: string = "/img/twtr/1f411.png"
  eats: string = "straw"
  hunger: number = 0
  farm: Farm
  
  constructor(farm: Farm) {
    super()
    this.farm = farm
  }

  // if sheep is hungry, yield less wool
  yieldWool() {
    let amountOfWoolToYield = 5 - this.hunger
    this.farm.wool.total += Math.abs(amountOfWoolToYield)
    this.hunger += 1
  }

  // if sheep is thin, yield less Lamb
  yieldLamb() {
    this.farm.lamb.total += this.hunger > 0 ? 100 / this.hunger : 120
    this.hunger += 1
  }

  eatStraw() {
    if (this.hunger <= 5 && this.hunger !== 0) {
      if (this.farm.straw.total > 0) {
        this.farm.straw.total--
        this.hunger = this.hunger - 1
      } else {
        if (this.hunger < 5) {
          this.hunger = this.hunger + 1
        } 
        
      }
    } 
  }

  public preload() {
    this.p5Img = this.p5.loadImage(this.imgUrl)
    console.log(this.p5Img)
  }

  makeSound() {
    return "Baaaa"
  }

  checkHealth(){
    if(this.hunger >= 5){
        console.log("Dying", this.health)
        this.health -= 1
    }
    if(this.health <= 0){
      this.farm.sheep.objects.pop()
    }
  }

  public draw(): any {

    this.constrainItem()
    this.doSomethingOccasionally(() => this.eatStraw())
    this.stopForFarmer()
    this.checkHealth()
  }
}

export default Sheep
