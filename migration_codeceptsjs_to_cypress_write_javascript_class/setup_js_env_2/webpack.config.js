const path = require('path');

module.exports = {
    /* 
        Specify that /src/index.js is the entry point of our application. 
        Other scripts must be imported inside this file. 
    */
    entry: './src/index.js',
    /* Create a file called 'bundle.js' in the 'dist' folder. */
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    /* Enables a development server */
    devServer: {
        /* 
            Tell the server where to serve content from. 
            In this case, it will find a file called 'index.html' under the 'dist' folder.
        */
       static: {
            directory: path.resolve(__dirname, 'dist'),
        },


        // contentBase: path.join(__dirname, 'dist'), # not working
        host: 'localhost',
        /*
            Port to use for the development server. 
            Allows us to access our application using http://localhost:9000 
        */
        port: 9000
    },
    /*
        Options added here determine how the different types of 
        modules within a project will be treated.
    */
    module: {
        /* 
            Rules can modify how the module is created. 
            It can apply loaders to the module, or modify the parser.
            The entry below simple means that 
            all JS files (except the ones in the node_modules folder)
            must be processed using babel-loader (converted to old javascript)
        */
        rules: [{
             test: /\.js$/, 
             exclude: /node_modules/, 
             loader: "babel-loader" 
        }]
    }
};