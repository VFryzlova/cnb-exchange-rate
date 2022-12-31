import express from 'express';
import cors from 'cors'
import fetch from 'node-fetch'
const app = express();

fetch('https://www.cnb.cz/en/financial-markets/foreign-exchange-market/central-bank-exchange-rate-fixing/central-bank-exchange-rate-fixing/daily.txt')
    .then(response => response.text())
    .then(data => {
        app.get("/data", cors(), (req, res) => {
            res.send(data);
        });
    })

app.listen(3000);
