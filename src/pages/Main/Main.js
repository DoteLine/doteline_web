// 솔루션 섹션 렌더링 - Scroll-driven Card Stack Animation
function renderSolutions() {
  const solutionsContainer = document.getElementById('solutions-container');
  if (!solutionsContainer) return;

  // 1~4번 솔루션 가져오기 (SolutionData.js에서 전역 함수 사용)
  const solutions = [1, 2, 3, 4].map(id => ({
    id,
    ...window.findSolutionById(id)
  }));

  // 전체 래퍼 생성
  const solutionsHTML = `
    <section id="solutions" class="solutions-stack-wrapper">
      <div class="solutions-stack-container">
        ${solutions.map((solution, index) => `
          <div class="solution-card-stack" data-index="${index}" style="--index: ${index};">
            <div class="solution-card-stack__inner">
              <div class="solution-card-stack__image">
                <img src="${solution.thumbnail}" alt="${solution.headline}" loading="lazy">
              </div>
              <div class="solution-card-stack__content">
                <span class="solution-card-stack__label">${solution.label}</span>
                <h2 class="solution-card-stack__title">${solution.headline}</h2>
                <p class="solution-card-stack__description">${solution.description}</p>
                <a href="/src/pages/Solutions/SolutionDetail.html?id=${solution.id}" class="solution-card-stack__cta">
                  <span>자세히 보기</span>
                </a>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </section>
  `;

  solutionsContainer.innerHTML = solutionsHTML;
}

// 스크롤 애니메이션 초기화
function initScrollAnimation() {
  const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
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

  // 솔루션 섹션 애니메이션 (별도 관찰자)
  const solutionObserverOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px'
  };

  const solutionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // 한 번만 애니메이션 실행
        entry.target.classList.add('animate-in');
        // 애니메이션 완료 후 관찰 중지
        solutionObserver.unobserve(entry.target);
      }
    });
  }, solutionObserverOptions);

  // .solution-section 클래스를 가진 모든 섹션을 관찰
  const solutionSections = document.querySelectorAll('.solution-section');
  solutionSections.forEach(section => {
    solutionObserver.observe(section);
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
    // 솔루션 섹션 먼저 렌더링
    renderSolutions();

    // 렌더링 완료 후 애니메이션 및 기타 기능 초기화
    setTimeout(() => {
        initScrollAnimation();
        initCalculator();
        initSmoothScroll();
    }, 100);
}

// 즉시 실행
setupMainPage();
