import express, { Request, Response } from "express";
import { createUserController } from "../useCases/CreateUser";
import { listUsersController } from '../useCases/ListUsers'

export const usersRouter = express.Router();

usersRouter.use(express.json());

usersRouter.post('/', (request, response) => {
    return createUserController.handle(request, response);
});

usersRouter.get('/', (request, response) =>{
    return listUsersController.handle(request, response);
})