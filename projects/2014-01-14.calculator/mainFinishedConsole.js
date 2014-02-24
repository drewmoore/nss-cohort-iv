console.log('Welcome to your app!');

var menu = 'Would you like to add(+), subtract(-), multiply(*), divide(/), raise to a power(p), '; 
var menu2 = 'or calculate a factorial(f)? q to escape...';

var operator = prompt(menu + '\n' + menu2);

while (operator != 'q'){
	console.log('not q');

	if(operator !== 'f'){
	
		var x = prompt('Enter your first number');
		var y = prompt('Enter your second number');
		x = parseFloat(x);
	        y = parseFloat(y);

		console.log(x);
		console.log(y);

		 switch(operator){
		  case '+':
		    console.log('+');
		    result = add(x, y);
		    console.log(result);
		    break;
		  case '-':
		    console.log('-');
                    result = sub(x, y);
                    console.log(result);
		    break;
		  case '*':
		    console.log('*');
		    result = mult(x, y);
                    console.log(result);
		    break;
		  case '/':
                    console.log('/');
                    result = divide(x, y);
                    console.log(result);
                    break;
                  case 'p':
		    console.log('p');
                    result = power(x, y);
                    console.log(result);
                    break;
        	} 

	}
        else if(operator === 'f'){
		console.log('factorial');	
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
