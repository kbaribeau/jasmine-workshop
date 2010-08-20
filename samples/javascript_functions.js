
//normal function
function normal_function() {
	alert('foo!');
}

//alternate syntax
function_with_alternate_syntax = function () {
	alert('foo!');
}

//a function that takes another function as a parameter
callFiveTimes = function(target) {
	for (var i = 0; i < 5; i++) {
		target();
	}
}
