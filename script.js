var config = {
    apiKey: "AIzaSyB1pq4s7SZfoaojbXikiSBGaJxuomcBRKU",
    authDomain: "loginpanel-4719d.firebaseapp.com",
    databaseURL: "https://loginpanel-4719d.firebaseio.com",
    projectId: "loginpanel-4719d",
    storageBucket: "loginpanel-4719d.appspot.com",
    messagingSenderId: "425738109213",
    appId: "1:425738109213:web:d60aa565c338526d7161f4",
    measurementId: "G-WTR5Y8LE9N"
  };
  // Initialize Firebase
  firebase.initializeApp(config);

// Get elements
const txtemail = document.getElementById("email");
const txtpass = document.getElementById("pass");
const login = document.getElementById("login");
const signup = document.getElementById("signup")
const logout = document.getElementById("logout")

function sahil() {
	const email = txtemail.value;
	const pass = txtpass.value;
	const auth = firebase.auth(); 
	auth.signInWithEmailAndPassword(email,pass)


	firebase.auth().onAuthStateChanged(firebaseUser => {
		if (firebaseUser) {
			document.getElementById('hello').style.visibility = "visible";
	logout.style.visibility = "visible";

	txtemail.style.visibility = "hidden";
	txtpass.style.visibility = "hidden";
	login.style.visibility = "hidden";
	signup.style.visibility = "hidden";
	document.getElementById("success").style.visibility = "hidden";
	document.getElementById("credit").style.visibility = "visible"
	document.getElementById("note").style.visibility = "hidden";
		}
		else {
			console.log("Wrong credentials or Sign up first.")
		}
	})
	
}


function kalkal(){
	firebase.auth().signOut();
	document.getElementById('hello').style.visibility = "hidden";
	logout.style.visibility = "hidden";

	txtemail.style.visibility = "visible";
	txtpass.style.visibility = "visible";
	login.style.visibility = "visible";
	signup.style.visibility = "visible";
	document.getElementById("note").style.visibility = "visible";
	document.getElementById("success").style.visibility = "hidden";
	document.getElementById("credit").style.visibility = "hidden";
}

function kapil() {
	const email = txtemail.value;
	const pass = txtpass.value;
	const auth = firebase.auth(); 
	auth.createUserWithEmailAndPassword(email,pass)

	document.getElementById("success").style.visibility = "visible";
	document.getElementById("credit").style.visibility = "hidden";
	document.getElementById("note").style.visibility = "hidden";
}