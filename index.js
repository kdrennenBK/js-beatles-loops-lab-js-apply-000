// add solution here
function theBeatlesPlay(musicians, instruments) {
  var firsts = [];
  var counter = 0;
   for (var i = 0; i < musicians.length; i++) {
     for (var j = 0; j < instruments.length; j++) {
       if (i === j) {
         var string = musicians[i] + " plays " + instruments[j];
        firsts.push(string);
       }
     }
   }
   return firsts;
}

function johnLennonFacts(facts) { // made an infinite loop
  var i = 0;
  while (i < facts.length) {
    var fact = facts[i];
    fact += '!!!' // strings are immutable
    
  }
}
    
function iLoveTheBeatles(num) {
var result =[];
var quote = 'I love the Beatles!';
var i = num;
do {
   i += 1;
   result.push(quote);
} while (i < 15);

return result;
}

function iLoveTheBeatles(num) { 
var result =[];
var quote = 'I love the Beatles!';
var i = num;
do {
  i += 1;
  result.push(quote);
} while (i < 15);

return result;
}
console.log(iLoveTheBeatles(12));

