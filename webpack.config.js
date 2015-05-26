module.exports.getConfig = function(type) {

  var isDev = type === 'development';

  var config = {
    entry: './app/scripts/main.js',
    output: {
      path: __dirname,
      filename: 'main.js'
    },
    debug : isDev,
    module: {
      loaders: [{
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }, {
        test: /\.json$/,
        loader: "json"
      }]
    }
  };

  if(isDev){
    config.devtool = 'eval';
  }

  return config;
}