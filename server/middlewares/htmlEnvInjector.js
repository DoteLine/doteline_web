const path = require('path');
const fs = require('fs');

function htmlEnvInjector(req, res, next) {
    // 1. 요청 경로가 루트(/)이거나 main.html을 포함하는지 확인
    const isMainPage = req.path === '/' || req.path.toLowerCase().includes('main.html');

    if (isMainPage) {
        // 2. 실제 파일 위치 (server.js가 server 폴더 안에 있으므로 process.cwd() 사용)
        const htmlPath = path.join(process.cwd(), 'src', 'pages', 'Main', 'Main.html');

        try {
            if (fs.existsSync(htmlPath)) {
                let html = fs.readFileSync(htmlPath, 'utf-8');

                // 3. API 키 가져오기
                const key = process.env.KAKAO_MAP_API_KEY_PROD || process.env.KAKAO_MAP_API_KEY_DEV;

                // 4. 치환 (정규식으로 모든 중괄호 패턴 교체)
                const renderedHtml = html.replace(/\{\{KAKAO_MAP_API_KEY\}\}/g, key || '');

                console.log(`[HTML Injector] ✅ 가로채기 성공! 키 주입 완료 (${req.path})`);

                // 5. 즉시 응답 (이게 중요합니다. next()를 호출하지 않고 여기서 끝냅니다.)
                res.set('Content-Type', 'text/html');
                return res.send(renderedHtml);
            }
        } catch (err) {
            console.error('[HTML Injector] Error:', err);
        }
    }
    next();
}

module.exports = htmlEnvInjector;