/*
1. visit: console.firebase.google.com 
2. create project (skip google analytics)
3. Register app (creating config)
4. install firebase: npm install firebase
5. add config file to your project
6. DANGER: Do not publish or make firebase config public by pushing these to github
7. visit: Go to Docs > Build > Authentication > Web > Get Started
8. Export app from the firebase.config.js file: export default app
9. Login.jsx: import getAuth from firebase/auth
10. Create const auth = getAuth(app)
11. Import googleAuthProvider and create a new provider
12. use signInWithPopUp and pass auth and provider
13. Activate sign-in method (google, email, github, facebook)
14. [vite]: change 127.0.0.1 to localhost
*/