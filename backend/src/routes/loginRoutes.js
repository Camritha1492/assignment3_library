const express = require('express');
const app = express();
const loginRouter = express.Router();
const Userdata = require('../model/Userdata');

function router(){
    
loginRouter.get('/login',function(req,res){



});


loginRouter.get('/signin',function(req,res){
 

});

loginRouter.post('/signin/add',function(req,res){
    var item = {
        email: req.body.email,
        password: req.body.password,
        address: req.body.address,
        address2: req.body.address2,
        city: req.body.city,
        phone: req.body.phone
    };

    var user = Userdata(item);
    user.save();

});


loginRouter.post('/login/new',function(req,res){
        const email= req.body.email;
        const password =  req.body.password;

    if(email == "library.admin@gmail.com" && password == "AdminLibrary*123")
    {

        //return true here
    }
    else
    {
        Userdata.findOne({email:email})
        .then(function(user){
            if(user.password == password)
            {
                //return userhome
            }
            else
            {
                alert("Credentials do not match!");
            }

            alert("Credentials do not match!");
        })
    }
    
});
        return loginRouter;
}

module.exports=router;
   