webpackJsonp([38],{

/***/ 252:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Book_vue__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Book_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Book_vue__);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

//
//
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
    components: { book: __WEBPACK_IMPORTED_MODULE_0__Book_vue___default.a },
    data: function data() {
        return {
            ready: true
        };
    },
    computed: {
        user: function user() {
            return this.$store.state.user.user;
        },
        books: function books() {
            var _this = this;

            return this.$store.state.book.books.filter(function (book) {
                return book.level === _this.level && book.type === 'course';
            });
        },
        end: function end() {
            var _this2 = this;

            return this.$store.state.query.queries.find(function (e) {
                return e.name === "courses" && !e.next && e.id === _this2.level;
            });
        },
        query: function query() {
            var _this3 = this;

            return this.$store.state.query.queries.find(function (e) {
                return e.name === "courses" && e.id === _this3.level;
            });
        },
        scrollTop: function scrollTop() {
            var scroll = this.$store.state.setting.scrollTops.find(function (e) {
                return e.name === "books";
            }) || {};
            return scroll.scrollTop;
        },
        level: function level() {
            return this.$route.params.level;
        }
    },
    methods: {
        loadMore: function loadMore() {
            var _this4 = this;

            if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 600) {
                if (!this.end && this.ready) {
                    this.ready = false;
                    this.$store.dispatch('setting/setLoading', true);
                    this.$http.get(this.query.next).then(function (response) {
                        if (_typeof(response.body) === "object") {
                            _this4.$store.dispatch("book/save", response.body.data);
                            _this4.$store.dispatch("users/save", response.body.data[0].user);
                            _this4.$store.dispatch("query/save", { name: 'courses', next: response.body.next_page_url, id: _this4.level });
                        }
                        _this4.ready = true;
                        _this4.$store.dispatch('setting/setLoading', false);
                    });
                }
            }
        },
        load: function load() {
            var _this5 = this;

            if (!this.query && this.ready) {
                this.ready = false;
                this.$store.dispatch('setting/setLoading', true);
                this.$http.get('/user/book/course/' + this.level).then(function (response) {
                    if (_typeof(response.body.data[0]) === "object") {
                        _this5.$store.dispatch("book/save", response.body.data);
                        _this5.$store.dispatch("users/save", response.body.data[0].user);
                        _this5.$store.dispatch("query/save", { name: 'courses', next: response.body.next_page_url, id: _this5.level });
                    }
                    _this5.ready = true;
                    _this5.$store.dispatch('setting/setLoading', false);
                });
            }
        }
    },
    mounted: function mounted() {
        this.load();
        document.body.scrollTop = this.scrollTop;
    }
});

/***/ }),

/***/ 253:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(254)
/* template */
var __vue_template__ = __webpack_require__(256)
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
Component.options.__file = "resources/assets/js/components/user/courses/Book.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-8b45d886", Component.options)
  } else {
    hotAPI.reload("data-v-8b45d886", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 254:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuetify_es5_components_VCard_VCardMedia__ = __webpack_require__(255);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    components: { VCardMedia: __WEBPACK_IMPORTED_MODULE_0_vuetify_es5_components_VCard_VCardMedia__["a" /* default */] },
    props: {
        book: Object
    },
    data: function data() {
        return {
            dialog: false
        };
    }
});

/***/ }),

/***/ 255:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'v-card-media',

  props: {
    contain: Boolean,
    height: {
      type: [Number, String],
      default: 'auto'
    },
    src: {
      type: String
    }
  },

  render: function render(h) {
    var data = {
      'class': 'card__media',
      style: {
        height: !isNaN(this.height) ? this.height + 'px' : this.height
      },
      on: this.$listeners
    };

    var children = [];

    if (this.src) {
      children.push(h('div', {
        'class': 'card__media__background',
        style: {
          background: 'url(' + this.src + ') center center / ' + (this.contain ? 'contain' : 'cover') + ' no-repeat'
        }
      }));
    }

    children.push(h('div', {
      'class': 'card__media__content'
    }, this.$slots.default));

    return h('div', data, children);
  }
});

/***/ }),

/***/ 256:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "v-list-tile",
        { attrs: { avatar: "" }, on: { click: function($event) {} } },
        [
          _c(
            "v-list-tile-avatar",
            {
              on: {
                click: function($event) {
                  _vm.dialog = true
                }
              }
            },
            [_c("img", { attrs: { src: _vm.book.image.path, alt: "book" } })]
          ),
          _vm._v(" "),
          _c(
            "v-list-tile-content",
            {
              on: {
                click: function($event) {
                  _vm.dialog = true
                }
              }
            },
            [
              _c("v-list-tile-title", [_vm._v(_vm._s(_vm.book.title))]),
              _vm._v(" "),
              _c("v-list-tile-sub-title", [
                _vm._v(_vm._s(JSON.parse(_vm.book.message)[0].text))
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-list-tile-action",
            [
              _c(
                "v-btn",
                { attrs: { icon: "", href: _vm.book.url, target: "_blank" } },
                [_c("v-icon", [_vm._v("file_download")])],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _vm.$vuetify.breakpoint.smAndUp
            ? _c(
                "v-list-tile-action",
                { staticStyle: { "margin-left": "15px" } },
                [
                  _c(
                    "v-btn",
                    {
                      attrs: {
                        color: "primary",
                        outline: "",
                        to: "/courses/A1/" + _vm.book.id
                      }
                    },
                    [
                      _vm._v("\n                Read   "),
                      _c("v-icon", [_vm._v("chrome_reader_mode")])
                    ],
                    1
                  )
                ],
                1
              )
            : _vm._e()
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: { "content-class": "overflow", "max-width": "300" },
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
                "v-card-title",
                { staticClass: "headline" },
                [
                  _vm._v("Book "),
                  _c("v-spacer"),
                  _c(
                    "v-btn",
                    {
                      attrs: { icon: "" },
                      on: {
                        click: function($event) {
                          _vm.dialog = false
                        }
                      }
                    },
                    [_c("v-icon", [_vm._v("close")])],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("v-divider"),
              _vm._v(" "),
              _c("v-card-text", [_vm._v(_vm._s(_vm.book.title))]),
              _vm._v(" "),
              _c("v-card-media", {
                attrs: { src: _vm.book.image.path, height: "200px" }
              }),
              _vm._v(" "),
              _c("v-card-text", [
                _vm._v(
                  "\n                " +
                    _vm._s(JSON.parse(_vm.book.message)[0].text) +
                    "\n            "
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
                      attrs: { icon: "", href: _vm.book.url, target: "_blank" }
                    },
                    [_c("v-icon", [_vm._v("file_download")])],
                    1
                  ),
                  _vm._v(" "),
                  _vm.$vuetify.breakpoint.smAndUp
                    ? _c(
                        "v-btn",
                        {
                          attrs: {
                            color: "primary",
                            outline: "",
                            to: "/courses/A1/" + _vm.book.id
                          }
                        },
                        [
                          _vm._v("\n                    Read   "),
                          _c("v-icon", [_vm._v("chrome_reader_mode")])
                        ],
                        1
                      )
                    : _vm._e()
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
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-8b45d886", module.exports)
  }
}

/***/ }),

/***/ 257:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-card",
    {
      directives: [
        {
          name: "scroll",
          rawName: "v-scroll",
          value: { callback: this.loadMore },
          expression: "{callback: this.loadMore}"
        }
      ],
      attrs: { flat: "", height: "auto" }
    },
    [
      _c(
        "v-toolbar",
        { attrs: { flat: "" } },
        [_c("v-toolbar-title", [_vm._v(_vm._s(_vm.level) + " Books")])],
        1
      ),
      _vm._v(" "),
      _c(
        "v-list",
        { attrs: { "two-line": "" } },
        _vm._l(_vm.books, function(book) {
          return _c("book", { key: book.id, attrs: { book: book } })
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
    require("vue-hot-reload-api")      .rerender("data-v-d61df5f4", module.exports)
  }
}

/***/ }),

/***/ 69:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(252)
/* template */
var __vue_template__ = __webpack_require__(257)
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
Component.options.__file = "resources/assets/js/components/user/courses/Books.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-d61df5f4", Component.options)
  } else {
    hotAPI.reload("data-v-d61df5f4", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});