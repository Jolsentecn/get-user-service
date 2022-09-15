import { MongodbUserRepository } from "../../repositories/implementations/MongodbUserRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const mongodbUserRepository = new MongodbUserRepository();

const createUserUseCase = new CreateUserUseCase(
    mongodbUserRepository
);

const createUserController = new CreateUserController(
    createUserUseCase
);

export { createUserUseCase, createUserController }