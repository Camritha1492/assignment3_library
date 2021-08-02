const express = require('express');
const cors = require('cors');


const app = express();
app.use(cors());

const authorsRouter = express.Router();
const Authordata = require('../model/Authordata');

function router(){


        authorsRouter.get('/',function(req,res){
            Authordata.find()
            .then(function(authors){
                res.send(authors);

            });
        });
        
        authorsRouter.get('/:id',function(req,res){
            let nav = userNav;
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

        return authorsRouter;
}



module.exports=router;
