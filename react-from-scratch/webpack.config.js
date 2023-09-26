const path = require('path');

module.exports={
    mode: 'development',
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    target: "web",
    devServer: {
        port: "8900",
        static:["./public"],
        open: true,
        liveReload: true
    },
    resolve: {
        extensions: ['.js','.jsx','.json'] 
    },
    module:{
        rules: [
            {
                test: /\.(js|jsx)$/,    
                exclude: /node_modules/, 
                use:  {
                    loader: 'babel-loader',
                }
            }
        ]
    }
};