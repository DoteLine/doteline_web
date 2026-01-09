// 제품 데이터 관리
// id, category, image 서술
const productsData = {
    rental : [
        {
            id : 1, 
            name: 'rental indoor 500x500mm', 
            category:'rental',
            // 상세페이지 최상단 배너 이미지
            bannerImage: '/resources/productpage/rental-indoor-500x500mm/Rental Indoor 500x500mm_1_head.jpg',
            // 대표 이미지 배열 (5개)
            images: [
                '/resources/productpage/rental-indoor-500x500mm/Rental-Indoor-500x500mm_2_Product-Image0.jpg',
                '/resources/productpage/rental-indoor-500x500mm/Rental Indoor 500x500mm_2_Product Image1.jpg',
                '/resources/productpage/rental-indoor-500x500mm/Rental Indoor 500x500mm_2_Product Image2.jpg',
                '/resources/productpage/rental-indoor-500x500mm/Rental Indoor 500x500mm_2_Product Image4.jpg',
                '/resources/productpage/rental-indoor-500x500mm/Rental Indoor 500x500mm_2_Product Image3.jpg',
            ],
            // 썸네일 이미지(목록 페이지용)
            thumbnail: '/resources/productpage/rental-indoor-500x500mm/Rental Indoor 500x500mm_2_Product Image0.jpg',
            // 상세페이지용 이미지
            detailImages: [
                '/resources/productpage/rental-indoor-500x500mm/Rental Indoor 500x500mm_3_Product Key Descriptions.jpg',
                '/resources/productpage/rental-indoor-500x500mm/Rental Indoor 500x500mm_4_Product Advantages.jpg',
                '/resources/productpage/rental-indoor-500x500mm/Rental Indoor 500x500mm_5_Product Advantages.jpg',
                '/resources/productpage/rental-indoor-500x500mm/Rental Indoor 500x500mm_6_Product Advantages.jpg',
                '/resources/productpage/rental-indoor-500x500mm/Rental Indoor 500x500mm_7_Product Advantages.jpg',
                '/resources/productpage/rental-indoor-500x500mm/Rental Indoor 500x500mm_8_Product Specifications.jpg',
                '/resources/productpage/rental-indoor-500x500mm/Rental Indoor 500x500mm_9_Product usage photos.jpg',
            ],
            // 제품 스펙 - 옵션, 태그, 부가설명
            specs: {
                options: ['P1.953', 'P2.5', 'P2.604', 'P2.976', 'P3.91'],
                tags: ['LED Screen', 'LED Display'],
                description: '익스트림 HD',
            }
        },
        {
            id : 11, 
            name: 'rental indoor 500x1000mm', 
            category:'rental',
            bannerImage: '/resources/productpage/rental-indoor-500x1000mm/Rental Indoor 500x500mm_1_head.jpg',
            // 대표 이미지 배열 (5개)
            images: [
                '/resources/productpage/rental-indoor-500x1000mm/Rental-Indoor-500X1000mm_2_Product-Image.jpg',
            ],
            // 썸네일 이미지(목록 페이지용)
            thumbnail: '/resources/productpage/rental-indoor-500x1000mm/Rental-Indoor-500X1000mm_2_Product-Image.jpg',
            // 상세페이지용 이미지
            detailImages: [
                '/resources/productpage/rental-indoor-500x1000mm/Rental Indoor 500x500mm_3_Product Key Descriptions.jpg',
                '/resources/productpage/rental-indoor-500x500mm/Rental Indoor 500x500mm_4_Product Advantages.jpg',
                '/resources/productpage/rental-indoor-500x500mm/Rental Indoor 500x500mm_5_Product Advantages.jpg',
                '/resources/productpage/rental-indoor-500x500mm/Rental Indoor 500x500mm_6_Product Advantages.jpg',
                '/resources/productpage/rental-indoor-500x500mm/Rental Indoor 500x500mm_7_Product Advantages.jpg',
                '/resources/productpage/rental-indoor-500x500mm/Rental Indoor 500x500mm_8_Product Specifications.jpg',
                '/resources/productpage/rental-indoor-500x500mm/Rental Indoor 500x500mm_9_Product usage photos.jpg',
            ],
            // 제품 스펙 - 옵션, 태그, 부가설명
            specs: {
                options: ['P1.953', 'P2.5', 'P2.604', 'P2.976', 'P3.91'],
                tags: ['LED Screen', 'LED Display'],
                description: '익스트림 HD',
            }
        },
    ],
    outdoor : [
        {
            id : 2, 
            name: 'stadium-screen',
            category: 'outdoor',
            bannerImage: '/resources/productpage/stadium-screen-banner.png',
            images: [
                '/resources/productpage/stadium-screen-1.png',
                '/resources/productpage/stadium-screen-2.png',
                '/resources/productpage/stadium-screen-3.png',
            ],
            thumbnail: '/resources/productpage/stadium-screen-1.png',
            detailImages: [
                '/resources/productpage/stadium-screen-detail-1.png',
                '/resources/productpage/stadium-screen-detail-2.png',
                '/resources/productpage/stadium-screen-detail-3.png',
                '/resources/productpage/stadium-screen-detail-4.png',
            ],
            specs: {
                options: ['P8', 'P10'],
                tags: ['Outdoor LED', 'Stadium Display'],
                description: '고휘도 야외용',
            }
        },
    ],
    indoor : [
        {
            id : 3, 
            name: 'gob-waterproof',
            category: 'indoor',
            bannerImage: '/resources/productpage/gob-waterproof-banner.png',
            images: [
                '/resources/productpage/gob-waterproof-1.png',
                '/resources/productpage/gob-waterproof-2.png',
            ],
            thumbnail: '/resources/productpage/gob-waterproof-1.png',
            detailImages: [
                '/resources/productpage/gob-waterproof-detail-1.png',
                '/resources/productpage/gob-waterproof-detail-2.png',
            ],
            specs: {
                options: ['P2.5', 'P3'],
                tags: ['GOB Technology', 'Waterproof'],
                description: 'GOB 방수 기술',
            }
        },
    ],
    cob : [
        {
            id : 4, 
            name: 'cob-p07',
            category: 'cob',
            bannerImage: '/resources/productpage/cob-p07-1-banner.png',
            images: [
                '/resources/productpage/cob-p07-1.png',
                '/resources/productpage/cob-p07-2.png',
                '/resources/productpage/cob-p07-3.png',
                '/resources/productpage/cob-p07-4.png',
            ],
            thumbnail: '/resources/productpage/cob-p07-1.png',
            detailImages: [
                '/resources/productpage/cob-p07-detail-1.png',
            ],
            specs: {
                options: ['P0.7', 'P0.9', 'P1.25'],
                tags: ['COB LED', 'Ultra HD'],
                description: '초고해상도 COB',
            }
        },
    ],
};

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
