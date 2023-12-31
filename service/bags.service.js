import { client } from '../index.js';

export async function addMenubyId(data) {
    return await client.db('Bags').collection('menus').insertMany(data);
}

export async function updateMenubyId(id, data) {
    return await client.db('Bags').collection('menus').updateOne({ id: id }, { $set: data });
}

export async function getMenubyId(id) {
    return await client.db('Bags').collection('menus').findOne({ id: id });
}

export async function DeleteMenu(id) {
    return await client
        .db("Bags")
        .collection("menus")
        .deleteOne({ id: id });
}

export async function getMenu() {
    return await client.db('Bags').collection('menus').find().toArray();
}