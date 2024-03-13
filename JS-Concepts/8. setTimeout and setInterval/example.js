var fakeCallToServer = function() {
  setTimeout(function() {
    console.log('returning from server', new Date().toLocaleTimeString());
  }, 4000);
}


setInterval(function() { 
  let insideSetInterval = new Date().toLocaleTimeString();
  console.log('insideSetInterval', insideSetInterval);
  fakeCallToServer();
}, 2000);


// output
// insideSetInterval 14:13:47 -
// insideSetInterval 14:13:49 -
// insideSetInterval 14:13:51 -
// returning from server 14:13:51
// insideSetInterval 14:13:53
// returning from server 14:13:53
// insideSetInterval 14:13:55
// returning from server 14:13:55


