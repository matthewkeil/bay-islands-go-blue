import {MongoStore} from 'connect-mongo';
import * as session from 'express-session';
import * as http    from 'http';
import {
    Db,
    MongoClient
}                   from 'mongodb';
import {app}        from './app';



const MS = require('connect-mongo')(session);


const normalizePort = (val: any) => {
    let port = parseInt(val);

    if (isNaN(port)) { // is a named pipe
        return val;
    }

    if (port >= 0) {   // port is a number
        return port;
    }

    return undefined;
};


const PORT = normalizePort(process.env.API_PORT || 3001);
app.set('port', PORT);

export let db: Db;
export let mongoStore: MongoStore;

const DB_URL: string  = process.env.DB_URL || 'mongodb://localhost:27017';
const DB_NAME: string = process.env.DB_NAME || 'bay-islands-go-blue';

MongoClient.connect(DB_URL, (err: Error, client: MongoClient) => {

    if (err || !client) {
        console.error(err || new Error('no mongo client connection'));
        process.exit(1);
    }

    db = client.db(DB_NAME);

    mongoStore = new MS(<any>{db});

    console.log(`Connected to mongodb at ${DB_URL}/${DB_NAME}`);

    const server = http.createServer(app);

    server.on('close', () => {
        client.close();
    });

    server.listen(PORT, () => {
        console.log('Listening on port', PORT);
    });
});
