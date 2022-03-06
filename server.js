import express from "express";
import { config } from "dotenv";
import {readFileContent} from './read-file-promises.js';
import {writeToLog} from './logger.js';

config();
const app = express();
const port = process.env.PORT;

const loggerMiddleware = (req, res, next) => {
     writeToLog('debug', req.url);
    next();
}

app.use('/', loggerMiddleware);
app.get('/', async (req, res) => {
    const content = await readFileContent('./index.html');
    res.setHeader('content-type', 'text/html');
    res.send(content);
})


app.listen(port, () => console.log(`I am listening on port ${port}`));
