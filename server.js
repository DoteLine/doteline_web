/**
 * DOTELINE 웹사이트 서버
 * Express를 사용한 정적 파일 서버
 */

const express = require('express');
const path = require('path');

// Express 앱 생성
const app = express();

// 환경 변수에서 포트 가져오기 (기본값: 3000)
const PORT = process.env.PORT || 3000;

// ============================================
// 미들웨어 설정
// ============================================

// 정적 파일 제공 (루트 디렉토리)
app.use(express.static(path.join(__dirname)));

// JSON 파싱 미들웨어
app.use(express.json());

// 로깅 미들웨어 (개발용)
app.use((req, res, next) => {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${req.method} ${req.url}`);
    next();
});

// ============================================
// 라우트 설정
// ============================================

// 루트 경로 - index.html 제공
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// 404 에러 핸들링
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'index.html'));
});

// 전역 에러 핸들링
app.use((err, req, res, next) => {
    console.error('서버 에러:', err.stack);
    res.status(500).json({
        error: '서버 내부 오류가 발생했습니다.',
        message: process.env.NODE_ENV === 'development' ? err.message : undefined
    });
});

// ============================================
// 서버 시작
// ============================================

app.listen(PORT, () => {
    console.log('\n========================================');
    console.log('  DOTELINE 웹서버가 시작되었습니다!');
    console.log('========================================');
    console.log(`  🌐 로컬 주소: http://localhost:${PORT}`);
    console.log(`  📁 루트 디렉토리: ${__dirname}`);
    console.log(`  ⏰ 시작 시간: ${new Date().toLocaleString('ko-KR')}`);
    console.log('========================================\n');
    console.log('  서버를 종료하려면 Ctrl + C를 누르세요.\n');
});

// 프로세스 종료 처리
process.on('SIGTERM', () => {
    console.log('\n서버를 종료합니다...');
    process.exit(0);
});

process.on('SIGINT', () => {
    console.log('\n서버를 종료합니다...');
    process.exit(0);
});