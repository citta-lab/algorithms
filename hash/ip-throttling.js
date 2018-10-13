/**
 * 1. Imagine if we get more than 100 IP from same source with in 5mins of time we would
      like to reject the request and process anything after until it reaches 100 again.
 * 2. Other IP should be processed fine until it falls under the forst condition
 * 3. Imagine the request contains IP and timestamp as property
 */

class Request {
  constructor(time, ip){
    this.time = time;
    this.ip = ip;
  }
}

function process(request){

}
