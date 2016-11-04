import request from 'request';

export default class Request {

    construct({user, pass}) {
        this.auth = {user, pass};
        this.request = request;
        this.session = null;
    }

    get(url) {
        return new Promise((resolve, reject) => {
            resolve({});
        });
    }

    post(url, {data = {}}) {
        return new Promise((resolve, reject) => {
            resolve({});
        });
    }

    del(url) {
        return new Promise((resolve, reject) => {
            resolve({});
        });
    }
}