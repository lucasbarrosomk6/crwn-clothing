let MaxWordLength = {};
let str = "hot diggity dog!!!!!!!"
function longestWord(str){
    var arr = str.match(/[a-z,0-9]+/gi);
   var sorted = arr.sort(function(a,b){return b.length-a.length});
    return sorted[0];
}
console.log(longestWord(str));
module.exports=MaxWordLength;