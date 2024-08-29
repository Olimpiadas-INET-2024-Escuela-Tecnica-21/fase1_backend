import TestEntity from "../entities/test.entity.js";
import Controller from "./controller.js";
const entity = new TestEntity()

class TestController extends Controller{
    constructor(){
        super(TestController, entity)
    }
    static async sayHi(){
        try{
            return entity.sayHello()
        }
        catch(error){
            return 'hubo error xd'
        }
    }
}

export default TestController