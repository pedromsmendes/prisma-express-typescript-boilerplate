import expressServer from 'express';

import welcome from './routes/welcome';
import notFound from './routes/notFound';
import create from './routes/create';
import getUsers from './routes/users';

const express = expressServer();

express.get('/', welcome);
express.get('/create', create);
express.get('/users', getUsers);
express.get('/*', notFound);

export default express;
