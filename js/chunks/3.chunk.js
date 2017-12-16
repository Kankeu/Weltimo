webpackJsonp([3],{

/***/ 211:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(222)
}
var normalizeComponent = __webpack_require__(10)
/* script */
var __vue_script__ = __webpack_require__(224)
/* template */
var __vue_template__ = __webpack_require__(225)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-4cd393cc"
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
Component.options.__file = "resources/assets/js/components/app/App.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4cd393cc", Component.options)
  } else {
    hotAPI.reload("data-v-4cd393cc", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 222:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(223);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(11)("e1493706", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4cd393cc\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./App.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4cd393cc\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./App.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 223:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, "\n.input-group--solo .input-group__input .input-group__append-icon[data-v-4cd393cc]{display:none !important\n}\n", ""]);

// exports


/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__route_Route__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__route_Route___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__route_Route__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    components: { route: __WEBPACK_IMPORTED_MODULE_0__route_Route___default.a },
    data: function data() {
        return {
            drawer: null,
            dialogLog_on: false,
            visibility: false,
            darked: false,
            error: null,
            loading: false,
            alertLogin: true,
            data: {
                email: null,
                password: null
            }
        };
    },
    methods: {
        loginWithToken: function loginWithToken() {
            var _this = this;

            this.$http.get('/log_in').then(function (response) {
                if (response.body.id) {
                    _this.$store.dispatch("user/save", response.body);
                    _this.$router.push('/user');
                } else {
                    _this.dialogLog_on = true;
                }
            });
        },
        login: function login() {
            var _this2 = this;

            this.$validator.validateAll().then(function (validated) {
                if (validated) {
                    _this2.loading = true;
                    _this2.$http.post('/log_in', _this2.data).then(function (response) {
                        if (response.body.id) {
                            _this2.$store.dispatch("user/save", response.body);
                            _this2.dialogLog_on = false;
                            _this2.$router.push('/user');
                        } else if (response.body.status === 0) {
                            _this2.error = response.body.message;
                            _this2.alertLogin = true;
                        }
                        _this2.loading = false;
                    });
                }
            });
        }
    }
});

/***/ }),

/***/ 225:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-app",
    { attrs: { id: "inspire", dark: _vm.darked } },
    [
      _c(
        "v-navigation-drawer",
        {
          attrs: { fixed: "", clipped: "", app: "" },
          model: {
            value: _vm.drawer,
            callback: function($$v) {
              _vm.drawer = $$v
            },
            expression: "drawer"
          }
        },
        [
          _c(
            "v-list",
            { attrs: { dense: "" } },
            [
              _c(
                "v-list-tile",
                { attrs: { to: "/", exact: "" } },
                [
                  _c("v-list-tile-action", [_c("v-icon", [_vm._v("home")])], 1),
                  _vm._v(" "),
                  _c(
                    "v-list-tile-content",
                    [_c("v-list-tile-title", [_vm._v("Home")])],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-list-tile",
                { attrs: { to: "/sign_in" } },
                [
                  _c(
                    "v-list-tile-action",
                    [_c("v-icon", [_vm._v("account_circle")])],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-list-tile-content",
                    [_c("v-list-tile-title", [_vm._v("Sign in")])],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-list-tile",
                { attrs: { to: "/actus" } },
                [
                  _c(
                    "v-list-tile-action",
                    [_c("v-icon", [_vm._v("whatshot")])],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-list-tile-content",
                    [_c("v-list-tile-title", [_vm._v("Actuality")])],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-list-tile",
                { attrs: { to: "/about" } },
                [
                  _c("v-list-tile-action", [_c("v-icon", [_vm._v("info")])], 1),
                  _vm._v(" "),
                  _c(
                    "v-list-tile-content",
                    [_c("v-list-tile-title", [_vm._v("About us")])],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-list-tile",
                [
                  _c(
                    "v-list-tile-action",
                    [_c("v-icon", [_vm._v("invert_colors")])],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-list-tile-content",
                    [
                      _c(
                        "v-list-tile-title",
                        [
                          _c(
                            "v-tooltip",
                            { attrs: { top: "" } },
                            [
                              _c("v-switch", {
                                attrs: { slot: "activator" },
                                slot: "activator",
                                model: {
                                  value: _vm.darked,
                                  callback: function($$v) {
                                    _vm.darked = $$v
                                  },
                                  expression: "darked"
                                }
                              }),
                              _vm._v(" "),
                              _c("span", [
                                _vm._v("Change the background color to black")
                              ])
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
      ),
      _vm._v(" "),
      _c(
        "v-toolbar",
        {
          attrs: {
            color: "primary",
            dark: "",
            app: "",
            "clipped-left": "",
            fixed: ""
          }
        },
        [
          _c(
            "v-toolbar-title",
            {
              staticClass: "ml-0 pl-3",
              style: _vm.$vuetify.breakpoint.smAndUp
                ? "width: 300px; min-width: 250px"
                : "min-width: 72px"
            },
            [
              _c("v-toolbar-side-icon", {
                on: {
                  click: function($event) {
                    $event.stopPropagation()
                    _vm.drawer = !_vm.drawer
                  }
                }
              }),
              _vm._v(" "),
              _c("span", { staticClass: "hidden-xs-only" }, [_vm._v("Weltimo")])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-flex",
            { attrs: { lg6: "", xs6: "" } },
            [
              _c("v-select", {
                attrs: {
                  light: "",
                  solo: "",
                  placeholder: "Search",
                  "prepend-icon": "search",
                  autocomplete: ""
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "d-flex align-center",
              staticStyle: { "margin-left": "auto" }
            },
            [
              _c(
                "v-dialog",
                {
                  attrs: { scrollable: "", "max-width": "300px" },
                  model: {
                    value: _vm.dialogLog_on,
                    callback: function($$v) {
                      _vm.dialogLog_on = $$v
                    },
                    expression: "dialogLog_on"
                  }
                },
                [
                  _c(
                    "v-btn",
                    {
                      attrs: { slot: "activator", icon: "" },
                      on: { click: _vm.loginWithToken },
                      slot: "activator"
                    },
                    [_c("v-icon", [_vm._v("person")])],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-card",
                    [
                      _vm.loading
                        ? _c("v-progress-linear", {
                            staticStyle: { margin: "0" },
                            attrs: { indeterminate: true }
                          })
                        : _vm._e(),
                      _vm._v(" "),
                      _c("v-card-title", [
                        _c("span", { staticClass: "headline" }, [
                          _vm._v("Log in")
                        ])
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-card-text",
                        [
                          _vm._v("ff\n                        "),
                          _vm.error
                            ? _c(
                                "v-alert",
                                {
                                  attrs: {
                                    color: "error",
                                    icon: "warning",
                                    outline: "",
                                    dismissible: ""
                                  },
                                  model: {
                                    value: _vm.alertLogin,
                                    callback: function($$v) {
                                      _vm.alertLogin = $$v
                                    },
                                    expression: "alertLogin"
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                            " +
                                      _vm._s(_vm.error) +
                                      "\n                        "
                                  )
                                ]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _c(
                            "v-container",
                            { attrs: { "grid-list-md": "" } },
                            [
                              _c(
                                "v-layout",
                                { attrs: { wrap: "" } },
                                [
                                  _c(
                                    "v-flex",
                                    { attrs: { xs12: "" } },
                                    [
                                      _c("v-text-field", {
                                        directives: [
                                          {
                                            name: "validate",
                                            rawName: "v-validate",
                                            value: "required|email",
                                            expression: "'required|email'"
                                          }
                                        ],
                                        attrs: {
                                          label: "Email",
                                          "error-messages": _vm.errors.collect(
                                            "email"
                                          ),
                                          "data-vv-name": "email",
                                          required: ""
                                        },
                                        model: {
                                          value: _vm.data.email,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.data,
                                              "email",
                                              typeof $$v === "string"
                                                ? $$v.trim()
                                                : $$v
                                            )
                                          },
                                          expression: "data.email"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-flex",
                                    { attrs: { xs12: "" } },
                                    [
                                      _c("v-text-field", {
                                        directives: [
                                          {
                                            name: "validate",
                                            rawName: "v-validate",
                                            value: "required|min:6",
                                            expression: "'required|min:6'"
                                          }
                                        ],
                                        attrs: {
                                          label: "Password",
                                          type: "password",
                                          "append-icon": _vm.visibility
                                            ? "visibility"
                                            : "visibility_off",
                                          "append-icon-cb": function() {
                                            return (_vm.visibility = !_vm.visibility)
                                          },
                                          type: _vm.visibility
                                            ? "text"
                                            : "password",
                                          "error-messages": _vm.errors.collect(
                                            "password"
                                          ),
                                          "data-vv-name": "password",
                                          required: ""
                                        },
                                        model: {
                                          value: _vm.data.password,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.data,
                                              "password",
                                              typeof $$v === "string"
                                                ? $$v.trim()
                                                : $$v
                                            )
                                          },
                                          expression: "data.password"
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
                        "v-card-actions",
                        [
                          _c("v-spacer"),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            {
                              attrs: { color: "blue darken-1", flat: "" },
                              nativeOn: {
                                click: function($event) {
                                  _vm.dialogLog_on = false
                                }
                              }
                            },
                            [_vm._v("Close")]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            {
                              attrs: { color: "blue darken-1", flat: "" },
                              nativeOn: {
                                click: function($event) {
                                  _vm.login($event)
                                }
                              }
                            },
                            [_vm._v("Save")]
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
      ),
      _vm._v(" "),
      _c("v-content", [_c("route")], 1),
      _vm._v(" "),
      _c(
        "v-footer",
        { staticClass: "pa-3" },
        [
          _c("v-spacer"),
          _vm._v(" "),
          _c("div", [_vm._v("Copyright © " + _vm._s(new Date().getFullYear()))])
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
    require("vue-hot-reload-api")      .rerender("data-v-4cd393cc", module.exports)
  }
}

/***/ })

});