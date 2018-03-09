webpackJsonp([70],{

/***/ 228:
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

/***/ 381:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(382);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(4).default
var update = add("11761ab6", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-153ea313\",\"scoped\":true,\"sourceMap\":false}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Info.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-153ea313\",\"scoped\":true,\"sourceMap\":false}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Info.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 382:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "\n.typo[data-v-153ea313]{\n    font-family: monospace\n}\n.center[data-v-153ea313]{\n    padding: 25px\n}\n", ""]);

// exports


/***/ }),

/***/ 383:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-container",
    { attrs: { fluid: "" } },
    [
      _c(
        "v-layout",
        { attrs: { row: "" } },
        [
          _c("v-flex", { attrs: { xs0: "", md0: "", lg0: "" } }),
          _vm._v(" "),
          _c(
            "v-flex",
            { attrs: { xs0: "", md0: "", lg0: "" } },
            [
              _c(
                "v-card",
                { attrs: { flat: "" } },
                [
                  _c(
                    "v-parallax",
                    { attrs: { src: "/img/default/logoLg.jpg" } },
                    [
                      _c(
                        "v-layout",
                        {
                          attrs: {
                            column: "",
                            "align-center": "",
                            "justify-center": ""
                          }
                        },
                        [
                          _c("h1", { staticClass: "white--text" }, [
                            _vm._v("Weltimo")
                          ]),
                          _vm._v(" "),
                          _c("h4", { staticClass: "white--text" }, [
                            _vm._v("Join the community!")
                          ])
                        ]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("v-card-title", [
                    _c(
                      "div",
                      [
                        _c(
                          "v-layout",
                          {
                            staticClass: "center",
                            attrs: {
                              column: "",
                              "align-center": "",
                              "justify-center": ""
                            }
                          },
                          [
                            _c("p", { staticClass: "typo" }, [
                              _c("b", [_vm._v("Weltimo")]),
                              _vm._v(" is a platform developed by "),
                              _c("b", [_vm._v("Kankeu Ivan, Loïc et Dannick")]),
                              _vm._v(
                                " for\n                                the purpose of facilitating the learning of the German language.\n                                indeed, this platform aims not only to teach you this language\n                                but also to love it. This is why our educational system is\n                                entirely playful and accessible to the general public.\n                            "
                              )
                            ])
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "v-container",
                          { attrs: { fluid: "", "grid-list-lg": "" } },
                          [
                            _c("h1", [_vm._v("Team dev")]),
                            _vm._v(" "),
                            _c(
                              "v-layout",
                              { attrs: { row: "", wrap: "" } },
                              [
                                _c(
                                  "v-flex",
                                  { attrs: { xs12: "", lg4: "" } },
                                  [
                                    _c(
                                      "v-card",
                                      {
                                        staticClass: "white--text",
                                        attrs: { color: "blue-grey darken-2" }
                                      },
                                      [
                                        _c(
                                          "v-container",
                                          {
                                            attrs: {
                                              fluid: "",
                                              "grid-list-lg": ""
                                            }
                                          },
                                          [
                                            _c(
                                              "v-layout",
                                              { attrs: { row: "" } },
                                              [
                                                _c(
                                                  "v-flex",
                                                  { attrs: { xs7: "" } },
                                                  [
                                                    _c("div", [
                                                      _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "headline"
                                                        },
                                                        [_vm._v("Loïc")]
                                                      ),
                                                      _vm._v(" "),
                                                      _c("div", [
                                                        _vm._v(
                                                          "Concepteur, développeur"
                                                        )
                                                      ])
                                                    ])
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "v-flex",
                                                  { attrs: { xs5: "" } },
                                                  [
                                                    _c("v-card-media", {
                                                      attrs: {
                                                        src:
                                                          "/img/default/avatar.jpg",
                                                        height: "125px",
                                                        contain: ""
                                                      }
                                                    })
                                                  ],
                                                  1
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
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-flex",
                                  { attrs: { xs12: "", lg4: "" } },
                                  [
                                    _c(
                                      "v-card",
                                      {
                                        staticClass: "white--text",
                                        attrs: {
                                          color: "cyan darken-2",
                                          href: "https://twitter.com/Ikankeu12",
                                          target: "_blank"
                                        }
                                      },
                                      [
                                        _c(
                                          "v-container",
                                          {
                                            attrs: {
                                              fluid: "",
                                              "grid-list-lg": ""
                                            }
                                          },
                                          [
                                            _c(
                                              "v-layout",
                                              { attrs: { row: "" } },
                                              [
                                                _c(
                                                  "v-flex",
                                                  { attrs: { xs7: "" } },
                                                  [
                                                    _c("div", [
                                                      _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "headline"
                                                        },
                                                        [_vm._v("Ivan Kankeu")]
                                                      ),
                                                      _vm._v(" "),
                                                      _c("div", [
                                                        _vm._v(
                                                          "Concepteur, développeur"
                                                        )
                                                      ])
                                                    ])
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "v-flex",
                                                  { attrs: { xs5: "" } },
                                                  [
                                                    _c("v-card-media", {
                                                      attrs: {
                                                        src:
                                                          "/img/default/author1.jpg",
                                                        height: "125px",
                                                        contain: ""
                                                      }
                                                    })
                                                  ],
                                                  1
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
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-flex",
                                  { attrs: { xs12: "", lg4: "" } },
                                  [
                                    _c(
                                      "v-card",
                                      {
                                        staticClass: "white--text",
                                        attrs: { color: "purple" }
                                      },
                                      [
                                        _c(
                                          "v-container",
                                          {
                                            attrs: {
                                              fluid: "",
                                              "grid-list-lg": ""
                                            }
                                          },
                                          [
                                            _c(
                                              "v-layout",
                                              { attrs: { row: "" } },
                                              [
                                                _c(
                                                  "v-flex",
                                                  { attrs: { xs7: "" } },
                                                  [
                                                    _c("div", [
                                                      _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "headline"
                                                        },
                                                        [_vm._v("Dannick")]
                                                      ),
                                                      _vm._v(" "),
                                                      _c("div", [
                                                        _vm._v(
                                                          "Concepteur, développeur"
                                                        )
                                                      ])
                                                    ])
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "v-flex",
                                                  { attrs: { xs5: "" } },
                                                  [
                                                    _c("v-card-media", {
                                                      attrs: {
                                                        src:
                                                          "/img/default/avatar.jpg",
                                                        height: "125px",
                                                        contain: ""
                                                      }
                                                    })
                                                  ],
                                                  1
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
                                  ],
                                  1
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
                  ])
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("v-flex", { attrs: { xs0: "", md0: "", lg0: "" } })
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-153ea313", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_env_modules_false_targets_browsers_last_2_versions_safari_7_debug_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_syntax_dynamic_import_node_modules_vue_loader_lib_selector_type_script_index_0_Info_vue__ = __webpack_require__(228);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_153ea313_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Info_vue__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(3);
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(381)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-153ea313"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_env_modules_false_targets_browsers_last_2_versions_safari_7_debug_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_syntax_dynamic_import_node_modules_vue_loader_lib_selector_type_script_index_0_Info_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_153ea313_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Info_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_153ea313_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Info_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/app/Info.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-153ea313", Component.options)
  } else {
    hotAPI.reload("data-v-153ea313", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

});