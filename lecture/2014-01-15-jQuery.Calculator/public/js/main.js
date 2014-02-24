   $(document).ready(initialize);
   
   function initialize(){
     $('#calc').click(calculate);
     $('#clear').click(clear);
     $('#sum').click(findSum);
     $('#product').click(findProduct);
   }
   
   function clear(){
    $('#num1').val('');
    $('#num2').val('');
    $('#op').val('');
    $('#result').text('');
  }
  
  function calculate(){
    var num1 = $('#num1').val();
   num1 = parseFloat(num1);  
  
    var num2 = $('#num2').val();
    num2 = parseFloat(num2);
  
    var op = $('#op').val();
  
    var result = compute(num1, num2, op);
  
    $('#result').text(result);
  
  }
  
  function compute(x, y, op){
    var result = 0;
    switch(op){
      case '+':
        result = x + y;
        break;
      case '-':
        result = x - y; 
        break;
      case '*':
        result = x * y;
        break;
      case '/':
        result = x / y; 
        break;
      default:
        result = "Your operator sucks. Give me something I can work with..."
        break;
    }
    return result;
  }
   
    function findSum(){
      var result = 0;
      var inputs = $('.inputBox');
      for(i = 0; i < inputs.length; i++){
        inputs[i] = parseFloat(inputs[i].value);
        result += inputs[i];
      } 
      $('#result2').text(result);
    }

    function findProduct(){
      var result = 1;
      var inputs = $('.inputBox');
      for(i = 0; i < inputs.length; i++){
        inputs[i] = parseFloat(inputs[i].value);
        result *= inputs[i];
      }
      $('#result2').text(result);
    }
  
  

 /*Or you can solve this with the jQuery.each() method:
  *
  * function findSum(){
  *   var result = 0;
  *   $('.inputBox').each(function(index, element){
  *     result += parseFloat(element.value);
  *   });
  *   $('#result2').text(result);
  * }
  *
  *
  */ 
