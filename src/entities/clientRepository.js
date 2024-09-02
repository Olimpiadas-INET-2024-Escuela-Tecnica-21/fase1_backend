import { PrismaClient } from "@prisma/client"; 
import Repository from './repository.js';

/**
 * ClientRepository class, its responsible for handling the client data
 * @extends Repository
 */
class ClientRepository extends Repository {
    static #instance = undefined

    constructor() {
        super();

        

        if (!ClientRepository.#instance) {
            console.log('ClientRepository instance created');
            ClientRepository.#instance = this;
            // skipcq: JS-0109
            return ClientRepository.#instance;
        }

        throw new Error('Cannot create another instance of ClientRepository because it is a singleton');
        
    }

    static async findAccount(req, res){
        try {
            const findedAccount = await Repository.findOne(req.params.id)
            return findedAccount
        } 
        catch (error) {
            res.json({msg: error.message})
        }
    }

    static async findAccounts(req, res){
        try {
            const findedAccounts = await Repository.findMany()
            return findedAccounts
        } 
        catch (error) {
            res.json({msg: error.message})
        }
    }

    static async editAccount(req, res){
        try {
            client = await this.findById(req)
            const changedValue = await req.body
            client.body = changedValue
            return client.body
        } 
        catch (error) {
            res.json({msg: error.message})
        }
    }

    static async deleteAccount(req, res){
        try {
            const client = await this.delete(req)
            return res.json("usuario " + client + " fue borrado")
        } 
        catch (error) {
            res.json({msg: error.message})
        }
    }




}

export default ClientRepository