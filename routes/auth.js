const router = require("express").Router();
const User = require("../models/User");

// register a single user
router.post("/register", async (req, res) => {
	const { username, password, phonenumber } = req.body

	// add doc to db
	try {
		const newUser = await User.create({
			username,
			password,
			phonenumber,
		});
		res.status(200).json(newUser);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
});

module.exports = router;