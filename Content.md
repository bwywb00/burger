331. Logging Users Out

Firebase Auth API를 사용해서 로그인에 성공하면 expireIn이라는 property를 전달받는데
이 값을 저장해서 1시간 뒤에 자동적으로 Logout이 되는 checkAuthTimeout() action creator를 만들자
