const express = require('express');
const connectDB = require('./config/db');
const cors = require('./middleware/cors');
const dotenv = require('dotenv').config();
const auth = require('./routes/auth.js');
const PORT = process.env.PORT || 8000;

connectDB();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.get('/', (req, res) => {
    res.json({ message: 'booking' });
});

app.use('/api/auth', auth);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));