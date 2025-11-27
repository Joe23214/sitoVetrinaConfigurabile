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
var vue$2 = { exports: {} };
var hasRequiredVue;
function requireVue() {
  if (hasRequiredVue) return vue$2.exports;
  hasRequiredVue = 1;
  (function(module, exports) {
    (function() {
      ace.require(["ace/snippets/vue"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(vue$2);
  return vue$2.exports;
}
var vueExports = requireVue();
const vue = /* @__PURE__ */ getDefaultExportFromCjs(vueExports);
const vue$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: vue
}, [vueExports]);
export {
  vue$1 as v
};
