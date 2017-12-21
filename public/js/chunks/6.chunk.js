webpackJsonp([6],{

/***/ 37:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(51)
}
var normalizeComponent = __webpack_require__(11)
/* script */
var __vue_script__ = __webpack_require__(53)
/* template */
var __vue_template__ = __webpack_require__(54)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-6707e3d4"
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
Component.options.__file = "resources/assets/js/components/Home.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6707e3d4", Component.options)
  } else {
    hotAPI.reload("data-v-6707e3d4", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 51:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(52);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(12)("2aab1ca2", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6707e3d4\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./Home.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6707e3d4\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./Home.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 52:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "\n.logo[data-v-6707e3d4] {\n  font-size: 200px !important;\n}\n.center[data-v-6707e3d4] {\n  text-align: center;\n}\n.body[data-v-6707e3d4] {\n  background: #00b4ff;\n  color: #333;\n  font: 100% Arial, Sans Serif;\n  height: 400px;\n  margin: 0;\n  padding: 0;\n  position: sticky;\n  overflow: hidden;\n}\n.title[data-v-6707e3d4] {\n  height: 100%;\n  font-family: monospace;\n}\n#background-wrap[data-v-6707e3d4] {\n  bottom: 0;\n  left: 0;\n  padding-top: 50px;\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: -1;\n}\n\n/* KEYFRAMES */\n@-webkit-keyframes animateCloud-data-v-6707e3d4 {\n0% {\n    margin-left: -600px;\n}\n100% {\n    margin-left: 100%;\n}\n}\n@-moz-keyframes animateCloud-data-v-6707e3d4 {\n0% {\n    margin-left: -600px;\n}\n100% {\n    margin-left: 100%;\n}\n}\n@keyframes animateCloud-data-v-6707e3d4 {\n0% {\n    margin-left: -600px;\n}\n100% {\n    margin-left: 100%;\n}\n}\n\n/* ANIMATIONS */\n.x1[data-v-6707e3d4] {\n  -webkit-animation: animateCloud-data-v-6707e3d4 25s linear infinite;\n  -moz-animation: animateCloud-data-v-6707e3d4 25s linear infinite;\n  animation: animateCloud-data-v-6707e3d4 25s linear infinite;\n  -webkit-transform: scale(0.65);\n  -moz-transform: scale(0.65);\n  transform: scale(0.65);\n}\n.x2[data-v-6707e3d4] {\n  -webkit-animation: animateCloud-data-v-6707e3d4 15s linear infinite;\n  -moz-animation: animateCloud-data-v-6707e3d4 15s linear infinite;\n  animation: animateCloud-data-v-6707e3d4 15s linear infinite;\n  -webkit-transform: scale(0.3);\n  -moz-transform: scale(0.3);\n  transform: scale(0.3);\n}\n.x3[data-v-6707e3d4] {\n  -webkit-animation: animateCloud-data-v-6707e3d4 20s linear infinite;\n  -moz-animation: animateCloud-data-v-6707e3d4 20s linear infinite;\n  animation: animateCloud-data-v-6707e3d4 20s linear infinite;\n  -webkit-transform: scale(0.5);\n  -moz-transform: scale(0.5);\n  transform: scale(0.5);\n}\n.x4[data-v-6707e3d4] {\n  -webkit-animation: animateCloud-data-v-6707e3d4 8s linear infinite;\n  -moz-animation: animateCloud-data-v-6707e3d4 8s linear infinite;\n  animation: animateCloud-data-v-6707e3d4 8s linear infinite;\n  -webkit-transform: scale(0.4);\n  -moz-transform: scale(0.4);\n  transform: scale(0.4);\n}\n.x5[data-v-6707e3d4] {\n  -webkit-animation: animateCloud-data-v-6707e3d4 15s linear infinite;\n  -moz-animation: animateCloud-data-v-6707e3d4 15s linear infinite;\n  animation: animateCloud-data-v-6707e3d4 15s linear infinite;\n  -webkit-transform: scale(0.55);\n  -moz-transform: scale(0.55);\n  transform: scale(0.55);\n}\n\n/* OBJECTS */\n.cloud[data-v-6707e3d4] {\n  background: #fff;\n  background: -moz-linear-gradient(top, #fff 5%, #f1f1f1 100%);\n  background: -webkit-gradient(linear, left top, left bottom, color-stop(5%, #fff), color-stop(100%, #f1f1f1));\n  background: -webkit-linear-gradient(top, #fff 5%, #f1f1f1 100%);\n  background: -o-linear-gradient(top, #fff 5%, #f1f1f1 100%);\n  background: -ms-linear-gradient(top, #fff 5%, #f1f1f1 100%);\n  background: linear-gradient(top, #fff 5%, #f1f1f1 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#fff', endColorstr='#f1f1f1',GradientType=0 );\n  -webkit-border-radius: 100px;\n  -moz-border-radius: 100px;\n  border-radius: 100px;\n  -webkit-box-shadow: 0 8px 5px rgba(0, 0, 0, 0.1);\n  -moz-box-shadow: 0 8px 5px rgba(0, 0, 0, 0.1);\n  box-shadow: 0 8px 5px rgba(0, 0, 0, 0.1);\n  height: 120px;\n  position: relative;\n  width: 350px;\n}\n.cloud[data-v-6707e3d4]:after, .cloud[data-v-6707e3d4]:before {\n  background: #fff;\n  content: '';\n  position: absolute;\n  z-indeX: -1;\n}\n.cloud[data-v-6707e3d4]:after {\n  -webkit-border-radius: 100px;\n  -moz-border-radius: 100px;\n  border-radius: 100px;\n  height: 100px;\n  left: 50px;\n  top: -50px;\n  width: 100px;\n}\n.cloud[data-v-6707e3d4]:before {\n  -webkit-border-radius: 200px;\n  -moz-border-radius: 200px;\n  border-radius: 200px;\n  width: 180px;\n  height: 180px;\n  right: 50px;\n  top: -90px;\n}\n", ""]);

// exports


/***/ }),

/***/ 53:
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
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            images: []
        };
    }
});

/***/ }),

/***/ 54:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "v-container",
        { attrs: { fluid: "", "grid-list-md": "" } },
        [
          _c(
            "v-layout",
            { attrs: { column: "" } },
            [
              _c("v-flex", [
                _c(
                  "div",
                  { staticClass: "body" },
                  [
                    _c(
                      "v-layout",
                      {
                        staticClass: "title center",
                        attrs: {
                          column: "",
                          "align-center": "",
                          "justify-center": ""
                        }
                      },
                      [
                        _c("h1", { staticClass: "white--text" }, [
                          _vm._v("Hello and welcome on weltimo")
                        ]),
                        _vm._v(" "),
                        _c("h4", { staticClass: "white--text" }, [
                          _vm._v(
                            "Join us and discover a new way to learn German"
                          )
                        ]),
                        _vm._v(" "),
                        _c("h4", { staticClass: "white--text" }, [
                          _vm._v("learn German in a fun way  :)")
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c("div", { attrs: { id: "background-wrap" } }, [
                      _c("div", { staticClass: "x1" }, [
                        _c("div", { staticClass: "cloud" })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "x2" }, [
                        _c("div", { staticClass: "cloud" })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "x3" }, [
                        _c("div", { staticClass: "cloud" })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "x4" }, [
                        _c("div", { staticClass: "cloud" })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "x5" }, [
                        _c("div", { staticClass: "cloud" })
                      ])
                    ])
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c(
                "v-flex",
                { attrs: { "align-center": "", "d-flex": "" } },
                [
                  _c(
                    "v-avatar",
                    { attrs: { size: "200px" } },
                    [
                      _c(
                        "v-icon",
                        { staticClass: "logo", attrs: { "x-large": true } },
                        [_vm._v("language")]
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
                { staticClass: "center" },
                [
                  _vm._v("\n      learn German in a fun way  :)"),
                  _c("br"),
                  _vm._v(
                    "\n      Join us and discover a new way to learn the language."
                  ),
                  _c("br"),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: {
                        color: "primary",
                        outline: "",
                        round: "",
                        to: "/sign_in",
                        large: ""
                      }
                    },
                    [_vm._v("Sign in")]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("v-flex")
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
    require("vue-hot-reload-api")      .rerender("data-v-6707e3d4", module.exports)
  }
}

/***/ })

});