import express from 'express';
import mongoose from 'mongoose';
import routes from './routes';
import conection from '../database/conection'

mongoose.connect(
    'mongodb+srv://assist24hs:assist24hs@cluster0-vilcj.mongodb.net/assist24hs?retryWrites=true&w=majority',
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
);
const port = 3333
const server = express();
// const express = require('express')
// const server = express()
server.use(express.json());
server.use(routes);

console.log('Api rodando na porta -> http://localhost:' + port)
server.listen(port);
