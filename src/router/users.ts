import express, {Router} from 'express';

import { getAllUsers, deleteProduct, updateUser } from '../controllers/users';
import { isAuthenticated, isOwner } from '../middlewares';



export const usersRouter = Router({})
export default (router: express.Router) => {
  usersRouter.get('/', isAuthenticated, getAllUsers);
  usersRouter.delete('/:id', isAuthenticated, isOwner, deleteProduct);
  usersRouter.patch('/:id', isAuthenticated, isOwner, updateUser);

};
