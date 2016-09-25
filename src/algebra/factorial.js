import Promise from 'bluebird';
import { debug } from '../utils/';

function factorial(n) {
    debug(`Calc factorial of ${n}`);
    return n === 1 ? 1: n * factorial(n - 1);
}

function factorialAsync(n) {
    debug(`Calc factorial of ${n}`);
    return n === 1 ?
        Promise.resolve(1) :
        factorialAsync(n - 1)
            .then(res => {
                return res * n
            });
}

export {
    factorial,
    factorialAsync
};
