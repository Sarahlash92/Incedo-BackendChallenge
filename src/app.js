const express = require('express');
const app = express();

const doteenv = require('dotenv').config();
const PORT = process.env.PORT || 3000

app.listen(PORT, ()=> {
  console.log(`Running Express Server on Port ${PORT}`);
})