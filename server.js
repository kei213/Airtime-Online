require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const helmet = require("helmet")
const morgan = require("helmet")
const PORT = process.env.PORT || 3000
const userRoutes = require('./routes/users')
const authRoutes = require('./routes/auth')

// express app
const app = express()

// middleware
app.use(express.json())
app.use(helmet())
app.use(morgan("common"))


// routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

// connect to db
mongoose
	.connect(process.env.MONGO_URI, {useNewUrlParser:true})
	.then(() => {
		// listen for requests
		app.listen(PORT, () => {
			console.log('connected to MongoDb & listening on ' + PORT);
		});
	})
	.catch((error) => {
		console.log(error);
	});