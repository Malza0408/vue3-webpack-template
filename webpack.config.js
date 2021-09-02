const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader')

// export
module.exports = {
  resolve: { 
    extensions: ['.js', '.vue'],
    alias: {
      '~': path.resolve(__dirname, 'src'),
      'assets': path.resolve(__dirname, 'src/assets'),
    }
  },
  // parcel index.html
  // 파일을 읽어들이기 시작하는 진입점 설정
  // parcel 과 다르게 html 이 아닌 js 가 진입점이다.
  entry: './src/main.js',

  // 결과물(번들)을 반환하는 설정
  output: {
    // 첫번째 인수와 두번째 인수 경로를 합쳐준다.
    // __dirname 은 전역변수로 현재 이 파일(webpack.config.js)의 경로이다.
    // path: path.resolve(__dirname, 'public'),
    // filename: 'app.js',
    // 결과적으로 파일경로 상에서 public 이란 폴더를 만들고 app.js 라는 결과물을 뱉어낸다.
    // 구성 옵션을 바꿔도 기존의 결과물이 남아있다. clean 으로 필요없는 파일 삭제 가능
    clean: true,
  },

  module: {
    rules: [{
        test: /\.vue$/,
        use: ['vue-loader']
      },
      {
        // .css 로 끝나는 모든 파일
        test: /\.s?css$/,
        use: [
          // 순서 중요. 아래에서 위로 작업
          'vue-style-loader',
          'style-loader', // html 의 style 태그에 삽입
          'css-loader', // js 에서 import 해 온 css 파일을 해석하는 용도
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.js$/,
        use: ['babel-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|webp)$/,
        use: 'file-loader'
      }
    ],
  },

  // 번들링 후 결과물의 처리 방식 등 다양한 플러그인들을 설정
  plugins: [
    new HtmlPlugin({
      template: './index.html',
    }),
    // static 폴더 안에 있는 내용이 copy 되어서 dist 폴더로 들어간다.
    new CopyPlugin({
      patterns: [{
        from: 'static',
      }, ],
    }),
    new VueLoaderPlugin(),
  ],
  devServer: {
    host: 'localhost',
  },
};