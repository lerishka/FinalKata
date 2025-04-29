const path = require('path'); // Импортируем модуль "path" для работы с путями файлов
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './docs/index.js', // Точка входа для сборки проекта

  output: {
    filename: 'bundle.js', // Имя выходного файла сборки
    path: path.resolve(__dirname, 'dist'), // Путь для выходного файла сборки
    clean: true, // ✅ очищает папку dist перед сборкой
  },

  module: {
    rules: [

      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },

      {
        test: /\.html$/i,
        loader: 'html-loader',
      },

      {
        test: /\.scss$/i,
        use: [
          'style-loader',  // Вставляет стили в <style>
          'css-loader',    // Преобразует CSS в CommonJS
          'sass-loader'    // Компилирует Sass в CSS
        ],
      },

      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },

      {
        test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
        type: 'asset/resource',
      },

      {
        test: /\.(woff(2)?|eot|ttf|otf)$/i,
        type: 'asset/resource',
      }
    ],
  },
  
  plugins: [
    new HtmlWebpackPlugin({
      template: './docs/index.html',
    }),
  ],

  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'), // Каталог для статики
    },
    open: true, // Автоматически открывать браузер
  },

  devtool: 'source-map',
  mode: process.env.NODE_ENV || 'development',
};