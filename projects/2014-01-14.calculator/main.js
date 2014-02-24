console.log('Welcome to your app!');

var menu = 'Would you like to add(+), subtract(-), multiply(*), divide(/), raise to a power(p), '; 
var menu2 = 'or calculate a factorial(f)? q to escape...';

var operator = prompt(menu + '\n' + menu2);

while (operator != 'q'){
	if(operator !== 'f'){
		var x = prompt('Enter your first number');
		var y = prompt('Enter your second number');
		x = parseFloat(x);
	        y = parseFloat(y);
		
		switch(operator){
		  case '+':
		    result = add(x, y);
		    break;
		  case '-':
                    result = sub(x, y);
		    break;
		  case '*':
		    result = mult(x, y);
		    break;
		  case '/':
                    result = divide(x, y);
                    break;
                  case 'p':
                    result = power(x, y);
                    break;
        	} 

	}
        else if(operator === 'f'){
		var facto = prompt('Enter your number to factorialize, yo!');			
		result = factorialize(facto);
	}
	
	console.log('Your grand result is: ' + result + '.');
	operator = prompt(menu + '\n' + menu2);
}

//----------------Function Declarations ------------------------------//

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

function factorialize(factoFunc){
  var result = 1;
  
  while(factoFunc >= 1){
    result = result * factoFunc;  
    factoFunc = factoFunc - 1;
  }

  return result;

}
