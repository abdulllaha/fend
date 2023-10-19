const { VALID } = require("../js/urlChecker.js")

describe('urlValidity', ()=> {
    test('test if strings are false url', () => {
        expect(VALID("read")).toBeFalsy();
    });
    
    test('emails are not considered valid url', () => {
        expect(VALID("mailto:test@test.test")).toBeFalsy();
    });
    
    test('expect urls to be true', () => {
        expect(VALID("https://www.google.com")).toBeTruthy();
    });

    test('expect empty string to be falsy', () => {
        expect(VALID("")).toBeFalsy();
    });
});