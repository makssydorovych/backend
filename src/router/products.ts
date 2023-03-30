import express from 'express';
import {deleteProduct, getAllProducts, makeProduct, updateProduct} from "../controllers/products";
import {isAuthenticated, isOwner} from "../middlewares";


export default (router: express.Router) => {
    router.get('/products',  getAllProducts);
    router.delete('/products/:id', isAuthenticated, isOwner, deleteProduct);
    router.patch('/products/:id', isAuthenticated, isOwner, updateProduct);
    router.post('/products', makeProduct);
};
