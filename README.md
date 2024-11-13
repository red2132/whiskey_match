# Whiskey Match  
위스키 안주 별점 평가 사이트  

## 사이트 목적
그 동안 위스키를 마실 때 어떤 안주가 어울리는지 직관적인 정보가 부족하다고 느꼈다. 별점이라는 시각적 요소로 간단하게 표현해, 사용자도 직관적으로 평가할 수 있고 다른 사람들은 어떻게 생각하는지 평균 별점으로 간단하게 볼 수 있게 만드는 사이트다.

## 사용 기술 스택
UIUX: 피그마  
사용 언어: typescript  
framework: next.js 14, tailwind, react.js 18  
기타 소통: notion  

## 개발 과정
### 피그마 UIUX 디자인
<div style="text-align: center;">
<img src="https://github.com/user-attachments/assets/7865c0e7-8c04-45ab-b26a-35539da19255" alt="주류 페어링 사이트" width="500" height="400">
</div>  

[피그마 링크](https://www.figma.com/design/FlpKf4rxa1umPBbXXU8Wz5/%EC%A3%BC%EB%A5%98-%ED%8E%98%EC%96%B4%EB%A7%81-%EC%82%AC%EC%9D%B4%ED%8A%B8?m=auto&t=Rl0jrkCIbLUVYsjL-6)  
피그마를 이용해 UIUX를 개발했다. 모바일에서도 정상적으로 보이기 위해 작은 화면용도 따로 디자인했다.


### 백엔드 개발을 위한 API 명세서 작성
[노션 링크](https://seen-tithonia-e2a.notion.site/Api-13387261efe3804cbc9ff7b83abe8d1d)  
백엔드 개발자와 협업하여 노션을 이용해 API 명세 작업을 진행했다.

### UIUX 퍼블리싱
tailwind를 기반으로 피그마로 디자인한 UIUX를 퍼블리싱해, 이를 vercel로 배포했다.

### api 연결(현재 미작업)
백엔드 api가 개발 완료되면 해당 api를 연결해 본격적인 기능이 작업하는 사이트를 제작할 예정이다.
