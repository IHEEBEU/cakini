const path = require('path');

module.exports = {
  // Entry point of your application
  entry: './src/index.js',
  output: {
    // Output directory and filename for bundled code
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      // Define loaders for processing different file types (e.g., JavaScript, CSS)
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            "presets": ["@babel/preset-env", "@babel/preset-react"]
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.html$/,
        use: 'null-loader', // Use the null-loader for HTML files
      },
    ],
  },
};
