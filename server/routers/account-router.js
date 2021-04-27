const express = require("express")
const router = new express.Router()
const Account = require("../models/account-model")

router.post("/account", async (req, res) => {
    const account = new Account({...req.body})
    try {
        await account.save()
        res.send(account)
    } catch (e) {
        res.status(401).send(e.message)
    }
});

module.exports = router