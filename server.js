const express = require('express')
const mongoose = require('mongoose')
const Riddle = require('./models/riddleModel')
const app = express()

//middleware
app.use(express.json())

//routes

app.get('/', (req, res) =>{
    res.send('Hello Uyghur-Riddle-Website')
})

app.get('/blog', (req, res) => {
    res.send('Hello Blog, My name is Adalat')
})

// get all the data from database
app.get('/riddles', async(req, res) => {
    try{
        const riddles = await Riddle.find({});
        res.status(200).json(riddles);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
 })

mongoose
.connect('mongodb+srv://adalatjurat:test123@cluster0.pisi1cy.mongodb.net/uyghur?retryWrites=true&w=majority')
.then(() => {
    console.log('connected to MongoDB')
    app.listen(3000, ()=> {
        console.log('Node api app is running on port 3000')
    });
}).catch(() =>{
    console.log(error)
})