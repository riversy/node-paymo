jest.dontMock('../../src/algebra/index.js');
jest.dontMock('../../src/algebra/factorial.js');

const algebra = require('../../src/algebra/');

describe('Algebra functions', () => {
    it('.factorial(1)', () => {
        expect(algebra.factorial(1))
            .toEqual(1);
    });

    it('.factorial(2)', () => {
        expect(algebra.factorial(2))
            .toEqual(2);
    });

    it('.factorial(10)', () => {
        expect(algebra.factorial(10))
            .toEqual(3628800);
    });

    pit('.factorialAsync(1)', () => {
        return algebra.factorialAsync(1)
            .then(res => {
                expect(res)
                    .toEqual(1);
            });
    });

    pit('.factorialAsync(4)', () => {
        return algebra.factorialAsync(4)
            .then(res => {
                expect(res)
                    .toEqual(24);
            });
    });

    pit('.factorialAsync(10)', () => {
        return algebra.factorialAsync(10)
            .then(res => {
                expect(res)
                    .toEqual(3628800);
            });
    });
});
