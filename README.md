# the-world

React-router 연습용 전세계 도시 검색 웹 사이트

# 주요 라이브러리 및 특징

- `vite`
- `react`
- `react router`를 이용한 네비게이션 바 구현, 동적 라우팅, 중첩 라우팅
- `context API` 래퍼 컴포넌트로 원격 상태 관리 로직 분리
- `React.lazy()`, `<Suspense>`로 코드 스플리팅, 게으른 로딩으로 번들 축소
- `leaflet`을 사용한 지오코딩, 커스텀 훅 + GEOLocation API을 사용하여 지도 정보 로드 기능 모듈화
- `json-server` 간이 API 서버 사용

+ 지도 클릭시 해당 위치의 도시 정보 가져와 내용 기록 후 저장 가능. 저장된 도시는 해당 위치에 팝업마커 표시되고 도시 리스트에 추가됨.
+ 도시 탭을 클릭하면 저장된 도시 리스트 출력. 도시 리스트에서 특정 도시 클릭하면 지도 상에서 해당 도시로 이동함
+ 저장된 도시 리스트에서 추가 삭제 가능

# 프로젝트 간략 기록

[React/React-router로 SPA 빌드하기1.md](https://github.com/Iam-Sunghyun/TIL/blob/main/React/React-router%EB%A1%9C%20SPA%20%EB%B9%8C%EB%93%9C%ED%95%98%EA%B8%B01.md)

[React/React-router로 SPA 빌드하기2.md](https://github.com/Iam-Sunghyun/TIL/blob/main/React/React-router%EB%A1%9C%20SPA%20%EB%B9%8C%EB%93%9C%ED%95%98%EA%B8%B02.md)

[React-leaflet으로 지도 만들기.md](https://github.com/Iam-Sunghyun/TIL/blob/main/React/React-leaflet%EC%9C%BC%EB%A1%9C%20%EC%A7%80%EB%8F%84%20%EB%A7%8C%EB%93%A4%EA%B8%B0.md)

# Reference

**[React]** https://react.dev/

**[LeafLet]** https://leafletjs.com/

**[MDN Geolocation API]** https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API


<!-- # 이미지 출처

https://www.flaticon.com/kr/free-icon/earth-globe_1719481?term=%EC%A7%80%EA%B5%AC&page=2&position=75&origin=search&related_id=1719481 -->

<!-- # React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh -->
