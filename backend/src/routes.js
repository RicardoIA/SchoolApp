const express = require('express');
const routes = express.Router();

const CourseController = require('./controllers/CourseController');
const SubjectController = require('./controllers/SubjectController');
const ClassController = require('./controllers/ClassController');

// Course Routes
routes.get('/course', CourseController.read);
routes.get('/course/:id', CourseController.readId);
routes.post('/course', CourseController.create);
routes.put('/course/:id', CourseController.update);
routes.delete('/course/:id', CourseController.delete);

// Subject Routes
routes.get('/subject/course/:idCourse', SubjectController.read);
routes.get('/subject/:id', SubjectController.readId);
routes.post('/subject', SubjectController.create);
routes.put('/subject/:id', SubjectController.update);
routes.delete('/subject/:id', SubjectController.delete);

// Class Routes
routes.get('/class/subject/:idSubject', ClassController.read);
routes.get('/class/:id', ClassController.readId);
routes.post('/class', ClassController.create);
routes.put('/class/:id', ClassController.update);
routes.delete('/class/:id', ClassController.delete);

module.exports = routes;