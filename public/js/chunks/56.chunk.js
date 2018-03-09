webpackJsonp([56],{

/***/ 637:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_env_modules_false_targets_browsers_last_2_versions_safari_7_debug_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_syntax_dynamic_import_node_modules_vue_loader_lib_selector_type_script_index_0_Box_vue__ = __webpack_require__(638);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_27f88afe_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Box_vue__ = __webpack_require__(645);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(3);
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(646)
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_env_modules_false_targets_browsers_last_2_versions_safari_7_debug_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_syntax_dynamic_import_node_modules_vue_loader_lib_selector_type_script_index_0_Box_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_27f88afe_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Box_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_27f88afe_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Box_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/user/Box.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-27f88afe", Component.options)
  } else {
    hotAPI.reload("data-v-27f88afe", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 638:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__box_Requests_vue__ = __webpack_require__(680);
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
    components: { requests: __WEBPACK_IMPORTED_MODULE_0__box_Requests_vue__["a" /* default */] },
    data: function data() {
        return {};
    },
    computed: {
        user: function user() {
            return this.$store.state.user.user;
        }
    }
});

/***/ }),

/***/ 645:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticStyle: { "margin-top": "20px" }, attrs: { id: "box" } },
    [_c("requests")],
    1
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-27f88afe", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ 646:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(647);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(4).default
var update = add("8d648f7c", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-27f88afe\",\"scoped\":false,\"sourceMap\":false}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Box.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-27f88afe\",\"scoped\":false,\"sourceMap\":false}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Box.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 647:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "\n#box .tabs__container{\n    justify-content: space-around;\n}\n", ""]);

// exports


/***/ }),

/***/ 648:
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

/* harmony default export */ __webpack_exports__["a"] = ({
    props: {
        message: Object
    },
    computed: {
        user: function user() {
            return this.$store.state.user.user;
        }
    }
});

/***/ }),

/***/ 649:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_env_modules_false_targets_browsers_last_2_versions_safari_7_debug_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_syntax_dynamic_import_node_modules_vue_loader_lib_selector_type_script_index_0_Message_vue__ = __webpack_require__(648);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5c26b5f6_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Message_vue__ = __webpack_require__(684);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(3);
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(682)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-5c26b5f6"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_env_modules_false_targets_browsers_last_2_versions_safari_7_debug_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_syntax_dynamic_import_node_modules_vue_loader_lib_selector_type_script_index_0_Message_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5c26b5f6_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Message_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5c26b5f6_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Message_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/user/box/Message.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5c26b5f6", Component.options)
  } else {
    hotAPI.reload("data-v-5c26b5f6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 656:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__DiscussionState_vue__ = __webpack_require__(665);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__MessageBox_vue__ = __webpack_require__(661);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__State__ = __webpack_require__(662);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    components: { messageBox: __WEBPACK_IMPORTED_MODULE_1__MessageBox_vue__["a" /* default */], discussionState: __WEBPACK_IMPORTED_MODULE_0__DiscussionState_vue__["a" /* default */] },
    props: {
        open: Boolean,
        boxmessage: Object,
        boxmessages: Array
    },
    data: function data() {
        return {
            dialog: false,
            index: -1,
            store: __WEBPACK_IMPORTED_MODULE_2__State__["a" /* default */].state
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
                this.index = this.boxmessages.indexOf(this.boxmessage);
                this.dialog = data;
            }
        },
        dialog: function dialog(data) {
            if (!data) {
                this.$emit('close');
            }
        },
        boxmessage: function boxmessage(_boxmessage) {
            this.index = this.boxmessages.indexOf(_boxmessage);
        },
        index: function index(_index) {
            if (this.boxmessages[_index]) this.$scrollTo('#boxmessage' + this.boxmessages[_index].id, 10, { container: 'body' });
        }
    }
});

/***/ }),

/***/ 657:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_env_modules_false_targets_browsers_last_2_versions_safari_7_debug_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_syntax_dynamic_import_node_modules_vue_loader_lib_selector_type_script_index_0_DialogMessage_vue__ = __webpack_require__(656);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_454bf364_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_DialogMessage_vue__ = __webpack_require__(660);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(3);
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(658)
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_env_modules_false_targets_browsers_last_2_versions_safari_7_debug_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_syntax_dynamic_import_node_modules_vue_loader_lib_selector_type_script_index_0_DialogMessage_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_454bf364_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_DialogMessage_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_454bf364_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_DialogMessage_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/user/box/DialogMessage.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-454bf364", Component.options)
  } else {
    hotAPI.reload("data-v-454bf364", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 658:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(659);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(4).default
var update = add("59c9565a", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-454bf364\",\"scoped\":false,\"sourceMap\":false}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./DialogMessage.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-454bf364\",\"scoped\":false,\"sourceMap\":false}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./DialogMessage.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 659:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "\n.notSpace{\n    padding: 0 !important;\n    margin: 0 !important;\n}\n.dialog--active{\n    overflow: hidden;\n}\n.carousel_item{\n    position: relative !important\n}\n", ""]);

// exports


/***/ }),

/***/ 660:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.open
    ? _c(
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
                    height: "597px",
                    background: "transparent"
                  },
                  attrs: {
                    cycle: false,
                    "hide-controls": _vm.boxmessages.length < 2,
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
                _vm._l(_vm.boxmessages, function(boxmessage, i) {
                  return _c(
                    "v-carousel-item",
                    {
                      key: i,
                      staticClass: "carousel_item",
                      attrs: { src: " " }
                    },
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
                                  staticClass: "notSpace",
                                  staticStyle: { overflow: "hidden" },
                                  attrs: { "grid-list-md": "" }
                                },
                                [
                                  _c(
                                    "v-layout",
                                    {
                                      staticClass: "notSpace",
                                      attrs: { row: "" }
                                    },
                                    [
                                      _c(
                                        "v-flex",
                                        {
                                          staticClass: "notSpace",
                                          attrs: { lg6: "" }
                                        },
                                        [
                                          _c("discussion-state", {
                                            attrs: { boxmessage: boxmessage }
                                          })
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-flex",
                                        {
                                          staticClass: "notSpace",
                                          attrs: { lg6: "" }
                                        },
                                        [
                                          _c("message-box", {
                                            attrs: {
                                              open: _vm.open,
                                              boxmessage: boxmessage
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
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-454bf364", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ 661:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_env_modules_false_targets_browsers_last_2_versions_safari_7_debug_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_syntax_dynamic_import_node_modules_vue_loader_lib_selector_type_script_index_0_MessageBox_vue__ = __webpack_require__(663);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5a227ab6_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_MessageBox_vue__ = __webpack_require__(675);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(3);
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(673)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-5a227ab6"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_env_modules_false_targets_browsers_last_2_versions_safari_7_debug_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_syntax_dynamic_import_node_modules_vue_loader_lib_selector_type_script_index_0_MessageBox_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5a227ab6_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_MessageBox_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5a227ab6_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_MessageBox_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/user/box/MessageBox.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5a227ab6", Component.options)
  } else {
    hotAPI.reload("data-v-5a227ab6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 662:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Store = function Store() {
    _classCallCheck(this, Store);

    this.state = {
        loading: false
    };
};

/* harmony default export */ __webpack_exports__["a"] = (new Store());

/***/ }),

/***/ 663:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Message_vue__ = __webpack_require__(649);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__MessageBoxForm_vue__ = __webpack_require__(691);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__DialogFormEdit_vue__ = __webpack_require__(697);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    components: { message: __WEBPACK_IMPORTED_MODULE_0__Message_vue__["a" /* default */], messageBoxForm: __WEBPACK_IMPORTED_MODULE_1__MessageBoxForm_vue__["a" /* default */], dialogFormEdit: __WEBPACK_IMPORTED_MODULE_2__DialogFormEdit_vue__["a" /* default */] },
    props: {
        boxmessage: Object
    },
    data: function data() {
        return {
            requestDelete: false,
            dialogFormEdit: false,
            loading: false
        };
    },

    computed: {
        user: function user() {
            return this.$store.state.user.user;
        },
        owner: function owner() {
            var _this = this;

            return this.$store.state.users.users.find(function (user) {
                return user.id === _this.boxmessage.user_id;
            });
        },
        messages: function messages() {
            var _this2 = this;

            return this.$store.state.message.messages.filter(function (message) {
                return message.request_id === _this2.boxmessage.id;
            });
        }
    },
    methods: {
        destroy: function destroy() {
            var _this3 = this;

            this.loading = true;
            this.$http.delete('/user/request/' + this.boxmessage.id).then(function (response) {
                if (response.body.status === 1) {
                    _this3.loading = false;
                    _this3.$store.dispatch('boxmessage/delete', _this3.boxmessage);
                }
            });
        }
    },
    mounted: function mounted() {
        var _this4 = this;

        console.log(this);
        this.$http.get('/user/request/' + this.boxmessage.id + '/message').then(function (response) {
            if (Array.isArray(response.body.data)) {
                _this4.$store.dispatch('message/save', response.body.data);
                _this4.$store.dispatch("query/save", { name: 'messagebox', next: response.body.next_page_url, id: parseInt(_this4.boxmessage.id) });
            }
        });
    }
});

/***/ }),

/***/ 665:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_env_modules_false_targets_browsers_last_2_versions_safari_7_debug_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_syntax_dynamic_import_node_modules_vue_loader_lib_selector_type_script_index_0_DiscussionState_vue__ = __webpack_require__(666);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_ce001990_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_DiscussionState_vue__ = __webpack_require__(672);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(3);
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(670)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-ce001990"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_env_modules_false_targets_browsers_last_2_versions_safari_7_debug_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_syntax_dynamic_import_node_modules_vue_loader_lib_selector_type_script_index_0_DiscussionState_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_ce001990_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_DiscussionState_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_ce001990_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_DiscussionState_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/user/box/DiscussionState.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-ce001990", Component.options)
  } else {
    hotAPI.reload("data-v-ce001990", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 666:
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

/* harmony default export */ __webpack_exports__["a"] = ({
    props: {
        boxmessage: Object
    },
    data: function data() {
        return {
            msgAlert: true
        };
    },
    computed: {
        user: function user() {
            return this.$store.state.user.user;
        },
        discussionstate: function discussionstate() {
            var _this = this;

            return this.$store.state.discussionstate.discussionstates.find(function (discussionstate) {
                return discussionstate.request_id === _this.boxmessage.id;
            }) || {};
        },
        darked: function darked() {
            return this.$store.state.setting.darked;
        },
        owner: function owner() {
            var _this2 = this;

            return this.$store.state.users.users.find(function (user) {
                return user.id === _this2.discussionstate.user_id;
            }) || {};
        }
    },
    methods: {
        migrateState: function migrateState(state) {
            var _this3 = this;

            this.$http.post('/user/request/' + this.boxmessage.id + '/discussionstate', { state: state }).then(function (response) {
                if (response.body.id) {
                    _this3.$store.dispatch('discussionstate/save', response.body);
                }
            });
        }
    },
    mounted: function mounted() {
        var _this4 = this;

        this.$http.get('/user/request/' + this.boxmessage.id + '/discussionstate').then(function (response) {
            if (response.body.id) {
                var user = response.body.user;
                delete response.body.user;
                _this4.$store.dispatch('discussionstate/save', response.body);
                _this4.$store.dispatch('users/save', user);
            }
        });
    }
});

/***/ }),

/***/ 670:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(671);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(4).default
var update = add("76d6c4f2", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-ce001990\",\"scoped\":true,\"sourceMap\":false}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./DiscussionState.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-ce001990\",\"scoped\":true,\"sourceMap\":false}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./DiscussionState.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 671:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "\n.negocitionBg[data-v-ce001990]{\n    background-size: contain;\n    background-color: turquoise;\n    background-position-x: 50%;\n    background-image: url(https://atmanco.com/wp-content/uploads/2015/04/negociation-skills1.png);\n}\n.documentBg[data-v-ce001990]{\n    background-size: contain;\n    background-position-x: 50%;\n    background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAOURTGoqGw6bodoKAkQFt1Qoi8kNEQ9QyIYMecs3SQG-tnlFqmw);\n}\n.discussionEndBg[data-v-ce001990]{\n    background-size: contain;\n    background-position-x: 50%;\n    background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjuXqngtXmv1rNogLdpCzdtz7cXqnneVmWSQu928dqNIrO7v-F0g);\n}\n", ""]);

// exports


/***/ }),

/***/ 672:
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
    { attrs: { height: "600px" } },
    [
      _c("v-card-title", { staticClass: "headline" }, [
        _vm._v("State of Discussion")
      ]),
      _vm._v(" "),
      _c(
        "v-alert",
        {
          attrs: { color: _vm.darked || "info", dismissible: "", icon: "info" },
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
            "\n        " +
              _vm._s(_vm.owner.name + " " + _vm.owner.forename) +
              " propose you to pass to the next step of discussions.\n    "
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "v-stepper",
        {
          attrs: { vertical: "" },
          model: {
            value: _vm.discussionstate.confirmated,
            callback: function($$v) {
              _vm.$set(_vm.discussionstate, "confirmated", $$v)
            },
            expression: "discussionstate.confirmated"
          }
        },
        [
          _c(
            "v-stepper-step",
            {
              attrs: {
                step: "1",
                complete: _vm.discussionstate.confirmated > 1
              }
            },
            [
              _vm._v("\n            Negotiations\n            "),
              _c("small", [
                _vm._v(
                  "In this step it is a question of finding an agreement at the price level."
                )
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "v-stepper-content",
            { attrs: { step: "1" } },
            [
              _c("v-card", {
                staticClass: "negocitionBg",
                attrs: { height: "150px" }
              }),
              _vm._v(" "),
              _vm.discussionstate.confirmated === _vm.discussionstate.state &&
              _vm.discussionstate.user_id !== _vm.user.id
                ? _c(
                    "v-btn",
                    {
                      attrs: { color: "primary" },
                      nativeOn: {
                        click: function($event) {
                          _vm.migrateState(2)
                        }
                      }
                    },
                    [_vm._v("Continue")]
                  )
                : _c("v-btn", { attrs: { disabled: "" } }, [
                    _vm._v("Waiting for the response")
                  ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-stepper-step",
            {
              attrs: {
                step: "2",
                complete: _vm.discussionstate.confirmated > 2
              }
            },
            [
              _vm._v("\n            Send documents\n            "),
              _c("small", [
                _vm._v(
                  "You have already found an agreement and now we need your documents to process your request"
                )
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "v-stepper-content",
            { attrs: { step: "2" } },
            [
              _c("v-card", {
                staticClass: "documentBg",
                attrs: { height: "150px" }
              }),
              _vm._v(" "),
              _vm.discussionstate.confirmated === _vm.discussionstate.state &&
              _vm.discussionstate.user_id !== _vm.user.id
                ? _c(
                    "v-btn",
                    {
                      attrs: { color: "primary" },
                      nativeOn: {
                        click: function($event) {
                          _vm.migrateState(3)
                        }
                      }
                    },
                    [_vm._v("Continue")]
                  )
                : _c("v-btn", { attrs: { disabled: "" } }, [
                    _vm._v("Waiting for the response")
                  ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-stepper-step",
            {
              attrs: {
                step: "3",
                complete: _vm.discussionstate.confirmated > 3
              }
            },
            [
              _vm._v("\n            Closing the discussion\n            "),
              _c("small", [
                _vm._v(
                  "We have already processed your application and you have the documents that certify it."
                )
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "v-stepper-content",
            { attrs: { step: "3" } },
            [
              _c("v-card", {
                staticClass: "discussionEndBg",
                attrs: { height: "150px" }
              }),
              _vm._v(" "),
              _vm.discussionstate.confirmated === _vm.discussionstate.state &&
              _vm.discussionstate.user_id !== _vm.user.id
                ? _c(
                    "v-btn",
                    {
                      attrs: { color: "primary" },
                      nativeOn: {
                        click: function($event) {
                          _vm.migrateState(4)
                        }
                      }
                    },
                    [_vm._v("Finish")]
                  )
                : _c("v-btn", { attrs: { disabled: "" } }, [
                    _vm._v("Waiting for the response")
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
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-ce001990", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ 673:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(674);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(4).default
var update = add("132ce3de", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5a227ab6\",\"scoped\":true,\"sourceMap\":false}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./MessageBox.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5a227ab6\",\"scoped\":true,\"sourceMap\":false}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./MessageBox.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 674:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "\n[data-v-5a227ab6]::selection{\n    background: rgba(82,179,217,0.3);\n    color: inherit;\n}\n\n/* M E S S A G E S */\n.chat[data-v-5a227ab6] {\n    list-style: none;\n    background: none;\n    margin: 0;\n    padding: 0 0 50px 0;\n    max-height: 475px;\n    margin-bottom: 10px;\n    overflow-y: auto;\n}\n@media screen and (max-width: 800px) {\n.msg img[data-v-5a227ab6] {\n        width: 300px;\n}\n}\n@-webikt-keyframes pulse-data-v-5a227ab6 {\nfrom { opacity: 0;\n}\nto { opacity: 0.5;\n}\n}\n[data-v-5a227ab6]::-webkit-scrollbar {\n    min-width: 12px;\n    width: 12px;\n    max-width: 12px;\n    min-height: 12px;\n    height: 12px;\n    max-height: 12px;\n    background: #e5e5e5;\n    box-shadow: inset 0px 50px 0px rgba(82,179,217,0.9), inset 0px -52px 0px #fafafa;\n}\n[data-v-5a227ab6]::-webkit-scrollbar-thumb {\n    background: #bbb;\n    border: none;\n    border-radius: 100px;\n    border: solid 3px #e5e5e5;\n    box-shadow: inset 0px 0px 3px #999;\n}\n[data-v-5a227ab6]::-webkit-scrollbar-thumb:hover {\n    background: #b0b0b0;\n    box-shadow: inset 0px 0px 3px #888;\n}\n[data-v-5a227ab6]::-webkit-scrollbar-thumb:active {\n    background: #aaa;\n    box-shadow: inset 0px 0px 3px #7f7f7f;\n}\n[data-v-5a227ab6]::-webkit-scrollbar-button {\n    display: block;\n    height: 26px;\n}\n\n", ""]);

// exports


/***/ }),

/***/ 675:
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
    { staticStyle: { position: "relative" }, attrs: { height: "600px" } },
    [
      _c(
        "v-card-title",
        { staticClass: "headline" },
        [
          _vm._v("\n        Discussion\n        "),
          _c("v-spacer"),
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
                  _vm.user.id === _vm.owner.id
                    ? _c(
                        "v-list-tile",
                        {
                          on: {
                            click: function($event) {
                              _vm.dialogFormEdit = true
                            }
                          }
                        },
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
                    : _vm._e(),
                  _vm._v(" "),
                  _c(
                    "v-list-tile",
                    {
                      on: {
                        click: function($event) {
                          _vm.requestDelete = true
                        }
                      }
                    },
                    [
                      _c(
                        "v-list-tile-action",
                        [_c("v-icon", [_vm._v("delete")])],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-list-tile-content",
                        [_c("v-list-tile-title", [_vm._v("Delete")])],
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
      _c(
        "ul",
        { staticClass: "chat" },
        _vm._l(_vm.messages, function(message) {
          return _c(
            "div",
            { key: message.id },
            [_c("message", { attrs: { message: message } })],
            1
          )
        })
      ),
      _vm._v(" "),
      _c("message-box-form", { attrs: { boxmessage: _vm.boxmessage } }),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: { "max-width": "290" },
          model: {
            value: _vm.requestDelete,
            callback: function($$v) {
              _vm.requestDelete = $$v
            },
            expression: "requestDelete"
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
                _vm._v("Deleting the request")
              ]),
              _vm._v(" "),
              _c("v-divider"),
              _vm._v(" "),
              _c("v-card-text", [
                _vm._v(
                  "\n                Are you sure you want to delete this request?\n            "
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
                          _vm.requestDelete = false
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
      ),
      _vm._v(" "),
      _c("dialog-form-edit", {
        attrs: { boxmessage: _vm.boxmessage, open: _vm.dialogFormEdit },
        on: {
          close: function($event) {
            _vm.dialogFormEdit = false
          }
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-5a227ab6", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ 676:
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
        boxmessage: Object
    },
    computed: {
        user: function user() {
            return this.$store.state.user.user;
        }
    }
});

/***/ }),

/***/ 677:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_env_modules_false_targets_browsers_last_2_versions_safari_7_debug_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_syntax_dynamic_import_node_modules_vue_loader_lib_selector_type_script_index_0_Request_vue__ = __webpack_require__(676);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5683b704_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Request_vue__ = __webpack_require__(678);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_env_modules_false_targets_browsers_last_2_versions_safari_7_debug_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_syntax_dynamic_import_node_modules_vue_loader_lib_selector_type_script_index_0_Request_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5683b704_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Request_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5683b704_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Request_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/user/box/Request.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5683b704", Component.options)
  } else {
    hotAPI.reload("data-v-5683b704", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 678:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { attrs: { id: "boxmessage" + _vm.boxmessage.id } },
    [
      _c(
        "v-list-tile",
        { attrs: { avatar: "" }, on: { click: function($event) {} } },
        [
          _c("v-list-tile-avatar", [
            _c("img", { attrs: { src: _vm.user.avatar, alt: "boxmessage" } })
          ]),
          _vm._v(" "),
          _c(
            "v-list-tile-content",
            {
              on: {
                click: function($event) {
                  _vm.dialog = true
                }
              }
            },
            [
              _c("v-list-tile-title", [_vm._v(_vm._s(_vm.boxmessage.town))]),
              _vm._v(" "),
              _c("v-list-tile-sub-title", [
                _vm._v(_vm._s(_vm.boxmessage.offer))
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-list-tile-action",
            { staticStyle: { "margin-left": "15px" } },
            [
              _c("v-btn", { attrs: { color: "primary", outline: "" } }, [
                _vm._v("\n                Show\n            ")
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
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-5683b704", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ 679:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Request_vue__ = __webpack_require__(677);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__DialogMessage_vue__ = __webpack_require__(657);
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
    components: { request: __WEBPACK_IMPORTED_MODULE_0__Request_vue__["a" /* default */], dialogMessage: __WEBPACK_IMPORTED_MODULE_1__DialogMessage_vue__["a" /* default */] },
    data: function data() {
        return {
            ready: true,
            openDialogMessage: false,
            boxmessage: {}
        };
    },
    computed: {
        user: function user() {
            return this.$store.state.user.user;
        },
        boxmessages: function boxmessages() {
            return this.$store.state.boxmessage.boxmessages;
        },
        end: function end() {
            return this.$store.state.query.queries.find(function (e) {
                return e.name === "sentmessage" && !e.next;
            });
        },
        query: function query() {
            return this.$store.state.query.queries.find(function (e) {
                return e.name === "sentmessage";
            });
        },
        scrollTop: function scrollTop() {
            var scroll = this.$store.state.setting.scrollTops.find(function (e) {
                return e.name === "sentmessage";
            }) || {};
            return scroll.scrollTop;
        }
    },
    methods: {
        loadMore: function loadMore() {
            var _this = this;

            if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 600) {
                if (!this.end && this.ready) {
                    this.ready = false;
                    console.log(this.query);
                    this.$store.dispatch('setting/setLoading', true);
                    this.$http.get(this.query.next).then(function (response) {
                        if (_typeof(response.body) === "object") {
                            _this.$store.dispatch("boxmessage/save", response.body.data);
                            _this.$store.dispatch("query/save", { name: 'sentmessage', next: response.body.next_page_url });
                        }
                        _this.ready = true;
                        _this.$store.dispatch('setting/setLoading', false);
                    });
                }
            }
        },
        load: function load() {
            var _this2 = this;

            if (!this.query && this.ready) {
                this.ready = false;
                this.$store.dispatch('setting/setLoading', true);
                var url = this.user.role === "admin" ? '/admin/request' : '/user/request/sent';
                this.$http.get(url).then(function (response) {
                    if (_typeof(response.body.data) === "object") {
                        _this2.$store.dispatch("boxmessage/save", response.body.data);
                        _this2.$store.dispatch("query/save", { name: 'sentmessage', next: response.body.next_page_url });
                    }
                    _this2.ready = true;
                    _this2.$store.dispatch('setting/setLoading', false);
                });
            }
        },
        openBoxMessage: function openBoxMessage(boxmessage) {
            this.openDialogMessage = true;
            this.boxmessage = boxmessage;
        }
    },
    mounted: function mounted() {
        this.load();
        document.body.scrollTop = this.scrollTop;
    }
});

/***/ }),

/***/ 680:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_env_modules_false_targets_browsers_last_2_versions_safari_7_debug_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_syntax_dynamic_import_node_modules_vue_loader_lib_selector_type_script_index_0_Requests_vue__ = __webpack_require__(679);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_729be736_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Requests_vue__ = __webpack_require__(681);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_env_modules_false_targets_browsers_last_2_versions_safari_7_debug_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_syntax_dynamic_import_node_modules_vue_loader_lib_selector_type_script_index_0_Requests_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_729be736_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Requests_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_729be736_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Requests_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/user/box/Requests.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-729be736", Component.options)
  } else {
    hotAPI.reload("data-v-729be736", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 681:
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
      _c(
        "v-toolbar",
        { attrs: { flat: "" } },
        [_c("v-toolbar-title", [_vm._v("List of requests")])],
        1
      ),
      _vm._v(" "),
      _c(
        "v-list",
        { attrs: { "two-line": "" } },
        _vm._l(_vm.boxmessages, function(boxmessage) {
          return _c("request", {
            key: boxmessage.id,
            attrs: { boxmessage: boxmessage },
            nativeOn: {
              click: function($event) {
                _vm.openBoxMessage(boxmessage)
              }
            }
          })
        })
      ),
      _vm._v(" "),
      _vm.ready && _vm.boxmessages.length === 0
        ? _c(
            "v-layout",
            { staticStyle: { height: "300px", "align-items": "center" } },
            [
              _c("v-flex", { staticStyle: { "text-align": "center" } }, [
                _c("h2", [
                  _vm._v(
                    "No Request (for all pre-registrations or anything else please consult the section germain and some universities)"
                  )
                ])
              ])
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.$vuetify.breakpoint.smAndUp
        ? _c("dialog-message", {
            attrs: {
              open: _vm.openDialogMessage,
              boxmessage: _vm.boxmessage,
              boxmessages: _vm.boxmessages
            },
            on: {
              close: function($event) {
                _vm.openDialogMessage = !_vm.openDialogMessage
              }
            }
          })
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-729be736", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ 682:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(683);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(4).default
var update = add("6b94b51a", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5c26b5f6\",\"scoped\":true,\"sourceMap\":false}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Message.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5c26b5f6\",\"scoped\":true,\"sourceMap\":false}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Message.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 683:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "\nli[data-v-5c26b5f6] {\n    padding: 0.5rem;\n    overflow: hidden;\n    display: flex;\n}\n.avatar[data-v-5c26b5f6] {\n    width: 40px;\n    height: 40px;\n    position: relative;\n    display: block;\n    z-index: 2;\n    border-radius: 100%;\n    -webkit-border-radius: 100%;\n    -moz-border-radius: 100%;\n    -ms-border-radius: 100%;\n    background-color: rgba(255,255,255,0.9);\n}\n.other .msg[data-v-5c26b5f6] {\n    order: 1;\n    border-top-left-radius: 0px;\n    background-color: #757575;\n}\n.self[data-v-5c26b5f6] {\n    justify-content: flex-end;\n    align-items: flex-end;\n}\n.self .msg[data-v-5c26b5f6] {\n    order: 1;\n    border-bottom-right-radius: 0px;\n    background-color: #2196f3;\n}\n.self .avatar[data-v-5c26b5f6] {\n    order: 2;\n}\n.msg[data-v-5c26b5f6] {\n    background: white;\n    min-width: 300px;\n    padding: 10px;\n    border-radius: 2px;\n}\n.msg p[data-v-5c26b5f6] {\n    font-size: 17px;\n    margin: 0 0 0.2rem 0;\n    color: white;\n    word-wrap: break-word;\n}\n@media screen and (max-width: 550px) {\n.msg img[data-v-5c26b5f6] {\n        width: 200px;\n}\n}\n.msg time[data-v-5c26b5f6] {\n    font-size: 0.8rem;\n    color: #ccc;\n    margin-top: 3px;\n    float: right;\n    cursor: default;\n    -webkit-touch-callout: none;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n}\n", ""]);

// exports


/***/ }),

/***/ 684:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _vm.message.sender_id === _vm.user.id
      ? _c("li", { staticClass: "self" }, [
          _c("div", { staticClass: "msg elevation-3" }, [
            _c("p", [_vm._v(_vm._s(_vm.message.message))]),
            _vm._v(" "),
            _c(
              "time",
              [
                _c("timeago", {
                  attrs: {
                    since: _vm.message.created_at,
                    "auto-update": 61,
                    "max-time": 86400 * 365
                  }
                })
              ],
              1
            )
          ])
        ])
      : _c("li", { staticClass: "other" }, [
          _c("div", { staticClass: "msg elevation-3" }, [
            _c("p", [_vm._v(_vm._s(_vm.message.message))]),
            _vm._v(" "),
            _c(
              "time",
              [
                _c("timeago", {
                  attrs: {
                    since: _vm.message.created_at,
                    "auto-update": 61,
                    "max-time": 86400 * 365
                  }
                })
              ],
              1
            )
          ])
        ])
  ])
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-5c26b5f6", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ 690:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
    props: {
        boxmessage: Object
    },
    computed: {
        user: function user() {
            return this.$store.state.user.user;
        }
    },
    methods: {
        send: function send($event) {
            var _this = this;

            var data = { message: $event.target.value };
            if (this.user.id !== this.boxmessage.id) data['receiver_id'] = this.boxmessage.user_id;
            this.$http.post('/user/request/' + this.boxmessage.id + '/message', data).then(function (response) {
                if (response.body.id) {
                    _this.$store.dispatch('message/save', response.body);
                    $event.target.value = null;
                }
            });
        }
    }
});

/***/ }),

/***/ 691:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_env_modules_false_targets_browsers_last_2_versions_safari_7_debug_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_syntax_dynamic_import_node_modules_vue_loader_lib_selector_type_script_index_0_MessageBoxForm_vue__ = __webpack_require__(690);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_ade739ee_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_MessageBoxForm_vue__ = __webpack_require__(694);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(3);
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(692)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-ade739ee"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_env_modules_false_targets_browsers_last_2_versions_safari_7_debug_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_syntax_dynamic_import_node_modules_vue_loader_lib_selector_type_script_index_0_MessageBoxForm_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_ade739ee_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_MessageBoxForm_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_ade739ee_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_MessageBoxForm_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/user/box/MessageBoxForm.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-ade739ee", Component.options)
  } else {
    hotAPI.reload("data-v-ade739ee", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 692:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(693);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(4).default
var update = add("2584eb40", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-ade739ee\",\"scoped\":true,\"sourceMap\":false}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./MessageBoxForm.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-ade739ee\",\"scoped\":true,\"sourceMap\":false}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./MessageBoxForm.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 693:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "\ntextarea.textarea[data-v-ade739ee] {\n    position: absolute;\n    bottom: 0px;\n    resize: none;\n    left: 0px;\n    right: 0px;\n    width: 100%;\n    min-height: 50px;\n    max-height: 150px;\n    z-index: 99;\n    padding-top: 15px;\n    background: #fafafa;\n    border: none;\n    outline: none;\n    padding-left: 25px;\n    padding-right: 25px;\n    color: #666;\n    font-weight: 400;\n}\n", ""]);

// exports


/***/ }),

/***/ 694:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("textarea", {
    staticClass: "textarea",
    attrs: { placeholder: "Type here!" },
    on: {
      keyup: function($event) {
        if (!("button" in $event) && $event.keyCode !== 13) {
          return null
        }
        $event.preventDefault()
        _vm.send($event)
      }
    }
  })
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-ade739ee", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ 696:
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

/* harmony default export */ __webpack_exports__["a"] = ({
    props: {
        open: Boolean,
        boxmessage: Object
    },
    data: function data() {
        return {
            dialog: false,
            select: null,
            items: ["Room reservation", "Pre-registration", "Registration", "Lease agreement"],
            snackbar: false
        };
    },
    methods: {
        save: function save() {}
    },
    watch: {
        open: function open(data) {
            if (data) this.dialog = true;
        },
        dialog: function dialog(data) {
            if (!data) this.$emit('close');
        }
    }
});

/***/ }),

/***/ 697:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_env_modules_false_targets_browsers_last_2_versions_safari_7_debug_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_syntax_dynamic_import_node_modules_vue_loader_lib_selector_type_script_index_0_DialogFormEdit_vue__ = __webpack_require__(696);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0a4faf37_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_DialogFormEdit_vue__ = __webpack_require__(698);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_env_modules_false_targets_browsers_last_2_versions_safari_7_debug_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_syntax_dynamic_import_node_modules_vue_loader_lib_selector_type_script_index_0_DialogFormEdit_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0a4faf37_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_DialogFormEdit_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0a4faf37_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_DialogFormEdit_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/user/box/DialogFormEdit.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0a4faf37", Component.options)
  } else {
    hotAPI.reload("data-v-0a4faf37", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 698:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-dialog",
    {
      attrs: { width: _vm.$vuetify.breakpoint.smAndUp ? "50%" : "100%" },
      model: {
        value: _vm.dialog,
        callback: function($$v) {
          _vm.dialog = $$v
        },
        expression: "dialog"
      }
    },
    [
      _c(
        "v-card",
        [
          _c("v-card-title", { staticClass: "headline" }, [
            _vm._v("Edit your request")
          ]),
          _vm._v(" "),
          _c("v-divider"),
          _vm._v(" "),
          _c(
            "v-card-text",
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
                        "v-layout",
                        { attrs: { column: "" } },
                        [
                          _c(
                            "v-flex",
                            [
                              _c("v-select", {
                                staticStyle: { "min-height": "55px" },
                                attrs: {
                                  label: "Offers",
                                  chips: "",
                                  tags: "",
                                  items: _vm.items
                                },
                                model: {
                                  value: _vm.select,
                                  callback: function($$v) {
                                    _vm.select = $$v
                                  },
                                  expression: "select"
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
                  ),
                  _vm._v(" "),
                  _c(
                    "v-flex",
                    { attrs: { lg12: "" } },
                    [
                      _c(
                        "v-btn",
                        {
                          staticStyle: { "margin-left": "0" },
                          attrs: { color: "primary" },
                          on: { click: _vm.save }
                        },
                        [
                          _vm._v(
                            "\n                        Save\n                    "
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
          ),
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
              _vm._v(
                "\n            Your request has been successfully updated!\n            "
              ),
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
    require("vue-hot-reload-api")      .rerender("data-v-0a4faf37", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ })

});