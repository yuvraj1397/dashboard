const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const apiRoutes = require('./routes/api');
// require('dotenv').config(); 

const app = express();


app.use(cors());
app.use(express.json());
// mp="mongodb://localhost:27017/test/";
mp="mongodb+srv://yuv:joyboy@cluster0.uhlmket.mongodb.net/";

// MongoDB connection
mongoose.connect(mp, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Routes
app.use('/api', apiRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
