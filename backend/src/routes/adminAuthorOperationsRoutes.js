const express = require('express');
const multer = require('multer');
const ejs = require('ejs');
const path = require('path');

const app = express();
const adminAuthorOperationsRouter = express.Router();
const Authordata = require('../model/Authordata');

//set storage engine
const storage = multer.diskStorage({
    destination: './public/images/',
    filename: function(req, file, cb){
        cb(null,file.originalname);
    }
})

//init upload
const upload = multer({
    storage: storage
}).single('image');


adminAuthorOperationsRouter.post('/add',function(req,res){

           var item = {
                name: req.body.author.name,
                genre: req.body.author.genre,
                image: req.file.author.filename,
                desc: req.body.author.desc
    
            };

            console.log(req.body);

            var author = Authordata(item);
            author.save();      
    }

);


function router(){

    adminAuthorOperationsRouter.get('/',function(req,res){
        res.render("addAuthor",
        {
            nav,
            title:'Add Author',
        });
        });

            
    adminAuthorOperationsRouter.get('/update/:_id',function(req,res){
        const id = req.params._id;
        res.render("updateAuthors",
        {
            nav,
            title:'Update Author',
            id            
        });
        });
    adminAuthorOperationsRouter.post('/update/:_id', function(req,res){
        var _id = req.params._id;
        var item = {
            name: req.body.name,
            genre: req.body.genre,
            image: req.body.image,
            desc : req.body.desc

        };
        Authordata.findOne({_id:_id})
        .then(function(author){   
            author.overwrite(item);  
            author.save();    
        });
        res.redirect('/admin/authors');


    });

     adminAuthorOperationsRouter.get('/delete/:_id',function(req,res){
        var _id = req.params._id;
        Authordata.deleteOne({ _id: _id }, function (err) {
        if(err) console.log(err);
        console.log("Successful deletion");
        res.redirect('/admin/authors');
        });
    });

    return adminAuthorOperationsRouter;


}



module.exports=adminAuthorOperationsRouter;
