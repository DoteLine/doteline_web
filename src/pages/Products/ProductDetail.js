console.log('ProductDetail.js 로드됨');

// URL에서 제품 ID 가져오기
function getProductIdFromUrl() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    console.log('URL에서 가져온 ID:', id);
    return parseInt(id);
}

// 제품 데이터 렌더링
function renderProductDetail() {
    console.log('renderProductDetail 시작');
    
    // 1. 제품 ID 가져오기
    const productId = getProductIdFromUrl();
    console.log('제품 ID:', productId);

    // 2. 제품 찾기
    const product = findProductById(productId);
    console.log('찾은 제품:', product);

    // 3. 제품이 없으면 에러 메시지
    if (!product) {
        const section = document.querySelector('.product-detail-section');
        section.innerHTML = `
            <div style="padding: 40px; text-align: center;">
                <h1>제품을 찾을 수 없습니다.</h1>
                <p>요청하신 제품(ID: ${productId})이 존재하지 않습니다.</p>
                <a href="/product" style="display: inline-block; margin-top: 20px; padding: 10px 20px; background: #333; color: white; text-decoration: none;">목록으로 돌아가기</a>
            </div>
        `;
        return;
    }

    // 4. 기본 정보 표시
    document.getElementById('product-name').textContent = product.name;
    document.getElementById('product-category').textContent = 
        `카테고리: ${getCategoryName(product.category)}`;
    
    if (product.specs && product.specs.description) {
        document.getElementById('product-description').textContent = 
            product.specs.description;
    } else {
        document.getElementById('product-description').style.display = 'none';
    }

    // 5. 배너 이미지 표시
    const bannerImage = document.getElementById('banner-image');
    if (product.bannerImage) {
        bannerImage.src = product.bannerImage;
        bannerImage.onerror = function() {
            console.error('배너 이미지 로드 실패:', product.bannerImage);
            document.getElementById('banner-section').innerHTML = 
                '<p style="color: red;">배너 이미지를 불러올 수 없습니다.</p>';
        };
    } else {
        document.getElementById('banner-section').style.display = 'none';
    }

    // 6. 대표 이미지들 표시
    const mainImagesContainer = document.getElementById('main-images-container');
    if (product.images && product.images.length > 0) {
        mainImagesContainer.innerHTML = ''; // 초기화
        product.images.forEach((img, index) => {
            const imgElement = document.createElement('img');
            imgElement.src = img;
            imgElement.alt = `대표 이미지 ${index + 1}`;
            imgElement.style.maxWidth = '300px';
            imgElement.style.height = 'auto';
            imgElement.style.border = '1px solid #ddd';
            imgElement.style.borderRadius = '8px';
            
            imgElement.onerror = function() {
                console.error(`대표 이미지 ${index + 1} 로드 실패:`, img);
                this.style.display = 'none';
            };
            
            mainImagesContainer.appendChild(imgElement);
        });
    } else {
        document.getElementById('main-images-section').style.display = 'none';
    }

    // 7. 태그 표시
    const tagsContainer = document.getElementById('tags-container');
    if (product.specs && product.specs.tags && product.specs.tags.length > 0) {
        tagsContainer.innerHTML = ''; // 초기화
        product.specs.tags.forEach(tag => {
            const tagElement = document.createElement('span');
            tagElement.textContent = tag;
            tagElement.style.display = 'inline-block';
            tagElement.style.padding = '8px 16px';
            tagElement.style.margin = '5px';
            tagElement.style.border = '1px solid #999';
            tagElement.style.borderRadius = '20px';
            tagElement.style.fontSize = '14px';
            tagElement.style.backgroundColor = '#f5f5f5';
            tagsContainer.appendChild(tagElement);
        });
    } else {
        document.getElementById('tags-section').style.display = 'none';
    }

    // 8. 옵션 표시
    const optionsContainer = document.getElementById('options-container');
    if (product.specs && product.specs.options && product.specs.options.length > 0) {
        optionsContainer.innerHTML = ''; // 초기화
        product.specs.options.forEach(option => {
            const optionElement = document.createElement('button');
            optionElement.textContent = option;
            optionElement.style.padding = '10px 20px';
            optionElement.style.margin = '5px';
            optionElement.style.border = '2px solid #333';
            optionElement.style.borderRadius = '5px';
            optionElement.style.cursor = 'pointer';
            optionElement.style.backgroundColor = 'white';
            optionElement.style.fontSize = '14px';
            
            // 호버 효과
            optionElement.onmouseover = function() {
                this.style.backgroundColor = '#333';
                this.style.color = 'white';
            };
            optionElement.onmouseout = function() {
                this.style.backgroundColor = 'white';
                this.style.color = 'black';
            };
            
            optionsContainer.appendChild(optionElement);
        });
    } else {
        document.getElementById('options-section').style.display = 'none';
    }

    // 9. 상세 이미지들 표시
    const detailImagesContainer = document.getElementById('detail-images-container');
    if (product.detailImages && product.detailImages.length > 0) {
        detailImagesContainer.innerHTML = ''; // 초기화
        product.detailImages.forEach((img, index) => {
            const wrapper = document.createElement('div');
            wrapper.style.marginBottom = '20px';
            
            const imgElement = document.createElement('img');
            imgElement.src = img;
            imgElement.alt = `상세 이미지 ${index + 1}`;
            imgElement.style.maxWidth = '100%';
            imgElement.style.height = 'auto';
            imgElement.style.border = '1px solid #eee';
            
            imgElement.onerror = function() {
                console.error(`상세 이미지 ${index + 1} 로드 실패:`, img);
                wrapper.innerHTML = `<p style="color: red;">이미지 ${index + 1}을 불러올 수 없습니다.</p>`;
            };
            
            wrapper.appendChild(imgElement);
            detailImagesContainer.appendChild(wrapper);
        });
    } else {
        document.getElementById('detail-images-section').style.display = 'none';
    }

    // 10. 페이지 제목 변경
    document.title = `${product.name} | DOTELINE`;
    
    console.log('renderProductDetail 완료');
}

// 페이지 로드 시 실행
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOMContentLoaded - ProductDetail 페이지 로드');
    
    // ProductData.js가 로드되었는지 확인
    if (typeof findProductById === 'undefined') {
        console.error('ProductData.js가 로드되지 않았습니다!');
        return;
    }
    
    renderProductDetail();
});