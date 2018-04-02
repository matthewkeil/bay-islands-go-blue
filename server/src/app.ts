import * as bodyParser   from 'body-parser';
import * as compression  from 'compression';
import * as cookieParser from 'cookie-parser';
import * as cors         from 'cors';
import * as express      from 'express';
import * as session      from 'express-session';
import * as helmet       from 'helmet';
import * as morgan       from 'morgan';
import {
    authentication,
    authRouter
}                        from './auth';
import {mongoStore}      from './index';
import {router}          from './router';



const app = express();

app.use(helmet());
app.get(/.*favicon.ico/, (req, res) => res.end());
// noinspection Annotator
app.use(morgan('dev'));
app.use(cors({
    origin        : '*',
    exposedHeaders: ['Link']
}));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({
    secret           : process.env.SESSION_SECRET || 'SessionSecretShhhSilly....',
    saveUninitialized: true,
    resave           : true,
    store            : mongoStore
}));
app.use(compression());

app.use(authRouter);
app.use(authentication);
app.use(router);

export {app};
