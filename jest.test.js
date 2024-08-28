import TestEntity from "./src/entities/test.entity.js";

const testEntity = new TestEntity()

test("Testing entity talks to repository", () => {
    expect(testEntity.sayHello()).toBe("Hello from TestRepository");
})

test("Testing repository is a singleton", () => {
    try{
        new TestEntity()
    } catch (e) {
        expect(e.message).toBe('Cannot create another instance of TestRepository because it is a singleton')
    }
})