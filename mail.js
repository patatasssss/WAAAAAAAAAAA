const firebaseConfig = {
    apiKey: "AIzaSyAfHLAjv-SBR6RKFzhFOWJGQdNZtgwP6MI",
    authDomain: "twitter-signup.firebaseapp.com",
    databaseURL: "https://twitter-signup-default-rtdb.firebaseio.com",
    projectId: "twitter-signup",
    storageBucket: "twitter-signup.firebasestorage.app",
    messagingSenderId: "139239700726",
    appId: "1:139239700726:web:46bba4524af7a1b130d4d7"
  };

firebase.initializeApp(firebaseConfig);




var nameFormDB = firebase.database().ref('nameForm')

document.getElementById('nameForm').addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();

    var name = getElementVal('name');
    var email = getElementVal('email');
    
    console.log(name, email);
}

const getElementVal = (id) => {
    return document.getElementById(id).value;
}