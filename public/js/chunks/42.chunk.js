webpackJsonp([42],{

/***/ 239:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            followers: []
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
                }
            });
        },
        follow: function follow(user) {
            var _this4 = this;

            this.$set(user, "loadingSubs", true);
            this.$http.post('user/subscription', { receiver_id: user.id }).then(function (response) {
                if (response.body.id) {
                    user.followed = response.body;
                    _this4.$store.dispatch('users/addFollowing', _this4.user);
                    _this4.$set(user, "loadingSubs", false);
                }
            });
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

/***/ 240:
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
                                attrs: {
                                  href: "/#/user/profile/" + follower.id
                                }
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
                              _vm.user.id !== follower.id && !follower.followed
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
                                      on: {
                                        click: function($event) {
                                          $event.stopPropagation()
                                          $event.preventDefault()
                                          _vm.follow(follower)
                                        }
                                      },
                                      slot: "activator"
                                    },
                                    [
                                      !follower.followed
                                        ? _c("v-icon", [_vm._v("person_add")])
                                        : _vm._e(),
                                      _vm._v(
                                        _vm._s(
                                          follower.followed
                                            ? "Unfollow"
                                            : "Follow"
                                        ) + "\n                                "
                                      )
                                    ],
                                    1
                                  )
                                : _vm._e(),
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
    })
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-51c46f72", module.exports)
  }
}

/***/ }),

/***/ 65:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(239)
/* template */
var __vue_template__ = __webpack_require__(240)
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

module.exports = Component.exports


/***/ })

});