// Classes in javascript Rectangle

class Rectangle{
    constructor(width, height, color){
        this.width = width;
        this.height = height;
        this.color = color
    }
    area(){
        const area = this.width * this.height;
        return area;
    }
    paint(){
        console.log(`This is color is ${this.color}`);
    }
}

const rect = new Rectangle(2,4,"red");
const area = rect.area();
rect.paint()
console.log(area);


// Circle class 

// Define the parent class Shape
class Shape {
    constructor(color) {
        this.color = color;
    }
}

// Define the Circle class that extends Shape
class Circle extends Shape {
    constructor(radius, color) {
        super(color);  // Call the parent class constructor to set the color
        this.radius = radius;
    }

    area() {
        return Math.PI * this.radius * this.radius;
    }

    getDescription() {
        return `A circle with radius ${this.radius} and color ${this.color}`;
    }
}

// Now create a circle instance with both radius and color
const circle = new Circle(20, "red");
console.log(circle.area());  // Output: 1256.6370614359173
console.log(circle.getDescription());  // Output: A circle with radius 20 and color red
