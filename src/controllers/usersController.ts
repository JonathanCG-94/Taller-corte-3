import express from 'express';
import { createUser, getUserByEmail } from '../models/Users';

export const registerUser = async (req: express.Request, res: express.Response) => {
    try {
        const { username, email, password } = req.body;
        if (!email || !password || !username) {
            return res.sendStatus(400);
        }

        const existingUser = await getUserByEmail(email);

        if (existingUser) {
            return res.status(400).json({ error: `Ya existe un usuario con este email: ${existingUser.email}` });
        }

        const user = await createUser({
            username,
            email,
            password
        });

        return res.status(200).json(user).end();
    } catch (error) {
        console.error('Error al registrar usuario:', error);
        res.status(500).json({ message: 'Error al registrar usuario' });
    }
};

/* 
export const loginUser = async (req: Request, res: Response) => {
    try {
        const { username, password } = req.body;
        const login = await UserModel.findOne({ username: username, password: password });
        if (!login) {
            res.status(404).json({ message: 'Username or password invalid' });
        } else {
            res.status(200).json({ message: 'User login successful' });
        }

    } catch (error) {
        res.status(500).json({ message: 'Error login user' });
    }
};

export const getUserProfile = async (req: Request, res: Response) => {
    try {
        const { username } = req.body;
        const userProfile = await UserModel.findOne({ username: username });
        if (userProfile) {
            res.status(200).json({ userProfile: userProfile });
        } else {
            res.status(200).json({ userProfile: undefined });
        }
    } catch (error) {
        res.status(500).json({ message: `Error getting User Profile` });
    }
}; */