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
  Job.call(this);// Calls Job constructor and also set this.pays = true and makes the Job as the parent class of TechJob
  this.title = title;
  this.pays = pays;
}

TechJob.prototype = Object.create(Job.prototype); // Inherit all the properties from Job's prototype
TechJob.prototype.constructor = TechJob;  // set the constructor

TechJob.prototype.print = function() {
  console.log(this.pays ? 'Job is great, please hire me' : 'I would rather learn JavaScript');
}

var softwarePosition = new TechJob('JavaScript Programmer', true);
var softwarePosition2 = new TechJob('VB Programmer', false);


// it will 1st look into it's own prototype -> TechJob's prototype -> will use the TechJob's prototype method
console.log(softwarePosition.print());
console.log(softwarePosition2.print());
