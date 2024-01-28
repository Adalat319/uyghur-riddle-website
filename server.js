const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 5001;


// MongoDB Connection
mongoose.connect('mongodb+srv://adalatjurat:test123@cluster0.pisi1cy.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Event listeners for MongoDB connection
mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB');
  });
  
  mongoose.connection.on('error', (err) => {
    console.error('MongoDB connection error:', err);
  });
  
  mongoose.connection.on('disconnected', () => {
    console.log('Disconnected from MongoDB');
  });

// Create a mongoose schema and model for Uyghur Riddles
const riddleSchema = new mongoose.Schema({
    category: String,
    riddle: String,
    answer: String,
    explanation: String,
  });
  
  const Riddle = mongoose.model('Riddle', riddleSchema);
  

// Express Middleware
app.use(cors());
app.use(express.json());

// API Routes
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
