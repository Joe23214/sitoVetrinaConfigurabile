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
var modeCuttlefish$2 = { exports: {} };
var hasRequiredModeCuttlefish;
function requireModeCuttlefish() {
  if (hasRequiredModeCuttlefish) return modeCuttlefish$2.exports;
  hasRequiredModeCuttlefish = 1;
  (function(module, exports) {
    ace.define("ace/mode/cuttlefish_highlight_rules", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text_highlight_rules"], function(require2, exports2, module2) {
      var oop = require2("../lib/oop");
      var TextHighlightRules = require2("./text_highlight_rules").TextHighlightRules;
      var CuttlefishHighlightRules = function() {
        this.$rules = {
          start: [{
            token: ["text", "comment"],
            regex: /^([ \t]*)(#.*)$/
          }, {
            token: ["text", "keyword", "text", "string", "text", "comment"],
            regex: /^([ \t]*)(include)([ \t]*)([A-Za-z0-9-\_\.\*\/]+)([ \t]*)(#.*)?$/
          }, {
            token: ["text", "keyword", "text", "operator", "text", "string", "text", "comment"],
            regex: /^([ \t]*)([A-Za-z0-9-_]+(?:\.[A-Za-z0-9-_]+)*)([ \t]*)(=)([ \t]*)([^ \t#][^#]*?)([ \t]*)(#.*)?$/
          }, {
            defaultToken: "invalid"
          }]
        };
        this.normalizeRules();
      };
      CuttlefishHighlightRules.metaData = {
        fileTypes: ["conf"],
        keyEquivalent: "^~C",
        name: "Cuttlefish",
        scopeName: "source.conf"
      };
      oop.inherits(CuttlefishHighlightRules, TextHighlightRules);
      exports2.CuttlefishHighlightRules = CuttlefishHighlightRules;
    });
    ace.define("ace/mode/cuttlefish", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text", "ace/mode/cuttlefish_highlight_rules"], function(require2, exports2, module2) {
      var oop = require2("../lib/oop");
      var TextMode = require2("./text").Mode;
      var CuttlefishHighlightRules = require2("./cuttlefish_highlight_rules").CuttlefishHighlightRules;
      var Mode = function() {
        this.HighlightRules = CuttlefishHighlightRules;
        this.foldingRules = null;
        this.$behaviour = this.$defaultBehaviour;
      };
      oop.inherits(Mode, TextMode);
      (function() {
        this.lineCommentStart = "#";
        this.blockComment = null;
        this.$id = "ace/mode/cuttlefish";
      }).call(Mode.prototype);
      exports2.Mode = Mode;
    });
    (function() {
      ace.require(["ace/mode/cuttlefish"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(modeCuttlefish$2);
  return modeCuttlefish$2.exports;
}
var modeCuttlefishExports = requireModeCuttlefish();
const modeCuttlefish = /* @__PURE__ */ getDefaultExportFromCjs(modeCuttlefishExports);
const modeCuttlefish$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: modeCuttlefish
}, [modeCuttlefishExports]);
export {
  modeCuttlefish$1 as m
};
