import {expect} from 'chai';
import PaymoApp from './index';

let paymo = new PaymoApp('test_user');

describe("PaymoApp API Wrapper", function(){

    it("should generate exception if [user] isn't defined", function(){
        expect(function() {
            new PaymoApp();
        }).to.throw("AUTH params are required.");
    });

    it("should fire requester's [get] for [list] method", function(){



    });

    it("should create object requester with AUTH params", function(){




    });

    it("should fire requester's [get] for [get] method", function(){


    });

    it("should fire requester's [post] for [create] method", function(){


    });

    it("should fire requester's [post] for [update] method", function(){


    });

    it("should fire requester's [del] for [remove] method", function(){



    });

    it("should be Promise as a [list] method result", function(){



    });

    it("should be Promise as a [get] method result", function(){



    });

    it("should be Promise as a [create] method result", function(){



    });

    it("should be Promise as a [update] method result", function(){



    });

    it("should be Promise as a [remove] method result", function(){



    });
});