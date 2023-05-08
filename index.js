import express from "express";
import http from "http";
import mysql from "mysql2";
import cors from "cors";
import { loadEnv } from "vite";
const app = express();
const server = http.createServer(app);
process.env = { ...process.env, ...loadEnv("", process.cwd()) };

// Settings

app.set("port", process.env.PORT || 3000);

const db = mysql.createPool({
  connectionLimit: 10,
  host: process.env.VITE_DB_HOST,
  user: process.env.VITE_DB_USER,
  password: process.env.VITE_DB_PASSWORD,
  database: process.env.VITE_DB_DATABASE,
  port: process.env.VITE_PORT,
});

console.log("creo el pool");

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  const q = "SELECT * FROM Listado_Productos_2023";
  db.getConnection((err, conn) => {
    if (err) {
      res.send("Error occured");
      console.log("fallo getConnection");
    } else {
      conn.query(q, (err, data) => {
        if (err) {
          res.send("Error occured");
          console.log("fallo query");
        } else {
          res.send(data);
        }
        conn.release();
      });
    }
  });
});

//const PORT = process.env.VITE_PORT;
server.listen(app.get("port"), () => {
  console.log(`Connected to backend ${app.get("port")}`);
});
