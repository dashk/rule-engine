var assert = require('assert'),
  Rule = require('../src/rule');

describe('Rule', function() {
  describe('#constructor', function() {
    it('should set name and rules when called', function() {
      // Setup
      var name = 'hello',
        rules = 'world';

      // Execute
      var r = new Rule(name, rules);

      // Verify
      assert.equal(name, r.name, 'Expect name to be set');
      assert.equal(rules, r.rules, 'Expect rules to be set');
    });
  });

  describe('#isMatch()', function() {
    it('should return false when rules contains syntax error.', function() {
      // Setup
      var rules = 'sowrongw9329"""',
        r = new Rule('name', rules);

      // Execute
      var result = r.isMatch();

      // Verify
      assert.ok(!result, 'Expects rule to fail');
    });

    it('should return true when rules return true.', function() {
      // Setup
      var rules = 'return true;',
        r = new Rule('name', rules);

      // Execute
      var result = r.isMatch({});

      // Verify
      assert.ok(result, 'Expects rule to match');
    });

    it('should return false when rules evaluates to false', function() {
      // Setup
      var rules = 'return false;',
        r = new Rule('name', rules);

      // Execute
      var result = r.isMatch();

      // Verify
      assert.ok(!result, 'Expects rule not to match.');
    });

    it('should return false when rules does not explicit return a value', function() {
      // Setup
      var rules = 'var hello = "world";',
        r = new Rule('name', rules);

      // Execute
      var result = r.isMatch();

      // Verify
      assert.ok(!result, 'Expects rule not to match');
    });

    it('should evaluate rule based on given syntax when called', function() {
      // Setup
      var rules = 'return data.hello === "hello";',
        r = new Rule('name', rules),
        data = { hello: 'hello' };

      // Execute
      var result = r.isMatch(data);

      // Verify
      assert.ok(result, 'Expects rule to match');
    });
  });
});
