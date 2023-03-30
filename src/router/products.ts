import express, {Router} from 'express';
import {deleteProduct, getAllProducts, updateProduct} from "../controllers/products";
import {isAuthenticated, isOwner} from "../middlewares";


export const productsRouter = Router({})
export default (router: express.Router) => {
    productsRouter.get('/', isAuthenticated, getAllProducts);
    productsRouter.delete('/:id', isAuthenticated, isOwner, deleteProduct);
    productsRouter.patch('/:id', isAuthenticated, isOwner, updateProduct);
};