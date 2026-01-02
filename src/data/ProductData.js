// 제품 데이터 관리
// id, category, image 서술
const productsData = {
    rental : [
        {
            id : 1, 
            name: 'rental-indoor-500x500mm', 
            category:'rental',
            // 대표 이미지 배열 (5개)
            image: [
                '/resources/productpage/rental-indoor-500x500mm.png',
            ],
            // 썸네일 이미지(목록 페이지용)
            thumbnail: '/resources/productpage/rental-indoor-500x500mm.png',
            // 부제목
            subtitle: 'P1.953/P2.5/P2.604/P2.976/P3.91',
            // tag
            tag: '??'
        },
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

// 전체 제품 가져오기
function getAllProducts() {
    return [
        ...productsData.rental,
        ...productsData.outdoor,
        ...productsData.indoor,
        ...productsData.cob,
    ];
}

// ID로 제품 찾기
function findProductById(id) {
    const allProducts = getAllProducts();
    return allProducts.find(product => product.id === parseInt(id));
}

// 카테고리별 제품 가져오기
function getProductsByCategory(category) {
    if(category === 'all') {
        return getAllProducts();
    }
    return productsData[category] || [];
}

// 카테고리 한글명
function getCategoryName(category) {
    const categoryNames = {
        'rental' : '임대용',
        'outdoor' : '야외용',
        'indoor' : '실내용',
        'cob' : 'COB LED',
    };
    return categoryNames[category] || category;
}
