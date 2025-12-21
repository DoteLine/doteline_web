# DOTELINE 웹사이트

DOTELINE - LED 드라이버 칩 솔루션 공식 웹사이트

## 📋 프로젝트 소개

순수 HTML/CSS/JavaScript로 구현된 DOTELINE 회사 웹사이트입니다.
Node.js와 Express를 사용한 정적 파일 서버로 실행됩니다.

## 🛠 기술 스택

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Backend**: Node.js, Express
- **Architecture**: 동적 페이지 로딩 (SPA-like)

## 📁 프로젝트 구조

```
doteline_web/
├── server.js              # Express 서버 파일
├── package.json           # 프로젝트 설정 파일
├── index.html             # 메인 진입점 (동적 렌더링)
├── pages/
│   └── mainPage.html      # 메인 페이지 HTML
├── pagesCSS/
│   └── mainPage.css       # 메인 페이지 스타일
└── pagesJS/
    └── mainPage.js        # 메인 페이지 기능
```

## 🚀 시작하기

### 사전 요구사항

- Node.js 16.0.0 이상 설치 필요
- npm 또는 yarn 패키지 매니저

### 설치 방법

1. **저장소 클론 (또는 프로젝트 다운로드)**

```bash
git clone <repository-url>
cd doteline_web
```

2. **의존성 설치**

```bash
npm install
```

### 실행 방법

#### 프로덕션 모드

```bash
npm start
```

#### 개발 모드 (자동 재시작)

```bash
npm run dev
```

서버가 시작되면 브라우저에서 다음 주소로 접속:
- **http://localhost:3000**

## 📱 주요 기능

### 1. 반응형 디자인
- 모바일, 태블릿, 데스크톱 모든 디바이스 지원
- 5개 브레이크포인트 (640px, 768px, 1024px, 1280px, 1536px)

### 2. 인터랙티브 UI
- 모바일 메뉴 토글
- 스크롤 애니메이션 (Intersection Observer)
- 부드러운 스크롤 (Smooth Scroll)

### 3. 주요 섹션
- Hero 섹션 (메인 비주얼)
- LED Driver Chip 소개
- 제품 갤러리 (8개)
- 솔루션 갤러리 (8개)
- 매장 안내 (지도 포함)
- Footer (SNS 링크)

## 💻 개발 가이드

### 코드 스타일

- **함수/변수명**: camelCase 사용
- **클래스명**: PascalCase 사용
- **CSS 클래스**: kebab-case 사용
- **주석**: 각 섹션과 주요 기능에 설명 추가

### 파일 수정

1. **HTML 수정**: `pages/mainPage.html`
2. **스타일 수정**: `pagesCSS/mainPage.css`
3. **기능 수정**: `pagesJS/mainPage.js`
4. **서버 설정**: `server.js`

### 새로운 페이지 추가

1. `pages/` 폴더에 새 HTML 파일 생성
2. `pagesCSS/` 폴더에 해당 CSS 파일 생성
3. `pagesJS/` 폴더에 해당 JS 파일 생성
4. 필요시 `index.html`의 라우팅 로직 수정

## 🌐 배포

### 포트 변경

환경 변수를 통해 포트 변경 가능:

```bash
PORT=8080 npm start
```

### 프로덕션 배포

1. **클라우드 서버에 배포** (AWS, GCP, Azure 등)
2. **PM2를 사용한 프로세스 관리**

```bash
npm install -g pm2
pm2 start server.js --name doteline-web
pm2 save
pm2 startup
```

3. **Nginx 리버스 프록시 설정** (선택사항)

## 🤝 팀 협업

### Git 워크플로우

1. 새로운 기능 개발 시 브랜치 생성
2. 변경사항 커밋 및 푸시
3. Pull Request 생성
4. 코드 리뷰 후 메인 브랜치에 병합

### 코드 리뷰 체크리스트

- [ ] 코드가 직관적이고 이해하기 쉬운가?
- [ ] 주석이 적절히 추가되었는가?
- [ ] 반응형 디자인이 모든 디바이스에서 작동하는가?
- [ ] 브라우저 호환성 테스트를 완료했는가?
- [ ] 성능 최적화를 고려했는가?

## 📞 문의

- **회사**: 주식회사 대현엠앤비
- **전화**: 010-9316-7003
- **이메일**: info@doteline.kr
- **주소**: 경기도 시흥시 목실길 19-9 (능곡동)

## 📄 라이선스

ISC License

---

**© 2024 DOTELINE. All rights reserved.**