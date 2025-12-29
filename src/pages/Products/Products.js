console.log('product.js on');

// 제품 데이터 관리
// id, category, image 서술
const productsData = {
    rental : [
        {id : 1, name: 'rental-indoor-500x500mm', category:'rental', image: '/resources/productpage/rental-indoor-500x500mm.png'},
    ],
    outdoor : [
        {id : 2, name: 'stadium-screen', category:'outdoor', image: '/resources/productpage/stadium-screen.png'},
    ],
    indoor : [
        {id : 3, name: 'gob-waterproof', category:'indoor', image: '/resources/productpage/gob-waterproof.png'},
    ],
    cob : [
        {id : 4, name: 'cob-p07', category:'cob', image: '/resources/productpage/cob-p07.png'},
    ],

}

// 전체 제품 배열 생성
const getAllProducts = () =>{
    return [
        ...productsData.rental,
        ...productsData.outdoor,
        ...productsData.indoor,
        ...productsData.cob,
    ];
};

// 카테고리별 제품 가져오기
const getProductsByCategory = (category) => {
    if(category === 'all') {
        return getAllProducts();
    }

    return productsData[category] || [];
};

// 제품 카드 HTML 생성
const createProductCard = (product) => {
    return `
        <div class="product-card-new" data-category="${product.category}"> 
            <div class="product-image-placeholder">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}" />
                </div>
            </div>
            <div class="product-content-new">
                <h3 class="product-title-new">${product.name}</h3>
            </div>
        </div>
    `;
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
    const buttons = document.querySelectorAll('.btn-group .btn');
    buttons.forEach(btn => {
        btn.classList.remove('active');
        btn.removeAttribute('aria-current');
    });

    clickedButton.classList.add('active');
    clickedButton.setAttribute('aria-current', 'page');

};

// 카테고리 필터링 이벤트 설정
const initCategoryFilter = () => {
    const btnGroup = document.querySelector('.btn-group');
    if(!btnGroup) return;

    const buttons = btnGroup.querySelectorAll('.btn');
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

// 외부에서 사용 가능하도록 export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        productsData,
        renderProducts,
        getProductsByCategory
    };
}