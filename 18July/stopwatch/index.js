function StopWatch()
{
  let startTime,endTime,running=false;

  this.start = function() {
      if(running) {
          return "Stopwatch is already running";
      }else {
          running = true;
          startTime = new Date();
      }
  }

  this.stop = function() {
      if(!running) {
          return "Stopwatch is not started";
      }
      else {
          running=false;
          endTime = new Date();     
      }
  }

  this.reset = function(){
      startTime = 0;
      endTime = 0;
      running = false;
  }

  Object.defineProperty(this,"duration",{
      get: function() {
          return endTime - startTime;
      }   
  })

}