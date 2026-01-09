


// 제품 카드 HTML 생성
const createProductCard = (product) => {
    console.log('check product', product)
    return `
        <div class="product-card-new" data-category="${product.category} data-product-id="${product.id}" onclick="goToProductDetail(${product.id})"> 
            <div class="product-image-placeholder">
                <div class="product-image">
                    <img src="${product.images[0]}" alt="${product.name}" />
                </div>
            </div>
            <div class="product-title-new">
                <h3>${product.name}</h3>
                <p>${product.specs.options}</p>
            </div>
        </div>
    `;
};


// 제품 상세 페이지로 이동
window.goToProductDetail = function(productId) {
    window.location.href = `/product-detail.html?id=${productId}`;
};


// 제품 목록 렌더링
const renderProducts = (category = 'all') => {
    const productsGrid = document.querySelector('.product-grid-new');
    if(!productsGrid) return;

    const products = getProductsByCategory(category);

    if(products.length === 0) {
        productsGrid.innerHTML = '<p class="no-products">해당 카테고리의 제품이 없습니다.</p>';
        return;
    }

    productsGrid.innerHTML = products.map(product => createProductCard(product)).join('');
}

// 버튼 활성화 상태 변경
const updateActiveButton = (clickedButton) => {
    const buttons = document.querySelectorAll('.category-group .category-btn');
    buttons.forEach(btn => {
        btn.classList.remove('active');
        btn.removeAttribute('aria-current');
    });

    clickedButton.classList.add('active');
    clickedButton.setAttribute('aria-current', 'page');

};

// 카테고리 필터링 이벤트 설정
const initCategoryFilter = () => {
    const categoryGroup = document.querySelector('.category-group');
    if(!categoryGroup) return;

    const buttons = categoryGroup.querySelectorAll('.category-btn');
    const categoryMap = {
        '전체' : 'all',
        '임대' : 'rental',
        '야외' : 'outdoor',
        '실내' : 'indoor',
        'COB LED' : 'cob',
    };

    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();

            const buttonText = button.textContent.trim();
            const category = categoryMap[buttonText];

            updateActiveButton(button);
            renderProducts(category);
        });
    });
}

// 페이지 로드 시 초기화
document.addEventListener('DOMContentLoaded', () => {
    // 초기에는 전체 제품 표시
    renderProducts('all');

    // 카테고리 필터 이벤트 설정
    initCategoryFilter();
})