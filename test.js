'use strict';

var test = require('tape');
var stripUnits = require('./');

test('strip-units', function(t) {
  t.equal(stripUnits(), null, 'should be equal null');
  t.equal(stripUnits('100%'), 100, 'should be equal 100');
  t.equal(stripUnits('-100%'), -100, 'should be equal -100');
  t.equal(stripUnits('100px'), 100, 'should be equal 100');
  t.equal(stripUnits('-100px'), -100, 'should be equal -100');
  t.equal(stripUnits('100PX'), 100, 'should be equal 100');
  t.equal(stripUnits('-0.667EM'), -0.667, 'should be equal -0.667');
  t.equal(stripUnits('0.667em'), 0.667, 'should be equal 0.667');
  t.equal(stripUnits('-0.667em'), -0.667, 'should be equal -0.667');
  t.equal(stripUnits('100'), 100, 'should be equal 100');
  t.equal(stripUnits('-100'), -100, 'should be equal -100');
  t.equal(stripUnits('foo'), null, 'should be equal null');
  t.equal(stripUnits(100), 100, 'should be equal 100');
  t.end();
});
