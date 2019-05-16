import ConstrainedByField from './ConstrainedByField';
import Farm from "../Farm";

enum TypeOfInfrastructure{
    SolarPanel,
    GreenGasGenerator
}

class SolarPanel extends ConstrainedByField {
    genus: string = "Infrastructure"
    name: string  = "Solar Panel"
    height: number = 16
    width: number = 16
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
export default SolarPanel;
