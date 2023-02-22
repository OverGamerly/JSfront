import express from 'express';
import { dummy } from './dummy.js';

const server = express();

server.use(express.static('public'));

server.get("/list", function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    return res.end(JSON.stringify(dummy));
})

server.listen(3000);