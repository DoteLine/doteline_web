// 스크롤 애니메이션 초기화
function initScrollAnimation() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
      }
    });
  }, observerOptions);

  // .section-animate 클래스를 가진 모든 섹션을 관찰
  const sections = document.querySelectorAll('.section-animate');
  sections.forEach(section => {
    observer.observe(section);
  });
}

// 계산기 기능 초기화
function initCalculator() {
  const widthInput = document.getElementById('widthInput');
  const heightInput = document.getElementById('heightInput');
  const calculateBtn = document.getElementById('calculateBtn');
  const calculatorResult = document.getElementById('calculatorResult');
  const areaResult = document.getElementById('areaResult');
  const paintResult = document.getElementById('paintResult');

  if (!calculateBtn) return;

  calculateBtn.addEventListener('click', () => {
    const width = parseFloat(widthInput.value);
    const height = parseFloat(heightInput.value);

    // 입력값 유효성 검사
    if (!width || !height || width <= 0 || height <= 0) {
      alert('올바른 가로와 세로 값을 입력해주세요.');
      return;
    }

    // 면적 및 필요한 페인트 양 계산
    const area = width * height;
    const paintNeeded = (area / 10) * 2; // 10㎡당 페인트 2L 필요

    // 결과 표시
    areaResult.textContent = area.toFixed(2);
    paintResult.textContent = paintNeeded.toFixed(2);

    // 결과 영역 표시
    calculatorResult.classList.add('active');
  });

  // Enter 키로 계산 가능하도록 설정
  [widthInput, heightInput].forEach(input => {
    input.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        calculateBtn.click();
      }
    });
  });
}

// 앵커 링크 부드러운 스크롤 (메인 페이지)
function initSmoothScroll() {
  const mainPageLinks = document.querySelectorAll(
    '.hero-buttons a[href^="#"], .header-menu a[href^="#"]'
  );

  mainPageLinks.forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const headerHeight = 80;
        const targetPosition = targetElement.offsetTop - headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

// mainPage.js 하단 수정
document.addEventListener('DOMContentLoaded', () => {
    // 이미 index.html의 PageLoader가 mainPage.html을 삽입한 상태이므로 
    // DOMContentLoaded가 발생하지 않을 수 있습니다. 
    // 따라서 함수로 묶어 즉시 실행하는 로직이 필요합니다.
});

// 기능 초기화 함수를 별도로 분리
function setupMainPage() {
    initScrollAnimation();
    initCalculator();
    
    // 컴포넌트 로드 대기 후 스크롤 설정
    setTimeout(() => {
        initSmoothScroll();
    }, 300);
}

// 즉시 실행
setupMainPage();
