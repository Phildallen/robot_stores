const express = require('express');
const mysql = require('promise-mysql');

const app = express();
const port = 3000;

//handler - route to db and returns json. See readme in mysql folder in node_modules folder
app.get('/store', async (req, res) => {
    const connection = await mysql.createConnection({
        user: 'root',
        password: 'password',
        database: 'robot_stores'
    });

    const products = await connection.query('SELECT * FROM products;');

    res.json(products);
});

app.listen(port, () => {
    console.log(`App started and listening on port ${port}`);
});