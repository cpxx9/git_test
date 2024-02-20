class Polygon {
  constructor(height, width) {
    this.name = 'Polygon';
    this.height = height;
    this.width = width;
  }

  sayName() {
    console.log(`Hi I am a ${this.name}.`);
  }

  sayHistory () {
    console.log('"Polygon" is derived from the Greek polus (many) and gonia (angle).');
  }
}

let p = new Polygon(300, 400);
p.sayName();
console.log(`My width is ${p.width}.`);

class Square extends Polygon {
  constructor(length) {
    super(length, length);
    this.name = 'Square';
  }

  get area() {
    return this.height * this.width
  }
  set area(value) {
    this.area = value;
  }
}

const s = new Square(5);

class Rectangle extends Polygon {
  constructor(height, width) {
    super(height, width);
    this.name = 'Rectangle';
  }

  sayName() {
    console.log(`Sup! I am a ${this.name}.`);
    super.sayHistory();
  }  
}

let r = new Rectangle(12, 20);