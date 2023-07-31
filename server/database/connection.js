const mongoose = require('mongoose')

const connectDB = async (url) => {
    try {
        //mongodb connection string
        const con = await mongoose.connect(url, {
            useNewUrlParser: true, 
            useUnifiedTopology: true 
        })

        console.log(`MongoDB Connected : ${con.connection.host}`);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDB