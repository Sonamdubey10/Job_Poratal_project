const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

require('dotenv').config()

const app = express();

// Middleware
app.use(express.json());
const uri = `mmongodb+srv://sonamdubey:S22onam@sandbox.vw4wrva.mongodb.net/`;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch(err => {
  console.error('MongoDB connection error:', err);
});

// Routes
app.use('/api/auth', require('./routes/auth'));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
