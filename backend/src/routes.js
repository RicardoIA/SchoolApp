const express = require('express');
const routes = express.Router();

const CourseController = require('./controllers/CourseController');

// Course Routes
routes.get('/course', CourseController.read);
routes.get('/course/:id', CourseController.readId);
routes.post('/course', CourseController.create);
routes.put('/course/:id', CourseController.update);
routes.delete('/course/:id', CourseController.delete);

module.exports = routes;