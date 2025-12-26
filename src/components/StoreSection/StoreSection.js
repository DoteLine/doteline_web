/**
 * Store Location Section - Google Maps Integration
 * 구글 지도를 사용한 매장 위치 표시
 */

// 도트라인 매장 정보
const STORE_INFO = {
  name: '도트라인',
  address: '경기도 시흥시 광석천길 18',
  lat: 37.3786,
  lng: 126.8018,
  phone: '010-9316-7003'
};

// Google Maps는 iframe으로 삽입되므로 별도 초기화 불필요
console.log('Store section loaded with Google Maps');

// 외부에서 사용할 수 있도록 export
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    STORE_INFO
  };
}