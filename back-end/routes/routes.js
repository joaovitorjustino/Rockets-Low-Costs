const router = require('express').Router();

const usuarioController = require("../controller/usuarioController");
const lancamentoController = require("../controller/lancamentoController"); 
const valorController = require("../controller/valorController");

router.route("/usuario/create").post((req, res) => usuarioController.create(req, res))
router.route("/usuario").get((req, res) => usuarioController.getAll(req, res))
router.route("/usuario/:nome").get((req, res) => usuarioController.get(req, res))
router.route("/usuario/:id").delete((req, res) => usuarioController.delete(req, res))
router.route("/usuario/:id").put((req, res) => usuarioController.update(req, res))


router.route("/lancamento/create").post((req, res) => lancamentoController.create(req, res))
router.route("/lancamento").get((req, res) => lancamentoController.getAll(req, res))
router.route("/lancamento/:id").get((req, res) => lancamentoController.get(req, res))
router.route("/lancamento/:id").delete((req, res) => lancamentoController.delete(req, res))
router.route("/lancamento/:id").put((req, res) => lancamentoController.update(req, res))



router.route("/valor/create").post((req, res) => valorController.create(req, res))
router.route("/valor").get((req, res) => valorController.getAll(req, res))
router.route("/valor/:id").get((req, res) => valorController.get(req, res))
router.route("/valor/:id").delete((req, res) => valorController.delete(req, res))
router.route("/valor/:id").put((req, res) => valorController.update(req, res))



module.exports = router