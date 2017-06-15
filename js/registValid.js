var data = {
		names:{ //ids für Validation
	        login: "loginR",
			email: "emailR",
			password: "passwordR",
			confirmPassword: "confirmPassword",
			loginError: "loginErrorTextRegistration",
			passwordError: "passwordRErrorTextRegistration",
			confirmPasswordError: "confirmPasswordErrorTextRegistration",
			emailError: "emailRErrorTextRegistration"
		},
		elements: {} //hier werden Objekte aus HTML hinzufügt
};
//hier füge ich Objekte hinzu
for(var key in data.names){
	data.elements[key] = document.getElementById(data.names[key]);
}

/**
 * also Validation
 */
function Validation(){ 
	this.events = ["onchange", "onkeyup", "onkeydown"];
	/**
	 * Validation nach Laenge 
	 */
	this.minValue = function(element, minLength, errorElement, errorMessage){
		for(var i = 0; i < this.events.length; i++){
			element[this.events[i]] = function(){
				if(element.value.length < minLength){
					errorMessage.classList.remove("hidden");
					errorMessage.innerHTML = "This " + errorElement + " is too short";
					element.className += " error";
				}
				else{
					errorMessage.className += " hidden";
					errorMessage.innerHTML = "";
					element.classList.remove("error");
				}
			}
		}
	}
	/**
	 * Validation nach Email 
	*/
	this.emailValid = function(element, errorMessage){
		for(var i = 0; i < this.events.length; i++){
			element[this.events[i]] = function(){
				if(!validateEmail(element.value)){
					errorMessage.classList.remove("hidden");
					errorMessage.innerHTML = "This email is invalid";
					element.className += " error";
				}
				else{
					errorMessage.className += " hidden";
					errorMessage.innerHTML = "";
					element.classList.remove("error");
				}
			}
		}
	}
	function validateEmail(email){	//Erhlich gesagt habe ich diese Funktion einfach auf der StackOverflow kopiert.
		var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(email);
	}
}

var validObj = new Validation();
validObj.minValue(data.elements.login, 3, "login", data.elements.loginError);
validObj.minValue(data.elements.password, 6, "password", data.elements.passwordError);
validObj.minValue(data.elements.confirmPassword, 6, "password", data.elements.confirmPasswordError);
validObj.emailValid(data.elements.email, data.elements.emailError);