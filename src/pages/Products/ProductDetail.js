console.log('ProduceDetail.js on');
 
let curentSlideIndex = 0;
let slideInterval = null;
let productImages = [];

// URL에서 제품 ID 가져오기
function getProductIdFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return parseInt(params.get('id'));
}

// 이미지 슬라이더 초기화
function initImageSlider(images) {
    productImages = images;
    curentSlideIndex = 0;

    // 메인 이미지 설정
    const mainImage = document.getElementById('main-image');
    mainImage.src = images[0];

    // 인디케이터 생성
    const indicatorContainer = document.getElementById('slider-indicators');
    indicatorContainer.innerHTML = images.map((_, index) => 
        `<span class="indicator ${index === 0? 'active' : ''}" onclick="goToSlide(${index})"></span>`).join('');

    // 썸네일 이미지 생성
    const thumbnailContainer = document.getElementById('thumbnail-images');
    thumbnailContainer.innerHTML = images.map((img, index) =>
        ` <img src="${img}"
                class="thumbnail ${index === 0 ? 'active' : ''}
                onclick="goToSlide(${index})"
                alt="썸네일 ${index +1}">
    `).join('');

    // 자동 슬라이드 시작
    startAutoSlide();
}

// 슬라이드 변경
window.changeSlide = function(direction) {
    stopAutoSlide();
    curentSlideIndex += direction;

    if(curentSlideIndex >= productImages.length) {
        curentSlideIndex = 0;
    } else if (curentSlideIndex < 0) {
        curentSlideIndex = productImages.length - 1;
    }

    updateSlide();
    startAutoSlide();
}


// 특정 슬라이드로 이동
window.goToSlide = function(index) {
    stopAutoSlide();
    curentSlideIndex = index;
    updateSlide();
    startAutoSlide();
}

// 슬라이드 업데이트
function updateSlide() {
    const mainImage = document.getElementById('main-image');
    mainImage.style.opacity = '0';

    setTimeout(() => {
        mainImage.src = productImages[curentSlideIndex];
        mainImage.style.opacity = '1';
    }, 200);

    // 안디케이터 업데이트
    document.querySelectorAll('.indicator').forEach((indicator, index) => {
        indicator.classList.toggle('active', index === curentSlideIndex);
    });

    // 썸네일 업데이트
    document.querySelectorAll('.thumbnail').forEach((thumb, index) => {
        thumb.classList.toggle('active', index === curentSlideIndex);
    });
}

// 자동 슬라이드 시작
function startAutoSlide() {
    slideInterval = setInterval(() => {
        curentSlideIndex = (curentSlideIndex + 1) % productImages.length;
        updateSlide();
    }, 3000); // 3초마다 전환
}

// 자동 슬라이드 중지
function stopAutoSlide() {
    if(slideInterval) {
        clearInterval(slideInterval);
        slideInterval = null;
    }
}

// 제품 태그 렌더링
function renderTags(tags) {
    const tagsContainer = document.getElementById('detail-tags');

    if(!tags || tags.length === 0){
        tagsContainer.style.display = 'none';
        return;
    }

    tagsContainer.innerHTML = tags.map(tag => 
        `<span class="tag">${tag}</span>`
    ).join('');
}

// 제품 옵션 렌더링
function renderOptions(options) {
    const optionsContainer = document.getElementById('detail-options');
    const optionsSection = document.querySelector('.product-options-section');

    if (!options || options.length === 0) {
        optionsSection.style.display = 'none';
        return;
    }

    optionsContainer.innerHTML = options.map(option =>
         `<span class="option">${option}</span>`
    ).join('');
}

// 상세 이미지 렌더링
function renderDetailImages(detailImages) {
    const container = document.getElementById('detail-images-container');

    if(!detailImages || detailImages.length === 0) {
        container.innerHTML = '<p class="no-detail-images">상세 이미지가 없습니다.</p>';
        return;
    }

    container.innerHTML = detailImages.map((img, index) =>
        `<div class="detail-image-wrapper">
            <img src="${img}"
                alt="상세 이미지 ${index + 1}"
                class= "detail-image"
                loading="lazy"
            />
        </div>`
    ).join('');
}

// 제품 상세 정보 렌더링
function renderProductDetail() {
    const productId = getProductIdFromUrl();
    const product = findProductById(productId);

    if(!product) {
        document.querySelector('.product-detail-container').innerHTML = 
            `<p class="error-message">제품을 찾을 수 없습니다.</p>`;
        return;
    };

    // 제품 기본 정보 표시
    document.getElementById('detail-name').textContent = product.name;
    document.getElementById('detail-category').textContent = getCategoryName(product.category);

    // 제품 설명 표시
    if(product.specs && product.specs.description) {
        document.getElementById('detail-description').innerHTML = 
            `<p>${product.specs.description}</p>`
    }

    // 제품 태그 렌더링
    if(product. images && product.images.length > 0) {
        initImageSlider(product.images);
    }


    // 상세 이미지 렌더링
    renderDetailImages(product.detailImages);

    // 페이지 타이틀 변경
    document.title = `${product.name} | DOTELINE`;
}

// 페이지 로드 시 실행
document.addEventListener('DOMContentLoaded', () => {
    renderProductDetail();

    // 페이지 벗어나면 자동 슬라이드 중지
    window.addEventListener('beforeunload', stopAutoSlide);
})
