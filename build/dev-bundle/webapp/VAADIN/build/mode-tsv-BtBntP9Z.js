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
var modeTsv$2 = { exports: {} };
var hasRequiredModeTsv;
function requireModeTsv() {
  if (hasRequiredModeTsv) return modeTsv$2.exports;
  hasRequiredModeTsv = 1;
  (function(module, exports) {
    ace.define("ace/mode/csv_highlight_rules", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text_highlight_rules"], function(require2, exports2, module2) {
      var oop = require2("../lib/oop");
      var TextHighlightRules = require2("./text_highlight_rules").TextHighlightRules;
      var CsvHighlightRules = function() {
        TextHighlightRules.call(this);
      };
      oop.inherits(CsvHighlightRules, TextHighlightRules);
      exports2.CsvHighlightRules = CsvHighlightRules;
    });
    ace.define("ace/mode/csv", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text", "ace/lib/lang", "ace/mode/csv_highlight_rules"], function(require2, exports2, module2) {
      var oop = require2("../lib/oop");
      var TextMode = require2("./text").Mode;
      var escapeRegExp = require2("../lib/lang").escapeRegExp;
      var CsvHighlightRules = require2("./csv_highlight_rules").CsvHighlightRules;
      var Mode = function(options) {
        this.HighlightRules = CsvHighlightRules;
        if (!options)
          options = {};
        var separatorRegex = [options.splitter || ",", options.quote || '"'].map(escapeRegExp).join("|");
        this.$tokenizer = {
          getLineTokens: function(line, state, row) {
            return tokenizeCsv(line, state, this.options);
          },
          options: {
            quotes: options.quote || '"',
            separatorRegex: new RegExp("(" + separatorRegex + ")"),
            spliter: options.splitter || ","
          },
          states: {}
        };
        this.$highlightRules = new this.HighlightRules();
      };
      oop.inherits(Mode, TextMode);
      (function() {
        this.getTokenizer = function() {
          return this.$tokenizer;
        };
        this.$id = "ace/mode/csv";
      }).call(Mode.prototype);
      exports2.Mode = Mode;
      var classNames = ["keyword", "text", "string", "string.regex", "variable", "constant.numeric"];
      function tokenizeCsv(line, state, options) {
        var result = [];
        var parts = line.split(options.separatorRegex);
        var spliter = options.spliter;
        var quote = options.quote || '"';
        var stateParts = (state || "start").split("-");
        var column = parseInt(stateParts[1]) || 0;
        var inString = stateParts[0] == "string";
        var atColumnStart = !inString;
        for (var i = 0; i < parts.length; i++) {
          var value = parts[i];
          if (value) {
            var isSeparator = false;
            if (value == spliter && !inString) {
              column++;
              atColumnStart = true;
              isSeparator = true;
            } else if (value == quote) {
              if (atColumnStart) {
                inString = true;
                atColumnStart = false;
              } else if (inString) {
                if (parts[i + 1] == "" && parts[i + 2] == quote) {
                  value = quote + quote;
                  i += 2;
                } else {
                  inString = false;
                }
              }
            } else {
              atColumnStart = false;
            }
            result.push({
              value,
              type: classNames[column % classNames.length] + ".csv_" + column + (isSeparator ? ".csv_separator" : "")
            });
          }
        }
        return { tokens: result, state: inString ? "string-" + column : "start" };
      }
    });
    ace.define("ace/mode/tsv_highlight_rules", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text_highlight_rules"], function(require2, exports2, module2) {
      var oop = require2("../lib/oop");
      var TextHighlightRules = require2("./text_highlight_rules").TextHighlightRules;
      var TsvHighlightRules = function() {
        TextHighlightRules.call(this);
      };
      oop.inherits(TsvHighlightRules, TextHighlightRules);
      exports2.TsvHighlightRules = TsvHighlightRules;
    });
    ace.define("ace/mode/tsv", ["require", "exports", "module", "ace/mode/csv", "ace/mode/tsv_highlight_rules"], function(require2, exports2, module2) {
      var CSVMode = require2("./csv").Mode;
      var TsvHighlightRules = require2("./tsv_highlight_rules").TsvHighlightRules;
      var Mode = function(options) {
        var mode = new CSVMode({
          splitter: "	",
          quote: '"'
        });
        mode.HighlightRules = TsvHighlightRules;
        mode.$id = "ace/mode/tsv";
        return mode;
      };
      exports2.Mode = Mode;
    });
    (function() {
      ace.require(["ace/mode/tsv"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(modeTsv$2);
  return modeTsv$2.exports;
}
var modeTsvExports = requireModeTsv();
const modeTsv = /* @__PURE__ */ getDefaultExportFromCjs(modeTsvExports);
const modeTsv$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: modeTsv
}, [modeTsvExports]);
export {
  modeTsv$1 as m
};
