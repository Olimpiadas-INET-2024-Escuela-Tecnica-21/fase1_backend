import TestEntity from "../entities/test.entity.js";

class TestController {
    entity = new TestEntity()
    static async sayHello(){
        try{
            TestController.entity.sayHello()
        }
        catch(error){
            return "no se pudo xd"
        }
    }
}

export default TestController