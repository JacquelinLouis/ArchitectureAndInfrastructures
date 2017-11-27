/**
 * Created by Louis on 27/11/2017.
 */
const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send("Hello World!"));

app.listen(port, () => console.log("Server listening on port " + port));