webpackJsonp([37],{

/***/ 245:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Card_vue__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Card_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Card_vue__);
//
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
    components: { psCard: __WEBPACK_IMPORTED_MODULE_0__Card_vue___default.a },
    computed: {
        user: function user() {
            return this.$store.state.user.user;
        },
        levels: function levels() {
            return ["A1", "A2", "B1", "B2", "C1", "C2"];
        },
        colors: function colors() {
            return [{
                niveau: "A1",
                squareBg: "#adda93",
                circleBg: "#73c045",
                color: "#fefefe"
            }, {
                niveau: "A2",
                squareBg: "#adda93",
                circleBg: "#73c045",
                color: "#fefefe"
            }, {
                niveau: "B1",
                squareBg: "#adda93",
                circleBg: "#73c045",
                color: "#fefefe"
            }, {
                niveau: "B2",
                squareBg: "#6bd1f6",
                circleBg: "#00aff0",
                color: "#fefefe"
            }, {
                niveau: "C1",
                squareBg: "#6bd1f6",
                circleBg: "#00aff0",
                color: "#fefefe"
            }, {
                niveau: "C2",
                squareBg: "#6bd1f6",
                circleBg: "#00aff0",
                color: "#fefefe"
            }];
        },
        texts: function texts() {
            return [{
                niveau: "A1",
                title: "Starter Guider",
                description: "A1 is the elementary level and therefore suitable for beginners. The holder of such a diploma can talk about himself and his nearer environment."
            }, {
                niveau: "A2",
                title: "A2 Guide",
                description: "Das DELF A2 bescheinigt dem Prüfling bereits fortgeschrittene Fähigkeiten. Der Teilnehmer wird hier als Teil der Gesellschaft betrachtet. Folglich muss er Dinge wie die Höflichkeitsform und das Führen einfacher Gespräche beherrschen."
            }, {
                niveau: "B1",
                title: "B1 Guide",
                description: "With B1 the candidate reaches the independent level. He can follow a discussion and participate in it, he expresses his own opinion and can respond to surprising everyday situations. Flexible and experienced linguistic utterances are already part of the diploma's vocabulary."
            }, {
                niveau: "B2",
                title: "B2 Guide",
                description: "At B2, the candidate can not only express his opinion, but also defend his point of view and continue to do so. He negotiates and discusses without difficulty and is able to correct his mistakes himself."
            }, {
                niveau: "C1",
                title: "C1 Guide",
                description: "The candidate is now at the upper level. He can independently and without difficulty initiate discussions and conversations, using a large and adequate vocabulary. He speaks spontaneously, fluently and clearly structured. He shows that he masters the language structures."
            }, {
                niveau: "C2",
                title: "C2 Guide",
                description: "Der Kandidat muss nun beweisen, dass er akademische oder sonstige weiterführende Aufgaben lösen kann. Von ihm werden eine präzise, adäquate Sprache sowie ein gewandter Ausdruck erwartet."
            }];
        }
    },
    mounted: function mounted() {}
});

/***/ }),

/***/ 246:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(247)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(249)
/* template */
var __vue_template__ = __webpack_require__(250)
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
Component.options.__file = "resources/assets/js/components/user/courses/Card.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4262e864", Component.options)
  } else {
    hotAPI.reload("data-v-4262e864", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 247:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(248);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("60658de6", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4262e864\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./Card.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4262e864\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./Card.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 248:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "\n.squareBg{\n    padding: 15px;\n    display: flex;\n    justify-content: center;\n}\n.circleBg{\n    text-align: center;\n    font-size: 100px;\n    color:white;\n}\n", ""]);

// exports


/***/ }),

/***/ 249:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    props: {
        level: String,
        colors: Object,
        texts: Object
    },
    data: function data() {
        return {
            show: false
        };
    }
});

/***/ }),

/***/ 250:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-card",
    [
      _c(
        "v-card-text",
        {
          staticClass: "squareBg",
          style: { backgroundColor: _vm.colors.squareBg }
        },
        [
          _c(
            "v-avatar",
            {
              staticClass: "circleBg",
              style: { backgroundColor: _vm.colors.circleBg },
              attrs: { size: "200px" }
            },
            [
              _c("span", { style: { color: _vm.colors.color } }, [
                _vm._v(_vm._s(_vm.level))
              ])
            ]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("v-card-title", { attrs: { "primary-title": "" } }, [
        _c("div", [
          _c("div", { staticClass: "headline" }, [
            _vm._v(_vm._s(_vm.texts.title))
          ])
        ])
      ]),
      _vm._v(" "),
      _c(
        "v-card-actions",
        [
          _c(
            "v-btn",
            {
              attrs: { flat: "", to: "/courses/" + _vm.level, color: "purple" }
            },
            [_vm._v("Explore")]
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
                  _vm.show = !_vm.show
                }
              }
            },
            [
              _c("v-icon", [
                _vm._v(
                  _vm._s(_vm.show ? "keyboard_arrow_down" : "keyboard_arrow_up")
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
                  value: _vm.show,
                  expression: "show"
                }
              ]
            },
            [
              _vm._v(
                "\n            " + _vm._s(_vm.texts.description) + "\n        "
              )
            ]
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
    require("vue-hot-reload-api")      .rerender("data-v-4262e864", module.exports)
  }
}

/***/ }),

/***/ 251:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-container",
    { attrs: { "grid-list-md": "", "text-xs-left": "", fluid: "" } },
    [
      _c(
        "v-layout",
        { attrs: { row: "", wrap: "" } },
        _vm._l(_vm.levels, function(level, i) {
          return _c(
            "v-flex",
            { key: i, attrs: { lg4: "", xs12: "" } },
            [
              _c("ps-card", {
                attrs: {
                  level: level,
                  texts: _vm.texts[i],
                  colors: _vm.colors[i]
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
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-7e977f66", module.exports)
  }
}

/***/ }),

/***/ 68:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(245)
/* template */
var __vue_template__ = __webpack_require__(251)
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
Component.options.__file = "resources/assets/js/components/user/courses/Overview.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7e977f66", Component.options)
  } else {
    hotAPI.reload("data-v-7e977f66", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});