import express from "express"; 
import { User } from "./models/user";
import cors from "cors";

const PORT = 3000;

const app = express();

const users: User[] = [];

app.use(express.json());
app.use(cors());

app.post('/register', (req, res) => {
    const user = req.body;
    users.push(user);
    res.status(201).json({message: 'cadastro efetuado'});
})

app.post('/login', (req, res) => {
    const login: User = req.body;
    const user = users.find((user) => {
        return user.email == login.email && user.password == login.password;
    });

    if(user) {
        res.status(200).json({message: 'login efetuado', user: user.name});
    }else{
        res.status(401).json({message: 'email ou senha estão errados'});
    }
})

app.listen(PORT, () => console.log(`Running on http://localhost:${PORT}`));

