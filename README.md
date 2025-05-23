<!-- ![Image](https://github.com/user-attachments/assets/21d84399-3377-479d-a22f-bcc3f3af0083)-->
<!-- ![Image](https://github.com/user-attachments/assets/398f9b96-c2ab-4967-ac5f-819f9c52668f)-->
<!-- ![Image](https://github.com/user-attachments/assets/a467f2b0-2d2c-45fc-b56c-b3a2bd830343)-->
![Image](https://github.com/user-attachments/assets/91c27f13-dec4-40b2-8f82-425733d1caf3)


## ✨ 소개
소소한 일상을 채워주는 디자인 문구와 아이템을 소개하는 SPA 웹사이트, <b>"Ripo"</b> 입니다.

자신만의 일상과 감정을 감성적으로 기록하고 꾸밀 수 있는 공간을 제공하여, <br>
소소한 순간들을 소중하게 남길 수 있도록 합니다. <br>
또한, 일상을 기록하는 습관이 주는 즐거움과 그 의미를 널리 알리고자 기획하였습니다. <br>

480px(모바일) 해상도에 최적화된 디자인을 적용하여, <br>
언제 어디서나 편리하게 사용할 수 있도록 구현하였습니다.

## 🔗 배포 URL
https://ripo-tau.vercel.app

## 📑 프로젝트 요약

### 1. 주제

* 매일 기록하는 습관과 소소한 취향을 반영해, 자연스럽게 소비로 이어지는 감성적이고 귀여운 쇼핑 공간 제공

### 2. 목표

* 타겟층의 취향을 고려한 제품 구성
* 검색, 장바구니 기능 등 쇼핑 경험 개선을 통해 사용자 만족도 향상

### 3. 핵심 기능

* 카테고리별 상품 리스트 및 상세 정보 제공
* 사용자 맞춤 검색 기능
* 장바구니를 통한 상품 보관 및 선택 결제 기능
* 자주 묻는 질문 페이지 제공
* 회원가입 및 로그인 기능
* 마이페이지 주문 내역 관리
* 모바일 480px

### 4. 주요 기술 스택

* Front-End : React, React Router
* Back-End : Node.js, PHP, XAMPP
* Data-Base : MySQL

## 📆 기간 및 인원

  * 총 작업 기간 : 7일
    * 기초 데이터 수집 및 화면 설계 기간 : 2일
    * 개발 및 테스트 기간 : 5일
   
  * 팀원 : 2명

## 👩🏻‍🤝‍🧑🏻 팀원 소개

| 이름 | 주요 페이지 컴포넌트 | 해당 |
| :---:| :---: | :---: |
| 천지호 | Home.jsx, 검색(search 폴더), 카테고리(category 폴더), 상품 정보(product 폴더), Faq.jsx |  |
| 소연희 | Splash.jsx, 장바구니(cart 폴더), 결제(pay 폴더), 마이페이지(mypage 폴더), 로그인 및 회원가입(login 폴더) | ✔ |

## 💡 주요 기능

### 1. 회원가입 및 로그인
* 기본 정보 입력을 통한 회원가입 기능
* 로그인 후 마이페이지, 장바구니 등 개인화 기능 이용 가능

### 2. 검색
* 키워드 기반 상품 검색 기능
* 검색 결과 페이지에서 상품 리스트 확인 가능
* 관련 키워드 기반 추천 키워드 기능으로 쉽게 검색 가능

### 3. 상품 정보
* 카테고리별로 상품을 구분하여 리스트 형태로 출력
* 각 상품 클릭 시 상세페이지에서 상품 정보 확인 가능
* 서버에서 연동된 상품 데이터를 기반으로 실시간 정보 반영

### 4. 장바구니
* 원하는 상품을 장바구니에 담아두고 한 번에 결제 가능
* 선택한 상품만 결제할 수 있도록 체크박스 기능 제공
* 선택 삭제 및 개별 삭제 기능 지원
* 총 주문 금액 자동 계산

### 5. 마이페이지
* 주문 내역 확인 기능
* 사용자들이 자주 찾는 질문 정리 후 FAQ 탭 구성

## 🗂️ 폴더 구조

```
📂Ripo-Project
┣ 📂ripo                      # 리포 ( Front-End_React 프로젝트 )
┃ ┣ 📂public
┃ ┃ ┣ 📂imgs
┃ ┃ ┃ ┗ 📂_icons
┃ ┣ 📂src
┃ ┃ ┣ 📂component             # 컴포넌트 폴더
┃ ┃ ┃ ┣ 📂_common             # 공통 컴포넌트 폴더
┃ ┃ ┃ ┣ 📂00-login            # 로그인 컴포넌트 폴더
┃ ┃ ┃ ┣ 📂01-home             # 홈 컴포넌트 폴더
┃ ┃ ┃ ┣ 📂02-search           # 검색 컴포넌트 폴더
┃ ┃ ┃ ┣ 📂03-category         # 카테고리 컴포넌트 폴더               
┃ ┃ ┃ ┣ 📂04-product          # 상품 컴포넌트 폴더
┃ ┃ ┃ ┣ 📂05-cart             # 장바구니 컴포넌트 폴더
┃ ┃ ┃ ┣ 📂06-pay              # 결제 컴포넌트 폴더
┃ ┃ ┃ ┗ 📂icons
┃ ┃ ┣ 📂pages                 # 각 페이지 컴포넌트 폴더
┃ ┃ ┃ ┣ 📂00-login
┃ ┃ ┃ ┣ 📂01-home
┃ ┃ ┃ ┣ 📂02-search
┃ ┃ ┃ ┣ 📂03-category
┃ ┃ ┃ ┣ 📂04-product 
┃ ┃ ┃ ┣ 📂05-cart
┃ ┃ ┃ ┣ 📂06-pay
┃ ┃ ┃ ┣ 📂07-mypage
┃ ┃ ┃ ┗ 📜Splash.jsx          # 온보딩 페이지
┃ ┃ ┗ 📂styles                # scss
┃ ┃ ┗ 📜App.js                # 프로젝트의 전체 라우팅 및 최상위 컴포넌트
┃ ┣ ⚙️.env
┃ ┗ README.md
┣ 📂admin                     # 리포 ( Back-End_PHP 프로젝트 )
┃ ┣ 📂api                     # 데이터 가공 및 반환을 담당하는 API 파일들이 위치한 폴더
┃ ┣ 📂member                  # 회원가입, 탈퇴 등 회원 관련 데이터를 저장하고 관리하는 폴더
┃ ┣ 📂product                 # 카테고리 및 상품을 생성, 수정, 삭제하는 기능 폴더
┃ ┣ 📜auth.php
┃ ┣ 📜common.php
┃ ┣ 📜config.php
┃ ┣ 📜header.php
┃ ┣ 📜index.php
┃ ┣ 📜login.php
┃ ┣ 📜logout.php
┃ ┣ 📜table.php
┗ ┗ 📜style.css
```

## 💻 개발 환경

### 1. Frond-End

| 사용기술 | 설명 |Badge |
| :---:| :---: | :---: |
| **React** | **SPA기반 프레임워크** |![react](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=white)|
|**React Router Dom** | **페이지 라우팅 관리** |![reactrouter](https://img.shields.io/badge/ReactRouter-CA4245?style=flat-square&logo=reactrouter&logoColor=white)|
| **React Hook Form** | **폼 상태 및 데이터 관리** |![reacthookform](https://img.shields.io/badge/ReactHookForm-F24E1E?style=flat-square&logo=reacthookform&logoColor=white)|
| **Axios** | **클라이언트에서 서버로 API 요청 처리** |![axios](https://img.shields.io/badge/Axios-5A29E4?style=flat-square&logo=axios&logoColor=white)|

### 2. UI/UX 라이브러리

| 사용기술 | 설명 | Badge |
| :---:| :---: | :---: |
| **MUI** | **UI 프레임워크** |![mui](https://img.shields.io/badge/MUI-007FFF?style=flat-square&logo=mui&logoColor=white) |
| **Swiper** | **슬라이더** |![Swiper](https://img.shields.io/badge/Swiper-6332F6?style=flat-square&logo=axios&logoColor=white)|
| **react-swipeable** | **스와이프 제스처** |![npm](https://img.shields.io/badge/react--swipeable-00e6a4?style=flat-square&logo=npm&logoColor=white)|
| **motion** | **애니메이션** |![motion](https://img.shields.io/badge/motion-fff312?style=flat-square&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMjQgOSI+CiAgPHBhdGggZD0iTSA5LjA2MiAwIEwgNC4zMiA4Ljk5MiBMIDAgOC45OTIgTCAzLjcwMyAxLjk3MSBDIDQuMjc3IDAuODgyIDUuNzA5IDAgNi45MDIgMCBaIE0gMTkuNjU2IDIuMjQ4IEMgMTkuNjU2IDEuMDA2IDIwLjYyMyAwIDIxLjgxNiAwIEMgMjMuMDA5IDAgMjMuOTc2IDEuMDA2IDIzLjk3NiAyLjI0OCBDIDIzLjk3NiAzLjQ5IDIzLjAwOSA0LjQ5NiAyMS44MTYgNC40OTYgQyAyMC42MjMgNC40OTYgMTkuNjU2IDMuNDkgMTkuNjU2IDIuMjQ4IFogTSA5Ljg3MiAwIEwgMTQuMTkyIDAgTCA5LjQ1IDguOTkyIEwgNS4xMyA4Ljk5MiBaIE0gMTQuOTc0IDAgTCAxOS4yOTQgMCBMIDE1LjU5MiA3LjAyMSBDIDE1LjAxOCA4LjExIDEzLjU4NSA4Ljk5MiAxMi4zOTIgOC45OTIgTCAxMC4yMzIgOC45OTIgWiIgZmlsbD0icmdiKDAsIDAsIDApIj48L3BhdGg+Cjwvc3ZnPgo=&logoColor=white)|
| **Sass** | **스타일링**|![Sass](https://img.shields.io/badge/Sass-CC6699?style=flat-square&logo=Sass&logoColor=white)|
| **sweetalert2** | **커스텀 팝업 알림 UI** |![sweetalert2](https://img.shields.io/badge/sweetalert2-F27474?style=flat-square&logo=datefns&logoColor=white)|

### 3. Back-End

| 사용기술 | 설명 | Badge |
| :---:| :---: | :---: |
| **Node.js** | **JavaScript 런타임 환경** |![nodedotjs](https://img.shields.io/badge/Node.js-5FA04E?style=flat-square&logo=nodedotjs&logoColor=white)|
| **PHP** | **회원 및 상품 관리, 관리자 페이지 구현 등 서버 측 로직 처리** |![PHP](https://img.shields.io/badge/PHP-8892BE?style=flat-square&logo=npm&logoColor=white)|
| **MySQL** | **데이터베이스 관리**  |![MySQL](https://img.shields.io/badge/MySQL-00758F?style=flat-square&logo=JSON&logoColor=white)|
| **XAMPP** | **Apache, MySQL, PHP를 통합 제공하는 로컬 서버 개발 도구** |![XAMPP](https://img.shields.io/badge/XAMPP-FB7A24?style=flat-square&logo=nodemon&logoColor=white)|
| **Axios** | **서버에서 API 요청 처리** |![axios](https://img.shields.io/badge/Axios-5A29E4?style=flat-square&logo=axios&logoColor=white)|

### 4. 개발 도구

|사용기술 | 설명 | Badge | 
| :---:| :---: | :---: |
| **Visual Studio Code (VS Code)** | **코드 편집기( 에디터 )** |![VSCode](https://img.shields.io/badge/VSCode-007ACC?style=flat-square&logo=data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTI0LjAwMyAyTDEyIDEzLjMwM0w0Ljg0IDhMMiAxMEw4Ljc3MiAxNkwyIDIyTDQuODQgMjRMMTIgMTguNzAyTDI0LjAwMyAzMEwzMCAyNy4wODdWNC45MTNMMjQuMDAzIDJaTTI0IDkuNDM0VjIyLjU2NkwxNS4yODkgMTZMMjQgOS40MzRaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K&logoColor=white) |
|**GitHub** | **버전 관리** |![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=GitHub&logoColor=white)| 
| **Vercel** | **서버리스 플랫폼** |![vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white)|
| **Figma** | **디자인 & UI/UX**|![Figma](https://img.shields.io/badge/Figma-F24E1E?style=flat-square&logo=Figma&logoColor=white) |


# 소연희의 개발 상세

## 📑 요약
* 담당
  * 담당 내용 작성
* 담당 컴포넌트 상세
  * Home.jsx - 내용 작성
 
## 🧩 공통 컴포넌트 제작
* 📜Menu.jsx - 모든 페이지 하단에 고정된 메뉴바 컴포넌트

  
## 💥 트러블 슈팅

### 📌 Home.jsx

 1. 문제점
  
    *어떤 상황
       
    ⇒ **해결방법**: 이슈 처리<br>
