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
var tsv$2 = { exports: {} };
var hasRequiredTsv;
function requireTsv() {
  if (hasRequiredTsv) return tsv$2.exports;
  hasRequiredTsv = 1;
  (function(module, exports) {
    (function() {
      ace.require(["ace/snippets/tsv"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(tsv$2);
  return tsv$2.exports;
}
var tsvExports = requireTsv();
const tsv = /* @__PURE__ */ getDefaultExportFromCjs(tsvExports);
const tsv$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: tsv
}, [tsvExports]);
export {
  tsv$1 as t
};
