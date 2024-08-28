export default class Entity {
    constructor() {
        if (new.target === Entity) {
            throw new Error('Cannot create an instance of Entity because it is an abstract class');
        }
    }

    async create() {}

    async findMany() {}

    async findByID() {}

    async update() {}

    async delete() {}
}