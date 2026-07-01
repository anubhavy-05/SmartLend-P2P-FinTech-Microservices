require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db'); // <-- DB import kiya

// Database se connect karo (yeh fail hoga kyunki abhi URI dummy hai, par structure ready hai)
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// Default Root route
app.get('/', (req, res) => {
    res.send('Welcome to the SmartLend API! The server is live.');
});

app.get('/api/health', (req, res) => {
    res.json({ 
        status: 'active', 
        message: 'SmartLend Backend Server is running perfectly!' 
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server is up and running on http://localhost:${PORT}`);
});