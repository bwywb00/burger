333. Updating the UI Depending on Auth State

Firebase로부터 전달받은 token값을 활용해서
Nav bar의 Navigation Item을 바꾸자

**NavigationItem이 모여있는 NavigationItems는 functional component이므로
Layout component에서 auth reducer의 token state에 접근해서 내려주도록 하자
