const express = require('express');
const cors = require('cors');


const port = process.env.PORT|| 3000;
const app = express();
app.use(cors());

const loginRouter = require('./src/routes/loginRoutes');
const booksRouter = require('./src/routes/bookRoutes');
const authorsRouter = require('./src/routes/authorRoutes');
const adminBookRouter = require('./src/routes/adminBookRoutes');
const adminAuthorRouter = require('./src/routes/adminAuthorRoutes');
const adminAuthorOperationsRouter = require('./src/routes/adminAuthorOperationsRoutes');
const adminBookOperationsRouter = require('./src/routes/adminBookOperationsRoutes');


//const booksRouter = express.Router();
const Bookdata = require('./src/model/Bookdata');

app.use(express.urlencoded({extended:true}));
//app.use(express.static('./public'));
//app.use('/logon', loginRouter);
app.use('/books',booksRouter);
app.use('/authors',authorsRouter);
//app.use('/admin/books',adminBookRouter);
//app.use('/admin/authors',adminAuthorRouter);
app.use('/admin/addBook', adminBookOperationsRouter);
app.use('/admin/addAuthor', adminAuthorOperationsRouter);

app.post('/addbook',function(req,res){
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE,OPTIONS');

        console.log(req);
            var item = {
                title: req.body.book.title,
                author: req.body.book.author,
                genre: req.body.book.genre,
                image: req.body.book.filename

            };

            console.log(item);

            var book = Bookdata(item);
            book.save();
    });


app.get('/load',function(req,res){

    var book = 
        {
            title: 'Tom and Jerry',
            author: 'Joseph BArbera',
            genre: 'cartoon',
            image: "https://i.pinimg.com/originals/52/c6/65/52c665df0515dd447eb92544374cf543.jpg"
        };
        var book = Bookdata(book);
        book.save();

});

app.get('/Home', function(req,res){

})

app.get('/UserHome', function(req,res){

})
   



app.listen(port, ()=>{console.log("Server Ready at" + port)});