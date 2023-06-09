const express = require('express');
const PORT = process.env.PORT  || 8000;
const expressLayouts= require('express-ejs-layouts');
const bodyParser = require('body-parser');
require('./config/mongoose');


const app= express();

app.use(express.static('./assests'));
app.use(express.urlencoded({extended:true}));
app.use(expressLayouts);


//set up the view engine
app.set('view engine','ejs');
app.set('views','./views');




//use express router
app.use('/', require('./routes'));

app.listen(PORT,function(err){
    if(err){
        console.log(`Error : ${err}`);
        return ;
    }
    else{
        console.log(`My express server is up at port:${PORT}`);
    }
})