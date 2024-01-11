class Polygon {
    constructor(sides) {
      this.sides = sides;
    }
  
    get countSides() {
      return this.sides.length;
    }
  
    get perimeter() {
      return this.sides.reduce((sum, side) => sum + side, 0);
    }
  }
  
  class Triangle extends Polygon {
    constructor(sides) {
      super(sides);
    }
  
    isValidTriangle() {
      if (this.countSides !== 3) {
        return false;
      }
  
      const [sideA, sideB, sideC] = this.sides;
      return (
        sideA + sideB > sideC &&
        sideA + sideC > sideB &&
        sideB + sideC > sideA
      );
    }
  }
  
  class Square extends Polygon {
    constructor(sideLength) {
      super([sideLength, sideLength, sideLength, sideLength]);
      this.sideLength = sideLength;
    }
  
    get area() {
      return this.sideLength ** 2;
    }
  
    isValidSquare() {
      const [sideA, sideB, sideC, sideD] = this.sides;
      return sideA === sideB && sideB === sideC && sideC === sideD;
    }
  }
  
  // Test case for Triangle class
  const triangle = new Triangle([3, 4, 5]);
  console.log(triangle.isValidTriangle()); // true
  
  // Test cases for Square class
  const square = new Square(5);
  console.log(square.perimeter); // 20
  console.log(square.area); // 25
  console.log(square.isValidSquare()); // true