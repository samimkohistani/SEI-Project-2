const axios = require('axios');



exports.homeRoutes = (req, res) => {
    //get request to the api/users
    axios.get('http://localhost:4999/api/users')
    .then(function(response){
        res.render("index",{users:response.data});
    })
    .catch(err=>{
        res.send(err);
    })
};

exports.add_user = (req, res) => {
    res.render("add_user");
};


exports.update_user = (req, res) => {
    res.render("update_user")
};