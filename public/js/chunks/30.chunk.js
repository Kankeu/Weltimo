webpackJsonp([30],{

/***/ 302:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(303);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("a16322ce", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-e27976ac\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./Home.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-e27976ac\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./Home.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 303:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "\n.input_forum_category input{\n    min-height: 55px;\n}\n", ""]);

// exports


/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

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

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            categories: [],
            msgAlert: true,
            question: null,
            title: null,
            emailReceive: false,
            defaultCatogories: ['Grammatik', 'Übung', 'Vokabel', 'Konjugation']
        };
    },
    computed: {
        darked: function darked() {
            return this.$store.state.setting.darked;
        },
        questionParsed: function questionParsed() {
            return JSON.stringify([{ text: this.question.trim() }]);
        },
        user: function user() {
            return this.$store.state.user.user;
        }
    },
    methods: {
        publish: function publish() {
            var _this = this;

            if (JSON.parse(this.questionParsed)[0].text.length > 0 && this.categories.length > 0) {
                var data = { question: this.questionParsed, categories: this.categories, title: this.title };
                this.$store.dispatch('setting/setLoading', true);
                this.$http.post('/user/topic/', data).then(function (response) {
                    if (_typeof(response.body) === "object") {
                        var categories = response.body.categories;
                        delete response.body.categories;
                        _this.$store.dispatch("topic/save", response.body);
                        _this.$store.dispatch("category/save", categories);
                    }
                    _this.$store.dispatch('setting/setLoading', false);
                });
            }
        }
    }
});

/***/ }),

/***/ 305:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-container",
    { attrs: { "grid-list-lg": "", "text-xs-left": "", fluid: "" } },
    [
      _c(
        "v-layout",
        { attrs: { column: "" } },
        [
          _c(
            "v-flex",
            { attrs: { lg12: "" } },
            [
              _c(
                "v-alert",
                {
                  attrs: {
                    outline: "",
                    color: _vm.darked || "info",
                    dismissible: "",
                    icon: "info"
                  },
                  model: {
                    value: _vm.msgAlert,
                    callback: function($$v) {
                      _vm.msgAlert = $$v
                    },
                    expression: "msgAlert"
                  }
                },
                [
                  _vm._v(
                    "\n                Hello and Welcome on the Weltimos forum.\n                Here you can help and get from with the whole community\n            "
                  )
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-flex",
            { attrs: { lg12: "" } },
            [
              _c(
                "v-container",
                { attrs: { fluid: "" } },
                [
                  _c("v-text-field", {
                    attrs: {
                      "prepend-icon": "search",
                      label: "search topics in the forum"
                    }
                  })
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-flex",
            { attrs: { lg12: "" } },
            [
              _c(
                "v-card",
                { attrs: { hover: "", to: "/forum/visited" } },
                [
                  _c(
                    "v-card-title",
                    { class: _vm.darked || "grey lighten-2" },
                    [
                      _vm._v(
                        "\n                    Last visited topics\n                "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c("v-divider"),
                  _vm._v(" "),
                  _c(
                    "v-list",
                    {
                      staticStyle: { "max-height": "220px", overflow: "auto" }
                    },
                    _vm._l(5, function(n) {
                      return _c(
                        "div",
                        { key: n },
                        [
                          _c(
                            "v-list-tile",
                            { attrs: { to: " " } },
                            [
                              _c(
                                "v-list-tile-content",
                                [
                                  _c("v-list-tile-title", [
                                    _vm._v("Laravel " + _vm._s(n))
                                  ]),
                                  _vm._v(" "),
                                  _c("v-list-tile-sub-title", [
                                    _vm._v("dsffsdfsdfsfdsfdfs00")
                                  ])
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("v-divider")
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
          _c(
            "v-flex",
            { attrs: { lg12: "" } },
            [
              _c(
                "v-layout",
                { attrs: { row: "" } },
                [
                  _c(
                    "v-flex",
                    { attrs: { lg6: "" } },
                    [
                      _c(
                        "v-card",
                        { attrs: { hover: "", to: "/forum/best" } },
                        [
                          _c(
                            "v-card-title",
                            { class: _vm.darked || "light-blue" },
                            [
                              _vm._v(
                                "\n                            The best Topics\n                        "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c("v-divider"),
                          _vm._v(" "),
                          _c(
                            "v-list",
                            {
                              staticStyle: {
                                "max-height": "300px",
                                overflow: "auto"
                              }
                            },
                            _vm._l(10, function(n) {
                              return _c(
                                "div",
                                { key: n },
                                [
                                  _c(
                                    "v-list-tile",
                                    { attrs: { to: " " } },
                                    [
                                      _c(
                                        "v-list-tile-content",
                                        [
                                          _c("v-list-tile-title", [
                                            _vm._v("Laravel " + _vm._s(n))
                                          ]),
                                          _vm._v(" "),
                                          _c("v-list-tile-sub-title", [
                                            _vm._v("dsffsdfsdfsfdsfdfs00")
                                          ])
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c("v-divider")
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
                  _c(
                    "v-flex",
                    { attrs: { lg6: "" } },
                    [
                      _c(
                        "v-card",
                        { attrs: { hover: "", to: "/forum/news" } },
                        [
                          _c(
                            "v-card-title",
                            { class: _vm.darked || "light-blue darken-1" },
                            [
                              _vm._v(
                                "\n                            The new Topics\n                        "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c("v-divider"),
                          _vm._v(" "),
                          _c(
                            "v-list",
                            {
                              staticStyle: {
                                "max-height": "300px",
                                overflow: "auto"
                              }
                            },
                            _vm._l(10, function(n) {
                              return _c(
                                "div",
                                { key: n },
                                [
                                  _c(
                                    "v-list-tile",
                                    { attrs: { to: " " } },
                                    [
                                      _c(
                                        "v-list-tile-content",
                                        [
                                          _c("v-list-tile-title", [
                                            _vm._v("Laravel " + _vm._s(n))
                                          ]),
                                          _vm._v(" "),
                                          _c("v-list-tile-sub-title", [
                                            _vm._v("dsffsdfsdfsfdsfdfs00")
                                          ])
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c("v-divider")
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
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("v-flex", [_c("h1", [_vm._v(" Create a subject ")])]),
          _vm._v(" "),
          _c(
            "v-flex",
            [
              _c(
                "v-card",
                [
                  _c(
                    "v-layout",
                    { attrs: { column: "" } },
                    [
                      _c(
                        "v-flex",
                        [
                          _c(
                            "v-layout",
                            { attrs: { row: "", wrap: "" } },
                            [
                              _c(
                                "v-flex",
                                { attrs: { lg6: "" } },
                                [
                                  _c(
                                    "v-container",
                                    { attrs: { fluid: "" } },
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          label: "Title",
                                          counter: "190",
                                          maxlength: "190",
                                          box: ""
                                        },
                                        model: {
                                          value: _vm.title,
                                          callback: function($$v) {
                                            _vm.title = $$v
                                          },
                                          expression: "title"
                                        }
                                      })
                                    ],
                                    1
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-flex",
                                { attrs: { lg6: "" } },
                                [
                                  _c(
                                    "v-container",
                                    { attrs: { fluid: "" } },
                                    [
                                      _c("v-select", {
                                        staticClass: "input_forum_category",
                                        attrs: {
                                          label: "Categories",
                                          chips: "",
                                          tags: "",
                                          autocomplete: "",
                                          required: "",
                                          clearable: "",
                                          "deletable-chips": "",
                                          items: _vm.defaultCatogories
                                        },
                                        model: {
                                          value: _vm.categories,
                                          callback: function($$v) {
                                            _vm.categories = $$v
                                          },
                                          expression: "categories"
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
                      ),
                      _vm._v(" "),
                      _c(
                        "v-flex",
                        [
                          _c(
                            "v-container",
                            { attrs: { fluid: "" } },
                            [
                              _c("v-text-field", {
                                attrs: {
                                  box: "",
                                  "multi-line": "",
                                  label: "Question",
                                  required: ""
                                },
                                model: {
                                  value: _vm.question,
                                  callback: function($$v) {
                                    _vm.question = $$v
                                  },
                                  expression: "question"
                                }
                              })
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-flex",
                        { attrs: { lg12: "" } },
                        [
                          _c(
                            "v-container",
                            { attrs: { fluid: "" } },
                            [
                              _c("v-checkbox", {
                                attrs: {
                                  label:
                                    "Receive an email alert when someone answers about it."
                                },
                                model: {
                                  value: _vm.emailReceive,
                                  callback: function($$v) {
                                    _vm.emailReceive = $$v
                                  },
                                  expression: "emailReceive"
                                }
                              })
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-flex",
                        { attrs: { lg12: "" } },
                        [
                          _c(
                            "v-container",
                            { attrs: { fluid: "" } },
                            [
                              _c(
                                "v-btn",
                                {
                                  staticStyle: { "margin-left": "0px" },
                                  attrs: { color: "success", lg: "" },
                                  on: { click: _vm.publish }
                                },
                                [
                                  _vm._v(
                                    "\n                                create the subject\n                            "
                                  )
                                ]
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
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-e27976ac", module.exports)
  }
}

/***/ }),

/***/ 77:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(302)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(304)
/* template */
var __vue_template__ = __webpack_require__(305)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
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
Component.options.__file = "resources/assets/js/components/user/forum/Home.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-e27976ac", Component.options)
  } else {
    hotAPI.reload("data-v-e27976ac", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});