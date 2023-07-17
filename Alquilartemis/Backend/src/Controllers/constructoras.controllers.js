import Querys from "./../Db/database.js";

export const getConstructoras = async (req, res) => {
  try {
    const sql = `SELECT * FROM constructoras`;
    Querys(res, [sql]);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getConstructoraID = async (req, res) => {
  try {
    const { id } = req.param;
    const sql = `SELECT * FROM constructoras WHERE id_constructora = ?`;
    Querys(res, [sql, id]);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const postConstructora = async (req, res) => {
  try {
    const {
      nombre_constructora,
      nit_constructora,
      nombre_representante,
      email_contacto,
      telefono_contacto,
    } = req.body;

    const constructora = {
      nombre_constructora,
      nit_constructora,
      nombre_representante,
      email_contacto,
      telefono_contacto,
    };
    const sql = `INSERT INTO constructoras SET ?`;
    Querys(res, [sql, constructora]);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const putConstructora = async (req, res) => {
  try {
    const { id } = req.param;
    const {
      nombre_constructora,
      nit_constructora,
      nombre_representante,
      email_contacto,
      telefono_contacto,
    } = req.body;

    const constructora = {
      nombre_constructora,
      nit_constructora,
      nombre_representante,
      email_contacto,
      telefono_contacto,
    };
    const sql = `UPDATE constructoras SET ? WHERE id_constructora = ?`;
    Querys(res, [sql, constructora, id]);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const deleteContructora = async (req, res) => {
  try {
    const { id } = req.param;
    const sql = `DELETE FROM constructoras WHERE id_constructora = ?`;
    Querys(res, [sql, id]);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
