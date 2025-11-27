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
var cuttlefish$2 = { exports: {} };
var hasRequiredCuttlefish;
function requireCuttlefish() {
  if (hasRequiredCuttlefish) return cuttlefish$2.exports;
  hasRequiredCuttlefish = 1;
  (function(module, exports) {
    (function() {
      ace.require(["ace/snippets/cuttlefish"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(cuttlefish$2);
  return cuttlefish$2.exports;
}
var cuttlefishExports = requireCuttlefish();
const cuttlefish = /* @__PURE__ */ getDefaultExportFromCjs(cuttlefishExports);
const cuttlefish$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: cuttlefish
}, [cuttlefishExports]);
export {
  cuttlefish$1 as c
};
