/**
 * 라우팅 설정
 * 모든 라우트를 정의하고 관리
 */

const express = require('express');
const path = require('path');
const router = express.Router();

// 프로젝트 루트 디렉토리 경로
const ROOT_DIR = path.join(__dirname, '..', '..');

// ============================================
// 페이지 라우트
// ============================================

/**
 * 메인 페이지 (/)
 * public/index.html을 제공하고, 이 파일이 Main.html을 동적으로 로드
 */
router.get('/', (req, res) => {
    res.sendFile(path.join(ROOT_DIR, 'public', 'index.html'));
});

/**
 * 회사 소개 페이지 (/info)
 */
router.get('/info', (req, res) => {
    res.sendFile(path.join(ROOT_DIR, 'src', 'pages', 'CompanyInfo', 'CompanyInfo.html'));
});

/**
 * 솔루션 소개 페이지 (/solution)
 */
router.get('/solution', (req, res) => {
    res.sendFile(path.join(ROOT_DIR, 'src', 'pages', 'Solutions', 'SolutionsMain.html'));
});

/*
* 제품 페이지 (/product)
*/
router.get('/product', (req, res) => {
    res.sendFile(path.join(ROOT_DIR, 'src', 'pages', 'Products', 'Products.html'))
})

// ============================================
// API 라우트 (필요시 추가)
// ============================================

// 예시: API 라우트를 추가하려면 아래와 같이 작성
// router.get('/api/products', (req, res) => {
//     res.json({ products: [] });
// });

// ============================================
// 404 에러 핸들링
// ============================================

/**
 * 404 에러 처리 - 존재하지 않는 경로
 * 메인 페이지로 리다이렉트 (SPA 방식)
 */
router.use((req, res) => {
    res.status(404).sendFile(path.join(ROOT_DIR, 'public', 'index.html'));
});

module.exports = router;