import { config } from "./config.js";
import { MongoClient } from 'mongodb';

const uri = config.MONGODB_URI;
const options = {};

let mongoClient: MongoClient;

if (config.NODE_ENV === 'development') {
  let globalWithMongo = global as typeof globalThis & {
    _mongoClient?: MongoClient;
  };

  if (!globalWithMongo._mongoClient) {
    globalWithMongo._mongoClient = new MongoClient(uri, options);
  }
  mongoClient = globalWithMongo._mongoClient;
} else {
  mongoClient = new MongoClient(uri, options);
}

export const clientPromise = mongoClient.connect();
export const dbPromise = clientPromise.then((client) => client.db('CholobuddyDb'));
export const client = mongoClient;
export const db = mongoClient.db('CholobuddyDb');
