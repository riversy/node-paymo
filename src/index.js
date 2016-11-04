import Url from './utils/url';
import Requester from './utils/requester';

class Paymo {
    constructor(user, pass = 'X') {
        if (!user){
            throw new Error("AUTH params are required.");
        }
        this.requester = new Requester({user, pass});
        this.url = new Url();
    }

    list(entity, where = {}) {
        let url = this.url.build(entity, {where});
        return this.requester.get(url);
    }

    get(entity, id) {
        let url = this.url.build(entity, {id});
        return this.requester.get(url);
    }

    create(entity, data = {}) {
        let url = this.url.build(entity);
        return this.requester.post(url, data);
    }

    update(entity, id, data = {}) {
        let url = this.url.build(entity, {id});
        return this.requester.post(url, data);
    }

    remove(entity, id) {
        let url = this.url.build(entity, {id});
        return this.requester.del(url);
    }
}

export default Paymo;



