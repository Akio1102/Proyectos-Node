const { Router } = require("express");
const {
  getUsers,
  getUserID,
  postUser,
  putUser,
  patchUser,
  deleteUser,
} = require("../controllers/usuarios.controllers.js");

const router = Router();
const path = `/api/usuarios`;

router.get(path, getUsers);
router.get(`${path}/:id`, getUserID);
router.post(path, postUser);
router.put(path, putUser);
router.patch(`${path}/:id`, patchUser);
router.delete(`${path}/:id`, deleteUser);

module.exports = router;
