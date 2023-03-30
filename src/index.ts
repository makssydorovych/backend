import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import router from './router';
import mongoose from 'mongoose';
import {usersRouter} from "./router/users";
import {productsRouter} from "./router/products";


const app = express();
const port = process.env.PORT || 5000
app.use(cors({
  credentials: true,
}));

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer(app);

server.listen(port, () => {
  console.log('Server running on http://localhost:5000/');
});

const MONGO_URL = 'mongodb+srv://admin:1234@cluster0.caivk1r.mongodb.net/?retryWrites=true&w=majority';

mongoose.Promise = Promise;
mongoose.connect(MONGO_URL);
mongoose.connection.on('error', (error: Error) => console.log(error));

app.use('/users', usersRouter);
app.use('/products', productsRouter)
