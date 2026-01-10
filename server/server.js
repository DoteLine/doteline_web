/**
 * DOTELINE 웹사이트 서버
 * Express를 사용한 정적 파일 서버
 */

const express = require('express');
const path = require('path');
const routes = require('./routes');
const logger = require('./middlewares/logger');

// [수정] dotenv 설정 추가: server.js가 server 폴더 안에 있으므로 루트의 .env를 가리키도록 설정
require('dotenv').config({ path: path.join(__dirname, '../.env') });

// Express 앱 생성
const app = express();

// 환경 변수에서 포트 가져오기 (카페24 할당 포트가 1순위, .env가 2순위, 기본값 8001)
const PORT = process.env.PORT || 8001;

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
    try {
        res.status(200).sendFile(path.join(ROOT_DIR, 'src', 'pages', 'Error', 'Error500.html'));
    } catch (sendErr) {
        res.status(500).send('내부 서버 오류가 발생했습니다.');
    }
});

// ============================================
// 서버 시작
// ============================================

// [수정] 카페24 프록시 환경에 맞게 '0.0.0.0'을 제거하고 포트만 설정
app.listen(PORT, () => {
    console.log('\n========================================');
    console.log('  DOTELINE 웹서버가 시작되었습니다!');
    console.log('========================================');
    console.log(`  🌐 접속 포트: ${PORT}`);
    console.log(`  📁 루트 디렉토리: ${ROOT_DIR}`);
    console.log(`  ⏰ 시작 시간: ${new Date().toLocaleString('ko-KR')}`);
    console.log('========================================\n');
});

// ============================================
// 프로세스 종료 처리
// ============================================

process.on('SIGTERM', () => {
    console.log('\n서버를 종료합니다 (SIGTERM)...');
    process.exit(0);
});

process.on('SIGINT', () => {
    console.log('\n서버를 종료합니다 (SIGINT)...');
    process.exit(0);
});