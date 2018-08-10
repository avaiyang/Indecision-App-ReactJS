
const path = require('path');

module.exports = {
    entry:'./srcv/app.js',           // tells us which is the main file
    output: {
        path: path.join(__dirname, 'main'),    //absolute path on the machine, where you want to save it
        filename:'bundle.js'        //we can name this as any file
    },
    module: {
        rules: [{
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
        },{
            test: /\.s?css$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    devtool : 'cheap-module-eval-source-map',
    devServer : {
        contentBase: path.join(__dirname, 'main')
    }
};