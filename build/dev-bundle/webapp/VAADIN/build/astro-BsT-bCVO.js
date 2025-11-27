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
var astro$2 = { exports: {} };
var hasRequiredAstro;
function requireAstro() {
  if (hasRequiredAstro) return astro$2.exports;
  hasRequiredAstro = 1;
  (function(module, exports) {
    (function() {
      ace.require(["ace/snippets/astro"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(astro$2);
  return astro$2.exports;
}
var astroExports = requireAstro();
const astro = /* @__PURE__ */ getDefaultExportFromCjs(astroExports);
const astro$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: astro
}, [astroExports]);
export {
  astro$1 as a
};
