import express from 'express';
import {deleteProduct, getAllProducts, getProduct, makeProduct, updateProduct} from "../controllers/products";
import {isAuthenticated} from "../middlewares";


export default (router: express.Router) => {
    router.get('/products',  getAllProducts);
    router.get('/products/:id', getProduct)
    router.delete('/products/:id', isAuthenticated, deleteProduct);
    router.patch('/products/:id', isAuthenticated, updateProduct);
    router.post('/products',isAuthenticated, makeProduct);
};
