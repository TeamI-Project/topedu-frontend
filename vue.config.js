const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  // npm run build 타겟 디렉토리 (백엔드쪽!)
  // npm run server 개발 진행시 포트가 다르기 때문에 프록시 설정해줘야 함
  // target : 백엔드 port가 들어감
  // changeOrigin -> true로 해야 cros 문제 해결할 수 있음
  // devServer: {
  //   proxy: {
  //     '/': {
  //       target: "http://localhost:8080",
  //       changeOrigin: true,
  //     }
  //   }
  // }
})

// package.json script 파일 빌드용
// "scripts": {
//   "serve": "vue-cli-service serve --port 3000",
//   "build": "vue-cli-service build --watch",
//   "lint": "vue-cli-service lint"
// },