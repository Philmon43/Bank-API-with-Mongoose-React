require("./db/mongoose")
const PORT = process.env.PORT || 5000
const express = require("express")
const cors = require("cors")
const userRouter = require("./routers/user-router")
const accountRouter = require("./routers/account-router")

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(userRouter)
app.use(accountRouter)


if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"))
}


app.listen(PORT, () => {
    console.log('Server is up on port ', PORT)
})
