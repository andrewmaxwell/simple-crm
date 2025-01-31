import { AppDataSource, userRepository } from "./data-source";
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
        const user = await userRepository.findOne({where: {id: req.params.id}});
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
        const user = await userRepository
            .findOne({ where: { id: req.params.id } });
        user.firstName = req.body.firstName;
        user.lastName = req.body.lastName;
        user.age = req.body.age;
        user.phoneNumber = req.body.phoneNumber;
        await userRepository.save(user);
        res.json(user);
    });
    app.listen(3000, () => {
        console.log("Server is running on http://localhost:3000");
    });
};

run();
