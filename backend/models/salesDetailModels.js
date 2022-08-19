const mongoose = require(`mongoose`);
const Schema = mongoose.Schema;

const salesDetailSchema = new Schema({
  idSale: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
  idProduct: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("SalesDetail", salesDetailSchema);
/*name the collection with the string*/
