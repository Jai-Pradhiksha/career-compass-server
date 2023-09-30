const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
    {

        username :{
            type : String,
            required : true,
            unique : true
        }
    },
    {
        collection : 'users'  
    }
)

module.exports = mongoose.model('users',userSchema)