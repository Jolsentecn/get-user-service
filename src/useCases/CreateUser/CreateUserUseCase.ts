import { User } from "../../entities/User";
import { IUserRepository } from "../../repositories/IUserRepository";
import { ICreateUserRequestDTO } from "./CreateUserDTO";
import { publisher } from "../../services/redis.service";

export class CreateUserUseCase {
    constructor(
        private userRepository: IUserRepository
    ){}
    async execute(data: ICreateUserRequestDTO): Promise<User> {
        const userAlreadyExists = await this.userRepository.findByEmail(data.email);
        if(userAlreadyExists){
            throw new Error('User e-mail already exists.');
        }
        
        data.birthDate = new Date(data.birthDate);

        const user = new User(data);

        if(user.phone.length < 9){
            throw new Error('User number is too short.');
        }

        var result = await this.userRepository.create(user);

        await publisher.connect();

        await publisher.publish('user', JSON.stringify(result));

        return result;
    }

}