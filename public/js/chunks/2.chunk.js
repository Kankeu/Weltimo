webpackJsonp([2],{

/***/ 284:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(285);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(11)("27862fd3", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-43998c28\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./User.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-43998c28\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./User.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 285:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "\n.input-group--solo .input-group__input .input-group__append-icon[data-v-43998c28]{display:none !important\n}\n", ""]);

// exports


/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__route_Route_vue__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__route_Route_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__route_Route_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    components: { route: __WEBPACK_IMPORTED_MODULE_0__route_Route_vue___default.a },
    data: function data() {
        return {
            darked: false,
            drawer: null
        };
    },

    computed: {
        user: function user() {
            return this.$store.state.user.user;
        }
    },
    methods: {
        logout: function logout() {
            var _this = this;

            this.$http.get('/log_out').then(function (response) {
                if (response.body.status === 1) {
                    _this.$store.dispatch("user/delete");
                    _this.$router.push('/');
                }
            });
        }
    }
});

/***/ }),

/***/ 287:
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
                "v-list-group",
                { attrs: { value: "true" } },
                [
                  _c(
                    "v-list-tile",
                    {
                      attrs: { slot: "item" },
                      on: { click: function($event) {} },
                      slot: "item"
                    },
                    [
                      _c(
                        "v-list-tile-action",
                        [_c("v-icon", [_vm._v("dashboard")])],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-list-tile-content",
                        [_c("v-list-tile-title", [_vm._v("Dashboard")])],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-list-tile-action",
                        [_c("v-icon", [_vm._v("keyboard_arrow_down")])],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-list-tile",
                    { attrs: { to: "/user", exact: "" } },
                    [
                      _c(
                        "v-list-tile-action",
                        [_c("v-icon", [_vm._v("home")])],
                        1
                      ),
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
                    { on: { click: function($event) {} } },
                    [
                      _c(
                        "v-list-tile-action",
                        [_c("v-icon", [_vm._v("email")])],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-list-tile-content",
                        [_c("v-list-tile-title", [_vm._v("Box")])],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-list-tile",
                    { attrs: { to: "/user/profile" } },
                    [
                      _c(
                        "v-list-tile-action",
                        [
                          _c("v-avatar", { attrs: { size: "30px" } }, [
                            _c("img", {
                              attrs: { src: _vm.user.avatar, alt: "avatar" }
                            })
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-list-tile-content",
                        [_c("v-list-tile-title", [_vm._v("Profile")])],
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
                "v-list-group",
                [
                  _c(
                    "v-list-tile",
                    {
                      attrs: { slot: "item" },
                      on: { click: function($event) {} },
                      slot: "item"
                    },
                    [
                      _c(
                        "v-list-tile-action",
                        [_c("v-icon", [_vm._v("book")])],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-list-tile-content",
                        [_c("v-list-tile-title", [_vm._v("Courses")])],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-list-tile-action",
                        [_c("v-icon", [_vm._v("keyboard_arrow_down")])],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-list-tile",
                    { on: { click: function($event) {} } },
                    [
                      _c(
                        "v-list-tile-content",
                        [_c("v-list-tile-title", [_vm._v("Exercises")])],
                        1
                      ),
                      _vm._v(" "),
                      _c("v-list-tile-action", [_c("v-icon")], 1)
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-list-tile",
                    { on: { click: function($event) {} } },
                    [
                      _c(
                        "v-list-tile-content",
                        [_c("v-list-tile-title", [_vm._v("Tests")])],
                        1
                      ),
                      _vm._v(" "),
                      _c("v-list-tile-action", [_c("v-icon")], 1)
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-list-tile",
                    { on: { click: function($event) {} } },
                    [
                      _c(
                        "v-list-tile-content",
                        [_c("v-list-tile-title", [_vm._v("Programms")])],
                        1
                      ),
                      _vm._v(" "),
                      _c("v-list-tile-action", [_c("v-icon")], 1)
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-list-group",
                [
                  _c(
                    "v-list-tile",
                    {
                      attrs: { slot: "item" },
                      on: { click: function($event) {} },
                      slot: "item"
                    },
                    [
                      _c(
                        "v-list-tile-action",
                        [_c("v-icon", [_vm._v("school")])],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-list-tile-content",
                        [_c("v-list-tile-title", [_vm._v("Universities")])],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-list-tile-action",
                        [_c("v-icon", [_vm._v("keyboard_arrow_down")])],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-list-tile",
                    { on: { click: function($event) {} } },
                    [
                      _c(
                        "v-list-tile-content",
                        [_c("v-list-tile-title", [_vm._v("Germany")])],
                        1
                      ),
                      _vm._v(" "),
                      _c("v-list-tile-action", [_c("v-icon")], 1)
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-list-tile",
                    { on: { click: function($event) {} } },
                    [
                      _c(
                        "v-list-tile-content",
                        [_c("v-list-tile-title", [_vm._v("Austria")])],
                        1
                      ),
                      _vm._v(" "),
                      _c("v-list-tile-action", [_c("v-icon")], 1)
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-list-tile",
                    { on: { click: function($event) {} } },
                    [
                      _c(
                        "v-list-tile-content",
                        [_c("v-list-tile-title", [_vm._v("Swiss")])],
                        1
                      ),
                      _vm._v(" "),
                      _c("v-list-tile-action", [_c("v-icon")], 1)
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-list-group",
                [
                  _c(
                    "v-list-tile",
                    {
                      attrs: { slot: "item" },
                      on: { click: function($event) {} },
                      slot: "item"
                    },
                    [
                      _c(
                        "v-list-tile-action",
                        [_c("v-icon", [_vm._v("apps")])],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-list-tile-content",
                        [_c("v-list-tile-title", [_vm._v("More")])],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-list-tile-action",
                        [_c("v-icon", [_vm._v("keyboard_arrow_down")])],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-list-tile",
                    { on: { click: function($event) {} } },
                    [
                      _c(
                        "v-list-tile-action",
                        [_c("v-icon", [_vm._v("whatshot")])],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-list-tile-content",
                        [_c("v-list-tile-title", [_vm._v("Actualities")])],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-list-tile",
                    { on: { click: function($event) {} } },
                    [
                      _c(
                        "v-list-tile-action",
                        [_c("v-icon", [_vm._v("school")])],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-list-tile-content",
                        [_c("v-list-tile-title", [_vm._v("Scholarship")])],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-list-tile",
                    { on: { click: function($event) {} } },
                    [
                      _c(
                        "v-list-tile-action",
                        [_c("v-icon", [_vm._v("forum")])],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-list-tile-content",
                        [_c("v-list-tile-title", [_vm._v("Forum")])],
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
                "v-list-group",
                [
                  _c(
                    "v-list-tile",
                    {
                      attrs: { slot: "item" },
                      on: { click: function($event) {} },
                      slot: "item"
                    },
                    [
                      _c(
                        "v-list-tile-action",
                        [_c("v-icon", [_vm._v("settings")])],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-list-tile-content",
                        [_c("v-list-tile-title", [_vm._v("Parameters")])],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-list-tile-action",
                        [_c("v-icon", [_vm._v("keyboard_arrow_down")])],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-list-tile",
                    { on: { click: function($event) {} } },
                    [
                      _c(
                        "v-list-tile-action",
                        [_c("v-icon", [_vm._v("person")])],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-list-tile-content",
                        [_c("v-list-tile-title", [_vm._v("Account")])],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-list-tile",
                    { on: { click: _vm.logout } },
                    [
                      _c(
                        "v-list-tile-action",
                        [_c("v-icon", [_vm._v("exit_to_app")])],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-list-tile-content",
                        [_c("v-list-tile-title", [_vm._v("Log out")])],
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
                "v-list-group",
                [
                  _c(
                    "v-list-tile",
                    {
                      attrs: { slot: "item" },
                      on: { click: function($event) {} },
                      slot: "item"
                    },
                    [
                      _c(
                        "v-list-tile-action",
                        [_c("v-icon", [_vm._v("settings_applications")])],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-list-tile-content",
                        [_c("v-list-tile-title", [_vm._v("Application")])],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-list-tile-action",
                        [_c("v-icon", [_vm._v("keyboard_arrow_down")])],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-list-tile",
                    { on: { click: function($event) {} } },
                    [
                      _c(
                        "v-list-tile-action",
                        [_c("v-icon", [_vm._v("report")])],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-list-tile-content",
                        [_c("v-list-tile-title", [_vm._v("Signal bug")])],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-list-tile",
                    { on: { click: function($event) {} } },
                    [
                      _c(
                        "v-list-tile-action",
                        [_c("v-icon", [_vm._v("info")])],
                        1
                      ),
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
                    { on: { click: function($event) {} } },
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
                                    _vm._v(
                                      "Change the background color to black"
                                    )
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
                "v-btn",
                { attrs: { icon: "" } },
                [_c("v-icon", [_vm._v("notifications")])],
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
    require("vue-hot-reload-api")      .rerender("data-v-43998c28", module.exports)
  }
}

/***/ }),

/***/ 39:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(284)
}
var normalizeComponent = __webpack_require__(10)
/* script */
var __vue_script__ = __webpack_require__(286)
/* template */
var __vue_template__ = __webpack_require__(287)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-43998c28"
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
Component.options.__file = "resources/assets/js/components/user/User.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-43998c28", Component.options)
  } else {
    hotAPI.reload("data-v-43998c28", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});