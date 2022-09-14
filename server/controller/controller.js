const Userdb = require('../model/model');

// create and save new player
exports.create = (req, res) => {
    // create and save new user
    if(!req,body){
        res.status(400).send({message:"content can not be empty!"});
        return;
    }
    // new player
    const user = new Userdb({
        Player :req.body.Player,
        Age :req.body.Age,
        Team :req.body.Team,
        Position :req.body.Position,
        Contract :req.body.Contract
        
    })

    // save player in the database
    user
     .save(user)
     .then(data => {
        res.send(data)
     })
     .catch(err =>{
        res.status(500).send({
            message : err.message || "some error occurred while creating a create operation"  
        });
     });
}

// retrieve and return all users / retrieve and return a single user

exports.find = (req, res) => {

}


// update a new user by id

exports.update = (req, res) => {

}



// delete a user by specific id in the request 

exports.delete = (req, res) => {

}

