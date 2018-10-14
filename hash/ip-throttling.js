/**
 * 1. Imagine if we get more than 5 IP from same source with in 1mins of time we would
      like to reject the request and process anything after until it reaches 5 again.
 * 2. Other IP should be processed fine until it falls under the first condition
 * 3. Imagine the request contains IP and timestamp as property.
 */


var object = {};
var counter = 0;

function process(time, ip){
    // if we have existing ip, and within the time limit ( as we added the limit at first ).
    if(object[ip] && (time < object[ip].timeLimit)){
      if(counter >= 5){
        console.log(" C. Step 3 (final): Met the limit with in a min : "+JSON.stringify(object[ip]));
        delete object[ip]; //if it's reached the limit, then clean it up.
      }else{
        counter++;
        object[ip].time = time;
        console.log(" Step 2: We found the match, updated the request : "+JSON.stringify(object))
      }
    }else{
      counter = 1;
      let timeLimit = time+(1000 * 60); // padding 1 min time limit at first time.
      let data = { 'time': time, 'timeLimit': timeLimit }
      object[ip] = data;
      console.log(" Step 1: New request & will be stored in hash : "+JSON.stringify(object))
    }
}

//simulating the request
setInterval(function() { process(new Date().getTime(), '10.23.22.154'); }, 2000);
setInterval(function() { process(new Date().getTime(), '10.0.0.100'); }, 5500);
