import {expect} from 'chai';
import sinon from 'sinon';
import PaymoApp from './index';

describe("PaymoApp API Wrapper: init", function(){
    it("should generate exception if [user] isn't defined", function(){
        expect(function() {
            new PaymoApp();
        }).to.throw("AUTH params are required.");
    });
});

describe("PaymoApp API Wrapper: methods", function(){

    let paymo;

    before(function(){
        paymo = new PaymoApp('X');
    });

    beforeEach(function(){

        let fakeCallback = function(){
            return new Promise((resolve) => {
                resolve({});
            });
        };

        paymo.requester = {
            get: sinon.spy(fakeCallback),
            post: sinon.spy(fakeCallback),
            del: sinon.spy(fakeCallback)
        };
    });

    it("should fire requester's [get] for [list] method", function(){

        paymo.list('clients');
        expect(paymo.requester.get.calledWith()).to.be.true;
        expect(paymo.requester.post.calledWith()).to.be.false;
        expect(paymo.requester.del.calledWith()).to.be.false;
    });

    it("should fire requester's [get] for [get] method", function(){

        paymo.get('clients', 10);
        expect(paymo.requester.get.calledWith()).to.be.true;
        expect(paymo.requester.post.calledWith()).to.be.false;
        expect(paymo.requester.del.calledWith()).to.be.false;
    });

    it("should fire requester's [post] for [create] method", function(){
        paymo.create('clients', {name: 'Test'});
        expect(paymo.requester.get.calledWith()).to.be.false;
        expect(paymo.requester.post.calledWith()).to.be.true;
        expect(paymo.requester.del.calledWith()).to.be.false;
    });

    it("should fire requester's [post] for [update] method", function(){
        paymo.update('clients', 10, {name: 'Test'});
        expect(paymo.requester.get.calledWith()).to.be.false;
        expect(paymo.requester.post.calledWith()).to.be.true;
        expect(paymo.requester.del.calledWith()).to.be.false;
    });

    it("should fire requester's [del] for [remove] method", function(){

        paymo.remove('clients', 10);
        expect(paymo.requester.get.calledWith()).to.be.false;
        expect(paymo.requester.post.calledWith()).to.be.false;
        expect(paymo.requester.del.calledWith()).to.be.true;
    });

});

describe("PaymoApp API Wrapper: If this promised correctly ", function(){

    let paymo;

    before(function(){
        paymo = new PaymoApp('X');
        ///TODO: Make requestPromise method fake
    });

    it("should be Promise as a [list] method result", function(){
        expect(paymo.list('clients')).is.instanceOf(Promise);
    });

    it("should be Promise as a [get] method result", function(){
        expect(paymo.get('clients', 10)).is.instanceOf(Promise);
    });

    it("should be Promise as a [create] method result", function(){
        expect(paymo.create('clients', {name: 'Test'})).is.instanceOf(Promise);
    });

    it("should be Promise as a [update] method result", function(){
        expect(paymo.update('clients', 10, {name: 'Test'})).is.instanceOf(Promise);
    });

    it("should be Promise as a [remove] method result", function(){
        expect(paymo.remove('clients', 10)).is.instanceOf(Promise);
    });
});