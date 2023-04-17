import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();

const db = mysql.createConnection({
  host: "185.213.81.154",
  user: "u404107037_mastin_user",
  password: "M4stinbbdd",
  database: "u404107037_mastin",
});

app.use(express.json());
app.use(cors());

app.get("/items", (req, res) => {
    const q = "SELECT * FROM Listado_Productos_2023";
    db.query(q, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});

app.listen(8800, () => {
  console.log("Connected to backend");
});
