const router = require("express").Router();
const User = require("../models/User");

// register a single user
router.post("/register", async (req, res) => {

	// add doc to db
	try {
		const salt = await bcrypt.genSalt(10)
		const hashedPassword = await bcrypt.hash(req.body.password, salt)
		const { username, password, phonenumber } = req.body
		const newUser = await User.create({
			username,
			password,
			phonenumber,
		});
		res.status(200).json(newUser);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
});

// login user
router.post("login", async (req, res) => {
	try {
        const user = await User.findOne({email: req.body.email})
        if (!user) {
        	return res.status(404).json("user not found")
        }

        const validPassword = await bcrypt.compare(req.body.password, user.password)
        if (!validPassword) {
        	return res.status(400).json("wrong password")
        }
        res.status(200).json(user)
        
	} catch(error) {
        res.status(500).json({error: error.message})
	}
	
})

module.exports = router;