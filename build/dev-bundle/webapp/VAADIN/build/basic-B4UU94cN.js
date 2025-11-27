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
var basic$2 = { exports: {} };
var hasRequiredBasic;
function requireBasic() {
  if (hasRequiredBasic) return basic$2.exports;
  hasRequiredBasic = 1;
  (function(module, exports) {
    (function() {
      ace.require(["ace/snippets/basic"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(basic$2);
  return basic$2.exports;
}
var basicExports = requireBasic();
const basic = /* @__PURE__ */ getDefaultExportFromCjs(basicExports);
const basic$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: basic
}, [basicExports]);
export {
  basic$1 as b
};
