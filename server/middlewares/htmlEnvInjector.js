/**
 * HTML 환경변수 주입 미들웨어
 * HTML 파일 내의 환경변수 플레이스홀더를 실제 값으로 치환
 */

const fs = require('fs');
const path = require('path');

function htmlEnvInjector(req, res, next) {
    // 1. 요청 경로에 'Main.html' 문자열이 포함되어 있는지 확인 (가장 확실한 방법)
    if (req.path.toLowerCase().includes('main.html')) {

        // 2. 실제 파일의 절대 경로 (process.cwd()는 앱의 루트인 /phyun7003_doteline을 가리킴)
        const htmlPath = path.join(process.cwd(), 'src', 'pages', 'Main', 'Main.html');

        try {
            if (fs.existsSync(htmlPath)) {
                let html = fs.readFileSync(htmlPath, 'utf-8');

                // 3. .env에서 읽어온 API 키 (둘 중 하나라도 있으면 사용)
                const kakaoMapKey = process.env.KAKAO_MAP_API_KEY_PROD
                    || process.env.KAKAO_MAP_API_KEY_DEV;

                // 4. 치환 작업
                const renderedHtml = html.replace(/\{\{KAKAO_MAP_API_KEY\}\}/g, kakaoMapKey || '');

                // 5. 디버깅 로그 (카페24 관리자 페이지 '로그 보기'에서 확인용)
                console.log(`[HTML Injector] 가로채기 성공: ${req.path}`);
                console.log(`[HTML Injector] 적용된 키: ${kakaoMapKey ? '정상 로드됨' : '키 없음(확인필요)'}`);

                // 6. 브라우저에 즉시 전송 (다음 미들웨어로 넘어가지 않음)
                res.set('Content-Type', 'text/html');
                return res.send(renderedHtml);
            }
        } catch (error) {
            console.error('[HTML Injector] 치환 중 에러 발생:', error);
        }
    }

    // Main.html 요청이 아니면 평소대로 정적 파일 서버로 넘김
    next();
}

module.exports = htmlEnvInjector;