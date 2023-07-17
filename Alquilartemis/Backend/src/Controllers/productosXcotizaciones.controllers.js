import Querys from "./../Db/database.js";

export const getProductosXCotizaciones = async (req, res) => {
  try {
    const sql = `SELECT * FROM productos_x_cotizaciones pc INNER JOIN productos p ON pc.fk_id_producto = p.id_producto INNER JOIN cotizaciones c ON pc.fk_id_detalle = c.id_cotizacion`;
    Querys(res, [sql]);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getProductoXCotizacionID = async (req, res) => {
  try {
    const { id } = req.param;
    const sql = `SELECT * FROM productos_x_cotizaciones pc INNER JOIN productos p ON pc.fk_id_producto = p.id_producto INNER JOIN cotizaciones c ON pc.fk_id_detalle = c.id_cotizacion WHERE id_registro = ?`;
    Querys(res, [sql, id]);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const postProductoXCotizacion = async (req, res) => {
  try {
    const { fk_id_producto, fk_id_detalle } = req.body;
    const productoXCotizacion = {
      fk_id_producto,
      fk_id_detalle,
    };
    const sql = `INSERT INTO productos_x_cotizaciones SET ?`;
    Querys(res, [sql, productoXCotizacion]);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const putProductoXCotizacion = async (req, res) => {
  try {
    const { id } = req.param;
    const { fk_id_producto, fk_id_detalle } = req.body;
    const productoXCotizacion = {
      fk_id_producto,
      fk_id_detalle,
    };
    const sql = `UPDATE productos_x_cotizaciones SET ? WHERE id_registro = ?`;
    Querys(res, [sql, productoXCotizacion, id]);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const deleteProductoXCotizacion = async (req, res) => {
  try {
    const { id } = req.param;
    const sql = `DELETE FROM productos_x_cotizaciones WHERE id_registro = ?`;
    Querys(res, [sql, id]);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
