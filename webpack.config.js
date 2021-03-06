const path = require("path")

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(".", "build"), // create folder
        filename: "bundle.js", //create file
    },
    mode: "development",
    module: {
        rules: [
            {test: /\.css$/, use:["style-loader", "css-loader"]},
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                use:["file-loader"]
              },
        ],
    },
};