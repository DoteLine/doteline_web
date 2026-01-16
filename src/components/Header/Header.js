/**
 * Header Component JavaScript
 * - 모바일 메뉴 토글 기능
 * - 솔루션 드롭다운 동적 생성
 */

// Header 컴포넌트가 로드된 후 실행되도록 함수로 감싸기
function initHeader() {
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');

  if (!mobileMenuBtn || !mobileMenu) {
    console.warn('Header elements not found, retrying...');
    return false;
  }

  // 기존 이벤트 리스너 제거 (중복 방지)
  const newMobileMenuBtn = mobileMenuBtn.cloneNode(true);
  mobileMenuBtn.parentNode.replaceChild(newMobileMenuBtn, mobileMenuBtn);

  // 메뉴 토글 기능
  newMobileMenuBtn.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.contains('active');

    if (isOpen) {
      mobileMenu.classList.remove('active');
      newMobileMenuBtn.classList.remove('active');
    } else {
      mobileMenu.classList.add('active');
      newMobileMenuBtn.classList.add('active');
    }
  });

  // 메뉴 링크 클릭시 메뉴 닫기 (솔루션 드롭다운 트리거 제외)
  const mobileMenuLinks = mobileMenu.querySelectorAll('.menu-link:not(.mobile-dropdown-trigger)');
  mobileMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('active');
      newMobileMenuBtn.classList.remove('active');
    });
  });

  // 솔루션 드롭다운 초기화
  initSolutionsDropdown();

  // 모바일 솔루션 드롭다운 토글
  initMobileSolutionsDropdown();

  // 모바일 제품 드롭다운 토글
  initMobileProductsDropdown();

  console.log('Header initialized successfully');
  return true;
}

/**
 * 솔루션 드롭다운 동적 생성 (Desktop)
 */
function initSolutionsDropdown() {
  const dropdownMenu = document.getElementById('solutionsDropdown');

  if (!dropdownMenu) {
    console.warn('Solutions dropdown not found');
    return;
  }

  // SolutionData가 로드되었는지 확인
  if (typeof window.getAllSolutions !== 'function') {
    console.warn('SolutionData not loaded yet, retrying...');
    setTimeout(initSolutionsDropdown, 100);
    return;
  }

  // 모든 솔루션 가져오기
  const solutions = window.getAllSolutions();

  // 드롭다운 아이템 생성
  const dropdownHTML = solutions.map((solution, index) => {
    // 구분선 추가 (4개마다)
    const divider = (index === 4) ? '<div class="dropdown-divider"></div>' : '';

    return `
      ${divider}
      <a href="/src/pages/Solutions/SolutionDetail.html?id=${solution.id}" class="dropdown-item">
        <span class="dropdown-item-label">${solution.label}</span>
        <span class="dropdown-item-title">${solution.headline}</span>
      </a>
    `;
  }).join('');

  dropdownMenu.innerHTML = dropdownHTML;
}

/**
 * 모바일 솔루션 드롭다운 초기화
 */
function initMobileSolutionsDropdown() {
  const mobileDropdownTrigger = document.getElementById('mobileSolutionsTrigger');
  const mobileDropdownMenu = document.getElementById('mobileSolutionsDropdown');

  if (!mobileDropdownTrigger || !mobileDropdownMenu) {
    console.warn('Mobile solutions dropdown not found');
    return;
  }

  // SolutionData가 로드되었는지 확인
  if (typeof window.getAllSolutions !== 'function') {
    console.warn('SolutionData not loaded yet, retrying...');
    setTimeout(initMobileSolutionsDropdown, 100);
    return;
  }

  // 모든 솔루션 가져오기
  const solutions = window.getAllSolutions();

  // 모바일 드롭다운 아이템 생성
  const mobileDropdownHTML = solutions.map(solution => `
    <li>
      <a href="/src/pages/Solutions/SolutionDetail.html?id=${solution.id}" class="mobile-dropdown-item">
        <span class="mobile-dropdown-item-label">${solution.label}</span>
        <span class="mobile-dropdown-item-title">${solution.headline}</span>
      </a>
    </li>
  `).join('');

  mobileDropdownMenu.innerHTML = mobileDropdownHTML;

  // 모바일 드롭다운 토글 기능 (텍스트 클릭 시 페이지 이동, 그 외 클릭 시 드롭다운)
  mobileDropdownTrigger.addEventListener('click', (e) => {
    const target = e.target;
    const clickedOnText = target.classList.contains('mobile-dropdown-text');

    if (clickedOnText) {
      // 텍스트 클릭: 페이지로 이동 (기본 링크 동작)
      // 모바일 메뉴 닫기
      const mobileMenu = document.getElementById('mobileMenu');
      const mobileMenuBtn = document.getElementById('mobileMenuBtn');
      if (mobileMenu && mobileMenuBtn) {
        mobileMenu.classList.remove('active');
        mobileMenuBtn.classList.remove('active');
      }
    } else {
      // 화살표나 공백 클릭: 드롭다운 토글
      e.preventDefault();
      e.stopPropagation();

      const isOpen = mobileDropdownMenu.classList.contains('active');

      if (isOpen) {
        mobileDropdownMenu.classList.remove('active');
        mobileDropdownTrigger.classList.remove('active');
      } else {
        mobileDropdownMenu.classList.add('active');
        mobileDropdownTrigger.classList.add('active');
      }
    }
  });

  // 모바일 드롭다운 아이템 클릭 시 메뉴 닫기
  const mobileDropdownItems = mobileDropdownMenu.querySelectorAll('.mobile-dropdown-item');
  mobileDropdownItems.forEach(item => {
    item.addEventListener('click', () => {
      // 드롭다운 닫기
      mobileDropdownMenu.classList.remove('active');
      mobileDropdownTrigger.classList.remove('active');

      // 전체 모바일 메뉴도 닫기
      const mobileMenu = document.getElementById('mobileMenu');
      const mobileMenuBtn = document.getElementById('mobileMenuBtn');
      if (mobileMenu && mobileMenuBtn) {
        mobileMenu.classList.remove('active');
        mobileMenuBtn.classList.remove('active');
      }
    });
  });
}

/**
 * 모바일 제품 드롭다운 초기화
 */
function initMobileProductsDropdown() {
  const mobileDropdownTrigger = document.getElementById('mobileProductsTrigger');
  const mobileDropdownMenu = document.getElementById('mobileProductsDropdown');

  if (!mobileDropdownTrigger || !mobileDropdownMenu) {
    console.warn('Mobile products dropdown not found');
    return;
  }

  // 모바일 드롭다운 토글 기능 (텍스트 클릭 시 페이지 이동, 그 외 클릭 시 드롭다운)
  mobileDropdownTrigger.addEventListener('click', (e) => {
    const target = e.target;
    const clickedOnText = target.classList.contains('mobile-dropdown-text');

    if (clickedOnText) {
      // 텍스트 클릭: 페이지로 이동 (기본 링크 동작)
      // 모바일 메뉴 닫기
      const mobileMenu = document.getElementById('mobileMenu');
      const mobileMenuBtn = document.getElementById('mobileMenuBtn');
      if (mobileMenu && mobileMenuBtn) {
        mobileMenu.classList.remove('active');
        mobileMenuBtn.classList.remove('active');
      }
    } else {
      // 화살표나 공백 클릭: 드롭다운 토글
      e.preventDefault();
      e.stopPropagation();

      const isOpen = mobileDropdownMenu.classList.contains('active');

      if (isOpen) {
        mobileDropdownMenu.classList.remove('active');
        mobileDropdownTrigger.classList.remove('active');
      } else {
        mobileDropdownMenu.classList.add('active');
        mobileDropdownTrigger.classList.add('active');
      }
    }
  });

  // 모바일 드롭다운 아이템 클릭 시 메뉴 닫기
  const mobileDropdownItems = mobileDropdownMenu.querySelectorAll('.mobile-dropdown-item');
  mobileDropdownItems.forEach(item => {
    item.addEventListener('click', () => {
      // 드롭다운 닫기
      mobileDropdownMenu.classList.remove('active');
      mobileDropdownTrigger.classList.remove('active');

      // 전체 모바일 메뉴도 닫기
      const mobileMenu = document.getElementById('mobileMenu');
      const mobileMenuBtn = document.getElementById('mobileMenuBtn');
      if (mobileMenu && mobileMenuBtn) {
        mobileMenu.classList.remove('active');
        mobileMenuBtn.classList.remove('active');
      }
    });
  });
}

// DOM이 로드될 때까지 대기하고 초기화 시도
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    // Header가 로드될 때까지 재시도
    const maxRetries = 10;
    let retries = 0;
    const retryInterval = setInterval(() => {
      if (initHeader() || retries >= maxRetries) {
        clearInterval(retryInterval);
      }
      retries++;
    }, 100);
  });
} else {
  // 이미 DOMContentLoaded가 실행된 경우
  const maxRetries = 10;
  let retries = 0;
  const retryInterval = setInterval(() => {
    if (initHeader() || retries >= maxRetries) {
      clearInterval(retryInterval);
    }
    retries++;
  }, 100);
}