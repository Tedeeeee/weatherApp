// Css 후처리 도구, 플러그인을 통해 코드 변환
// 이를 통해 Tailwind 유틸 클래스들이 브라우저가 이해할 수 있게 된다
module.exports = {
    plugins: {
        // Tailwind안에 있는 postCss 플로그인
        '@tailwindcss/postcss': {},
        // 브라우저 호환을 위한 필요한 벤더 접두사
        autoprefixer: {},
    },
};