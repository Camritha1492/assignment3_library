const express = require('express');
const app = express();
const adminBookRouter = express.Router();
const Bookdata = require('../model/Bookdata');



function router(){

    adminBookRouter.get('/',function(req,res){
        Bookdata.find()
        .then(function(books){

            res.render("adminBooks",
            {
                nav,
                title:'Books',
                books
            });

        });
    });

    adminBookRouter.get('/:id',function(req,res){
        const id = req.params.id;
        Bookdata.findOne({_id:id})
        .then(function(book){
            res.render("book",
            {
                nav,
                title:'Book',
                book
            });
        });          

    });
    
      
        return adminBookRouter;
}


module.exports=router;
