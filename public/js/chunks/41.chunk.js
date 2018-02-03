webpackJsonp([41],{

/***/ 237:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            followings: []
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

/***/ 238:
/***/ (function(module, exports, __webpack_require__) {

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
                                attrs: {
                                  href: "/#/user/profile/" + following.id
                                }
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
                                  following.followed
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
                                          on: {
                                            click: function($event) {
                                              $event.stopPropagation()
                                              $event.preventDefault()
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
                                  !following.followed
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
    })
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-1de0dfee", module.exports)
  }
}

/***/ }),

/***/ 64:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(237)
/* template */
var __vue_template__ = __webpack_require__(238)
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

module.exports = Component.exports


/***/ })

});