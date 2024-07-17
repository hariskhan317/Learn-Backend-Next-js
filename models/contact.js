import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        trim: true,
    },
    email: {
        type: String,
        required: [true, "email is required"],
    },
    message: {
        type: String,
        required: [true, "Message is required"],
    },
    date: {
        type: Date,
        default: Date.now,
    }
})


const Contact = mongoose.models.Contact || mongoose.model('Contact', contactSchema);

export default Contact;