webpackJsonp([9],{

/***/ 286:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "v-btn",
        {
          attrs: { color: "primary" },
          nativeOn: {
            click: function($event) {
              _vm.open()
            }
          }
        },
        [_vm._v("Open the Dashboard")]
      ),
      _vm._v(" "),
      _vm.ready
        ? _c("markdowneditor", {
            attrs: { openDialog: _vm.openDialog },
            on: {
              close: function($event) {
                _vm.openDialog = false
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
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-570f5adc", module.exports)
  }
}

/***/ }),

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(11)
/* script */
var __vue_script__ = __webpack_require__(81)
/* template */
var __vue_template__ = __webpack_require__(286)
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
Component.options.__file = "resources/assets/js/components/admin/adminDashboard.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-570f5adc", Component.options)
  } else {
    hotAPI.reload("data-v-570f5adc", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 81:
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


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {},
  data: function data() {
    return {
      openDialog: false,
      ready: false
    };
  },

  methods: {
    open: function open() {
      var _this = this;

      __webpack_require__.e/* import() */(13).then(__webpack_require__.bind(null, 82)).then(function (markdowneditor) {
        _this.$options.components['markdowneditor'] = markdowneditor;
        _this.ready = true;
        _this.openDialog = true;
      });
    }
  }
});

/***/ })

});