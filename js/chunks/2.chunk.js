webpackJsonp([2],{

/***/ 220:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(289)
}
var normalizeComponent = __webpack_require__(10)
/* script */
var __vue_script__ = __webpack_require__(291)
/* template */
var __vue_template__ = __webpack_require__(292)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-503e1b48"
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
Component.options.__file = "resources/assets/js/components/user/Profile.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-503e1b48", Component.options)
  } else {
    hotAPI.reload("data-v-503e1b48", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 289:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(290);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(11)("1b76033f", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-503e1b48\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./Profile.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-503e1b48\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./Profile.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 290:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 291:
/***/ (function(module, exports) {

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),

/***/ 292:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-container",
    { attrs: { "grid-list-md": "", "text-xs-center": "", fluid: "" } },
    [
      _c(
        "v-parallax",
        { attrs: { src: "/img/default/logoLg.jpg" } },
        [
          _c(
            "v-layout",
            { attrs: { column: "", "align-center": "", "justify-center": "" } },
            [
              _c(
                "v-btn",
                { attrs: { outline: "", round: "", color: "indigo" } },
                [
                  _c("v-icon", [_vm._v("insert_photo")]),
                  _vm._v(" Cover picture")
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
        [
          _c("v-flex", { attrs: { lg3: "" } }),
          _vm._v(" "),
          _c(
            "v-flex",
            { attrs: { lg6: "" } },
            [
              _c(
                "v-container",
                {
                  attrs: { "grid-list-md": "", "text-xs-center": "", fluid: "" }
                },
                [
                  _c(
                    "v-layout",
                    { attrs: { column: "" } },
                    _vm._l(10, function(n) {
                      return _c(
                        "v-flex",
                        { key: n, attrs: { lg12: "" } },
                        [
                          _c(
                            "v-card",
                            [
                              _c("v-card-media", {
                                attrs: {
                                  src: "/img/articles/" + n + ".jpg",
                                  height: "200px"
                                }
                              }),
                              _vm._v(" "),
                              _c(
                                "v-card-title",
                                { attrs: { "primary-title": "" } },
                                [
                                  _c("div", [
                                    _c("h3", { staticClass: "headline mb-0" }, [
                                      _vm._v("Kangaroo Valley Safari")
                                    ]),
                                    _vm._v(" "),
                                    _c("div", [
                                      _vm._v(
                                        "Located two hours south of Sydney in the "
                                      ),
                                      _c("br"),
                                      _vm._v(
                                        "Southern Highlands of New South Wales, ..."
                                      )
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
                                    { attrs: { flat: "", color: "orange" } },
                                    [_vm._v("Share")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-btn",
                                    { attrs: { flat: "", color: "orange" } },
                                    [_vm._v("Explore")]
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
          _c("v-flex", { attrs: { lg3: "" } })
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
    require("vue-hot-reload-api")      .rerender("data-v-503e1b48", module.exports)
  }
}

/***/ })

});