const { response } = require("express");
const Usuario = require("../models/Usuario.js");
const bcrypt = require("bcryptjs");

const login = async (req, res = response) => {
  const { email, password } = req.body;
  try {
    const findUser = await Usuario.findOne({ email });
    if (!findUser) {
      return res.status(400).json({
        msg: `El Email ${email} no esta registrado en la base de datos`,
      });
    }

    if (findUser.status === false) {
      return res.status(400).json({
        msg: `El Usuario no esta activo`,
      });
    }

    if (!bcrypt.compareSync(password, findUser.password)) {
      return res.status(400).json({
        msg: `La Contraseña: ${password} no es valida`,
      });
    }

    res.send({
      msg: "Ok",
    });
  } catch (error) {
    console.log(error);
    return res.status(404).send({ error: "Contacte con soporte Tecnico" });
  }
};

module.exports = {
  login,
};
