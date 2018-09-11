var mongoose = require('mongoose');

var User = mongoose.model('UserTodo',{
    name: {
        type: String,
        required : true,
        minlength:1,
        trim:true

    },
    email:{
        type:String,
        minlength:1,
        trim:true
    }
});

module.exports = {User}


