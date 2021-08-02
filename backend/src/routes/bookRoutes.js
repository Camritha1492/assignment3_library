const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());


const booksRouter = express.Router();
const Bookdata = require('../model/Bookdata');


booksRouter.get('/',function(req,res){ 
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE,OPTIONS'); 


    Bookdata.find()
    .then(function(books){
        console.log(books);
            res.send(books);          
    });
}); 

function router(){ 
        


        booksRouter.get('/:id',function(req,res){
            const id = req.params.id;
            Bookdata.findOne({_id:id})
            .then(function(book){
                res.send(book);  
            });          

        });

        return booksRouter;
}



module.exports=booksRouter;
