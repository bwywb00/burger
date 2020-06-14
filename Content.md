344~350. **Improving Burger Builder**
345. Fixing the Redirect to the Frontpage

token이 존재하지 않을 때 Ingredient를 추가하고 Login을 하면 '/checkout'으로 Redirect해야 하는데
App.js에서 token이 존재할 때 Auth Component에 대한 Route가 존재하지 않기 때문에 그냥 '/'로 보내버린다
token이 존재할 때 Auth Component에 대한 Route를 추가하자

SideDrawer에서 Link를 클릭해도 Drawer가 사라지지 않는 현상을 해결하자

