const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
    index, 
    new: newFlight,
    create,
    show,
    addDestination
};

function index(req, res) {
    Flight.find({}, function(err, flights) {
        res.render('flights/index', { flights });
    });
}

function newFlight(req, res) {
    res.render('flights/new');
}

function create(req, res) {
    Flight.create(req.body, function(err, flight) {
        res.redirect('/flights');
    });
}

function show(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        Ticket.find({ flight: flight._id}, function(err, tickets) {
            res.render('flights/show', { flight, tickets });
        })
    });
}

function addDestination(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        flight.destinations.push(req.body);
        flight.save(function(err) {
            res.redirect(`/flights/${flight._id}`);
        });
    });
}