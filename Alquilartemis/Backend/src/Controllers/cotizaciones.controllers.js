import Querys from "./../Db/database.js";

export const getCotizaciones = async (req, res) => {
  try {
    const sql = `SELECT c.id_cotizacion, e.nombre_empleado AS empleado, co.nombre_constructora AS constructora, c.fecha_cotizacion, c.hora_cotizacion, c.dia_alquiler, c.duracion_alquiler FROM cotizaciones AS c INNER JOIN empleados AS e ON c.fk_id_empleado = e.id_empleado INNER JOIN constructoras AS co ON c.fk_id_constructora = co.id_constructora`;
    Querys(res, [sql]);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getCotizacionID = async (req, res) => {
  try {
    const { id } = req.param;
    const sql = `SELECT c.id_cotizacion, e.nombre_empleado AS empleado, co.nombre_constructora AS constructora, c.fecha_cotizacion, c.hora_cotizacion, c.dia_alquiler, c.duracion_alquiler FROM cotizaciones AS c INNER JOIN empleados AS e ON c.fk_id_empleado = e.id_empleado INNER JOIN constructoras AS co ON c.fk_id_constructora = co.id_constructora WHERE c.id_cotizacion = ?`;
    Querys(res, [sql, id]);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const postCotizacion = async (req, res) => {
  try {
    const {
      fk_id_empleado,
      fk_id_constructora,
      fecha_cotizacion,
      hora_cotizacion,
      dia_alquiler,
      duracion_alquiler,
    } = req.body;

    const cotizacion = {
      fk_id_empleado,
      fk_id_constructora,
      fecha_cotizacion,
      hora_cotizacion,
      dia_alquiler,
      duracion_alquiler,
    };
    const sql = `INSERT INTO cotizaciones SET ?`;
    Querys(res, [sql, cotizacion]);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const putCotizacion = async (req, res) => {
  try {
    const { id } = req.param;
    const {
      fk_id_empleado,
      fk_id_constructora,
      fecha_cotizacion,
      hora_cotizacion,
      dia_alquiler,
      duracion_alquiler,
    } = req.body;

    const cotizacion = {
      fk_id_empleado,
      fk_id_constructora,
      fecha_cotizacion,
      hora_cotizacion,
      dia_alquiler,
      duracion_alquiler,
    };
    const sql = `UPDATE cotizaciones SET ? WHERE id_cotizacion = ?`;
    Querys(res, [sql, cotizacion, id]);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const deleteCotizacion = async (req, res) => {
  try {
    const { id } = req.param;
    const sql = `DELETE FROM cotizaciones WHERE id_cotizacion = ?`;
    Querys(res, [sql, id]);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
