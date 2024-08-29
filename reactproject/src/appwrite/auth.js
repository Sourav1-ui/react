import conf from "../conf";
import { Client, Account, ID } from "appwrite";


export class AuthService {
    client = new Client()
    account;
    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId)
        this.account = new Account(this.client)
    }

    //signup
    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name)
            if (userAccount) {
                //call another method
                return this.login({ email, password })
            }
            else {
                return userAccount
            }

        }
        catch (error) {
            throw error

        }
    }

    //login
    async login({ email, password }) {
        try {
            await this.account.createEmailSession(email, password)

        }
        catch (error) {
            throw error
        }
    }

    //to check user login or not
    async getCurrentUser() {
        try {
            return await this.account.get()

        }
        catch (error) {
            throw error
        }
        return null;
    }

    //logout
    async logout(){
        try {
            await this.account.deleteSessions()
            
        } catch (error) {
            throw error
            
        }
    }
}

const authService = new AuthService()

export default authService  /**authService is object. with the help of this object we access all the method  */