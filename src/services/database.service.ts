import * as mongoDB from "mongodb";
import * as dotenv from "dotenv";

export const collections: { user?: mongoDB.Collection } = {}

export async function connectToDatabase () {
    dotenv.config();
 
    const client: mongoDB.MongoClient = new mongoDB.MongoClient(process.env.DB_CONN_STRING);
            
    await client.connect();
        
    const db: mongoDB.Db = client.db(process.env.DB_NAME);
   
    const userCollection: mongoDB.Collection = db.collection(process.env.CLIENT_COLLECTION_NAME);

    await db.command({
        "collMod": process.env.CLIENT_COLLECTION_NAME,
        "validator": {
            $jsonSchema: {
                bsonType: "object",
                required: ["name", "email", "phone", "birthDate"],
                additionalProperties: false,
                properties: {
                    _id: {},
                    name: {
                        bsonType: "string",
                        description: "'name' is required and is a string"
                    },
                    email: {
                        bsonType: "string",
                        description: "'email' is required and is a string"
                    },
                    phone: {
                        bsonType: "string",
                        description: "'phone' is required and is a string"
                    },
                    birthDate: {
                        bsonType: "date",
                        description: "'birthDate' is required and is a date"
                    }
                }
            }
         }
    });

    collections.user = userCollection;

       
         console.log(`Successfully connected to database: ${db.databaseName} and collection: ${userCollection.collectionName}`);
 }
