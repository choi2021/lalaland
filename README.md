# 라라랜드 팬페이지

# 업데이트 할 사항

1. 비디오 페이지네이션 구현
2. 수동적으로 넣은 사진외의 다양한 사진 추가할 수 있게 수정해보기

### 개요

작년 5월에 노마드코더 JS챌린지에 참여했던 제 프로젝트를 업그레이드하고 싶어서 다시 한번 만들어 보았습니다. <br>
아래사진은 작년에 참여하고 9월 5일 기준 노마드코더 챌린지 페이지에 남아있는 제 프로젝트입니다.

![작년 챌린지 사진](https://user-images.githubusercontent.com/80830981/171028998-09edc9f8-d34d-487f-a21c-d4d02517845e.png)

노마드코더와 드림코딩를 통해 배운 리액트 내용을 바탕으로 수업에서 배웠던 부분들과 제가 응용하고 싶었던 부분들을 많이 반영해서 만들었습니다.<br>


## 기술 스택
<p align="left">
<img src="https://img.shields.io/badge/Firebase-FFCA28?style=flat-square&logo=firebase&logoColor=white"/>
<img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=white">
<img src="https://img.shields.io/badge/React-router-CA4245?style=flat-square&logo=reactrouter&logoColor=red">
</p>
  
## 프로젝트 설명
 
###  1. Login 페이지

 로그인은 firebase를 이용해서 구글,페이스북,깃헙아이디를 이용해서 접속가능하게 연결했습니다.<br> 
 자체적인 form을 통해서 아이디/비밀번호를 관리하는 부분을 추가할 예정입니다.<br> 

 ![로그인 페이지](https://user-images.githubusercontent.com/80830981/171029183-e53691d2-bc73-4897-9be6-8db581a94022.png)

### 2. Home 페이지

#### 기능: 

1. To-Do list
작년에 만들 때에는 To-Do-list는 사용자의 local storage에 저장되게 설정했지만 이번에는 firebase기능을 적극적으로 <br>
사용하고 싶어서 firebase의 real-time database와 연결해 로그인한 사용자의 to-do를 불러오고 업데이트/삭제 기능까지 추가했습니다.

2. 위치와 날씨
날씨는 전 버전과 동일하게 openWeather API를 이용했습니다. 제가 그당시에는 문서를 읽는게 더 어려웠어서 잘 몰랐지만 자체적인 아이콘 추가 API가 제공되는 것을 이번에 알게되어 추가했습니다.

3. 시간/메뉴바, 라라랜드 관련 링크들, 음악플레이어 
전 버전과 동일한 방법과 애니메이션으로 구성했습니다.

![메인페이지](https://user-images.githubusercontent.com/80830981/171029584-f271ddb0-3fda-4b3d-b822-c8d8c8add7e1.png)

### 3. Videos 페이지

전 버전에 너무너무 넣고 싶었던 동영상 기능을 넣었습니다. 유튜브에 올라와 있는 다양한 라라랜드 영상중 가장 인기 있는 12개를 먼저 보여주고 <br>
위의 버튼으로 세부적인 세가지 테마:OST making, famous scene으로 관련 영상을 불러올 수 있게 했습니다.<br>
영상 클릭시 세부 영상으로 넘어가 유튜브 영상을 볼 수 있습니다.

![비디오 페이지](https://user-images.githubusercontent.com/80830981/171206023-5024c930-03fb-4dab-af3e-b46cd62557e0.png)


### 4. Detail 페이지

비디오 페이지에서 클릭한 영상을 react-router를 이용해 받은 유튜브 비디오코드를 이용해 불러와 보여줍니다.

![비디오 디테일페이지](https://user-images.githubusercontent.com/80830981/171207319-9eca2601-be4a-481f-bd8c-6b119915adfe.png)


#### 5. Photo 페이지

전버전의 경우 자바스크립트만으로 슬라이더를 만들어보고 싶어 슬라이더로 구성했지만 이번에는 자연스럽게 사진들이 지나가는 애니메이션으로만 구성했습니다. <br>

![스크린샷(21)](https://user-images.githubusercontent.com/80830981/171208152-37358d29-13ec-4110-b2b1-cb4e0c114c8e.png)

### 만들고 배운점

1. React

자바스크립트로만 하다가 React를 이용해서 다시 만들어보면서 그때는 많은 코드가 필요했던 부분들이 react로 해결되는 것을 많이 느꼈습니다. 특히 계속 사용되는 여러 component들을 구분해놓아서 제가 구성을 바꾸어야할 때 많이 도움이 되었고, 특히 다양한 리액트와 관련된 기술, 라이브러리들의 편리성을 많이 느꼈습니다

2. CSS 작업

Styled Component와 framer motion을 react-master class를 들으면서 새롭게 배웠지만 이번에는 CSS module과 keyframe으로 작업을 진행했습니다. css module로는 state에 따라 다른 style을 줘야하는 부분과 계속해서 class를 외워서 정해줘야 하는 부분이 많이 힘들었고 styled component의 편리성을 더 느낄 수 있었습니다. 반응형 작업은 리액트 라이브러리중 react-reponsive라는 패키지를 사용해서 했는데 사용자의 화면 사이즈에 따라 주는 값 덕분에 전 버전보다 수월하게 작업할 수 있었습니다.

3. 아쉬운 점

* 배포를 한 후에 새로고침을 하게되면 404에러가 뜨는 부분에서 client-side rendering의 약점을 알게되었습니다. 서버에 대해서 너무 모르고 react-router를 사용하다보니 아직 해결하지 못한 부분이라 서버를 공부할 필요성을 느꼈습니다. 서버와 SSR을 위한 NEXT JS에 대해 관심이 생겼습니다.
  
* 여전히 답답한 css layout부분이었습니다. flex에 대해서는 잘 사용할 수 있었지만 grid에 대해서는 거부감을 가지고 있었는데 공부하면 할수록 필요성을 느끼게 되었습니다. 이후 css layout강의로 해결해 나가려 합니다.
