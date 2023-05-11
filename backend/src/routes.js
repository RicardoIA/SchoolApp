const express = require('express');
const routes = express.Router();

const CourseController = require('./controllers/CourseController');
const SubjectController = require('./controllers/SubjectController');
const ClassController = require('./controllers/ClassController');
const UserController = require('./controllers/UserController');
const LoginController = require('./controllers/LoginController');

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

// User Routes
routes.get('/user', UserController.read);
routes.get('/user/:id', UserController.readId);
routes.post('/user', UserController.create);
routes.put('/user/:id', UserController.update);
routes.delete('/user/:id', UserController.delete);

// Login Routes
routes.post('/login', LoginController.login);

module.exports = routes;