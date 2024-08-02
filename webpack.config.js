const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: './js/compressed.js', // Ձեր հիմնական JS ֆայլի ուղին
  output: {
    filename: 'compressed.js',
    path: path.resolve(__dirname, 'dist')
  },
  mode: 'production',
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin({
      terserOptions: {
        compress: {
          drop_console: true, // Օպցիոնալ, հեռացնում է console.log-երը
        },
      },
    })],
  },
};