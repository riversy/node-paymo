import Url from './utils/url';
import Requester from './utils/requester';

class Paymo {
    constructor(user, pass = 'X') {

        console.log(user);

        if (!user){
            throw new Error("AUTH params are required.");
        }

        this.request = new Requester({user, pass});
        this.session = null;
        this.url = new Url();
    }

    list(entity, options = {}) {

    }

    get(entity, id) {

    }

    create(entity, data = {}) {

    }

    update(entity, id, data = {}) {


    }

    remove(entity, id) {

    }
}

export default Paymo;



