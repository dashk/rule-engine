rule-engine
===========

A very simple rule engine that allows you to write rules, in JavaScript, that compares two objects.

How To Use
==========

1. Include rule.js in your code

   var RuleNS = require('rule');

2. Create a new Rule with a name and JavaScript statements.

   var rule = new RuleNS.Rule('rule-name', 'return obj1.name === obj2.name;');
   
   In order for rule engine to work, the statement MUST return a truthy value should the rule is considered a match.

3. Execute the rule by passing in the objects you want to compare.

   var result = rule.isMatch(obj1, obj2);
