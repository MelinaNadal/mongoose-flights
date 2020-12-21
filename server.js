const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');
const port = 3000;

const indexRouter = require('./routes/index');
const flightsRouter = require('./routes/flights');
const ticketsRouter = require('./routes/tickets');

const app = express();

app.set('view engine','ejs');

require('./config/database');

app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));

app.use('/', indexRouter);
app.use('/flights', flightsRouter);
app.use('/', ticketsRouter);

app.listen(port, function() {
    console.log(`Express is listening on port:${port}`);
});