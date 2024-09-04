import TestEntity from "../entities/test.entity.js";
import Controller from "./controller.js";
const entity = new TestEntity()

class TestController extends Controller{
    constructor(){
        super(entity)
    }
}

export default TestController