const express = require('express');
const drugstoreController = require("./src/controllers/drugstore.controller");

const path = require('path');
const app = express();
const PORT = 3310;

app.use(express.static(__dirname + '/../frontend/public'));
app.use(express.json());

app.get("/drugstore",drugstoreController.listDrugstore);


app.delete("/drugstore/:id",drugstoreController.deleteDrugstore);

app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running, and App is listening on http://localhost:"+ PORT)
    else
        console.log("Error occurred, server can't start", error);
    }
);

module.exports = app;