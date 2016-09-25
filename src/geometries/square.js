import { debug } from '../utils/';

export default class Square {
    constructor(length) {
        this.length = length;
        this.temp = 123;
    }
    get perimeter() {
        debug(`Calc perimeter of square (r = ${this.length})`);
        return this.length * 4;
    }
    get area() {
        debug(`Calc area of square (r = ${this.length})`);
        return this.length * this.length;
    }
}
