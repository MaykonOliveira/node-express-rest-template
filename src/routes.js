const express = require('express');

const routes = express.Router();

const ModelNameController = require('../src/controllers/ModelNameController');

routes.get('/modelname', ModelNameController.index);
routes.get('/modelname/:id', ModelNameController.show);
routes.post('/modelname', ModelNameController.store);
routes.put('/modelname/:id', ModelNameController.update);
routes.delete('/modelname/:id', ModelNameController.destroy);

module.exports = routes;
