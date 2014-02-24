console.log('welcome to your app');
	
var menu = 'Would you like to add(+), subtract (-), multiply(x), divide(/), or exponent(^)? (q to escape)';
var operator = prompt(menu);

while(operator != 'q'){
	var x = prompt('Enter your first number');
	var y = prompt('Enter your second number');
	x = parseFloat(x);
	y = parseFloat(y);

	var result;

	switch(operator){
	  case '+':
	    result = add(x, y);
	    break;
	  case '-':
	    result = sub(x, y);
	    break;
	  case 'x':
	    result = mult(x, y);
	    break;
	  case '/':
	    result = divide(x, y);
	    break;
	  case '^:
	    result = power(x, y);
	    break;
	}
	  
	console.log(result);
	operator = prompt(menu);
}

// ------------------------------------------------------------------------------------------------------//

function add(a, b){
  return a + b;
}

function sub(a, b){
  return a - b;
}

function mult(a, b){
  return a * b;
}  

function divide(a, b){
  return a / b;
}

function power(base, exp){
  var result = 1;

  for(var i = 0; i < exp; i++)
    result *= base;
  
  return result;
}  
