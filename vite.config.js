import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint()],
  // server: {  
  //   hmr: { overlay: false } 서버 오류 오버레이를 사용하지 않기 위한 설정 -> 에러를 뷰포트에 출력하지 않음
  // }
});
