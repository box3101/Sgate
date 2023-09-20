import { defineConfig } from 'astro/config'; // Astro 프로젝트 설정을 정의하는 함수.

export default defineConfig({
  build: { // 빌드 관련 옵션을 설정하는 섹션
    format: 'file', // file로 설정하면, 페이지를 빌드할 때 'page/index.html' 대신 'page.html' 형식으로 파일이 생
  },
});