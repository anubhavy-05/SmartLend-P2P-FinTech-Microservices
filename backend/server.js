require('dotenv').config();
const express = require('express');
const cors = require('cors');

// Express app initialize karna
const app = express();

// Middleware (Frontend se aane wale JSON data ko read karne ke liye)
app.use(cors());
app.use(express.json());

// Ek simple test route
app.get('/api/health', (req, res) => {
    res.json({ 
        status: 'active', 
        message: 'SmartLend Backend Server is running perfectly!' 
    });
});

// Server ko port 5000 par start karna
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server is up and running on http://localhost:${PORT}`);
});