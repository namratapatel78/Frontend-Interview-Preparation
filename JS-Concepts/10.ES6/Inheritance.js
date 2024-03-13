class Car {
  constructor(brand) {
    this.brand = brand;
  }
  showCar() {
    console.log(this.brand);
  }
}

class Model extends Car {
  constructor(brand, model) {
    super(brand);
    this.model = model;
  }
  showCarAndModel() {
    console.log(this.brand, this.model);
  }
}

let modelObj = new Model('TATA', 'ZEST');

modelObj.showCarAndModel();