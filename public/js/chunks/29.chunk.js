webpackJsonp([29],{

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Topic__ = __webpack_require__(390);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

//
//
//
//
//
//
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
    components: { topic: __WEBPACK_IMPORTED_MODULE_0__Topic__["a" /* default */] },
    data: function data() {
        return {
            ready: true
        };
    },
    computed: {
        end: function end() {
            var _this = this;

            return this.$store.state.query.queries.find(function (e) {
                return e.name === _this.name && !e.next;
            });
        },
        query: function query() {
            var _this2 = this;

            return this.$store.state.query.queries.find(function (e) {
                return e.name === _this2.name;
            });
        },
        topics: function topics() {
            return this.$store.state.topic.topics;
        },
        name: function name() {
            return 'topics' + this.$route.params.type;
        }
    },
    methods: {
        loadMore: function loadMore() {
            var _this3 = this;

            if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 600) {
                if (!this.end && this.ready) {
                    this.ready = false;
                    this.$store.dispatch('setting/setLoading', true);
                    this.$http.get(this.query.next).then(function (response) {
                        if (_typeof(response.body) === "object") {
                            var users = [];
                            response.body.data.map(function (topic) {
                                users.push(topic.user);
                                delete topic.user;
                            });
                            var categories = __WEBPACK_IMPORTED_MODULE_0__Topic__["a" /* default */].categories;
                            delete __WEBPACK_IMPORTED_MODULE_0__Topic__["a" /* default */].categories;
                            _this3.$store.dispatch("topic/save", response.body.data);
                            _this3.$store.dispatch("category/save", categories);
                            _this3.$store.dispatch("users/save", users);
                            _this3.$store.dispatch("query/save", { name: _this3.name, next: response.body.next_page_url });
                        }
                        _this3.ready = true;
                        _this3.$store.dispatch('setting/setLoading', false);
                    });
                }
            }
        },
        load: function load() {
            var _this4 = this;

            if (!this.query && this.ready) {
                this.ready = false;
                this.$store.dispatch('setting/setLoading', true);
                this.$http.get('/user/forum/' + this.$route.params.type).then(function (response) {
                    if (_typeof(response.body.data[0]) === "object") {
                        var users = [];
                        response.body.data.map(function (topic) {
                            users.push(topic.user);
                            delete topic.user;
                            _this4.$store.dispatch("category/save", topic.categories);
                            delete topic.categories;
                        });
                        _this4.$store.dispatch("topic/save", response.body.data);
                        _this4.$store.dispatch("users/save", users);
                        _this4.$store.dispatch("query/save", { name: _this4.name, next: response.body.next_page_url });
                    }
                    _this4.ready = true;
                    _this4.$store.dispatch('setting/setLoading', false);
                });
            }
        }
    },
    mounted: function mounted() {
        this.load();
    },

    watch: {
        '$route.params.type': function $routeParamsType(data) {
            this.load();
        }
    }
});

/***/ }),

/***/ 227:
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

/* harmony default export */ __webpack_exports__["a"] = ({
    props: {
        topic: Object
    },
    computed: {
        owner: function owner() {
            var _this = this;

            return this.$store.state.users.users.find(function (user) {
                return user.id === _this.topic.user_id;
            }) || {};
        }
    }
});

/***/ }),

/***/ 390:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_env_modules_false_targets_browsers_last_2_versions_safari_7_debug_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_syntax_dynamic_import_node_modules_vue_loader_lib_selector_type_script_index_0_Topic_vue__ = __webpack_require__(227);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_35aa7c18_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Topic_vue__ = __webpack_require__(391);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_env_modules_false_targets_browsers_last_2_versions_safari_7_debug_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_syntax_dynamic_import_node_modules_vue_loader_lib_selector_type_script_index_0_Topic_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_35aa7c18_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Topic_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_35aa7c18_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Topic_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/user/forum/Topic.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-35aa7c18", Component.options)
  } else {
    hotAPI.reload("data-v-35aa7c18", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 391:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-list-tile",
    { attrs: { to: "/forum/topic/" + _vm.topic.id, avatar: "" } },
    [
      _c("v-list-tile-avatar", [
        _c("img", { attrs: { src: _vm.owner.avatar, alt: "avatar" } })
      ]),
      _vm._v(" "),
      _c(
        "v-list-tile-content",
        [
          _c("v-list-tile-sub-title", [
            _vm._v(_vm._s(_vm.owner.name + " " + _vm.owner.forename))
          ]),
          _vm._v(" "),
          _c("v-list-tile-title", [_vm._v(_vm._s(_vm.topic.title))]),
          _vm._v(" "),
          _c("v-list-tile-sub-title", [
            _vm._v(_vm._s(JSON.parse(_vm.topic.question)[0].text))
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
              attrs: {
                to: "/forum/topic/" + _vm.topic.id,
                color: "primary",
                outline: ""
              }
            },
            [_vm._v("\n            Show\n        ")]
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

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-35aa7c18", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ 392:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-card",
    {
      directives: [
        {
          name: "scroll",
          rawName: "v-scroll",
          value: { callback: this.loadMore },
          expression: "{callback: this.loadMore}"
        }
      ],
      attrs: { flat: "", height: "auto" }
    },
    [
      _c("v-card-title", { staticClass: "headline" }, [
        _vm._v(
          "\n        " +
            _vm._s(_vm.$route.params.type) +
            " " +
            _vm._s(_vm.plural("topic", _vm.topics.length)) +
            "\n    "
        )
      ]),
      _vm._v(" "),
      _c("v-divider"),
      _vm._v(" "),
      _c(
        "v-list",
        { attrs: { "two-line": "" } },
        _vm._l(_vm.topics, function(topic) {
          return _c(
            "div",
            { key: topic.id },
            [
              _c("topic", { attrs: { topic: topic } }),
              _vm._v(" "),
              _c("v-divider")
            ],
            1
          )
        })
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-784dc4a2", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_env_modules_false_targets_browsers_last_2_versions_safari_7_debug_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_syntax_dynamic_import_node_modules_vue_loader_lib_selector_type_script_index_0_Topics_vue__ = __webpack_require__(226);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_784dc4a2_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Topics_vue__ = __webpack_require__(392);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_env_modules_false_targets_browsers_last_2_versions_safari_7_debug_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_syntax_dynamic_import_node_modules_vue_loader_lib_selector_type_script_index_0_Topics_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_784dc4a2_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Topics_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_784dc4a2_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Topics_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/user/forum/Topics.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-784dc4a2", Component.options)
  } else {
    hotAPI.reload("data-v-784dc4a2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

});