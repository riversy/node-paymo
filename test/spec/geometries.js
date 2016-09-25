jest.dontMock('../../src/geometries/index.js');
jest.dontMock('../../src/geometries/circle.js');
jest.dontMock('../../src/geometries/square.js');

const geometries = require('../../src/geometries/');

describe('Geometries functions', () => {
    describe('Circle{ radius: 5 }', () => {
        let circle;

        beforeEach(() => {
            circle = new geometries.Circle(5);
        });

        it('perimeter', () => {
            expect(circle.perimeter)
                .toEqual(31.41592653589793);
        });

        it('area', () => {
            expect(circle.area)
                .toEqual(78.53981633974483);
        });
    });

    describe('Circle{ radius: 200 }', () => {
        let circle;

        beforeEach(() => {
            circle = new geometries.Circle(200);
        });

        it('perimeter', () => {
            expect(circle.perimeter)
                .toEqual(1256.6370614359173);
        });

        it('area', () => {
            expect(circle.area)
                .toEqual(125663.70614359173);
        });
    });

    describe('Square{ length: 4 }', () => {
        let square;

        beforeEach(() => {
            square = new geometries.Square(4);
        });

        it('perimeter', () => {
            expect(square.perimeter)
                .toEqual(16);
        });

        it('area', () => {
            expect(square.area)
                .toEqual(16);
        });
    });

    describe('Square{ length: 10 }', () => {
        let square;

        beforeEach(() => {
            square = new geometries.Square(10);
        });

        it('perimeter', () => {
            expect(square.perimeter)
                .toEqual(40);
        });

        it('area', () => {
            expect(square.area)
                .toEqual(100);
        });
    });
});
