import { ObjectId } from "mongodb";
import { MockedUserRepository } from "../../repositories/mocks/MockedUserRepository";
import { ListUsersUseCase } from "./ListUsersUseCase";

const {MongoClient} = require('mongodb');

describe('ListUsersUseCase', () => {
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

  it('should return when colletion is empty?', async () => {
    userRepository = new MockedUserRepository(db.collection("users"));

    const sut = new ListUsersUseCase(userRepository);

    var result = await sut.execute();
    
    expect(result.length).toBeGreaterThanOrEqual(0);
  });
  it('should return data when colletion has registries?', async () => {
    userRepository = new MockedUserRepository(db.collection("users"));

    const mockUser = { _id: new ObjectId(), email: "joao@email.com", name: "joao", phone: "11998133499", birthDate: new Date() };

    db.collection("users").insertOne(mockUser);

    const sut = new ListUsersUseCase(userRepository);

    var result = await sut.execute();
    
    expect(result.length).toBeGreaterThanOrEqual(1);
  });
});