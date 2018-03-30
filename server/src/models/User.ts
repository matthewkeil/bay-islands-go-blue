import * as bcrypt from 'bcrypt';
import * as jwt    from 'jsonwebtoken';
import {
    SignOptions,
    VerifyOptions
}                  from 'jsonwebtoken';
import {
    isArray,
    promisify
}                  from 'util';
import {db}        from '../index';



export type Token = string;
export type TokenPayload = {
    id: string;
    email: string;
    admin?: boolean;
};

const JWT_SECRET = process.env.JWT_SECRET || 'shhh...itsasecret';


export const Users = () => db.collection('users');

export class User {

    static find = {
        by       : {
            id   : (id: string): Promise<User.I> => Users().findOne({id}),
            email: (email: string | string []): Promise<User.I> => Users().findOne(!isArray(email)
                ? {email}
                : {email: {$in: email}})
        },
        duplicate: {
            email: (email: string | string[]) => <Promise<User.I[]>>Users().find(!isArray(email)
                ? {email}
                : {email: {$in: email}}).toArray()
        }
    };

    static update = async (id: string, update: any): Promise<User.I> => {
        let result = await Users().findOneAndUpdate({id}, update, {returnOriginal: false});
        if (result.ok === 1) return result.value;
        throw new Error('Unknown error updating user');
    };

    static jwt = {
        encode: (payload: TokenPayload): Promise<Token> => {
            const ENCODE               = promisify(jwt.sign);
            const options: SignOptions = {
                issuer   : 'BayIslandsGoBlue',
                expiresIn: 60 * 60 * 24 * 365 // tokens expire in one year
            };
            //@ts-ignore
            return ENCODE(payload, JWT_SECRET, options);
        },
        decode: (token: Token): Promise<TokenPayload> => {
            const DECODE                 = promisify(jwt.verify);
            const options: VerifyOptions = {
                issuer: 'BayIslandsGoBlue'
            };
            //@ts-ignore
            return DECODE(token, JWT_SECRET, options);
        }
    };

    static password = {
        hash  : (password: string): Promise<string> => {
            return bcrypt.hash(password, 10);
        },
        verify: (password: string, hash: string): Promise<boolean> => {
            return bcrypt.compare(password, hash);
        }
    };
}

export namespace User {
    export type I = IUser;
    export interface IUser {
        id: string;
        email: string;
        password: string;
        token: string;
        admin?: boolean;
    }
}