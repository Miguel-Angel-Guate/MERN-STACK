require('./config/mongoose.js');

const express = require('express');
const app = express();
const morgan = require('morgan');
const PORT = process.env.PORT || 3002;

// rutas
const usersRouter = require('./routes/users')

app.use(function(req, res, next) {
       res.header("Access-Control-Allow-Origin", "*");
       res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
       res.header("Access-Control-Allow-Methods", "POST","GET","PUT","OPTIONS","DELETE");
       next();
     });
     app.use(morgan('dev'))
     app.use(express.json());
     app.use(express.urlencoded({ extended:true }));
     

     app.use('/users',usersRouter)


app.listen(PORT, () => console.log(`the server is running on port ${PORT}`));