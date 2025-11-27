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
var csv$2 = { exports: {} };
var hasRequiredCsv;
function requireCsv() {
  if (hasRequiredCsv) return csv$2.exports;
  hasRequiredCsv = 1;
  (function(module, exports) {
    (function() {
      ace.require(["ace/snippets/csv"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(csv$2);
  return csv$2.exports;
}
var csvExports = requireCsv();
const csv = /* @__PURE__ */ getDefaultExportFromCjs(csvExports);
const csv$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: csv
}, [csvExports]);
export {
  csv$1 as c
};
