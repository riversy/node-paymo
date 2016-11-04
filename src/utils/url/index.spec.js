import {expect} from 'chai';
import Url from './index';
let url = new Url();

describe("URL Builder", function(){

    it("should generate exception if entity name isn't defined", function(){
        expect(url.build).to.throw("Entity name is required.");
    });

    it("should build List URLs", function(){
        expect(
            url.build('clients')
        ).to.be.equal(
            'https://app.paymoapp.com/api/clients'
        );
    });

    it("should build List URLs with one filter", function(){
        let where = [
            "project_id=11223"
        ];
        expect(
            url.build('entries', {where})
        ).to.be.equal("https://app.paymoapp.com/api/entries?where=project_id=11223");
    });

    it("should build List URLs with two filters", function(){
        let where = [
            "project_id=11223",
            "user_id in (1,2,3)",
        ];
        expect(
            url.build('entries', {where})
        ).to.be.equal(
            "https://app.paymoapp.com/api/entries?where=project_id=11223 and user_id in (1,2,3)"
        );
    });

    it("should build Get and Delete URLs", function(){
        let id = 10;
        expect(
            url.build('clients', {id})
        ).to.be.equal(
            'https://app.paymoapp.com/api/clients/10'
        );
    });

    it("should build Get URLs with one include field", function(){
        let id = 21147;
        let include = "tasklists";

        expect(
            url.build('tasks', {id, include})
        ).to.be.equal(
            'https://app.paymoapp.com/api/tasks/21147?include=tasklists'
        );
    });

    it("should build Get URLs with one include field", function(){
        let id = 21147;
        let include = [
            "project.name",
            "project.client.name"
        ];

        expect(
            url.build('tasks', {id, include})
        ).to.be.equal(
            'https://app.paymoapp.com/api/tasks/21147?include=project.name,project.client.name'
        );

    });
});





