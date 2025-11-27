import { g as getDefaultExportFromCjs } from "./generated-flow-imports-BqRFIZKo.js";
function _mergeNamespaces(n, m) {
  for (var i = 0; i < m.length; i++) {
    const e = m[i];
    if (typeof e !== "string" && !Array.isArray(e)) {
      for (const k in e) {
        if (k !== "default" && !(k in n)) {
          const d = Object.getOwnPropertyDescriptor(e, k);
          if (d) {
            Object.defineProperty(n, k, d.get ? d : {
              enumerable: true,
              get: () => e[k]
            });
          }
        }
      }
    }
  }
  return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }));
}
var extSimple_tokenizer$2 = { exports: {} };
var hasRequiredExtSimple_tokenizer;
function requireExtSimple_tokenizer() {
  if (hasRequiredExtSimple_tokenizer) return extSimple_tokenizer$2.exports;
  hasRequiredExtSimple_tokenizer = 1;
  (function(module, exports) {
    ace.define("ace/ext/simple_tokenizer", ["require", "exports", "module", "ace/tokenizer", "ace/layer/text_util"], function(require2, exports2, module2) {
      var Tokenizer = require2("../tokenizer").Tokenizer;
      var isTextToken = require2("../layer/text_util").isTextToken;
      var SimpleTokenizer = (
        /** @class */
        (function() {
          function SimpleTokenizer2(content, tokenizer) {
            this._lines = content.split(/\r\n|\r|\n/);
            this._states = [];
            this._tokenizer = tokenizer;
          }
          SimpleTokenizer2.prototype.getTokens = function(row) {
            var line = this._lines[row];
            var previousState = this._states[row - 1];
            var data = this._tokenizer.getLineTokens(line, previousState);
            this._states[row] = data.state;
            return data.tokens;
          };
          SimpleTokenizer2.prototype.getLength = function() {
            return this._lines.length;
          };
          return SimpleTokenizer2;
        })()
      );
      function tokenize(content, highlightRules) {
        var tokenizer = new SimpleTokenizer(content, new Tokenizer(highlightRules.getRules()));
        var result = [];
        for (var lineIndex = 0; lineIndex < tokenizer.getLength(); lineIndex++) {
          var lineTokens = tokenizer.getTokens(lineIndex);
          result.push(lineTokens.map(function(token) {
            return {
              className: isTextToken(token.type) ? void 0 : "ace_" + token.type.replace(/\./g, " ace_"),
              value: token.value
            };
          }));
        }
        return result;
      }
      exports2.tokenize = tokenize;
    });
    (function() {
      ace.require(["ace/ext/simple_tokenizer"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(extSimple_tokenizer$2);
  return extSimple_tokenizer$2.exports;
}
var extSimple_tokenizerExports = requireExtSimple_tokenizer();
const extSimple_tokenizer = /* @__PURE__ */ getDefaultExportFromCjs(extSimple_tokenizerExports);
const extSimple_tokenizer$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: extSimple_tokenizer
}, [extSimple_tokenizerExports]);
export {
  extSimple_tokenizer$1 as e
};
