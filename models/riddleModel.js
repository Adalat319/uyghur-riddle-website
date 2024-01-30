const mongoose = require('mongoose')

const riddleSchema = mongoose.Schema(
    {
        category: {
            type: String,
            required: [true, "Please Enter A category for the riddle"]
        },
        riddle: {
            type: String,
            required: true,
        },
        answer: {
            type: String,
            required: true,
        },
        explanation: {
            type: String,
            required: true,
        }
    },
    {
        timestamps: true
    }
)

const Riddle = mongoose.model('riddle', riddleSchema);

module.exports = Riddle;
