const express = require("express");

const app = express();
const PORT = 3000;
const dbConnection = require('./config/dbconfig');

app.use(express.json());

app.use('/products',require('./routes/products'));

dbConnection();
app.listen(PORT, () => console.log(`Server listening on 0.0.0.0:${PORT}`));
