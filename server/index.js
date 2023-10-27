const express = require('express');
const app = express();
const PORT = 5000;
const cors = require('cors');

app.use(cors());

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const mongoose = require('mongoose');
app.get('/', (req, res) => {
    res.send('Hello from the server!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});



mongoose.connect('your_mongodb_connection_string', { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Failed to connect to MongoDB', err));

app.get('/products', (req, res) => {
    // Here, you would fetch and send products data.
    res.send(['1222','List of products']);
});
app.post('/products', (req, res) => {
    // Here, you would add a new product to the database.
    res.send('Product added!');
});