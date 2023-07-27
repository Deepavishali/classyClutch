import { client } from "../index.js";

export async function CreateUsers(data) {
    return await client.db("Bags").collection("users").insertOne(data);
}

export async function getUserByName(username) {
    return await client.db("Bags").collection("users").findOne({ username: username });
}