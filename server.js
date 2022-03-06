import express from "express";
import { config } from "dotenv";
config();
const app = express();
const port = process.env.PORT;

app.get('/', (req, res) => {
    res.send('Hello from express');
})

app.get('/:parameter', (req, res) => {
    const {parameter} = req.params;
    res.send(`Hi, have you just sent <strong> ${parameter} </strong`)
})


app.listen(port, () => console.log(`I am listening on port ${port}`));
