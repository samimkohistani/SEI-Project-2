const Userdb = require('../model/model');

// create and save new player
exports.create = (req,res)=>{
    if(!req.body){
        res.status(400).send({message: "Content can not be empty"});
        return;
    }
    // New user
    const user = new Userdb({
        Name:req.body.Name,
        Age:req.body.Age,
        Team:req.body.Team,
        Position:req.body.Position,
        Contract:req.body.Contract,

    })

    // save date
    user
      .save(user)
      .then(data =>{
        res.send(data)
      })
      .catch(err =>{
        res.status(500).send({
            message:err.message || "some err occured while creating"
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

