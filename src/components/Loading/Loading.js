/**
 * Loading Component
 * 재사용 가능한 로딩 인디케이터 컴포넌트
 */

class Loading {
    /**
     * 로딩 스피너 생성
     * @param {HTMLElement} targetElement - 로딩 스피너를 표시할 부모 요소
     * @param {Object} options - 옵션 설정
     * @param {string} options.size - 스피너 크기 ('small', 'medium', 'large')
     * @param {string} options.color - 스피너 색상
     * @returns {HTMLElement} 생성된 로딩 요소
     */
    static show(targetElement, options = {}) {
        const {
            size = 'medium',
            color = '#3b82f6'
        } = options;

        // 기존 로딩 스피너가 있으면 제거
        this.hide(targetElement);

        // 로딩 컨테이너 생성
        const loadingContainer = document.createElement('div');
        loadingContainer.className = `loading-container loading-${size}`;
        loadingContainer.setAttribute('data-loading', 'true');

        // 로딩 스피너 생성
        const spinner = document.createElement('div');
        spinner.className = 'loading-spinner';
        spinner.style.borderTopColor = color;

        loadingContainer.appendChild(spinner);
        targetElement.appendChild(loadingContainer);

        return loadingContainer;
    }

    /**
     * 로딩 스피너 제거
     * @param {HTMLElement} targetElement - 로딩 스피너를 제거할 부모 요소
     */
    static hide(targetElement) {
        const existingLoader = targetElement.querySelector('[data-loading="true"]');
        if (existingLoader) {
            existingLoader.remove();
        }
    }

    /**
     * 전체 페이지 로딩 오버레이 표시
     * @param {Object} options - 옵션 설정
     * @returns {HTMLElement} 생성된 오버레이 요소
     */
    static showOverlay(options = {}) {
        const {
            size = 'large',
            color = '#3b82f6',
            backgroundColor = 'rgba(255, 255, 255, 0.9)'
        } = options;

        // 기존 오버레이가 있으면 제거
        this.hideOverlay();

        // 오버레이 생성
        const overlay = document.createElement('div');
        overlay.className = 'loading-overlay';
        overlay.setAttribute('data-loading-overlay', 'true');
        overlay.style.backgroundColor = backgroundColor;

        // 로딩 스피너 생성
        const spinner = document.createElement('div');
        spinner.className = `loading-spinner loading-${size}`;
        spinner.style.borderTopColor = color;

        overlay.appendChild(spinner);
        document.body.appendChild(overlay);

        return overlay;
    }

    /**
     * 전체 페이지 로딩 오버레이 제거
     */
    static hideOverlay() {
        const existingOverlay = document.querySelector('[data-loading-overlay="true"]');
        if (existingOverlay) {
            existingOverlay.remove();
        }
    }
}

// 전역으로 사용 가능하도록 export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Loading;
}