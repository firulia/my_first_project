
function print(a, b, callback){
	setTimeout(function() { 
		var result = a + b;
		callback(result);
	}, 3000);
}
/*print(0.1, 0.2, function(x){
	console.log(x);
});*/

function printBoom(s, callback){
		callback(s);
}

for (var i = 10; i >= 0; i--) {
	//printBoom(i, function(data){
	//	setTimeout(function(){
	//		console.log(data);
	//	}, 1000);
	//});
	if(i == 0){
//		alert("Boom");
	}
	else
//		alert(i);
}
