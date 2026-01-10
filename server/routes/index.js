/**
 * 라우팅 설정
 * 모든 라우트를 정의하고 관리
 */

const express = require('express');
const path = require('path');
const fs = require('fs'); // 파일 시스템 모듈 추가
const router = express.Router();

const ROOT_DIR = path.join(__dirname, '..', '..');

// 공통 키 주입 함수
function sendInjectedHtml(res, filePath) {
    try {
        let html = fs.readFileSync(filePath, 'utf-8');
        const key = process.env.KAKAO_MAP_API_KEY_PROD || process.env.KAKAO_MAP_API_KEY_DEV;

        // {{KAKAO_MAP_API_KEY}}를 실제 키로 치환
        html = html.replace(/\{\{KAKAO_MAP_API_KEY\}\}/g, key || '');

        res.set('Content-Type', 'text/html');
        return res.send(html);
    } catch (err) {
        console.error('HTML 주입 에러:', err);
        return res.status(500).send('서버 오류');
    }
}

// 메인 페이지
router.get('/', (req, res) => {
    // index.html에도 키가 필요할 수 있으니 동일하게 처리
    sendInjectedHtml(res, path.join(ROOT_DIR, 'public', 'index.html'));
});

// 🔥 여기가 핵심입니다! Main.html을 요청할 때 가로챕니다.
router.get('/src/pages/Main/Main.html', (req, res) => {
    sendInjectedHtml(res, path.join(ROOT_DIR, 'src', 'pages', 'Main', 'Main.html'));
});

// 나머지 페이지들
router.get('/info', (req, res) => {
    sendInjectedHtml(res, path.join(ROOT_DIR, 'src', 'pages', 'CompanyInfo', 'CompanyInfo.html'));
});

router.get('/product', (req, res) => {
    sendInjectedHtml(res, path.join(ROOT_DIR, 'src', 'pages', 'Products', 'Products.html'));
});

router.get('/solution', (req, res) => {
    sendInjectedHtml(res, path.join(ROOT_DIR, 'src', 'pages', 'Solutions', 'SolutionsMain.html'));
});

module.exports = router;