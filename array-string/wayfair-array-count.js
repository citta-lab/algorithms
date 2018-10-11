/**
 * 1. Given an string aaabbcccddaaeee print a3b2c2d3a2e3
 * 2. Only consecutive letters should be counted and printed next
 */

 function countChar(string){
   var current, i=0, len = string.length;

   var result = [];
   while(i<len){
     current = string.charA(i);
     if(!i++ || result[result.length-1][0] !== current){
       result[result.length] = [current, 1];
     }else{
       result[result.length-1][1]++;
     }
   }

   console.log(result);
   return result.join();
 }
