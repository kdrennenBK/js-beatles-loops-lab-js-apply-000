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

// function johnLennonFacts(facts) { // made an infinite loop
//   var i = 0;
//   while (i < facts.length) {
    
function iLoveTheBeatles(number) { // infinite loop
  var array = [];
  var i = number; //want to run this for num < 15, this may stop the loop by establishing the range
  
  do {
  i = i + 1;
  array.push("I love the Beatles!");
} while (i < 15);
  return array;
}
