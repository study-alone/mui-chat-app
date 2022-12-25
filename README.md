# MUI, Chat App

> MUI, React, Typescript, framer-motion(not yet) 등을 통해 UI를 만들어 본다.
>
> 💡 [CodingMonk](https://www.youtube.com/@shreyansh_shah) 유튜브를 보고 만들었음을 알려드립니다.

## 유튜브 강의를 보기전 필요한 사전지식

**Base**: `MUI`, `React` 만을 활용하여 코딩을 진행  
**Bundler/Tool**: `CRA(Create React App with Webpack)`  
**Store Management**: redux-toolkit

**ETC**(아래 내용은 하면서 익혀도 무방)

-   **Animate**: framer-motion(part.8 까지 진행된 현시점, 2022-12-25 까지도 사용 된적은 없음)
-   **Icon**: phosphor-react
-   **emoji**: @emoji-mart/react, @emoji-mart/data

### 유튜브 내용에 대한 나의 잡생각

> 1. MUI에서는 layout을 잡을 때 쓰는 컴포넌트들이 따로 존재한다. 물론 강제는 아니지만 사용하면 굉장히 편리한 컴포넌트 들이 많다. 그중 Grid, Stack, Box(마치 html의 div 태그 같은 놈) 를 정말 많이 사용한다. 특히 Stack 같은 경우 거의 남발 수준이다. 그러다 보니 결과물인 HTML에서도 태그양이 상당하다. 꼭 그럴 필요가 있나 싶다. 컴팩트하게 생각할 순 없는 건가?
>
> 2. MUI 의 Theme를 미리 작성 해둔 코드를 바탕으로 UI를 만들기 때문에 MUI의 Theme을 어떻게 적용하고 오버라이딩 하는지를 알려주지 않는다. 이걸 알려주면 MUI의 디자인시스템 철학을 이해하는 더욱더 도움이 되자 않을까 싶다. 하지만 유튜브에선 알려주지 않는다.
>
> 3. API 통신, Data 호출 등이 빠져있다. 때문에 json도 아닌 object, array로 만든 dummy로 data를 호출하고 사용한다. 그리고 `@faker-js/faker`를 사용하고 있는데 메서드 체이닝 방식으로 종류와 타입등을 설정하여 마지막에 실행(함수니까)을 한다. 이게 문제가 있음(react는 함수형이라 rerender가 빈번한데 데이터를 함수로 쓰니 메번 다른 리소스가 나온다)에도 이걸 고치지 않는다.
>    내가 영어가 많이 짧아 알아 듣진 못했지만 아마도 그냥 넘어간게 아닌가 싶다.

## 유튜브와 다르게 내가 적용해본 것들

-   redux-toolkit 에서 `recoil`, api call은 react-query를 생각 중(아직 통신 하는 부분이 유튜브에서는 안나옴)
-   CRA, Webpack 에서 `vite(template: react-ts)`
-   `Typescript` 적용

### 적용하면서 경험한 어려움 점들

1. MUI는 `Theme` 시스템을 가지고 있다. 그리고 그에 맞는 types를 아주 잘 제공하지만 프로젝트에 맞게 커스텀 된 Theme는 MUI에서도 알 수 없으므로 개발자가 직접 확장 또는 추가 해야 한다. 비슷한 이름의 `interface`가 많아 했갈리기도 하고 지금 이게 맞나 싶은 것들이 있다.(일일이 확인해보지 못했다)

2. 아직 recoil에 대한 적응이 끝난게 아닌가 보다, 작업하다가 하나 헤멘적이 있는데 그것은 atom 작성 후 실수로 key에 name으로 쓸 문자열을 지정해 주지 않아 state 변경이 일어나지 않는 현상이 발생했다. key는 단순히 key가 아니었다.(또 배운다...)

3. vite는 ESModule 방식을 적용해 라이브서버를 로컬서버로 띄운다. React의 lazy 함수를 통한 코드스플리팅 된 컴포넌트를 띄울 때는 반드시 `<Suspense />`로 감싸주어야 한다. webpack이라면 다시 번들링하는 과정을 거치겠지만 vite는 그과정이 없다. 그래서 새로 생성된 컴포넌트가 코드스플리팅 된 것이라면 로컬서버를 다시 실행 하면 된다.

## TODO

[ ] Dialog(모달)을 어떻게 하면 체계적이고 컴팩트하게 관리할수 있을까?(portal, register, types...)
