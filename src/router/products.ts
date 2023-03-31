import express from 'express';
import {deleteProduct, getAllProducts, getProduct, makeProduct, updateProduct} from "../controllers/products";
import {isAuthenticated} from "../middlewares";


export default (router: express.Router) => {
    router.get('/hotels',  getAllProducts);
    router.get('/hotels/:id', getProduct)
    router.delete('/hotels/:id', deleteProduct);
    router.patch('/hotels/:id', updateProduct);
    router.post('/hotels', makeProduct);
};
