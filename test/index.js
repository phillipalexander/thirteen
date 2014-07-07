var expect = require('chai').expect;
var thirteen = require('../index.js');

describe('thirteen', function() {
  it('should be a function', function(done) {
    expect(thirteen).to.be.a("function");
    done();
  });
});
