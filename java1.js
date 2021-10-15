function checkUsername() {
	
	var message = document.getElementById("feedback");
	
	if (this.value.length < 7) {
		message.textContent = "Please enter a username that is atleast 7 characters";
	}	else {
		message.textContent = "";
	}
}



function checkPassword() {
	var message = document.getElementById("passfeed");
	
	if (this.value.length < 8) {
		message.textContent = "Sorry Your Password Must Be Atleast 8 Characters";
	}	else {
		message.textContent = "";
	}
}

var username = document.getElementById("username");//create variable for username
var password1 = document.getElementById("password");//create variable for password

username.addEventListener('blur', checkUsername, false);
password1.addEventListener('blur', checkPassword, false);
