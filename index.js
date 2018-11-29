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

// function johnLennonFacts(facts) {
//   var i = 0;
//   while (i < facts.length) {
    
function iLoveTheBeatles(number) {
  var array = [];
  var i = 0;
  
  do {
  i = i + 1;
  array.push("I love the Beatles!");
} while (number < 15);
  return array;
}
