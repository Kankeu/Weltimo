webpackJsonp([35],{

/***/ 204:
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

/* harmony default export */ __webpack_exports__["a"] = ({
    data: function data() {
        return {
            followers: [],
            snackbar: false,
            text: ''
        };
    },

    computed: {
        user: function user() {
            return this.$store.state.user.user;
        },
        query: function query() {
            return this.$store.state.query.queries.find(function (e) {
                return e.name === "cardFollower";
            });
        },
        profile: function profile() {
            var _this = this;

            return this.$store.state.users.users.find(function (user) {
                return user.id === parseInt(_this.$route.params.id);
            });
        },
        scrollTop: function scrollTop() {
            var scroll = this.$store.state.setting.scrollTops.find(function (e) {
                return e.name === "cardFollower";
            }) || {};
            return scroll.scrollTop;
        }
    },
    methods: {
        load: function load() {
            var _this2 = this;

            if (!this.query) {
                this.$http.get('/user/profile/' + this.profile.id + '/follower').then(function (response) {
                    if (response.body instanceof Object) {
                        _this2.followers = response.body.data;
                        _this2.$nextTick(function () {
                            return document.body.scrollTop = _this2.scrollTop;
                        });
                    }
                });
            }
        },
        remove: function remove(user) {
            var _this3 = this;

            this.$set(user, "loadingSubs", true);
            this.$http.delete("user/deletefollower/" + user.id).then(function (response) {
                if (response.body.status === 1) {
                    user.loadingSubs = false;
                    var index = _this3.followers.indexOf(_this3.followers.find(function (follower) {
                        return follower.id === user.id;
                    }));
                    if (index > -1) _this3.followers.splice(index, 1);
                    _this3.$store.dispatch('users/removeFollower', _this3.user);
                    _this3.text = _this3.profile.forename + ' does not follow you!';
                    _this3.snackbar = true;
                }
            });
        },
        follow: function follow(user) {
            var _this4 = this;

            this.$set(user, "loadingSubs", true);
            if (user.followed) {
                this.$http.get("user/unfollow/" + user.id).then(function (response) {
                    if (response.body.status === 1) {
                        delete user.followed;
                        _this4.$set(user, "loadingSubs", false);
                        _this4.$store.dispatch('users/removeFollowing', _this4.user);
                        _this4.text = 'You follow no longer ' + user.forename + '!';
                        _this4.snackbar = true;
                    }
                });
            } else {
                this.$http.post('user/subscription', { receiver_id: user.id }).then(function (response) {
                    if (response.body.id) {
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
        this.$store.dispatch('setting/addScrollTop', { scrollTop: document.body.scrollTop, name: "cardFollower" });
    }
});

/***/ }),

/***/ 331:
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
      _vm._l(_vm.followers, function(follower) {
        return _c(
          "v-flex",
          { key: follower.id, attrs: { xs12: "", lg6: "" } },
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
                                  attrs: { href: "/#/profile/" + follower.id }
                                },
                                [
                                  _vm._v(
                                    _vm._s(
                                      follower.name + " " + follower.forename
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
                                    _vm.user.id !== follower.id
                                      ? _c(
                                          "v-btn",
                                          {
                                            attrs: {
                                              slot: "activator",
                                              loading: follower.loadingSubs,
                                              color: follower.followed
                                                ? null
                                                : "primary",
                                              outline: ""
                                            },
                                            nativeOn: {
                                              click: function($event) {
                                                _vm.follow(follower)
                                              }
                                            },
                                            slot: "activator"
                                          },
                                          [
                                            !follower.followed
                                              ? _c("v-icon", [
                                                  _vm._v("person_add")
                                                ])
                                              : _vm._e(),
                                            _vm._v(
                                              _vm._s(
                                                follower.followed
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
                                    follower.followed
                                      ? _c("span", [
                                          _vm._v("Click here to unfollow")
                                        ])
                                      : _c("span", [
                                          _vm._v("Click here to follow")
                                        ])
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-tooltip",
                                  { attrs: { top: "" } },
                                  [
                                    _vm.profile.id === _vm.user.id
                                      ? _c(
                                          "v-btn",
                                          {
                                            attrs: {
                                              slot: "activator",
                                              loading: follower.loadingSubs,
                                              color: "danger",
                                              outline: ""
                                            },
                                            on: {
                                              click: function($event) {
                                                $event.stopPropagation()
                                                $event.preventDefault()
                                                _vm.remove(follower)
                                              }
                                            },
                                            slot: "activator"
                                          },
                                          [
                                            _c("v-icon", [_vm._v("delete")]),
                                            _vm._v(
                                              "Delete\n                                    "
                                            )
                                          ],
                                          1
                                        )
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _c("span", [
                                      _vm._v(
                                        "Click here to remove of followers list"
                                      )
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
                                src: follower.avatar,
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
    require("vue-hot-reload-api")      .rerender("data-v-51c46f72", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_env_modules_false_targets_browsers_last_2_versions_safari_7_debug_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_syntax_dynamic_import_node_modules_vue_loader_lib_selector_type_script_index_0_CardFollowers_vue__ = __webpack_require__(204);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_51c46f72_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_CardFollowers_vue__ = __webpack_require__(331);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_env_modules_false_targets_browsers_last_2_versions_safari_7_debug_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_syntax_dynamic_import_node_modules_vue_loader_lib_selector_type_script_index_0_CardFollowers_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_51c46f72_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_CardFollowers_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_51c46f72_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_CardFollowers_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/user/profile/CardFollowers.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-51c46f72", Component.options)
  } else {
    hotAPI.reload("data-v-51c46f72", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

});