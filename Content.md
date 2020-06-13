330. Adding a Spinner

auth reducer에 있는 loading에 따라서 Spinner를 나타내고
Login 또는 SignIn 시 Error가 존재한다면 Firebase로부터 전송받는 error를 auth reducer의 error state에 저장하고
유저에게 error Message를 나타내도록 하자
