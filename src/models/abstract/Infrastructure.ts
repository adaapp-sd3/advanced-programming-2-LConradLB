import ConstrainedByField from './ConstrainedByField';
import Farm from "../Farm";

enum TypeOfInfrastructure{
    SolarPanel,
    GreenGasGenerator
}

class Infrastructure extends ConstrainedByField {
    name = "Solar Panel"
    height = 16
    width = 16
    health: number = 10
    type: TypeOfInfrastructure = TypeOfInfrastructure.SolarPanel
    imageUrl: string = "/img/twtr/1f4bb.png" //1f4bb
    
    farm: Farm

    constructor(farm: Farm){ 
        super()
        this.farm = farm
        // this.name = name 
    }

    public draw() {
        this.constrainItem()

        this.stopForFarmer()
    }

    public preload() {
        this.p5Img = this.p5.loadImage(this.imgUrl)
    }

}
export default Infrastructure;
