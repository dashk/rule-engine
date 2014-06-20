/**
 * Rule
 * @constructor
 * @param {string} name
 * @param {string} rules
 **/
function Rule(name, rules) {
  this.name = name;
  this.rules = rules;
};

/**
 * Checks if rule is a match.
 *
 * @param {Object} data Data to be used in rule execution
 * @returns {bool}
 **/
Rule.prototype.isMatch = function(data) {
  var code, result;

  try {
    // When I put this in a separate function, it doesn't work.
    result = (new Function('data', this.rules)).apply({}, [ data ]);
  } catch (e) {
    result = false;
  }

  // Boolean value only. :D
  return result === true;
};

/**
 * Checks if rules are valid based on syntax and given data.
 *
 * @param {Object} data
 * @returns {bool}
 **/
Rule.prototype.isValid = function(data) {
  var result;
  try {
    // For some reason, if I place this code in another function, it doesn't work.
    (new Function('data', this.rules)).apply({}, [ data ]);
    result = true;
  } catch (e) {
    result = false;
  }

  return result;
};

// This is the actual function that returns by require(...).
module.exports = Rule;
