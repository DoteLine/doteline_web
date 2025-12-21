/**
 * DOTELINE Main Page JavaScript
 * 담당: 모바일 메뉴 토글, 스크롤 애니메이션 등
 */

// ==============================================
// Mobile Menu Toggle Handler
// ==============================================
class MobileMenuController {
    constructor() {
        this.menuToggleButton = document.getElementById('mobileMenuToggle');
        this.mobileMenu = document.getElementById('mobileMenu');
        this.menuIcon = document.getElementById('menuIcon');
        this.closeIcon = document.getElementById('closeIcon');
        this.mobileNavLinks = document.querySelectorAll('.mobile-nav-link, .mobile-contact-button');
        this.isOpen = false;

        this.init();
    }

    init() {
        if (!this.menuToggleButton || !this.mobileMenu) {
            console.warn('Mobile menu elements not found');
            return;
        }

        this.menuToggleButton.addEventListener('click', () => this.toggleMenu());

        // 모바일 메뉴 링크 클릭 시 메뉴 닫기
        this.mobileNavLinks.forEach(link => {
            link.addEventListener('click', () => this.closeMenu());
        });
    }

    toggleMenu() {
        this.isOpen = !this.isOpen;
        this.updateMenuState();
    }

    closeMenu() {
        this.isOpen = false;
        this.updateMenuState();
    }

    updateMenuState() {
        if (this.isOpen) {
            this.mobileMenu.classList.add('active');
            this.menuIcon.classList.add('hidden');
            this.closeIcon.classList.remove('hidden');
        } else {
            this.mobileMenu.classList.remove('active');
            this.menuIcon.classList.remove('hidden');
            this.closeIcon.classList.add('hidden');
        }
    }
}

// ==============================================
// Scroll Animation Observer
// ==============================================
class ScrollAnimationObserver {
    constructor() {
        this.sections = document.querySelectorAll('.fade-in-section');
        this.observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        this.init();
    }

    init() {
        if (!this.sections.length) {
            console.warn('No fade-in sections found');
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => this.handleIntersection(entries),
            this.observerOptions
        );

        this.sections.forEach(section => {
            observer.observe(section);
        });
    }

    handleIntersection(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }
}

// ==============================================
// Smooth Scroll for Anchor Links
// ==============================================
class SmoothScrollHandler {
    constructor() {
        this.anchorLinks = document.querySelectorAll('a[href^="#"]');
        this.init();
    }

    init() {
        this.anchorLinks.forEach(link => {
            link.addEventListener('click', (e) => this.handleClick(e));
        });
    }

    handleClick(event) {
        const href = event.currentTarget.getAttribute('href');

        // href가 "#"만 있는 경우 무시
        if (href === '#') {
            event.preventDefault();
            return;
        }

        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            event.preventDefault();

            // 헤더 높이만큼 오프셋 추가
            const headerOffset = 80;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    }
}

// ==============================================
// Initialize All Features
// ==============================================
class MainPageApp {
    constructor() {
        this.init();
    }

    init() {
        // DOM이 완전히 로드된 후 초기화
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.initializeComponents());
        } else {
            this.initializeComponents();
        }
    }

    initializeComponents() {
        try {
            // 모바일 메뉴 컨트롤러 초기화
            new MobileMenuController();

            // 스크롤 애니메이션 옵저버 초기화
            new ScrollAnimationObserver();

            // 부드러운 스크롤 핸들러 초기화
            new SmoothScrollHandler();

            console.log('Main page initialized successfully');
        } catch (error) {
            console.error('Error initializing main page:', error);
        }
    }
}

// 앱 시작
new MainPageApp();