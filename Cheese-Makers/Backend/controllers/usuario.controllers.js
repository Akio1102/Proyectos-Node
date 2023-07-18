const Usuario = require("../models/Usuario.js");
const bcryptjs = require("bcryptjs");

const getUsers = (req, res) => {
  res.status(200).json({
    Message: "Hola get All",
  });
};

const getUserID = (req, res) => {
  res.status(200).json({
    Message: "Hola get ID",
  });
};

const postUser = async (req, res) => {
  const { nombre, email, password, rol } = req.body;
  const usuario = new Usuario({ nombre, email, password, rol });

  //Verificar si el correo ya existe
  const existeEmail = await Usuario.findOne({ email });
  if (existeEmail) {
    return res.status(400).json({
      Mensaje: "Email is already registered",
    });
  }

  //Encriptar
  const salt = bcryptjs.genSaltSync();
  usuario.password = bcryptjs.hashSync(password, salt);

  await usuario.save();
  res.status(200).json({
    Message: "Hola post All",
    usuario,
  });
};

const putUser = (req, res) => {
  res.status(200).json({
    Message: "Hola put User",
  });
};

const patchUser = (req, res) => {
  res.status(200).json({
    Message: "Hola patch User",
  });
};

const deleteUser = (req, res) => {
  res.status(200).json({
    Message: "Hola delete User",
  });
};

module.exports = {
  getUsers,
  getUserID,
  postUser,
  putUser,
  patchUser,
  deleteUser,
};
