
import {assert, expect} from 'chai';
import Url from './index';
let url = new Url();

describe("URL Builder", function(){

    it("should generate exception if entity name isn't defined", function(){
        expect(url.build).to.throw("Entity name is required.");
    });

    it("should build List URLs", function(){
        expect(url.build('clients')).to.be.equal('https://app.paymoapp.com/api/clients');
    });

    it("should build Get and Delete URLs", function(){
        let id = 10;
        expect(url.build('clients', {id})).to.be.equal('https://app.paymoapp.com/api/clients/10');
    });

    
});





