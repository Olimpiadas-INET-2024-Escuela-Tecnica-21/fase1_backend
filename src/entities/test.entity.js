import { TestRepository } from "./repository";
import Entity from "./entity";
import testSchema from "../validators/test.schema.js";

class TestEntity extends Entity
{
    constructor() {
        super(testSchema , TestRepository)
    }
}

export default TestEntity