import express from 'express';

import users from '../routes/users';

const router = express.Router();

export default (): express.Router => {
  users(router);

  return router;
};