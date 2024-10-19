// app.js
import express from 'express';
const app = express();

app.use(express.json());

app.post('/add', (req, res) => {
    const { num1, num2 } = req.body;
    const result = num1 + num2;
    res.status(200).json({ result });
});

app.post('/subtract', (req, res) => {
    const { num1, num2 } = req.body;
    const result = num1 - num2;
    res.status(200).json({ result });
});

export default app;
