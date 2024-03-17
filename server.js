const express = require('express');
const mongoose = require('mongoose');
const productRoutes = require('./routes/productRoutes');
const orderRoutes = require('./routes/orderRoutes');

const app = express();
app.use(express.json());

const dbConnect = async () => {
  try {
      await mongoose.connect("mongodb://0.0.0.0:27017/restaurant")
      app.listen(4000, () => console.log("Database connected"))
  } catch (error) {
      console.error(error)
      process.exit(1)
  }
}
dbConnect()

app.use('/products', productRoutes);
app.use('/orders', orderRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
