const dotenv = require('dotenv');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const errorHandler = require('./middlewere/error');
const connectDataBase = require('./config/db');

const cie10 = require('./routes/cie10');
const cups = require('./routes/cups');
//const usuario = require('./routes/usuario');

dotenv.config({ path: './config/config.env' });
connectDataBase();

const app = express();
app.use(express.json());
app.use(cors());

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

//app.use('/usuario', usuario);
app.use('/api/cie10', cie10);
app.use('/api/cups', cups);
app.use(errorHandler);

const PORT = process.env.PORT || 5000
const server = app.listen(PORT,
    console.log('[Server Node.js] => Running, [Port]=>', process.env.PORT, ', [Mode]=>', process.env.NODE_ENV)
);

process.on('unhandledRejection', (err, promise) => {
    console.log('Errores: ', err.message);
    server.close(() => process.exit(1));
});