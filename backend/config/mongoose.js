const mongoose = require('mongoose');
const { mongoATLAS } = require('./keys')
const databaseConnect =  mongoATLAS //: 'mongodb://localhost:27017/theBest'
mongoose.connect(databaseConnect,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
})
.then(()=>console.log('YOU ARE SUCCESSFULLY CONNECTED on mongoatlas'))
.catch(console.error)