webpackJsonp([7],{

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(66)
}
var normalizeComponent = __webpack_require__(10)
/* script */
var __vue_script__ = __webpack_require__(68)
/* template */
var __vue_template__ = __webpack_require__(69)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-f1471d4c"
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
Component.options.__file = "resources/assets/js/components/Actu.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-f1471d4c", Component.options)
  } else {
    hotAPI.reload("data-v-f1471d4c", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 66:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(67);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(11)("80cb7214", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-f1471d4c\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./Actu.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-f1471d4c\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./Actu.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 67:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "\n.block[data-v-f1471d4c]{\n  display: block;\n}\n.md-card[data-v-f1471d4c]{\n  margin-bottom: 10px;\n}\n.md-card-media img[data-v-f1471d4c]{\n      height: 400px;\n}\n", ""]);

// exports


/***/ }),

/***/ 68:
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
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      faker: window.faker,
      articles: [],
      images: [],
      time: 3000
    };
  },
  created: function created() {
    for (var i = 1; i < 12; i++) {
      this.articles.push({ image: "/img/articles/" + i + ".jpg", show: false });
    }
    for (var _i = 1; _i < 12; _i++) {
      this.images.push("/img/articles/" + _i + ".jpg");
    }
  }
});

/***/ }),

/***/ 69:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "v-layout",
        { attrs: { row: "", wrap: "" } },
        [
          _c(
            "v-container",
            { attrs: { fluid: "", "grid-list-md": "" } },
            [
              _c(
                "v-layout",
                { attrs: { row: "", wrap: "", "justify-center": "" } },
                [
                  _c(
                    "v-flex",
                    { attrs: { xs12: "", lg10: "" } },
                    [
                      _c(
                        "v-carousel",
                        {
                          staticStyle: { height: "250px" },
                          attrs: {
                            lazy: true,
                            "hide-delimiters": "",
                            interval: _vm.time
                          },
                          on: {
                            mouseout: function($event) {
                              _vm.time = 3000
                            }
                          },
                          nativeOn: {
                            mouseenter: function($event) {
                              _vm.time = 30000
                            }
                          }
                        },
                        _vm._l(_vm.images, function(image, i) {
                          return _c("v-carousel-item", {
                            key: i,
                            staticStyle: {
                              "background-size": "100% 250px !important"
                            },
                            attrs: { src: image }
                          })
                        })
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
          _c("v-flex", { attrs: { xs0: "", lg2: "" } }),
          _vm._v(" "),
          _c(
            "v-flex",
            { attrs: { xs12: "", lg8: "" } },
            [
              _c(
                "v-container",
                { attrs: { fluid: "", "grid-list-md": "" } },
                [
                  _c(
                    "v-layout",
                    { attrs: { row: "", wrap: "" } },
                    _vm._l(_vm.articles, function(article, i) {
                      return _c(
                        "v-flex",
                        { key: i, attrs: { xs12: "" } },
                        [
                          _c(
                            "v-card",
                            [
                              _c("v-card-media", {
                                attrs: { src: article.image, height: "200px" }
                              }),
                              _vm._v(" "),
                              _c(
                                "v-card-title",
                                { attrs: { "primary-title": "" } },
                                [
                                  _c("div", [
                                    _c("div", { staticClass: "headline" }, [
                                      _vm._v(_vm._s(_vm.faker.name.findName()))
                                    ]),
                                    _vm._v(" "),
                                    _c("span", { staticClass: "grey--text" }, [
                                      _vm._v(_vm._s(_vm.faker.name.findName()))
                                    ])
                                  ])
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "v-card-actions",
                                [
                                  _c(
                                    "v-btn",
                                    { attrs: { icon: "" } },
                                    [_c("v-icon", [_vm._v("favorite")])],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-btn",
                                    { attrs: { icon: "" } },
                                    [_c("v-icon", [_vm._v("comment")])],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c("v-spacer"),
                                  _vm._v(" "),
                                  _c(
                                    "v-btn",
                                    {
                                      attrs: { icon: "" },
                                      nativeOn: {
                                        click: function($event) {
                                          article.show = !article.show
                                        }
                                      }
                                    },
                                    [
                                      _c("v-icon", [
                                        _vm._v(
                                          _vm._s(
                                            article.show
                                              ? "keyboard_arrow_down"
                                              : "keyboard_arrow_up"
                                          )
                                        )
                                      ])
                                    ],
                                    1
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-slide-y-transition",
                                [
                                  _c(
                                    "v-card-text",
                                    {
                                      directives: [
                                        {
                                          name: "show",
                                          rawName: "v-show",
                                          value: article.show,
                                          expression: "article.show"
                                        }
                                      ]
                                    },
                                    [
                                      _vm._v(
                                        "\n                " +
                                          _vm._s(_vm.faker.lorem.paragraphs()) +
                                          "\n              "
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
                    })
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
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-f1471d4c", module.exports)
  }
}

/***/ })

});