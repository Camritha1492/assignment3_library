const express = require('express');
const multer = require('multer');
const ejs = require('ejs');
const path = require('path');

const app = express();
const adminBookOperationsRouter = express.Router();
const Bookdata = require('../model/Bookdata');


//set storage engine
const storage = multer.diskStorage({
    destination: './public/images/',
    filename: function(req, file, cb){
        cb(null,file.originalname);
    }
})

// //init upload
// const upload = multer({
//     storage: storage
// }).single('image');

// adminBookOperationsRouter.post('/add',function(req,res){
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE,OPTIONS');

//         console.log(req);
//             var item = {
//                 title: req.body.book.title,
//                 author: req.body.book.author,
//                 genre: req.body.book.genre,
//                 image: req.body.book.filename

//             };

//             console.log(item);

//             var book = Bookdata(item);
//             book.save();
//             });


function router(){

    adminBookOperationsRouter.get('/',function(req,res){

        });



        
    adminBookOperationsRouter.get('/update/:_id',function(req,res){
        const id = req.params._id;
        res.render("updateBooks",
        {
            nav,
            title:'Update Book',
            id            
        });
        });

    adminBookOperationsRouter.post('/update/:_id', function(req,res){
        var _id = req.params._id;
        var item = {
            title: req.body.title,
            author: req.body.author,
            genre: req.body.genre,
            image: req.body.image

        };
        Bookdata.findOne({_id:_id})
        .then(function(book){   
            book.overwrite(item);  
            book.save();    
        });
        res.redirect('/admin/books');
    });

    adminBookOperationsRouter.get('/delete/:_id',function(req,res){
            var _id = req.params._id;
            Bookdata.deleteOne({ _id: _id }, function (err) {
            if(err) console.log(err);
            console.log("Successful deletion");
            res.redirect('/admin/books');
        });

        });
        
        return adminBookOperationsRouter;
}


module.exports=adminBookOperationsRouter;
