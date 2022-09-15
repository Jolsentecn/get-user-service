import { Request, Response } from 'express';
import { CreateUserUseCase } from './CreateUserUseCase';

export class CreateUserController {
    constructor(
        private createUserUseCase: CreateUserUseCase,
    ){}

    async handle(request: Request, response: Response): Promise<Response>{
        const { name, email, phone, birthDate } = request.body;

        try {
            var user = await this.createUserUseCase.execute({
                name,
                email,
                phone,
                birthDate
            });

            return response.status(201).send({ id: user._id });
        } catch(err){
            return response.status(400).json({
                message: err.errInfo || err.message || 'Unexpected error.'
            });
        }
    }
}