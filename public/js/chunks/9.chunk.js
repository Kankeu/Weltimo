webpackJsonp([9],{

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Forminscription__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Setphoto__ = __webpack_require__(245);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    components: { forminscription: __WEBPACK_IMPORTED_MODULE_0__Forminscription__["a" /* default */], setphoto: __WEBPACK_IMPORTED_MODULE_1__Setphoto__["a" /* default */] },
    $validates: true,
    data: function data() {
        return {
            step: 1,
            loading: false
        };
    },
    methods: {
        next: function next() {
            this.step++;
        },
        load: function load() {
            this.loading = true;
        },
        stop: function stop() {
            this.loading = false;
        }
    }
});

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Testniveau__ = __webpack_require__(240);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    components: { testniveau: __WEBPACK_IMPORTED_MODULE_0__Testniveau__["a" /* default */] },
    $validates: true,
    data: function data() {
        return {
            visibility: false,
            step: 1,
            continuer: false,
            data: {
                name: null,
                forename: null,
                email: null,
                password: null,
                cPassword: null
            }
        };
    },
    methods: {
        save: function save() {
            var _this = this;

            this.$validator.validateAll().then(function (validated) {
                if (validated) {
                    delete _this.data.cPassword;
                    _this.$emit("load");
                    _this.$http.post('/sign_in', _this.data).then(function (response) {
                        if (response.body.id) {
                            _this.$store.dispatch("user/save", response.body);
                            _this.$emit("next");
                            _this.$emit("stop");
                        }
                    });
                }
            });
        },
        clear: function clear() {
            this.data.name = null;
            this.data.forename = null;
            this.data.email = null;
            this.data.password = null;
            this.data.cPassword = null;
            this.$validator.clean();
        }
    }
});

/***/ }),

/***/ 170:
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
//
//
//
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
            levels: ['Beginner', 'A1', 'A2', 'B1', 'B2', 'C1'],
            level: null,
            startTest: false,
            continuable: false,
            exercises: null,
            corrected: false,
            note: null,
            event: null
        };
    },
    computed: {
        user: function user() {
            return this.$store.state.user.user;
        }
    },
    methods: {
        color: function color(answer, response, index) {
            if (this.corrected && answer.just === 1) {
                return 'success';
            } else if (this.corrected && response === index && answer.just === 0) {
                return 'error';
            }
            return 'primary';
        },
        correct: function correct() {
            var _this = this;

            if (!this.exercises.find(function (exercise) {
                return exercise.response === undefined;
            })) {
                this.note = 0;
                this.exercises.map(function (exercise) {
                    if (exercise.answers[exercise.response].just === 1) {
                        exercise.just = 1;
                        _this.note++;
                    } else {
                        exercise.just = 0;
                    }
                    _this.corrected = true;
                });
            }
        },
        next: function next() {
            this.startTest = false;
            this.$emit("next");
        },
        sendLevel: function sendLevel() {
            var _this2 = this;

            this.$emit("load");
            this.$http.put('/sign_in/' + this.user.id, { level: this.level }).then(function (response) {
                _this2.startTest = true;
                _this2.exercises = response.body.length > 0 ? response.body : null;
                _this2.$store.dispatch('user/update', { level: _this2.level });
                _this2.$emit("stop");
                _this2.bindEvent();
            });
        },
        bindEvent: function bindEvent() {
            this.event = function (event) {
                if (event.code === "ArrowRight") {
                    document.querySelector(".carousel__right button").click();
                } else if (event.code === "ArrowLeft") {
                    document.querySelector(".carousel__left button").click();
                }
            };
            window.addEventListener("keydown", this.event);
        }
    },
    watch: {
        level: function level(data) {
            if (data === "Beginner") {
                this.continuable = true;
            } else {
                this.continuable = false;
            }
        }
    },
    destroyed: function destroyed() {
        window.removeEventListener("keydown", this.event);
    }
});

/***/ }),

/***/ 171:
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

/* harmony default export */ __webpack_exports__["a"] = ({
    data: function data() {
        return {
            url: "/img/default/avatar.jpg",
            file: null
        };
    },
    computed: {
        user: function user() {
            return this.$store.state.user.user;
        }
    },
    methods: {
        preview: function preview(event) {
            this.file = event.target.files[0];
            this.url = window.URL.createObjectURL(event.target.files[0]);
        },
        select: function select() {
            this.$el.querySelector("#photo").click();
        },
        send: function send() {
            var _this = this;

            if (this.file) {
                this.$emit("load");
                var formdata = new FormData();
                formdata.append("avatar", this.file);
                this.$http.post('/avatar', formdata).then(function (response) {
                    if (response.body.status === 1) {
                        _this.$store.dispatch('user/update', { avatar: _this.url, confirmated: true });
                        _this.$store.dispatch('msgflash/save', "Congratulations your account has been successfully created. welcome to the Weltimo community!");
                        _this.$emit("stop");
                        _this.$router.push('/user');
                    }
                });
            } else {
                this.$router.push('/user');
            }
        }
    }
});

/***/ }),

/***/ 239:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_env_modules_false_targets_browsers_last_2_versions_safari_7_debug_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_syntax_dynamic_import_node_modules_vue_loader_lib_selector_type_script_index_0_Forminscription_vue__ = __webpack_require__(169);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_f1ee1f82_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Forminscription_vue__ = __webpack_require__(244);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_env_modules_false_targets_browsers_last_2_versions_safari_7_debug_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_syntax_dynamic_import_node_modules_vue_loader_lib_selector_type_script_index_0_Forminscription_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_f1ee1f82_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Forminscription_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_f1ee1f82_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Forminscription_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/app/Forminscription.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-f1ee1f82", Component.options)
  } else {
    hotAPI.reload("data-v-f1ee1f82", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_env_modules_false_targets_browsers_last_2_versions_safari_7_debug_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_syntax_dynamic_import_node_modules_vue_loader_lib_selector_type_script_index_0_Testniveau_vue__ = __webpack_require__(170);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_70c97215_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Testniveau_vue__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(3);
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(241)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-70c97215"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_env_modules_false_targets_browsers_last_2_versions_safari_7_debug_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_syntax_dynamic_import_node_modules_vue_loader_lib_selector_type_script_index_0_Testniveau_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_70c97215_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Testniveau_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_70c97215_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Testniveau_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/app/Testniveau.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-70c97215", Component.options)
  } else {
    hotAPI.reload("data-v-70c97215", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 241:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(242);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(4).default
var update = add("72cd3c48", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-70c97215\",\"scoped\":true,\"sourceMap\":false}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Testniveau.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-70c97215\",\"scoped\":true,\"sourceMap\":false}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Testniveau.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 242:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "\n.note[data-v-70c97215] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  text-align: center;\n  font-size: 50px;\n  color: #1976D2;\n}\n.note span[data-v-70c97215] {\n    font-size: 20px;\n    text-transform: uppercase;\n}\n.card__text[data-v-70c97215] {\n  padding: 0 !important;\n}\n", ""]);

// exports


/***/ }),

/***/ 243:
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
    [
      _c("v-select", {
        attrs: {
          items: _vm.levels,
          label: "What is your level of knowledge of the German language"
        },
        model: {
          value: _vm.level,
          callback: function($$v) {
            _vm.level = $$v
          },
          expression: "level"
        }
      }),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "text-xs-center" },
        [
          _vm.level !== "Beginner" && _vm.level && !_vm.corrected
            ? _c(
                "v-btn",
                {
                  attrs: { round: "", outline: "", color: "primary", dark: "" },
                  on: {
                    click: function($event) {
                      $event.stopPropagation()
                      _vm.sendLevel($event)
                    }
                  }
                },
                [_vm._v("Start the language test")]
              )
            : _vm._e()
        ],
        1
      ),
      _vm._v(" "),
      _vm.continuable
        ? _c(
            "v-btn",
            {
              attrs: { color: "primary" },
              nativeOn: {
                click: function($event) {
                  _vm.next($event)
                }
              }
            },
            [_vm._v("Continue")]
          )
        : _vm._e(),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: {
            fullscreen: "",
            transition: "dialog-bottom-transition",
            overlay: false,
            scrollable: ""
          },
          model: {
            value: _vm.startTest,
            callback: function($$v) {
              _vm.startTest = $$v
            },
            expression: "startTest"
          }
        },
        [
          _c(
            "v-card",
            [
              _c(
                "v-toolbar",
                {
                  staticClass: "primary",
                  staticStyle: { flex: "0 0 auto" },
                  attrs: { dark: "" }
                },
                [
                  !_vm.corrected
                    ? _c(
                        "v-btn",
                        {
                          attrs: { icon: "", dark: "" },
                          nativeOn: {
                            click: function($event) {
                              _vm.startTest = false
                            }
                          }
                        },
                        [_c("v-icon", [_vm._v("close")])],
                        1
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _c("v-toolbar-title", [
                    _vm._v("language Test " + _vm._s(_vm.level))
                  ]),
                  _vm._v(" "),
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c(
                    "v-toolbar-items",
                    [
                      !_vm.corrected
                        ? _c(
                            "v-btn",
                            {
                              attrs: { flat: "" },
                              nativeOn: {
                                click: function($event) {
                                  _vm.correct($event)
                                }
                              }
                            },
                            [_vm._v("Correct")]
                          )
                        : _c(
                            "v-btn",
                            {
                              attrs: { flat: "", fab: "", large: "", dark: "" },
                              nativeOn: {
                                click: function($event) {
                                  _vm.next($event)
                                }
                              }
                            },
                            [_c("v-icon", [_vm._v("navigate_next")])],
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
                "v-card-text",
                [
                  _c(
                    "v-container",
                    { attrs: { fluid: "", "grid-list-md": "" } },
                    [
                      _vm.exercises
                        ? _c(
                            "v-carousel",
                            {
                              attrs: {
                                lazy: true,
                                "hide-delimiters": "",
                                light: true,
                                cycle: false
                              }
                            },
                            [
                              _vm.note !== null
                                ? _c(
                                    "div",
                                    {
                                      staticClass: "note",
                                      style:
                                        _vm.note < _vm.exercises.length * 0.6
                                          ? "color:#FF5252"
                                          : null
                                    },
                                    [
                                      _vm._v(
                                        "\n              " +
                                          _vm._s(_vm.note) +
                                          "/" +
                                          _vm._s(_vm.exercises.length)
                                      ),
                                      _c("br"),
                                      _vm._v(" "),
                                      _vm.note === _vm.exercises.length
                                        ? _c("span", [_vm._v("excellent")])
                                        : _vm.note >= _vm.exercises.length * 0.9
                                          ? _c("span", [_vm._v("very good")])
                                          : _vm.note >=
                                            _vm.exercises.length * 0.8
                                            ? _c("span", [_vm._v("good")])
                                            : _vm.note >=
                                              _vm.exercises.length * 0.7
                                              ? _c("span", [
                                                  _vm._v("pretty good")
                                                ])
                                              : _vm.note >=
                                                _vm.exercises.length * 0.6
                                                ? _c("span", [
                                                    _vm._v("sufficient")
                                                  ])
                                                : _vm.note <
                                                  _vm.exercises.length * 0.6
                                                  ? _c("span", [_vm._v("bad")])
                                                  : _vm._e()
                                    ]
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _vm._l(_vm.exercises, function(exercise, i) {
                                return _c(
                                  "v-carousel-item",
                                  { key: i, attrs: { src: "" } },
                                  [
                                    _c(
                                      "v-container",
                                      [
                                        _c(
                                          "v-layout",
                                          { attrs: { row: "", wrap: "" } },
                                          [
                                            _c("v-flex", {
                                              attrs: { xs0: "", lg2: "" }
                                            }),
                                            _vm._v(" "),
                                            _c(
                                              "v-flex",
                                              { attrs: { xs12: "", lg8: "" } },
                                              [
                                                exercise.just === 1 ||
                                                (_vm.corrected &&
                                                  exercise.answers[
                                                    exercise.response
                                                  ].just === 1)
                                                  ? _c(
                                                      "v-layout",
                                                      {
                                                        attrs: {
                                                          "justify-center": ""
                                                        }
                                                      },
                                                      [
                                                        _c(
                                                          "div",
                                                          [
                                                            _c(
                                                              "v-tooltip",
                                                              {
                                                                attrs: {
                                                                  top: ""
                                                                }
                                                              },
                                                              [
                                                                _c(
                                                                  "v-btn",
                                                                  {
                                                                    attrs: {
                                                                      slot:
                                                                        "activator",
                                                                      flat: "",
                                                                      color:
                                                                        "success",
                                                                      fab: "",
                                                                      large: "",
                                                                      dark: ""
                                                                    },
                                                                    slot:
                                                                      "activator"
                                                                  },
                                                                  [
                                                                    _c(
                                                                      "v-icon",
                                                                      {
                                                                        staticStyle: {
                                                                          "font-size":
                                                                            "50px"
                                                                        }
                                                                      },
                                                                      [
                                                                        _vm._v(
                                                                          "sentiment_very_satisfied"
                                                                        )
                                                                      ]
                                                                    )
                                                                  ],
                                                                  1
                                                                ),
                                                                _vm._v(" "),
                                                                _c("span", [
                                                                  _vm._v(
                                                                    "This answer ist right. congratulations"
                                                                  )
                                                                ])
                                                              ],
                                                              1
                                                            )
                                                          ],
                                                          1
                                                        )
                                                      ]
                                                    )
                                                  : exercise.just === 0 ||
                                                    (_vm.corrected &&
                                                      exercise.answers[
                                                        exercise.response
                                                      ].just === 0)
                                                    ? _c(
                                                        "v-layout",
                                                        {
                                                          attrs: {
                                                            "justify-center": ""
                                                          }
                                                        },
                                                        [
                                                          _c(
                                                            "div",
                                                            [
                                                              _c(
                                                                "v-tooltip",
                                                                {
                                                                  attrs: {
                                                                    top: ""
                                                                  }
                                                                },
                                                                [
                                                                  _c(
                                                                    "v-btn",
                                                                    {
                                                                      attrs: {
                                                                        slot:
                                                                          "activator",
                                                                        flat:
                                                                          "",
                                                                        color:
                                                                          "error",
                                                                        fab: "",
                                                                        large:
                                                                          "",
                                                                        dark: ""
                                                                      },
                                                                      slot:
                                                                        "activator"
                                                                    },
                                                                    [
                                                                      _c(
                                                                        "v-icon",
                                                                        {
                                                                          staticStyle: {
                                                                            "font-size":
                                                                              "50px"
                                                                          }
                                                                        },
                                                                        [
                                                                          _vm._v(
                                                                            "sentiment_very_dissatisfied"
                                                                          )
                                                                        ]
                                                                      )
                                                                    ],
                                                                    1
                                                                  ),
                                                                  _vm._v(" "),
                                                                  _c("span", [
                                                                    _vm._v(
                                                                      "This answer ist wrong. Please try again"
                                                                    )
                                                                  ])
                                                                ],
                                                                1
                                                              )
                                                            ],
                                                            1
                                                          )
                                                        ]
                                                      )
                                                    : _vm._e(),
                                                _vm._v(" "),
                                                _c("v-flex", [
                                                  _vm._v(
                                                    _vm._s(exercise.sentence)
                                                  )
                                                ]),
                                                _vm._v(" "),
                                                _c(
                                                  "v-flex",
                                                  [
                                                    _c(
                                                      "v-radio-group",
                                                      {
                                                        attrs: {
                                                          row:
                                                            _vm.$vuetify
                                                              .breakpoint
                                                              .smAndUp,
                                                          column: !_vm.$vuetify
                                                            .breakpoint.smAndUp
                                                        },
                                                        model: {
                                                          value:
                                                            exercise.response,
                                                          callback: function(
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              exercise,
                                                              "response",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "exercise.response"
                                                        }
                                                      },
                                                      _vm._l(
                                                        exercise.answers,
                                                        function(
                                                          answer,
                                                          index
                                                        ) {
                                                          return _c("v-radio", {
                                                            key: index,
                                                            attrs: {
                                                              label:
                                                                answer.sentence,
                                                              color: _vm.color(
                                                                answer,
                                                                exercise.response,
                                                                index
                                                              ),
                                                              value: index
                                                            }
                                                          })
                                                        }
                                                      )
                                                    )
                                                  ],
                                                  1
                                                )
                                              ],
                                              1
                                            ),
                                            _vm._v(" "),
                                            _c("v-flex", {
                                              attrs: { xs0: "", lg2: "" }
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
                              })
                            ],
                            2
                          )
                        : _vm._e()
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("div", { staticStyle: { flex: "1 1 auto" } })
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
    require("vue-hot-reload-api")      .rerender("data-v-70c97215", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ 244:
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
    [
      _c(
        "v-form",
        [
          _c("v-text-field", {
            directives: [
              {
                name: "validate",
                rawName: "v-validate",
                value: "required",
                expression: "'required'"
              }
            ],
            attrs: {
              label: "Name",
              "error-messages": _vm.errors.collect("name"),
              "data-vv-name": "name"
            },
            model: {
              value: _vm.data.name,
              callback: function($$v) {
                _vm.$set(
                  _vm.data,
                  "name",
                  typeof $$v === "string" ? $$v.trim() : $$v
                )
              },
              expression: "data.name"
            }
          }),
          _vm._v(" "),
          _c("v-text-field", {
            directives: [
              {
                name: "validate",
                rawName: "v-validate",
                value: "required",
                expression: "'required'"
              }
            ],
            attrs: {
              label: "Forename",
              "error-messages": _vm.errors.collect("forename"),
              "data-vv-name": "forename"
            },
            model: {
              value: _vm.data.forename,
              callback: function($$v) {
                _vm.$set(
                  _vm.data,
                  "forename",
                  typeof $$v === "string" ? $$v.trim() : $$v
                )
              },
              expression: "data.forename"
            }
          }),
          _vm._v(" "),
          _c("v-text-field", {
            directives: [
              {
                name: "validate",
                rawName: "v-validate",
                value: "required|email",
                expression: "'required|email'"
              }
            ],
            attrs: {
              label: "E-mail",
              "error-messages": _vm.errors.collect("email"),
              "data-vv-name": "email"
            },
            model: {
              value: _vm.data.email,
              callback: function($$v) {
                _vm.$set(
                  _vm.data,
                  "email",
                  typeof $$v === "string" ? $$v.trim() : $$v
                )
              },
              expression: "data.email"
            }
          }),
          _vm._v(" "),
          _c("v-text-field", {
            directives: [
              {
                name: "validate",
                rawName: "v-validate",
                value: "required|min:6",
                expression: "'required|min:6'"
              }
            ],
            attrs: {
              label: "Password",
              type: "password",
              "append-icon": _vm.visibility ? "visibility" : "visibility_off",
              "append-icon-cb": function() {
                return (_vm.visibility = !_vm.visibility)
              },
              type: _vm.visibility ? "text" : "password",
              "error-messages": _vm.errors.collect("password"),
              "data-vv-name": "password",
              name: "password"
            },
            model: {
              value: _vm.data.password,
              callback: function($$v) {
                _vm.$set(
                  _vm.data,
                  "password",
                  typeof $$v === "string" ? $$v.trim() : $$v
                )
              },
              expression: "data.password"
            }
          }),
          _vm._v(" "),
          _c("v-text-field", {
            directives: [
              {
                name: "validate",
                rawName: "v-validate",
                value: "required|confirmed:password",
                expression: "'required|confirmed:password'"
              }
            ],
            attrs: {
              label: "Confirm password",
              type: "password",
              "error-messages": _vm.errors.collect("cPassword"),
              "data-vv-name": "cPassword",
              "data-vv-as": "password"
            },
            model: {
              value: _vm.data.cPassword,
              callback: function($$v) {
                _vm.$set(
                  _vm.data,
                  "cPassword",
                  typeof $$v === "string" ? $$v.trim() : $$v
                )
              },
              expression: "data.cPassword"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-btn",
        {
          attrs: { color: "primary" },
          nativeOn: {
            click: function($event) {
              _vm.save($event)
            }
          }
        },
        [_vm._v("Continue")]
      ),
      _vm._v(" "),
      _c(
        "v-btn",
        {
          attrs: { flat: "" },
          nativeOn: {
            click: function($event) {
              _vm.clear($event)
            }
          }
        },
        [_vm._v("Cancel")]
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
    require("vue-hot-reload-api")      .rerender("data-v-f1ee1f82", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ 245:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_env_modules_false_targets_browsers_last_2_versions_safari_7_debug_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_syntax_dynamic_import_node_modules_vue_loader_lib_selector_type_script_index_0_Setphoto_vue__ = __webpack_require__(171);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5716fdf5_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Setphoto_vue__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(3);
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(246)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-5716fdf5"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_env_modules_false_targets_browsers_last_2_versions_safari_7_debug_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_syntax_dynamic_import_node_modules_vue_loader_lib_selector_type_script_index_0_Setphoto_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5716fdf5_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Setphoto_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5716fdf5_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Setphoto_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/app/Setphoto.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5716fdf5", Component.options)
  } else {
    hotAPI.reload("data-v-5716fdf5", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 246:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(247);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(4).default
var update = add("0039f820", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5716fdf5\",\"scoped\":true,\"sourceMap\":false}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Setphoto.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5716fdf5\",\"scoped\":true,\"sourceMap\":false}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Setphoto.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 247:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "\n.padding_top[data-v-5716fdf5]{\n    padding-top: 10px\n}\n", ""]);

// exports


/***/ }),

/***/ 248:
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
    { staticClass: "full" },
    [
      _c(
        "v-layout",
        {
          staticClass: "padding_top",
          attrs: { column: "", "align-center": "", "justify-center": "" }
        },
        [
          _c("v-avatar", { attrs: { size: "200px" } }, [
            _c("img", { attrs: { src: _vm.url, alt: "avatar" } })
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "text-xs-center" },
            [
              _c(
                "v-btn",
                {
                  attrs: { round: "", outline: "", color: "primary" },
                  on: { click: _vm.select }
                },
                [_vm._v("Select the photo")]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("input", {
            staticStyle: { display: "none" },
            attrs: { type: "file", id: "photo", name: "avatar" },
            on: { change: _vm.preview }
          }),
          _vm._v(" "),
          _c(
            "v-btn",
            { attrs: { color: "primary" }, on: { click: _vm.send } },
            [_vm._v("Finish")]
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
    require("vue-hot-reload-api")      .rerender("data-v-5716fdf5", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ 249:
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
    [
      _c(
        "v-container",
        {
          staticStyle: { "margin-top": "65px" },
          attrs: { "grid-list-md": "" }
        },
        [
          _c(
            "v-layout",
            { attrs: { row: "", wrap: "" } },
            [
              _c("v-flex", { attrs: { xs0: "", lg2: "" } }),
              _vm._v(" "),
              _c(
                "v-flex",
                { attrs: { xs12: "", lg8: "" } },
                [
                  _c(
                    "v-stepper",
                    {
                      staticClass: "elevation-10",
                      model: {
                        value: _vm.step,
                        callback: function($$v) {
                          _vm.step = $$v
                        },
                        expression: "step"
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
                        "v-stepper-header",
                        [
                          _c(
                            "v-stepper-step",
                            { attrs: { step: "1", complete: _vm.step > 1 } },
                            [_vm._v("Step 1")]
                          ),
                          _vm._v(" "),
                          _c("v-divider"),
                          _vm._v(" "),
                          _c(
                            "v-stepper-step",
                            { attrs: { step: "2", complete: _vm.step > 2 } },
                            [_vm._v("Step 2")]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-stepper-items",
                        [
                          _c(
                            "v-stepper-content",
                            { attrs: { step: "1" } },
                            [
                              _c("forminscription", {
                                on: {
                                  next: _vm.next,
                                  load: _vm.load,
                                  stop: _vm.stop
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-stepper-content",
                            { attrs: { step: "2" } },
                            [
                              _c("setphoto", {
                                on: { load: _vm.load, stop: _vm.stop }
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
              _c("v-flex", { attrs: { xs0: "", lg2: "" } })
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
    require("vue-hot-reload-api")      .rerender("data-v-6b09c1fa", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_env_modules_false_targets_browsers_last_2_versions_safari_7_debug_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_syntax_dynamic_import_node_modules_vue_loader_lib_selector_type_script_index_0_Inscription_vue__ = __webpack_require__(168);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6b09c1fa_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Inscription_vue__ = __webpack_require__(249);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_env_modules_false_targets_browsers_last_2_versions_safari_7_debug_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_syntax_dynamic_import_node_modules_vue_loader_lib_selector_type_script_index_0_Inscription_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6b09c1fa_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Inscription_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6b09c1fa_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Inscription_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/app/Inscription.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6b09c1fa", Component.options)
  } else {
    hotAPI.reload("data-v-6b09c1fa", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

});