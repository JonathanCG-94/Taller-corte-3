import express from 'express';
import http from 'http';
import mongoose from 'mongoose';
import config from './config/config';
import router from './routes/index';
import bodyParser from 'body-parser';
import { MongoClient } from 'mongodb';

const app = express();
const server = http.createServer(app);
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
});

mongoose.Promise = Promise;
mongoose.connect(config.mongo.url);
mongoose.connection.useDb("CTM-00");
mongoose.connection.on('error', (error: Error) => console.log(error));

app.use('/api', router());