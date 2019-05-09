import Animal from "../abstract/Animal"
import Farm from "../Farm";
class Chicken extends Animal {
  name: string = "Chicken"
  genus: string = "Chicken"
  imgUrl: string = "/img/twtr/1f413.png"
  eats: string = "corn"
  hunger: number = 0
  farm: Farm
  
  constructor(farm: Farm) {
    super()
    this.farm = farm
  }

  // if chicken is hungry, yield less eggs
  yieldEgg() {
    let amountOfEggsToYield = 5 - this.hunger
    this.farm.eggs.total += Math.abs(amountOfEggsToYield)
    this.hunger += 1
  }

  // if Chicken is thin, yield less chicken
  yieldChicken() {
    this.farm.chicken.total += this.hunger > 0 ? 100 / this.hunger : 120
    this.health = 0
  }

  eatCorn() {
    if (this.hunger <= 5 && this.hunger !== 0) {
      if (this.farm.corn.total > 0) {
        this.farm.corn.total--
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
  }

  makeSound() {
    return "Cluck cluck"
  }

  checkHealth(){
    if(this.hunger >= 5){
        this.health -= 1
    }
    if(this.health <= 0){
      this.farm.chickens.objects.pop()
      this.farm.chickens.total -= 1
    }
  }

  public draw(): any {

    this.constrainItem()
    this.doSomethingOccasionally(() => this.eatCorn())
    this.stopForFarmer()
    this.checkHealth()
  }
}

export default Chicken
