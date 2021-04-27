const mongoose = require("mongoose")
const validator = require("validator")

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    phoneNumber: {
        type: String,
        required: true,
        unique: true,
        validate(val) {
            if (!validator.isMobilePhone(val, "he-IL")) {
                throw "invalid phone number"
            }
        }
    },
},
{
    timestamps: true
})

const User = mongoose.model("User", UserSchema)
module.exports = User