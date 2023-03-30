import express from 'express';
import {deleteProduct, getAllProducts, updateProduct} from "../controllers/products";
import {isAuthenticated, isOwner} from "../middlewares";



export default (router: express.Router) => {
    router.get('/products', isAuthenticated, getAllProducts);
    router.delete('/products/:id', isAuthenticated, isOwner, deleteProduct);
    router.patch('/products/:id', isAuthenticated, isOwner, updateProduct);
};