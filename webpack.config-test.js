const entry =   './test/test.js';
const output = 'bundle-test.js';
module.exports = {
    target: 'node',
    mode: 'development',
    devtool: 'inline-source-map',
    entry: [entry],
    output: {
        filename: output
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
            },
            {
                test: /\.less$/,
                use: [
                    'null-loader'
                ]
            },
            {
                test: /\.pug/,
                loader: 'pug-loader'
            }
        ]
    }
};
