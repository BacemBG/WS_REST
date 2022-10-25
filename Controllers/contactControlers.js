const Contact = require('../model/Contact');

exports.postContact = async (req,res)=>{
    try {
        //create a new contact with model contact
        const newContact = new Contact(req.body);
        //test if user has an email
        if(!req.body.email){
        res.status(400).send({message:"email is required ...."})
        return
    }
    //test if the email is already used
    const user = await Contact.findOne({email:req.body.email});
    if(user){
        res.status(400).send({message:"user is already exist ... should be unique"})
        return
    }
    //save the contact
    const response = await newContact.save();
    res.status(201).send({message:"user is saved", response:response})
    } catch (error) {
        console.log(error)
        res.status(500).send({message:"can not save it ..."})
    }
}