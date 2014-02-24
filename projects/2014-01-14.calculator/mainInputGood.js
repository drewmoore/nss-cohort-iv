console.log('Welcome to your app!');

var menu = 'Would you like to add(+), subtract(-), multiply(*), divide(/), raise to a power(p), '; 
var menu2 = 'or calculate a factorial(f)? q to escape...';

var operator = prompt(menu + '\n' + menu2);

while (operator != 'q'){
	console.log('not q');

	if(operator !== 'f'){
	
		var x = prompt('Enter your first number');
		var y = prompt('Enter your second number');
		console.log(x);
		console.log(y);

		 switch(operator){
		  case '+':
		    result = console.log('+');
		    break;
		  case '-':
		    result = console.log('-');
		    break;
		  case '*':
		    result = console.log('*');
		    break;
		  case '/':
                    result = console.log('/');
                    break;
                  case '^':
                    result = console.log('^');
                    break;
	          case 'p':
	            result = console.log('p');
        	} 

	}
        else if(operator === 'f'){
		console.log('factorial');	
	}

	operator = prompt(menu + '\n' + menu2);
}
