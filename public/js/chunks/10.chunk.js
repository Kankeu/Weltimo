webpackJsonp([10],{

/***/ 473:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__account_EditProfile_vue__ = __webpack_require__(474);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__account_EditProfile_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__account_EditProfile_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__account_ChangePassword_vue__ = __webpack_require__(477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__account_ChangePassword_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__account_ChangePassword_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    components: { editProfile: __WEBPACK_IMPORTED_MODULE_0__account_EditProfile_vue___default.a, changePassword: __WEBPACK_IMPORTED_MODULE_1__account_ChangePassword_vue___default.a },
    computed: {
        user: function user() {
            return this.$store.state.user.user;
        }
    }
});

/***/ }),

/***/ 474:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(17)
/* script */
var __vue_script__ = __webpack_require__(475)
/* template */
var __vue_template__ = __webpack_require__(476)
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
Component.options.__file = "resources/assets/js/components/user/account/EditProfile.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6e7dfd90", Component.options)
  } else {
    hotAPI.reload("data-v-6e7dfd90", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 475:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    $validates: true,
    computed: {
        user: function user() {
            return this.$store.state.user.user;
        }
    },
    methods: {
        save: function save(event) {
            var _this = this;

            this.$validator.validateAll().then(function (validated) {
                if (validated) {
                    var formdata = new FormData(event.target);
                    _this.$http.put('user/' + _this.user.id, formdata).then(function (response) {
                        if (response.body.id) {
                            _this.$store.dispatch("user/update", response.body);
                        }
                    });
                }
            });
        }
    }
});

/***/ }),

/***/ 476:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-form",
    {
      on: {
        submit: function($event) {
          $event.preventDefault()
          _vm.save($event)
        }
      }
    },
    [
      _c("v-text-field", {
        directives: [
          {
            name: "validate",
            rawName: "v-validate",
            value: "required",
            expression: "'required'"
          }
        ],
        attrs: {
          label: "Name",
          value: _vm.user.name,
          "error-messages": _vm.errors.collect("name"),
          "data-vv-name": "name",
          name: "name"
        }
      }),
      _vm._v(" "),
      _c("v-text-field", {
        directives: [
          {
            name: "validate",
            rawName: "v-validate",
            value: "required",
            expression: "'required'"
          }
        ],
        staticClass: "input-group--focused",
        attrs: {
          label: "Forename",
          name: "forename",
          value: _vm.user.forename,
          "error-messages": _vm.errors.collect("forename"),
          "data-vv-name": "forename"
        }
      }),
      _vm._v(" "),
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
          label: "E-mail",
          name: "email",
          value: _vm.user.email,
          "error-messages": _vm.errors.collect("email"),
          "data-vv-name": "email"
        }
      }),
      _vm._v(" "),
      _c("v-text-field", {
        attrs: {
          label: "Who I am?",
          name: "title",
          value: _vm.user.title,
          "data-vv-name": "title",
          counter: "50",
          maxlength: "50"
        }
      }),
      _vm._v(" "),
      _c("v-text-field", {
        attrs: {
          name: "biography",
          label: "Biography",
          value: _vm.user.biography,
          counter: "300",
          maxlength: "300",
          textarea: ""
        }
      }),
      _vm._v(" "),
      _c(
        "v-btn",
        {
          staticStyle: { margin: "0" },
          attrs: { color: "primary", type: "submit" }
        },
        [_vm._v("Save")]
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
    require("vue-hot-reload-api")      .rerender("data-v-6e7dfd90", module.exports)
  }
}

/***/ }),

/***/ 477:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(17)
/* script */
var __vue_script__ = __webpack_require__(478)
/* template */
var __vue_template__ = __webpack_require__(479)
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
Component.options.__file = "resources/assets/js/components/user/account/ChangePassword.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4def62aa", Component.options)
  } else {
    hotAPI.reload("data-v-4def62aa", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 478:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    $validates: true,
    data: function data() {
        return {
            visibility: false,
            data: {
                password: null,
                cPassword: null,
                lPassword: null
            }
        };
    },
    computed: {
        user: function user() {
            return this.$store.state.user.user;
        }
    },
    methods: {
        save: function save(event) {
            var _this = this;

            this.$validator.validateAll().then(function (validated) {
                if (validated) {
                    var formdata = new FormData(event.target);
                    _this.$http.put('user/' + _this.user.id, formdata).then(function (response) {});
                }
            });
        }
    }
});

/***/ }),

/***/ 479:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-form",
    {
      on: {
        submit: function($event) {
          $event.preventDefault()
          _vm.save($event)
        }
      }
    },
    [
      _c("v-text-field", {
        directives: [
          {
            name: "validate",
            rawName: "v-validate",
            value: "required",
            expression: "'required'"
          }
        ],
        attrs: {
          label: "Last Password",
          type: "password",
          "error-messages": _vm.errors.collect("lPassword"),
          "data-vv-name": "lPassword",
          "data-vv-as": "last password",
          name: "lPassword"
        },
        model: {
          value: _vm.data.lpassword,
          callback: function($$v) {
            _vm.$set(
              _vm.data,
              "lpassword",
              typeof $$v === "string" ? $$v.trim() : $$v
            )
          },
          expression: "data.lpassword"
        }
      }),
      _vm._v(" "),
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
          label: "New Password",
          type: "password",
          "append-icon": _vm.visibility ? "visibility" : "visibility_off",
          "append-icon-cb": function() {
            return (_vm.visibility = !_vm.visibility)
          },
          type: _vm.visibility ? "text" : "password",
          "error-messages": _vm.errors.collect("password"),
          "data-vv-name": "password",
          "data-vv-as": "new password",
          name: "password"
        },
        model: {
          value: _vm.data.password,
          callback: function($$v) {
            _vm.$set(
              _vm.data,
              "password",
              typeof $$v === "string" ? $$v.trim() : $$v
            )
          },
          expression: "data.password"
        }
      }),
      _vm._v(" "),
      _c("v-text-field", {
        directives: [
          {
            name: "validate",
            rawName: "v-validate",
            value: "required|confirmed:password",
            expression: "'required|confirmed:password'"
          }
        ],
        attrs: {
          label: "New Password",
          type: "password",
          "error-messages": _vm.errors.collect("cPassword"),
          "data-vv-name": "cPassword",
          "data-vv-as": "new password"
        },
        model: {
          value: _vm.data.cPassword,
          callback: function($$v) {
            _vm.$set(
              _vm.data,
              "cPassword",
              typeof $$v === "string" ? $$v.trim() : $$v
            )
          },
          expression: "data.cPassword"
        }
      }),
      _vm._v(" "),
      _c(
        "v-btn",
        {
          staticStyle: { margin: "0" },
          attrs: { color: "primary", type: "submit" }
        },
        [_vm._v("Save")]
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
    require("vue-hot-reload-api")      .rerender("data-v-4def62aa", module.exports)
  }
}

/***/ }),

/***/ 480:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticStyle: { "margin-top": "20px" } },
    [
      _c(
        "v-tabs",
        { attrs: { centered: "" } },
        [
          _c(
            "v-tabs-bar",
            { staticClass: "cyan", attrs: { dark: "" } },
            [
              _c("v-tabs-slider", { staticClass: "yellow" }),
              _vm._v(" "),
              _c("v-tabs-item", { attrs: { href: "#profile" } }, [
                _vm._v("\n                Edit Profile\n            ")
              ]),
              _vm._v(" "),
              _c("v-tabs-item", { attrs: { href: "#password" } }, [
                _vm._v("\n                Change Password\n            ")
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-tabs-items",
            [
              _c(
                "v-tabs-content",
                { attrs: { id: "profile" } },
                [
                  _c(
                    "v-card",
                    { attrs: { flat: "" } },
                    [_c("v-card-text", [_c("edit-profile")], 1)],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-tabs-content",
                { attrs: { id: "password" } },
                [
                  _c(
                    "v-card",
                    { attrs: { flat: "" } },
                    [_c("v-card-text", [_c("change-password")], 1)],
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
    require("vue-hot-reload-api")      .rerender("data-v-00ea10e0", module.exports)
  }
}

/***/ }),

/***/ 68:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(17)
/* script */
var __vue_script__ = __webpack_require__(473)
/* template */
var __vue_template__ = __webpack_require__(480)
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
Component.options.__file = "resources/assets/js/components/user/Account.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-00ea10e0", Component.options)
  } else {
    hotAPI.reload("data-v-00ea10e0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});