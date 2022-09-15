import { User } from "../../entities/User";
import { collections } from "../../services/database.service";
import { IUserRepository } from "../IUserRepository";

export class MongodbUserRepository implements IUserRepository{
    async findByEmail(email: string): Promise<User> {
        return await collections.user.findOne({ email: email }) as unknown as User
    }
    
    async create(user: User): Promise<User> {
        await collections.user.insertOne(user);
        return user;
    }

    async listAll(): Promise<User[]> {
        return (await collections.user.find({}).toArray()) as unknown as User[]
    }

}