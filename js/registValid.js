var data = {
		names:{
	        login: "loginR",
			email: "emailR",
			password: "passwordR",
			confirmPassword: "confirmPassword",
			loginError: "loginErrorTextRegistration"
		},
		elements: {}
};

console.log(data);
for(var key in data.names){
	data.elements[key] = document.getElementById(data.names[key]);
}
console.log(data.elements.login);

data.elements.login.onchange = function(){
	if(data.elements.login.value.length < 3){
		data.elements.loginError.classList.remove("hidden");
		data.elements.loginError.innerHTML = "This name is too short";
	}
	else{
			data.elements.loginError.className += " hidden";
			data.elements.loginError.innerHTML = "";
	}
}