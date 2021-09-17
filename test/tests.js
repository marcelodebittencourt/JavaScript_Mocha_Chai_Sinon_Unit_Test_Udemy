var chai = require('chai');
var assert = chai.assert;
var Add = require('../maths');
var sinon = require('sinon');

describe('Add tests', function()
{
    it('should return 3 when called with 1 and 2', function()
    {
        var result = Add(1, 2);
        var expectedResult = 3;
        assert.equal(expectedResult, result);
    });
});