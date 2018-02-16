webpackJsonp([20],{

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({});

/***/ }),

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-layout",
    { attrs: { row: "" } },
    [
      _c("v-flex", { attrs: { lg2: "", xs0: "" } }),
      _vm._v(" "),
      _c(
        "v-flex",
        { attrs: { lg8: "", xs12: "" } },
        [
          _c(
            "v-container",
            { attrs: { "grid-list-md": "", "text-xs-left": "", fluid: "" } },
            [
              _c(
                "v-layout",
                { attrs: { column: "" } },
                _vm._l(5, function(n) {
                  return _c(
                    "v-flex",
                    { key: n, attrs: { lg12: "" } },
                    [
                      _c(
                        "v-card",
                        { attrs: { to: "/", hover: "" } },
                        [
                          _c("v-card-media", {
                            attrs: {
                              src:
                                "https://www.tu-ilmenau.de/fileadmin/startseite/Fotos_330x614px5.jpg",
                              height: "200px"
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "v-card-title",
                            { attrs: { "primary-title": "" } },
                            [
                              _c("div", [
                                _c("h3", { staticClass: "headline mb-0" }, [
                                  _vm._v("Ilmenau")
                                ]),
                                _vm._v(" "),
                                _c("div", [
                                  _vm._v(
                                    "Located two hours south of Sydney in the "
                                  ),
                                  _c("br"),
                                  _vm._v(
                                    "Southern Highlands of New South Wales, ..."
                                  )
                                ])
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-card-actions",
                            [
                              _c(
                                "v-btn",
                                { attrs: { flat: "", color: "orange" } },
                                [_vm._v("Share")]
                              ),
                              _vm._v(" "),
                              _c(
                                "v-btn",
                                { attrs: { flat: "", color: "orange" } },
                                [_vm._v("Explore")]
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                })
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("v-flex", { attrs: { lg2: "", xs0: "" } })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-6b03cb9a", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_env_modules_false_targets_browsers_last_2_versions_safari_7_debug_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_syntax_dynamic_import_node_modules_vue_loader_lib_selector_type_script_index_0_Home_vue__ = __webpack_require__(207);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6b03cb9a_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Home_vue__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(3);
var disposed = false
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_env_modules_false_targets_browsers_last_2_versions_safari_7_debug_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_syntax_dynamic_import_node_modules_vue_loader_lib_selector_type_script_index_0_Home_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6b03cb9a_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Home_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6b03cb9a_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Home_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/user/university/Home.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6b03cb9a", Component.options)
  } else {
    hotAPI.reload("data-v-6b03cb9a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

});