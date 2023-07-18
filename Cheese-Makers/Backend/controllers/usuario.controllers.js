const Usuario = require("../models/Usuario.js");

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
  const body = req.body;
  const usuario = new Usuario(body);
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
