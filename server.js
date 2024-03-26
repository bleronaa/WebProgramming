const express = require("express");
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

// Routes
app.get('/api/users', async(req, res) => {
    const users = [
        {
            name: 'Blerona',
            gender: 'F'
        }, {
            name: 'Altin',
            gender: 'M'
        }
    ]
    res.json(users);
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})

/*
npx create-react-app client
cd client
npm install axios
*/