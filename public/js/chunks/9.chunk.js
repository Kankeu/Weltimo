webpackJsonp([9],{

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(152);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(18)("74bdb9ba", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-24ae9a78\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./Home.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-24ae9a78\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./Home.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 152:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "\n.blogBg[data-v-24ae9a78] {\n  position: relative;\n  height: 75%;\n  width: 100%;\n  background-image: url(\"/img/default/weltimoBackground.jpg\");\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.blogBg .center[data-v-24ae9a78] {\n  font-size: 28px !important;\n}\n.xsBlogBg[data-v-24ae9a78] {\n  position: relative;\n  width: 100%;\n  background-image: url(\"/img/default/weltimoBackground.jpg\");\n  background-size: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.xsBlogBg .center[data-v-24ae9a78] {\n  font-size: 15px !important;\n  padding: 5px;\n}\n.logo[data-v-24ae9a78] {\n  font-size: 200px !important;\n}\n.center[data-v-24ae9a78] {\n  text-align: center;\n}\n.body[data-v-24ae9a78] {\n  background: #00b4ff;\n  color: #333;\n  font: 100% Arial, Sans Serif;\n  height: 400px;\n  margin: -10px;\n  margin-top: 55px;\n  padding: 0;\n  position: sticky;\n  overflow: hidden;\n}\n.title[data-v-24ae9a78] {\n  height: 100%;\n  font-family: monospace;\n}\n#background-wrap[data-v-24ae9a78] {\n  bottom: 0;\n  left: 0;\n  padding-top: 50px;\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: -1;\n}\n\n/* KEYFRAMES */\n@-webkit-keyframes animateCloud-data-v-24ae9a78 {\n0% {\n    margin-left: -600px;\n}\n100% {\n    margin-left: 100%;\n}\n}\n@-moz-keyframes animateCloud-data-v-24ae9a78 {\n0% {\n    margin-left: -600px;\n}\n100% {\n    margin-left: 100%;\n}\n}\n@keyframes animateCloud-data-v-24ae9a78 {\n0% {\n    margin-left: -600px;\n}\n100% {\n    margin-left: 100%;\n}\n}\n\n/* ANIMATIONS */\n.x1[data-v-24ae9a78] {\n  -webkit-animation: animateCloud-data-v-24ae9a78 25s linear infinite;\n  -moz-animation: animateCloud-data-v-24ae9a78 25s linear infinite;\n  animation: animateCloud-data-v-24ae9a78 25s linear infinite;\n  -webkit-transform: scale(0.65);\n  -moz-transform: scale(0.65);\n  transform: scale(0.65);\n}\n.x2[data-v-24ae9a78] {\n  -webkit-animation: animateCloud-data-v-24ae9a78 15s linear infinite;\n  -moz-animation: animateCloud-data-v-24ae9a78 15s linear infinite;\n  animation: animateCloud-data-v-24ae9a78 15s linear infinite;\n  -webkit-transform: scale(0.3);\n  -moz-transform: scale(0.3);\n  transform: scale(0.3);\n}\n.x3[data-v-24ae9a78] {\n  -webkit-animation: animateCloud-data-v-24ae9a78 20s linear infinite;\n  -moz-animation: animateCloud-data-v-24ae9a78 20s linear infinite;\n  animation: animateCloud-data-v-24ae9a78 20s linear infinite;\n  -webkit-transform: scale(0.5);\n  -moz-transform: scale(0.5);\n  transform: scale(0.5);\n}\n.x4[data-v-24ae9a78] {\n  -webkit-animation: animateCloud-data-v-24ae9a78 8s linear infinite;\n  -moz-animation: animateCloud-data-v-24ae9a78 8s linear infinite;\n  animation: animateCloud-data-v-24ae9a78 8s linear infinite;\n  -webkit-transform: scale(0.4);\n  -moz-transform: scale(0.4);\n  transform: scale(0.4);\n}\n.x5[data-v-24ae9a78] {\n  -webkit-animation: animateCloud-data-v-24ae9a78 15s linear infinite;\n  -moz-animation: animateCloud-data-v-24ae9a78 15s linear infinite;\n  animation: animateCloud-data-v-24ae9a78 15s linear infinite;\n  -webkit-transform: scale(0.55);\n  -moz-transform: scale(0.55);\n  transform: scale(0.55);\n}\n\n/* OBJECTS */\n.cloud[data-v-24ae9a78] {\n  background: #fff;\n  background: -moz-linear-gradient(top, #fff 5%, #f1f1f1 100%);\n  background: -webkit-gradient(linear, left top, left bottom, color-stop(5%, #fff), color-stop(100%, #f1f1f1));\n  background: -webkit-linear-gradient(top, #fff 5%, #f1f1f1 100%);\n  background: -o-linear-gradient(top, #fff 5%, #f1f1f1 100%);\n  background: -ms-linear-gradient(top, #fff 5%, #f1f1f1 100%);\n  background: linear-gradient(top, #fff 5%, #f1f1f1 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#fff', endColorstr='#f1f1f1',GradientType=0 );\n  -webkit-border-radius: 100px;\n  -moz-border-radius: 100px;\n  border-radius: 100px;\n  -webkit-box-shadow: 0 8px 5px rgba(0, 0, 0, 0.1);\n  -moz-box-shadow: 0 8px 5px rgba(0, 0, 0, 0.1);\n  box-shadow: 0 8px 5px rgba(0, 0, 0, 0.1);\n  height: 120px;\n  position: relative;\n  width: 350px;\n}\n.cloud[data-v-24ae9a78]:after, .cloud[data-v-24ae9a78]:before {\n  background: #fff;\n  content: '';\n  position: absolute;\n  z-indeX: -1;\n}\n.cloud[data-v-24ae9a78]:after {\n  -webkit-border-radius: 100px;\n  -moz-border-radius: 100px;\n  border-radius: 100px;\n  height: 100px;\n  left: 50px;\n  top: -50px;\n  width: 100px;\n}\n.cloud[data-v-24ae9a78]:before {\n  -webkit-border-radius: 200px;\n  -moz-border-radius: 200px;\n  border-radius: 200px;\n  width: 180px;\n  height: 180px;\n  right: 50px;\n  top: -90px;\n}\n", ""]);

// exports


/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__PresentationCard_vue__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__PresentationCard_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__PresentationCard_vue__);
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


/* harmony default export */ __webpack_exports__["default"] = ({
    components: { presentationCard: __WEBPACK_IMPORTED_MODULE_0__PresentationCard_vue___default.a },
    data: function data() {
        return {
            images: [],
            articles: []
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

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(155)
}
var normalizeComponent = __webpack_require__(17)
/* script */
var __vue_script__ = __webpack_require__(157)
/* template */
var __vue_template__ = __webpack_require__(158)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
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

module.exports = Component.exports


/***/ }),

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(156);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(18)("ed5d78e0", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-dc9ed3a2\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./PresentationCard.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-dc9ed3a2\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./PresentationCard.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "\n.prentation_card .card__media__content{\n    justify-content: center;\n    height: inherit;\n}\n.prentation_card .card__media__content .chip{\n    align-self: center;\n}\n", ""]);

// exports


/***/ }),

/***/ 157:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    props: {
        article: Object
    },
    data: function data() {
        return {
            color: null
        };
    },
    computed: {
        colors: function colors() {
            return ["purple", "deep-purple", "light-blue", "cyan", "blue", "indigo accent-4", "deep-orange", "orange", "red accent-3", "amber"];
        }
    },
    mounted: function mounted() {
        this.color = this.colors[Math.floor(Math.random() * Math.floor(10))];
    }
});

/***/ }),

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-card",
    { staticClass: "prentation_card", attrs: { height: "100%" } },
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
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-dc9ed3a2", module.exports)
  }
}

/***/ }),

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticStyle: { height: "100%" } }, [
    _c(
      "div",
      { staticStyle: { height: "100%" } },
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
                              { attrs: { color: "primary", large: "" } },
                              [_vm._v("Sign in")]
                            ),
                            _vm._v(" "),
                            _c(
                              "v-btn",
                              {
                                attrs: {
                                  color: "white",
                                  large: "",
                                  outline: ""
                                }
                              },
                              [_vm._v("Android")]
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
                    attrs: {
                      "grid-list-md": "",
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
                                      attrs: { article: article }
                                    })
                                  ],
                                  1
                                )
                              })
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
                                  "\n                                Join us and discover a new way to learn German\n                                learn German in a fun way :)"
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
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-24ae9a78", module.exports)
  }
}

/***/ }),

/***/ 52:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(151)
}
var normalizeComponent = __webpack_require__(17)
/* script */
var __vue_script__ = __webpack_require__(153)
/* template */
var __vue_template__ = __webpack_require__(159)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-24ae9a78"
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

module.exports = Component.exports


/***/ })

});