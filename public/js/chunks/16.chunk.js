webpackJsonp([16],{

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__CardMyTopics_vue__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__CardNewTopics_vue__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__CardBestTopics_vue__ = __webpack_require__(387);
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    components: { cardBestTopics: __WEBPACK_IMPORTED_MODULE_2__CardBestTopics_vue__["a" /* default */], cardNewTopics: __WEBPACK_IMPORTED_MODULE_1__CardNewTopics_vue__["a" /* default */], cardMyTopics: __WEBPACK_IMPORTED_MODULE_0__CardMyTopics_vue__["a" /* default */] },
    data: function data() {
        return {
            categories: [],
            msgAlert: true,
            question: null,
            title: null,
            emailReceive: false,
            defaultCatogories: ['Grammatik', 'Übung', 'Vokabel', 'Konjugation', 'Unterlagen']
        };
    },
    computed: {
        darked: function darked() {
            return this.$store.state.setting.darked;
        },
        questionParsed: function questionParsed() {
            return JSON.stringify([{ text: this.question.trim() }]);
        },
        user: function user() {
            return this.$store.state.user.user;
        }
    },
    methods: {
        publish: function publish() {
            var _this = this;

            if (this.question && this.question.length > 0 && this.categories.length > 0 && this.title.length > 0) {
                var data = { question: this.questionParsed, categories: this.categories, title: this.title, emailReceive: this.emailReceive };
                this.$store.dispatch('setting/setLoading', true);
                this.$http.post('/user/forum/topic/', data).then(function (response) {
                    if (_typeof(response.body) === "object") {
                        var categories = response.body.categories;
                        delete response.body.categories;
                        _this.$store.dispatch("topic/save", response.body);
                        _this.$store.dispatch("category/save", categories);
                        _this.question = null;
                        _this.title = null;
                        _this.emailReceive = false;
                        _this.categories = [];
                    }
                    _this.$store.dispatch('setting/setLoading', false);
                });
            }
        }
    }
});

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
//
//
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
    computed: {
        darked: function darked() {
            return this.$store.state.setting.darked;
        },
        end: function end() {
            return this.$store.state.query.queries.find(function (e) {
                return e.name === 'mytopics' && !e.next;
            });
        },
        query: function query() {
            return this.$store.state.query.queries.find(function (e) {
                return e.name === 'mytopics';
            });
        },
        user: function user() {
            return this.$store.state.user.user;
        },
        topics: function topics() {
            var _this = this;

            return this.$store.state.topic.topics.filter(function (topic, i) {
                return topic.user_id === _this.user.id && i < 3;
            });
        }
    },
    methods: {
        load: function load() {
            var _this2 = this;

            if (!this.query) {
                this.$store.dispatch('setting/setLoading', true);
                this.$http.get('/user/forum/mytopics').then(function (response) {
                    if (_typeof(response.body.data[0]) === "object") {
                        var users = [];
                        var categories = [];
                        response.body.data.map(function (topic) {
                            users.push(topic.user);
                            delete topic.user;
                            _this2.$store.dispatch("category/save", topic.categories);
                            delete topic.categories;
                        });
                        _this2.$store.dispatch("topic/save", response.body.data);
                        _this2.$store.dispatch("category/save", categories);
                        _this2.$store.dispatch("users/save", users);
                        _this2.$store.dispatch("query/save", { name: 'mytopics', next: response.body.next_page_url });
                    }
                    _this2.$store.dispatch('setting/setLoading', false);
                });
            }
        }
    },
    mounted: function mounted() {
        this.load();
    }
});

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
//
//
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
    computed: {
        darked: function darked() {
            return this.$store.state.setting.darked;
        },
        end: function end() {
            return this.$store.state.query.queries.find(function (e) {
                return e.name === 'NewTopic' && !e.next;
            });
        },
        query: function query() {
            return this.$store.state.query.queries.find(function (e) {
                return e.name === 'NewTopic';
            });
        },
        topics: function topics() {
            return JSON.parse(JSON.stringify(this.$store.state.topic.topics)).sort(function (topic1, topic2) {
                return topic1.id - topic2.id;
            });
        }
    },
    methods: {
        load: function load() {
            var _this = this;

            if (!this.query) {
                this.$store.dispatch('setting/setLoading', true);
                this.$http.get('/user/forum/news').then(function (response) {
                    if (_typeof(response.body.data[0]) === "object") {
                        var users = [];
                        var categories = [];
                        response.body.data.map(function (topic) {
                            users.push(topic.user);
                            delete topic.user;
                            _this.$store.dispatch("category/save", topic.categories);
                            delete topic.categories;
                        });
                        _this.$store.dispatch("topic/save", response.body.data);
                        _this.$store.dispatch("category/save", categories);
                        _this.$store.dispatch("users/save", users);
                        _this.$store.dispatch("query/save", { name: 'NewTopic', next: response.body.next_page_url });
                    }
                    _this.$store.dispatch('setting/setLoading', false);
                });
            }
        }
    },
    mounted: function mounted() {
        this.load();
    }
});

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
//
//
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
    computed: {
        darked: function darked() {
            return this.$store.state.setting.darked;
        },
        end: function end() {
            return this.$store.state.query.queries.find(function (e) {
                return e.name === 'BestTopic' && !e.next;
            });
        },
        query: function query() {
            return this.$store.state.query.queries.find(function (e) {
                return e.name === 'BestTopic';
            });
        },
        topics: function topics() {
            return JSON.parse(JSON.stringify(this.$store.state.topic.topics)).sort(function (topic1, topic2) {
                return topic2.topicresponses_count - topic1.topicresponses_count;
            });
        }
    },
    methods: {
        load: function load() {
            var _this = this;

            if (!this.query) {
                this.$store.dispatch('setting/setLoading', true);
                this.$http.get('/user/forum/best').then(function (response) {
                    if (_typeof(response.body.data[0]) === "object") {
                        var users = [];
                        var categories = [];
                        response.body.data.map(function (topic) {
                            users.push(topic.user);
                            delete topic.user;
                            _this.$store.dispatch("category/save", topic.categories);
                            delete topic.categories;
                        });
                        _this.$store.dispatch("topic/save", response.body.data);
                        _this.$store.dispatch("category/save", categories);
                        _this.$store.dispatch("users/save", users);
                        _this.$store.dispatch("query/save", { name: 'BestTopic', next: response.body.next_page_url });
                    }
                    _this.$store.dispatch('setting/setLoading', false);
                });
            }
        }
    },
    mounted: function mounted() {
        this.load();
    }
});

/***/ }),

/***/ 381:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(382);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(4).default
var update = add("167e28d6", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-e27976ac\",\"scoped\":false,\"sourceMap\":false}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Home.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-e27976ac\",\"scoped\":false,\"sourceMap\":false}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Home.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 382:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "\n.input_forum_category input{\n    min-height: 55px;\n}\n.noPadding{\n    padding: 0 !important;\n}\n", ""]);

// exports


/***/ }),

/***/ 383:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_env_modules_false_targets_browsers_last_2_versions_safari_7_debug_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_syntax_dynamic_import_node_modules_vue_loader_lib_selector_type_script_index_0_CardMyTopics_vue__ = __webpack_require__(223);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_9346d52a_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_CardMyTopics_vue__ = __webpack_require__(384);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_env_modules_false_targets_browsers_last_2_versions_safari_7_debug_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_syntax_dynamic_import_node_modules_vue_loader_lib_selector_type_script_index_0_CardMyTopics_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_9346d52a_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_CardMyTopics_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_9346d52a_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_CardMyTopics_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/user/forum/CardMyTopics.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-9346d52a", Component.options)
  } else {
    hotAPI.reload("data-v-9346d52a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 384:
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
    { attrs: { hover: "", to: "/forum/mytopics" } },
    [
      _c("v-card-title", { class: _vm.darked || "grey lighten-2" }, [
        _vm._v("\n        My topics\n    ")
      ]),
      _vm._v(" "),
      _c("v-divider"),
      _vm._v(" "),
      _c(
        "v-list",
        { staticStyle: { "max-height": "220px", overflow: "auto" } },
        _vm._l(_vm.topics, function(topic) {
          return _c(
            "div",
            { key: topic.id },
            [
              _c(
                "v-list-tile",
                { attrs: { to: "/forum/topic/" + topic.id } },
                [
                  _c(
                    "v-list-tile-content",
                    [
                      _c("v-list-tile-title", [_vm._v(_vm._s(topic.title))]),
                      _vm._v(" "),
                      _c("v-list-tile-sub-title", [
                        _vm._v(_vm._s(JSON.parse(topic.question)[0].text))
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("v-list-tile-action", [
                    _c("div", { staticStyle: { display: "flex" } }, [
                      _c(
                        "div",
                        {
                          staticStyle: {
                            color: "#1B95E0 !important",
                            "font-size": "20px"
                          }
                        },
                        [_vm._v(_vm._s(topic.topicresponses_count))]
                      ),
                      _vm._v(" "),
                      _c(
                        "small",
                        {
                          staticStyle: {
                            "align-self": "center",
                            "margin-left": "5px"
                          }
                        },
                        [_c("v-icon", [_vm._v("message")])],
                        1
                      )
                    ])
                  ])
                ],
                1
              ),
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
    require("vue-hot-reload-api")      .rerender("data-v-9346d52a", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ 385:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_env_modules_false_targets_browsers_last_2_versions_safari_7_debug_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_syntax_dynamic_import_node_modules_vue_loader_lib_selector_type_script_index_0_CardNewTopics_vue__ = __webpack_require__(224);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6a04faf9_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_CardNewTopics_vue__ = __webpack_require__(386);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_env_modules_false_targets_browsers_last_2_versions_safari_7_debug_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_syntax_dynamic_import_node_modules_vue_loader_lib_selector_type_script_index_0_CardNewTopics_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6a04faf9_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_CardNewTopics_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6a04faf9_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_CardNewTopics_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/user/forum/CardNewTopics.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6a04faf9", Component.options)
  } else {
    hotAPI.reload("data-v-6a04faf9", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 386:
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
    { attrs: { hover: "", to: "/forum/news" } },
    [
      _c("v-card-title", { class: _vm.darked || "grey lighten-2" }, [
        _vm._v("\n        The new Topics\n    ")
      ]),
      _vm._v(" "),
      _c("v-divider"),
      _vm._v(" "),
      _c(
        "v-list",
        { staticStyle: { "max-height": "300px", overflow: "auto" } },
        _vm._l(_vm.topics, function(topic) {
          return _c(
            "div",
            { key: topic.id },
            [
              _c(
                "v-list-tile",
                { attrs: { to: "/forum/topic/" + topic.id } },
                [
                  _c(
                    "v-list-tile-content",
                    [
                      _c("v-list-tile-title", [_vm._v(_vm._s(topic.title))]),
                      _vm._v(" "),
                      _c("v-list-tile-sub-title", [
                        _vm._v(_vm._s(JSON.parse(topic.question)[0].text))
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("v-list-tile-action", [
                    _c("div", { staticStyle: { display: "flex" } }, [
                      _c(
                        "div",
                        {
                          staticStyle: {
                            color: "#1B95E0 !important",
                            "font-size": "20px"
                          }
                        },
                        [_vm._v(_vm._s(topic.topicresponses_count))]
                      ),
                      _vm._v(" "),
                      _c(
                        "small",
                        {
                          staticStyle: {
                            "align-self": "center",
                            "margin-left": "5px"
                          }
                        },
                        [_c("v-icon", [_vm._v("message")])],
                        1
                      )
                    ])
                  ])
                ],
                1
              ),
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
    require("vue-hot-reload-api")      .rerender("data-v-6a04faf9", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ 387:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_env_modules_false_targets_browsers_last_2_versions_safari_7_debug_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_syntax_dynamic_import_node_modules_vue_loader_lib_selector_type_script_index_0_CardBestTopics_vue__ = __webpack_require__(225);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_62ed0ae3_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_CardBestTopics_vue__ = __webpack_require__(388);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_env_modules_false_targets_browsers_last_2_versions_safari_7_debug_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_syntax_dynamic_import_node_modules_vue_loader_lib_selector_type_script_index_0_CardBestTopics_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_62ed0ae3_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_CardBestTopics_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_62ed0ae3_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_CardBestTopics_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/user/forum/CardBestTopics.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-62ed0ae3", Component.options)
  } else {
    hotAPI.reload("data-v-62ed0ae3", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 388:
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
    { attrs: { hover: "", to: "/forum/best" } },
    [
      _c("v-card-title", { class: _vm.darked || "light-blue" }, [
        _vm._v("\n        The best Topics\n    ")
      ]),
      _vm._v(" "),
      _c("v-divider"),
      _vm._v(" "),
      _c(
        "v-list",
        { staticStyle: { "max-height": "300px", overflow: "auto" } },
        _vm._l(_vm.topics, function(topic) {
          return _c(
            "div",
            { key: topic.id },
            [
              _c(
                "v-list-tile",
                { attrs: { to: "/forum/topic/" + topic.id } },
                [
                  _c(
                    "v-list-tile-content",
                    [
                      _c("v-list-tile-title", [_vm._v(_vm._s(topic.title))]),
                      _vm._v(" "),
                      _c("v-list-tile-sub-title", [
                        _vm._v(_vm._s(JSON.parse(topic.question)[0].text))
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("v-list-tile-action", [
                    _c("div", { staticStyle: { display: "flex" } }, [
                      _c(
                        "div",
                        {
                          staticStyle: {
                            color: "#1B95E0 !important",
                            "font-size": "20px"
                          }
                        },
                        [_vm._v(_vm._s(topic.topicresponses_count))]
                      ),
                      _vm._v(" "),
                      _c(
                        "small",
                        {
                          staticStyle: {
                            "align-self": "center",
                            "margin-left": "5px"
                          }
                        },
                        [_c("v-icon", [_vm._v("message")])],
                        1
                      )
                    ])
                  ])
                ],
                1
              ),
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
    require("vue-hot-reload-api")      .rerender("data-v-62ed0ae3", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ 389:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-container",
    { attrs: { "grid-list-lg": "", "text-xs-left": "", fluid: "" } },
    [
      _c(
        "v-layout",
        { attrs: { column: "" } },
        [
          _c(
            "v-flex",
            { attrs: { lg12: "" } },
            [
              _c(
                "v-alert",
                {
                  attrs: {
                    outline: "",
                    color: _vm.darked || "info",
                    dismissible: "",
                    icon: "info"
                  },
                  model: {
                    value: _vm.msgAlert,
                    callback: function($$v) {
                      _vm.msgAlert = $$v
                    },
                    expression: "msgAlert"
                  }
                },
                [
                  _vm._v(
                    "\n                Hello and Welcome on the Weltimos forum.\n                Here you can help and get from with the whole community\n            "
                  )
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("v-flex", { attrs: { lg12: "" } }, [_c("card-my-topics")], 1),
          _vm._v(" "),
          _c(
            "v-flex",
            { attrs: { lg12: "" } },
            [
              _c(
                "v-layout",
                { attrs: { wrap: "", row: "" } },
                [
                  _c(
                    "v-flex",
                    { attrs: { xs12: "", lg6: "" } },
                    [_c("card-best-topics")],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-flex",
                    { attrs: { xs12: "", lg6: "" } },
                    [_c("card-new-topics")],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("v-flex", [_c("h1", [_vm._v(" Create a subject ")])]),
          _vm._v(" "),
          _c(
            "v-flex",
            [
              _c(
                "v-layout",
                { attrs: { column: "" } },
                [
                  _c(
                    "v-flex",
                    [
                      _c(
                        "v-layout",
                        { attrs: { row: "", wrap: "" } },
                        [
                          _c(
                            "v-flex",
                            { attrs: { lg6: "" } },
                            [
                              _c(
                                "v-container",
                                {
                                  class:
                                    _vm.$vuetify.breakpoint.smAndUp ||
                                    "noPadding",
                                  attrs: { fluid: "" }
                                },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      label: "Title",
                                      counter: "190",
                                      maxlength: "190",
                                      required: "",
                                      box: ""
                                    },
                                    model: {
                                      value: _vm.title,
                                      callback: function($$v) {
                                        _vm.title =
                                          typeof $$v === "string"
                                            ? $$v.trim()
                                            : $$v
                                      },
                                      expression: "title"
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
                            "v-flex",
                            { attrs: { lg6: "" } },
                            [
                              _c(
                                "v-container",
                                {
                                  class:
                                    _vm.$vuetify.breakpoint.smAndUp ||
                                    "noPadding",
                                  attrs: { fluid: "" }
                                },
                                [
                                  _c("v-select", {
                                    staticClass: "input_forum_category",
                                    attrs: {
                                      label: "Categories",
                                      chips: "",
                                      tags: "",
                                      autocomplete: "",
                                      required: "",
                                      clearable: "",
                                      "deletable-chips": "",
                                      items: _vm.defaultCatogories
                                    },
                                    model: {
                                      value: _vm.categories,
                                      callback: function($$v) {
                                        _vm.categories = $$v
                                      },
                                      expression: "categories"
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
                  ),
                  _vm._v(" "),
                  _c(
                    "v-flex",
                    [
                      _c(
                        "v-container",
                        {
                          class: _vm.$vuetify.breakpoint.smAndUp || "noPadding",
                          attrs: { fluid: "" }
                        },
                        [
                          _c("v-text-field", {
                            attrs: {
                              "multi-line": "",
                              box: "",
                              label: "Question",
                              required: ""
                            },
                            model: {
                              value: _vm.question,
                              callback: function($$v) {
                                _vm.question =
                                  typeof $$v === "string" ? $$v.trim() : $$v
                              },
                              expression: "question"
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
                    "v-flex",
                    { attrs: { lg12: "" } },
                    [
                      _c(
                        "v-container",
                        {
                          class: _vm.$vuetify.breakpoint.smAndUp || "noPadding",
                          attrs: { fluid: "" }
                        },
                        [
                          _c("v-checkbox", {
                            attrs: {
                              label:
                                "Receive an email alert when someone answers about it."
                            },
                            model: {
                              value: _vm.emailReceive,
                              callback: function($$v) {
                                _vm.emailReceive = $$v
                              },
                              expression: "emailReceive"
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
                    "v-flex",
                    { attrs: { lg12: "" } },
                    [
                      _c(
                        "v-container",
                        {
                          class: _vm.$vuetify.breakpoint.smAndUp || "noPadding",
                          attrs: { fluid: "" }
                        },
                        [
                          _c(
                            "v-btn",
                            {
                              staticStyle: { "margin-left": "0px" },
                              attrs: { color: "success", lg: "" },
                              on: { click: _vm.publish }
                            },
                            [
                              _vm._v(
                                "\n                            create the subject\n                        "
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
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-e27976ac", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_env_modules_false_targets_browsers_last_2_versions_safari_7_debug_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_syntax_dynamic_import_node_modules_vue_loader_lib_selector_type_script_index_0_Home_vue__ = __webpack_require__(222);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_e27976ac_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Home_vue__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(3);
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(381)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_env_modules_false_targets_browsers_last_2_versions_safari_7_debug_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_syntax_dynamic_import_node_modules_vue_loader_lib_selector_type_script_index_0_Home_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_e27976ac_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Home_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_e27976ac_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Home_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/user/forum/Home.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-e27976ac", Component.options)
  } else {
    hotAPI.reload("data-v-e27976ac", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

});