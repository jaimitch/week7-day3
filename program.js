const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const Ninja = require('./models/ninja.js');

mongoose.connect('mongodb://localhost:27017/NinjasApplication');

var steve = new Ninja({ name: 'Steve', email: 'steve@pirate.ninja', password: 'qwer1234', power: 75 });
var jaren = new Ninja({ name: 'Jaren', email: 'jaren@pirate.ninja', password: 'qwer1234', power: 99 });
var donovan = new Ninja({ name: 'Donovan', email: 'donovan@pirate.ninja', password: 'qwer1234', power: 88 });

async function getNinja(page, size){
    var index = (page - 1, 0) * size;
    var jaren = await Ninja.find({ name: 'Jaren' })
        .where('power').gt(50)
        .skip(index)
        .limit(size)

    return jaren;
}

Ninja.updateMany({ password: 'qwer1234'},
    { push: {phone: ''}});

Ninja.deleteOne({ name: 'Steve'});

getNinja(1, 20);





