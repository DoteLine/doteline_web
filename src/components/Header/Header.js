/**
 * Header Component JavaScript
 * 모바일 메뉴 토글 기능
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

  // 메뉴 링크 클릭시 메뉴 닫기
  const mobileMenuLinks = mobileMenu.querySelectorAll('.menu-link');
  mobileMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('active');
      newMobileMenuBtn.classList.remove('active');
    });
  });

  console.log('Header initialized successfully');
  return true;
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