import ConstrainedByField from './ConstrainedByField';
import Farm from "../Farm";

enum TypeOfInfrastructure{
    SolarPanel,
    GreenGasGenerator
}

class Infrastructure extends ConstrainedByField {
    name = ""
    height = 16
    width = 16
    health: number = 10
    type: TypeOfInfrastructure = TypeOfInfrastructure.SolarPanel
    imageUrl: string = "/img/twtr/1f413.png" //1f4bb
    // farm: Farm

    constructor(name: string){//, farm: Farm){ 
        super()
        // this.farm = farm
        this.name = name 
    }

    public draw() {
        this.constrainItem()
        this.p5.image(
            this.p5Img,
            this.x,
            this.y,
            this.width,
            this.height) 
    }

    public preload() {
        this.p5Img = this.p5.loadImage(this.imgUrl)
    }

}
export default Infrastructure;
