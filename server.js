const express = require('express');
const next = require('next');
const orm = require('orm');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

process.env.DB_CONNECTION_STRING = process.env.DB_CONNECTION_STRING || 'sqlite://nextjs-starter.db'

let server;

app.prepare()
    .then(() => {
      server = express();

      return new Promise((resolve, reject) => {
      // Before we can set up authentication routes we need to set up a database
      orm.connect(process.env.DB_CONNECTION_STRING, function (err, db) {
        if (err) {
          return reject(err)
        }

        // Define our user object
        // * If adding a new oauth provider, add a field to store account id
        // * Tokens are single use but don't expire & we don't save verified date
        db.define('user', {
          username: {type: 'text', unique: true},
          email: {type: 'text', unique: true},
          password: {type: 'text'}
        })

        // Creates require tables/collections on DB
        // Note: If you add fields to am object this won't do that for you, it
        // only creates tables/collections if they are not there - you still need
        // to handle database schema changes yourself.
        db.sync(function (err) {
          if (err) {
            return reject(err)
          }
            return resolve(db)
          })
        })
      })
    })
    .then(db => {
    // Once DB is available, setup sessions and routes for authentication

    server.get('/a', (req, res) => app.render(req, res, '/b', req.query));

    server.get('/b', (req, res) => app.render(req, res, '/a', req.query));

    server.get('*', (req, res) => handle(req, res));

    server.listen(3000, (err) => {
      if (err) throw err;
      console.log('> Ready on http://localhost:3000');
    });
});
