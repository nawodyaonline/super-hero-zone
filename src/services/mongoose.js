const mongoose = require("mongoose")
const config = require("../config")

mongoose.connection.on("connected", () => {
    console.log("MongoDB connected");
});

mongoose.connection.on("error", (err) => {
    console.log(`Could not connect to MongoDB because of ${err}`);
    process.exit(1);
})

exports.start = () => {
    mongoose.connect(config.mongoUri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
}