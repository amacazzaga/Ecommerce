const mongoose = require(`mongoose`);
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  rol:{
    type:Array,
    required: false,
    
  }
});

module.exports = mongoose.model("Users", userSchema);
/*name the collection with the string*/
