/**
 * Solutions Main Page JavaScript
 * Handles navigation to detail pages and scroll animations
 */

// Navigate to detail page
function goToDetail(solutionId) {
    // URL 파라미터로 solution ID 전달
    window.location.href = `/src/pages/Solutions/detail.html?id=${solutionId}`;
}

// 스크롤 애니메이션 초기화
function initSolutionScrollAnimation() {
    // 솔루션 섹션 애니메이션
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

// 페이지 로드 시 애니메이션 초기화
document.addEventListener('DOMContentLoaded', () => {
    initSolutionScrollAnimation();
});