webpackJsonp([43],{

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
            ready: true,
            images: []
        };
    },
    computed: {
        user: function user() {
            return this.$store.state.user.user;
        },
        query: function query() {
            var _this = this;

            return this.$store.state.query.queries.find(function (e) {
                return e.name === "album" && e.id === _this.$route.params.id;
            });
        },
        profile: function profile() {
            var _this2 = this;

            return this.$store.state.users.users.find(function (user) {
                return user.id === parseInt(_this2.$route.params.id);
            });
        },
        end: function end() {
            var _this3 = this;

            return this.$store.state.query.queries.find(function (e) {
                return e.name === "album" && !e.next && e.id === parseInt(_this3.$route.params.id);
            });
        },
        scrollTop: function scrollTop() {
            var scroll = this.$store.state.setting.scrollTops.find(function (e) {
                return e.name === "album";
            }) || {};
            return scroll.scrollTop;
        }
    },
    methods: {
        loadMore: function loadMore() {
            var _this4 = this;

            if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 600) {
                if (!this.end && this.ready) {
                    this.ready = false;
                    this.$store.dispatch('setting/setLoading', true);
                    this.$http.get(this.query.next).then(function (response) {
                        if (_typeof(response.body) === "object") {
                            var _images;

                            _this4.$store.dispatch("query/save", { name: 'album', next: response.body.next_page_url, id: parseInt(_this4.$route.params.id) });
                            (_images = _this4.images).push.apply(_images, _toConsumableArray(response.body.data));
                        }
                        _this4.ready = true;
                        _this4.$store.dispatch('setting/setLoading', false);
                    });
                }
            }
        },
        load: function load() {
            var _this5 = this;

            if (!this.query && this.ready) {
                this.ready = false;
                this.$store.dispatch('setting/setLoading', true);
                this.$http.get('/user/profile/' + this.$route.params.id + '/album').then(function (response) {
                    if (response.body.data instanceof Object) {
                        _this5.$store.dispatch("query/save", { name: 'album', next: response.body.next_page_url, id: parseInt(_this5.$route.params.id) });
                        _this5.images = response.body.data;
                    }
                    _this5.ready = true;
                    _this5.$store.dispatch('setting/setLoading', false);
                });
            }
        }
    },
    mounted: function mounted() {
        this.load();
        document.body.scrollTop = this.scrollTop;
    },
    destroyed: function destroyed() {
        this.$store.dispatch('setting/addScrollTop', { scrollTop: document.body.scrollTop, name: "album" });
    },

    watch: {
        '$route.params.id': function $routeParamsId() {
            this.load();
        }
    }
});

/***/ }),

/***/ 242:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-container",
    {
      style: _vm.$vuetify.breakpoint.smAndUp
        ? "margin-top:50px"
        : "padding:0;padding-top:8px",
      attrs: { fluid: "", md: "" }
    },
    [
      _c(
        "v-layout",
        [
          _c(
            "v-flex",
            {
              attrs: { xs12: "", sm10: "", "offset-sm1": "", "offset-xs0": "" }
            },
            [
              _c(
                "v-card",
                [
                  _c(
                    "v-container",
                    {
                      attrs: {
                        "grid-list-md": "",
                        "text-xs-center": "",
                        fluid: ""
                      }
                    },
                    [
                      _vm.images.length > 0
                        ? _c(
                            "v-layout",
                            {
                              attrs: {
                                column: !_vm.$vuetify.breakpoint.smAndUp,
                                row: _vm.$vuetify.breakpoint.smAndUp,
                                wrap: ""
                              }
                            },
                            _vm._l(_vm.images, function(image, i) {
                              return _c(
                                "v-flex",
                                { key: i, attrs: { xs12: "", lg4: "" } },
                                [
                                  _c(
                                    "v-card",
                                    { attrs: { flat: "", tile: "" } },
                                    [
                                      _c("v-card-media", {
                                        attrs: {
                                          src: image.path,
                                          height: "150px"
                                        }
                                      })
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            })
                          )
                        : _c(
                            "v-layout",
                            {
                              staticStyle: { height: "200px" },
                              attrs: {
                                column: "",
                                "align-center": "",
                                "justify-center": ""
                              }
                            },
                            [_c("h1", [_vm._v("Album empty")])]
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
    require("vue-hot-reload-api")      .rerender("data-v-ebac5952", module.exports)
  }
}

/***/ }),

/***/ 66:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(241)
/* template */
var __vue_template__ = __webpack_require__(242)
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
Component.options.__file = "resources/assets/js/components/user/profile/CardAlbums.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-ebac5952", Component.options)
  } else {
    hotAPI.reload("data-v-ebac5952", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});