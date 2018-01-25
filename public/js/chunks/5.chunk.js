webpackJsonp([5],{

/***/ 187:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(188);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(18)("6d063fda", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-503e1b48\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./Profile.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-503e1b48\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./Profile.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 188:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "\n.layout_block{\n    margin-top: 50px !important;\n}\n", ""]);

// exports


/***/ }),

/***/ 189:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__profile_XsHeader_vue__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__profile_XsHeader_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__profile_XsHeader_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__profile_Header_vue__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__profile_Header_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__profile_Header_vue__);
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    components: { psHeader: __WEBPACK_IMPORTED_MODULE_1__profile_Header_vue___default.a, xsHeader: __WEBPACK_IMPORTED_MODULE_0__profile_XsHeader_vue___default.a },
    data: function data() {
        return {
            loadingSubs: false
        };
    },
    computed: {
        user: function user() {
            return this.$store.state.user.user;
        },
        query: function query() {
            var _this = this;

            return this.$store.state.query.queries.find(function (e) {
                return e.name === "profile" && e.id === _this.$route.params.id;
            });
        },
        profile: function profile() {
            var _this2 = this;

            return this.$store.state.users.users.find(function (user) {
                return user.id === parseInt(_this2.$route.params.id);
            });
        }
    },
    methods: {
        load: function load() {
            var _this3 = this;

            if (!this.query) {
                this.$store.dispatch('setting/setLoading', true);
                this.$http.get('/user/' + this.$route.params.id).then(function (response) {
                    if (response.body instanceof Object) {
                        _this3.$store.dispatch("users/save", response.body);
                    }
                    _this3.$store.dispatch('setting/setLoading', false);
                });
            }
        }
    },
    mounted: function mounted() {
        this.load();
    },

    watch: {
        '$route.params.id': function $routeParamsId() {
            this.load();
        }
    }
});

/***/ }),

/***/ 190:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(191)
  __webpack_require__(193)
}
var normalizeComponent = __webpack_require__(17)
/* script */
var __vue_script__ = __webpack_require__(195)
/* template */
var __vue_template__ = __webpack_require__(196)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-cd867b2a"
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
Component.options.__file = "resources/assets/js/components/user/profile/XsHeader.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-cd867b2a", Component.options)
  } else {
    hotAPI.reload("data-v-cd867b2a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 191:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(192);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(18)("cdb8ac72", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-cd867b2a\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./XsHeader.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-cd867b2a\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./XsHeader.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 192:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "\n.btnSubs{\n    bottom: 50px !important;\n    position: absolute !important;\n    right: 0 !important;\n}\n.cover{\n    display: none ;\n    margin: auto -15px !important;\n}\n.parallax__content:hover .cover{\n    display: inherit !important;\n    background-color: rgba(0, 0, 0, .4);\n}\n.tabsProfile .tabs__item,.tabs__li{\n    color: inherit !important;\n    text-transform: capitalize !important;\n}\n", ""]);

// exports


/***/ }),

/***/ 193:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(194);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(18)("157db6fb", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-cd867b2a\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=1&bustCache!./XsHeader.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-cd867b2a\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=1&bustCache!./XsHeader.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 194:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "\n#cardMore[data-v-cd867b2a]{\n    position: relative;\n    z-index: 1;\n}\n.nbr-photos[data-v-cd867b2a]{\n    position:absolute;\n    width: 100%;\n    height: 100%;\n    display:none;\n    border-radius: 50% !important;\n    background-color: rgba(0, 0, 0, .4);\n    text-align: center;\n    padding-top: 35%;\n    color: #fff;\n    border-radius: 4px;\n    font-size: 18px;\n}\ndiv:hover > .nbr-photos[data-v-cd867b2a]{\n    display: block\n}\n.nbr-photos[data-v-cd867b2a]:hover{\n    display: block\n}\n", ""]);

// exports


/***/ }),

/***/ 195:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            loadingSubs: false,
            urls: {
                avatar: null,
                cover: null
            },
            files: {
                avatar: null,
                cover: null
            },
            name: null
        };
    },
    computed: {
        user: function user() {
            return this.$store.state.user.user;
        },
        profile: function profile() {
            var _this = this;

            return this.$store.state.users.users.find(function (user) {
                return user.id === parseInt(_this.$route.params.id);
            });
        }
    },
    methods: {
        follow: function follow() {
            var _this2 = this;

            this.loadingSubs = true;
            var profile = this.profile;
            if (this.profile.followed) {
                this.$http.delete("user/subscription/" + this.profile.followed.id).then(function (response) {
                    if (response.body.status === 1) {
                        _this2.loadingSubs = false;
                        _this2.$set(profile, 'followed', null);
                        profile.followers_count--;
                    }
                });
            } else {
                this.$http.post('user/subscription', { receiver_id: this.profile.id }).then(function (response) {
                    if (response.body.id) {
                        _this2.$set(profile, 'followed', response.body);
                        _this2.loadingSubs = false;
                        profile.followers_count++;
                    }
                });
            }
        },
        preview: function preview(event) {
            this.files[this.name] = event.target.files[0];
            this.urls[this.name] = window.URL.createObjectURL(event.target.files[0]);
        },
        select: function select(name) {
            this.name = name;
            this.$el.querySelector("#" + name).click();
        },
        clear: function clear(name) {
            this.files[name] = null;
            this.urls[name] = null;
            this.$el.querySelector("#" + name).value = null;
        },
        send: function send(name) {
            var _this3 = this;

            this.$store.dispatch('setting/setLoading', true);
            var formdata = new FormData();
            formdata.append(name, this.files[name]);
            this.$http.post('user/' + name, formdata).then(function (response) {
                if (response.body.status === 1) {
                    var data = {};
                    data[name] = _this3.urls[name];
                    _this3.$store.dispatch('user/update', data);
                    _this3.$store.dispatch('users/update', _this3.user);
                }
                _this3.$store.dispatch('setting/setLoading', false);
                _this3.clear(name);
            });
        }
    }
});

/***/ }),

/***/ 196:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticStyle: { "margin-top": "-25px" }, attrs: { id: "cardMore" } },
    [
      _c(
        "v-parallax",
        {
          staticStyle: { overflow: "visible" },
          attrs: {
            src: _vm.urls.cover ? _vm.urls.cover : _vm.profile.cover,
            jumbotron: "",
            height: "150"
          }
        },
        [
          _vm.user.id === _vm.profile.id
            ? _c(
                "v-layout",
                {
                  staticClass: "cover",
                  attrs: {
                    column: "",
                    "align-center": "",
                    "justify-center": ""
                  }
                },
                [
                  _vm.urls.cover
                    ? _c(
                        "div",
                        [
                          _c(
                            "v-btn",
                            {
                              attrs: { round: "", color: "danger" },
                              on: {
                                click: function($event) {
                                  _vm.clear("cover")
                                }
                              }
                            },
                            [_vm._v("Cancel")]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            {
                              attrs: { round: "", color: "success" },
                              on: {
                                click: function($event) {
                                  _vm.send("cover")
                                }
                              }
                            },
                            [_vm._v("Save")]
                          )
                        ],
                        1
                      )
                    : _c(
                        "v-btn",
                        {
                          attrs: { round: "", color: "primary", icon: "" },
                          nativeOn: {
                            click: function($event) {
                              _vm.select("cover")
                            }
                          }
                        },
                        [_c("v-icon", [_vm._v("insert_photo")])],
                        1
                      )
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _c(
            "v-tooltip",
            { staticClass: "btnSubs", attrs: { top: "" } },
            [
              _vm.user.id !== _vm.profile.id
                ? _c(
                    "v-btn",
                    {
                      attrs: {
                        slot: "activator",
                        loading: _vm.loadingSubs,
                        color: _vm.profile.followed ? null : "primary",
                        rounded: ""
                      },
                      nativeOn: {
                        click: function($event) {
                          _vm.follow($event)
                        }
                      },
                      slot: "activator"
                    },
                    [
                      !_vm.profile.followed
                        ? _c("v-icon", [_vm._v("person_add")])
                        : _vm._e(),
                      _vm._v(
                        _vm._s(_vm.profile.followed ? "Unfollow" : "Follow") +
                          "\n            "
                      )
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.profile.followed
                ? _c("span", [_vm._v("Click here to unfollow")])
                : _c("span", [_vm._v("Click here to follow")])
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-card",
        [
          _c(
            "v-list",
            { staticStyle: { "text-align": "left" }, attrs: { subheader: "" } },
            [
              _c(
                "v-list-tile",
                { staticClass: "list__item" },
                [
                  _c("v-list-tile-avatar", [
                    _vm._v("\n                    Name:\n                ")
                  ]),
                  _vm._v(" "),
                  _c("v-list-tile-content", [
                    _vm._v(
                      "\n                    " +
                        _vm._s(_vm.profile.name + " " + _vm.profile.forename) +
                        "\n                "
                    )
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _vm.profile.role === "admin" || _vm.profile.title
                ? _c(
                    "v-list-tile",
                    { staticClass: "list__item" },
                    [
                      _c("v-list-tile-content", [
                        _vm._v(
                          "\n                    " +
                            _vm._s(
                              _vm.profile.role === "admin"
                                ? "Founder of Weltimo"
                                : _vm.profile.title
                            ) +
                            "\n                "
                        )
                      ])
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.profile.biography
                ? _c(
                    "v-subheader",
                    {
                      staticStyle: {
                        display: "inherit",
                        "margin-bottom": "10px"
                      }
                    },
                    [
                      _c(
                        "span",
                        {
                          staticStyle: { color: "black", "font-weight": "400" }
                        },
                        [_vm._v("Biography: ")]
                      ),
                      _vm._v(_vm._s(_vm.profile.biography))
                    ]
                  )
                : _vm._e()
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-card",
        { attrs: { height: "55px" } },
        [
          _c(
            "v-tabs",
            { attrs: { dark: "" } },
            [
              _c(
                "v-tabs-bar",
                { staticClass: "transparent tabsProfile", attrs: { dark: "" } },
                [
                  _c("v-tabs-slider", { staticClass: "yellow" }),
                  _vm._v(" "),
                  _c(
                    "v-tabs-item",
                    {
                      attrs: {
                        to: "/user/profile/" + _vm.profile.id + "/",
                        exact: ""
                      }
                    },
                    [_vm._v("\n                    Home\n                ")]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-tabs-item",
                    {
                      attrs: {
                        to: "/user/profile/" + _vm.profile.id + "/following"
                      }
                    },
                    [
                      _vm._v(
                        "\n                    Following (" +
                          _vm._s(_vm.profile.following_count) +
                          ")\n                "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-tabs-item",
                    {
                      attrs: {
                        to: "/user/profile/" + _vm.profile.id + "/followers",
                        exact: ""
                      }
                    },
                    [
                      _vm._v(
                        "\n                    Followers (" +
                          _vm._s(_vm.profile.followers_count) +
                          ")\n                "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-tabs-item",
                    {
                      attrs: {
                        to: "/user/profile/" + _vm.profile.id + "/albums"
                      }
                    },
                    [_vm._v("\n                    Albums\n                ")]
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
        "v-avatar",
        {
          staticClass: "elevation-4",
          staticStyle: {
            position: "absolute",
            top: "80px",
            left: "0px",
            "z-index": "4"
          },
          attrs: { slot: "activator", size: "80px" },
          slot: "activator"
        },
        [
          _vm.profile.id === _vm.user.id
            ? _c(
                "div",
                { staticClass: "nbr-photos" },
                [
                  _vm.urls.avatar
                    ? _c(
                        "div",
                        [
                          _c(
                            "v-btn",
                            {
                              attrs: { round: "", color: "danger" },
                              on: {
                                click: function($event) {
                                  _vm.clear("avatar")
                                }
                              }
                            },
                            [_vm._v("Cancel")]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            {
                              attrs: { round: "", color: "success" },
                              on: {
                                click: function($event) {
                                  _vm.send("avatar")
                                }
                              }
                            },
                            [_vm._v("Save")]
                          )
                        ],
                        1
                      )
                    : _c(
                        "v-btn",
                        {
                          attrs: { round: "", color: "primary", icon: "" },
                          nativeOn: {
                            click: function($event) {
                              _vm.select("avatar")
                            }
                          }
                        },
                        [_c("v-icon", [_vm._v("insert_photo")])],
                        1
                      )
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _c("img", {
            attrs: {
              src: _vm.urls.avatar ? _vm.urls.avatar : _vm.profile.avatar,
              alt: "avatar"
            }
          })
        ]
      ),
      _vm._v(" "),
      _c("input", {
        staticStyle: { display: "none" },
        attrs: { type: "file", id: "cover" },
        on: { change: _vm.preview }
      }),
      _vm._v(" "),
      _c("input", {
        staticStyle: { display: "none" },
        attrs: { type: "file", id: "avatar" },
        on: { change: _vm.preview }
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
    require("vue-hot-reload-api")      .rerender("data-v-cd867b2a", module.exports)
  }
}

/***/ }),

/***/ 197:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(198)
  __webpack_require__(200)
}
var normalizeComponent = __webpack_require__(17)
/* script */
var __vue_script__ = __webpack_require__(202)
/* template */
var __vue_template__ = __webpack_require__(203)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-783fb3d0"
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
Component.options.__file = "resources/assets/js/components/user/profile/Header.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-783fb3d0", Component.options)
  } else {
    hotAPI.reload("data-v-783fb3d0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 198:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(199);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(18)("306855ec", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-783fb3d0\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./Header.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-783fb3d0\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./Header.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 199:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "\n.btnSubs{\n    bottom: 50px !important;\n    position: absolute !important;\n    right: 0 !important;\n}\n.cover{\n    display: none ;\n    margin: auto -15px !important;\n}\n.parallax__content:hover .cover{\n    display: inherit !important;\n    background-color: rgba(0, 0, 0, .4);\n}\n", ""]);

// exports


/***/ }),

/***/ 200:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(201);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(18)("845e13a4", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-783fb3d0\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=1&bustCache!./Header.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-783fb3d0\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=1&bustCache!./Header.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 201:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "\n.hBtnNav .btn[data-v-783fb3d0]{\n    color: inherit !important;\n}\n#cardMore[data-v-783fb3d0]{\n    position: relative;\n    z-index: 1;\n}\n.nbr-photos[data-v-783fb3d0]{\n     position:absolute;\n     width: 100%;\n     height: 100%;\n     display:none;\n     border-radius: 50% !important;\n     background-color: rgba(0, 0, 0, .4);\n     text-align: center;\n     padding-top: 35%;\n     color: #fff;\n     border-radius: 4px;\n     font-size: 18px;\n}\ndiv:hover > .nbr-photos[data-v-783fb3d0]{\n    display: block\n}\n.nbr-photos[data-v-783fb3d0]:hover{\n    display: block\n}\n", ""]);

// exports


/***/ }),

/***/ 202:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            loadingSubs: false,
            urls: {
                avatar: null,
                cover: null
            },
            files: {
                avatar: null,
                cover: null
            },
            name: null
        };
    },
    computed: {
        user: function user() {
            return this.$store.state.user.user;
        },
        profile: function profile() {
            var _this = this;

            return this.$store.state.users.users.find(function (user) {
                return user.id === parseInt(_this.$route.params.id);
            });
        }
    },
    methods: {
        follow: function follow() {
            var _this2 = this;

            this.loadingSubs = true;
            var profile = this.profile;
            if (this.profile.followed) {
                this.$http.delete("user/subscription/" + this.profile.followed.id).then(function (response) {
                    if (response.body.status === 1) {
                        _this2.loadingSubs = false;
                        _this2.$set(profile, 'followed', null);
                        profile.followers_count--;
                    }
                });
            } else {
                this.$http.post('user/subscription', { receiver_id: this.profile.id }).then(function (response) {
                    if (response.body.id) {
                        _this2.$set(profile, 'followed', response.body);
                        _this2.loadingSubs = false;
                        profile.followers_count++;
                    }
                });
            }
        },
        preview: function preview(event) {
            this.files[this.name] = event.target.files[0];
            this.urls[this.name] = window.URL.createObjectURL(event.target.files[0]);
        },
        select: function select(name) {
            this.name = name;
            this.$el.querySelector("#" + name).click();
        },
        clear: function clear(name) {
            this.files[name] = null;
            this.urls[name] = null;
            this.$el.querySelector("#" + name).value = null;
        },
        send: function send(name) {
            var _this3 = this;

            this.$store.dispatch('setting/setLoading', true);
            var formdata = new FormData();
            formdata.append(name, this.files[name]);
            this.$http.post('user/' + name, formdata).then(function (response) {
                if (response.body.status === 1) {
                    var data = {};
                    data[name] = _this3.urls[name];
                    _this3.$store.dispatch('user/update', data);
                    _this3.$store.dispatch('users/update', _this3.user);
                }
                _this3.$store.dispatch('setting/setLoading', false);
                _this3.clear(name);
            });
        }
    }
});

/***/ }),

/***/ 203:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { attrs: { id: "cardMore" } },
    [
      _c(
        "v-parallax",
        {
          staticStyle: { overflow: "visible" },
          attrs: {
            src: _vm.urls.cover ? _vm.urls.cover : _vm.profile.cover,
            jumbotron: "",
            height: "300"
          }
        },
        [
          _vm.user.id === _vm.profile.id
            ? _c(
                "v-layout",
                {
                  staticClass: "cover",
                  attrs: {
                    column: "",
                    "align-center": "",
                    "justify-center": ""
                  }
                },
                [
                  _vm.urls.cover
                    ? _c(
                        "div",
                        [
                          _c(
                            "v-btn",
                            {
                              attrs: { round: "", color: "danger" },
                              on: {
                                click: function($event) {
                                  _vm.clear("cover")
                                }
                              }
                            },
                            [_vm._v("Cancel")]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            {
                              attrs: { round: "", color: "success" },
                              on: {
                                click: function($event) {
                                  _vm.send("cover")
                                }
                              }
                            },
                            [_vm._v("Save")]
                          )
                        ],
                        1
                      )
                    : _c(
                        "v-btn",
                        {
                          attrs: { round: "", color: "primary", icon: "" },
                          nativeOn: {
                            click: function($event) {
                              _vm.select("cover")
                            }
                          }
                        },
                        [_c("v-icon", [_vm._v("insert_photo")])],
                        1
                      )
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _c(
            "v-tooltip",
            { staticClass: "btnSubs", attrs: { top: "" } },
            [
              _vm.user.id !== _vm.profile.id
                ? _c(
                    "v-btn",
                    {
                      attrs: {
                        slot: "activator",
                        loading: _vm.loadingSubs,
                        color: _vm.profile.followed ? null : "primary",
                        rounded: ""
                      },
                      nativeOn: {
                        click: function($event) {
                          _vm.follow($event)
                        }
                      },
                      slot: "activator"
                    },
                    [
                      !_vm.profile.followed
                        ? _c("v-icon", [_vm._v("person_add")])
                        : _vm._e(),
                      _vm._v(
                        _vm._s(_vm.profile.followed ? "Unfollow" : "Follow") +
                          "\n            "
                      )
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.profile.followed
                ? _c("span", [_vm._v("Click here to unfollow")])
                : _c("span", [_vm._v("Click here to follow")])
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-card",
        { staticStyle: { height: "55px" } },
        [
          _c(
            "v-bottom-nav",
            {
              staticClass: "hBtnNav",
              staticStyle: { "justify-content": "flex-end" },
              attrs: { absolute: "", value: true, color: "transparent" }
            },
            [
              _c(
                "v-btn",
                {
                  attrs: {
                    flat: "",
                    to: "/user/profile/" + _vm.profile.id + "/",
                    exact: ""
                  }
                },
                [_c("span", [_vm._v("Home")]), _vm._v(" "), _c("v-icon")],
                1
              ),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  attrs: {
                    flat: "",
                    to: "/user/profile/" + _vm.profile.id + "/following"
                  }
                },
                [
                  _c("span", [
                    _vm._v("Following"),
                    _c("br"),
                    _vm._v(
                      "\n                " +
                        _vm._s(_vm.profile.following_count) +
                        "\n                "
                    )
                  ]),
                  _vm._v(" "),
                  _c("v-icon")
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  attrs: {
                    flat: "",
                    to: "/user/profile/" + _vm.profile.id + "/followers"
                  }
                },
                [
                  _c("span", [
                    _vm._v("Followers"),
                    _c("br"),
                    _vm._v(
                      "\n                " +
                        _vm._s(_vm.profile.followers_count) +
                        "\n                "
                    )
                  ])
                ]
              ),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  attrs: {
                    flat: "",
                    to: "/user/profile/" + _vm.profile.id + "/albums"
                  }
                },
                [_c("span", [_vm._v("Albums")])]
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-avatar",
        {
          staticClass: "elevation-4",
          staticStyle: {
            position: "absolute",
            top: "200px",
            left: "10px",
            "z-index": "4"
          },
          attrs: { slot: "activator", size: "200px" },
          slot: "activator"
        },
        [
          _vm.profile.id === _vm.user.id
            ? _c(
                "div",
                { staticClass: "nbr-photos" },
                [
                  _vm.urls.avatar
                    ? _c(
                        "div",
                        [
                          _c(
                            "v-btn",
                            {
                              attrs: { round: "", color: "danger" },
                              on: {
                                click: function($event) {
                                  _vm.clear("avatar")
                                }
                              }
                            },
                            [_vm._v("Cancel")]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            {
                              attrs: { round: "", color: "success" },
                              on: {
                                click: function($event) {
                                  _vm.send("avatar")
                                }
                              }
                            },
                            [_vm._v("Save")]
                          )
                        ],
                        1
                      )
                    : _c(
                        "v-btn",
                        {
                          attrs: { round: "", color: "primary", icon: "" },
                          nativeOn: {
                            click: function($event) {
                              _vm.select("avatar")
                            }
                          }
                        },
                        [_c("v-icon", [_vm._v("insert_photo")])],
                        1
                      )
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _c("img", {
            attrs: {
              src: _vm.urls.avatar ? _vm.urls.avatar : _vm.profile.avatar,
              alt: "avatar"
            }
          })
        ]
      ),
      _vm._v(" "),
      _c("input", {
        staticStyle: { display: "none" },
        attrs: { type: "file", id: "cover" },
        on: { change: _vm.preview }
      }),
      _vm._v(" "),
      _c("input", {
        staticStyle: { display: "none" },
        attrs: { type: "file", id: "avatar" },
        on: { change: _vm.preview }
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
    require("vue-hot-reload-api")      .rerender("data-v-783fb3d0", module.exports)
  }
}

/***/ }),

/***/ 204:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.profile
    ? _c(
        "v-container",
        {
          staticStyle: { overflow: "visible" },
          attrs: { "grid-list-md": "", "text-xs-center": "", fluid: "" }
        },
        [
          _vm.$vuetify.breakpoint.smAndUp ? _c("ps-header") : _c("xs-header"),
          _vm._v(" "),
          _c("router-view")
        ],
        1
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-503e1b48", module.exports)
  }
}

/***/ }),

/***/ 57:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(187)
}
var normalizeComponent = __webpack_require__(17)
/* script */
var __vue_script__ = __webpack_require__(189)
/* template */
var __vue_template__ = __webpack_require__(204)
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
Component.options.__file = "resources/assets/js/components/user/Profile.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-503e1b48", Component.options)
  } else {
    hotAPI.reload("data-v-503e1b48", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});