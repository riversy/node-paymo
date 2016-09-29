import Url from './utils/url';

const ENDPOINT_URL = "https://app.paymoapp.com/api";

class Paymo {
    constructor(username, pass = 'X') {

        this.authParams = {username, pass};
        this.session = null;
        this.url = new Url();
    }

    list(entity, options = {}) {

    }

    get(entity, id) {

    }

    put(entity, data = {}) {

    }

    update(entity, id) {

    }
}

export default Paymo;



