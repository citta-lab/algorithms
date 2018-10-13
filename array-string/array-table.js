/**
If the user input 2 then the output should be as mentioned below,

1*1=1
1*2=2
2*1=2
2*2=4

Output= [1,2,2,4]

Input 3

1*1=1
1*2=2
1*3=3
2*1=2
2*2=4
2*3=6
3*1=3
3*2=6
3*3=9

Output= [1,2,3,2,4,6,3,6,9]
**/

function buildMatrix(number){

  var arr = [];
  var result = [];

  for(let i=1; i<=number; i++){
    arr.push(i)
  }

  for(let element of arr){
    for(let j=1; j<=number; j++){
      result.push(element*j);
    }
  }

  console.log(" arr : "+arr)
  console.log(" result : "+result)
}
