const express = require('express');
const cors = require('cors');

const userRoutes = require('./routes/UserRoutes');

const app = express();

//configurando json response
app.use(express.json());

//configurando cors
app.use(cors({ credentials:true, origin: 'http://localhost:3000' }));

//public folder for images
app.use(express.static('public'));

//routes
app.use('/users', userRoutes);


app.listen(5000)