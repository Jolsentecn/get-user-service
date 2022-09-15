const { MongoClient } = require('mongodb');
import { MockedUserRepository } from "../../repositories/mocks/MockedUserRepository";
import * as dotenv from "dotenv";
import { CreateUserUseCase } from "./CreateUserUseCase";



describe('CreateUserUseCase', () => {

    let connection;
    let db;
    let userRepository;

    
    beforeAll(async () => {
        connection = await MongoClient.connect(globalThis.__MONGO_URI__, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        });
        db = await connection.db(globalThis.__MONGO_DB_NAME__);
        
      });
  
    afterAll(async () => {
      await connection.close();
    });

    it('should create a user with correct parameters?', async () => {
        userRepository = new MockedUserRepository(db.collection("users"));

        const sut = new CreateUserUseCase(userRepository);
        const mockUser = { email: "joao@email.com", name: "joao", phone: "11998133499", birthDate: new Date() };
        var insertedUser = await sut.execute(mockUser);
        
        expect(insertedUser.email).toBe(mockUser.email);
    });
    it('should create a user with incorrect parameters?', async () => {
      userRepository = new MockedUserRepository(db.collection("users"));

      const sut = new CreateUserUseCase(userRepository);
      const mockUser = { email: "joao@email.com", name: "joao", phone: "11", birthDate: new Date() };

      await expect(sut.execute(mockUser)).rejects.toThrow();
  });
});