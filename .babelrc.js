module.exports = {
  // JS의 기능을 지원
  presets: ['@babel/preset-env'],
  // 비동기 처리를 위함
  plugins: [['@babel/plugin-transform-runtime']],
};
 