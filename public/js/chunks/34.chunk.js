webpackJsonp([34],{

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var store = function () {
    function store() {
        _classCallCheck(this, store);

        this.state = {
            loading: false,
            users: []
        };
    }

    _createClass(store, [{
        key: "get",
        value: function get(key) {
            return this.state[key];
        }
    }, {
        key: "set",
        value: function set(key, val) {
            this.state[key] = val;
        }
    }, {
        key: "addUser",
        value: function addUser(users) {
            var _state$users;

            (_state$users = this.state.users).push.apply(_state$users, _toConsumableArray(users));
        }
    }, {
        key: "deleteUser",
        value: function deleteUser(id) {
            var user = this.state.users.find(function (user) {
                return user.id === id;
            });
            var index = this.state.users.indexOf(user);
            if (index > -1) this.state.users.splice(index, 1);
        }
    }]);

    return store;
}();

/* harmony default export */ __webpack_exports__["a"] = (new store());

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__users_DialogUser_vue__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__users_DialogUser_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__users_DialogUser_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__users_Store_js__ = __webpack_require__(154);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    components: { dialogUser: __WEBPACK_IMPORTED_MODULE_0__users_DialogUser_vue___default.a },
    computed: {
        darked: function darked() {
            return this.$store.state.setting.darked;
        },
        users: function users() {
            return __WEBPACK_IMPORTED_MODULE_1__users_Store_js__["a" /* default */].get("users");
        }
    },
    data: function data() {
        return {
            openDialogUser: false,
            max25chars: function max25chars(v) {
                return v.length <= 25 || 'Input too long!';
            },
            tmp: '',
            search: '',
            pagination: {},
            headers: [{ text: 'Name', value: 'name', align: 'left' }, { text: 'Forename', value: 'forename' }, { text: 'Email', value: 'email' }, { text: 'Level', value: 'level' }, { text: 'Avatar', value: 'avatar' }, { text: 'Cover', value: 'cover' }, { text: 'Confirmated', value: 'confirmated' }, { text: 'Created at', value: 'created_at' }, { text: 'Updated at', value: 'updated_at' }],
            store: __WEBPACK_IMPORTED_MODULE_1__users_Store_js__["a" /* default */],
            user: {}
        };
    },

    methods: {
        open: function open(user) {
            this.openDialogUser = true;
            this.user = user;
        }
    },
    mounted: function mounted() {
        var _this = this;

        this.$http.get('/admin/user').then(function (response) {
            _this.store.addUser(response.body);
        });
    }
});

/***/ }),

/***/ 278:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(279)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(281)
/* template */
var __vue_template__ = __webpack_require__(290)
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
Component.options.__file = "resources/assets/js/components/admin/users/DialogUser.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-df150f5e", Component.options)
  } else {
    hotAPI.reload("data-v-df150f5e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 279:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(280);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("906b0c2e", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-df150f5e\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./DialogUser.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-df150f5e\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./DialogUser.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 280:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "\n.noSpace{\n    padding: 0 !important;\n    margin: 0 !important;\n}\n.dialog--active{\n    overflow: hidden;\n}\n.carousel_item{\n    position: relative !important\n}\n.btn{\n    margin-left: 1em;\n    margin-right: 1em;\n}\n", ""]);

// exports


/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__UserBox_vue__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__UserBox_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__UserBox_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ActivitiesBox_vue__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ActivitiesBox_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__ActivitiesBox_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Store_js__ = __webpack_require__(154);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    components: { userBox: __WEBPACK_IMPORTED_MODULE_0__UserBox_vue___default.a, activityBox: __WEBPACK_IMPORTED_MODULE_1__ActivitiesBox_vue___default.a },
    props: {
        open: Boolean,
        user: Object,
        users: Array
    },
    data: function data() {
        return {
            dialog: false,
            index: -1,
            store: __WEBPACK_IMPORTED_MODULE_2__Store_js__["a" /* default */].state
        };
    },
    computed: {
        loading: function loading() {
            return this.store.loading;
        }
    },
    watch: {
        open: function open(data) {
            if (data) {
                this.index = this.users.indexOf(this.user);
                this.dialog = data;
            }
        },
        dialog: function dialog(data) {
            if (!data) {
                this.$emit('close');
            }
        },
        user: function user(data) {
            this.index = this.users.indexOf(data);
        }
    }
});

/***/ }),

/***/ 282:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(283)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(285)
/* template */
var __vue_template__ = __webpack_require__(286)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-7237775c"
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
Component.options.__file = "resources/assets/js/components/admin/users/UserBox.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7237775c", Component.options)
  } else {
    hotAPI.reload("data-v-7237775c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 283:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(284);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("65f072c4", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7237775c\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./UserBox.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7237775c\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./UserBox.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 284:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "\n.progress-circular[data-v-7237775c]{\n    margin: 1em;\n}\n", ""]);

// exports


/***/ }),

/***/ 285:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    props: {
        user: Object
    },
    data: function data() {
        return {
            profile: {}
        };
    },
    mounted: function mounted() {
        var _this = this;

        this.$http.get('/admin/user/' + this.user.id).then(function (response) {
            _this.profile = response.body;
        });
    }
});

/***/ }),

/***/ 286:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-layout",
    { attrs: { column: "" } },
    [
      _c(
        "v-flex",
        [
          _c(
            "v-card",
            { staticClass: "elevation-0" },
            [
              _c(
                "v-toolbar",
                {
                  staticClass: "elevation-0",
                  staticStyle: { background: "none" }
                },
                [
                  _c("v-toolbar-title", { staticClass: "text-xs-center" }, [
                    _vm._v("About me")
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-list",
                { attrs: { subheader: "" } },
                [
                  _c("v-subheader", [_vm._v("Bio")]),
                  _vm._v(" "),
                  _c(
                    "v-list-tile",
                    [
                      _c("v-list-tile-avatar", [
                        _vm._v(
                          "\n                        Name:\n                    "
                        )
                      ]),
                      _vm._v(" "),
                      _c("v-list-tile-content", [
                        _vm._v(
                          "\n                        " +
                            _vm._s(
                              _vm.profile.name + " " + _vm.profile.forename
                            ) +
                            "\n                    "
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
      ),
      _vm._v(" "),
      _c(
        "v-flex",
        [
          _c(
            "v-card",
            { staticClass: "elevation-0" },
            [
              _c(
                "v-toolbar",
                {
                  staticClass: "elevation-0",
                  staticStyle: { background: "none" }
                },
                [
                  _c("v-toolbar-title", { staticClass: "text-xs-center" }, [
                    _vm._v("Activities")
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-layout",
                { attrs: { row: "", wrap: "" } },
                [
                  _c(
                    "v-flex",
                    { attrs: { lg4: "" } },
                    [
                      _c("v-btn", { attrs: { flat: "", color: "teal" } }, [
                        _vm._v("Followers")
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-progress-circular",
                        {
                          attrs: {
                            size: 100,
                            width: 15,
                            rotate: 360,
                            value: _vm.profile.followers_count * 100,
                            color: "teal"
                          }
                        },
                        [
                          _vm._v(
                            "\n                        " +
                              _vm._s(_vm.profile.followers_count) +
                              "\n                    "
                          )
                        ]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-flex",
                    { attrs: { lg4: "" } },
                    [
                      _c("v-btn", { attrs: { flat: "", color: "primary" } }, [
                        _vm._v("Following")
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-progress-circular",
                        {
                          attrs: {
                            size: 100,
                            width: 15,
                            rotate: 360,
                            value: _vm.profile.following_count * 100,
                            color: "primary"
                          }
                        },
                        [
                          _vm._v(
                            "\n                        " +
                              _vm._s(_vm.profile.following_count) +
                              "\n                    "
                          )
                        ]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-flex",
                    { attrs: { lg4: "" } },
                    [
                      _c("v-btn", { attrs: { flat: "", color: "red" } }, [
                        _vm._v("Articles")
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-progress-circular",
                        {
                          attrs: {
                            size: 100,
                            width: 15,
                            rotate: 360,
                            value: _vm.profile.articles_count * 100,
                            color: "red"
                          }
                        },
                        [
                          _vm._v(
                            "\n                        " +
                              _vm._s(_vm.profile.articles_count) +
                              "\n                    "
                          )
                        ]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-flex",
                    { attrs: { lg4: "" } },
                    [
                      _c("v-btn", { attrs: { flat: "", color: "pink" } }, [
                        _vm._v("Likes")
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-progress-circular",
                        {
                          attrs: {
                            size: 100,
                            width: 15,
                            rotate: 360,
                            value: _vm.profile.likes_count * 100,
                            color: "pink"
                          }
                        },
                        [
                          _vm._v(
                            "\n                        " +
                              _vm._s(_vm.profile.likes_count) +
                              "\n                    "
                          )
                        ]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-flex",
                    { attrs: { lg4: "" } },
                    [
                      _c("v-btn", { attrs: { flat: "", color: "cyan" } }, [
                        _vm._v("Comments")
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-progress-circular",
                        {
                          attrs: {
                            size: 100,
                            width: 15,
                            rotate: 360,
                            value: _vm.profile.comments_count * 100,
                            color: "cyan"
                          }
                        },
                        [
                          _vm._v(
                            "\n                        " +
                              _vm._s(_vm.profile.comments_count) +
                              "\n                    "
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
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-7237775c", module.exports)
  }
}

/***/ }),

/***/ 287:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(288)
/* template */
var __vue_template__ = __webpack_require__(289)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
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
Component.options.__file = "resources/assets/js/components/admin/users/ActivitiesBox.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-302db670", Component.options)
  } else {
    hotAPI.reload("data-v-302db670", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Store__ = __webpack_require__(154);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    props: {
        user: Object
    },
    data: function data() {
        return {
            loading: false,
            userDelete: false
        };
    },

    computed: {
        darked: function darked() {
            return this.$store.state.setting.darked;
        }
    },
    methods: {
        destroy: function destroy() {
            var _this = this;

            this.$http.delete('/admin/user/' + this.user.id).then(function (response) {
                if (response.body.status === 1) {
                    __WEBPACK_IMPORTED_MODULE_0__Store__["a" /* default */].deleteUser(_this.user.id);
                }
            });
        }
    }
});

/***/ }),

/***/ 289:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-layout",
    { attrs: { column: "" } },
    [
      _c(
        "v-flex",
        [
          _c(
            "v-card",
            { staticClass: "elevation-0" },
            [
              _c(
                "v-toolbar",
                {
                  staticClass: "elevation-0",
                  staticStyle: { background: "transparent" }
                },
                [
                  _c(
                    "v-avatar",
                    {
                      staticStyle: {
                        cursor: "pointer",
                        "margin-left": "10px",
                        "margin-right": "10px"
                      },
                      attrs: { size: "40px" },
                      on: {
                        click: function($event) {
                          _vm.$router.push("profile/" + _vm.user.id)
                        }
                      }
                    },
                    [
                      _c("img", {
                        attrs: { src: _vm.user.avatar, alt: "avatar" }
                      })
                    ]
                  ),
                  _vm._v(" "),
                  _c("div", [
                    _vm._v(
                      "\n                    " +
                        _vm._s(
                          "  " + _vm.user.name + " " + _vm.user.forename + "  "
                        ) +
                        "\n                "
                    )
                  ]),
                  _vm._v(" "),
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { color: "primary", outline: "" },
                      on: {
                        click: function($event) {
                          _vm.userDelete = true
                        }
                      }
                    },
                    [
                      _c("v-icon", [_vm._v("delete")]),
                      _vm._v("Delete\n                ")
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-menu",
                    [
                      _c(
                        "v-btn",
                        {
                          attrs: { slot: "activator", flat: "", icon: "" },
                          slot: "activator"
                        },
                        [_c("v-icon", [_vm._v("more_vert")])],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-list",
                        [
                          _c(
                            "v-list-tile",
                            { on: { click: function($event) {} } },
                            [
                              _c(
                                "v-list-tile-action",
                                [_c("v-icon", [_vm._v("edit")])],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-list-tile-content",
                                [_c("v-list-tile-title", [_vm._v("Edit")])],
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
              _c("v-divider"),
              _vm._v(" "),
              _c("div", { staticStyle: { padding: "10px" } })
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: { "max-width": "290" },
          model: {
            value: _vm.userDelete,
            callback: function($$v) {
              _vm.userDelete = $$v
            },
            expression: "userDelete"
          }
        },
        [
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
              _c("v-card-title", { staticClass: "headline" }, [
                _vm._v("Deleting the User")
              ]),
              _vm._v(" "),
              _c("v-card-text", [
                _vm._v(
                  "\n                Are you sure you want to delete this User?\n            "
                )
              ]),
              _vm._v(" "),
              _c(
                "v-card-actions",
                [
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { flat: "flat" },
                      nativeOn: {
                        click: function($event) {
                          _vm.userDelete = false
                        }
                      }
                    },
                    [_vm._v("Cancel")]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { color: "primary", flat: "flat" },
                      nativeOn: {
                        click: function($event) {
                          _vm.destroy($event)
                        }
                      }
                    },
                    [_vm._v("Confirm")]
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
    require("vue-hot-reload-api")      .rerender("data-v-302db670", module.exports)
  }
}

/***/ }),

/***/ 290:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-layout",
    { attrs: { row: "", "justify-center": "" } },
    [
      _c(
        "v-dialog",
        {
          attrs: { width: "935px" },
          model: {
            value: _vm.dialog,
            callback: function($$v) {
              _vm.dialog = $$v
            },
            expression: "dialog"
          }
        },
        [
          _vm.loading
            ? _c("v-progress-linear", {
                staticStyle: { margin: "0" },
                attrs: { indeterminate: true }
              })
            : _vm._e(),
          _vm._v(" "),
          _c(
            "v-carousel",
            {
              staticStyle: {
                position: "inherit",
                height: "600px",
                background: "transparent"
              },
              attrs: {
                cycle: false,
                "hide-controls": _vm.users.length < 2,
                "hide-delimiters": ""
              },
              model: {
                value: _vm.index,
                callback: function($$v) {
                  _vm.index = $$v
                },
                expression: "index"
              }
            },
            _vm._l(_vm.users, function(user, i) {
              return _c(
                "v-carousel-item",
                { key: i, staticClass: "carousel_item", attrs: { src: " " } },
                [
                  i === _vm.index
                    ? _c(
                        "v-card",
                        {
                          staticStyle: { width: "935px" },
                          attrs: { height: "600px" }
                        },
                        [
                          _c(
                            "v-container",
                            {
                              staticClass: "noSpace",
                              staticStyle: { overflow: "hidden" },
                              attrs: { "grid-list-md": "" }
                            },
                            [
                              _c(
                                "v-layout",
                                { staticClass: "noSpace", attrs: { row: "" } },
                                [
                                  _c(
                                    "v-flex",
                                    {
                                      staticClass: "noSpace",
                                      attrs: { lg7: "" }
                                    },
                                    [_c("user-box", { attrs: { user: user } })],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-flex",
                                    {
                                      staticClass: "noSpace",
                                      attrs: { lg5: "" }
                                    },
                                    [
                                      _c("activity-box", {
                                        attrs: { user: user }
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
                    : _vm._e()
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
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-df150f5e", module.exports)
  }
}

/***/ }),

/***/ 291:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-card",
    { attrs: { dark: _vm.darked } },
    [
      _c(
        "v-card-title",
        [
          _vm._v("\n        " + _vm._s(_vm.users.length) + " Users\n        "),
          _c("v-spacer"),
          _vm._v(" "),
          _c("v-text-field", {
            attrs: {
              "append-icon": "search",
              label: "Search",
              "single-line": "",
              "hide-details": ""
            },
            model: {
              value: _vm.search,
              callback: function($$v) {
                _vm.search = $$v
              },
              expression: "search"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("v-data-table", {
        attrs: { headers: _vm.headers, items: _vm.users, search: _vm.search },
        scopedSlots: _vm._u([
          {
            key: "items",
            fn: function(props) {
              return _c("tr", { staticStyle: { cursor: "pointer" } }, [
                _c(
                  "td",
                  [
                    _c(
                      "v-edit-dialog",
                      {
                        attrs: { lazy: "" },
                        on: {
                          click: function($event) {
                            _vm.open(props.item)
                          }
                        }
                      },
                      [
                        _vm._v(
                          " " +
                            _vm._s(props.item.name) +
                            "\n                    "
                        ),
                        _c("v-text-field", {
                          attrs: {
                            slot: "input",
                            label: "Edit",
                            "single-line": "",
                            counter: "",
                            rules: [_vm.max25chars]
                          },
                          slot: "input",
                          model: {
                            value: props.item.name,
                            callback: function($$v) {
                              _vm.$set(props.item, "name", $$v)
                            },
                            expression: "props.item.name"
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
                  "td",
                  {
                    staticClass: "text-xs-right",
                    on: {
                      click: function($event) {
                        _vm.open(props.item)
                      }
                    }
                  },
                  [_vm._v(_vm._s(props.item.forename))]
                ),
                _vm._v(" "),
                _c(
                  "td",
                  {
                    staticClass: "text-xs-right",
                    on: {
                      click: function($event) {
                        _vm.open(props.item)
                      }
                    }
                  },
                  [_vm._v(_vm._s(props.item.email))]
                ),
                _vm._v(" "),
                _c(
                  "td",
                  {
                    staticClass: "text-xs-right",
                    on: {
                      click: function($event) {
                        _vm.open(props.item)
                      }
                    }
                  },
                  [_vm._v(_vm._s(props.item.level))]
                ),
                _vm._v(" "),
                _c(
                  "td",
                  {
                    staticClass: "text-xs-right",
                    on: {
                      click: function($event) {
                        _vm.open(props.item)
                      }
                    }
                  },
                  [_vm._v(_vm._s(props.item.avatar))]
                ),
                _vm._v(" "),
                _c(
                  "td",
                  {
                    staticClass: "text-xs-right",
                    on: {
                      click: function($event) {
                        _vm.open(props.item)
                      }
                    }
                  },
                  [_vm._v(_vm._s(props.item.cover))]
                ),
                _vm._v(" "),
                _c(
                  "td",
                  { staticClass: "text-xs-right" },
                  [
                    _c(
                      "v-edit-dialog",
                      {
                        attrs: { large: "", lazy: "" },
                        on: {
                          open: function($event) {
                            _vm.tmp = props.item.confirmated
                          },
                          save: function($event) {
                            props.item.confirmated =
                              _vm.tmp || props.item.confirmated
                          }
                        }
                      },
                      [
                        _c("div", [_vm._v(_vm._s(props.item.confirmated))]),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "mt-3 title",
                            attrs: { slot: "input" },
                            slot: "input"
                          },
                          [_vm._v("Update confirmated")]
                        ),
                        _vm._v(" "),
                        _c("v-text-field", {
                          attrs: {
                            slot: "input",
                            label: "Edit",
                            "single-line": "",
                            counter: "",
                            autofocus: "",
                            rules: [_vm.max25chars]
                          },
                          slot: "input",
                          model: {
                            value: _vm.tmp,
                            callback: function($$v) {
                              _vm.tmp = $$v
                            },
                            expression: "tmp"
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
                  "td",
                  {
                    staticClass: "text-xs-right",
                    on: {
                      click: function($event) {
                        _vm.open(props.item)
                      }
                    }
                  },
                  [
                    _c("timeago", {
                      attrs: {
                        since: props.item.created_at,
                        "auto-update": 86400,
                        "max-time": 86400 * 365
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "td",
                  {
                    staticClass: "text-xs-right",
                    on: {
                      click: function($event) {
                        _vm.open(props.item)
                      }
                    }
                  },
                  [
                    _c("timeago", {
                      attrs: {
                        since: props.item.updated_at,
                        "auto-update": 86400,
                        "max-time": 86400 * 365
                      }
                    })
                  ],
                  1
                )
              ])
            }
          },
          {
            key: "pageText",
            fn: function(ref) {
              var pageStart = ref.pageStart
              var pageStop = ref.pageStop
              return [
                _vm._v(
                  "\n            From " +
                    _vm._s(pageStart) +
                    " to " +
                    _vm._s(pageStop) +
                    "\n        "
                )
              ]
            }
          }
        ])
      }),
      _vm._v(" "),
      _c("dialog-user", {
        attrs: { users: _vm.users, user: _vm.user, open: _vm.openDialogUser },
        on: {
          close: function($event) {
            _vm.openDialogUser = !_vm.openDialogUser
          }
        }
      })
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
    require("vue-hot-reload-api")      .rerender("data-v-24d856e1", module.exports)
  }
}

/***/ }),

/***/ 72:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(277)
/* template */
var __vue_template__ = __webpack_require__(291)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
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
Component.options.__file = "resources/assets/js/components/admin/Users.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-24d856e1", Component.options)
  } else {
    hotAPI.reload("data-v-24d856e1", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});