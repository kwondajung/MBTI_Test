# MBTI 테스트

axios api를 활용하여 MBTI 테스트를 할 수 있는 서비스

## 🖥️ 프로젝트 소개

로그인을 한 사용자에 한해서 MBTI 테스트를 진행할 수 있으며 본인의 결과 뿐만 아니라 다른 사용자들의 결과도 확인할 수 있도록 만든 프로젝트입니다.

## 🕰️ 개발 기간

2024.09.04 ~ 2024.09.11

## 📂 폴더 구조

📦src  
 ┣ 📂api  
 ┃ ┣ 📜auth.js  
 ┃ ┗ 📜testResults.js  
 ┣ 📂assets  
 ┃ ┗ 📜react.svg  
 ┣ 📂components  
 ┃ ┣ 📜AuthForm.jsx  
 ┃ ┣ 📜Layout.jsx  
 ┃ ┣ 📜ProtectedRoute.jsx  
 ┃ ┣ 📜TestForm.jsx  
 ┃ ┣ 📜TestResultItem.jsx  
 ┃ ┗ 📜TestResultList.jsx  
 ┣ 📂context  
 ┃ ┗ 📜MbtiContext.jsx  
 ┣ 📂data  
 ┃ ┗ 📜questions.js  
 ┣ 📂pages  
 ┃ ┣ 📜Home.jsx  
 ┃ ┣ 📜Login.jsx  
 ┃ ┣ 📜Profile.jsx  
 ┃ ┣ 📜Signup.jsx  
 ┃ ┣ 📜TestPage.jsx  
 ┃ ┗ 📜TestResultPage.jsx  
 ┣ 📂utils  
 ┃ ┗ 📜mbtiCalculator.jsx  
 ┣ 📜App.css  
 ┣ 📜App.jsx  
 ┣ 📜index.css  
 ┗ 📜main.jsx

## 🧩 주요 기능

1. 회원가입 및 로그인
2. MBTI 테스트
3. MBTI 테스트 결과 확인
