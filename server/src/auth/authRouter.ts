import * as express from 'express';

import {
    User,
    Users
} from '../models';

import {ValidEmail, ValidPassword} from './';
import uuid = require('uuid');



const authRouter = express.Router();

authRouter.post('/auth/login', async (req, res, next) => {
    try {
        let email: string;

        if (req.body && req.body.email && ValidEmail.test(req.body.email))
            email = req.body.email;
        else res.status(400).send({error: {message: 'Invalid email address'}});

        const user = await User.find.by.email(email);

        if (!(user && User.password.verify(req.body.password || '', user.password)))
            res.status(401).send({error: {message: 'Invalid email or password'}});

        const token = await User.jwt.encode({email: user.email, id: user.id});

        await User.update(user.id, {token});

        res.status(201).send({token: user.token});
    } catch (err) {
        next(err);
    }
});

authRouter.post('/auth/register', async (req, res, next) => {
    try {
        let email: string;

        if (req.body && req.body.email && ValidEmail.test(req.body.email)) email = req.body.email;
        else res.status(400).send({error: {message: 'Invalid email address'}});

        const existingUsers = await User.find.duplicate.email(email);

        if (existingUsers && (existingUsers.length > 0)) existingUsers.length === 1
            ? res.status(401).send({error: {message: 'Email account in use'}})
            : next(new Error('Multiple accounts exist with one email address'));

        // if (!ValidPassword.test(req.body.password)) res.status(400).send({error: {message: 'Invalid password'}});

        const id = uuid.v1();

        const user = {
            id      : id,
            email   : email,
            password: await User.password.hash(req.body.password),
            token   : await User.jwt.encode({email, id})
        };

        const result = await Users().insertOne(user);

        if (result.result.ok === 1) res.status(201).send({token: user.token});
        else next(new Error('Unknown error creating new user'));
    } catch (err) {
        next(err);
    }
});

export {authRouter};