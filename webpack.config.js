module.exports = {
    target: 'web',
    mode: 'development',
	entry: "./web_lab_1/scripts.js",
    output: {
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/
            },
            {
                test: /\.pug/,
                loader: 'pug-loader'
            }
        ]
    }
};
