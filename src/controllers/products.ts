import express from 'express';

import {deleteProductById, getProductById, getProducts} from "../db/products";

export const getAllProducts = async (req: express.Request, res: express.Response) => {
    try {
        const products = await getProducts();

        return res.status(200).json(products);
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
};

export const deleteProduct = async (req: express.Request, res: express.Response) => {
    try {
        const { id } = req.params;

        const deletedProduct = await deleteProductById(id);

        return res.json(deletedProduct);
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
}

export const updateProduct = async (req: express.Request, res: express.Response) => {
    try {
        const { id } = req.params;
        const { title } = req.body;

        if (!title) {
            return res.sendStatus(400);
        }

        const product = await getProductById(id);

        product.title = title;
        await product.save();

        return res.status(200).json(product).end();
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
}