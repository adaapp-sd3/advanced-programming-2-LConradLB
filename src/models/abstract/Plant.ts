import ConstrainedByField from './ConstrainedByField';
import Farm from "../Farm";


class Plant extends ConstrainedByField {
    genus: string = "Plant"
    name: string  = "Wheat"
    height: number = 16
    width: number = 16
    health: number = 10
    imageUrl: string = "/img/twtr/1f33f.png"
    
    farm: Farm

    constructor(farm: Farm){ 
        super()
        this.farm = farm
    }

    public draw() {
        this.constrainItem()

        this.stopForFarmer()
    }

    public preload() {
        this.p5Img = this.p5.loadImage(this.imgUrl)
    }

}
export default Plant;
