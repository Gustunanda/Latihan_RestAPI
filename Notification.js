import mongoose from "mongoose";

const Notification = mongoose.Schema({
    req_id: {
        type: String,
        require: true
    },
    title: {
        type: String,
        require: true
    },
    description: {
        type: String
    },
    user_id: {
        type: Number,
        require: true
    },
    file: {
        type: String
    }
},{
    timestamps: true
});

export default mongoose.model("Notifications", Notification);