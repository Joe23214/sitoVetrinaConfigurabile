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
var odin$2 = { exports: {} };
var hasRequiredOdin;
function requireOdin() {
  if (hasRequiredOdin) return odin$2.exports;
  hasRequiredOdin = 1;
  (function(module, exports) {
    (function() {
      ace.require(["ace/snippets/odin"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(odin$2);
  return odin$2.exports;
}
var odinExports = requireOdin();
const odin = /* @__PURE__ */ getDefaultExportFromCjs(odinExports);
const odin$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: odin
}, [odinExports]);
export {
  odin$1 as o
};
