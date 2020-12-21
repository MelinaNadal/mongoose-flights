const { model } = require("mongoose");

module.exports = {
    index
};


function index(req, res) {
    res.render('index');
}