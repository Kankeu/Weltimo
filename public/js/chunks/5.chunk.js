webpackJsonp([5],{

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(73)
}
var normalizeComponent = __webpack_require__(11)
/* script */
var __vue_script__ = __webpack_require__(75)
/* template */
var __vue_template__ = __webpack_require__(76)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-17dc0336"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/Info.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-17dc0336", Component.options)
  } else {
    hotAPI.reload("data-v-17dc0336", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 73:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(74);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(12)("81285b74", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-17dc0336\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./Info.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-17dc0336\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./Info.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 74:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "\n.typo[data-v-17dc0336]{\n    font-family: monospace\n}\n.center[data-v-17dc0336]{\n    padding: 25px\n}\n", ""]);

// exports


/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
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

/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ 76:
/***/ (function(module, exports, __webpack_require__) {

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
                                        attrs: { color: "cyan darken-2" }
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
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-17dc0336", module.exports)
  }
}

/***/ })

});