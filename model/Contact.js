const mongoose = require('mongoose');

const {Schema,model} = mongoose;

const contactSchema = new Schema({
    name : {type:String, require:true},
    email : {type:String, require:true},
    phone : String
})
module.exports = Contact = model("contacts", contactSchema)