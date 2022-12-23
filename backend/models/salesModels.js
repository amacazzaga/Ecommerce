const mongoose = require(`mongoose`);
const Schema = mongoose.Schema;

const salesSchema = new Schema(
  {
    idUser: {
      type: mongoose.Types.ObjectId,
      required: true,
    },
    details: [
      {
        idProduct: {
          type: mongoose.Types.ObjectId,
          required: true,
        },
        amount: {
          type: Number,
          required: true,
        },
        unitPrice: {
          type: Number,
          required: true,
        },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Sales", salesSchema);
/*name the collection with the string*/
