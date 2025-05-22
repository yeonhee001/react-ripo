# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

| 이름 | 주요 페이지 컴포넌트 | 해당 |
| :---:| :---: | :---: |
| 천지호 | Home.jsx, 검색(search 폴더), 카테고리(category 폴더), 상품 리스트 및 정보(product 폴더), Faq.jsx |  |
| 소연희 | Splash.jsx, 장바구니(cart 폴더), 결제(pay 폴더), 마이페이지(mypage 폴더), 로그인 및 회원가입(login 폴더) | ✔ |

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

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
┃ ┃ ┃ ┗ 📜Splash.jsx          # 온보딩 페이지
┃ ┃ ┗ 📂styles                # scss
┃ ┗ 📜App.js                  # 프로젝트의 전체 라우팅 및 최상위 컴포넌트
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
┃ ┣ 📜style.css
┗ ┗ ⚙️.env
```

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

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

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

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



       
