var chai = require('chai');
var should = require('chai').should();
var expect = chai.expect;
var assert = chai.assert;

var sinon = require('sinon');

var Add = require('../maths');
var IsAlive = require('../functions');

describe('Add tests', function()
{
    it('should return 3 when called with 1 and 2', function()
    {
        var result = Add(1, 2);
        var expectedResult = 3;
        assert.equal(expectedResult, result);
    });
});

describe('ISAlive Tests', function()
{
    it('should return true when ping callback returns true', function()
    {
        var pinger = sinon.stub();
        pinger.returns(true);

        var websiteIsAlive = IsAlive(pinger);

        websiteIsAlive.should.be.true;
    });

    it('should return true when ping returns true three times in a row', function()
    {
        var pinger = sinon.stub();
        pinger.onFirstCall().returns(true);
        pinger.onSecondCall().returns(true);
        pinger.onThirdCall().returns(true);

        var websiteIsAlive = IsAlive(pinger);

        websiteIsAlive.should.be.true;
    })

});