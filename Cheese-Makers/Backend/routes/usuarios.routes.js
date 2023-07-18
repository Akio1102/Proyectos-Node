const { Router } = require("express");
const { check } = require("express-validator");
const { validationDocuments } = require("../middlewares/validate.documents.js");
const Role = require("../models/Role.js");
const {
  getUsers,
  getUserID,
  postUser,
  putUser,
  patchUser,
  deleteUser,
} = require("../controllers/usuario.controllers.js");

const router = Router();
const path = `/api/usuarios`;

router.get(path, getUsers);
router.get(`${path}/:id`, getUserID);
router.post(
  path,
  [
    check("nombre", "El nombre no es valido").not().isEmpty(),
    check("password", "La Password debe ser de minimo 6 letras").isLength({
      min: 6,
    }),
    check("email", "El correo no es valido").isEmail(),
    /* check("rol", "No es un rol valido").isIn(["ADMIN", "USER"]), */
    check("rol").custom(async (rol = "") => {
      const existeRol = await Role.findOne({ rol });
      if (!existeRol) {
        throw new Error(`El rol ${rol} no esta registrado en la base de datos`);
      }
    }),
    validationDocuments,
  ],
  postUser
);
router.put(path, putUser);
router.patch(`${path}/:id`, patchUser);
router.delete(`${path}/:id`, deleteUser);

module.exports = router;
