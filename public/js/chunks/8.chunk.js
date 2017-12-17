webpackJsonp([8],{

/***/ 288:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            size: "md",
            alert: true
        };
    },
    computed: {
        msgFlash: function msgFlash() {
            var msg = this.$store.state.msgFlash;
            this.$store.dispatch("msgflash/delete");
            return msg;
        }
    }
});

/***/ }),

/***/ 289:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-container",
    { attrs: { fluid: "" } },
    [
      _vm.msgFlash
        ? _c(
            "v-alert",
            {
              attrs: {
                color: "success",
                icon: "check_circle",
                outline: "",
                dismissible: ""
              },
              model: {
                value: _vm.alert,
                callback: function($$v) {
                  _vm.alert = $$v
                },
                expression: "alert"
              }
            },
            [_vm._v("\n        " + _vm._s(_vm.msgFlash) + "\n    ")]
          )
        : _vm._e(),
      _vm._v(" "),
      _c(
        "v-layout",
        [
          _c(
            "v-flex",
            { attrs: { xs12: "", sm6: "", "offset-sm3": "" } },
            [
              _c(
                "v-card",
                [
                  _c(
                    "v-container",
                    _vm._b(
                      { attrs: { fluid: "" } },
                      "v-container",
                      ((_obj = {}),
                      (_obj["grid-list-" + _vm.size] = true),
                      _obj),
                      false
                    ),
                    [
                      _c(
                        "v-layout",
                        { attrs: { row: "", wrap: "" } },
                        _vm._l(9, function(n) {
                          return _c(
                            "v-flex",
                            { key: n, attrs: { xs4: "" } },
                            [
                              _c(
                                "v-card",
                                { attrs: { flat: "", tile: "" } },
                                [
                                  _c("v-card-media", {
                                    attrs: {
                                      src:
                                        "https://unsplash.it/150/300?image=" +
                                        (Math.floor(Math.random() * 100) + 1),
                                      height: "150px"
                                    }
                                  })
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
  var _obj
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-3680eb3c", module.exports)
  }
}

/***/ }),

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(10)
/* script */
var __vue_script__ = __webpack_require__(288)
/* template */
var __vue_template__ = __webpack_require__(289)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
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
Component.options.__file = "resources/assets/js/components/user/Home.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3680eb3c", Component.options)
  } else {
    hotAPI.reload("data-v-3680eb3c", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});