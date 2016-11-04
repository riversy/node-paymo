import _ from 'lodash';
import requestPromise from 'request-promise';
import Url from '../url/index';

export default class Requester {

    constructor({user, pass}) {
        this.auth = {user, pass};
        this.request = requestPromise;
        this.session = false;
    }

    get(uri) {
        return new Promise((resolve, reject) => {
            this.getSessionId()
                .then((sessionId) => {
                    let headers = {
                        'X-Session': sessionId
                    };
                    return this.request({uri, headers});
                })
                .then((response) => resolve(response))
                .catch((error) => reject(error));
        });
    }

    post(uri, {data = {}}) {
        return new Promise((resolve, reject) => {
            this.getSessionId()
                .then((sessionId) => {
                    let headers = {
                        'X-Session': sessionId
                    };
                    let body = data;
                    let method = 'POST';
                    return this.request({uri, headers, method, body});
                })
                .then((response) => resolve(response))
                .catch((error) => reject(error));
        });
    }

    del(uri) {
        return new Promise((resolve, reject) => {
            this.getSessionId()
                .then((sessionId) => {
                    let headers = {
                        'X-Session': sessionId
                    };
                    let method = 'DELETE';
                    return this.request({uri, headers, method});
                })
                .then((response) => resolve(response))
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
            let uri = url.build('sessions');
            let auth = this.auth;
            let json = true;

            request({uri, auth, json})
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
                    return request({uri, auth, json, body, method});
                })
                .then((response) => {
                    let sessions = response['sessions'];
                    if (!sessions.length){
                        throw new Error("Can't create session.");
                    }
                    let session = _.first(sessions);
                    this.session = session.id;
                    resolve(this.session);
                })
                .catch((error) => reject(error));
        });
    }
}
