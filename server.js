const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Riddle = require('./models/riddleModel'); // Adjust the path as needed

const app = express();
const PORT = process.env.PORT || 5001;

// MongoDB Connection
mongoose.connect('mongodb+srv://adalatjurat:test123@cluster0.pisi1cy.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Middleware
app.use(cors());

// API endpoint to get all riddles
app.get('/api/riddles', async (req, res) => {
  try {
    const riddles = await Riddle.find();
    res.json(riddles);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
