const express = require("express")
const router = new express.Router()
const User = require("../models/user-model")



router.get("/users", async (req, res) => {
    try {
        const users = await User.find()
        res.send(users)
    } catch (e) {
        res.send({error: "no users"})
    }
});

router.post("/user", async (req, res) => {
    const user = new User({ ...req.body })
    try {
        await user.save()
        res.send(user)
    } catch (e) {
        res.send({error: e.message})
    }
})

module.exports = router