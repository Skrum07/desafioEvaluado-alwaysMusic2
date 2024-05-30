import { addUserQuery } from "../model/queries.js";

export const home = (req, res) => {
    res.send('Hello World from controller file!');
};


export const addUser = async(req, res) => {
    const { name, rut, course, level } = req.body;
    await addUserQuery(name, rut, course, level);
    res.send('User added successfully!');
}