var expect = require('chai').expect;
var thirteen = require('../index.js');

describe('thirteen', function () {
  it('should be a function', function () {
    expect(thirteen).to.be.a("function");
  });

  it('should return its argument multiplied by thirteen', function () {
    expect(thirteen(10)).to.eql(130);
  });

  it('should NOT return its argument multiplied by twelve', function () {
    expect(thirteen(10)).to.not.eql(120);
  });

  it('should return its arguments number-like value multiplied by thirteen', function () {
    var wannabeString = {};
    var wannabeValue = {};

    wannabeString.toString = function () { return '13'; };
    wannabeValue.valueOf = function () { return '13'; };

    expect(thirteen(wannabeString)).to.eql(169);
    expect(thirteen(wannabeValue)).to.eql(169);
  });
});

