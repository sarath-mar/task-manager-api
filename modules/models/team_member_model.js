const mongoose = require("mongoose");

const TeamMemberSchema = new mongoose.Schema({
    name: {
        first: String,
        last: String
    },
    designation: String
},
    { timestamps: true });

const TeamMember = mongoose.model('TeamMember', TeamMemberSchema);
module.exports = { TeamMember }