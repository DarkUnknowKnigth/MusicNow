'use strict'
const mongoose = require("mongoose");
const app = require("./app");
require("dotenv").config();
mongoose.connect(`mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB}`, { useNewUrlParser: true })
    .then(() => {
        console.info("Conexion a base de datos exitosa");
        app.listen(process.env.PORT || 3000, () => {
            console.info(`Servidor corriendo en http://${process.env.HOST}:${process.env.PORT}`);
        });
    }, err => {
        console.error(err);
    });