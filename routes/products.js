const router = require('express').Router();

const controller = require('../controllers/ProductController');

router.get('/', controller.getAll);
router.get('/name/:name', controller.getByName);
router.get('/:id', controller.getById);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.delete('/:id', controller.delete);

module.exports = router;
