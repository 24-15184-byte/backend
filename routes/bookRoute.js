import * as bookController from '../controllers/bookController.js';
import express from 'express';

const bookRoutes = express.Router();

bookRoutes.get('/all', bookController.fetchAllBooks);
bookRoutes.post('/', bookController.createBook);
bookRoutes.post('/all', bookController.createBook); // fallback para sa POST /book/all
bookRoutes.put('/:id', bookController.editBook);
bookRoutes.delete('/:id', bookController.deleteBook);

export default bookRoutes;
