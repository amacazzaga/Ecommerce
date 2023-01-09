//for create and edit a product//
const isValidAmount = (req, res, next) => {
  const amount = req.body.amount;
  if (!amount)
    return res.status(400).json(`cant create a product without stock`);
  try {
    if (Math.sign(amount)!==1) {//return 1 if postive number
      return res.status(400).json("invalid amount");
    }
    next();
  } catch (err) {
    return res.status(401).json({message:"error"});
  }
};
//cheque amount on the purchase on the client side
const isValidAmountForSale = async (req, res, next) => {
  const details = req.body.details;
  try {
    const amount = await details.map((d) => {
      if (Math.sign(d.amount)!==1) {//return 1 if positive number
        return res.status(400).json("not a valid amount");
      }
      next();
    });
  } catch (err) {
    return res.status(401).json({message:"error"});
  }
};
module.exports = { isValidAmount, isValidAmountForSale };
