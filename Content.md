337~338. **Persistent Auth State with localStorage**

localStorage Obj를 사용해서 새로고침해도 데이터가 남아있게 하자

actions/auth.js

authCheckState() action Creator를 통해서 localStorage에 존재하는 데이터를 가지고온다
