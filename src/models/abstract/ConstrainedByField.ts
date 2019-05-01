import Drawable from "./Drawable"

abstract class ConstrainedByField extends Drawable {
  fieldX!: number
  fieldY!: number
  fieldW!: number
  fieldH!: number
  velocityY: number = 0
  velocityX: number = 0
  bounceSpeed!: number

  setRandomPositionInField(
    fieldX: number,
    fieldY: number,
    fieldW: number,
    fieldH: number
  ) {
    this.x = Math.floor(Math.random() * fieldW) + fieldX
    this.y = Math.floor(Math.random() * (fieldH - this.height * 2)) + fieldY
    this.fieldX = fieldX
    this.fieldY = fieldY
    this.fieldW = fieldW
    this.fieldH = fieldH
    this.bounceSpeed = 1
  }

  //bounces the animal off edges of the field
  constrainItem() {
    // bottom
    if (this.y - this.height + 6 >= this.fieldY + this.fieldH - this.height) {
      this.velocityY = -this.velocityY * this.bounceSpeed
      this.y = this.fieldY + this.fieldH - this.height - 1
    }

    //top
    if (this.y <= this.fieldY) {
      this.velocityY = -this.velocityY * this.bounceSpeed
      this.y = this.fieldY + 1
    }

    // left
    if (this.x <= this.fieldX) {
      this.velocityX = -this.velocityX * this.bounceSpeed
      this.x = this.fieldX + 1
    }

    // right
    if (this.x + this.width / 2 >= this.fieldW + this.fieldX ){
      this.velocityX = -this.velocityX * this.bounceSpeed
      this.x = this.fieldW - this.width / 2 - 1
    }
  }

  doSomethingOccasionally(doThis: Function) {
  doThis()
  }

  stopForFarmer() {
    let x
    let y
    if (this.isFarmerPresent) {
      this.width = 24
      x = this.x
      y = this.y
      this.height = 24
      this.showUI = true
    } else {
      this.width = 16
      this.height = 16
      this.showUI = false
      this.x += this.velocityX
      this.y += this.velocityY
      x = this.x
      y = this.y
    }
    this.p5.image(this.p5Img, x, y, this.width, this.height)
  }
}

export default ConstrainedByField
