import mongoose from 'mongoose';

const ProductsSchema = new mongoose.Schema({
    title: { type: String, required: true },
    price: { type: Number, required: true },
    popular: { type: Boolean, required: true },
    description: { type: String, required: false},
    authentication: {
        password: { type: String, required: true, select: false },
        salt: { type: String, select: false },
        sessionToken: { type: String, select: false },
    },
});

export const UserModel = mongoose.model('Product', ProductsSchema);


export const getProducts = () => UserModel.find();
export const getProductByEmail = (email: string) => UserModel.findOne({ email });
export const getProductBySessionToken = (sessionToken: string) => UserModel.findOne({ 'authentication.sessionToken': sessionToken });
export const getProductById = (id: string) => UserModel.findById(id);
export const createProduct = (values: Record<string, any>) => new UserModel(values).save().then((user) => user.toObject());
export const deleteProductById = (id: string) => UserModel.findOneAndDelete({ _id: id });
export const updateProductById = (id: string, values: Record<string, any>) => UserModel.findByIdAndUpdate(id, values);
