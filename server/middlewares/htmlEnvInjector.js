/**
 * HTML 환경변수 주입 미들웨어
 * HTML 파일 내의 환경변수 플레이스홀더를 실제 값으로 치환
 */

const fs = require('fs');
const path = require('path');

/**
 * HTML 파일에 환경변수를 주입하는 미들웨어
 */
function htmlEnvInjector(req, res, next) {
    // Main.html 요청만 처리
    if (req.path === '/src/pages/Main/Main.html') {
        const htmlPath = path.join(__dirname, '..', '..', req.path);

        try {
            // HTML 파일 읽기
            let html = fs.readFileSync(htmlPath, 'utf-8');

            // 환경에 따라 적절한 카카오 맵 API 키 선택
            const isProduction = process.env.NODE_ENV === 'production';
            const kakaoMapKey = isProduction
                ? process.env.KAKAO_MAP_API_KEY_PROD
                : process.env.KAKAO_MAP_API_KEY_DEV;

            // 환경변수 치환
            html = html.replace(/\{\{KAKAO_MAP_API_KEY\}\}/g, kakaoMapKey || '');

            // 처리된 HTML 전송
            res.set('Content-Type', 'text/html');
            res.send(html);
            return;
        } catch (error) {
            console.error('HTML 환경변수 주입 오류:', error);
            // 오류 발생 시 다음 미들웨어로 넘김
            return next();
        }
    }

    // Main.html이 아닌 경우 다음 미들웨어로
    next();
}

module.exports = htmlEnvInjector;
