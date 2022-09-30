import express, { Express, Request, Response } from 'express';
const path = require('path');
import cors from 'cors';

const app = express();
app.use(cors())

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname)));

app.get('/', function (req: Request, res: Response) {
    res.json({ sucesso: 1 })
});

app.get('/auth', function (req: Request, res: Response) {
    res.json({ sucesso: 2 })
});

app.listen(3000, function () {
    console.log("Back online!");
});
