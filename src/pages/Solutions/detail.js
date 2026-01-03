/**
 * Solution Detail Page JavaScript
 * Handles dynamic content loading and pagination
 */

// ========================================
// Data Configuration
// ========================================

const SOLUTIONS_DATA = {
    1: {
        heroImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80',
        heroTitle: 'Solution 1',
        secondHeroImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80',
        secondHeroTitle: '혁신적인 첫 번째 솔루션',
        secondHeroDescription: '우리의 첫 번째 솔루션은 최신 기술을 활용하여 비즈니스의 디지털 전환을 가속화합니다. 클라우드 기반 인프라와 AI 기술을 결합하여 효율성을 극대화하고 비용을 절감합니다.',
        products: [
            {
                image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&q=80',
                title: '제품 1-1',
                description: '고성능 클라우드 컴퓨팅 솔루션으로 확장성과 안정성을 제공합니다.'
            },
            {
                image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80',
                title: '제품 1-2',
                description: 'AI 기반 데이터 분석 도구로 실시간 인사이트를 제공합니다.'
            },
            {
                image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80',
                title: '제품 1-3',
                description: '통합 관리 플랫폼으로 모든 리소스를 한 곳에서 관리합니다.'
            },
            {
                image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80',
                title: '제품 1-4',
                description: '보안 강화 솔루션으로 데이터를 안전하게 보호합니다.'
            },
            {
                image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=400&q=80',
                title: '제품 1-5',
                description: '자동화 도구로 반복 작업을 효율적으로 처리합니다.'
            },
            {
                image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&q=80',
                title: '제품 1-6',
                description: '협업 도구로 팀 생산성을 향상시킵니다.'
            },
            {
                image: 'https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?w=400&q=80',
                title: '제품 1-7',
                description: '모니터링 시스템으로 실시간 성능을 추적합니다.'
            },
            {
                image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&q=80',
                title: '제품 1-8',
                description: '백업 및 복구 솔루션으로 데이터 손실을 방지합니다.'
            },
            {
                image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&q=80',
                title: '제품 1-9',
                description: '확장 가능한 스토리지로 무제한 데이터를 저장합니다.'
            },
            {
                image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&q=80',
                title: '제품 1-10',
                description: '고객 지원 시스템으로 빠른 응답을 제공합니다.'
            }
        ]
    },
    2: {
        heroImage: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1920&q=80',
        heroTitle: 'Solution 2',
        secondHeroImage: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80',
        secondHeroTitle: '스마트 비즈니스 플랫폼',
        secondHeroDescription: '두 번째 솔루션은 기업의 모든 업무 프로세스를 하나의 플랫폼에서 관리할 수 있도록 지원합니다. 직관적인 인터페이스와 강력한 기능으로 업무 효율을 극대화합니다.',
        products: [
            {
                image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&q=80',
                title: '제품 2-1',
                description: '프로젝트 관리 도구로 일정과 리소스를 효율적으로 관리합니다.'
            },
            {
                image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&q=80',
                title: '제품 2-2',
                description: 'CRM 시스템으로 고객 관계를 체계적으로 관리합니다.'
            },
            {
                image: 'https://images.unsplash.com/photo-1553484771-371a605b060b?w=400&q=80',
                title: '제품 2-3',
                description: '재무 관리 솔루션으로 정확한 회계 처리를 지원합니다.'
            },
            {
                image: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=400&q=80',
                title: '제품 2-4',
                description: 'HR 관리 시스템으로 인사 업무를 자동화합니다.'
            },
            {
                image: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=400&q=80',
                title: '제품 2-5',
                description: '마케팅 자동화로 캠페인을 효과적으로 운영합니다.'
            },
            {
                image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&q=80',
                title: '제품 2-6',
                description: '비디오 회의 솔루션으로 원격 협업을 지원합니다.'
            }
        ]
    },
    3: {
        heroImage: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1920&q=80',
        heroTitle: 'Solution 3',
        secondHeroImage: 'https://images.unsplash.com/photo-1484557052118-f32bd25b45b5?w=800&q=80',
        secondHeroTitle: 'AI 기반 분석 솔루션',
        secondHeroDescription: '세 번째 솔루션은 인공지능과 머신러닝을 활용하여 빅데이터를 분석하고 예측 모델을 제공합니다. 데이터 기반 의사결정을 통해 비즈니스 성과를 향상시킵니다.',
        products: [
            {
                image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80',
                title: '제품 3-1',
                description: '머신러닝 모델 학습 플랫폼으로 AI 개발을 가속화합니다.'
            },
            {
                image: 'https://images.unsplash.com/photo-1527474305487-b87b222841cc?w=400&q=80',
                title: '제품 3-2',
                description: '자연어 처리 엔진으로 텍스트 데이터를 분석합니다.'
            },
            {
                image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&q=80',
                title: '제품 3-3',
                description: '이미지 인식 시스템으로 시각 데이터를 처리합니다.'
            }
        ]
    },
    4: {
        heroImage: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1920&q=80',
        heroTitle: 'Solution 4',
        secondHeroImage: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80',
        secondHeroTitle: '사이버 보안 솔루션',
        secondHeroDescription: '네 번째 솔루션은 기업의 디지털 자산을 보호하는 종합 보안 시스템입니다. 최신 위협을 실시간으로 탐지하고 차단하여 안전한 비즈니스 환경을 제공합니다.',
        products: [
            {
                image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&q=80',
                title: '제품 4-1',
                description: '방화벽 시스템으로 외부 침입을 차단합니다.'
            },
            {
                image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=400&q=80',
                title: '제품 4-2',
                description: '암호화 솔루션으로 중요 데이터를 보호합니다.'
            }
        ]
    },
    5: {
        heroImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80',
        heroTitle: 'Solution 5',
        secondHeroImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
        secondHeroTitle: '모바일 퍼스트 플랫폼',
        secondHeroDescription: '다섯 번째 솔루션은 모바일 중심의 업무 환경을 구축합니다. 언제 어디서나 접근 가능한 앱과 클라우드 기반 서비스로 유연한 업무를 지원합니다.',
        products: [
            {
                image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&q=80',
                title: '제품 5-1',
                description: '크로스 플랫폼 앱 개발 도구입니다.'
            },
            {
                image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&q=80',
                title: '제품 5-2',
                description: '모바일 결제 시스템으로 간편한 거래를 지원합니다.'
            }
        ]
    },
    6: {
        heroImage: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1920&q=80',
        heroTitle: 'Solution 6',
        secondHeroImage: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80',
        secondHeroTitle: 'IoT 통합 솔루션',
        secondHeroDescription: '여섯 번째 솔루션은 사물인터넷 기기들을 하나의 플랫폼에서 관리합니다. 스마트 팩토리부터 스마트 시티까지 다양한 IoT 환경을 지원합니다.',
        products: [
            {
                image: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=400&q=80',
                title: '제품 6-1',
                description: 'IoT 디바이스 관리 플랫폼입니다.'
            },
            {
                image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&q=80',
                title: '제품 6-2',
                description: '센서 데이터 수집 및 분석 시스템입니다.'
            }
        ]
    },
    7: {
        heroImage: 'https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?w=1920&q=80',
        heroTitle: 'Solution 7',
        secondHeroImage: 'https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?w=800&q=80',
        secondHeroTitle: '블록체인 솔루션',
        secondHeroDescription: '일곱 번째 솔루션은 블록체인 기술을 활용하여 투명하고 안전한 거래를 가능하게 합니다. 스마트 계약과 분산 원장으로 신뢰성을 보장합니다.',
        products: [
            {
                image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&q=80',
                title: '제품 7-1',
                description: '블록체인 플랫폼 개발 도구입니다.'
            },
            {
                image: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=400&q=80',
                title: '제품 7-2',
                description: '스마트 계약 자동화 시스템입니다.'
            }
        ]
    },
    8: {
        heroImage: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1920&q=80',
        heroTitle: 'Solution 8',
        secondHeroImage: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80',
        secondHeroTitle: '그린 테크 솔루션',
        secondHeroDescription: '여덟 번째 솔루션은 환경 친화적인 기술로 지속 가능한 비즈니스를 지원합니다. 에너지 효율을 최적화하고 탄소 배출을 줄이는 스마트 솔루션입니다.',
        products: [
            {
                image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400&q=80',
                title: '제품 8-1',
                description: '에너지 관리 시스템으로 전력 사용을 최적화합니다.'
            },
            {
                image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&q=80',
                title: '제품 8-2',
                description: '탄소 배출 모니터링 도구입니다.'
            }
        ]
    }
};

// ========================================
// State Management
// ========================================

let currentPage = 1;
const itemsPerPage = 9;
let currentSolutionData = null;

// ========================================
// Utility Functions
// ========================================

/**
 * Get URL parameter by name
 */
function getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

/**
 * Scroll to top smoothly
 */
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// ========================================
// Content Rendering Functions
// ========================================

/**
 * Load hero section content
 */
function loadHeroSection(data) {
    const heroSection = document.getElementById('heroSection');
    const heroTitle = document.getElementById('heroTitle');

    heroSection.style.backgroundImage = `url('${data.heroImage}')`;
    heroTitle.textContent = data.heroTitle;
}

/**
 * Load second hero section content
 */
function loadSecondHeroSection(data) {
    const secondHeroImage = document.getElementById('secondHeroImage');
    const secondHeroTitle = document.getElementById('secondHeroTitle');
    const secondHeroDescription = document.getElementById('secondHeroDescription');

    secondHeroImage.src = data.secondHeroImage;
    secondHeroImage.alt = data.secondHeroTitle;
    secondHeroTitle.textContent = data.secondHeroTitle;
    secondHeroDescription.textContent = data.secondHeroDescription;
}

/**
 * Render products for current page
 */
function renderProducts(products, page) {
    const productsGrid = document.getElementById('productsGrid');
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const pageProducts = products.slice(startIndex, endIndex);

    productsGrid.innerHTML = '';

    pageProducts.forEach((product, index) => {
        const productCard = document.createElement('article');
        productCard.className = 'product-card';
        productCard.style.opacity = '0';
        productCard.style.transform = 'translateY(20px)';

        productCard.innerHTML = `
            <div class="product-card__image">
                <img src="${product.image}" alt="${product.title}" loading="lazy" />
            </div>
            <div class="product-card__content">
                <h3 class="product-card__title">${product.title}</h3>
                <p class="product-card__description">${product.description}</p>
            </div>
        `;

        productsGrid.appendChild(productCard);

        // Entrance animation
        setTimeout(() => {
            productCard.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            productCard.style.opacity = '1';
            productCard.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

/**
 * Render pagination controls
 */
function renderPagination(totalProducts, currentPage) {
    const pagination = document.getElementById('pagination');
    const totalPages = Math.ceil(totalProducts / itemsPerPage);

    // Hide pagination if only one page
    if (totalPages <= 1) {
        pagination.style.display = 'none';
        return;
    }

    pagination.style.display = 'flex';
    pagination.innerHTML = '';

    // Previous button
    const prevButton = createPaginationButton('이전', currentPage === 1, () => {
        if (currentPage > 1) {
            changePage(currentPage - 1);
        }
    });
    prevButton.classList.add('pagination-button--prev');
    prevButton.setAttribute('aria-label', '이전 페이지');
    pagination.appendChild(prevButton);

    // Page number buttons
    for (let i = 1; i <= totalPages; i++) {
        const pageButton = createPaginationButton(i.toString(), false, () => {
            changePage(i);
        });

        if (i === currentPage) {
            pageButton.classList.add('active');
            pageButton.setAttribute('aria-current', 'page');
        }

        pageButton.setAttribute('aria-label', `${i}페이지`);
        pagination.appendChild(pageButton);
    }

    // Next button
    const nextButton = createPaginationButton('다음', currentPage === totalPages, () => {
        if (currentPage < totalPages) {
            changePage(currentPage + 1);
        }
    });
    nextButton.classList.add('pagination-button--next');
    nextButton.setAttribute('aria-label', '다음 페이지');
    pagination.appendChild(nextButton);
}

/**
 * Create pagination button element
 */
function createPaginationButton(text, disabled, onClick) {
    const button = document.createElement('button');
    button.className = 'pagination-button';
    button.textContent = text;
    button.disabled = disabled;
    button.addEventListener('click', onClick);
    return button;
}

/**
 * Change to specified page
 */
function changePage(page) {
    currentPage = page;
    renderProducts(currentSolutionData.products, currentPage);
    renderPagination(currentSolutionData.products.length, currentPage);
    scrollToTop();
}

// ========================================
// Initialization
// ========================================

/**
 * Initialize page with solution data
 */
function initializePage() {
    const solutionId = getUrlParameter('id');

    if (!solutionId || !SOLUTIONS_DATA[solutionId]) {
        // Redirect to solutions main if invalid ID
        window.location.href = '/src/pages/Solutions/SolutionsMain.html';
        return;
    }

    currentSolutionData = SOLUTIONS_DATA[solutionId];

    // Load all sections
    loadHeroSection(currentSolutionData);
    loadSecondHeroSection(currentSolutionData);
    renderProducts(currentSolutionData.products, currentPage);
    renderPagination(currentSolutionData.products.length, currentPage);

    // Update page title
    document.title = `${currentSolutionData.heroTitle} - DoteLine`;
}

// ========================================
// Event Listeners
// ========================================

document.addEventListener('DOMContentLoaded', initializePage);