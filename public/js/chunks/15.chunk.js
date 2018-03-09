webpackJsonp([15],{

/***/ 251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_Job_vue__ = __webpack_require__(453);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_FailedJob_vue__ = __webpack_require__(457);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    components: { failedJob: __WEBPACK_IMPORTED_MODULE_1__home_FailedJob_vue__["a" /* default */], job: __WEBPACK_IMPORTED_MODULE_0__home_Job_vue__["a" /* default */] },
    data: function data() {
        return {
            failedJobs: [],
            jobs: [],
            openDialogFailedJob: false,
            openDialogJob: false
        };
    },

    methods: {},
    mounted: function mounted() {
        var _this = this;

        this.$http.get('/admin/queue/failedJob').then(function (response) {
            _this.failedJobs = response.body;
        });
        this.$http.get('/admin/queue/job').then(function (response) {
            _this.jobs = response.body;
        });
    }
});

/***/ }),

/***/ 252:
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
//
//
//
//
//
//
//
//
//
//
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
        jobs: Array,
        open: Boolean
    },
    data: function data() {
        return {
            dialog: false,
            max25chars: function max25chars(v) {
                return v.length <= 25 || 'Input too long!';
            },
            tmp: '',
            search: '',
            pagination: {},
            confirmRun: false,
            confirmRestart: false,
            headers: [{
                text: 'Id',
                align: 'left',
                sortable: false,
                value: 'id'
            }, { text: 'Queue', value: 'queue' }, { text: 'Payload', value: 'payload' }, { text: 'Attempts', value: 'attempts' }, { text: 'Reserved at', value: 'reserved_at' }, { text: 'Available at', value: 'available_at' }, { text: 'Created_at', value: 'created_at' }]
        };
    },

    methods: {
        run: function run() {
            this.$http.get('/admin/queue/run');
            this.confirmRun = false;
        },
        restart: function restart() {
            this.$http.get('/admin/queue/restart');
            this.confirmRestart = false;
        }
    },
    watch: {
        open: function open(data) {
            if (data) this.dialog = data;
        },
        dialog: function dialog(data) {
            if (!data) this.$emit("close");
        }
    }
});

/***/ }),

/***/ 253:
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
//
//
//
//
//
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
        failedJobs: Array,
        open: Boolean
    },
    data: function data() {
        return {
            dialog: false,
            max25chars: function max25chars(v) {
                return v.length <= 25 || 'Input too long!';
            },
            tmp: '',
            search: '',
            confirmRetryAll: false,
            job: null,
            confirmRetry: false,
            pagination: {},
            headers: [{
                text: 'Id',
                align: 'left',
                sortable: false,
                value: 'id'
            }, { text: 'Connection', value: 'connection' }, { text: 'Queue', value: 'queue' }, { text: 'Payload', value: 'payload' }, { text: 'Exception', value: 'exception' }, { text: 'Failed at', value: 'failed_at' }]
        };
    },

    methods: {
        retry: function retry() {
            this.$http.get('/admin/queue/retry/' + this.job.id);
            this.confirmRetry = false;
        },
        retryAll: function retryAll() {
            this.$http.get('/admin/queue/retry');
            this.confirmRetryAll = false;
        }
    },
    watch: {
        open: function open(data) {
            if (data) this.dialog = data;
        },
        dialog: function dialog(data) {
            if (!data) this.$emit("close");
        }
    }
});

/***/ }),

/***/ 451:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(452);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(4).default
var update = add("69902d56", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-468df996\",\"scoped\":true,\"sourceMap\":false}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Home.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-468df996\",\"scoped\":true,\"sourceMap\":false}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Home.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 452:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "\n.progress-circular[data-v-468df996]{\n    margin: 1em;\n}\n", ""]);

// exports


/***/ }),

/***/ 453:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_env_modules_false_targets_browsers_last_2_versions_safari_7_debug_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_syntax_dynamic_import_node_modules_vue_loader_lib_selector_type_script_index_0_Job_vue__ = __webpack_require__(252);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_315e4084_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Job_vue__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(3);
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(454)
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_env_modules_false_targets_browsers_last_2_versions_safari_7_debug_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_syntax_dynamic_import_node_modules_vue_loader_lib_selector_type_script_index_0_Job_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_315e4084_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Job_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_315e4084_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Job_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/admin/home/Job.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-315e4084", Component.options)
  } else {
    hotAPI.reload("data-v-315e4084", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 454:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(455);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(4).default
var update = add("14f9fe9a", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-315e4084\",\"scoped\":false,\"sourceMap\":false}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Job.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-315e4084\",\"scoped\":false,\"sourceMap\":false}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Job.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 455:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "\n.text-xs-right{\n    max-width: 300px !important;\n    overflow:auto !important;\n}\n", ""]);

// exports


/***/ }),

/***/ 456:
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
      attrs: {
        fullscreen: "",
        transition: "dialog-bottom-transition",
        overlay: false
      },
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
          _c(
            "v-toolbar",
            { attrs: { dark: "", color: "primary" } },
            [
              _c(
                "v-btn",
                {
                  attrs: { icon: "", dark: "" },
                  nativeOn: {
                    click: function($event) {
                      _vm.dialog = false
                    }
                  }
                },
                [_c("v-icon", [_vm._v("close")])],
                1
              ),
              _vm._v(" "),
              _c("v-spacer"),
              _vm._v(" "),
              _c(
                "v-toolbar-items",
                [
                  _c(
                    "v-btn",
                    {
                      attrs: { dark: "", flat: "" },
                      nativeOn: {
                        click: function($event) {
                          _vm.confirmRestart = true
                        }
                      }
                    },
                    [_vm._v("restart "), _c("v-icon", [_vm._v("refresh")])],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("v-spacer"),
              _vm._v(" "),
              _c(
                "v-toolbar-items",
                [
                  _c(
                    "v-btn",
                    {
                      attrs: { dark: "", flat: "" },
                      nativeOn: {
                        click: function($event) {
                          _vm.confirmRun = true
                        }
                      }
                    },
                    [_vm._v("run")]
                  )
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
                "v-card-title",
                [
                  _vm._v(
                    "\n                " +
                      _vm._s(_vm.jobs.length) +
                      " Jobs\n                "
                  ),
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c("v-text-field", {
                    attrs: {
                      "append-icon": "search",
                      label: "Search",
                      "single-line": "",
                      "hide-details": ""
                    },
                    model: {
                      value: _vm.search,
                      callback: function($$v) {
                        _vm.search = $$v
                      },
                      expression: "search"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c("v-data-table", {
                attrs: {
                  headers: _vm.headers,
                  items: _vm.jobs,
                  search: _vm.search
                },
                scopedSlots: _vm._u([
                  {
                    key: "items",
                    fn: function(props) {
                      return _c("tr", { staticStyle: { cursor: "pointer" } }, [
                        _c(
                          "td",
                          [
                            _c("v-edit-dialog", { attrs: { lazy: "" } }, [
                              _vm._v(
                                " " +
                                  _vm._s(props.item.id) +
                                  "\n                        "
                              )
                            ])
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("td", { staticClass: "text-xs-right" }, [
                          _vm._v(_vm._s(props.item.queue))
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "text-xs-right" }, [
                          _vm._v(_vm._s(props.item.payload))
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "text-xs-right" }, [
                          _vm._v(_vm._s(props.item.attempts))
                        ]),
                        _vm._v(" "),
                        _c(
                          "td",
                          { staticClass: "text-xs-right" },
                          [
                            _c("timeago", {
                              attrs: {
                                since: props.item.reserved_at,
                                "auto-update": 86400,
                                "max-time": 86400 * 365
                              }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "td",
                          { staticClass: "text-xs-right" },
                          [
                            _c("timeago", {
                              attrs: {
                                since: props.item.available_at,
                                "auto-update": 86400,
                                "max-time": 86400 * 365
                              }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "td",
                          { staticClass: "text-xs-right" },
                          [
                            _c("timeago", {
                              attrs: {
                                since: props.item.created_at,
                                "auto-update": 86400,
                                "max-time": 86400 * 365
                              }
                            })
                          ],
                          1
                        )
                      ])
                    }
                  },
                  {
                    key: "pageText",
                    fn: function(ref) {
                      var pageStart = ref.pageStart
                      var pageStop = ref.pageStop
                      return [
                        _vm._v(
                          "\n                    From " +
                            _vm._s(pageStart) +
                            " to " +
                            _vm._s(pageStop) +
                            "\n                "
                        )
                      ]
                    }
                  }
                ])
              })
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: { "max-width": "290" },
          model: {
            value: _vm.confirmRun,
            callback: function($$v) {
              _vm.confirmRun = $$v
            },
            expression: "confirmRun"
          }
        },
        [
          _c(
            "v-card",
            [
              _c("v-card-title", { staticClass: "headline" }, [
                _vm._v("Queue system")
              ]),
              _vm._v(" "),
              _c("v-card-text", [
                _vm._v(
                  "\n                Are you sure you want to run the queue?\n            "
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
                          _vm.confirmRun = false
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
                          _vm.run($event)
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
      _c(
        "v-dialog",
        {
          attrs: { "max-width": "290" },
          model: {
            value: _vm.confirmRestart,
            callback: function($$v) {
              _vm.confirmRestart = $$v
            },
            expression: "confirmRestart"
          }
        },
        [
          _c(
            "v-card",
            [
              _c("v-card-title", { staticClass: "headline" }, [
                _vm._v("Queue system")
              ]),
              _vm._v(" "),
              _c("v-card-text", [
                _vm._v(
                  "\n                Are you sure you want to restart the queue?\n            "
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
                          _vm.confirmRestart = false
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
                          _vm.restart($event)
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
    require("vue-hot-reload-api")      .rerender("data-v-315e4084", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ 457:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_env_modules_false_targets_browsers_last_2_versions_safari_7_debug_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_syntax_dynamic_import_node_modules_vue_loader_lib_selector_type_script_index_0_FailedJob_vue__ = __webpack_require__(253);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_e26c1372_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_FailedJob_vue__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(3);
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(458)
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_env_modules_false_targets_browsers_last_2_versions_safari_7_debug_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_syntax_dynamic_import_node_modules_vue_loader_lib_selector_type_script_index_0_FailedJob_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_e26c1372_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_FailedJob_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_e26c1372_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_FailedJob_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/admin/home/FailedJob.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-e26c1372", Component.options)
  } else {
    hotAPI.reload("data-v-e26c1372", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 458:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(459);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(4).default
var update = add("000b3dd1", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-e26c1372\",\"scoped\":false,\"sourceMap\":false}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./FailedJob.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-e26c1372\",\"scoped\":false,\"sourceMap\":false}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./FailedJob.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 459:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "\n.text-xs-right{\nmax-width: 300px !important;\noverflow:auto !important;\n}\n", ""]);

// exports


/***/ }),

/***/ 460:
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
      attrs: {
        fullscreen: "",
        transition: "dialog-bottom-transition",
        overlay: false
      },
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
          _c(
            "v-toolbar",
            { attrs: { dark: "", color: "primary" } },
            [
              _c(
                "v-btn",
                {
                  attrs: { icon: "", dark: "" },
                  nativeOn: {
                    click: function($event) {
                      _vm.dialog = false
                    }
                  }
                },
                [_c("v-icon", [_vm._v("close")])],
                1
              ),
              _vm._v(" "),
              _c("v-spacer"),
              _vm._v(" "),
              _c(
                "v-toolbar-items",
                [
                  _c(
                    "v-btn",
                    {
                      attrs: { dark: "", flat: "" },
                      nativeOn: {
                        click: function($event) {
                          _vm.confirmRetryAll = true
                        }
                      }
                    },
                    [_vm._v("retry all "), _c("v-icon", [_vm._v("refresh")])],
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
            "v-card",
            [
              _c(
                "v-card-title",
                [
                  _vm._v(
                    "\n                " +
                      _vm._s(_vm.failedJobs.length) +
                      " Failed Jobs\n                "
                  ),
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c("v-text-field", {
                    attrs: {
                      "append-icon": "search",
                      label: "Search",
                      "single-line": "",
                      "hide-details": ""
                    },
                    model: {
                      value: _vm.search,
                      callback: function($$v) {
                        _vm.search = $$v
                      },
                      expression: "search"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c("v-data-table", {
                attrs: {
                  headers: _vm.headers,
                  items: _vm.failedJobs,
                  search: _vm.search
                },
                scopedSlots: _vm._u([
                  {
                    key: "items",
                    fn: function(props) {
                      return _c(
                        "tr",
                        {
                          staticStyle: { cursor: "pointer" },
                          on: {
                            click: function($event) {
                              _vm.confirmRetry = true
                              _vm.job = props.item
                            }
                          }
                        },
                        [
                          _c(
                            "td",
                            [
                              _c("v-edit-dialog", { attrs: { lazy: "" } }, [
                                _vm._v(
                                  " " +
                                    _vm._s(props.item.id) +
                                    "\n                        "
                                )
                              ])
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("td", { staticClass: "text-xs-right" }, [
                            _vm._v(_vm._s(props.item.connection))
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "text-xs-right" }, [
                            _vm._v(_vm._s(props.item.queue))
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "text-xs-right" }, [
                            _vm._v(_vm._s(props.item.payload))
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "text-xs-right" }, [
                            _vm._v(_vm._s(props.item.exception))
                          ]),
                          _vm._v(" "),
                          _c(
                            "td",
                            { staticClass: "text-xs-right" },
                            [
                              _c("timeago", {
                                attrs: {
                                  since: props.item.failed_at,
                                  "auto-update": 86400,
                                  "max-time": 86400 * 365
                                }
                              })
                            ],
                            1
                          )
                        ]
                      )
                    }
                  },
                  {
                    key: "pageText",
                    fn: function(ref) {
                      var pageStart = ref.pageStart
                      var pageStop = ref.pageStop
                      return [
                        _vm._v(
                          "\n                    From " +
                            _vm._s(pageStart) +
                            " to " +
                            _vm._s(pageStop) +
                            "\n                "
                        )
                      ]
                    }
                  }
                ])
              })
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: { "max-width": "290" },
          model: {
            value: _vm.confirmRetryAll,
            callback: function($$v) {
              _vm.confirmRetryAll = $$v
            },
            expression: "confirmRetryAll"
          }
        },
        [
          _c(
            "v-card",
            [
              _c("v-card-title", { staticClass: "headline" }, [
                _vm._v("Queue system")
              ]),
              _vm._v(" "),
              _c("v-card-text", [
                _vm._v(
                  "\n                Are you sure you want to retry all the jobs?\n            "
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
                          _vm.confirmRetryAll = false
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
                          _vm.retryAll($event)
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
      _c(
        "v-dialog",
        {
          attrs: { "max-width": "290" },
          model: {
            value: _vm.confirmRetry,
            callback: function($$v) {
              _vm.confirmRetry = $$v
            },
            expression: "confirmRetry"
          }
        },
        [
          _c(
            "v-card",
            [
              _c("v-card-title", { staticClass: "headline" }, [
                _vm._v("Queue system")
              ]),
              _vm._v(" "),
              _c("v-card-text", [
                _vm._v(
                  "\n                Are you sure you want to retry this job?\n            "
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
                          _vm.confirmRetry = false
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
                          _vm.retry($event)
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
    require("vue-hot-reload-api")      .rerender("data-v-e26c1372", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ 461:
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
      staticClass: "elevation-0",
      staticStyle: { height: "100%", width: "100%" }
    },
    [
      _c(
        "v-toolbar",
        { staticClass: "elevation-0", staticStyle: { background: "none" } },
        [
          _c("v-toolbar-title", { staticClass: "text-xs-center" }, [
            _vm._v("Activities")
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-layout",
        { attrs: { row: "", wrap: "", "justify-space-between": "" } },
        [
          _c(
            "v-flex",
            { attrs: { lg6: "" } },
            [
              _c(
                "v-layout",
                { attrs: { column: "" } },
                [
                  _c(
                    "v-flex",
                    [
                      _c(
                        "v-btn",
                        {
                          attrs: { flat: "", color: "primary" },
                          on: {
                            click: function($event) {
                              _vm.openDialogJob = true
                            }
                          }
                        },
                        [_vm._v("Jobs")]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-flex",
                    [
                      _c(
                        "v-progress-circular",
                        {
                          attrs: {
                            size: 100,
                            width: 15,
                            rotate: 360,
                            value: this.jobs.length * 100,
                            color: "primary"
                          }
                        },
                        [
                          _vm._v(
                            "\n                        " +
                              _vm._s(this.jobs.length) +
                              "\n                    "
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
            "v-flex",
            { attrs: { lg6: "" } },
            [
              _c(
                "v-layout",
                {
                  staticStyle: { "align-items": "flex-end" },
                  attrs: { column: "" }
                },
                [
                  _c(
                    "v-flex",
                    [
                      _c(
                        "v-btn",
                        {
                          attrs: { flat: "", color: "red" },
                          on: {
                            click: function($event) {
                              _vm.openDialogFailedJob = true
                            }
                          }
                        },
                        [_vm._v("Failed Jobs")]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-flex",
                    [
                      _c(
                        "v-progress-circular",
                        {
                          attrs: {
                            size: 100,
                            width: 15,
                            rotate: 360,
                            value: this.failedJobs.length * 100,
                            color: "red"
                          }
                        },
                        [
                          _vm._v(
                            "\n                        " +
                              _vm._s(this.failedJobs.length) +
                              "\n                    "
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
      ),
      _vm._v(" "),
      _c("job", {
        attrs: { jobs: _vm.jobs, open: _vm.openDialogJob },
        on: {
          close: function($event) {
            _vm.openDialogJob = !_vm.openDialogJob
          }
        }
      }),
      _vm._v(" "),
      _c("failed-job", {
        attrs: { failedJobs: _vm.failedJobs, open: _vm.openDialogFailedJob },
        on: {
          close: function($event) {
            _vm.openDialogFailedJob = !_vm.openDialogFailedJob
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
    require("vue-hot-reload-api")      .rerender("data-v-468df996", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_env_modules_false_targets_browsers_last_2_versions_safari_7_debug_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_syntax_dynamic_import_node_modules_vue_loader_lib_selector_type_script_index_0_Home_vue__ = __webpack_require__(251);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_468df996_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Home_vue__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(3);
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(451)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-468df996"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_env_modules_false_targets_browsers_last_2_versions_safari_7_debug_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_syntax_dynamic_import_node_modules_vue_loader_lib_selector_type_script_index_0_Home_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_468df996_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Home_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_468df996_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Home_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/admin/Home.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-468df996", Component.options)
  } else {
    hotAPI.reload("data-v-468df996", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

});