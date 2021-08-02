const express = require('express');
const app = express();
const adminAuthorRouter = express.Router();
const Authordata = require('../model/Authordata');

function router(){

    adminAuthorRouter.get('/',function(req,res){
        Authordata.find()
        .then(function(authors){
            res.render("adminAuthors",
            {
                nav,
                title:'Authors',
                authors
            });

        });
    });

    adminAuthorRouter.get('/:id',function(req,res){
        const id = req.params.id;
        Authordata.findOne({_id:id})
        .then(function(author){
            res.render("author",
            {
                nav,
                title:'Author',
                author: author
            });
        });
    });

       return adminAuthorRouter;


}



module.exports=router;
