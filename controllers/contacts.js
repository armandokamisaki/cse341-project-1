const mongodb = require('../data/database');

const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res) => {
    //swagger.tags=['Contacts']
    const result = await mongodb.getDb().db().collection('contacts').find();
    result.toArray().then((contacts) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(contacts); 
    });
};

const getSingle = async (req, res) => {
    //swagger.tags=['Contacts']
    const userId = new ObjectId(req.params.id);
    const result = await mongodb.getDb().db().collection('contacts').find({_id:userId});
    result.toArray().then((contacts) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(contacts[0]); 
      });
};

const createUser = async (req, res) => {  
    //swagger.tags=['Contacts']  
    const user = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        favoriteColor: req.body.favoriteColor,
        birthday: req.body.birthday
    };
    const result = await mongodb.getDb().db().collection('contacts').insertOne(user);
    if (result.ackowledged) {
        res.status(204).send();
    } else {
        res.status(500).json(result.error || 'Some error ocurred while creating the user.');
    }
};

const updateUser = async (req, res) => {
    //swagger.tags=['Contacts']
    const userId = new ObjectId(req.params.id);
    const user = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        favoriteColor: req.body.favoriteColor,
        birthday: req.body.birthday
    };
    const result = await mongodb.getDb().db().collection('contacts').replaceOne({_id:userId}, user);
    if (result.modifiedCount > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(result.error || 'Some error ocurred while updating the user.');
    }
};

const deleteUser = async (req, res) => {
    //swagger.tags=['Contacts']
    const userId = new ObjectId(req.params.id);    
    const result = await mongodb.getDb().db().collection('contacts').deleteOne({_id:userId});
    if (result.deletedCount > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(result.error || 'Some error ocurred while deleting the user.');
    }
};

module.exports = {
    getAll,
    getSingle,
    createUser,
    updateUser,
    deleteUser
};