import { Request, Response } from 'express';
import { ListUsersUseCase } from './ListUsersUseCase';

export class ListUsersController {
    constructor(
        private createUserUseCase: ListUsersUseCase,
    ){}

    async handle(request: Request, response: Response): Promise<Response>{
        try {
            var users = await this.createUserUseCase.execute();

            return response.status(200).send(users);
        } catch(err){
            return response.status(400).json({
                message: err.errInfo || err.message || 'Unexpected error.'
            });
        }
    }
}