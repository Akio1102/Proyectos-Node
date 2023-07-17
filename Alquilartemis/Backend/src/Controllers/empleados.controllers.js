import Querys from "./../Db/database.js";

export const getEmpleados = async (req, res) => {
  try {
    const sql = `SELECT * FROM empleados`;
    Querys(res, [sql]);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getEmpleadoID = async (req, res) => {
  try {
    const { id } = req.param;
    const sql = `SELECT * FROM empleados WHERE id_empleado = ?`;
    Querys(res, [sql, id]);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const postEmpleado = async (req, res) => {
  try {
    const {
      nombre_empleado,
      email_empleado,
      celular_empleado,
      password_empleado,
    } = req.body;

    const empleado = {
      nombre_empleado,
      email_empleado,
      celular_empleado,
      password_empleado,
    };
    const sql = `INSERT INTO empleados SET ?`;
    Querys(res, [sql, empleado]);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const putEmpleado = async (req, res) => {
  try {
    const { id } = req.param;
    const {
      nombre_empleado,
      email_empleado,
      celular_empleado,
      password_empleado,
    } = req.body;

    const empleado = {
      nombre_empleado,
      email_empleado,
      celular_empleado,
      password_empleado,
    };
    const sql = `UPDATE empleados SET ? WHERE id_empleado = ?`;
    Querys(res, [sql, empleado, id]);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const deleteEmpleado = async (req, res) => {
  try {
    const { id } = req.param;
    const sql = `DELETE FROM empleados WHERE id_empleado = ?`;
    Querys(res, [sql, id]);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
