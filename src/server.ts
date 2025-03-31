import express from 'express';
import router from './router';
import db from './config/db';
import colors from 'colors';

const server = express();

//Conexion a base de datos
async function dbConnect() {
  try {
    await db.authenticate();
    db.sync();
    //console.log(colors.blue.bold('Conexión exitosa a la BD'));
  } catch (error) {
    //console.log(colors.red.bold('Error al conectar a la base de datos'));
  }
}

dbConnect();

//Leer datos de forms
server.use(express.json());

// Routing
server.use('/api/news', router);

server.get("/api", (req, res) => {
  res.json({})
})

export default server;
