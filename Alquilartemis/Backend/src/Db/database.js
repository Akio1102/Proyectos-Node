import mysql from "promise-mysql";
import config from "../config.js";

const connection = mysql.createConnection({
  host: config.host,
  database: config.database,
  user: config.user,
  password: config.password,
});

const getConnection = () => {
  return connection;
};

const Querys = async (res, sqlQuery) => {
  const connection = await getConnection();
  const result = await connection.query(...sqlQuery);
  console.log(result);
  res.json(result);
};

export default Querys;
