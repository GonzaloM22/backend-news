import express from 'express';
import router from './router';
import db from "./config/db";
import colors from "colors";

//Conexion a base de datos

async function connectDB() {
  try {
    await db.authenticate();
    db.sync();
    console.log(colors.blue.bold("Conexión exitosa a la BD"));
  } catch (error) {
    console.log(colors.red.bold( 'Error al conectar a la base de datos'));
  }
}

connectDB();

const server = express();

// Routing
server.use('/api/news', router);

export default server;
