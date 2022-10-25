const express = require('express')
const app = express()
const port = 3000
const bodyParser = require("body-parser");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));  
app.use(bodyParser.json());

// routes the http request usually a string of the url
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/datarep', (req,res) =>{
    res.send('Welcome to data rep and querying')
})

app.get('/hello/:name', (req,res)=>{
    // outputs to the console
    // .params.name gets the parm name from the url request written as /hello/:name
    console.log(req.params.name);
    res.send("Hello "+req.params.name);
})

app.get('/api/books', (req,res)=>{
    const myBooks = [
        {
            "title": "Learn Git in a Month of Lunches",
            "isbn": "1617292419",
            "pageCount": 0,
            "thumbnailUrl":
            "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/umali.jpg",
            "status": "MEAP",
            "authors": ["Rick Umali"],
            "categories": []
            },
            {
            "title": "MongoDB in Action, Second Edition",
            "isbn": "1617291609",
            "pageCount": 0,
            "thumbnailUrl":
            "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/banker2.jpg",
            "status": "MEAP",
            "authors": [
            "Kyle Banker",
            "Peter Bakkum",
            "Tim Hawkins",
            "Shaun Verch",
            "Douglas Garrett"
            ],
            "categories": []
            },
            {
            "title": "Getting MEAN with Mongo, Express, Angular, and Node",
            "isbn": "1617292036",
            "pageCount": 0,
            "thumbnailUrl":
            "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/sholmes.jpg",
            "status": "MEAP",
            "authors": ["Simon Holmes"],
            "categories": []
            }  
    ]

    res.json({
        books: myBooks
    })
})

app.get('/test',(req,res)=>{
    // sends the file to the screen
    // __dirname gets the current directory path and then add the file name
    res.sendFile(__dirname + '/index.html');
})
app.get('/name', (req,res)=>{
    // outputs the get method
    console.log(req.query.fname);
    res.send('Hello '+req.query.fname+' '+req.query.lname);
})
// searches the body of the http request
// pull that data out and send it to screen
// must install body-parser for this to work
app.post('/name',(req,res)=>{
    res.send('Hello from post '+req.body.fname+''+req.body.lname);
})

// server listens for the url
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})