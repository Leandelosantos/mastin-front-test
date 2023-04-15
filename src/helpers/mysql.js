import mysql from "mysql";

export default async function dbGet() {
  try {
    const connection = await mysql.createConnection({
      host: "185.213.81.154",
      user: "u404107037_mastin_user",
      password: "M4stinbbdd",
      database: "u404107037_mastin",
    });
    connection.connect((err) => {
      if (err) {
        console.error(err);
      } else {
        console.log("CONEXION EXITOSA");
      }
    });

    let values = [];

    connection.query(
      "SELECT * FROM Listado_Productos_2023",
      (err, results, fields) => {
        if (err) {
          console.log(err);
        }
        values = results;

        console.log(results);

        return values;
      }
    );
  } catch (error) {
    console.log(error);
  }

  connection.end();
}
