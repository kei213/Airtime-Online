const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
	username:{
		type: String,
		require: true,
		min: 3,
		max: 20,
		unique: true

	},
	password:{
		type: String,
		required: true,
		min: 6,
		max: 20
	},
	phonenumber:{
		type: String,
		required: true,
		min: 8,
		max: 8,
		unique: true

	},		
},
{timestamps: true}
)

const User = mongoose.model("User", UserSchema)
module.exports = User