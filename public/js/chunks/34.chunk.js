webpackJsonp([34],{

/***/ 203:
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

/* harmony default export */ __webpack_exports__["a"] = ({
    data: function data() {
        return {
            followings: [],
            snackbar: false,
            text: ''
        };
    },

    computed: {
        user: function user() {
            return this.$store.state.user.user;
        },
        query: function query() {
            var _this = this;

            return this.$store.state.query.queries.find(function (e) {
                return e.name === "cardFollowing" && e.id === _this.profile.id;
            });
        },
        profile: function profile() {
            var _this2 = this;

            return this.$store.state.users.users.find(function (user) {
                return user.id === parseInt(_this2.$route.params.id);
            });
        },
        scrollTop: function scrollTop() {
            var scroll = this.$store.state.setting.scrollTops.find(function (e) {
                return e.name === "cardFollowing";
            }) || {};
            return scroll.scrollTop;
        }
    },
    methods: {
        load: function load() {
            var _this3 = this;

            if (!this.query) {
                this.$http.get('/user/profile/' + this.profile.id + '/following').then(function (response) {
                    if (response.body instanceof Object) {
                        _this3.followings = response.body.data;
                        _this3.$nextTick(function () {
                            return document.body.scrollTop = _this3.scrollTop;
                        });
                    }
                });
            }
        },
        follow: function follow(user) {
            var _this4 = this;

            this.$set(user, "loadingSubs", true);
            if (user.followed) {
                this.$http.get("user/unfollow/" + user.id).then(function (response) {
                    if (response.body.status === 1) {
                        _this4.$set(user, "loadingSubs", false);
                        var index = _this4.followings.indexOf(_this4.followings.find(function (following) {
                            return following.id === user.id;
                        }));
                        if (index > -1) _this4.followings.splice(index, 1);
                        _this4.$store.dispatch('users/removeFollowing', _this4.user);
                        _this4.text = 'You follow no longer ' + user.forename + '!';
                        _this4.snackbar = true;
                    }
                });
            } else {
                this.$http.post('user/subscription', { receiver_id: user.id }).then(function (response) {
                    if (response.body.id) {
                        _this4.$set(user, "loadingSubs", false);
                        user.followed = response.body;
                        _this4.$set(user, "loadingSubs", false);
                        _this4.$store.dispatch('users/addFollowing', _this4.user);
                        _this4.text = 'You follow ' + user.forename + '!';
                        _this4.snackbar = true;
                    }
                });
            }
        }
    },
    mounted: function mounted() {
        this.load();
        document.body.scrollTop = this.scrollTop;
    },
    destroyed: function destroyed() {
        this.$store.dispatch('setting/addScrollTop', { scrollTop: document.body.scrollTop, name: "cardFollowing" });
    }
});

/***/ }),

/***/ 330:
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
    {
      style: _vm.$vuetify.breakpoint.smAndUp
        ? "margin-top:50px"
        : "justify-content:space-between;",
      attrs: { row: "", wrap: "" }
    },
    [
      _vm._l(_vm.followings, function(following) {
        return _c(
          "v-flex",
          { key: following.id, attrs: { xs12: "", lg6: "" } },
          [
            _c(
              "v-card",
              [
                _c(
                  "v-container",
                  {
                    style:
                      _vm.$vuetify.breakpoint.smAndUp ||
                      "padding:0;padding-top:8px",
                    attrs: { fluid: "", "grid-list-lg": "" }
                  },
                  [
                    _c(
                      "v-layout",
                      { attrs: { row: "" } },
                      [
                        _c("v-flex", { attrs: { xs7: "" } }, [
                          _c("div", [
                            _c("div", { staticClass: "headline" }, [
                              _c(
                                "a",
                                {
                                  staticStyle: { "text-decoration": "none" },
                                  attrs: { href: "/#/profile/" + following.id }
                                },
                                [
                                  _vm._v(
                                    _vm._s(
                                      following.name + " " + following.forename
                                    )
                                  )
                                ]
                              )
                            ]),
                            _vm._v(" "),
                            _c("br"),
                            _c("br"),
                            _vm._v(" "),
                            _c(
                              "div",
                              [
                                _c(
                                  "v-tooltip",
                                  { attrs: { top: "" } },
                                  [
                                    _vm.user.id !== following.id
                                      ? _c(
                                          "v-btn",
                                          {
                                            attrs: {
                                              slot: "activator",
                                              loading: following.loadingSubs,
                                              color: following.followed
                                                ? null
                                                : "primary",
                                              outline: ""
                                            },
                                            nativeOn: {
                                              click: function($event) {
                                                _vm.follow(following)
                                              }
                                            },
                                            slot: "activator"
                                          },
                                          [
                                            !following.followed
                                              ? _c("v-icon", [
                                                  _vm._v("person_add")
                                                ])
                                              : _vm._e(),
                                            _vm._v(
                                              _vm._s(
                                                following.followed
                                                  ? "Unfollow"
                                                  : "Follow"
                                              ) +
                                                "\n                                    "
                                            )
                                          ],
                                          1
                                        )
                                      : _vm._e(),
                                    _vm._v(" "),
                                    following.followed
                                      ? _c("span", [
                                          _vm._v("Click here to unfollow")
                                        ])
                                      : _c("span", [
                                          _vm._v("Click here to follow")
                                        ])
                                  ],
                                  1
                                )
                              ],
                              1
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c(
                          "v-flex",
                          { attrs: { xs5: "" } },
                          [
                            _c("v-card-media", {
                              attrs: {
                                src: following.avatar,
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
      }),
      _vm._v(" "),
      _c(
        "v-snackbar",
        {
          attrs: { timeout: 6000, top: "", right: "" },
          model: {
            value: _vm.snackbar,
            callback: function($$v) {
              _vm.snackbar = $$v
            },
            expression: "snackbar"
          }
        },
        [
          _vm._v("\n        " + _vm._s(_vm.text) + "\n        "),
          _c(
            "v-btn",
            {
              attrs: { flat: "", color: "pink" },
              nativeOn: {
                click: function($event) {
                  _vm.snackbar = false
                }
              }
            },
            [_vm._v("Close")]
          )
        ],
        1
      )
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-1de0dfee", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_env_modules_false_targets_browsers_last_2_versions_safari_7_debug_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_syntax_dynamic_import_node_modules_vue_loader_lib_selector_type_script_index_0_CardFollowing_vue__ = __webpack_require__(203);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1de0dfee_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_CardFollowing_vue__ = __webpack_require__(330);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_env_modules_false_targets_browsers_last_2_versions_safari_7_debug_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_syntax_dynamic_import_node_modules_vue_loader_lib_selector_type_script_index_0_CardFollowing_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1de0dfee_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_CardFollowing_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1de0dfee_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_CardFollowing_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/user/profile/CardFollowing.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1de0dfee", Component.options)
  } else {
    hotAPI.reload("data-v-1de0dfee", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

});