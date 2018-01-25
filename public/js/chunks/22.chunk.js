webpackJsonp([22],{

/***/ 265:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(266)
}
var normalizeComponent = __webpack_require__(17)
/* script */
var __vue_script__ = __webpack_require__(268)
/* template */
var __vue_template__ = __webpack_require__(468)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-5679b425"
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
Component.options.__file = "resources/assets/js/components/MarkdownEditor/App.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5679b425", Component.options)
  } else {
    hotAPI.reload("data-v-5679b425", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 266:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(267);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(18)("c6c5315c", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5679b425\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/less-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./App.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5679b425\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/less-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./App.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 267:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "\n.app[data-v-5679b425] {\n  position: relative;\n  left: -220px;\n  height: 100%;\n  transition: all ease .5s;\n}\n.app.show-menu[data-v-5679b425] {\n  left: 0;\n}\n.app.show-menu main section[data-v-5679b425] {\n  padding-right: 230px;\n}\n.app main[data-v-5679b425] {\n  margin-left: 220px;\n  width: 100%;\n  height: 100%;\n  background-color: #e0e0e0;\n}\n.app main section[data-v-5679b425] {\n  box-sizing: border-box;\n  height: 100%;\n  padding: 10px;\n  padding-bottom: 55px;\n  display: flex;\n  justify-content: center;\n  transition: all ease .5s;\n}\n*[data-v-5679b425]::-webkit-scrollbar {\n  display: block;\n  width: 5px;\n  background: #FAFAFA;\n}\n*[data-v-5679b425]::-webkit-scrollbar-thumb {\n  border-radius: 5px;\n  background: #E0E0E0;\n}\n*[data-v-5679b425]::-webkit-scrollbar-thumb:hover {\n  background: #BDBDBD;\n}\n", ""]);

// exports


/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_sideMenu_vue__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_sideMenu_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_sideMenu_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_navBar_vue__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_navBar_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_navBar_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_inputer_vue__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_inputer_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_inputer_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_outputer_vue__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_outputer_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_outputer_vue__);
//
//
//
//
//
//
//
//
//
//
//
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
  components: {
    sideMenu: __WEBPACK_IMPORTED_MODULE_0__components_sideMenu_vue___default.a,
    navBar: __WEBPACK_IMPORTED_MODULE_1__components_navBar_vue___default.a,
    inputer: __WEBPACK_IMPORTED_MODULE_2__components_inputer_vue___default.a,
    outputer: __WEBPACK_IMPORTED_MODULE_3__components_outputer_vue___default.a
  },
  props: {
    openDialog: Boolean
  },
  mounted: function mounted() {
    this.$store.dispatch('dashboard/loadCache');
  },

  computed: {
    showMenu: function showMenu() {
      return this.$store.state.dashboard.showMenu;
    }
  }
});

/***/ }),

/***/ 269:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(270)
}
var normalizeComponent = __webpack_require__(17)
/* script */
var __vue_script__ = __webpack_require__(272)
/* template */
var __vue_template__ = __webpack_require__(273)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-7a582d53"
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
Component.options.__file = "resources/assets/js/components/MarkdownEditor/components/sideMenu.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7a582d53", Component.options)
  } else {
    hotAPI.reload("data-v-7a582d53", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 270:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(271);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(18)("07854d30", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7a582d53\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/less-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./sideMenu.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7a582d53\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/less-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./sideMenu.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 271:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "\n.menu[data-v-7a582d53] {\n  box-sizing: border-box;\n  position: relative;\n  float: left;\n  height: 100%;\n  width: 220px;\n  box-shadow: 4px 5px 3px #aaa;\n  background-color: #f5f5f5;\n}\n.menu h1[data-v-7a582d53] {\n  margin: 0;\n  height: 75px;\n  line-height: 75px;\n  text-align: center;\n}\n.menu h1 img[data-v-7a582d53] {\n  width: 125px;\n  vertical-align: middle;\n}\n.menu .files[data-v-7a582d53] {\n  padding: 10px 0 0 0;\n  margin: 0;\n  max-height: 295px;\n  list-style: none;\n  border-bottom: 1px solid #bdbdbd;\n  overflow-y: scroll;\n}\n.menu .files li[data-v-7a582d53] {\n  position: relative;\n  padding: 0;\n  color: #9E9E9E;\n  transition: all ease .3s;\n  cursor: default;\n}\n.menu .files li span[data-v-7a582d53] {\n  box-sizing: border-box;\n  display: inline-block;\n  width: 100%;\n  height: 100%;\n  padding: 15px;\n  white-space: normal;\n  word-break: break-all;\n}\n.menu .files li .delete-btn[data-v-7a582d53] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  height: 100%;\n  display: none;\n  background: none;\n  border: none;\n  outline: none;\n}\n.menu .files li .delete-btn[data-v-7a582d53]:hover {\n  background: #EF5350;\n}\n.menu .files li .delete-btn:hover .fa[data-v-7a582d53] {\n  color: #fff;\n}\n.menu .files li .delete-btn[data-v-7a582d53]:active {\n  background: #F44336;\n}\n.menu .files li .delete-btn:active .fa[data-v-7a582d53] {\n  color: #fff;\n}\n.menu .files li.current[data-v-7a582d53] {\n  color: #616161;\n  border-left: 6px solid #009688;\n}\n.menu .files li[data-v-7a582d53]:hover {\n  background: #eee;\n}\n.menu .files li:hover .delete-btn[data-v-7a582d53] {\n  display: inline-block;\n}\n.menu .options[data-v-7a582d53] {\n  padding: 0;\n  margin: 0;\n  list-style: none;\n}\n.menu .options li[data-v-7a582d53] {\n  color: #616161;\n  transition: all ease .3s;\n  padding: 0 5px;\n  height: 55px;\n  line-height: 55px;\n}\n.menu .options li[data-v-7a582d53]:hover {\n  background: #e0e0e0;\n}\n.menu .options li[data-v-7a582d53]:active {\n  background: #bdbdbd;\n}\n.menu .options li button[data-v-7a582d53],\n.menu .options li a[data-v-7a582d53] {\n  display: inline-block;\n  padding: 0 5px;\n  width: 100%;\n  height: 100%;\n  background: none;\n  border: none;\n  outline: none;\n  text-align: left;\n  color: inherit;\n  font-size: 16px;\n  text-decoration: none;\n  cursor: default;\n}\n.menu .options li button.add-one-btn[data-v-7a582d53],\n.menu .options li a.add-one-btn[data-v-7a582d53] {\n  text-align: center;\n}\n.menu .options li button .fa[data-v-7a582d53],\n.menu .options li a .fa[data-v-7a582d53] {\n  display: inline-block;\n  width: 24px;\n  font-size: 24px;\n  margin: 0 15px;\n}\n.menu .copy-right[data-v-7a582d53] {\n  position: absolute;\n  bottom: 10px;\n  width: 100%;\n  font-size: 12px;\n  text-align: center;\n  color: #9E9E9E;\n}\n", ""]);

// exports


/***/ }),

/***/ 272:
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

/* harmony default export */ __webpack_exports__["default"] = ({
	data: function data() {
		return {
			htmlDataUrl: '',
			mdDataUrl: ''
		};
	},

	computed: {
		articleList: function articleList() {
			return this.$store.getters['dashboard/articleList'];
		},
		titleHtml: function titleHtml() {
			return this.$store.getters['dashboard/articleRaw'].split('\n')[0] + '.html';
		},
		titleMd: function titleMd() {
			return this.$store.getters['dashboard/articleRaw'].split('\n')[0] + '.md';
		}
	},
	methods: {
		selectThis: function selectThis(i) {
			this.$store.dispatch('dashboard/selectThis', i - 1);
		},
		newArticle: function newArticle() {
			var filesBox = document.querySelector('.files');
			this.$store.dispatch('dashboard/newArticle');
			setTimeout(function () {
				filesBox.scrollTop = filesBox.scrollHeight + 180;
			}, 100);
		},
		deleteThis: function deleteThis(i) {
			this.$store.dispatch('dashboard/deleteThis', i - 1);
		},
		saveToCache: function saveToCache() {
			this.$store.dispatch('dashboard/saveToCache');
		},
		readFromCache: function readFromCache() {
			this.$store.dispatch('dashboard/readFromCache');
		},
		createUrl: function createUrl(mode) {
			var self = this;
			var val = '';
			if (mode === 'md') {
				val = self.$store.getters['dashboard/articleRaw'];
				var blobObj = new Blob([val]);
				var objectURL = URL.createObjectURL(blobObj);
				self.mdDataUrl = objectURL;
			} else {
				val = self.$store.getters['dashboard/articleMd'];
				var _blobObj = new Blob([val]);
				var _objectURL = URL.createObjectURL(_blobObj);
				self.htmlDataUrl = _objectURL;
			}
		}
	}
});

/***/ }),

/***/ 273:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "menu" }, [
    _c("h1", [_vm._v("\n\t\tAdmin panel\n\t")]),
    _vm._v(" "),
    _c(
      "ul",
      { staticClass: "files" },
      [
        _vm._l(_vm.articleList.length, function(i) {
          return [
            _c("li", { class: { current: _vm.articleList[i - 1].current } }, [
              _c(
                "span",
                {
                  on: {
                    click: function($event) {
                      _vm.selectThis(i)
                    }
                  }
                },
                [_vm._v(_vm._s(_vm.articleList[i - 1].content.split("\n")[0]))]
              ),
              _vm._v(" "),
              _vm.articleList.length > 1
                ? _c(
                    "button",
                    {
                      staticClass: "delete-btn",
                      on: {
                        click: function($event) {
                          _vm.deleteThis(i)
                        }
                      }
                    },
                    [_c("v-icon", [_vm._v("close")])],
                    1
                  )
                : _vm._e()
            ])
          ]
        })
      ],
      2
    ),
    _vm._v(" "),
    _c("ul", { staticClass: "options" }, [
      _c("li", [
        _c(
          "button",
          { staticClass: "add-one-btn", on: { click: _vm.newArticle } },
          [_c("v-icon", [_vm._v("add")])],
          1
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _c(
          "a",
          {
            attrs: { href: _vm.htmlDataUrl, download: _vm.titleHtml },
            on: {
              mouseenter: function($event) {
                _vm.createUrl("html")
              }
            }
          },
          [
            _c("v-icon", [_vm._v("file_download")]),
            _vm._v("\n\t\t\t\tSave as .html\n\t\t\t")
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _c(
          "a",
          {
            attrs: { href: _vm.mdDataUrl, download: _vm.titleMd },
            on: {
              mouseenter: function($event) {
                _vm.createUrl("md")
              }
            }
          },
          [
            _c("v-icon", [_vm._v("file_download")]),
            _vm._v("\n\t\t\t\tSave as .md\n\t\t\t")
          ],
          1
        )
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "copy-right" }, [
      _vm._v("\n\t\tCopyright © 2017\n\t")
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-7a582d53", module.exports)
  }
}

/***/ }),

/***/ 274:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(275)
}
var normalizeComponent = __webpack_require__(17)
/* script */
var __vue_script__ = __webpack_require__(277)
/* template */
var __vue_template__ = __webpack_require__(278)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-3dca662d"
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
Component.options.__file = "resources/assets/js/components/MarkdownEditor/components/navBar.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3dca662d", Component.options)
  } else {
    hotAPI.reload("data-v-3dca662d", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 275:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(276);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(18)("66d71132", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3dca662d\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/less-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./navBar.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3dca662d\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/less-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./navBar.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 276:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "\nnav[data-v-3dca662d] {\n  box-sizing: border-box;\n  position: relative;\n  height: 45px;\n  background-color: #009688;\n  box-shadow: 4px 3px 3px #aaa;\n  z-index: 20;\n}\nnav ul[data-v-3dca662d] {\n  height: 45px;\n  min-width: 1000px;\n  padding: 0;\n  margin: 0;\n  list-style: none;\n}\nnav ul li[data-v-3dca662d] {\n  height: 45px;\n  float: left;\n}\nnav ul li[data-v-3dca662d]:first-child {\n  border-right: 2px solid #00897B;\n}\nnav ul li[data-v-3dca662d]:nth-last-child(2) {\n  border-left: 2px solid #00897B;\n}\nnav ul li button[data-v-3dca662d] {\n  height: 45px;\n  width: 45px;\n  border: none;\n  background: none;\n  outline: none;\n  transition: all ease .3s;\n}\nnav ul li button[data-v-3dca662d]:hover {\n  background: #00897B;\n}\nnav ul li button[data-v-3dca662d]:active {\n  background: #00796B;\n}\nnav ul li button .fa[data-v-3dca662d] {\n  color: #fff;\n  font-size: 18px;\n}\nnav .btn__close[data-v-3dca662d] {\n  position: fixed;\n  top: 0;\n  right: 0;\n}\n", ""]);

// exports


/***/ }),

/***/ 277:
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

var setContent = function setContent(inputer, oldContent, newContent, content, endPosition, start, end) {
	newContent = oldContent.substring(0, endPosition) + content + oldContent.substring(endPosition, oldContent.length);
	inputer.value = newContent;
	inputer.setSelectionRange(endPosition + start, endPosition + content.length - end);
	return newContent;
};

var upDateContent = function upDateContent(inputer, oldContent, newContent, startPosition, endPosition, symbol1, symbol2) {
	newContent = oldContent.substring(0, startPosition) + symbol1 + oldContent.substring(startPosition, endPosition) + symbol2 + oldContent.substring(endPosition, oldContent.length);
	inputer.value = newContent;
	var len = newContent.length;
	inputer.setSelectionRange(len, len);
	return newContent;
};

/* harmony default export */ __webpack_exports__["default"] = ({
	methods: {
		showMenu: function showMenu() {
			this.$store.dispatch('dashboard/showMenu');
		},
		insert: function insert(content) {
			var inputer = document.querySelector('#inputer');
			var startPosition = inputer.selectionStart;
			var endPosition = inputer.selectionEnd;
			var oldContent = inputer.value;

			inputer.focus();

			var newContent = '';

			if (startPosition === endPosition) {
				switch (content) {
					case '**Bold**':
						newContent = setContent(inputer, oldContent, newContent, content, endPosition, 2, 2);
						break;
					case '*Italic*':
						newContent = setContent(inputer, oldContent, newContent, content, endPosition, 1, 1);
						break;
					case '[Link](http://example.com/)':
						newContent = setContent(inputer, oldContent, newContent, content, endPosition, 7, 1);
						break;
					case '`code`':
						newContent = setContent(inputer, oldContent, newContent, content, endPosition, 1, 1);
						break;
					case '![Img](http://example.com/)':
						newContent = setContent(inputer, oldContent, newContent, content, endPosition, 7, 1);
						break;
					default:
						newContent = oldContent.substring(0, endPosition) + content + oldContent.substring(endPosition, oldContent.length);
						inputer.value = newContent;
						break;
				}
			} else {
				switch (content) {
					case '**Bold**':
						newContent = upDateContent(inputer, oldContent, newContent, startPosition, endPosition, '**', '**');
						break;
					case '*Italic*':
						newContent = upDateContent(inputer, oldContent, newContent, startPosition, endPosition, '*', '*');
						break;
					case '`code`':
						newContent = upDateContent(inputer, oldContent, newContent, startPosition, endPosition, '`', '`');
						break;
					case '[Link](http://example.com/)':
						newContent = upDateContent(inputer, oldContent, newContent, startPosition, endPosition, '[', '](http://example.com/)');
						break;
					case '![Img](http://example.com/)':
						newContent = upDateContent(inputer, oldContent, newContent, startPosition, endPosition, '![', '](http://example.com/)');
						break;
					default:
						return false;
						break;
				}
			}

			if (newContent.length) {
				this.$store.dispatch('dashboard/textInput', newContent);
			}
		},
		redirect: function redirect(url) {
			window.open(url, '_blank');
		}
	}
});

/***/ }),

/***/ 278:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "nav",
    [
      _c("ul", [
        _c("li", [
          _c(
            "button",
            { on: { click: _vm.showMenu } },
            [_c("v-icon", [_vm._v("menu")])],
            1
          )
        ]),
        _vm._v(" "),
        _c("li", [
          _c(
            "button",
            {
              on: {
                click: function($event) {
                  _vm.insert("**Bold**")
                }
              }
            },
            [_c("v-icon", [_vm._v("format_bold")])],
            1
          )
        ]),
        _vm._v(" "),
        _c("li", [
          _c(
            "button",
            {
              on: {
                click: function($event) {
                  _vm.insert("*Italic*")
                }
              }
            },
            [_c("v-icon", [_vm._v("format_italic")])],
            1
          )
        ]),
        _vm._v(" "),
        _c("li", [
          _c(
            "button",
            {
              on: {
                click: function($event) {
                  _vm.insert("[Link](http://example.com/)")
                }
              }
            },
            [_c("v-icon", [_vm._v("link")])],
            1
          )
        ]),
        _vm._v(" "),
        _c("li", [
          _c(
            "button",
            {
              on: {
                click: function($event) {
                  _vm.insert("\n> ")
                }
              }
            },
            [_c("v-icon", [_vm._v("format_quote")])],
            1
          )
        ]),
        _vm._v(" "),
        _c("li", [
          _c(
            "button",
            {
              on: {
                click: function($event) {
                  _vm.insert("`code`")
                }
              }
            },
            [_c("v-icon", [_vm._v("code")])],
            1
          )
        ]),
        _vm._v(" "),
        _c("li", [
          _c(
            "button",
            {
              on: {
                click: function($event) {
                  _vm.insert("![Img](http://example.com/)")
                }
              }
            },
            [_c("v-icon", [_vm._v("insert_photo")])],
            1
          )
        ]),
        _vm._v(" "),
        _c("li", [
          _c(
            "button",
            {
              on: {
                click: function($event) {
                  _vm.insert("\n- ")
                }
              }
            },
            [_c("v-icon", [_vm._v("list")])],
            1
          )
        ]),
        _vm._v(" "),
        _c("li", [
          _c(
            "button",
            {
              on: {
                click: function($event) {
                  _vm.insert("\n# ")
                }
              }
            },
            [
              _c("v-icon", { staticStyle: { "padding-bottom": "20%" } }, [
                _vm._v("H")
              ])
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c("li", [
          _c(
            "button",
            {
              on: {
                click: function($event) {
                  _vm.insert("\n\n---\n\n")
                }
              }
            },
            [_c("v-icon", [_vm._v("format_underlined")])],
            1
          )
        ]),
        _vm._v(" "),
        _c("li", [
          _c(
            "button",
            {
              on: {
                click: function($event) {
                  _vm.insert(
                    "\n\n| title | title | title |\n| --- | --- | --- |\n| item | item | item |"
                  )
                }
              }
            },
            [_c("v-icon", [_vm._v("view_comfy")])],
            1
          )
        ])
      ]),
      _vm._v(" "),
      _c(
        "v-btn",
        {
          staticClass: "btn__close",
          attrs: { icon: "", dark: "" },
          nativeOn: {
            click: function($event) {
              _vm.$emit("close")
            }
          }
        },
        [_c("v-icon", [_vm._v("close")])],
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
    require("vue-hot-reload-api")      .rerender("data-v-3dca662d", module.exports)
  }
}

/***/ }),

/***/ 279:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(280)
}
var normalizeComponent = __webpack_require__(17)
/* script */
var __vue_script__ = __webpack_require__(282)
/* template */
var __vue_template__ = __webpack_require__(283)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-0d8be60a"
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
Component.options.__file = "resources/assets/js/components/MarkdownEditor/components/inputer.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0d8be60a", Component.options)
  } else {
    hotAPI.reload("data-v-0d8be60a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 280:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(281);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(18)("1f8115fa", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0d8be60a\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/less-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./inputer.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0d8be60a\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/less-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./inputer.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 281:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "\ndiv[data-v-0d8be60a] {\n  width: 50%;\n  height: 100%;\n  margin-right: 10px;\n}\ndiv textarea[data-v-0d8be60a] {\n  box-sizing: border-box;\n  height: 100%;\n  width: 100%;\n  vertical-align: top;\n  padding: 15px;\n  resize: none;\n  border: none;\n  background-color: #f5f5f5;\n  outline: none;\n  font-family: inherit;\n  font-size: 18px;\n  color: #616161;\n  box-shadow: 4px 5px 3px #aaa;\n  transition: all ease .3s;\n}\n", ""]);

// exports


/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
	computed: {
		rawTxt: function rawTxt() {
			return this.$store.getters['dashboard/articleRaw'];
		}
	},
	methods: {
		inputting: function inputting(e) {
			this.$store.dispatch('dashboard/textInput', e.target.value);
			this.$store.dispatch('dashboard/saveToCache');
		},
		syncStroll: function syncStroll(e) {
			var outputer = document.querySelector('.outputer');
			outputer.scrollTop = e.target.scrollTop;
		},
		dragging: function dragging(e) {
			var self = this;
			var dt = e.dataTransfer;
			var files = dt.files;
			var fileReader = new FileReader();
			fileReader.readAsText(files[0], 'UTF-8');
			fileReader.onloadend = function (e) {
				var value = e.target.result;
				self.$store.dispatch('dashboard/textInput', value);
				self.$store.dispatch('dashboard/saveToCache');
			};
		}
	}
});

/***/ }),

/***/ 283:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("textarea", {
      attrs: { id: "inputer", autofocus: "" },
      domProps: { value: _vm.rawTxt },
      on: {
        input: _vm.inputting,
        scroll: _vm.syncStroll,
        drop: function($event) {
          $event.stopPropagation()
          $event.preventDefault()
          _vm.dragging($event)
        }
      }
    })
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-0d8be60a", module.exports)
  }
}

/***/ }),

/***/ 284:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(285)
}
var normalizeComponent = __webpack_require__(17)
/* script */
var __vue_script__ = __webpack_require__(287)
/* template */
var __vue_template__ = __webpack_require__(467)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-3ef8676b"
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
Component.options.__file = "resources/assets/js/components/MarkdownEditor/components/outputer.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3ef8676b", Component.options)
  } else {
    hotAPI.reload("data-v-3ef8676b", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 285:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(286);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(18)("141d50c4", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3ef8676b\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/less-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./outputer.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3ef8676b\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/less-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./outputer.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 286:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "\n.outputer[data-v-3ef8676b] {\n  box-sizing: border-box;\n  height: 100%;\n  width: 50%;\n  padding: 15px;\n  resize: none;\n  border: none;\n  background-color: #f5f5f5;\n  outline: none;\n  font-family: inherit;\n  font-size: 18px;\n  color: #616161;\n  box-shadow: 4px 5px 3px #aaa;\n  white-space: normal;\n  overflow-y: scroll;\n  word-wrap: break-word;\n}\n", ""]);

// exports


/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      scrollTrigger: false,
      html: null
    };
  },
  computed: {
    ripeTxt: function ripeTxt() {
      return this.$store.getters['dashboard/articleMd'];
    }
  },
  mounted: function mounted() {
    var _this = this;

    __webpack_require__.e/* import() */(23).then(__webpack_require__.bind(null, 288)).then(function (marked) {
      __webpack_require__.e/* import() */(21).then(__webpack_require__.bind(null, 289)).then(function (_highlight) {
        marked.setOptions({
          highlight: function highlight(code) {
            return _highlight.highlightAuto(code).value;
          }
        });
        _this.html = marked;
        console.log(_this);
      });
    });
  },

  watch: {
    ripeTxt: function ripeTxt(data) {
      this.$forceUpdate();
      //Vue.compile(this.$el)
    }
  }
});

/***/ }),

/***/ 467:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.html
    ? _c("div", {
        staticClass: "outputer",
        domProps: { innerHTML: _vm._s(_vm.html(_vm.ripeTxt)) }
      })
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-3ef8676b", module.exports)
  }
}

/***/ }),

/***/ 468:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-dialog",
    {
      attrs: {
        fullscreen: "",
        transition: "dialog-bottom-transition",
        overlay: false
      },
      model: {
        value: _vm.openDialog,
        callback: function($$v) {
          _vm.openDialog = $$v
        },
        expression: "openDialog"
      }
    },
    [
      _c(
        "div",
        {
          class: [_vm.showMenu ? "show-menu" : "", "app"],
          staticStyle: { width: "100%" },
          attrs: { id: "app" }
        },
        [
          _c("sideMenu"),
          _vm._v(" "),
          _c(
            "main",
            [
              _c("navBar", {
                on: {
                  close: function($event) {
                    _vm.$emit("close")
                  }
                }
              }),
              _vm._v(" "),
              _c("section", [_c("inputer"), _vm._v(" "), _c("outputer")], 1)
            ],
            1
          )
        ],
        1
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-5679b425", module.exports)
  }
}

/***/ })

});