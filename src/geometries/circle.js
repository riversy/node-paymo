import { PI } from '../costants/';
import { debug } from '../utils/';

export default class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    get perimeter() {
        debug(`Calc perimeter of circle (r = ${this.radius})`);
        return PI * this.radius * 2;
    }
    get area() {
        debug(`Calc area of circle (r = ${this.radius})`);
        return PI * this.radius * this.radius;
    }
}
