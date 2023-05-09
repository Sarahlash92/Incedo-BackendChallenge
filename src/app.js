const express = require('express')
const app = express()

const doteenv = require('dotenv').config()
const PORT = process.env.PORT || 3000

//parsing data 
app.use(express.json());
app.use(express.urlencoded());

//setting up routes 
const artistSearchRouter = require('./routes/artistSearch')

app.use('/search', artistSearchRouter)

app.listen(PORT, ()=> {
  console.log(`Running Express Server on Port ${PORT}`);
})