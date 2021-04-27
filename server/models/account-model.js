const mongoose = require("mongoose")

const AcountSchema = mongoose.Schema({
    isActive: {
        type: Boolean,
        default: true
    },
    cash: {
        type: Number,
        default: 0
    },
    credit: {
        type: Number,
        default: 0
    },
    owner: {
        type: String,
        required: true,
        uniqe: true,
        validate(val) {
            if (!val.length > 8) throw ("can not identifiy user")
        }
    }
},
{
    timestamps: true
})

const Account = mongoose.model("Account", AcountSchema)
module.exports = Account
