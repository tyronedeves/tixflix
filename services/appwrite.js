import { Client, Databases, Account } from "appwrite";

const client = new Client();
client
  .setEndpoint("https://fra.cloud.appwrite.io/v1")
  .setProject("tixflix"); // Replace with your project ID

export const account = new Account(client);
export const databases = new Databases(client);
