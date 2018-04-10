var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var schema = new Schema({
    name: {type: String, required: true},
    acceptoption: {type: Boolean, required: true},
    rejectoption: {type:Boolean, required:true}
});


module.exports = mongoose.model('Skill', schema);