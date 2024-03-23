import express from 'express';
import ejs from 'ejs';
import path from 'path';
import bodyParser from 'body-parser';
import { fileURLToPath } from 'url';

//importing routes
import aboutMe from './routes/aboutme.js';
import contact from './routes/contact.js';
import sendMessage from './routes/sendMessage.js';


const server = express();

const __dirname = path.dirname(fileURLToPath(import.meta.url));

server.set('view engine', 'ejs');
server.set('views', path.join(__dirname, 'views'));
server.use(express.static(path.join(__dirname, 'public')));
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(express.json());
server.use(contact);
server.use(aboutMe);
server.use(sendMessage);
server.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});


server.get('/', (req, res) => {
  res.render('home');
});

export default server;