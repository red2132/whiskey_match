# Whiskey Match    
위스키 안주 별점 평가 사이트.   
[사이트 링크](whiskey-match.vercel.app)

## 사이트 목적
그 동안 위스키를 마실 때 어떤 안주가 어울리는지 직관적인 정보가 부족하다고 느꼈다. 별점이라는 시각적 요소로 간단하게 표현해, 사용자도 직관적으로 평가할 수 있고 다른 사람들은 어떻게 생각하는지 평균 별점으로 간단하게 볼 수 있게 만드는 사이트다.

## 사용 기술 스택
UIUX: figma  
사용 언어: typescript  
db: supabase  
framework: next.js 14, tailwind, react.js 18  
기타 tool: notion  

## 개발 과정
### figma UIUX 디자인
<div style="text-align: center;">
<img src="https://github.com/user-attachments/assets/7865c0e7-8c04-45ab-b26a-35539da19255" alt="주류 페어링 사이트" width="500" height="400">
</div>  

[피그마 링크](https://www.figma.com/design/FlpKf4rxa1umPBbXXU8Wz5/%EC%A3%BC%EB%A5%98-%ED%8E%98%EC%96%B4%EB%A7%81-%EC%82%AC%EC%9D%B4%ED%8A%B8?m=auto&t=Rl0jrkCIbLUVYsjL-6)  
figma를 이용해 UIUX를 개발했다. 모바일에서도 정상적으로 보이기 위해 작은 화면용도 따로 디자인했다.


### API 명세서 작성
[노션 링크](https://seen-tithonia-e2a.notion.site/Api-13387261efe3804cbc9ff7b83abe8d1d)  
사이트에 필요한 기능들을 API 명세서 형태로 정리했다.

### UIUX 퍼블리싱
tailwind를 기반으로 피그마로 디자인한 UIUX를 tailwind를 이용해 퍼블리싱했다. 모바일에 따른 사이즈 변화에도 유연하게 사이즈를 조절할 수 있도록 반응형으로 제작했다.

### DB 연결(서버 액션 이용) 
우선 DB는 supabase를 선택했다. supabse는 sql을 지원하는 PostGreSql을 지원해 기존 sql 기술 재사용이 용이하고, 이를 이용해 트리거나 저장 프로시저를 구현하기 쉬워 선택했다. supabase 라이브러리가 잘 구축되어 있어, supabase ssr 라이브러리를 이용해 손쉽게 DB를 연결할 수 있었다.
```jsx
/** 추천 위스키 출력(랜덤 8개) */
export async function getRecoWhiskies(): Promise<WhiskeyRow[]> {
  const supabase = await createServerSupabaseClient();
  const { data, error } = await supabase.from("whiskey").select("*").limit(8); // 최대 8개
  if (error) {
    console.log(error);
    throw new Error("Failed to fetch whiskies");
  }
  return data;
}
```
  
또한 회원가입할 경우 자동으로 테이블에 회원정보가 추가되도록 supabase에 트리거를 만들어 놓았다.
![image](https://github.com/user-attachments/assets/d6613d11-3f79-40a1-a1c2-1f969746afb1)  
### 기능 개발
기능은 크게 검색&위스키 리스트 및 상세정보 출력 / 리뷰 관련 curd / 로그인& 회원가입으로 이루어져 있다. 

#### react-query 이용(ex. 검색)
검색에서는 검색어(query)에 따라 검색 함수가 작동하게 했고, 로딩 상태일 경우, 그에 맞는 ui를 구현했다.
```jsx
function SearchWhiskies({ query }: { query: string }): JSX.Element {
  const { data: searchWhiskies = [], isLoading } = useQuery({
    queryKey: ["searchWhiskes", query],
    queryFn: () => getWhiskeyByName(query),
  });

  if (isLoading) {
    return <h1 className="main-text m-10">로딩중...</h1>;
  }

  return (
    <div>
      <h1 className="main-text m-10">
        " {query} " 검색 결과 {searchWhiskies?.length}건
      </h1>
      <WhiskeyItemList whiskies={searchWhiskies} />
    </div>
  );
}
```
#### zustand를 이용한 상태관리
zustand를 이용해 자주 불리는 상태 정보는 따로 관리했다. (로그인 세션 정보의 경우 supabase 라이브러리에 따로 기능이 있어 그쪽을 이용),
isEditing이라는 상태를 이용해, false일 경우, 별점 정보 창을, true일 경우 별점 수정 or 등록 창으로 이동하도록 작업했다. 따로 toggle이라는 함수를 만들어 각 페이지에서 손쉽게 상태값을 변경하도록 작업했다.

```jsx
// Zustand 스토어 생성
const useIsEditingStore = create<IsEditingStore>((set) => ({
  isEditing: false, // 초기값
  setIsEditing: (value) => set({ isEditing: value }), // 상태를 설정
  toggle: () => set((state) => ({ isEditing: !state.isEditing })), // 상태를 반전
}));

```
#### 기타 next.js 기능 활용
인터셉트 라우팅을 이용해, 위스키를 클릭하면 상세정보가 모달로 뜨도록 구현했다.(링크로 직접 접근 시, 아예 새창으로 이동)

## 추후 개선 사항 및 아쉬운 점
추후 입력값에 대한 유효성 검사를 추가하고, ui를 조금씩 손볼 예정이다. 아쉬웠던 점은 ssr을 이번에 많이 써보고 싶었는데, react-query나 zustand를 쓰려면 아직 csr 기반으로 작업해야 해서 ssr을 많이 적용하지 못한 부분이다. 그리고 데이터를 많이 넣어 무한 스크롤도 구현해보고 싶었는데, 데이터를 많이 구하지 못해서 아쉬웠다. 이 부분은 기회가 된다면 크롤링에 대해 학습해 추후 프로젝트에 적용해보고 싶다.  


