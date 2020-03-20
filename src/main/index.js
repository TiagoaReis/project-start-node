import express from 'express';

const server = express();

// const express = require('express')
// const server = express()

server.get('/', (req, res) => res.json({ token: 'authorization' }));

server.listen(3000);
