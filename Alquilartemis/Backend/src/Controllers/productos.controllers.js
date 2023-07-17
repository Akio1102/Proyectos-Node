import Querys from "./../Db/database.js";

export const getProductos = async (req, res) => {
  try {
    const sql = `SELECT p.id_producto, p.nombre_producto, p.precio_x_dia, p.stock_producto, p.categoria_producto, c.id_categoria, c.nombre_categoria , c.descripcion_categoria, c.img_categoria FROM productos p INNER JOIN categorias c ON p.categoria_producto  = c.id_categoria`;
    Querys(res, [sql]);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getProductoID = async (req, res) => {
  try {
    const { id } = req.param;
    const sql = `SELECT p.id_producto, p.nombre_producto, p.precio_x_dia, p.stock_producto, p.categoria_producto, c.id_categoria, c.nombre_categoria , c.descripcion_categoria, c.img_categoria FROM productos p INNER JOIN categorias c ON p.categoria_producto  = c.id_categoria WHERE p.id_producto = ?`;
    Querys(res, [sql, id]);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const postProducto = async (req, res) => {
  try {
    const {
      nombre_producto,
      precio_x_dia,
      stock_producto,
      categoria_producto,
    } = req.body;
    const producto = {
      nombre_producto,
      precio_x_dia,
      stock_producto,
      categoria_producto,
    };
    const sql = `INSERT INTO productos SET ?`;
    Querys(res, [sql, producto]);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const putProducto = async (req, res) => {
  try {
    const { id } = req.param;
    const {
      nombre_producto,
      precio_x_dia,
      stock_producto,
      categoria_producto,
    } = req.body;
    const producto = {
      nombre_producto,
      precio_x_dia,
      stock_producto,
      categoria_producto,
    };
    const sql = `UPDATE productos SET ? WHERE id_producto = ?`;
    Querys(res, [sql, producto, id]);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const deleteProducto = async (req, res) => {
  try {
    const { id } = req.param;
    const sql = `DELETE FROM productos WHERE id_producto = ?`;
    Querys(res, [sql, id]);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
