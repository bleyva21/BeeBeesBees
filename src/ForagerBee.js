/* START SOLUTION */
class ForagerBee extends Bee{
    constructor(){
        super()
        this.age = 10
        this.job = 'find pollen'
        this.canFly = true
        this.treasureChest = []
    }

    eat(){
        super.eat()
    }

    forage(treasure){
        this.treasureChest.push(treasure)
    }
}
/* END SOLUTION */
