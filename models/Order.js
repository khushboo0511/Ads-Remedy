const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product'
  },
  quantity: Number
});

module.exports = mongoose.model('Order', orderSchema);
