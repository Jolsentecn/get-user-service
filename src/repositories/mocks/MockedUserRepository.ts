import { User } from "../../entities/User";
import { IUserRepository } from "../IUserRepository";

export class MockedUserRepository implements IUserRepository{
    constructor(
        private users
    ){

    }

    async findByEmail(email: string): Promise<User> {
        return await this.users.findOne({ email: email }) as unknown as User
    }
    async create(user: User): Promise<User> {
        const id =  await (await this.users.insertOne(user)).insertedId;
        const result_ = await this.users.findOne(id) as unknown as User
        return result_
    }
    async listAll(): Promise<User[]> {
        return (await this.users.find({}).toArray()) as unknown as User[]
    }

}