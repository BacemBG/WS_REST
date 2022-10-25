const { Router } = require("express");
const express = require("express")
const router = express.Router();

const controllers = require("../Controllers/contactControlers");
const Contact = require("../model/Contact");

//test Routing
router.get("/hello",(req,res)=>{
    res.send("hello routing")
})

//post Contact
router.post("/addContact",controllers.postContact)

router.get('/',async(req,res)=>{
    try {
        const result = await Contact.find();
        res.status(200).send({response:result, message:"getting contacts successfully"})
    } catch (error) {
        res.status(500).send({message:"can not get conatacts"})
    }
})



router.get('/:id',async(req, res)=>{
    try {
        const result = await Contact.findOne({_id:req.params.id})
        res.send({response:result , message:"getting contact with id successfully"})
    } catch (error) {
        res.status(400).send({message:"there is no contact with this id"})
    }
})

//delet contact

router.delete('/:id', async(req, res)=>{
    try {
        const result = await Contact.deleteOne({id:req.params.id})
        result ? res.status(200).send({message:"contact deleted..."})
        : res.status(400).send({message:"there is no contact with this id..."})
    } catch (error) {
        res.status(500).send({message:"server error..."})
    }
})

//Update Contact with ID
//Put Method
//url : http//locallhost4000/api/contact/id
//Params ID

router.put('/:id', async(req, res)=>{
    try {
        const id = req.params.id
        const result = await Contact.updateOne({_id:id},{$set:{...req.body}})
        //const getContact = await Contact.findOne({_id:id})
        result ? res.status(200).send({message:"contact Updated..."})
        : res.status(400).send({message:"there is no contact with this id..."})
        
    } catch (error) {
        res.status(500).send({message:"server error..."})
    }
})

module.exports = router