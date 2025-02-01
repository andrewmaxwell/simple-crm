import { AppDataSource, noteRepository, userRepository } from "./data-source";
import { Note } from "./entity/Note";
import { User } from "./entity/User";
import * as express from "express";

const run = async () => {
    await AppDataSource.initialize();
    const app = express();
    app.use(express.json());
    app.get("/users", async (req, res) => {
        const users = await userRepository.find();
        res.json(users);
    });
    app.get("/users/:id", async (req, res) => {
        const user = await userRepository.findOne({ where: { id: req.params.id } });
        res.json(user);
    });
    app.post("/users", async (req, res) => {
        const user = new User();
        user.firstName = req.body.firstName;
        user.lastName = req.body.lastName;
        user.age = req.body.age;
        user.phoneNumber = req.body.phoneNumber;
        await userRepository.save(user);
        res.json(user);
    });
    app.put("/users/:id", async (req, res) => {
        const user = await userRepository.findOne({ where: { id: req.params.id } });
        user.firstName = req.body.firstName;
        user.lastName = req.body.lastName;
        user.age = req.body.age;
        user.phoneNumber = req.body.phoneNumber;
        await userRepository.save(user);
        res.json(user);
    });
    app.post("/notes", async (req, res) => {
        const user = await userRepository.findOne({ where: { id: req.body.userId } });
        const note = new Note();
        note.text = req.body.text;
        note.user = user;
        note.timestamp = new Date();
        await noteRepository.save(note);
        res.json(note);
    });
    app.get("/users/:id/notes", async (req, res) => {
        const notes = await noteRepository.find({
            where: { user: { id: req.params.id } },
            order: { timestamp: "DESC" },
        });
        res.json(notes);
    });
    app.listen(3000, () => {
        console.log("Server is running on http://localhost:3000");
    });
};

run();
