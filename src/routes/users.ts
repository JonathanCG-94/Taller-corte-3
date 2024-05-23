import express from 'express';
import { registerUser } from '../controllers/usersController';

export default (router: express.Router) => {
    router.post('/auth/register', registerUser);
};