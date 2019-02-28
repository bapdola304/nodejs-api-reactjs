const express = require('express');
const app = express();
const productRoutes = require('./routes/products');
const bodyParser = require('body-parser');

// use it before all route definitions
// app.use(cors({origin: 'http://localhost:8888'}));

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/products_api', {useNewUrlParser: true});


app.use(bodyParser.urlencoded({ extended: false }))
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.header('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');

    // Request headers you wish to allow
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    // Pass to next layer of middleware
    next();
});

app.use('/products', productRoutes);
app.use((req, res, next) =>{
	const error = new Error('Not Found');
	error.status = 404;
	next(error);
})
app.use((error, req, res, next) =>{
	res.status(error.status || 500).json({
		error :

		{ message : error.message }
	})
})


app.listen(3001,() =>{
	console.log("ket noi thanh cong");
});