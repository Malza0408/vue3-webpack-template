module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: [
    // vue
    // 'plugin:vue/vue3-essential', // Lv1
    'plugin:vue/vue3-strongly-recommended', // Lv2
    // 'plugin:vue/vue3-recommended', // Lv3
    // js
    'eslint:recommended'
  ],
  parserOptions: {
    // 코드를 분석하는 분석기
    parser: 'babel-eslint'
  },
  rules: {
    // 기본적으로 제공하는 extends를 사용한다면 굳이 써 줄 필요 없다.
    "vue/html-closing-bracket-newline": ["error", {
      "singleline": "never",
      "multiline": "never" // 닫는 브라켓을 마지막 새로운 줄에 작성하지 않아도 된다.
    }],
    "vue/html-self-closing": ["error", {
      "html": {
        "void": "always", // 빈 곳에 슬래쉬를 붙여라
        "normal": "never", // <div> </div> 안에 내용이 없다면 <div/> 로 해줘야만 한다. 가 싫어서 never
        "component": "always" // component 는 항상 슬래쉬를 붙여라
      },
      "svg": "always",
      "math": "always"
    }]
  }
}