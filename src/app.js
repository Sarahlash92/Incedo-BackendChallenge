const express = require('express')
const app = express()

const dotenv = require('dotenv').config()
const PORT = process.env.PORT || 3000

app.use(express.json());
app.use(express.urlencoded());

/*setting up routes */
const artistSearchRouter = require('./routes/artistSearch')

app.use('/search', artistSearchRouter)

/* Handles invalid routes */

app.use((req, res, next) => {
  if (req.originalUrl !== '/search') {
    return res.status(404).send('Invalid route');
  }
  next();
});

app.listen(PORT, ()=> {
  console.log(`Running Express Server on Port ${PORT}`);
})