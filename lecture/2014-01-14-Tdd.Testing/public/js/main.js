function add (x, y){
  return x + y;
}

function sum (x){
  var result = 0;
  for(var i = 0; i < x.length; i++){
    result += x[i];
  }
  return result;
}

function countEvens(numbers){
  var counter = 0;

  for(var i = 0; i < numbers.length; i++){
    if(numbers[i] % 2 === 0){
      counter++;
    }
  }
  return counter;
}

function makeEvenStringsUppercase(words){
  for(var i = 0; i < words.length; i++){
    if(words[i].length % 2 === 0){
      words[i] = words[i].toUpperCase();
    }
  }
  return words;
}

function sumLengthOfStrings(sentence){
  var strings = sentence.split(' ');
  var sum = 0;
  for(i = 0; i < strings.length; i++){
    sum += strings[i].length;
  }  
  return sum;
}

function makeCatWithName(catName){
  return {name:catName};

// the above example is a boiled-down way to return to desired result. The cat's name is returned, but the object does not remain in me// mory

}

