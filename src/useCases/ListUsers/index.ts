import { MongodbUserRepository } from "../../repositories/implementations/MongodbUserRepository";
import { ListUsersController } from "./ListUsersController";
import { ListUsersUseCase } from "./ListUsersUseCase";

const mongodbUserRepository = new MongodbUserRepository();

const listUsersUseCase = new ListUsersUseCase(
    mongodbUserRepository
);

const listUsersController = new ListUsersController(
    listUsersUseCase
);

export { listUsersUseCase, listUsersController }