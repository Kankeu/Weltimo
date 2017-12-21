webpackJsonp([2],{

/***/ 287:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(288);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(12)("27862fd3", content, false);
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

/***/ 288:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "\n.input-group--solo .input-group__input .input-group__append-icon[data-v-43998c28]{display:none !important\n}\n", ""]);

// exports


/***/ }),

/***/ 289:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(290);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(12)("51b7b796", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-43998c28\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=1&bustCache!./User.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-43998c28\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=1&bustCache!./User.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 290:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "\n.card--flex-toolbar {\n    margin-top: 64px;\n}\n#menu{\n    margin-top:128.49px !important;\n    position: fixed;\n}\n", ""]);

// exports


/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__route_Route_vue__ = __webpack_require__(14);
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
//
//
//
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
            drawer: true
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
    },
    watch: {
        darked: function darked(data) {
            console.log(data);
            if (data) {
                document.querySelectorAll('.emojionearea-editor').map(function (elt) {
                    elt.style.color = "white";
                });
            } else {
                document.querySelectorAll('.emojionearea-editor').map(function (elt) {
                    elt.style.color = "#424242";
                });
            }
        }
    }
});

/***/ }),

/***/ 292:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-app",
    { attrs: { dark: _vm.darked } },
    [
      _c(
        "v-card",
        {
          attrs: {
            dark: _vm.darked,
            color: _vm.darked ? null : "grey lighten-5",
            flat: ""
          }
        },
        [
          _c(
            "v-toolbar",
            {
              attrs: {
                dark: _vm.darked,
                color: _vm.darked ? null : "primary",
                prominent: "",
                fixed: "",
                flat: "",
                extended: ""
              }
            },
            [
              _c("v-toolbar-side-icon", {
                staticClass: "white--text",
                on: {
                  click: function($event) {
                    _vm.drawer = !_vm.drawer
                  }
                }
              }),
              _vm._v(" "),
              _c("v-toolbar-title", { staticClass: "white--text" }, [
                _vm._v("Weltimo")
              ]),
              _vm._v(" "),
              _c("v-spacer"),
              _vm._v(" "),
              _c(
                "v-btn",
                { staticClass: "white--text", attrs: { icon: "" } },
                [_c("v-icon", [_vm._v("notifications")])],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-layout",
            { attrs: { row: "" } },
            [
              _c(
                "v-flex",
                { attrs: { xs8: "", "offset-xs2": "" } },
                [
                  _c(
                    "v-card",
                    {
                      staticClass: "card--flex-toolbar",
                      attrs: { dark: _vm.darked }
                    },
                    [
                      _c(
                        "v-toolbar",
                        {
                          staticStyle: {
                            "z-index": "2",
                            width: "66.66666666666666%",
                            position: "fixed"
                          },
                          attrs: {
                            dark: "",
                            card: "",
                            color: _vm.darked ? null : "white",
                            prominent: ""
                          }
                        },
                        [
                          _c(
                            "v-toolbar-title",
                            { staticClass: "body-2 grey--text" },
                            [_vm._v(_vm._s(_vm.$route.name))]
                          ),
                          _vm._v(" "),
                          _c("v-spacer"),
                          _vm._v(" "),
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
                      _c("v-divider"),
                      _vm._v(" "),
                      _c("route"),
                      _vm._v(" "),
                      _c("v-card-text")
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
        "v-navigation-drawer",
        {
          attrs: {
            id: "menu",
            permanent: "",
            dark: _vm.darked,
            "mini-variant": _vm.drawer
          },
          on: {
            "update:miniVariant": function($event) {
              _vm.drawer = $event
            }
          }
        },
        [
          _c(
            "v-toolbar",
            { staticClass: "transparent", attrs: { flat: "" } },
            [
              _c(
                "v-list",
                { staticClass: "pa-0" },
                [
                  _c(
                    "v-list-tile",
                    { attrs: { avatar: "" } },
                    [
                      _c("v-list-tile-avatar", [
                        _c("img", { attrs: { src: _vm.user.avatar } })
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-list-tile-content",
                        [
                          _c("v-list-tile-title", [
                            _vm._v(
                              _vm._s(_vm.user.name + " " + _vm.user.forename)
                            )
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-list-tile-action",
                        [
                          _c(
                            "v-btn",
                            {
                              attrs: { icon: "" },
                              nativeOn: {
                                click: function($event) {
                                  $event.stopPropagation()
                                  _vm.drawer = !_vm.drawer
                                }
                              }
                            },
                            [_c("v-icon", [_vm._v("chevron_left")])],
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
                        [_c("v-icon", [_vm._v("bug_report")])],
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

/***/ 43:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(287)
  __webpack_require__(289)
}
var normalizeComponent = __webpack_require__(11)
/* script */
var __vue_script__ = __webpack_require__(291)
/* template */
var __vue_template__ = __webpack_require__(292)
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
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});