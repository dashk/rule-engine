/**
 * Rule
 * @constructor
 * @param {string} name
 * @param {string} rules
 **/
var Rule = function(name, rules) {
  this.name = name;
  this.rules = rules;
};

/**
 * Checks if rule is matched
 *
 * @param {Object} obj1
 * @param {Object} obj2
 * @param {Object} data
 * @returns {bool}
 **/
Rule.prototype.isMatch = function(obj1, obj2, data) {
  var code, result;

  try {
    code = new Function('obj1', 'obj2', 'data', this.rules), result;
    result = code.apply({}, [ obj1, obj2, data ]);
  } catch (e) {
    return false;
  }

  return !!result;
};

exports.Rule = Rule;
