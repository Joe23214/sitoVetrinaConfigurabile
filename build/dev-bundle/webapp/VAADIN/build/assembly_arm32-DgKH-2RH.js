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
var assembly_arm32$2 = { exports: {} };
var hasRequiredAssembly_arm32;
function requireAssembly_arm32() {
  if (hasRequiredAssembly_arm32) return assembly_arm32$2.exports;
  hasRequiredAssembly_arm32 = 1;
  (function(module, exports) {
    (function() {
      ace.require(["ace/snippets/assembly_arm32"], function(m) {
        if (module) {
          module.exports = m;
        }
      });
    })();
  })(assembly_arm32$2);
  return assembly_arm32$2.exports;
}
var assembly_arm32Exports = requireAssembly_arm32();
const assembly_arm32 = /* @__PURE__ */ getDefaultExportFromCjs(assembly_arm32Exports);
const assembly_arm32$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: assembly_arm32
}, [assembly_arm32Exports]);
export {
  assembly_arm32$1 as a
};
