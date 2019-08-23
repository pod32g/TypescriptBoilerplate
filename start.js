require("@babel/register")({
    presets: ['@babel/preset-env']
});

module.exports = require('./build/app.js');