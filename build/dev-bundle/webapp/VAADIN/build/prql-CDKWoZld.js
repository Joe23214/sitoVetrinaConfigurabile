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
var prql$2 = { exports: {} };
var hasRequiredPrql;
function requirePrql() {
  if (hasRequiredPrql) return prql$2.exports;
  hasRequiredPrql = 1;
  (function(module, exports) {
    (function() {
      ace.require(["ace/snippets/prql"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(prql$2);
  return prql$2.exports;
}
var prqlExports = requirePrql();
const prql = /* @__PURE__ */ getDefaultExportFromCjs(prqlExports);
const prql$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: prql
}, [prqlExports]);
export {
  prql$1 as p
};
