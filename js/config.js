// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

var firebaseConfig = {
  apiKey: 'AIzaSyCvF_NR2BChep2uV_V0O4YhxcPGMQt6h6M',
  authDomain: 'pankaj-gupta-hrms.firebaseapp.com',
  projectId: 'pankaj-gupta-hrms',
  storageBucket: 'pankaj-gupta-hrms.appspot.com',
  messagingSenderId: '675854001116',
  appId: '1:675854001116:web:64112c889e0e4f029c2519',
  measurementId: 'G-1THGTYKFT2',
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
firebase.analytics()
const db = firebase.firestore()
