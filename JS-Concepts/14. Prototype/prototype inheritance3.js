// Base class
var Job = function () {
  this.pays = true;
}

// prototype method
Job.prototype.print = function () {
  console.log(this.pays ? 'Please hire me' : 'No thank you');
}

// Sub class
var TechJob = function(title, pays) {
  Job.call(this); // 1. Calls Job constructor and also set this.pays = true and makes the Job as the parent class of TechJob
  this.title = title;
  this.pays = pays;
}

TechJob.prototype = Object.create(Job.prototype); // 2. Inherit all the properties from Job's prototype
TechJob.prototype.constructor = TechJob;  // 3. set the constructor

Object.prototype.print = function() {
  console.log('Printing from Master Object');
}

var softwarePosition = new TechJob('JavaScript Programmer', true);
var softwarePosition2 = new TechJob('VB Programmer', false);

// it will 1st look into it's own prototype -> TechJob's prototype -> Job's prototype -> Object's prototype
// will use the Object's prototype method
console.log(softwarePosition.print());
console.log(softwarePosition2.print());