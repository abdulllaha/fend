/**
 * @jest-environment jsdom
 */

const { submitChecker } = require("../js/submitChecker")

describe('handleSubmit', ()=> {
    it('returns something', () => {
        expect(submitChecker).toBeDefined();
    })
})