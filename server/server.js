/**
 * DOTELINE 웹사이트 서버
 * Express를 사용한 정적 파일 서버
 */

const express = require('express');
const path = require('path');
const routes = require('./routes');
const logger = require('./middlewares/logger');

// Express 앱 생성
const app = express();

// 환경 변수에서 포트 가져오기 (기본값: 3000)
const PORT = process.env.PORT || 3000;

// 프로젝트 루트 디렉토리 경로
const ROOT_DIR = path.join(__dirname, '..');

// ============================================
// 미들웨어 설정
// ============================================

// 정적 파일 제공 (src, public, resources 디렉토리)
app.use('/src', express.static(path.join(ROOT_DIR, 'src')));
app.use('/resources', express.static(path.join(ROOT_DIR, 'resources')));
app.use(express.static(path.join(ROOT_DIR, 'public')));

// JSON 파싱 미들웨어
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 로깅 미들웨어 (개발용)
app.use(logger);

// ============================================
// 라우트 설정
// ============================================

// 모든 라우트를 routes/index.js에서 가져옴
app.use('/', routes);

// ============================================
// 전역 에러 핸들링
// ============================================

app.use((err, req, res, next) => {
    console.error('서버 에러:', err.stack);
    // 500 에러 페이지를 200 상태코드로 제공
    res.status(200).sendFile(path.join(ROOT_DIR, 'src', 'pages', 'Error', 'Error500.html'));
});

// ============================================
// 서버 시작
// ============================================

app.listen(PORT, ('0.0.0.0'), () => {
    console.log('\n========================================');
    console.log('  DOTELINE 웹서버가 시작되었습니다!');
    console.log('========================================');
    console.log(`  🌐 로컬 주소: http://localhost:${PORT}`);
    console.log(`  📁 루트 디렉토리: ${ROOT_DIR}`);
    console.log(`  ⏰ 시작 시간: ${new Date().toLocaleString('ko-KR')}`);
    console.log('========================================\n');
    console.log('  서버를 종료하려면 Ctrl + C를 누르세요.\n');
});

// ============================================
// 프로세스 종료 처리
// ============================================

process.on('SIGTERM', () => {
    console.log('\n서버를 종료합니다...');
    process.exit(0);
});

process.on('SIGINT', () => {
    console.log('\n서버를 종료합니다...');
    process.exit(0);
});