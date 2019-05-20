import ConstrainedByField from './ConstrainedByField';

abstract class Animal extends ConstrainedByField {
  abstract makeSound(): void
  height = 16
  width = 16
  health: number = 10
  move(): string {
    return "roaming the earth..."
  }
  
  doSomethingOccasionally(doThis: Function){
    if (Math.floor((this.p5.millis() * 1000) % 100) === 0) {
      doThis()
      this.velocityX = Math.random() >= 0.5 ? -0.3 : 0.3
      this.velocityY = Math.random() >= 0.5 ? -0.3 : 0.3
      let chanceOfStayingStill = Math.random()
      this.velocityX = chanceOfStayingStill >= 0.1 ? 0 : this.velocityX
      this.velocityY = chanceOfStayingStill >= 0.1 ? 0 : this.velocityY
    }
  }

}

export default Animal;
