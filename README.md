[![build status](https://secure.travis-ci.org/dashk/rule-engine.svg)](http://travis-ci.org/dashk/rule-engine)

rule-engine
===========

A very simple (stupid?) rule "engine"/rule evaluator that allows you to write rules, in JavaScript, to evaluate whether a rule should be matched based on the two objects and an optional parameter is given.

This is meant to be extremely light-weight and simple, and you should trust that whatever rules that was fed into the "engine" does not have malicious code.

How To Use
==========

1. Include rule.js in your code

   ```
   var Rule = require('rule');
   ```

2. Create a new Rule with a name and JavaScript statements.

   ```
   var rule = new Rule('rule-name', 'return data.name === "hello world";');
   ```
   
   In order for rule engine to work, the statement MUST return a true value should the rule is considered a match. (Not truthy, but a boolean true.)

3. Execute the rule by passing in the data you wanted to use to compare.

   ```
   var result = rule.isMatch({ name: "hello world", garbage: "data" });
   ```

