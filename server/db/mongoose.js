const mongoose = require("mongoose");

const url = "mongodb://127.0.0.1:27017/bank-app"

if (process.env.NODE_ENV === "production") {
    url = process.env.MONGODB_URI
}

mongoose.Promise = global.Promise;
mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
    useUnifiedTopology: true
});

module.exports = {mongoose}