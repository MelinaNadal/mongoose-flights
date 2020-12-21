const mongoose = require('mongoose');
const db = mongoose.connection;

mongoose.connect('mongodb://localhost/mongoose-flights', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
});

db.on('connected', function() {
    console.log(`Connected to MongoDB on ${db.host}:${db.port}`);
});