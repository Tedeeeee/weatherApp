/** @type {import('tailwindcss').Config} */
const { shadcnUI } = require('shadcn-ui/tailwind');

module.exports = {
  // 스캔할 파일 목록
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './src/components/ui/**/*.{js,ts,jsx,tsx}',
  ],
  theme: { extend: {} },
  plugins: [shadcnUI()],
};
