const mongoose = require(`mongoose`);
const Schema = mongoose.Schema;

const stockSchema = new Schema(
  {
    idProduct: { type: mongoose.Types.ObjectId, required: true },
    amount: { type: Number, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Stock", stockSchema);
