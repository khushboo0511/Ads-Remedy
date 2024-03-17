const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

router.post('/', async (req, res) => {
  try {
    const order = new Order(req.body);
    await order.save();
    res.status(201).send(order);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.get('/', async (req, res) => {
  try {
    const orders = await Order.find().populate('product');
    res.send(orders);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
