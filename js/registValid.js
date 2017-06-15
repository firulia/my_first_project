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

function Validation(){
	this.events = ["onchange", "onkeyup", "onkeydown"];
	this.minValue = function(element, minLength, errorElement){
		for(var i = 0; i < this.events.length; i++){
			element[this.events[i]] = function(){
				if(element.value.length < 3){
					errorElement.classList.remove("hidden");
					errorElement.innerHTML = "This name is too short";
				}
				else{
					errorElement.className += " hidden";
					errorElement.innerHTML = "";
				}
			}
		}
	}
}

var validObj = new Validation();
validObj.minValue(data.elements.login, 3, data.elements.loginError);
	