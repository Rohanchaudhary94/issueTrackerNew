// // require the library
// const mongoose= require('mongoose');
// //supress wRNING
// mongoose.set('strictQuery', true);
// const path= 'mongodb://127.0.0.1:27017/issueTracker';
// //  const path = 'mongodb+srv://shubham21101997:1XKDfXnqsQmSfI8C@codeial.0y4o9t7.mongodb.net/?retryWrites=true&w=majority';
// //connected to database -
// mongoose.connect(path);

// //acquire the connection to check if it is successful
// const db=mongoose.connection;

// //error
// db.on('error' ,console.error.bind(console,'error connectiong to mongodb'));

// //up and running print the message
// db.once('open', function(){
//     console.log('successfully connected to database');
// })

// module.exports=db;

const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
mongoose.connect('mongodb://localhost:27017/issueTracker', {
    // useCreateIndex: true,
    useNewUrlParser:true,
    useUnifiedTopology: true,
    
    
}).then(() => {
    console.log('connection is successfully');
}).catch((e) => {
    console.log('No Connection');
})

