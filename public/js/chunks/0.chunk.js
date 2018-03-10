webpackJsonp([0],{

/***/ 16:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_env_modules_false_targets_browsers_last_2_versions_safari_7_debug_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_syntax_dynamic_import_node_modules_vue_loader_lib_selector_type_script_index_0_Home_vue__ = __webpack_require__(183);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_24ae9a78_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Home_vue__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(3);
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(271)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-24ae9a78"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_env_modules_false_targets_browsers_last_2_versions_safari_7_debug_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_syntax_dynamic_import_node_modules_vue_loader_lib_selector_type_script_index_0_Home_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_24ae9a78_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Home_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_24ae9a78_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Home_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/app/Home.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-24ae9a78", Component.options)
  } else {
    hotAPI.reload("data-v-24ae9a78", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__PresentationCard_vue__ = __webpack_require__(273);
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    components: { presentationCard: __WEBPACK_IMPORTED_MODULE_0__PresentationCard_vue__["a" /* default */] },
    data: function data() {
        return {
            images: [],
            articles: [],
            colors: ["cyan", "blue", "amber"]
        };
    },
    mounted: function mounted() {
        var _this = this;

        this.$http.get('/offer').then(function (response) {
            var _articles;

            (_articles = _this.articles).push.apply(_articles, _toConsumableArray(response.body));
        });
    }
});

/***/ }),

/***/ 184:
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

/* harmony default export */ __webpack_exports__["a"] = ({
    props: {
        article: Object,
        color: String
    },
    data: function data() {
        return {};
    },
    mounted: function mounted() {}
});

/***/ }),

/***/ 271:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(272);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(4).default
var update = add("643c1659", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-24ae9a78\",\"scoped\":true,\"sourceMap\":false}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Home.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-24ae9a78\",\"scoped\":true,\"sourceMap\":false}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Home.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 272:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "\n.noPadding[data-v-24ae9a78] {\n  padding: 0 !important;\n}\n.blogBg[data-v-24ae9a78] {\n  position: relative;\n  height: 170vh;\n  width: 100%;\n  background-image: url(\"/img/default/weltimoBackground.jpg\");\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.blogBg .center[data-v-24ae9a78] {\n  font-size: 28px !important;\n}\n.xsBlogBg[data-v-24ae9a78] {\n  position: relative;\n  width: 100%;\n  background-image: url(\"/img/default/weltimoBackground.jpg\");\n  background-size: cover;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.xsBlogBg .center[data-v-24ae9a78] {\n  font-size: 15px !important;\n  padding: 5px;\n}\n.logo[data-v-24ae9a78] {\n  font-size: 200px !important;\n}\n.center[data-v-24ae9a78] {\n  text-align: center;\n  margin-top: 60px;\n}\n.body[data-v-24ae9a78] {\n  background: #00b4ff;\n  color: #333;\n  font: 100% Arial, Sans Serif;\n  height: 400px;\n  margin: -10px;\n  margin-top: 55px;\n  padding: 0;\n  position: sticky;\n  overflow: hidden;\n}\n.title[data-v-24ae9a78] {\n  height: 100%;\n  font-family: monospace;\n}\n#background-wrap[data-v-24ae9a78] {\n  bottom: 0;\n  left: 0;\n  padding-top: 50px;\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: -1;\n}\n\n/* KEYFRAMES */\n@-webkit-keyframes animateCloud-data-v-24ae9a78 {\n0% {\n    margin-left: -600px;\n}\n100% {\n    margin-left: 100%;\n}\n}\n@-moz-keyframes animateCloud-data-v-24ae9a78 {\n0% {\n    margin-left: -600px;\n}\n100% {\n    margin-left: 100%;\n}\n}\n@keyframes animateCloud-data-v-24ae9a78 {\n0% {\n    margin-left: -600px;\n}\n100% {\n    margin-left: 100%;\n}\n}\n\n/* ANIMATIONS */\n.x1[data-v-24ae9a78] {\n  -webkit-animation: animateCloud-data-v-24ae9a78 25s linear infinite;\n  -moz-animation: animateCloud-data-v-24ae9a78 25s linear infinite;\n  animation: animateCloud-data-v-24ae9a78 25s linear infinite;\n  -webkit-transform: scale(0.65);\n  -moz-transform: scale(0.65);\n  transform: scale(0.65);\n}\n.x2[data-v-24ae9a78] {\n  -webkit-animation: animateCloud-data-v-24ae9a78 15s linear infinite;\n  -moz-animation: animateCloud-data-v-24ae9a78 15s linear infinite;\n  animation: animateCloud-data-v-24ae9a78 15s linear infinite;\n  -webkit-transform: scale(0.3);\n  -moz-transform: scale(0.3);\n  transform: scale(0.3);\n}\n.x3[data-v-24ae9a78] {\n  -webkit-animation: animateCloud-data-v-24ae9a78 20s linear infinite;\n  -moz-animation: animateCloud-data-v-24ae9a78 20s linear infinite;\n  animation: animateCloud-data-v-24ae9a78 20s linear infinite;\n  -webkit-transform: scale(0.5);\n  -moz-transform: scale(0.5);\n  transform: scale(0.5);\n}\n.x4[data-v-24ae9a78] {\n  -webkit-animation: animateCloud-data-v-24ae9a78 8s linear infinite;\n  -moz-animation: animateCloud-data-v-24ae9a78 8s linear infinite;\n  animation: animateCloud-data-v-24ae9a78 8s linear infinite;\n  -webkit-transform: scale(0.4);\n  -moz-transform: scale(0.4);\n  transform: scale(0.4);\n}\n.x5[data-v-24ae9a78] {\n  -webkit-animation: animateCloud-data-v-24ae9a78 15s linear infinite;\n  -moz-animation: animateCloud-data-v-24ae9a78 15s linear infinite;\n  animation: animateCloud-data-v-24ae9a78 15s linear infinite;\n  -webkit-transform: scale(0.55);\n  -moz-transform: scale(0.55);\n  transform: scale(0.55);\n}\n\n/* OBJECTS */\n.cloud[data-v-24ae9a78] {\n  background: #fff;\n  background: -moz-linear-gradient(top, #fff 5%, #f1f1f1 100%);\n  background: -webkit-gradient(linear, left top, left bottom, color-stop(5%, #fff), color-stop(100%, #f1f1f1));\n  background: -webkit-linear-gradient(top, #fff 5%, #f1f1f1 100%);\n  background: -o-linear-gradient(top, #fff 5%, #f1f1f1 100%);\n  background: -ms-linear-gradient(top, #fff 5%, #f1f1f1 100%);\n  background: linear-gradient(top, #fff 5%, #f1f1f1 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#fff', endColorstr='#f1f1f1',GradientType=0 );\n  -webkit-border-radius: 100px;\n  -moz-border-radius: 100px;\n  border-radius: 100px;\n  -webkit-box-shadow: 0 8px 5px rgba(0, 0, 0, 0.1);\n  -moz-box-shadow: 0 8px 5px rgba(0, 0, 0, 0.1);\n  box-shadow: 0 8px 5px rgba(0, 0, 0, 0.1);\n  height: 120px;\n  position: relative;\n  width: 350px;\n}\n.cloud[data-v-24ae9a78]:after, .cloud[data-v-24ae9a78]:before {\n  background: #fff;\n  content: '';\n  position: absolute;\n  z-indeX: -1;\n}\n.cloud[data-v-24ae9a78]:after {\n  -webkit-border-radius: 100px;\n  -moz-border-radius: 100px;\n  border-radius: 100px;\n  height: 100px;\n  left: 50px;\n  top: -50px;\n  width: 100px;\n}\n.cloud[data-v-24ae9a78]:before {\n  -webkit-border-radius: 200px;\n  -moz-border-radius: 200px;\n  border-radius: 200px;\n  width: 180px;\n  height: 180px;\n  right: 50px;\n  top: -90px;\n}\n", ""]);

// exports


/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_env_modules_false_targets_browsers_last_2_versions_safari_7_debug_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_syntax_dynamic_import_node_modules_vue_loader_lib_selector_type_script_index_0_PresentationCard_vue__ = __webpack_require__(184);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_dc9ed3a2_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_PresentationCard_vue__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(3);
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(274)
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_env_modules_false_targets_browsers_last_2_versions_safari_7_debug_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_syntax_dynamic_import_node_modules_vue_loader_lib_selector_type_script_index_0_PresentationCard_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_dc9ed3a2_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_PresentationCard_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_dc9ed3a2_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_PresentationCard_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/app/PresentationCard.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-dc9ed3a2", Component.options)
  } else {
    hotAPI.reload("data-v-dc9ed3a2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 274:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(275);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(4).default
var update = add("badeca78", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-dc9ed3a2\",\"scoped\":false,\"sourceMap\":false}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./PresentationCard.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-dc9ed3a2\",\"scoped\":false,\"sourceMap\":false}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./PresentationCard.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 275:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "\n.presentation_card .card__media__content{\n    justify-content: center;\n    height: inherit;\n}\n.presentation_card{\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n}\n.presentation_card .card__media__content .chip{\n    align-self: center;\n}\n", ""]);

// exports


/***/ }),

/***/ 276:
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
    { staticClass: "presentation_card", attrs: { height: "100%" } },
    [
      _vm.article.image
        ? _c("v-card-media", {
            attrs: { src: _vm.article.image.path, height: "200px" }
          })
        : _c(
            "v-card-media",
            {
              class: _vm.color,
              staticStyle: { display: "block" },
              attrs: { height: "100px" }
            },
            [
              _c(
                "v-chip",
                { attrs: { color: "orange", "text-color": "white" } },
                [
                  _vm._v("\n            Special offer\n            "),
                  _c("v-icon", { attrs: { right: "" } }, [_vm._v("star")])
                ],
                1
              )
            ],
            1
          ),
      _vm._v(" "),
      _c("v-card-title", { attrs: { "primary-title": "" } }, [
        _c("div", [
          _c("h3", { staticClass: "headline mb-0" }, [
            _vm._v(_vm._s(_vm.article.title))
          ]),
          _vm._v(" "),
          _c("div", [_vm._v(_vm._s(JSON.parse(_vm.article.message)[0].text))])
        ])
      ]),
      _vm._v(" "),
      _c(
        "v-card-actions",
        [
          _c("v-spacer"),
          _vm._v(" "),
          _c(
            "v-btn",
            { attrs: { flat: "", color: "primary", to: "log_in" } },
            [_vm._v("Los geht! "), _c("v-icon", [_vm._v("chevron_right")])],
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
    require("vue-hot-reload-api")      .rerender("data-v-dc9ed3a2", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "div",
      [
        _c(
          "div",
          { class: _vm.$vuetify.breakpoint.smAndUp ? "blogBg" : "xsBlogBg" },
          [
            _c("div", {
              staticStyle: {
                "background-size": "100%",
                "z-index": "1",
                height: "100%",
                width: "100%",
                background: "black",
                opacity: ".4",
                position: "absolute",
                top: "0",
                bottom: "0",
                right: "0",
                left: "0"
              }
            }),
            _vm._v(" "),
            _c(
              "v-layout",
              {
                staticStyle: { "z-index": "2", height: "100%" },
                attrs: { column: "" }
              },
              [
                _c(
                  "v-flex",
                  { staticStyle: { height: "100%" } },
                  [
                    _c(
                      "v-layout",
                      {
                        staticClass: "title center",
                        staticStyle: { height: "60%", "z-index": "2" },
                        attrs: {
                          column: "",
                          "align-center": "",
                          "justify-center": ""
                        }
                      },
                      [
                        _c("h1", { staticClass: "white--text" }, [
                          _vm._v("Hello and welcome on Weltimo")
                        ]),
                        _vm._v(" "),
                        _c("h3", { staticClass: "white--text" }, [
                          _vm._v("Travel to Germany with confidence thanks to")
                        ]),
                        _vm._v(" "),
                        _c("h3", { staticClass: "white--text" }, [
                          _vm._v("our courses and follow-up offers.")
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticStyle: { "margin-top": "50px" } },
                          [
                            _c(
                              "v-btn",
                              {
                                attrs: {
                                  href: "/login/google",
                                  color: "red",
                                  outline: "",
                                  large: ""
                                }
                              },
                              [_vm._v("Log in with Google")]
                            ),
                            _c("br"),
                            _vm._v(" "),
                            _c(
                              "v-btn",
                              { attrs: { href: "/login/github", large: "" } },
                              [_vm._v("Log in with Github")]
                            ),
                            _c("br"),
                            _vm._v(" "),
                            _c(
                              "v-btn",
                              {
                                attrs: {
                                  color: "primary",
                                  to: "sign_in",
                                  large: ""
                                }
                              },
                              [_vm._v("Sign in")]
                            )
                          ],
                          1
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
          "v-layout",
          { attrs: { column: "" } },
          [
            _c(
              "v-flex",
              [
                _c(
                  "v-container",
                  {
                    class: _vm.$vuetify.breakpoint.smAndUp || "noPadding",
                    attrs: {
                      "grid-list-lg": "",
                      "text-xs-center": "",
                      fluid: ""
                    }
                  },
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
                              "v-container",
                              {
                                class:
                                  _vm.$vuetify.breakpoint.smAndUp ||
                                  "noPadding",
                                attrs: {
                                  "grid-list-lg": "",
                                  "text-xs-center": "",
                                  fluid: ""
                                }
                              },
                              [
                                _c(
                                  "v-layout",
                                  { attrs: { column: "" } },
                                  [
                                    _c(
                                      "v-flex",
                                      {
                                        staticStyle: { background: "#f1f1f1" },
                                        attrs: { lg12: "" }
                                      },
                                      [
                                        _c(
                                          "v-container",
                                          { attrs: { fluid: "" } },
                                          [
                                            _c(
                                              "v-layout",
                                              {
                                                staticStyle: {
                                                  "flex-wrap": "wrap-reverse"
                                                },
                                                attrs: { row: "" }
                                              },
                                              [
                                                _c("v-flex", {
                                                  attrs: { lg1: "" }
                                                }),
                                                _vm._v(" "),
                                                _c(
                                                  "v-flex",
                                                  { attrs: { lg5: "" } },
                                                  [
                                                    _c(
                                                      "v-card-text",
                                                      {
                                                        staticStyle: {
                                                          "text-align": "left"
                                                        }
                                                      },
                                                      [
                                                        _c("h1", [
                                                          _vm._v(
                                                            "Prise en charge de dossiers"
                                                          )
                                                        ]),
                                                        _vm._v(
                                                          "\n                                                        Grâce à nos contactes dans les universités allemandes\n                                                        nos sommes capable de vous offrir des preinscriptions,\n                                                        des inscriptions... mais aussi les foyés d'accueil pour\n                                                        les filles oper et les comptes bloqués pour les cautions.\n                                                        Tout ceux ci dans le but de planifier et d'organiser vos\n                                                        etudes en allemagne.\n                                                    "
                                                        )
                                                      ]
                                                    )
                                                  ],
                                                  1
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "v-flex",
                                                  { attrs: { lg5: "" } },
                                                  [
                                                    _c("img", {
                                                      attrs: {
                                                        src:
                                                          "/img/default/dossier.jpg",
                                                        width: "100%",
                                                        height: "200px"
                                                      }
                                                    })
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c("v-flex", {
                                                  attrs: { lg1: "" }
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
                                          "v-container",
                                          { attrs: { fluid: "" } },
                                          [
                                            _c(
                                              "v-layout",
                                              { attrs: { wrap: "", row: "" } },
                                              [
                                                _c("v-flex", {
                                                  attrs: { lg1: "" }
                                                }),
                                                _vm._v(" "),
                                                _c(
                                                  "v-flex",
                                                  { attrs: { lg5: "" } },
                                                  [
                                                    _c("img", {
                                                      attrs: {
                                                        src:
                                                          "/img/default/ebook.jpg",
                                                        width: "100%",
                                                        height: "200px"
                                                      }
                                                    })
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "v-flex",
                                                  { attrs: { lg5: "" } },
                                                  [
                                                    _c(
                                                      "v-card-text",
                                                      {
                                                        staticStyle: {
                                                          "text-align": "left"
                                                        }
                                                      },
                                                      [
                                                        _c("h1", [
                                                          _vm._v(
                                                            "Cours d'allemand"
                                                          )
                                                        ]),
                                                        _vm._v(
                                                          "\n                                                        Avec nos nombreux livres et exercices  la prise en main\n                                                        de la langue allemande n'a jamais été aussi facile. De\n                                                        plus nos programmes allant du A1 au C2 vous permet d'apprendre\n                                                        la grammaire allemande de la base jusqu'au sommet. Ce qui vous\n                                                        prépare ainsi pour vos differents examens (ZDAF,Mittelstufe, DSH).\n                                                    "
                                                        )
                                                      ]
                                                    )
                                                  ],
                                                  1
                                                ),
                                                _vm._v(" "),
                                                _c("v-flex", {
                                                  attrs: { lg1: "" }
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
                                      {
                                        staticStyle: { background: "#f1f1f1" },
                                        attrs: { lg12: "" }
                                      },
                                      [
                                        _c(
                                          "v-container",
                                          { attrs: { fluid: "" } },
                                          [
                                            _c(
                                              "v-layout",
                                              {
                                                staticStyle: {
                                                  "flex-wrap": "wrap-reverse"
                                                },
                                                attrs: { row: "" }
                                              },
                                              [
                                                _c("v-flex", {
                                                  attrs: { lg1: "" }
                                                }),
                                                _vm._v(" "),
                                                _c(
                                                  "v-flex",
                                                  { attrs: { lg5: "" } },
                                                  [
                                                    _c(
                                                      "v-card-text",
                                                      {
                                                        staticStyle: {
                                                          "text-align": "left"
                                                        }
                                                      },
                                                      [
                                                        _c("h1", [
                                                          _vm._v(
                                                            "Reseau social"
                                                          )
                                                        ]),
                                                        _vm._v(
                                                          "\n                                                        Toujours dans la même optique de vous offir\n                                                        un cadre convenable et adequa pour l'apprentissage\n                                                        de la langue allemande, nous avons mis sur pied\n                                                        un reseau social dans lequel vous pourriez non seulement\n                                                        partager les moments favoris de votre vie mais aussi rencontrer\n                                                        d'autres apprenants de la langue allemande du monde entier. Ce qui\n                                                        facilitera l'apprentissage des allemands termes simple qui nous\n                                                        sont utile dans la vie de tous les jours.\n                                                    "
                                                        )
                                                      ]
                                                    )
                                                  ],
                                                  1
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "v-flex",
                                                  { attrs: { lg5: "" } },
                                                  [
                                                    _c("img", {
                                                      attrs: {
                                                        src:
                                                          "/img/default/network.jpg",
                                                        width: "100%",
                                                        height: "200px"
                                                      }
                                                    })
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c("v-flex", {
                                                  attrs: { lg1: "" }
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
                                          "v-container",
                                          { attrs: { fluid: "" } },
                                          [
                                            _c(
                                              "v-layout",
                                              { attrs: { wrap: "", row: "" } },
                                              [
                                                _c("v-flex", {
                                                  attrs: { lg1: "" }
                                                }),
                                                _vm._v(" "),
                                                _c(
                                                  "v-flex",
                                                  { attrs: { lg5: "" } },
                                                  [
                                                    _c("img", {
                                                      attrs: {
                                                        src:
                                                          "/img/default/forum.jpg",
                                                        width: "100%",
                                                        height: "200px"
                                                      }
                                                    })
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "v-flex",
                                                  { attrs: { lg5: "" } },
                                                  [
                                                    _c(
                                                      "v-card-text",
                                                      {
                                                        staticStyle: {
                                                          "text-align": "left"
                                                        }
                                                      },
                                                      [
                                                        _c("h1", [
                                                          _vm._v("Forum")
                                                        ]),
                                                        _vm._v(
                                                          "\n                                                        Pour vos questions et problemes au sujet de la\n                                                        langue allemande ou des dossiers, vous pouvez\n                                                        les poser sur notre forum afin de beneficier des\n                                                        réponses et des conseils de toute la communauté\n                                                        Weltimo.\n                                                    "
                                                        )
                                                      ]
                                                    )
                                                  ],
                                                  1
                                                ),
                                                _vm._v(" "),
                                                _c("v-flex", {
                                                  attrs: { lg1: "" }
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
                                attrs: {
                                  "grid-list-lg": "",
                                  "text-xs-center": "",
                                  fluid: ""
                                }
                              },
                              [
                                _c(
                                  "v-layout",
                                  { attrs: { wrap: "", row: "" } },
                                  _vm._l(_vm.articles, function(article, i) {
                                    return _c(
                                      "v-flex",
                                      { key: i, attrs: { lg4: "" } },
                                      [
                                        _c("presentation-card", {
                                          attrs: {
                                            color: _vm.colors[i] || "",
                                            article: article
                                          }
                                        })
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
                        ),
                        _vm._v(" "),
                        _c(
                          "v-flex",
                          [
                            _c(
                              "v-flex",
                              {
                                staticStyle: {
                                  "align-items": "center",
                                  "margin-top": "80px"
                                }
                              },
                              [
                                _vm._v(
                                  "\n                                Join us and discover a new way to learn German.\n                                #German in a fun way :)"
                                ),
                                _c("br"),
                                _c("br"),
                                _c("br"),
                                _c("br"),
                                _vm._v(" "),
                                _c(
                                  "v-btn",
                                  {
                                    attrs: {
                                      color: "orange",
                                      to: "sign_in",
                                      outline: "",
                                      large: ""
                                    }
                                  },
                                  [_vm._v("Sign in")]
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
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-24ae9a78", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ })

});