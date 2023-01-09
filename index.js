const campus = require('./information');
var cowsay = require("cowsay");

console.log(cowsay.say({
    text : `${campus.name} ${campus.campus}`,
    e : "oO",
    T : "U "
}));