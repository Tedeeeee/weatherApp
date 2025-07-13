/** @type {import('tailwindcss').Config} */
module.exports = {
    // 스캔할 파일 목록
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
        "./src/components/ui/**/*.{ts,tsx}",
    ],
    theme: { extend: {} },
    plugins: [],
}