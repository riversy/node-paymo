import _ from 'lodash';
import requestPromise from 'request-promise';
import Url from '../url/index';

export default class Requester {

    constructor({user, pass}) {
        this.auth = {user, pass};
        this.request = requestPromise;
        this.session = false;
    }

    get(url) {
        return new Promise((resolve, reject) => {
            this.getSessionId()
                .then((sessionId) => {
                    console.log(sessionId);
                    resolve({});
                })
                .catch((error) => reject(error));
        });
    }

    post(url, {data = {}}) {
        return new Promise((resolve, reject) => {
            this.getSessionId()
                .then((sessionId) => {
                    console.log(sessionId);
                    resolve({});





                })
                .catch((error) => reject(error));
        });
    }

    del(url) {
        return new Promise((resolve, reject) => {
            this.getSessionId()
                .then((sessionId) => {
                    console.log(sessionId);
                    resolve({});
                })
                .catch((error) => reject(error));
        });
    }

    getSessionId() {
        return new Promise((resolve, reject) => {

            let request = this.request;

            if (this.session){
                resolve(this.session);
                return;
            }

            let url = new Url();
            let sessionUrl = url.build('sessions');
            let auth = this.auth;
            let json = true;

            request(sessionUrl, {auth, json})
                .then((response) => {
                    let sessions = response['sessions'];
                    if (sessions && sessions.length){
                        let session = _.first(sessions);
                        this.session = session.id;
                        resolve(this.session);
                        return;
                    }

                    let method = 'POST';
                    let body = {};
                    return request(sessionUrl, {auth, json, body, method});
                })
                .then((response) => {
                    let sessions = response['sessions'];
                    let session = _.first(sessions);
                    this.session = session.id;
                    resolve(this.session);
                })
                .catch((error) => reject(error));
        });
    }


}
