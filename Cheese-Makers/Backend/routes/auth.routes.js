const { Router } = require("express");
const { check } = require("express-validator");

const { login } = require("../controllers/auto.controllers.js");
const { validationDocuments } = require("../middlewares/validate.documents.js");

const router = Router();
const path = `/api/login`;

router.post(
  path,
  [check("email", "Email is required").isEmail(), validationDocuments],
  login
);

module.exports = router;
