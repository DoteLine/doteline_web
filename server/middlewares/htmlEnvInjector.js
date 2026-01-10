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
    // 1. 요청 경로 확인 (브라우저가 호출하는 경로 기준)
    if (req.path.includes('Main.html')) {

        // 2. 실제 HTML 파일의 절대 경로 생성
        // process.cwd()는 앱의 루트 디렉토리를 가리키므로 경로 에러를 방지합니다.
        const htmlPath = path.join(process.cwd(), 'src', 'pages', 'Main', 'Main.html');

        try {
            // 파일이 존재하는지 먼저 확인
            if (!fs.existsSync(htmlPath)) {
                console.error(`[HTML Injector] 파일을 찾을 수 없음: ${htmlPath}`);
                return next();
            }

            let html = fs.readFileSync(htmlPath, 'utf-8');

            // 3. API 키 선택 (우선순위: PROD -> DEV -> 빈값)
            // 카페24는 production 환경이므로 PROD가 없으면 DEV라도 가져오게 합니다.
            const kakaoMapKey = process.env.KAKAO_MAP_API_KEY_PROD
                || process.env.KAKAO_MAP_API_KEY_DEV
                || '';

            // 4. 디버깅 로그 (카페24 로그 보기에서 확인 가능)
            console.log(`[HTML Injector] 주입 시도 중...`);
            console.log(`- 경로: ${req.path}`);
            console.log(`- 키 로드 상태: ${kakaoMapKey ? '성공' : '실패(undefined)'}`);

            // 5. 플레이스홀더 치환
            const finalHtml = html.replace(/\{\{KAKAO_MAP_API_KEY\}\}/g, kakaoMapKey);

            // 6. 응답 전송 및 종료
            res.set('Content-Type', 'text/html');
            return res.status(200).send(finalHtml);

        } catch (error) {
            console.error('[HTML Injector] 에러 발생:', error);
            return next();
        }
    }

    // Main.html 요청이 아니면 통과
    next();
}

module.exports = htmlEnvInjector;