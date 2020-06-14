336. **Redirecting the User to the Checkout Page**

Ingredients의 변경을 Logging 하기 위해서 burgerBuilder.state.buliding state를 추가하자

로그인을 하지 않고 Ingredients를 추가하면
Sing up to Order버튼이 나타난다
이때 '/auth'로 이동해 로그인을 한다면 곧바로 Checkout 페이지로 이동하게 하자

auth reducer :          authRedirectPath
burgerBuilder reducer : building
