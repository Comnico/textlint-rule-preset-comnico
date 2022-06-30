"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

function _default(context) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var {
    Syntax,
    RuleError,
    report,
    getSource
  } = context;
  return {
    [Syntax.Str](node) {
      // "Str" node
      var text = getSource(node); // Get text

      var matches = /bugs/g.exec(text); // Found "bugs"

      if (!matches) {
        return;
      }

      var indexOfBugs = matches.index;
      var ruleError = new RuleError("Found bugs.", {
        index: indexOfBugs // padding of index

      });
      report(node, ruleError);
    }

  };
}

;
//# sourceMappingURL=index.js.map