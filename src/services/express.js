const express = require('express')

const config = require("../config")

const app = express()

exports.start = () => {
    app.listen(config.port, (err) => {
        if (err) {
            console.error(`Error : ${err}`);
            process.exit(-1);
        }

        console.log(`Super Hero Zone API started at ${config.port}`)
    })
}