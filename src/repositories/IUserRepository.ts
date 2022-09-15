import { User } from "../entities/User";

export interface IUserRepository {
    findByEmail(email: string): Promise<User>;
    create(user: User): Promise<User>;
    listAll(): Promise<User[]>;
}