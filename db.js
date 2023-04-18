import express from "express";
import http from "http";
import mysql from "mysql";
import cors from "cors";

const app = express();
const server = http.Server(app);

server.listen(8800, () => {
  console.log("Connected to backend");
});

const db = mysql.createPool({
  connectionLimit : 10,
  host: "185.213.81.154",
  user: "u404107037_mastin_user",
  password: "M4stinbbdd",
  database: "u404107037_mastin",
});

app.use(express.json());
app.use(cors());

app.get("/items", (req, res) => {
  const q = "SELECT * FROM Listado_Productos_2023";
  db.getConnection((err, conn) => {
    if (err) {
      res.send("Error occured");
    } else {
      conn.query(q, (err, data) => {
        if (err) {
          res.send("Error occured");
        } else {
          res.send(data);
        }
        conn.release();
      })
    }
  });
});

// app.listen(8800, () => {
//   console.log("Connected to backend");
// });
