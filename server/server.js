//imp0rt required libraries
const express = require('express');
const mongoose = require('mongoose');

//MongoDB connection setup
const connectionString = 'mongodb+srv://patricknsolo:4bwWYCFRqIFzq5Tc@cluster0.1krac5n.mongodb.net/'

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log('Connected to MongoDB');
})
.catch((error) => {
    console.error('Connection to mongoDB failed', error);
});


//mongoose model definition
const Schema = mongoose.Schema;

const userSchema = new Schema({
    riskScoreTolerance: Number,
    nigerianStocks: Number,
    foreignStocks: Number,
    techStocks: Number,
    emergingStocks: Number,
    nigerianBonds: Number,
    foriegnBonds: Number,
    commodities: Number,
    realEstate: Number,
    tBills: Number,
    alternative: Number,
})

const User = mongoose.model('User', userSchema);

//Express app setup
const app = express();
const port = process.env.PORT || 3000;

//middleware to parse json requests
app.use(express.json());

//define route to add new user data
app.post('/users', async (req,res) => {
    try{
        const userData = req.body;
        const user = new User(userData);
        await user.save();
        res.status(201).json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({error: 'Failed to create user'});
    }
});

//define a route to retrieve all user data
app.get('/users', async (req, res) => {
    try{
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({error:'Failed to retrieve users'});
    }
});

//start express app
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

