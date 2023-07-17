import Querys from "./../Db/database.js";

export const getCategorias = async (req, res) => {
  try {
    const sql = `SELECT * FROM categorias`;
    Querys(res, [sql]);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getCategoriaID = async (req, res) => {
  try {
    const { id } = req.params;
    const sql = `SELECT * FROM categorias WHERE id_categoria = ?`;
    Querys(res, [sql, id]);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const postCategoria = async (req, res) => {
  try {
    const { nombre_categoria, descripcion_categoria, img_categoria } = req.body;
    const category = {
      nombre_categoria,
      descripcion_categoria,
      img_categoria,
    };
    const sql = `INSERT INTO categorias SET ?`;
    Querys(res, [sql, category]);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const putCategoria = async (req, res) => {
  try {
    const { id } = req.param;
    const { nombre_categoria, descripcion_categoria, img_categoria } = req.body;
    const category = {
      nombre_categoria,
      descripcion_categoria,
      img_categoria,
    };
    const sql = `UPDATE categorias SET ? WHERE id_categoria = ?`;
    Querys(res, [sql, category, id]);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const deleteCategoria = async (req, res) => {
  try {
    const { id } = req.param;
    const sql = `DELETE FROM categorias WHERE id_categoria = ?`;
    Querys(res, [sql, id]);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
