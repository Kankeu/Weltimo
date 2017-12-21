webpackJsonp([0],{

/***/ 295:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(296);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(12)("1b76033f", content, false);
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

/***/ 296:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__card_CardFont_vue__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__card_CardFont_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__card_CardFont_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__card_CardPublication_vue__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__card_CardPublication_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__card_CardPublication_vue__);
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
//
//
//
//
//
//
//
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
    components: { cardFont: __WEBPACK_IMPORTED_MODULE_0__card_CardFont_vue___default.a, cardPublication: __WEBPACK_IMPORTED_MODULE_1__card_CardPublication_vue___default.a },
    data: function data() {
        return {
            articles: null
        };
    },
    computed: {
        user: function user() {
            return this.$store.state.user.user;
        }
    },
    mounted: function mounted() {
        var _this = this;

        this.$http.get('/user/profile').then(function (response) {
            if (response.body[0] && _typeof(response.body) === "object") {
                _this.articles = response.body;
                _this.$store.dispatch("article/save", response.body);
            }
        });
    }
});

/***/ }),

/***/ 298:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(299)
}
var normalizeComponent = __webpack_require__(11)
/* script */
var __vue_script__ = __webpack_require__(301)
/* template */
var __vue_template__ = __webpack_require__(305)
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
Component.options.__file = "resources/assets/js/components/card/CardFont.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-85aacf92", Component.options)
  } else {
    hotAPI.reload("data-v-85aacf92", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 299:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(300);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(12)("6a5ee809", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-85aacf92\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./CardFont.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-85aacf92\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./CardFont.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 300:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "\n.faceMocion{\n    top: 0 !important;\n    left: 0 !important;\n    transform: scale(.8);\n    position: relative;\n    display: flex !important;\n    flex-direction: row !important;\n    justify-content: space-between !important;\n    height: initial !important;\n}\n.selectorFace{margin:0;margin-top: -6px;\n}\n.menu__content[menu=like]{box-shadow:none !important;top:1350px !important;left: 417px !important;\n}\n.selectorFace{\n    transform: scale(.6)\n}\n.card__media__content{\n    white-space: pre-line;\n    margin-bottom: -4px;\n    padding-left: 10px;\n    margin-top: -4px;\n    margin: -4px;\n        -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -ms-flex-direction: column;\n    flex-direction: column;\n        -webkit-box-pack: center;\n    -ms-flex-pack: center;\n    justify-content: center;\n        -webkit-box-align: center;\n    -ms-flex-align: center;\n    align-items: center;\n        display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-flex: 1;\n    -ms-flex: 1 1 auto;\n    flex: 1 1 auto;\n    -ms-flex-wrap: nowrap;\n    flex-wrap: nowrap;\n}\n.card__media{\n    color: rgba(255,255,255,1.00);\n    font-size: 30px;\n    line-height: 1.2000em;\n    text-align: center;\n    font-family: monospace\n}\n.background0{\n    background-color: #ddd;\n}\n.background1{\n    background-color: transparent !important;\n    color: black;\n    text-align: left !important;\n}\n.background2{\n    background-color:rgba(0,244,255,1.00);background-image:-webkit-linear-gradient(45deg,rgba(0,244,255,1.00) 0%,rgba(17,55,173,1.00) 100%);background-image:-moz-linear-gradient(45deg,rgba(0,244,255,1.00) 0%,rgba(17,55,173,1.00) 100%);background-image:-ms-linear-gradient(45deg,rgba(0,244,255,1.00) 0%,rgba(17,55,173,1.00) 100%);background-image:-o-linear-gradient(45deg,rgba(0,244,255,1.00) 0%,rgba(17,55,173,1.00) 100%);background-image:-webkit-gradient(left bottom,color-stop(rgba(0,244,255,1.00) 0%),color-stop(rgba(17,55,173,1.00) 100%));background-image:linear-gradient(45deg,rgba(0,244,255,1.00) 0%,rgba(17,55,173,1.00) 100%);\n    color: white !important;\n    text-align: center !important;\n    justify-content: center;\n    flex-direction: column;\n    font-size: 30px !important;\n}\n.background3{\n    background-color:rgba(23,172,255,1.00);background-image:-webkit-linear-gradient(45deg,rgba(102,244,133,1.00) 0%,rgba(23,172,255,1.00) 100%);background-image:-moz-linear-gradient(45deg,rgba(102,244,133,1.00) 0%,rgba(23,172,255,1.00) 100%);background-image:-ms-linear-gradient(45deg,rgba(102,244,133,1.00) 0%,rgba(23,172,255,1.00) 100%);background-image:-o-linear-gradient(45deg,rgba(102,244,133,1.00) 0%,rgba(23,172,255,1.00) 100%);background-image:-webkit-gradient(left bottom,color-stop(rgba(102,244,133,1.00) 0%),color-stop(rgba(23,172,255,1.00) 100%));background-image:linear-gradient(45deg,rgba(102,244,133,1.00) 0%,rgba(23,172,255,1.00) 100%);\n    color: white !important;\n    text-align: center !important;\n    justify-content: center;\n    flex-direction: column;\n    font-size: 30px !important;\n}\n.background4{\n    background-color:rgba(5,174,53,1.00);background-image:-webkit-linear-gradient(45deg,rgba(248,240,35,1.00) 0%,rgba(5,174,53,1.00) 100%);background-image:-moz-linear-gradient(45deg,rgba(248,240,35,1.00) 0%,rgba(5,174,53,1.00) 100%);background-image:-ms-linear-gradient(45deg,rgba(248,240,35,1.00) 0%,rgba(5,174,53,1.00) 100%);background-image:-o-linear-gradient(45deg,rgba(248,240,35,1.00) 0%,rgba(5,174,53,1.00) 100%);background-image:-webkit-gradient(left bottom,color-stop(rgba(248,240,35,1.00) 0%),color-stop(rgba(5,174,53,1.00) 100%));background-image:linear-gradient(45deg,rgba(248,240,35,1.00) 0%,rgba(5,174,53,1.00) 100%);\n    color: white !important;\n    text-align: center !important; \n    justify-content: center;\n    flex-direction: column;  \n    font-size: 30px !important;\n}\n.background5{\n    background-color:rgba(255,0,71,1.00);background-image:-webkit-linear-gradient(45deg,rgba(255,0,71,1.00) 0%,rgba(44,52,199,1.00) 100%);background-image:-moz-linear-gradient(45deg,rgba(255,0,71,1.00) 0%,rgba(44,52,199,1.00) 100%);background-image:-ms-linear-gradient(45deg,rgba(255,0,71,1.00) 0%,rgba(44,52,199,1.00) 100%);background-image:-o-linear-gradient(45deg,rgba(255,0,71,1.00) 0%,rgba(44,52,199,1.00) 100%);background-image:-webkit-gradient(left bottom,color-stop(rgba(255,0,71,1.00) 0%),color-stop(rgba(44,52,199,1.00) 100%));background-image:linear-gradient(45deg,rgba(255,0,71,1.00) 0%,rgba(44,52,199,1.00) 100%);\n    color: white !important;\n    text-align: center !important;\n    justify-content: center;\n    flex-direction: column;\n    font-size: 30px !important;\n}\n.background6{\n    background-color:rgba(115,33,173,1.00);background-image:-webkit-linear-gradient(-45deg,rgba(115,33,173,1.00) 0%,rgba(72,229,169,1.00) 100%);background-image:-moz-linear-gradient(-45deg,rgba(115,33,173,1.00) 0%,rgba(72,229,169,1.00) 100%);background-image:-ms-linear-gradient(-45deg,rgba(115,33,173,1.00) 0%,rgba(72,229,169,1.00) 100%);background-image:-o-linear-gradient(-45deg,rgba(115,33,173,1.00) 0%,rgba(72,229,169,1.00) 100%);background-image:-webkit-gradient(left top,right bottom,color-stop(rgba(115,33,173,1.00) 0%),color-stop(rgba(72,229,169,1.00) 100%));background-image:linear-gradient(135deg,rgba(115,33,173,1.00) 0%,rgba(72,229,169,1.00) 100%);\n    color: white !important;\n    text-align: center !important;\n    justify-content: center;\n    flex-direction: column;\n    font-size: 30px !important;\n}\n.background7{\n    background-color:rgba(167,183,216,1.00);background-image:-webkit-linear-gradient(45deg,rgba(167,183,216,1.00) 0%,rgba(22,24,29,1.00) 100%);background-image:-moz-linear-gradient(45deg,rgba(167,183,216,1.00) 0%,rgba(22,24,29,1.00) 100%);background-image:-ms-linear-gradient(45deg,rgba(167,183,216,1.00) 0%,rgba(22,24,29,1.00) 100%);background-image:-o-linear-gradient(45deg,rgba(167,183,216,1.00) 0%,rgba(22,24,29,1.00) 100%);background-image:-webkit-gradient(left bottom,color-stop(rgba(167,183,216,1.00) 0%),color-stop(rgba(22,24,29,1.00) 100%));background-image:linear-gradient(45deg,rgba(167,183,216,1.00) 0%,rgba(22,24,29,1.00) 100%);\n    color: white !important;\n    text-align: center !important;\n    justify-content: center;\n    flex-direction: column;\n    font-size: 30px !important;\n}\n.background8{\n    background-color:rgba(93,63,218,1.00);background-image:-webkit-linear-gradient(45deg,rgba(252,54,253,1.00) 0%,rgba(93,63,218,1.00) 100%);background-image:-moz-linear-gradient(45deg,rgba(252,54,253,1.00) 0%,rgba(93,63,218,1.00) 100%);background-image:-ms-linear-gradient(45deg,rgba(252,54,253,1.00) 0%,rgba(93,63,218,1.00) 100%);background-image:-o-linear-gradient(45deg,rgba(252,54,253,1.00) 0%,rgba(93,63,218,1.00) 100%);background-image:-webkit-gradient(left bottom,color-stop(rgba(252,54,253,1.00) 0%),color-stop(rgba(93,63,218,1.00) 100%));background-image:linear-gradient(45deg,rgba(252,54,253,1.00) 0%,rgba(93,63,218,1.00) 100%);\n    color: white !important;\n    text-align: center !important;\n    justify-content: center;\n    flex-direction: column;\n    font-size: 30px !important;\n}\n", ""]);

// exports


/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__faceMotion_FaceMotion_css__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__faceMotion_FaceMotion_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__faceMotion_FaceMotion_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixin_cardMixin__ = __webpack_require__(304);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    mixins: [__WEBPACK_IMPORTED_MODULE_1__mixin_cardMixin__["a" /* default */]],
    data: function data() {
        return {};
    }
});

/***/ }),

/***/ 302:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(303);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(13)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../../node_modules/css-loader/index.js!./FaceMotion.css", function() {
			var newContent = require("!!../../../../../node_modules/css-loader/index.js!./FaceMotion.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 303:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, ".faceMocion { display: none;padding-bottom:8px;padding-top:8px;padding-right: 8px;\npadding-left: 0px;box-sizing: border-box;background: white;color: white;position: absolute;width: auto;height: 65px;line-height: 25px;border-radius: 50px;transition: .25sease-in-out;color:black;border: 1px solid #eee;-webkit-box-shadow: 4px 4px 21px -9px rgba(0,0,0,0.75);-moz-box-shadow: 4px 4px 21px -9px rgba(0,0,0,0.75);box-shadow: 4px 4px 21px -9px rgba(0,0,0,0.75);}.faceMocion div{margin-left: 8px;float: left;width: 48px; height: 48px; cursor: pointer; transition: all 0.2s ease;}.selectorFace{margin-left: 8px;float: left;width: 48px; height: 48px; cursor: pointer; transition: all 0.2s ease;}.faceMocion div:hover{ -webkit-transform:scale(1.25);-moz-transform:scale(1.25);-ms-transform:scale(1.25);-o-transform:scale(1.25);transform:scale(1.25);}.molesto{ margin-left: 8px;float: left;width: 48px; height: 48px; background: url(/img/default/sqhTN9lgaY1.png) 0 0; }.asusta{background: url(/img/default/sqhTN9lgaY1.png) 0 -48px; }.divierte{background: url(/img/default/sqhTN9lgaY1.png) 0 -96px; }.gusta{background: url(/img/default/sqhTN9lgaY1.png) 0 -144px; }.amo{background: url(/img/default/sqhTN9lgaY1.png) 0 -192px; }.triste{background: url(/img/default/sqhTN9lgaY1.png) 0 -240px; }.asombro{background: url(/img/default/sqhTN9lgaY1.png) 0 -288px; }.alegre{background: url(/img/default/sqhTN9lgaY1.png) 0 -336px; }.MensajeTexto{display:none;position:absolute;border:1px solid #333;background-color:#161616;\nborder-radius:5px;padding:3px;color:#fff;font-family: sans-serif;font-size: 12px;}", ""]);

// exports


/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    props: {
        article: Object
    },
    data: function data() {
        return {
            subscribed: false,
            facemotion: null,
            text: null,
            emoticons: [{
                "emocion": "amo",
                "TextoEmocion": "Love",
                "type": 8
            }, {
                "emocion": "gusta",
                "TextoEmocion": "Like",
                "type": 7
            }, {
                "emocion": "divierte",
                "TextoEmocion": "Haha",
                "type": 6
            }, {
                "emocion": "asombro",
                "TextoEmocion": "Wow",
                "type": 5
            }, {
                "emocion": "alegre",
                "TextoEmocion": "Glad",
                "type": 4
            }, {
                "emocion": "asusta",
                "TextoEmocion": "Bother",
                "type": 3
            }, {
                "emocion": "triste",
                "TextoEmocion": "Sad",
                "type": 2
            }, {
                "emocion": "molesto",
                "TextoEmocion": "Angry",
                "type": 1
            }]
        };
    },
    computed: {
        user: function user() {
            return this.$store.state.user.user;
        }
    },
    mounted: function mounted() {
        var _this = this;

        document.querySelector('.faceMocion').parentNode.setAttribute("menu", "like");
        if (this.article.liked) {
            var emoticon = this.emoticons.find(function (e) {
                return e.type === _this.article.liked.type;
            });
            this.facemotion = emoticon.emocion;
            this.text = emoticon.TextoEmocion;
        }
    },

    methods: {
        like: function like(event, name) {
            var _this2 = this;

            var facemotion = name ? name : event.target.className;
            var emoticon = this.emoticons.find(function (e) {
                return e.emocion === facemotion;
            });
            if (emoticon) {
                this.$http.get('user/article/' + this.article.id + '/like/' + emoticon.type).then(function (response) {
                    if (response.body.id) {
                        _this2.facemotion = facemotion;
                        _this2.text = emoticon.TextoEmocion;
                        _this2.$store.dispatch('article/addLike', { article: _this2.article, like: response.body });
                    }
                });
            }
        },
        deleteLike: function deleteLike() {
            var _this3 = this;

            this.$http.delete('user/article/' + this.article.id + '/like').then(function (response) {
                if (response.body.status === 1) {
                    _this3.$store.dispatch('article/deleteLike', { article: _this3.article });
                    _this3.facemotion = null;
                    _this3.text = null;
                }
            });
        }
    }
});

/***/ }),

/***/ 305:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "v-card",
        [
          _c(
            "v-card-actions",
            [
              _c(
                "v-menu",
                {
                  attrs: {
                    "offset-x": "",
                    "close-on-content-click": false,
                    "nudge-width": 200
                  }
                },
                [
                  _c(
                    "v-avatar",
                    {
                      attrs: { slot: "activator", size: "40px" },
                      slot: "activator"
                    },
                    [
                      _c("img", {
                        attrs: { src: _vm.user.avatar, alt: "avatar" }
                      })
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-card",
                    [
                      _c(
                        "v-list",
                        [
                          _c(
                            "v-list-tile",
                            { attrs: { avatar: "" } },
                            [
                              _c("v-list-tile-avatar", [
                                _c("img", {
                                  attrs: { src: _vm.user.avatar, alt: "avatar" }
                                })
                              ]),
                              _vm._v(" "),
                              _c(
                                "v-list-tile-content",
                                [
                                  _c("v-list-tile-title", [
                                    _vm._v(
                                      _vm._s(
                                        _vm.user.name + " " + _vm.user.forename
                                      )
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("v-list-tile-sub-title", [
                                    _vm._v("Founder of Vuetify.js")
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
                                    {
                                      class: _vm.subscribed ? "blue--text" : "",
                                      attrs: { icon: "" },
                                      nativeOn: {
                                        click: function($event) {
                                          _vm.subscribed = !_vm.subscribed
                                        }
                                      }
                                    },
                                    [_c("v-icon", [_vm._v("person_add")])],
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
                      _c("v-divider")
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-layout",
                {
                  staticStyle: {
                    "margin-left": "4px",
                    "text-align": "left",
                    "font-family": "monospace"
                  },
                  attrs: { column: "" }
                },
                [
                  _c("v-flex", { staticStyle: { padding: "0" } }, [
                    _c("b", { staticStyle: { "font-weight": "100" } }, [
                      _vm._v("Bob Job")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("v-flex", { staticStyle: { padding: "0" } }, [
                    _c("small", [_vm._v("12 Fevrier 2016")])
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c("v-spacer"),
              _vm._v(" "),
              _c(
                "v-menu",
                [
                  _c(
                    "v-btn",
                    {
                      attrs: { slot: "activator", icon: "" },
                      slot: "activator"
                    },
                    [_c("v-icon", [_vm._v("more_horiz")])],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-list",
                    [
                      _c(
                        "v-list-tile",
                        { on: { click: function($event) {} } },
                        [
                          _c(
                            "v-list-tile-action",
                            [_c("v-icon", [_vm._v("share")])],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-list-tile-content",
                            [_c("v-list-tile-title", [_vm._v("Partager")])],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-list-tile",
                        { on: { click: function($event) {} } },
                        [
                          _c(
                            "v-list-tile-action",
                            [_c("v-icon", [_vm._v("edit")])],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-list-tile-content",
                            [_c("v-list-tile-title", [_vm._v("Edit")])],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-list-tile",
                        { on: { click: function($event) {} } },
                        [
                          _c(
                            "v-list-tile-action",
                            [_c("v-icon", [_vm._v("cancel")])],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-list-tile-content",
                            [_c("v-list-tile-title", [_vm._v("Masquer")])],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-list-tile",
                        { on: { click: function($event) {} } },
                        [
                          _c(
                            "v-list-tile-action",
                            [_c("v-icon", [_vm._v("info")])],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-list-tile-content",
                            [_c("v-list-tile-title", [_vm._v("Signaler")])],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-list-tile",
                        { on: { click: function($event) {} } },
                        [
                          _c(
                            "v-list-tile-action",
                            [_c("v-icon", [_vm._v("delete")])],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-list-tile-content",
                            [_c("v-list-tile-title", [_vm._v("Delete")])],
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
            "v-card-media",
            { class: _vm.article.color, attrs: { src: "", height: "378px" } },
            [
              _c(
                "div",
                { staticStyle: { width: "100%" } },
                _vm._l(JSON.parse(_vm.article.message), function(message, i) {
                  return _c("span", { key: i }, [
                    _vm._v(_vm._s(message.text)),
                    message.url
                      ? _c("span", [
                          _c("img", {
                            staticStyle: {
                              "margin-bottom": "-5px",
                              height: "30px",
                              width: "30px"
                            },
                            attrs: { src: message.url }
                          })
                        ])
                      : _vm._e()
                  ])
                })
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "v-card-actions",
            { staticStyle: { "justify-content": "space-between" } },
            [
              _c(
                "v-menu",
                {
                  staticStyle: { "font-size": "16px" },
                  attrs: {
                    "open-on-hover": true,
                    "close-on-content-click": true,
                    top: "",
                    origin: "center center",
                    transition: "scale-transition",
                    dark: true
                  }
                },
                [
                  _c(
                    "div",
                    {
                      staticStyle: { display: "flex", "align-items": "center" },
                      attrs: { slot: "activator" },
                      slot: "activator"
                    },
                    [
                      _vm.facemotion
                        ? _c(
                            "v-btn",
                            {
                              attrs: { icon: "" },
                              nativeOn: {
                                click: function($event) {
                                  _vm.deleteLike($event)
                                }
                              }
                            },
                            [
                              _c("div", {
                                class:
                                  "Selector selectorFace " + _vm.facemotion,
                                attrs: {
                                  "dato-descripcion": "alegre",
                                  "id-referencia": "1513812312742"
                                }
                              })
                            ]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.facemotion
                        ? _c(
                            "v-btn",
                            {
                              attrs: { slot: "activator", flat: "", icon: "" },
                              nativeOn: {
                                click: function($event) {
                                  _vm.like($event, "amo")
                                }
                              },
                              slot: "activator"
                            },
                            [_c("v-icon", [_vm._v("favorite_border")])],
                            1
                          )
                        : _vm._e(),
                      _vm._v("   "),
                      _c("a", [
                        _vm._v(_vm._s(_vm.text ? _vm.text : "Love") + " ")
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "faceMocion", on: { click: _vm.like } },
                    [
                      _c("div", {
                        staticClass: "amo",
                        attrs: { "dato-descripcion": "Love" }
                      }),
                      _vm._v(" "),
                      _c("div", {
                        staticClass: "gusta",
                        attrs: { "dato-descripcion": "Like" }
                      }),
                      _vm._v(" "),
                      _c("div", {
                        staticClass: "divierte",
                        attrs: { "dato-descripcion": "Haha" }
                      }),
                      _vm._v(" "),
                      _c("div", {
                        staticClass: "asombro",
                        attrs: { "dato-descripcion": "Wow" }
                      }),
                      _vm._v(" "),
                      _c("div", {
                        staticClass: "alegre",
                        attrs: { "dato-descripcion": "Glad" }
                      }),
                      _vm._v(" "),
                      _c("div", {
                        staticClass: "asusta",
                        attrs: { "dato-descripcion": "Bother" }
                      }),
                      _vm._v(" "),
                      _c("div", {
                        staticClass: "triste",
                        attrs: { "dato-descripcion": "Sad" }
                      }),
                      _vm._v(" "),
                      _c("div", {
                        staticClass: "molesto",
                        attrs: { "dato-descripcion": "Angry" }
                      })
                    ]
                  )
                ]
              ),
              _vm._v(" "),
              _c("v-spacer"),
              _vm._v(" "),
              _c(
                "v-btn",
                { attrs: { flat: "", icon: "" } },
                [_c("v-icon", [_vm._v("comment")])],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-card-actions",
            [
              _vm._v(
                "\n                " + _vm._s(_vm.article.likes_count) + " "
              ),
              _c("a", [
                _vm._v(_vm._s(_vm.plural("Reaction", _vm.article.likes_count)))
              ]),
              _vm._v(" "),
              _c("v-spacer"),
              _vm._v("\n            0 "),
              _c("a", [_vm._v("Comment")])
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
    require("vue-hot-reload-api")      .rerender("data-v-85aacf92", module.exports)
  }
}

/***/ }),

/***/ 306:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(307)
}
var normalizeComponent = __webpack_require__(11)
/* script */
var __vue_script__ = __webpack_require__(309)
/* template */
var __vue_template__ = __webpack_require__(321)
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
Component.options.__file = "resources/assets/js/components/card/CardPublication.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-e8738818", Component.options)
  } else {
    hotAPI.reload("data-v-e8738818", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 307:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(308);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(12)("09382a33", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-e8738818\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./CardPublication.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-e8738818\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./CardPublication.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 308:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "\n.notOverflow{\n    overflow: initial !important\n}\n", ""]);

// exports


/***/ }),

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__CardPublicationForm_vue__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__CardPublicationForm_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__CardPublicationForm_vue__);
//
//
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
    components: { "CardPublicationForm": __WEBPACK_IMPORTED_MODULE_0__CardPublicationForm_vue___default.a },
    data: function data() {
        return {
            dialog: false
        };
    },
    methods: {
        switchDialog: function switchDialog() {
            this.dialog = !this.dialog;
        }
    }
});

/***/ }),

/***/ 310:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(311)
  __webpack_require__(313)
}
var normalizeComponent = __webpack_require__(11)
/* script */
var __vue_script__ = __webpack_require__(315)
/* template */
var __vue_template__ = __webpack_require__(320)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-684ec650"
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
Component.options.__file = "resources/assets/js/components/card/CardPublicationForm.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-684ec650", Component.options)
  } else {
    hotAPI.reload("data-v-684ec650", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 311:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(312);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(12)("8a234438", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-684ec650\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./CardPublicationForm.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-684ec650\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./CardPublicationForm.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 312:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "\n.emojionearea .emojionearea-editor{\n    text-align: left;\n    font-size: 30px;\n    color: black;\n    font-family: monospace;\n    min-height: initial !important;\n    max-height: 300px !important;\n    background: transparent !important;\n    width:100%;\n    transition: font-size 1s;\n}\n.emojionearea .emojionearea-button, .emojionearea-picker{\n    z-index: 1 !important;\n}\n.card__text .emojionearea{\n    display: flex;\n    min-height: 15em;\n    font-size: 15px !important;\n    background-color: transparent;\n}\n.button{\n    cursor: pointer;\n    transition: scale .5;\n    border-radius: 50%\n}\n.button:hover{\n    transform: scale(1.2)\n}\n", ""]);

// exports


/***/ }),

/***/ 313:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(314);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(12)("8be600f4", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-684ec650\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=1&bustCache!./CardPublicationForm.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-684ec650\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=1&bustCache!./CardPublicationForm.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 314:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "\n.nbr-photos[data-v-684ec650]{\n    position:absolute;\n    width: 100%;\n    height: 100%;\n    display:none;\n    background-color: rgba(0, 0, 0, .4);\n    text-align: center;\n    padding-top: 35%;\n    color: #fff;\n    border-radius: 4px;\n    font-size: 18px;\n}\ndiv:hover > .nbr-photos[data-v-684ec650]{\n    display: block\n}\n.nbr-photos[data-v-684ec650]:hover{\n    display: block\n}\n", ""]);

// exports


/***/ }),

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_emojionearea__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_emojionearea___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_emojionearea__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_emojionearea_dist_emojionearea_css__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_emojionearea_dist_emojionearea_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_emojionearea_dist_emojionearea_css__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        dialog: Boolean
    },
    data: function data() {
        return {
            box: null,
            color: null,
            hasColors: true,
            file: null,
            url: null,
            loading: false
        };
    },
    computed: {
        user: function user() {
            return this.$store.state.user.user;
        }
    },
    methods: {
        preview: function preview(event) {
            if (event.target.files[0]) {
                this.file = event.target.files[0];
                this.url = window.URL.createObjectURL(event.target.files[0]);
            }
        },
        select: function select() {
            this.$el.querySelector("#photo").click();
        },
        background: function background(className) {
            var textarea = this.$el.querySelector(".emojionearea-editor");
            this.box = textarea.parentNode;
            this.color = className;
        },
        openSwatches: function openSwatches() {
            var _this = this;

            __webpack_require__.e/* import() */(14).then(__webpack_require__.bind(null, 319)).then(function (_ref) {
                var Swatches = _ref.Swatches;

                _this.$options.components['swatches'] = Swatches;
                _this.hasSwacthes = true;
                var textarea = _this.$el.querySelector(".emojionearea-editor");
                _this.box = textarea.parentNode;
            });
        },
        publish: function publish() {
            var _this2 = this;

            var text = this.parseText();
            var formdata = new FormData();
            formdata.append("image", this.file);
            formdata.append("message", text);
            formdata.append("color", this.color);
            this.loading = true;
            this.$http.post("/user/article", formdata).then(function (response) {
                if (response.body.id) {
                    _this2.clear();
                    _this2.loading = false;
                    //this.$emit('switchDialog')
                }
            });
        },
        clear: function clear() {
            this.file = null;
            this.url = null;
            this.color = "background1";
            this.$el.querySelector("textarea").value = "";
            this.$el.querySelector(".emojionearea-editor").innerHTML = "";
        },
        replaceImg: function replaceImg() {
            var html = this.$el.querySelector("textarea").value.trim();
            var results = html.match(new RegExp("(<img .*? class=\"emojioneemoji\" src=\"https://cdnjs.cloudflare.com/ajax/libs/emojione/2.2.7/assets/png/.*?\"/>)", "g"));
            if (results) {
                results.map(function (result) {
                    var url = result.match(new RegExp('src="(https://cdnjs.cloudflare.com/ajax/libs/emojione/2.2.7/assets/png/.*?)"'))[1];
                    if (url) {
                        html = html.replace(result, "![Img](" + url + ")");
                    }
                });
            }
            return html;
        },
        parseText: function parseText() {
            var message = this.$el.querySelector("textarea").value.trim();
            var tableau = [];
            var results = message.match(new RegExp("(<img .*? class=\"emojioneemoji\" src=\"https://cdnjs.cloudflare.com/ajax/libs/emojione/2.2.7/assets/png/.*?\\.png\"/>)", "g"));
            var texts = message.split(new RegExp('<img .*? class=\"emojioneemoji\" src=\"https://cdnjs.cloudflare.com/ajax/libs/emojione/2.2.7/assets/png/.*?\\.png\"/>'));
            texts.map(function (text, i) {
                if (text.length > 0) {
                    tableau.push({ text: text });
                }
                if (results && results[i]) {
                    tableau.push({ url: results[i].match(new RegExp('src="(.*?)"'))[1] });
                }
            });
            return JSON.stringify(tableau);
        }
    },
    mounted: function mounted() {
        if (!this.$el.querySelector('.emojionearea').emojioneArea) {
            $(this.$el.querySelector('.emojionearea')).emojioneArea({
                pickerPosition: "right",
                tonesStyle: "bullet",
                searchPlaceholder: "Search emoji",
                placeholder: "What's up?",
                autocomplete: false,
                saveEmojisAs: 'image'
            });
        }
    },
    destroyed: function destroyed() {
        $(this.$el.querySelector(".emojionearea-editor")).unbind();
    },

    watch: {
        color: function color(data, prevData) {
            if (this.box && data) {
                var textarea = this.box.querySelector('.emojionearea-editor');
                textarea.classList.remove(prevData);
                this.box.classList.remove(prevData);
                textarea.classList.add(data);
                this.box.classList.add(data);
            }
        },
        file: function file(data) {
            if (data) {
                this.color = "background1";
                this.hasColors = false;
            } else {
                this.hasColors = true;
                this.url = null;
            }
        }
    }
});

/***/ }),

/***/ 316:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/*!
 * EmojioneArea v3.2.6
 * https://github.com/mervick/emojionearea
 * Copyright Andrey Izman and other contributors
 * Released under the MIT license
 * Date: 2017-11-11T03:58Z
 */
window = ( typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {} );
document = window.document || {};

; ( function ( factory, global ) {
    if ( true ) {

        // CommonJS
        factory( __webpack_require__( 2 ) );
    } else if ( typeof define === "function" && define.amd ) {

        // AMD
        define( [ "jquery" ], factory );
    } else {

        // Normal script tag
        factory( global.jQuery );
    }
}( function ( $ ) {
    "use strict";

    var unique = 0;
    var eventStorage = {};
    var possibleEvents = {};
    var emojione = window.emojione;
    var readyCallbacks = [];
    function emojioneReady (fn) {
		if (emojione) {
			fn();
		} else {
			readyCallbacks.push(fn);
		}
	};
    var blankImg = 'data:image/gif;base64,R0lGODlhAQABAJH/AP///wAAAMDAwAAAACH5BAEAAAIALAAAAAABAAEAAAICVAEAOw==';
    var slice = [].slice;
    var css_class = "emojionearea";
    var emojioneSupportMode = 0;
    var invisibleChar = '&#8203;';
    function trigger(self, event, args) {
        var result = true, j = 1;
        if (event) {
            event = event.toLowerCase();
            do {
                var _event = j==1 ? '@' + event : event;
                if (eventStorage[self.id][_event] && eventStorage[self.id][_event].length) {
                    $.each(eventStorage[self.id][_event], function (i, fn) {
                        return result = fn.apply(self, args|| []) !== false;
                    });
                }
            } while (result && !!j--);
        }
        return result;
    }
    function attach(self, element, events, target) {
		target = target || function (event, callerEvent) { return $(callerEvent.currentTarget) };
		$.each(events, function(event, link) {
			event = $.isArray(events) ? link : event;
			(possibleEvents[self.id][link] || (possibleEvents[self.id][link] = []))
				.push([element, event, target]);
		});
	}
    function getTemplate(template, unicode, shortname) {
        var imageType = emojione.imageType, imagePath;
        if (imageType=='svg'){
            imagePath = emojione.imagePathSVG;
        } else {
            imagePath = emojione.imagePathPNG;
        }
        var friendlyName = '';
        if (shortname) {
            friendlyName = shortname.substr(1, shortname.length - 2).replace(/_/g, ' ').replace(/\w\S*/g, function(txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
        }
        var fname = '';
        if (unicode.uc_base && emojioneSupportMode > 4) {
            fname = unicode.uc_base;
            unicode = unicode.uc_output.toUpperCase();
        } else {
            fname = unicode;
        }
        return template
            .replace('{name}', shortname || '')
            .replace('{friendlyName}', friendlyName)
            .replace('{img}', imagePath + (emojioneSupportMode < 2 ? fname.toUpperCase() : fname) + '.' + imageType)
            .replace('{uni}', unicode)
            .replace('{alt}', emojione.convert(unicode));
    };
    function shortnameTo(str, template, clear) {
        return str.replace(/:?\+?[\w_\-]+:?/g, function(shortname) {
            shortname = ":" + shortname.replace(/:$/,'').replace(/^:/,'') + ":";
            var unicode = emojione.emojioneList[shortname];
            if (unicode) {
                if (emojioneSupportMode > 4) {
                    return getTemplate(template, unicode, shortname);
                } else {
                    if (emojioneSupportMode > 3) unicode = unicode.unicode;
                    return getTemplate(template, unicode[unicode.length-1], shortname);
                }
            }
            return clear ? '' : shortname;
        });
    };
    function pasteHtmlAtCaret(html) {
		var sel, range;
		if (window.getSelection) {
			sel = window.getSelection();
			if (sel.getRangeAt && sel.rangeCount) {
				range = sel.getRangeAt(0);
				range.deleteContents();
				var el = document.createElement("div");
				el.innerHTML = html;
				var frag = document.createDocumentFragment(), node, lastNode;
				while ( (node = el.firstChild) ) {
					lastNode = frag.appendChild(node);
				}
				range.insertNode(frag);
				if (lastNode) {
					range = range.cloneRange();
					range.setStartAfter(lastNode);
					range.collapse(true);
					sel.removeAllRanges();
					sel.addRange(range);
				}
			}
		} else if (document.selection && document.selection.type != "Control") {
			document.selection.createRange().pasteHTML(html);
		}
	}
    var emojioneVersion = window.emojioneVersion || '2.2.7';
    function isObject(variable) {
		return typeof variable === 'object';
	};
    function detectVersion(emojione) {
        var version;
        if (emojione.cacheBustParam) {
            version = emojione.cacheBustParam;
            if (!isObject(emojione['jsEscapeMap'])) return '1.5.2';
            if (version === "?v=1.2.4") return '2.0.0';
            if (version === "?v=2.0.1") return '2.1.0'; // v2.0.1 || v2.1.0
            if (version === "?v=2.1.1") return '2.1.1';
            if (version === "?v=2.1.2") return '2.1.2';
            if (version === "?v=2.1.3") return '2.1.3';
            if (version === "?v=2.1.4") return '2.1.4';
            if (version === "?v=2.2.7") return '2.2.7';
            return '2.2.7';
        } else {
            return emojione.emojiVersion;
        }
    };
    function getSupportMode(version) {
        switch (version) {
            case '1.5.2': return 0;
            case '2.0.0': return 1;
            case '2.1.0':
            case '2.1.1': return 2;
            case '2.1.2': return 3;
            case '2.1.3':
            case '2.1.4':
            case '2.2.7': return 4;
            case '3.0.1':
            case '3.0.2':
            case '3.0.3':
            case '3.0': return 5;
            case '3.1.0':
            case '3.1.1':
            case '3.1.2':
            case '3.1':
            default: return 6;
        }
    };
    var getDefaultOptions = function () {
        if ($.fn.emojioneArea && $.fn.emojioneArea.defaults) {
            return $.fn.emojioneArea.defaults;
        }

        var defaultOptions = {
            attributes: {
                dir               : "ltr",
                spellcheck        : false,
                autocomplete      : "off",
                autocorrect       : "off",
                autocapitalize    : "off",
            },
            search            : true,
            placeholder       : null,
            emojiPlaceholder  : ":smiley:",
            searchPlaceholder : "SEARCH",
            container         : null,
            hideSource        : true,
            shortnames        : true,
            sprite            : true,
            pickerPosition    : "top", // top | bottom | right
            filtersPosition   : "top", // top | bottom
            hidePickerOnBlur  : true,
            buttonTitle       : "Use the TAB key to insert emoji faster",
            tones             : true,
            tonesStyle        : "bullet", // bullet | radio | square | checkbox
            inline            : null, // null - auto
            saveEmojisAs      : "unicode", // unicode | shortname | image
            shortcuts         : true,
            autocomplete      : true,
            autocompleteTones : false,
            standalone        : false,
            useInternalCDN    : true, // Use the self loading mechanism
            imageType         : "png", // Default image type used by internal CDN
            recentEmojis      : true,
            textcomplete: {
                maxCount      : 15,
                placement     : null // null - default | top | absleft | absright
            }
        };

        var supportMode = !emojione ? getSupportMode(emojioneVersion) : getSupportMode(detectVersion(emojione));

        if (supportMode > 4) {
            defaultOptions.filters = {
                tones: {
                    title: "Diversity",
                    emoji: "open_hands raised_hands clap pray thumbsup thumbsdown punch fist left_facing_fist right_facing_fist " +
                    "fingers_crossed v metal ok_hand point_left point_right point_up_2 point_down point_up raised_hand " +
                    "raised_back_of_hand hand_splayed vulcan wave call_me muscle middle_finger writing_hand selfie nail_care ear " +
                    "nose baby boy girl man woman blond-haired_woman blond_haired_person blond-haired_man older_man older_woman " +
                    "man_with_chinese_cap woman_wearing_turban person_wearing_turban man_wearing_turban woman_police_officer " +
                    "police_officer man_police_officer woman_construction_worker construction_worker man_construction_worker " +
                    "woman_guard guard man_guard woman_detective detective man_detective woman_health_worker man_health_worker " +
                    "woman_farmer man_farmer woman_cook man_cook woman_student man_student woman_singer man_singer woman_teacher " +
                    "man_teacher woman_factory_worker man_factory_worker woman_technologist man_technologist woman_office_worker " +
                    "man_office_worker woman_mechanic man_mechanic woman_scientist man_scientist woman_artist man_artist " +
                    "woman_firefighter man_firefighter woman_pilot man_pilot woman_astronaut man_astronaut woman_judge " +
                    "man_judge mrs_claus santa princess prince bride_with_veil man_in_tuxedo angel pregnant_woman woman_bowing " +
                    "person_bowing man_bowing person_tipping_hand man_tipping_hand woman_tipping_hand person_gesturing_no " +
                    "man_gesturing_no woman_gesturing_no person_gesturing_ok man_gesturing_ok woman_gesturing_ok " +
                    "person_raising_hand man_raising_hand woman_raising_hand woman_facepalming man_facepalming person_facepalming " +
                    "woman_shrugging man_shrugging person_shrugging person_pouting man_pouting woman_pouting person_frowning " +
                    "man_frowning woman_frowning person_getting_haircut man_getting_haircut woman_getting_haircut " +
                    "person_getting_massage man_getting_face_massage woman_getting_face_massage levitate dancer man_dancing " +
                    "woman_walking person_walking man_walking woman_running person_running man_running adult child older_adult " +
                    "bearded_person woman_with_headscarf mage fairy vampire merperson elf love_you_gesture palms_up_together " +
                    "woman_mage man_mage woman_fairy man_fairy woman_vampire man_vampire mermaid merman woman_elf man_elf " +
                    "snowboarder woman_lifting_weights person_lifting_weights man_lifting_weights woman_cartwheeling " +
                    "man_cartwheeling person_doing_cartwheel woman_bouncing_ball person_bouncing_ball man_bouncing_ball " +
                    "woman_playing_handball man_playing_handball person_playing_handball woman_golfing person_golfing man_golfing " +
                    "woman_surfing person_surfing man_surfing woman_swimming person_swimming man_swimming woman_playing_water_polo " +
                    "man_playing_water_polo person_playing_water_polo woman_rowing_boat person_rowing_boat man_rowing_boat " +
                    "horse_racing woman_biking person_biking man_biking woman_mountain_biking person_mountain_biking " +
                    "man_mountain_biking woman_juggling man_juggling person_juggling breast_feeding person_in_steamy_room " +
                    "person_climbing person_in_lotus_position woman_in_steamy_room man_in_steamy_room woman_climbing " +
                    "man_climbing woman_in_lotus_position man_in_lotus_position bath sleeping_accommodation"
                },

                recent: {
                    icon: "clock3",
                    title: "Recent",
                    emoji: ""
                },

                smileys_people: {
                    icon: "yum",
                    title: "Smileys & People",
                    emoji: "grinning smiley smile grin laughing sweat_smile joy rofl relaxed blush innocent slight_smile upside_down " +
                    "wink relieved heart_eyes kissing_heart kissing kissing_smiling_eyes kissing_closed_eyes yum " +
                    "stuck_out_tongue_winking_eye stuck_out_tongue_closed_eyes stuck_out_tongue money_mouth hugging nerd sunglasses " +
                    "clown cowboy smirk unamused disappointed pensive worried confused slight_frown frowning2 persevere confounded " +
                    "tired_face weary triumph angry rage no_mouth neutral_face expressionless hushed frowning anguished open_mouth " +
                    "astonished dizzy_face flushed scream fearful cold_sweat cry disappointed_relieved drooling_face sob sweat sleepy " +
                    "sleeping rolling_eyes thinking lying_face grimacing zipper_mouth nauseated_face sneezing_face mask thermometer_face " +
                    "head_bandage smiling_imp imp japanese_ogre japanese_goblin poop ghost skull skull_crossbones alien space_invader " +
                    "robot jack_o_lantern smiley_cat smile_cat joy_cat heart_eyes_cat smirk_cat kissing_cat scream_cat crying_cat_face " +
                    "pouting_cat open_hands raised_hands clap pray handshake thumbsup thumbsdown punch fist left_facing_fist " +
                    "right_facing_fist fingers_crossed v metal ok_hand point_left point_right point_up_2 point_down point_up " +
                    "raised_hand raised_back_of_hand hand_splayed vulcan wave call_me muscle middle_finger writing_hand selfie " +
                    "nail_care ring lipstick kiss lips tongue ear nose footprints eye eyes speaking_head bust_in_silhouette " +
                    "busts_in_silhouette baby boy girl man woman blond-haired_woman blond_haired_person older_man older_woman " +
                    "man_with_chinese_cap woman_wearing_turban person_wearing_turban woman_police_officer police_officer " +
                    "woman_construction_worker construction_worker woman_guard guard woman_detective detective woman_health_worker " +
                    "man_health_worker woman_farmer man_farmer woman_cook man_cook woman_student man_student woman_singer man_singer " +
                    "woman_teacher man_teacher woman_factory_worker man_factory_worker woman_technologist man_technologist " +
                    "woman_office_worker man_office_worker woman_mechanic man_mechanic woman_scientist man_scientist woman_artist " +
                    "man_artist woman_firefighter man_firefighter woman_pilot man_pilot woman_astronaut man_astronaut woman_judge " +
                    "man_judge mrs_claus santa princess prince bride_with_veil man_in_tuxedo angel pregnant_woman woman_bowing " +
                    "person_bowing person_tipping_hand man_tipping_hand person_gesturing_no man_gesturing_no person_gesturing_ok " +
                    "man_gesturing_ok person_raising_hand man_raising_hand woman_facepalming man_facepalming woman_shrugging " +
                    "man_shrugging person_pouting man_pouting person_frowning man_frowning person_getting_haircut man_getting_haircut " +
                    "person_getting_massage man_getting_face_massage levitate dancer man_dancing people_with_bunny_ears_partying " +
                    "men_with_bunny_ears_partying woman_walking person_walking woman_running person_running couple two_women_holding_hands " +
                    "two_men_holding_hands couple_with_heart couple_ww couple_mm couplekiss kiss_ww kiss_mm family family_mwg family_mwgb " +
                    "family_mwbb family_mwgg family_wwb family_wwg family_wwgb family_wwbb family_wwgg family_mmb family_mmg family_mmgb " +
                    "family_mmbb family_mmgg family_woman_boy family_woman_girl family_woman_girl_boy family_woman_boy_boy " +
                    "family_woman_girl_girl family_man_boy family_man_girl family_man_girl_boy family_man_boy_boy family_man_girl_girl " +
                    "womans_clothes shirt jeans necktie dress bikini kimono high_heel sandal boot mans_shoe athletic_shoe womans_hat " +
                    "tophat mortar_board crown helmet_with_cross school_satchel pouch purse handbag briefcase eyeglasses dark_sunglasses " +
                    "closed_umbrella umbrella2 face_with_raised_eyebrow star_struck crazy_face shushing_face face_with_symbols_over_mouth " +
                    "face_with_hand_over_mouth face_vomiting exploding_head face_with_monocle adult child older_adult bearded_person " +
                    "woman_with_headscarf brain billed_cap scarf gloves coat socks love_you_gesture palms_up_together woman_mage " +
                    "man_mage woman_fairy man_fairy woman_vampire man_vampire mermaid merman woman_elf man_elf woman_genie man_genie " +
                    "woman_zombie man_zombie"
                },

                animals_nature: {
                    icon: "hamster",
                    title: "Animals & Nature",
                    emoji: "dog cat mouse hamster rabbit fox bear panda_face koala tiger lion_face cow pig pig_nose frog monkey_face see_no_evil " +
                    "hear_no_evil speak_no_evil monkey chicken penguin bird baby_chick hatching_chick hatched_chick duck eagle owl bat wolf boar " +
                    "horse unicorn bee bug butterfly snail shell beetle ant spider spider_web turtle snake lizard scorpion crab squid octopus shrimp " +
                    "tropical_fish fish blowfish dolphin shark whale whale2 crocodile leopard tiger2 water_buffalo ox cow2 deer dromedary_camel camel " +
                    "elephant rhino gorilla racehorse pig2 goat ram sheep dog2 poodle cat2 rooster turkey dove rabbit2 mouse2 rat chipmunk feet " +
                    "dragon dragon_face cactus christmas_tree evergreen_tree deciduous_tree palm_tree seedling herb shamrock four_leaf_clover " +
                    "bamboo tanabata_tree leaves fallen_leaf maple_leaf mushroom ear_of_rice bouquet tulip rose wilted_rose sunflower blossom " +
                    "cherry_blossom hibiscus earth_americas earth_africa earth_asia full_moon waning_gibbous_moon last_quarter_moon " +
                    "waning_crescent_moon new_moon waxing_crescent_moon first_quarter_moon waxing_gibbous_moon new_moon_with_face " +
                    "full_moon_with_face sun_with_face first_quarter_moon_with_face last_quarter_moon_with_face crescent_moon dizzy star star2 " +
                    "sparkles zap fire boom comet sunny white_sun_small_cloud partly_sunny white_sun_cloud white_sun_rain_cloud rainbow cloud " +
                    "cloud_rain thunder_cloud_rain cloud_lightning cloud_snow snowman2 snowman snowflake wind_blowing_face dash cloud_tornado " +
                    "fog ocean droplet sweat_drops umbrella giraffe zebra hedgehog sauropod t_rex cricket"
                },

                food_drink: {
                    icon: "pizza",
                    title: "Food & Drink",
                    emoji: "green_apple apple pear tangerine lemon banana watermelon grapes strawberry melon cherries peach pineapple kiwi " +
                    "avocado tomato eggplant cucumber carrot corn hot_pepper potato sweet_potato chestnut peanuts honey_pot croissant " +
                    "bread french_bread cheese egg cooking bacon pancakes fried_shrimp poultry_leg meat_on_bone pizza hotdog hamburger " +
                    "fries stuffed_flatbread taco burrito salad shallow_pan_of_food spaghetti ramen stew fish_cake sushi bento curry " +
                    "rice_ball rice rice_cracker oden dango shaved_ice ice_cream icecream cake birthday custard lollipop candy " +
                    "chocolate_bar popcorn doughnut cookie milk baby_bottle coffee tea sake beer beers champagne_glass wine_glass " +
                    "tumbler_glass cocktail tropical_drink champagne spoon fork_and_knife fork_knife_plate dumpling fortune_cookie " +
                    "takeout_box chopsticks bowl_with_spoon cup_with_straw coconut broccoli pie pretzel cut_of_meat sandwich canned_food"
                },

                activity: {
                    icon: "basketball",
                    title: "Activity",
                    emoji: "soccer basketball football baseball tennis volleyball rugby_football 8ball ping_pong badminton goal hockey field_hockey " +
                    "cricket_game golf bow_and_arrow fishing_pole_and_fish boxing_glove martial_arts_uniform ice_skate ski skier snowboarder " +
                    "woman_lifting_weights person_lifting_weights person_fencing women_wrestling men_wrestling woman_cartwheeling " +
                    "man_cartwheeling woman_bouncing_ball person_bouncing_ball woman_playing_handball man_playing_handball woman_golfing " +
                    "person_golfing woman_surfing person_surfing woman_swimming person_swimming woman_playing_water_polo " +
                    "man_playing_water_polo woman_rowing_boat person_rowing_boat horse_racing woman_biking person_biking " +
                    "woman_mountain_biking person_mountain_biking running_shirt_with_sash medal military_medal first_place second_place " +
                    "third_place trophy rosette reminder_ribbon ticket tickets circus_tent woman_juggling man_juggling performing_arts art " +
                    "clapper microphone headphones musical_score musical_keyboard drum saxophone trumpet guitar violin game_die dart bowling " +
                    "video_game slot_machine sled breast_feeding curling_stone woman_in_steamy_room man_in_steamy_room woman_climbing " +
                    "man_climbing woman_in_lotus_position man_in_lotus_position"
                },

                travel_places: {
                    icon: "rocket",
                    title: "Travel & Places",
                    emoji: "red_car taxi blue_car bus trolleybus race_car police_car ambulance fire_engine minibus truck articulated_lorry tractor " +
                    "scooter bike motor_scooter motorcycle rotating_light oncoming_police_car oncoming_bus oncoming_automobile oncoming_taxi " +
                    "aerial_tramway mountain_cableway suspension_railway railway_car train mountain_railway monorail bullettrain_side " +
                    "bullettrain_front light_rail steam_locomotive train2 metro tram station helicopter airplane_small airplane " +
                    "airplane_departure airplane_arriving rocket satellite_orbital seat canoe sailboat motorboat speedboat cruise_ship " +
                    "ferry ship anchor construction fuelpump busstop vertical_traffic_light traffic_light map moyai statue_of_liberty " +
                    "fountain tokyo_tower european_castle japanese_castle stadium ferris_wheel roller_coaster carousel_horse beach_umbrella " +
                    "beach island mountain mountain_snow mount_fuji volcano desert camping tent railway_track motorway construction_site " +
                    "factory house house_with_garden homes house_abandoned office department_store post_office european_post_office hospital " +
                    "bank hotel convenience_store school love_hotel wedding classical_building church mosque synagogue kaaba shinto_shrine " +
                    "japan rice_scene park sunrise sunrise_over_mountains stars sparkler fireworks city_sunset city_dusk cityscape " +
                    "night_with_stars milky_way bridge_at_night foggy flying_saucer"
                },

                objects: {
                    icon: "bulb",
                    title: "Objects",
                    emoji: "watch iphone calling computer keyboard desktop printer mouse_three_button trackball joystick compression minidisc " +
                    "floppy_disk cd dvd vhs camera camera_with_flash video_camera movie_camera projector film_frames telephone_receiver " +
                    "telephone pager fax tv radio microphone2 level_slider control_knobs stopwatch timer alarm_clock clock hourglass " +
                    "hourglass_flowing_sand satellite battery electric_plug bulb flashlight candle wastebasket oil money_with_wings " +
                    "dollar yen euro pound moneybag credit_card gem scales wrench hammer hammer_pick tools pick nut_and_bolt gear " +
                    "chains gun bomb knife dagger crossed_swords shield smoking coffin urn amphora crystal_ball prayer_beads barber " +
                    "alembic telescope microscope hole pill syringe thermometer toilet potable_water shower bathtub bath bellhop key " +
                    "key2 door couch bed sleeping_accommodation frame_photo shopping_bags shopping_cart gift balloon flags ribbon " +
                    "confetti_ball tada dolls izakaya_lantern wind_chime envelope envelope_with_arrow incoming_envelope e-mail " +
                    "love_letter inbox_tray outbox_tray package label mailbox_closed mailbox mailbox_with_mail mailbox_with_no_mail " +
                    "postbox postal_horn scroll page_with_curl page_facing_up bookmark_tabs bar_chart chart_with_upwards_trend " +
                    "chart_with_downwards_trend notepad_spiral calendar_spiral calendar date card_index card_box ballot_box " +
                    "file_cabinet clipboard file_folder open_file_folder dividers newspaper2 newspaper notebook " +
                    "notebook_with_decorative_cover ledger closed_book green_book blue_book orange_book books book bookmark link " +
                    "paperclip paperclips triangular_ruler straight_ruler pushpin round_pushpin scissors pen_ballpoint pen_fountain " +
                    "black_nib paintbrush crayon pencil pencil2 mag mag_right lock_with_ink_pen closed_lock_with_key lock unlock orange_heart"
                },

                symbols: {
                    icon: "heartpulse",
                    title: "Symbols",
                    emoji: "heart yellow_heart green_heart blue_heart purple_heart black_heart broken_heart heart_exclamation two_hearts " +
                    "revolving_hearts heartbeat heartpulse sparkling_heart cupid gift_heart heart_decoration peace cross star_and_crescent " +
                    "om_symbol wheel_of_dharma star_of_david six_pointed_star menorah yin_yang orthodox_cross place_of_worship ophiuchus " +
                    "aries taurus gemini cancer leo virgo libra scorpius sagittarius capricorn aquarius pisces id atom accept radioactive " +
                    "biohazard mobile_phone_off vibration_mode u6709 u7121 u7533 u55b6 u6708 eight_pointed_black_star vs white_flower " +
                    "ideograph_advantage secret congratulations u5408 u6e80 u5272 u7981 a b ab cl o2 sos x o octagonal_sign no_entry " +
                    "name_badge no_entry_sign 100 anger hotsprings no_pedestrians do_not_litter no_bicycles non-potable_water underage " +
                    "no_mobile_phones no_smoking exclamation grey_exclamation question grey_question bangbang interrobang low_brightness " +
                    "high_brightness part_alternation_mark warning children_crossing trident fleur-de-lis beginner recycle " +
                    "white_check_mark u6307 chart sparkle eight_spoked_asterisk negative_squared_cross_mark globe_with_meridians " +
                    "diamond_shape_with_a_dot_inside m cyclone zzz atm wc wheelchair parking u7a7a sa passport_control customs " +
                    "baggage_claim left_luggage mens womens baby_symbol restroom put_litter_in_its_place cinema signal_strength koko " +
                    "symbols information_source abc abcd capital_abcd ng ok up cool new free zero one two three four five six seven " +
                    "eight nine keycap_ten 1234 hash asterisk arrow_forward pause_button play_pause stop_button record_button eject " +
                    "track_next track_previous fast_forward rewind arrow_double_up arrow_double_down arrow_backward arrow_up_small " +
                    "arrow_down_small arrow_right arrow_left arrow_up arrow_down arrow_upper_right arrow_lower_right arrow_lower_left " +
                    "arrow_upper_left arrow_up_down left_right_arrow arrow_right_hook leftwards_arrow_with_hook arrow_heading_up " +
                    "arrow_heading_down twisted_rightwards_arrows repeat repeat_one arrows_counterclockwise arrows_clockwise " +
                    "musical_note notes heavy_plus_sign heavy_minus_sign heavy_division_sign heavy_multiplication_x heavy_dollar_sign " +
                    "currency_exchange tm copyright registered wavy_dash curly_loop loop end back on top soon heavy_check_mark " +
                    "ballot_box_with_check radio_button white_circle black_circle red_circle blue_circle small_red_triangle " +
                    "small_red_triangle_down small_orange_diamond small_blue_diamond large_orange_diamond large_blue_diamond " +
                    "white_square_button black_square_button black_small_square white_small_square black_medium_small_square " +
                    "white_medium_small_square black_medium_square white_medium_square black_large_square white_large_square speaker " +
                    "mute sound loud_sound bell no_bell mega loudspeaker speech_left eye_in_speech_bubble speech_balloon thought_balloon " +
                    "anger_right spades clubs hearts diamonds black_joker flower_playing_cards mahjong clock1 clock2 clock3 clock4 clock5 " +
                    "clock6 clock7 clock8 clock9 clock10 clock11 clock12 clock130 clock230 clock330 clock430 clock530 clock630 " +
                    "clock730 clock830 clock930 clock1030 clock1130 clock1230"
                },

                flags: {
                    icon: "flag_gb",
                    title: "Flags",
                    emoji: "flag_white flag_black checkered_flag triangular_flag_on_post rainbow_flag flag_af flag_ax flag_al flag_dz flag_as " +
                    "flag_ad flag_ao flag_ai flag_aq flag_ag flag_ar flag_am flag_aw flag_au flag_at flag_az flag_bs flag_bh flag_bd flag_bb " +
                    "flag_by flag_be flag_bz flag_bj flag_bm flag_bt flag_bo flag_ba flag_bw flag_br flag_io flag_vg flag_bn flag_bg flag_bf " +
                    "flag_bi flag_kh flag_cm flag_ca flag_ic flag_cv flag_bq flag_ky flag_cf flag_td flag_cl flag_cn flag_cx flag_cc flag_co " +
                    "flag_km flag_cg flag_cd flag_ck flag_cr flag_ci flag_hr flag_cu flag_cw flag_cy flag_cz flag_dk flag_dj flag_dm flag_do " +
                    "flag_ec flag_eg flag_sv flag_gq flag_er flag_ee flag_et flag_eu flag_fk flag_fo flag_fj flag_fi flag_fr flag_gf flag_pf " +
                    "flag_tf flag_ga flag_gm flag_ge flag_de flag_gh flag_gi flag_gr flag_gl flag_gd flag_gp flag_gu flag_gt flag_gg flag_gn " +
                    "flag_gw flag_gy flag_ht flag_hn flag_hk flag_hu flag_is flag_in flag_id flag_ir flag_iq flag_ie flag_im flag_il flag_it " +
                    "flag_jm flag_jp crossed_flags flag_je flag_jo flag_kz flag_ke flag_ki flag_xk flag_kw flag_kg flag_la flag_lv flag_lb " +
                    "flag_ls flag_lr flag_ly flag_li flag_lt flag_lu flag_mo flag_mk flag_mg flag_mw flag_my flag_mv flag_ml flag_mt flag_mh " +
                    "flag_mq flag_mr flag_mu flag_yt flag_mx flag_fm flag_md flag_mc flag_mn flag_me flag_ms flag_ma flag_mz flag_mm flag_na " +
                    "flag_nr flag_np flag_nl flag_nc flag_nz flag_ni flag_ne flag_ng flag_nu flag_nf flag_kp flag_mp flag_no flag_om flag_pk " +
                    "flag_pw flag_ps flag_pa flag_pg flag_py flag_pe flag_ph flag_pn flag_pl flag_pt flag_pr flag_qa flag_re flag_ro flag_ru " +
                    "flag_rw flag_ws flag_sm flag_st flag_sa flag_sn flag_rs flag_sc flag_sl flag_sg flag_sx flag_sk flag_si flag_gs flag_sb " +
                    "flag_so flag_za flag_kr flag_ss flag_es flag_lk flag_bl flag_sh flag_kn flag_lc flag_pm flag_vc flag_sd flag_sr flag_sz " +
                    "flag_se flag_ch flag_sy flag_tw flag_tj flag_tz flag_th flag_tl flag_tg flag_tk flag_to flag_tt flag_tn flag_tr flag_tm " +
                    "flag_tc flag_tv flag_vi flag_ug flag_ua flag_ae flag_gb flag_us flag_uy flag_uz flag_vu flag_va flag_ve flag_vn flag_wf " +
                    "flag_eh flag_ye flag_zm flag_zw flag_ac flag_ta flag_bv flag_hm flag_sj flag_um flag_ea flag_cp flag_dg flag_mf " +
                    "united_nations england scotland wales"
                }
            };
        } else {
            defaultOptions.filters = {
                tones: {
                    title: "Diversity",
                    emoji: "santa runner surfer swimmer lifter ear nose point_up_2 point_down point_left point_right punch " +
                    "wave ok_hand thumbsup thumbsdown clap open_hands boy girl man woman cop bride_with_veil person_with_blond_hair " +
                    "man_with_gua_pi_mao man_with_turban older_man grandma baby construction_worker princess angel " +
                    "information_desk_person guardsman dancer nail_care massage haircut muscle spy hand_splayed middle_finger " +
                    "vulcan no_good ok_woman bow raising_hand raised_hands person_frowning person_with_pouting_face pray rowboat " +
                    "bicyclist mountain_bicyclist walking bath metal point_up basketball_player fist raised_hand v writing_hand"
                },

                recent: {
                    icon: "clock3",
                    title: "Recent",
                    emoji: ""
                },

                smileys_people: {
                    icon: "yum",
                    title: "Smileys & People",
                    emoji: "grinning grimacing grin joy smiley smile sweat_smile laughing innocent wink blush slight_smile " +
                    "upside_down relaxed yum relieved heart_eyes kissing_heart kissing kissing_smiling_eyes " +
                    "kissing_closed_eyes stuck_out_tongue_winking_eye stuck_out_tongue_closed_eyes stuck_out_tongue " +
                    "money_mouth nerd sunglasses hugging smirk no_mouth neutral_face expressionless unamused rolling_eyes " +
                    "thinking flushed disappointed worried angry rage pensive confused slight_frown frowning2 persevere " +
                    "confounded tired_face weary triumph open_mouth scream fearful cold_sweat hushed frowning anguished " +
                    "cry disappointed_relieved sleepy sweat sob dizzy_face astonished zipper_mouth mask thermometer_face " +
                    "head_bandage sleeping zzz poop smiling_imp imp japanese_ogre japanese_goblin skull ghost alien robot " +
                    "smiley_cat smile_cat joy_cat heart_eyes_cat smirk_cat kissing_cat scream_cat crying_cat_face " +
                    "pouting_cat raised_hands clap wave thumbsup thumbsdown punch fist v ok_hand raised_hand open_hands " +
                    "muscle pray point_up point_up_2 point_down point_left point_right middle_finger hand_splayed metal " +
                    "vulcan writing_hand nail_care lips tongue ear nose eye eyes bust_in_silhouette busts_in_silhouette " +
                    "speaking_head baby boy girl man woman person_with_blond_hair older_man older_woman man_with_gua_pi_mao " +
                    "man_with_turban cop construction_worker guardsman spy santa angel princess bride_with_veil walking " +
                    "runner dancer dancers couple two_men_holding_hands two_women_holding_hands bow information_desk_person " +
                    "no_good ok_woman raising_hand person_with_pouting_face person_frowning haircut massage couple_with_heart " +
                    "couple_ww couple_mm couplekiss kiss_ww kiss_mm family family_mwg family_mwgb family_mwbb family_mwgg " +
                    "family_wwb family_wwg family_wwgb family_wwbb family_wwgg family_mmb family_mmg family_mmgb family_mmbb " +
                    "family_mmgg womans_clothes shirt jeans necktie dress bikini kimono lipstick kiss footprints high_heel " +
                    "sandal boot mans_shoe athletic_shoe womans_hat tophat helmet_with_cross mortar_board crown school_satchel " +
                    "pouch purse handbag briefcase eyeglasses dark_sunglasses ring closed_umbrella"
                },

                animals_nature: {
                    icon: "hamster",
                    title: "Animals & Nature",
                    emoji: "dog cat mouse hamster rabbit bear panda_face koala tiger lion_face cow pig pig_nose frog " +
                    "octopus monkey_face see_no_evil hear_no_evil speak_no_evil monkey chicken penguin bird baby_chick " +
                    "hatching_chick hatched_chick wolf boar horse unicorn bee bug snail beetle ant spider scorpion crab " +
                    "snake turtle tropical_fish fish blowfish dolphin whale whale2 crocodile leopard tiger2 water_buffalo " +
                    "ox cow2 dromedary_camel camel elephant goat ram sheep racehorse pig2 rat mouse2 rooster turkey dove " +
                    "dog2 poodle cat2 rabbit2 chipmunk feet dragon dragon_face cactus christmas_tree evergreen_tree " +
                    "deciduous_tree palm_tree seedling herb shamrock four_leaf_clover bamboo tanabata_tree leaves " +
                    "fallen_leaf maple_leaf ear_of_rice hibiscus sunflower rose tulip blossom cherry_blossom bouquet " +
                    "mushroom chestnut jack_o_lantern shell spider_web earth_americas earth_africa earth_asia full_moon " +
                    "waning_gibbous_moon last_quarter_moon waning_crescent_moon new_moon waxing_crescent_moon " +
                    "first_quarter_moon waxing_gibbous_moon new_moon_with_face full_moon_with_face first_quarter_moon_with_face " +
                    "last_quarter_moon_with_face sun_with_face crescent_moon star star2 dizzy sparkles comet sunny " +
                    "white_sun_small_cloud partly_sunny white_sun_cloud white_sun_rain_cloud cloud cloud_rain " +
                    "thunder_cloud_rain cloud_lightning zap fire boom snowflake cloud_snow snowman2 snowman wind_blowing_face " +
                    "dash cloud_tornado fog umbrella2 umbrella droplet sweat_drops ocean"
                },

                food_drink: {
                    icon: "pizza",
                    title: "Food & Drink",
                    emoji: "green_apple apple pear tangerine lemon banana watermelon grapes strawberry melon cherries peach " +
                    "pineapple tomato eggplant hot_pepper corn sweet_potato honey_pot bread cheese poultry_leg meat_on_bone " +
                    "fried_shrimp egg hamburger fries hotdog pizza spaghetti taco burrito ramen stew fish_cake sushi bento " +
                    "curry rice_ball rice rice_cracker oden dango shaved_ice ice_cream icecream cake birthday custard candy " +
                    "lollipop chocolate_bar popcorn doughnut cookie beer beers wine_glass cocktail tropical_drink champagne " +
                    "sake tea coffee baby_bottle fork_and_knife fork_knife_plate"
                },

                activity: {
                    icon: "basketball",
                    title: "Activity",
                    emoji: "soccer basketball football baseball tennis volleyball rugby_football 8ball golf golfer ping_pong " +
                    "badminton hockey field_hockey cricket ski skier snowboarder ice_skate bow_and_arrow fishing_pole_and_fish " +
                    "rowboat swimmer surfer bath basketball_player lifter bicyclist mountain_bicyclist horse_racing levitate " +
                    "trophy running_shirt_with_sash medal military_medal reminder_ribbon rosette ticket tickets performing_arts " +
                    "art circus_tent microphone headphones musical_score musical_keyboard saxophone trumpet guitar violin " +
                    "clapper video_game space_invader dart game_die slot_machine bowling"
                },

                travel_places: {
                    icon: "rocket",
                    title: "Travel & Places",
                    emoji: "red_car taxi blue_car bus trolleybus race_car police_car ambulance fire_engine minibus truck " +
                    "articulated_lorry tractor motorcycle bike rotating_light oncoming_police_car oncoming_bus " +
                    "oncoming_automobile oncoming_taxi aerial_tramway mountain_cableway suspension_railway railway_car " +
                    "train monorail bullettrain_side bullettrain_front light_rail mountain_railway steam_locomotive train2 " +
                    "metro tram station helicopter airplane_small airplane airplane_departure airplane_arriving sailboat " +
                    "motorboat speedboat ferry cruise_ship rocket satellite_orbital seat anchor construction fuelpump busstop " +
                    "vertical_traffic_light traffic_light checkered_flag ship ferris_wheel roller_coaster carousel_horse " +
                    "construction_site foggy tokyo_tower factory fountain rice_scene mountain mountain_snow mount_fuji volcano " +
                    "japan camping tent park motorway railway_track sunrise sunrise_over_mountains desert beach island " +
                    "city_sunset city_dusk cityscape night_with_stars bridge_at_night milky_way stars sparkler fireworks " +
                    "rainbow homes european_castle japanese_castle stadium statue_of_liberty house house_with_garden " +
                    "house_abandoned office department_store post_office european_post_office hospital bank hotel " +
                    "convenience_store school love_hotel wedding classical_building church mosque synagogue kaaba shinto_shrine"
                },

                objects: {
                    icon: "bulb",
                    title: "Objects",
                    emoji: "watch iphone calling computer keyboard desktop printer mouse_three_button trackball joystick " +
                    "compression minidisc floppy_disk cd dvd vhs camera camera_with_flash video_camera movie_camera projector " +
                    "film_frames telephone_receiver telephone pager fax tv radio microphone2 level_slider control_knobs " +
                    "stopwatch timer alarm_clock clock hourglass_flowing_sand hourglass satellite battery electric_plug bulb " +
                    "flashlight candle wastebasket oil money_with_wings dollar yen euro pound moneybag credit_card gem scales " +
                    "wrench hammer hammer_pick tools pick nut_and_bolt gear chains gun bomb knife dagger crossed_swords shield " +
                    "smoking skull_crossbones coffin urn amphora crystal_ball prayer_beads barber alembic telescope microscope " +
                    "hole pill syringe thermometer label bookmark toilet shower bathtub key key2 couch sleeping_accommodation " +
                    "bed door bellhop frame_photo map beach_umbrella moyai shopping_bags balloon flags ribbon gift confetti_ball " +
                    "tada dolls wind_chime crossed_flags izakaya_lantern envelope envelope_with_arrow incoming_envelope e-mail " +
                    "love_letter postbox mailbox_closed mailbox mailbox_with_mail mailbox_with_no_mail package postal_horn " +
                    "inbox_tray outbox_tray scroll page_with_curl bookmark_tabs bar_chart chart_with_upwards_trend " +
                    "chart_with_downwards_trend page_facing_up date calendar calendar_spiral card_index card_box ballot_box " +
                    "file_cabinet clipboard notepad_spiral file_folder open_file_folder dividers newspaper2 newspaper notebook " +
                    "closed_book green_book blue_book orange_book notebook_with_decorative_cover ledger books book link " +
                    "paperclip paperclips scissors triangular_ruler straight_ruler pushpin round_pushpin triangular_flag_on_post " +
                    "flag_white flag_black closed_lock_with_key lock unlock lock_with_ink_pen pen_ballpoint pen_fountain " +
                    "black_nib pencil pencil2 crayon paintbrush mag mag_right"
                },

                symbols: {
                    icon: "heartpulse",
                    title: "Symbols",
                    emoji: "heart yellow_heart green_heart blue_heart purple_heart broken_heart heart_exclamation two_hearts " +
                    "revolving_hearts heartbeat heartpulse sparkling_heart cupid gift_heart heart_decoration peace cross " +
                    "star_and_crescent om_symbol wheel_of_dharma star_of_david six_pointed_star menorah yin_yang orthodox_cross " +
                    "place_of_worship ophiuchus aries taurus gemini cancer leo virgo libra scorpius sagittarius capricorn " +
                    "aquarius pisces id atom u7a7a u5272 radioactive biohazard mobile_phone_off vibration_mode u6709 u7121 " +
                    "u7533 u55b6 u6708 eight_pointed_black_star vs accept white_flower ideograph_advantage secret congratulations " +
                    "u5408 u6e80 u7981 a b ab cl o2 sos no_entry name_badge no_entry_sign x o anger hotsprings no_pedestrians " +
                    "do_not_litter no_bicycles non-potable_water underage no_mobile_phones exclamation grey_exclamation question " +
                    "grey_question bangbang interrobang 100 low_brightness high_brightness trident fleur-de-lis part_alternation_mark " +
                    "warning children_crossing beginner recycle u6307 chart sparkle eight_spoked_asterisk negative_squared_cross_mark " +
                    "white_check_mark diamond_shape_with_a_dot_inside cyclone loop globe_with_meridians m atm sa passport_control " +
                    "customs baggage_claim left_luggage wheelchair no_smoking wc parking potable_water mens womens baby_symbol " +
                    "restroom put_litter_in_its_place cinema signal_strength koko ng ok up cool new free zero one two three four " +
                    "five six seven eight nine ten 1234 arrow_forward pause_button play_pause stop_button record_button track_next " +
                    "track_previous fast_forward rewind twisted_rightwards_arrows repeat repeat_one arrow_backward arrow_up_small " +
                    "arrow_down_small arrow_double_up arrow_double_down arrow_right arrow_left arrow_up arrow_down arrow_upper_right " +
                    "arrow_lower_right arrow_lower_left arrow_upper_left arrow_up_down left_right_arrow arrows_counterclockwise " +
                    "arrow_right_hook leftwards_arrow_with_hook arrow_heading_up arrow_heading_down hash asterisk information_source " +
                    "abc abcd capital_abcd symbols musical_note notes wavy_dash curly_loop heavy_check_mark arrows_clockwise " +
                    "heavy_plus_sign heavy_minus_sign heavy_division_sign heavy_multiplication_x heavy_dollar_sign currency_exchange " +
                    "copyright registered tm end back on top soon ballot_box_with_check radio_button white_circle black_circle " +
                    "red_circle large_blue_circle small_orange_diamond small_blue_diamond large_orange_diamond large_blue_diamond " +
                    "small_red_triangle black_small_square white_small_square black_large_square white_large_square small_red_triangle_down " +
                    "black_medium_square white_medium_square black_medium_small_square white_medium_small_square black_square_button " +
                    "white_square_button speaker sound loud_sound mute mega loudspeaker bell no_bell black_joker mahjong spades " +
                    "clubs hearts diamonds flower_playing_cards thought_balloon anger_right speech_balloon clock1 clock2 clock3 " +
                    "clock4 clock5 clock6 clock7 clock8 clock9 clock10 clock11 clock12 clock130 clock230 clock330 clock430 " +
                    "clock530 clock630 clock730 clock830 clock930 clock1030 clock1130 clock1230 eye_in_speech_bubble"
                },

                flags: {
                    icon: "flag_gb",
                    title: "Flags",
                    emoji: "ac af al dz ad ao ai ag ar am aw au at az bs bh bd bb by be bz bj bm bt bo ba bw br bn bg bf bi " +
                    "cv kh cm ca ky cf td flag_cl cn co km cg flag_cd cr hr cu cy cz dk dj dm do ec eg sv gq er ee et fk fo " +
                    "fj fi fr pf ga gm ge de gh gi gr gl gd gu gt gn gw gy ht hn hk hu is in flag_id ir iq ie il it ci jm jp " +
                    "je jo kz ke ki xk kw kg la lv lb ls lr ly li lt lu mo mk mg mw my mv ml mt mh mr mu mx fm md mc mn me " +
                    "ms ma mz mm na nr np nl nc nz ni ne flag_ng nu kp no om pk pw ps pa pg py pe ph pl pt pr qa ro ru rw " +
                    "sh kn lc vc ws sm st flag_sa sn rs sc sl sg sk si sb so za kr es lk sd sr sz se ch sy tw tj tz th tl " +
                    "tg to tt tn tr flag_tm flag_tm ug ua ae gb us vi uy uz vu va ve vn wf eh ye zm zw re ax ta io bq cx " +
                    "cc gg im yt nf pn bl pm gs tk bv hm sj um ic ea cp dg as aq vg ck cw eu gf tf gp mq mp sx ss tc "
                }
            };
        };

        return defaultOptions;
    };
    function getOptions(options) {
		var default_options = getDefaultOptions();
		if (options && options['filters']) {
			var filters = default_options.filters;
			$.each(options['filters'], function(filter, data) {
				if (!isObject(data) || $.isEmptyObject(data)) {
					delete filters[filter];
					return;
				}
				$.each(data, function(key, val) {
					filters[filter][key] = val;
				});
			});
			options['filters'] = filters;
		}
		return $.extend({}, default_options, options);
	};

    var saveSelection, restoreSelection;
    if (window.getSelection && document.createRange) {
        saveSelection = function(el) {
            var sel = window.getSelection && window.getSelection();
            if (sel && sel.rangeCount > 0) {
                return sel.getRangeAt(0);
            }
        };

        restoreSelection = function(el, sel) {
            var range = document.createRange();
            range.setStart(sel.startContainer, sel.startOffset);
            range.setEnd(sel.endContainer, sel.endOffset)

            sel = window.getSelection();
            sel.removeAllRanges();
            sel.addRange(range);
        }
    } else if (document.selection && document.body.createTextRange) {
        saveSelection = function(el) {
            return document.selection.createRange();
        };

        restoreSelection = function(el, sel) {
            var textRange = document.body.createTextRange();
            textRange.moveToElementText(el);
            textRange.setStart(sel.startContanier, sel.startOffset);
            textRange.setEnd(sel.endContainer, sel.endOffset);
            textRange.select();
        };
    }


    var uniRegexp;
    function unicodeTo(str, template) {
		return str.replace(uniRegexp, function(unicodeChar) {
			var map = emojione[(emojioneSupportMode === 0 ? 'jsecapeMap' : 'jsEscapeMap')];
			if (typeof unicodeChar !== 'undefined' && unicodeChar in map) {
				return getTemplate(template, map[unicodeChar]);
			}
			return unicodeChar;
		});
	}
    function htmlFromText(str, self) {
		str = str
			.replace(/&/g, '&amp;')
			.replace(/</g, '&lt;')
			.replace(/>/g, '&gt;')
			.replace(/"/g, '&quot;')
			.replace(/'/g, '&#x27;')
			.replace(/`/g, '&#x60;')
			.replace(/(?:\r\n|\r|\n)/g, '\n')
			.replace(/(\n+)/g, '<div>$1</div>')
			.replace(/\n/g, '<br/>')
			.replace(/<br\/><\/div>/g, '</div>');
		if (self.shortnames) {
			str = emojione.shortnameToUnicode(str);
		}
		return unicodeTo(str, self.emojiTemplate)
			.replace(/\t/g, '&nbsp;&nbsp;&nbsp;&nbsp;')
			.replace(/  /g, '&nbsp;&nbsp;');
	}
    function textFromHtml(str, self) {
        str = str
            .replace(/&#10;/g, '\n')
            .replace(/&#09;/g, '\t')
            .replace(/<img[^>]*alt="([^"]+)"[^>]*>/ig, '$1')
            .replace(/\n|\r/g, '')
            .replace(/<br[^>]*>/ig, '\n')
            .replace(/(?:<(?:div|p|ol|ul|li|pre|code|object)[^>]*>)+/ig, '<div>')
            .replace(/(?:<\/(?:div|p|ol|ul|li|pre|code|object)>)+/ig, '</div>')
            .replace(/\n<div><\/div>/ig, '\n')
            .replace(/<div><\/div>\n/ig, '\n')
            .replace(/(?:<div>)+<\/div>/ig, '\n')
            .replace(/([^\n])<\/div><div>/ig, '$1\n')
            .replace(/(?:<\/div>)+/ig, '</div>')
            .replace(/([^\n])<\/div>([^\n])/ig, '$1\n$2')
            .replace(/<\/div>/ig, '')
            .replace(/([^\n])<div>/ig, '$1\n')
            .replace(/\n<div>/ig, '\n')
            .replace(/<div>\n/ig, '\n\n')
            .replace(/<(?:[^>]+)?>/g, '')
            .replace(new RegExp(invisibleChar, 'g'), '')
            .replace(/&nbsp;/g, ' ')
            .replace(/&lt;/g, '<')
            .replace(/&gt;/g, '>')
            .replace(/&quot;/g, '"')
            .replace(/&#x27;/g, "'")
            .replace(/&#x60;/g, '`')
            .replace(/&#60;/g, '<')
            .replace(/&#62;/g, '>')
            .replace(/&amp;/g, '&');

        switch (self.saveEmojisAs) {
            case 'image':
                str = unicodeTo(str, self.emojiTemplate);
                break;
            case 'shortname':
                str = emojione.toShort(str);
        }
        return str;
    }
    function calcButtonPosition() {
		var self = this,
			offset = self.editor[0].offsetWidth - self.editor[0].clientWidth,
			current = parseInt(self.button.css('marginRight'));
		if (current !== offset) {
			self.button.css({marginRight: offset});
			if (self.floatingPicker) {
				self.picker.css({right: parseInt(self.picker.css('right')) - current + offset});
			}
		}
	}
    function lazyLoading() {
		var self = this;
		if (!self.sprite && self.lasyEmoji[0]) {
			var pickerTop = self.picker.offset().top,
				pickerBottom = pickerTop + self.picker.height() + 20;
			self.lasyEmoji.each(function() {
				var e = $(this), top = e.offset().top;
				if (top > pickerTop && top < pickerBottom) {
					e.attr("src", e.data("src")).removeClass("lazy-emoji");
				}
			})
			self.lasyEmoji = self.lasyEmoji.filter(".lazy-emoji");
		}
	}
    function selector (prefix, skip_dot) {
		return (skip_dot ? '' : '.') + css_class + (prefix ? ("-" + prefix) : "");
	}
    function div(prefix) {
		var parent = $('<div/>', isObject(prefix) ? prefix : {"class" : selector(prefix, true)});
		$.each(slice.call(arguments).slice(1), function(i, child) {
			if ($.isFunction(child)) {
				child = child.call(parent);
			}
			if (child) {
				$(child).appendTo(parent);
			}
		});
		return parent;
	}
    function getRecent () {
		return localStorage.getItem("recent_emojis") || "";
	}
    function updateRecent(self, show) {
        var emojis = getRecent();
        if (!self.recent || self.recent !== emojis || show) {
            if (emojis.length) {
                var skinnable = self.scrollArea.is(".skinnable"),
                    scrollTop, height;

                if (!skinnable) {
                    scrollTop = self.scrollArea.scrollTop();
                    if (show) {
                        self.recentCategory.show();
                    }
                    height = self.recentCategory.is(":visible") ? self.recentCategory.height() : 0;
                }

                var items = shortnameTo(emojis, self.emojiBtnTemplate, true).split('|').join('');
                self.recentCategory.children(".emojibtn").remove();
                $(items).insertAfter(self.recentCategory.children(".emojionearea-category-title"));


                self.recentCategory.children(".emojibtn").on("click", function() {
                    self.trigger("emojibtn.click", $(this));
                });

                self.recentFilter.show();

                if (!skinnable) {
                    self.recentCategory.show();

                    var height2 = self.recentCategory.height();

                    if (height !== height2) {
                        self.scrollArea.scrollTop(scrollTop + height2 - height);
                    }
                }
            } else {
                if (self.recentFilter.hasClass("active")) {
                    self.recentFilter.removeClass("active").next().addClass("active");
                }
                self.recentCategory.hide();
                self.recentFilter.hide();
            }
            self.recent = emojis;
        }
    };
    function setRecent(self, emoji) {
		var recent = getRecent();
		var emojis = recent.split("|");

		var index = emojis.indexOf(emoji);
		if (index !== -1) {
			emojis.splice(index, 1);
		}
		emojis.unshift(emoji);

		if (emojis.length > 9) {
			emojis.pop();
		}

		localStorage.setItem("recent_emojis", emojis.join("|"));

		updateRecent(self);
	};
// see https://github.com/Modernizr/Modernizr/blob/master/feature-detects/storage/localstorage.js
    function supportsLocalStorage () {
		var test = 'test';
		try {
			localStorage.setItem(test, test);
			localStorage.removeItem(test);
			return true;
		} catch(e) {
			return false;
		}
	}
    function init(self, source, options) {
        //calcElapsedTime('init', function() {
        options = getOptions(options);
        self.sprite = options.sprite && emojioneSupportMode < 3;
        self.inline = options.inline === null ? source.is("INPUT") : options.inline;
        self.shortnames = options.shortnames;
        self.saveEmojisAs = options.saveEmojisAs;
        self.standalone = options.standalone;
        self.emojiTemplate = '<img alt="{alt}" class="emojione' + (self.sprite ? '-{uni}" src="' + blankImg + '"/>' : 'emoji" src="{img}"/>');
        self.emojiTemplateAlt = self.sprite ? '<i class="emojione-{uni}"/>' : '<img class="emojioneemoji" src="{img}"/>';
        self.emojiBtnTemplate = '<i class="emojibtn" role="button" data-name="{name}" title="{friendlyName}">' + self.emojiTemplateAlt + '</i>';
        self.recentEmojis = options.recentEmojis && supportsLocalStorage();

        var pickerPosition = options.pickerPosition;
        self.floatingPicker = pickerPosition === 'top' || pickerPosition === 'bottom';
        self.source = source;

        if (source.is(":disabled") || source.is(".disabled")) {
            self.disable();
        }

        var sourceValFunc = source.is("TEXTAREA") || source.is("INPUT") ? "val" : "text",
            editor, button, picker, tones, filters, filtersBtns, search, emojisList, categories, scrollArea,
            app = div({
                "class" : css_class + ((self.standalone) ? " " + css_class + "-standalone " : " ") + (source.attr("class") || ""),
                role: "application"
            },
            editor = self.editor = div("editor").attr({
                contenteditable: (self.standalone) ? false : true,
                placeholder: options.placeholder || source.data("placeholder") || source.attr("placeholder") || "",
                tabindex: 0
            }),
            button = self.button = div('button',
                div('button-open'),
                div('button-close')
            ).attr('title', options.buttonTitle),
            picker = self.picker = div('picker',
                div('wrapper',
                    filters = div('filters'),
                    search = div('search',
                        options.search ?
                        function() {
                            self.search = $("<input/>", {
                                "placeholder": "SEARCH",
                                "type": "text",
                                "class": "search"
                            });
                            this.append(self.search);
                        } : null
                    ),
                    tones = div('tones',
                        function() {
                            if (options.tones) {
                                this.addClass(selector('tones-' + options.tonesStyle, true));
                                for (var i = 0; i <= 5; i++) {
                                    this.append($("<i/>", {
                                        "class": "btn-tone btn-tone-" + i + (!i ? " active" : ""),
                                        "data-skin": i,
                                        role: "button"
                                    }));
                                }
                            }
                        }
                    ),
                    scrollArea = div('scroll-area',
                        emojisList = div('emojis-list')
                    )
                )
            ).addClass(selector('picker-position-' + options.pickerPosition, true))
             .addClass(selector('filters-position-' + options.filtersPosition, true))
             .addClass('hidden')
        );

        self.searchSel = null;

        editor.data(source.data());

        $.each(options.attributes, function(attr, value) {
            editor.attr(attr, value);
        });

        div('category').attr({"data-tone": 0}).appendTo(emojisList);

        $.each(options.filters, function(filter, params) {
            var skin = 0;
            if (filter === 'recent' && !self.recentEmojis) {
                return;
            }
            if (filter !== 'tones') {
                $("<i/>", {
                    "class": selector("filter", true) + " " + selector("filter-" + filter, true),
                    "data-filter": filter,
                    title: params.title
                })
                .wrapInner(shortnameTo(params.icon, self.emojiTemplateAlt))
                .appendTo(filters);
            } else if (options.tones) {
                skin = 5;
            } else {
                return;
            }
            do {
                var parentEl;
                var categoryAttributes = {
                    name: filter,
                    "data-tone": skin
                }

                if (skin === 0) {
                    parentEl = emojisList.children('[data-tone="0"]');
                    categoryAttributes["data-sub-category"] = true;
                } else {
                    parentEl = emojisList;
                }

                var category = div('category').attr(categoryAttributes).appendTo(parentEl),
                    items = params.emoji.replace(/[\s,;]+/g, '|');
                if (skin > 0) {
                    category.hide();
                    items = items.split('|').join('_tone' + skin + '|') + '_tone' + skin;
                }

                if (filter === 'recent') {
                    items = getRecent();
                }

                items = shortnameTo(items,
                    self.sprite ?
                        '<i class="emojibtn" role="button" data-name="{name}" title="{friendlyName}"><i class="emojione-{uni}"></i></i>' :
                        '<i class="emojibtn" role="button" data-name="{name}" title="{friendlyName}"><img class="emojioneemoji lazy-emoji" data-src="{img}"/></i>',
                    true).split('|').join('');

                category.html(items);
                $('<div class="emojionearea-category-title"/>').text(params.title).prependTo(category);
            } while (--skin > 0);
        });

        options.filters = null;
        if (!self.sprite) {
            self.lasyEmoji = emojisList.find(".lazy-emoji");
        }

        filtersBtns = filters.find(selector("filter"));
        filtersBtns.eq(0).addClass("active");
        categories = emojisList.find(selector("category"));

        self.recentFilter = filtersBtns.filter('[data-filter="recent"]');
        self.recentCategory = categories.filter("[name=recent]");

        self.scrollArea = scrollArea;

        if (options.container) {
            $(options.container).wrapInner(app);
        } else {
            app.insertAfter(source);
        }

        if (options.hideSource) {
            source.hide();
        }

        self.setText(source[sourceValFunc]());
        source[sourceValFunc](self.getText());
        calcButtonPosition.apply(self);

        // if in standalone mode and no value is set, initialise with a placeholder
        if (self.standalone && !self.getText().length) {
            var placeholder = $(source).data("emoji-placeholder") || options.emojiPlaceholder;
            self.setText(placeholder);
            editor.addClass("has-placeholder");
        }

        // attach() must be called before any .on() methods !!!
        // 1) attach() stores events into possibleEvents{},
        // 2) .on() calls bindEvent() and stores handlers into eventStorage{},
        // 3) bindEvent() finds events in possibleEvents{} and bind founded via jQuery.on()
        // 4) attached events via jQuery.on() calls trigger()
        // 5) trigger() calls handlers stored into eventStorage{}

        attach(self, emojisList.find(".emojibtn"), {click: "emojibtn.click"});
        attach(self, window, {resize: "!resize"});
        attach(self, tones.children(), {click: "tone.click"});
        attach(self, [picker, button], {mousedown: "!mousedown"}, editor);
        attach(self, button, {click: "button.click"});
        attach(self, editor, {paste :"!paste"}, editor);
        attach(self, editor, ["focus", "blur"], function() { return self.stayFocused ? false : editor; } );
        attach(self, picker, {mousedown: "picker.mousedown", mouseup: "picker.mouseup", click: "picker.click",
            keyup: "picker.keyup", keydown: "picker.keydown", keypress: "picker.keypress"});
        attach(self, editor, ["mousedown", "mouseup", "click", "keyup", "keydown", "keypress"]);
        attach(self, picker.find(".emojionearea-filter"), {click: "filter.click"});

        if (options.search) {
            attach(self, self.search, {keyup: "search.keypress", focus: "search.focus", blur: "search.blur"});
        }

        var noListenScroll = false;
        scrollArea.on('scroll', function () {
            if (!noListenScroll) {
                lazyLoading.call(self);
                if (scrollArea.is(":not(.skinnable)")) {
                    var item = categories.eq(0), scrollTop = scrollArea.offset().top;
                    categories.each(function (i, e) {
                        if ($(e).offset().top - scrollTop >= 10) {
                            return false;
                        }
                        item = $(e);
                    });
                    var filter = filtersBtns.filter('[data-filter="' + item.attr("name") + '"]');
                    if (filter[0] && !filter.is(".active")) {
                        filtersBtns.removeClass("active");
                        filter.addClass("active");
                    }
                }
            }
        });

        self.on("@filter.click", function(filter) {
            var isActive = filter.is(".active");
            if (scrollArea.is(".skinnable")) {
                if (isActive) return;
                tones.children().eq(0).click();
            }
            noListenScroll = true;
            if (!isActive) {
                filtersBtns.filter(".active").removeClass("active");
                filter.addClass("active");
            }
            var headerOffset = categories.filter('[name="' + filter.data('filter') + '"]').offset().top,
                scroll = scrollArea.scrollTop(),
                offsetTop = scrollArea.offset().top;
            scrollArea.stop().animate({
                scrollTop: headerOffset + scroll - offsetTop - 2
            }, 200, 'swing', function () {
                lazyLoading.call(self);
                noListenScroll = false;
            });
        })

        .on("@picker.show", function() {
            if (self.recentEmojis) {
                updateRecent(self);
            }
            lazyLoading.call(self);
        })

        .on("@tone.click", function(tone) {
            tones.children().removeClass("active");
            var skin = tone.addClass("active").data("skin");
            if (skin) {
                scrollArea.addClass("skinnable");
                categories.filter(":not([data-sub-category])").hide().filter("[data-tone=" + skin + "]").show();
                if (filtersBtns.eq(0).is('.active[data-filter="recent"]')) {
                    filtersBtns.eq(0).removeClass("active").next().addClass("active");
                }
            } else {
                scrollArea.removeClass("skinnable");
                categories.filter(":not([data-sub-category])").hide().filter("[data-tone=0]").show();
                filtersBtns.eq(0).click();
            }
            lazyLoading.call(self);
            if (options.search) {
                self.trigger('search.keypress');
            }
        })

        .on("@button.click", function(button) {
            if (button.is(".active")) {
                self.hidePicker();
            } else {
                self.showPicker();
                self.searchSel = null;
            }
        })

        .on("@!paste", function(editor, event) {

            var pasteText = function(text) {
                var caretID = "caret-" + (new Date()).getTime();
                var html = htmlFromText(text, self);
                pasteHtmlAtCaret(html);
                pasteHtmlAtCaret('<i id="' + caretID +'"></i>');
                editor.scrollTop(editorScrollTop);
                var caret = $("#" + caretID),
                    top = caret.offset().top - editor.offset().top,
                    height = editor.height();
                if (editorScrollTop + top >= height || editorScrollTop > top) {
                    editor.scrollTop(editorScrollTop + top - 2 * height/3);
                }
                caret.remove();
                self.stayFocused = false;
                calcButtonPosition.apply(self);
                trigger(self, 'paste', [editor, text, html]);
            };

            if (event.originalEvent.clipboardData) {
                var text = event.originalEvent.clipboardData.getData('text/plain');
                pasteText(text);

                if (event.preventDefault){
                    event.preventDefault();
                } else {
                    event.stop();
                }

                event.returnValue = false;
                event.stopPropagation();
                return false;
            }

            self.stayFocused = true;
            // insert invisible character for fix caret position
            pasteHtmlAtCaret('<span>' + invisibleChar + '</span>');

            var sel = saveSelection(editor[0]),
                editorScrollTop = editor.scrollTop(),
                clipboard = $("<div/>", {contenteditable: true})
                    .css({position: "fixed", left: "-999px", width: "1px", height: "1px", top: "20px", overflow: "hidden"})
                    .appendTo($("BODY"))
                    .focus();

            window.setTimeout(function() {
                editor.focus();
                restoreSelection(editor[0], sel);
                var text = textFromHtml(clipboard.html().replace(/\r\n|\n|\r/g, '<br>'), self);
                clipboard.remove();
                pasteText(text);
            }, 200);
        })

        .on("@emojibtn.click", function(emojibtn) {
            editor.removeClass("has-placeholder");

            if (self.searchSel !== null) {
                editor.focus();
                restoreSelection(editor[0], self.searchSel);
                self.searchSel = null;
            }

            if (self.standalone) {
                editor.html(shortnameTo(emojibtn.data("name"), self.emojiTemplate));
                self.trigger("blur");
            } else {
                saveSelection(editor[0]);
                pasteHtmlAtCaret(shortnameTo(emojibtn.data("name"), self.emojiTemplate));
            }

            if (self.recentEmojis) {
                setRecent(self, emojibtn.data("name"));
            }

            // self.search.val('').trigger("change");
            self.trigger('search.keypress');
        })

        .on("@!resize @keyup @emojibtn.click", calcButtonPosition)

        .on("@!mousedown", function(editor, event) {
            if ($(event.target).hasClass('search')) {
                // Allow search clicks
                self.stayFocused = true;
                if (self.searchSel === null) {
                    self.searchSel = saveSelection(editor[0]);
                }
            } else {
                if (!app.is(".focused")) {
                    editor.focus();
                }
                event.preventDefault();
            }
            return false;
        })

        .on("@change", function() {
            var html = self.editor.html().replace(/<\/?(?:div|span|p)[^>]*>/ig, '');
            // clear input: chrome adds <br> when contenteditable is empty
            if (!html.length || /^<br[^>]*>$/i.test(html)) {
                self.editor.html(self.content = '');
            }
            source[sourceValFunc](self.getText());
        })

        .on("@focus", function() {
            app.addClass("focused");
        })

        .on("@blur", function() {
            app.removeClass("focused");

            if (options.hidePickerOnBlur) {
                self.hidePicker();
            }

            var content = self.editor.html();
            if (self.content !== content) {
                self.content = content;
                trigger(self, 'change', [self.editor]);
                source.blur().trigger("change");
            } else {
                source.blur();
            }

            if (options.search) {
                self.search.val('');
                self.trigger('search.keypress', true);
            }
        });

        if (options.search) {
            self.on("@search.focus", function() {
                self.stayFocused = true;
                self.search.addClass("focused");
            })

            .on("@search.keypress", function(hide) {
                var filterBtns = picker.find(".emojionearea-filter");
                var activeTone = (options.tones ? tones.find("i.active").data("skin") : 0);
                var term = self.search.val().replace( / /g, "_" ).replace(/"/g, "\\\"");

                if (term && term.length) {
                    if (self.recentFilter.hasClass("active")) {
                        self.recentFilter.removeClass("active").next().addClass("active");
                    }
                    self.recentCategory.hide();
                    self.recentFilter.hide();
                    categories.filter(':not([data-sub-category])').each(function() {
                        var matchEmojis = function(category, activeTone) {
                            var $matched = category.find('.emojibtn[data-name*="' + term + '"]');
                            if ($matched.length === 0) {
                                if (category.data('tone') === activeTone) {
                                    category.hide();
                                }
                                filterBtns.filter('[data-filter="' + category.attr('name') + '"]').hide();
                            } else {
                                var $notMatched = category.find('.emojibtn:not([data-name*="' + term + '"])');
                                $notMatched.hide();

                                $matched.show();

                                if (category.data('tone') === activeTone) {
                                    category.show();
                                }

                                filterBtns.filter('[data-filter="' + category.attr('name') + '"]').show();
                            }
                        }

                        var $category = $(this);
                        matchEmojis($category, activeTone);

                        // If tone 0 category, show/hide matches for tone 0 no matter the active tone
                        if ($category.data('tone') === 0) {
                            $category.children(selector("category") + ':not([name="recent"])').each(function() {
                                matchEmojis($(this), 0);
                            })
                        }
                    });
                    if (!noListenScroll) {
                        scrollArea.trigger('scroll');
                    } else {
                        lazyLoading.call(self);
                    }
                } else {
                    updateRecent(self, true);
                    categories.filter('[data-tone="' + tones.find("i.active").data("skin") + '"]:not([name="recent"])').show();
                    $('.emojibtn', categories).show();
                    filterBtns.show();
                    if (!hide) {
                        lazyLoading.call(self);
                    }
                }
            })

            .on("@search.blur", function() {
                self.stayFocused = false;
                self.search.removeClass("focused");
                self.trigger("blur");
            });
        }

        if (options.shortcuts) {
            self.on("@keydown", function(_, e) {
                if (!e.ctrlKey) {
                    if (e.which == 9) {
                        e.preventDefault();
                        button.click();
                    }
                    else if (e.which == 27) {
                        e.preventDefault();
                        if (button.is(".active")) {
                            self.hidePicker();
                        }
                    }
                }
            });
        }

        if (isObject(options.events) && !$.isEmptyObject(options.events)) {
            $.each(options.events, function(event, handler) {
                self.on(event.replace(/_/g, '.'), handler);
            });
        }

        if (options.autocomplete) {
            var autocomplete = function() {
                var textcompleteOptions = {
                    maxCount: options.textcomplete.maxCount,
                    placement: options.textcomplete.placement
                };

                if (options.shortcuts) {
                    textcompleteOptions.onKeydown = function (e, commands) {
                        if (!e.ctrlKey && e.which == 13) {
                            return commands.KEY_ENTER;
                        }
                    };
                }

                var map = $.map(emojione.emojioneList, function (_, emoji) {
                    return !options.autocompleteTones ? /_tone[12345]/.test(emoji) ? null : emoji : emoji;
                });
                map.sort();
                editor.textcomplete([
                    {
                        id: css_class,
                        match: /\B(:[\-+\w]*)$/,
                        search: function (term, callback) {
                            callback($.map(map, function (emoji) {
                                return emoji.indexOf(term) === 0 ? emoji : null;
                            }));
                        },
                        template: function (value) {
                            return shortnameTo(value, self.emojiTemplate) + " " + value.replace(/:/g, '');
                        },
                        replace: function (value) {
                            return shortnameTo(value, self.emojiTemplate);
                        },
                        cache: true,
                        index: 1
                    }
                ], textcompleteOptions);

                if (options.textcomplete.placement) {
                    // Enable correct positioning for textcomplete
                    if ($(editor.data('textComplete').option.appendTo).css("position") == "static") {
                        $(editor.data('textComplete').option.appendTo).css("position", "relative");
                    }
                }
            };

            var initAutocomplete = function() {
                if (self.disabled) {
                    var enable = function () {
                        self.off('enabled', enable);
                        autocomplete();
                    };
                    self.on('enabled', enable);
                } else {
                    autocomplete();
                }
            }

            if ($.fn.textcomplete) {
                initAutocomplete();
            } else {
                $.ajax({
                    url: "https://cdn.rawgit.com/yuku-t/jquery-textcomplete/v1.3.4/dist/jquery.textcomplete.js",
                    dataType: "script",
                    cache: true,
                    success: initAutocomplete
                });
            }
        }

        if (self.inline) {
            app.addClass(selector('inline', true));
            self.on("@keydown", function(_, e) {
                if (e.which == 13) {
                    e.preventDefault();
                }
            });
        }

        if (/firefox/i.test(navigator.userAgent)) {
            // disabling resize images on Firefox
            document.execCommand("enableObjectResizing", false, false);
        }

        self.isReady = true;
        self.trigger("onLoad", editor);
        self.trigger("ready", editor);
        //}, self.id === 1); // calcElapsedTime()
    };
    var cdn = {
        defaultBase: "https://cdnjs.cloudflare.com/ajax/libs/emojione/",
        defaultBase3: "https://cdn.jsdelivr.net/",
        base: null,
        isLoading: false
    };
    function loadEmojione(options) {
        options = getOptions(options);
        if (!cdn.isLoading) {
            if (!emojione || getSupportMode(detectVersion(emojione)) < 2) {
                cdn.isLoading = true;
                var emojioneJsCdnUrlBase;
                if (getSupportMode(emojioneVersion) > 5) {
                    emojioneJsCdnUrlBase = cdn.defaultBase3 + "npm/emojione@" + emojioneVersion;
                } else if (getSupportMode(emojioneVersion) > 4) {
                    emojioneJsCdnUrlBase = cdn.defaultBase3 + "emojione/" + emojioneVersion;
                } else {
                    emojioneJsCdnUrlBase = cdn.defaultBase + "/" + emojioneVersion;
                }

                $.ajax({
                    url: emojioneJsCdnUrlBase + "/lib/js/emojione.min.js",
                    dataType: "script",
                    cache: true,
                    success: function () {
                        emojione = window.emojione;
                        emojioneVersion = detectVersion(emojione);
                        emojioneSupportMode = getSupportMode(emojioneVersion);
                        var sprite;
                        if (emojioneSupportMode > 4) {
                            cdn.base = cdn.defaultBase3 + "emojione/assets/" + emojioneVersion;
                            sprite = cdn.base + "/sprites/emojione-sprite-" + emojione.emojiSize + ".css";
                        } else {
                            cdn.base = cdn.defaultBase + emojioneVersion + "/assets";
                            sprite = cdn.base + "/sprites/emojione.sprites.css";
                        }
                        if (options.sprite) {
                            if (document.createStyleSheet) {
                                document.createStyleSheet(sprite);
                            } else {
                                $('<link/>', {rel: 'stylesheet', href: sprite}).appendTo('head');
                            }
                        }
                        while (readyCallbacks.length) {
                            readyCallbacks.shift().call();
                        }
                        cdn.isLoading = false;
                    }
                });
            } else {
                emojioneVersion = detectVersion(emojione);
                emojioneSupportMode = getSupportMode(emojioneVersion);
                if (emojioneSupportMode > 4) {
                    cdn.base = cdn.defaultBase3 + "emojione/assets/" + emojioneVersion;
                } else {
                    cdn.base = cdn.defaultBase + emojioneVersion + "/assets";
                }
            }
        }

        emojioneReady(function() {
            var emojiSize = "";
            if (options.useInternalCDN) {
                if (emojioneSupportMode > 4) emojiSize = emojione.emojiSize + "/";

                emojione.imagePathPNG = cdn.base + "/png/" + emojiSize;
                emojione.imagePathSVG = cdn.base + "/svg/" + emojiSize;
                emojione.imagePathSVGSprites = cdn.base + "/sprites/emojione.sprites.svg";
                emojione.imageType = options.imageType;
            }
            if (getSupportMode(emojioneVersion) > 4) {
                uniRegexp = emojione.regUnicode;
                emojione.imageType = options.imageType || "png";
            } else {
                uniRegexp = new RegExp("<object[^>]*>.*?<\/object>|<span[^>]*>.*?<\/span>|<(?:object|embed|svg|img|div|span|p|a)[^>]*>|(" + emojione.unicodeRegexp + ")", "gi");
            }
        });
    };
    var EmojioneArea = function(element, options) {
		var self = this;
		loadEmojione(options);
		eventStorage[self.id = ++unique] = {};
		possibleEvents[self.id] = {};
		emojioneReady(function() {
			init(self, element, options);
		});
	};
    function bindEvent(self, event) {
		event = event.replace(/^@/, '');
		var id = self.id;
		if (possibleEvents[id][event]) {
			$.each(possibleEvents[id][event], function(i, ev) {
				// ev[0] = element
				// ev[1] = event
				// ev[2] = target
				$.each($.isArray(ev[0]) ? ev[0] : [ev[0]], function(i, el) {
					$(el).on(ev[1], function() {
						var args = slice.call(arguments),
							target = $.isFunction(ev[2]) ? ev[2].apply(self, [event].concat(args)) : ev[2];
						if (target) {
							trigger(self, event, [target].concat(args));
						}
					});
				});
			});
			possibleEvents[id][event] = null;
		}
	}

    EmojioneArea.prototype.on = function(events, handler) {
        if (events && $.isFunction(handler)) {
            var self = this;
            $.each(events.toLowerCase().split(' '), function(i, event) {
                bindEvent(self, event);
                (eventStorage[self.id][event] || (eventStorage[self.id][event] = [])).push(handler);
            });
        }
        return this;
    };

	EmojioneArea.prototype.off = function(events, handler) {
		if (events) {
			var id = this.id;
			$.each(events.toLowerCase().replace(/_/g, '.').split(' '), function(i, event) {
				if (eventStorage[id][event] && !/^@/.test(event)) {
					if (handler) {
						$.each(eventStorage[id][event], function(j, fn) {
							if (fn === handler) {
								eventStorage[id][event] = eventStorage[id][event].splice(j, 1);
							}
						});
					} else {
						eventStorage[id][event] = [];
					}
				}
			});
		}
		return this;
	};

	EmojioneArea.prototype.trigger = function() {
		var args = slice.call(arguments),
			call_args = [this].concat(args.slice(0,1));
		call_args.push(args.slice(1));
		return trigger.apply(this, call_args);
	};

    EmojioneArea.prototype.setFocus = function () {
        var self = this;
        emojioneReady(function () {
            self.editor.focus();
        });
        return self;
    };

	EmojioneArea.prototype.setText = function (str) {
		var self = this;
		emojioneReady(function () {
			self.editor.html(htmlFromText(str, self));
			self.content = self.editor.html();
			trigger(self, 'change', [self.editor]);
			calcButtonPosition.apply(self);
		});
		return self;
	}

	EmojioneArea.prototype.getText = function() {
		return textFromHtml(this.editor.html(), this);
	}

	EmojioneArea.prototype.showPicker = function () {
		var self = this;
		if (self._sh_timer) {
			window.clearTimeout(self._sh_timer);
		}
		self.picker.removeClass("hidden");
		self._sh_timer =  window.setTimeout(function() {
			self.button.addClass("active");
		}, 50);
		trigger(self, "picker.show", [self.picker]);
		return self;
	}

	EmojioneArea.prototype.hidePicker = function () {
		var self = this;
		if (self._sh_timer) {
			window.clearTimeout(self._sh_timer);
		}
		self.button.removeClass("active");
		self._sh_timer =  window.setTimeout(function() {
			self.picker.addClass("hidden");
		}, 500);
		trigger(self, "picker.hide", [self.picker]);
		return self;
	}

    EmojioneArea.prototype.enable = function () {
        var self = this;
        var next = function () {
            self.disabled = false;
            self.editor.prop('contenteditable', true);
            self.button.show();
            var editor = self[(self.standalone) ? "button" : "editor"];
            editor.parent().removeClass('emojionearea-disable');
            trigger(self, 'enabled', [editor]);
        };
        self.isReady ? next() : self.on("ready", next);
        return self;
    }

    EmojioneArea.prototype.disable = function () {
        var self = this;
        self.disabled = true;
        var next = function () {
            self.editor.prop('contenteditable', false);
            self.hidePicker();
            self.button.hide();
            var editor = self[(self.standalone) ? "button" : "editor"];
            editor.parent().addClass('emojionearea-disable');
            trigger(self, 'disabled', [editor]);
        };
        self.isReady ? next() : self.on("ready", next);
        return self;
    }

    $.fn.emojioneArea = function(options) {
        return this.each(function() {
            if (!!this.emojioneArea) return this.emojioneArea;
            $.data(this, 'emojioneArea', this.emojioneArea = new EmojioneArea($(this), options));
            return this.emojioneArea;
        });
    };

    $.fn.emojioneArea.defaults = getDefaultOptions();

    $.fn.emojioneAreaText = function(options) {
        var self = this, pseudoSelf = {
            shortnames: (options && typeof options.shortnames !== 'undefined' ? options.shortnames : true),
            emojiTemplate: '<img alt="{alt}" class="emojione' + (options && options.sprite && emojioneSupportMode < 3 ? '-{uni}" src="' + blankImg : 'emoji" src="{img}') + '"/>'
        };

        loadEmojione(options);
        emojioneReady(function() {
            self.each(function() {
                var $this = $(this);
                if (!$this.hasClass('emojionearea-text')) {
                    $this.addClass('emojionearea-text').html(htmlFromText(($this.is('TEXTAREA') || $this.is('INPUT') ? $this.val() : $this.text()), pseudoSelf));
                }
                return $this;
            });
        });

        return this;
    };

}, window ) );
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),

/***/ 317:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(318);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(13)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../css-loader/index.js!./emojionearea.css", function() {
			var newContent = require("!!../../css-loader/index.js!./emojionearea.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 318:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "/* line 3, ../scss/_text-complete.scss */\n.dropdown-menu.textcomplete-dropdown[data-strategy=\"emojionearea\"] {\n  position: absolute;\n  z-index: 1000;\n  min-width: 160px;\n  padding: 5px 0;\n  margin: 2px 0 0;\n  font-size: 14px;\n  text-align: left;\n  list-style: none;\n  background-color: #fff;\n  -webkit-background-clip: padding-box;\n  background-clip: padding-box;\n  border: 1px solid #ccc;\n  border: 1px solid rgba(0, 0, 0, 0.15);\n  -moz-border-radius: 4px;\n  -webkit-border-radius: 4px;\n  border-radius: 4px;\n  -moz-box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);\n  -webkit-box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);\n  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175); }\n  /* line 20, ../scss/_text-complete.scss */\n  .dropdown-menu.textcomplete-dropdown[data-strategy=\"emojionearea\"] li.textcomplete-item {\n    font-size: 14px;\n    padding: 1px 3px;\n    border: 0; }\n    /* line 25, ../scss/_text-complete.scss */\n    .dropdown-menu.textcomplete-dropdown[data-strategy=\"emojionearea\"] li.textcomplete-item a {\n      text-decoration: none;\n      display: block;\n      height: 100%;\n      line-height: 1.8em;\n      padding: 0 1.54em 0 .615em;\n      color: #4f4f4f; }\n    /* line 34, ../scss/_text-complete.scss */\n    .dropdown-menu.textcomplete-dropdown[data-strategy=\"emojionearea\"] li.textcomplete-item:hover, .dropdown-menu.textcomplete-dropdown[data-strategy=\"emojionearea\"] li.textcomplete-item.active {\n      background-color: #e4e4e4; }\n      /* line 39, ../scss/_text-complete.scss */\n      .dropdown-menu.textcomplete-dropdown[data-strategy=\"emojionearea\"] li.textcomplete-item:hover a, .dropdown-menu.textcomplete-dropdown[data-strategy=\"emojionearea\"] li.textcomplete-item.active a {\n        color: #333; }\n    /* line 44, ../scss/_text-complete.scss */\n    .dropdown-menu.textcomplete-dropdown[data-strategy=\"emojionearea\"] li.textcomplete-item .emojioneemoji {\n      font-size: inherit;\n      height: 2ex;\n      width: 2.1ex;\n      min-height: 20px;\n      min-width: 20px;\n      display: inline-block;\n      margin: 0 5px .2ex 0;\n      line-height: normal;\n      vertical-align: middle;\n      max-width: 100%;\n      top: 0; }\n\n/* line 7, ../scss/emojionearea.scss */\n.emojionearea-text [class*=emojione-], .emojionearea-text .emojioneemoji {\n  font-size: inherit;\n  height: 2ex;\n  width: 2.1ex;\n  min-height: 20px;\n  min-width: 20px;\n  display: inline-block;\n  margin: -.2ex .15em .2ex;\n  line-height: normal;\n  vertical-align: middle;\n  max-width: 100%;\n  top: 0; }\n\n/* line 23, ../scss/emojionearea.scss */\n.emojionearea, .emojionearea * {\n  -moz-box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box; }\n/* line 27, ../scss/emojionearea.scss */\n.emojionearea.emojionearea-disable {\n  position: relative;\n  background-color: #eee;\n  -moz-user-select: -moz-none;\n  -ms-user-select: none;\n  -webkit-user-select: none;\n  user-select: none; }\n  /* line 31, ../scss/emojionearea.scss */\n  .emojionearea.emojionearea-disable:before {\n    content: \"\";\n    display: block;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    z-index: 1;\n    opacity: 0.3;\n    position: absolute;\n    background-color: #eee; }\n/* line 45, ../scss/emojionearea.scss */\n.emojionearea, .emojionearea.form-control {\n  display: block;\n  position: relative !important;\n  width: 100%;\n  height: auto;\n  padding: 0;\n  font-size: 14px;\n  border: 0;\n  background-color: #FFFFFF;\n  border: 1px solid #CCCCCC;\n  -moz-border-radius: 3px;\n  -webkit-border-radius: 3px;\n  border-radius: 3px;\n  -moz-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  -moz-transition: border-color 0.15s ease-in-out,    -moz-box-shadow 0.15s ease-in-out;\n  -o-transition: border-color 0.15s ease-in-out,         box-shadow 0.15s ease-in-out;\n  -webkit-transition: border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;\n  transition: border-color 0.15s ease-in-out,         box-shadow 0.15s ease-in-out; }\n/* line 63, ../scss/emojionearea.scss */\n.emojionearea.focused {\n  border-color: #66AFE9;\n  outline: 0;\n  -moz-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(102, 175, 233, 0.6);\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(102, 175, 233, 0.6);\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(102, 175, 233, 0.6); }\n/* line 69, ../scss/emojionearea.scss */\n.emojionearea .emojionearea-editor {\n  display: block;\n  height: auto;\n  min-height: 8em;\n  max-height: 15em;\n  overflow: auto;\n  padding: 6px 24px 6px 12px;\n  line-height: 1.42857143;\n  font-size: inherit;\n  color: #555555;\n  background-color: transparent;\n  border: 0;\n  cursor: text;\n  margin-right: 1px;\n  -moz-border-radius: 0;\n  -webkit-border-radius: 0;\n  border-radius: 0;\n  -moz-box-shadow: none;\n  -webkit-box-shadow: none;\n  box-shadow: none; }\n  /* line 86, ../scss/emojionearea.scss */\n  .emojionearea .emojionearea-editor:empty:before {\n    content: attr(placeholder);\n    display: block;\n    color: #BBBBBB; }\n  /* line 92, ../scss/emojionearea.scss */\n  .emojionearea .emojionearea-editor:focus {\n    border: 0;\n    outline: 0;\n    -moz-box-shadow: none;\n    -webkit-box-shadow: none;\n    box-shadow: none; }\n  /* line 98, ../scss/emojionearea.scss */\n  .emojionearea .emojionearea-editor [class*=emojione-], .emojionearea .emojionearea-editor .emojioneemoji {\n    font-size: inherit;\n    height: 2ex;\n    width: 2.1ex;\n    min-height: 20px;\n    min-width: 20px;\n    display: inline-block;\n    margin: -.2ex .15em .2ex;\n    line-height: normal;\n    vertical-align: middle;\n    max-width: 100%;\n    top: 0; }\n/* line 113, ../scss/emojionearea.scss */\n.emojionearea.emojionearea-inline {\n  height: 34px; }\n  /* line 116, ../scss/emojionearea.scss */\n  .emojionearea.emojionearea-inline > .emojionearea-editor {\n    height: 32px;\n    min-height: 20px;\n    overflow: hidden;\n    white-space: nowrap;\n    position: absolute;\n    top: 0;\n    left: 12px;\n    right: 24px;\n    padding: 6px 0; }\n  /* line 127, ../scss/emojionearea.scss */\n  .emojionearea.emojionearea-inline > .emojionearea-button {\n    top: 4px; }\n/* line 132, ../scss/emojionearea.scss */\n.emojionearea .emojionearea-button {\n  z-index: 5;\n  position: absolute;\n  right: 3px;\n  top: 3px;\n  width: 24px;\n  height: 24px;\n  opacity: 0.6;\n  cursor: pointer;\n  -moz-transition: opacity 300ms ease-in-out;\n  -o-transition: opacity 300ms ease-in-out;\n  -webkit-transition: opacity 300ms ease-in-out;\n  transition: opacity 300ms ease-in-out; }\n  /* line 143, ../scss/emojionearea.scss */\n  .emojionearea .emojionearea-button:hover {\n    opacity: 1; }\n  /* line 147, ../scss/emojionearea.scss */\n  .emojionearea .emojionearea-button > div {\n    display: block;\n    width: 24px;\n    height: 24px;\n    position: absolute;\n    -moz-transition: all 400ms ease-in-out;\n    -o-transition: all 400ms ease-in-out;\n    -webkit-transition: all 400ms ease-in-out;\n    transition: all 400ms ease-in-out; }\n    /* line 155, ../scss/emojionearea.scss */\n    .emojionearea .emojionearea-button > div.emojionearea-button-open {\n      background-position: 0 -24px;\n      filter: progid:DXImageTransform.Microsoft.Alpha(enabled=false);\n      opacity: 1; }\n    /* line 160, ../scss/emojionearea.scss */\n    .emojionearea .emojionearea-button > div.emojionearea-button-close {\n      background-position: 0 0;\n      -webkit-transform: rotate(-45deg);\n      -o-transform: rotate(-45deg);\n      transform: rotate(-45deg);\n      filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=0);\n      opacity: 0; }\n  /* line 170, ../scss/emojionearea.scss */\n  .emojionearea .emojionearea-button.active > div.emojionearea-button-open {\n    -webkit-transform: rotate(45deg);\n    -o-transform: rotate(45deg);\n    transform: rotate(45deg);\n    filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=0);\n    opacity: 0; }\n  /* line 177, ../scss/emojionearea.scss */\n  .emojionearea .emojionearea-button.active > div.emojionearea-button-close {\n    -webkit-transform: rotate(0deg);\n    -o-transform: rotate(0deg);\n    transform: rotate(0deg);\n    filter: progid:DXImageTransform.Microsoft.Alpha(enabled=false);\n    opacity: 1; }\n/* line 187, ../scss/emojionearea.scss */\n.emojionearea .emojionearea-picker {\n  background: #FFFFFF;\n  position: absolute;\n  -moz-box-shadow: 0 1px 5px rgba(0, 0, 0, 0.32);\n  -webkit-box-shadow: 0 1px 5px rgba(0, 0, 0, 0.32);\n  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.32);\n  -moz-border-radius: 5px;\n  -webkit-border-radius: 5px;\n  border-radius: 5px;\n  height: 276px;\n  width: 316px;\n  top: -15px;\n  right: -15px;\n  z-index: 90;\n  -moz-transition: all 0.25s ease-in-out;\n  -o-transition: all 0.25s ease-in-out;\n  -webkit-transition: all 0.25s ease-in-out;\n  transition: all 0.25s ease-in-out;\n  filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=0);\n  opacity: 0;\n  -moz-user-select: -moz-none;\n  -ms-user-select: none;\n  -webkit-user-select: none;\n  user-select: none; }\n  /* line 201, ../scss/emojionearea.scss */\n  .emojionearea .emojionearea-picker.hidden {\n    display: none; }\n  /* line 205, ../scss/emojionearea.scss */\n  .emojionearea .emojionearea-picker .emojionearea-wrapper {\n    position: relative;\n    height: 276px;\n    width: 316px; }\n    /* line 210, ../scss/emojionearea.scss */\n    .emojionearea .emojionearea-picker .emojionearea-wrapper:after {\n      content: \"\";\n      display: block;\n      position: absolute;\n      background-repeat: no-repeat;\n      z-index: 91; }\n  /* line 220, ../scss/emojionearea.scss */\n  .emojionearea .emojionearea-picker .emojionearea-filters, .emojionearea .emojionearea-picker .emojionearea-search {\n    width: 100%;\n    position: absolute;\n    z-index: 95; }\n  /* line 226, ../scss/emojionearea.scss */\n  .emojionearea .emojionearea-picker .emojionearea-search {\n    padding: 5px 0 0 8px;\n    height: 40px;\n    width: 160px; }\n    /* line 230, ../scss/emojionearea.scss */\n    .emojionearea .emojionearea-picker .emojionearea-search > input {\n      outline: none;\n      width: 160px;\n      min-width: 160px; }\n  /* line 237, ../scss/emojionearea.scss */\n  .emojionearea .emojionearea-picker .emojionearea-filters {\n    background: #F5F7F9;\n    padding: 0 0 0 7px;\n    height: 40px; }\n    /* line 242, ../scss/emojionearea.scss */\n    .emojionearea .emojionearea-picker .emojionearea-filters .emojionearea-filter {\n      display: block;\n      float: left;\n      height: 40px;\n      width: 32px;\n      filter: inherit;\n      padding: 7px 1px 0;\n      cursor: pointer;\n      -webkit-filter: grayscale(1);\n      filter: grayscale(1); }\n      /* line 252, ../scss/emojionearea.scss */\n      .emojionearea .emojionearea-picker .emojionearea-filters .emojionearea-filter.active {\n        background: #fff; }\n      /* line 256, ../scss/emojionearea.scss */\n      .emojionearea .emojionearea-picker .emojionearea-filters .emojionearea-filter.active, .emojionearea .emojionearea-picker .emojionearea-filters .emojionearea-filter:hover {\n        -webkit-filter: grayscale(0);\n        filter: grayscale(0); }\n      /* line 260, ../scss/emojionearea.scss */\n      .emojionearea .emojionearea-picker .emojionearea-filters .emojionearea-filter > i {\n        width: 24px;\n        height: 24px;\n        top: 0; }\n      /* line 266, ../scss/emojionearea.scss */\n      .emojionearea .emojionearea-picker .emojionearea-filters .emojionearea-filter > img {\n        width: 24px;\n        height: 24px;\n        margin: 0 3px; }\n  /* line 274, ../scss/emojionearea.scss */\n  .emojionearea .emojionearea-picker .emojionearea-tones {\n    position: absolute;\n    top: 46px;\n    right: 10px;\n    height: 22px;\n    z-index: 95; }\n    /* line 281, ../scss/emojionearea.scss */\n    .emojionearea .emojionearea-picker .emojionearea-tones > .btn-tone {\n      display: inline-block;\n      padding: 0;\n      border: 0;\n      vertical-align: middle;\n      outline: none;\n      background: transparent;\n      cursor: pointer;\n      position: relative; }\n      /* line 292, ../scss/emojionearea.scss */\n      .emojionearea .emojionearea-picker .emojionearea-tones > .btn-tone.btn-tone-0, .emojionearea .emojionearea-picker .emojionearea-tones > .btn-tone.btn-tone-0:after {\n        background-color: #ffcf3e; }\n      /* line 297, ../scss/emojionearea.scss */\n      .emojionearea .emojionearea-picker .emojionearea-tones > .btn-tone.btn-tone-1, .emojionearea .emojionearea-picker .emojionearea-tones > .btn-tone.btn-tone-1:after {\n        background-color: #fae3c5; }\n      /* line 302, ../scss/emojionearea.scss */\n      .emojionearea .emojionearea-picker .emojionearea-tones > .btn-tone.btn-tone-2, .emojionearea .emojionearea-picker .emojionearea-tones > .btn-tone.btn-tone-2:after {\n        background-color: #e2cfa5; }\n      /* line 307, ../scss/emojionearea.scss */\n      .emojionearea .emojionearea-picker .emojionearea-tones > .btn-tone.btn-tone-3, .emojionearea .emojionearea-picker .emojionearea-tones > .btn-tone.btn-tone-3:after {\n        background-color: #daa478; }\n      /* line 312, ../scss/emojionearea.scss */\n      .emojionearea .emojionearea-picker .emojionearea-tones > .btn-tone.btn-tone-4, .emojionearea .emojionearea-picker .emojionearea-tones > .btn-tone.btn-tone-4:after {\n        background-color: #a78058; }\n      /* line 317, ../scss/emojionearea.scss */\n      .emojionearea .emojionearea-picker .emojionearea-tones > .btn-tone.btn-tone-5, .emojionearea .emojionearea-picker .emojionearea-tones > .btn-tone.btn-tone-5:after {\n        background-color: #5e4d43; }\n    /* line 325, ../scss/emojionearea.scss */\n    .emojionearea .emojionearea-picker .emojionearea-tones.emojionearea-tones-bullet > .btn-tone, .emojionearea .emojionearea-picker .emojionearea-tones.emojionearea-tones-square > .btn-tone {\n      width: 20px;\n      height: 20px;\n      margin: 0;\n      background-color: transparent; }\n      /* line 330, ../scss/emojionearea.scss */\n      .emojionearea .emojionearea-picker .emojionearea-tones.emojionearea-tones-bullet > .btn-tone:after, .emojionearea .emojionearea-picker .emojionearea-tones.emojionearea-tones-square > .btn-tone:after {\n        content: \"\";\n        position: absolute;\n        display: block;\n        top: 4px;\n        left: 4px;\n        width: 12px;\n        height: 12px; }\n      /* line 339, ../scss/emojionearea.scss */\n      .emojionearea .emojionearea-picker .emojionearea-tones.emojionearea-tones-bullet > .btn-tone.active:after, .emojionearea .emojionearea-picker .emojionearea-tones.emojionearea-tones-square > .btn-tone.active:after {\n        top: 0;\n        left: 0;\n        width: 20px;\n        height: 20px; }\n    /* line 351, ../scss/emojionearea.scss */\n    .emojionearea .emojionearea-picker .emojionearea-tones.emojionearea-tones-radio > .btn-tone, .emojionearea .emojionearea-picker .emojionearea-tones.emojionearea-tones-checkbox > .btn-tone {\n      width: 16px;\n      height: 16px;\n      margin: 0px 2px; }\n      /* line 356, ../scss/emojionearea.scss */\n      .emojionearea .emojionearea-picker .emojionearea-tones.emojionearea-tones-radio > .btn-tone.active:after, .emojionearea .emojionearea-picker .emojionearea-tones.emojionearea-tones-checkbox > .btn-tone.active:after {\n        content: \"\";\n        position: absolute;\n        display: block;\n        background-color: transparent;\n        border: 2px solid #fff;\n        width: 8px;\n        height: 8px;\n        top: 2px;\n        left: 2px;\n        box-sizing: initial; }\n    /* line 375, ../scss/emojionearea.scss */\n    .emojionearea .emojionearea-picker .emojionearea-tones.emojionearea-tones-bullet > .btn-tone, .emojionearea .emojionearea-picker .emojionearea-tones.emojionearea-tones-bullet > .btn-tone:after, .emojionearea .emojionearea-picker .emojionearea-tones.emojionearea-tones-radio > .btn-tone, .emojionearea .emojionearea-picker .emojionearea-tones.emojionearea-tones-radio > .btn-tone:after {\n      -moz-border-radius: 100%;\n      -webkit-border-radius: 100%;\n      border-radius: 100%; }\n    /* line 384, ../scss/emojionearea.scss */\n    .emojionearea .emojionearea-picker .emojionearea-tones.emojionearea-tones-square > .btn-tone, .emojionearea .emojionearea-picker .emojionearea-tones.emojionearea-tones-square > .btn-tone:after, .emojionearea .emojionearea-picker .emojionearea-tones.emojionearea-tones-checkbox > .btn-tone, .emojionearea .emojionearea-picker .emojionearea-tones.emojionearea-tones-checkbox > .btn-tone:after {\n      -moz-border-radius: 1px;\n      -webkit-border-radius: 1px;\n      border-radius: 1px; }\n  /* line 391, ../scss/emojionearea.scss */\n  .emojionearea .emojionearea-picker .emojionearea-scroll-area {\n    height: 196px;\n    overflow: auto;\n    overflow-x: hidden;\n    width: 100%;\n    position: absolute;\n    padding: 0 0 5px; }\n    /* line 399, ../scss/emojionearea.scss */\n    .emojionearea .emojionearea-picker .emojionearea-scroll-area .emojionearea-emojis-list {\n      z-index: 1; }\n    /* line 403, ../scss/emojionearea.scss */\n    .emojionearea .emojionearea-picker .emojionearea-scroll-area .emojionearea-category-title {\n      display: block;\n      font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;\n      font-size: 13px;\n      font-weight: normal;\n      color: #b2b2b2;\n      background: #FFFFFF;\n      line-height: 20px;\n      margin: 0;\n      padding: 7px 0 5px 6px; }\n      /* line 414, ../scss/emojionearea.scss */\n      .emojionearea .emojionearea-picker .emojionearea-scroll-area .emojionearea-category-title:after, .emojionearea .emojionearea-picker .emojionearea-scroll-area .emojionearea-category-title:before {\n        content: \" \";\n        display: block;\n        clear: both; }\n    /* line 421, ../scss/emojionearea.scss */\n    .emojionearea .emojionearea-picker .emojionearea-scroll-area .emojionearea-category {\n      padding: 0 0 0 7px; }\n      /* line 424, ../scss/emojionearea.scss */\n      .emojionearea .emojionearea-picker .emojionearea-scroll-area .emojionearea-category > .emojionearea-category {\n        padding: 0 !important; }\n      /* line 428, ../scss/emojionearea.scss */\n      .emojionearea .emojionearea-picker .emojionearea-scroll-area .emojionearea-category:after, .emojionearea .emojionearea-picker .emojionearea-scroll-area .emojionearea-category:before {\n        content: \" \";\n        display: block;\n        clear: both; }\n    /* line 435, ../scss/emojionearea.scss */\n    .emojionearea .emojionearea-picker .emojionearea-scroll-area [class*=emojione-] {\n      -moz-box-sizing: content-box;\n      -webkit-box-sizing: content-box;\n      box-sizing: content-box;\n      margin: 0;\n      width: 24px;\n      height: 24px;\n      top: 0; }\n    /* line 443, ../scss/emojionearea.scss */\n    .emojionearea .emojionearea-picker .emojionearea-scroll-area .emojibtn {\n      -moz-box-sizing: content-box;\n      -webkit-box-sizing: content-box;\n      box-sizing: content-box;\n      width: 24px;\n      height: 24px;\n      float: left;\n      display: block;\n      margin: 1px;\n      padding: 3px; }\n      /* line 452, ../scss/emojionearea.scss */\n      .emojionearea .emojionearea-picker .emojionearea-scroll-area .emojibtn:hover {\n        -moz-border-radius: 4px;\n        -webkit-border-radius: 4px;\n        border-radius: 4px;\n        background-color: #e4e4e4;\n        cursor: pointer; }\n      /* line 458, ../scss/emojionearea.scss */\n      .emojionearea .emojionearea-picker .emojionearea-scroll-area .emojibtn i, .emojionearea .emojionearea-picker .emojionearea-scroll-area .emojibtn img {\n        float: left;\n        display: block;\n        width: 24px;\n        height: 24px; }\n      /* line 465, ../scss/emojionearea.scss */\n      .emojionearea .emojionearea-picker .emojionearea-scroll-area .emojibtn img.lazy-emoji {\n        filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=0);\n        opacity: 0; }\n  /* line 472, ../scss/emojionearea.scss */\n  .emojionearea .emojionearea-picker.emojionearea-filters-position-top .emojionearea-filters {\n    top: 0;\n    -moz-border-radius-topleft: 5px;\n    -webkit-border-top-left-radius: 5px;\n    border-top-left-radius: 5px;\n    -moz-border-radius-topright: 5px;\n    -webkit-border-top-right-radius: 5px;\n    border-top-right-radius: 5px; }\n  /* line 477, ../scss/emojionearea.scss */\n  .emojionearea .emojionearea-picker.emojionearea-filters-position-top .emojionearea-search {\n    top: 40px; }\n  /* line 480, ../scss/emojionearea.scss */\n  .emojionearea .emojionearea-picker.emojionearea-filters-position-top .emojionearea-scroll-area {\n    bottom: 0; }\n  /* line 486, ../scss/emojionearea.scss */\n  .emojionearea .emojionearea-picker.emojionearea-filters-position-bottom .emojionearea-filters {\n    bottom: 0;\n    -moz-border-radius-bottomleft: 5px;\n    -webkit-border-bottom-left-radius: 5px;\n    border-bottom-left-radius: 5px;\n    -moz-border-radius-bottomright: 5px;\n    -webkit-border-bottom-right-radius: 5px;\n    border-bottom-right-radius: 5px; }\n  /* line 491, ../scss/emojionearea.scss */\n  .emojionearea .emojionearea-picker.emojionearea-filters-position-bottom .emojionearea-search {\n    bottom: 40px; }\n  /* line 494, ../scss/emojionearea.scss */\n  .emojionearea .emojionearea-picker.emojionearea-filters-position-bottom .emojionearea-tones {\n    top: initial;\n    bottom: 53px; }\n  /* line 498, ../scss/emojionearea.scss */\n  .emojionearea .emojionearea-picker.emojionearea-filters-position-bottom .emojionearea-scroll-area {\n    top: 0; }\n  /* line 503, ../scss/emojionearea.scss */\n  .emojionearea .emojionearea-picker.emojionearea-picker-position-top {\n    margin-top: -286px;\n    right: -14px; }\n    /* line 507, ../scss/emojionearea.scss */\n    .emojionearea .emojionearea-picker.emojionearea-picker-position-top .emojionearea-wrapper:after {\n      width: 19px;\n      height: 10px;\n      background-position: -2px -49px;\n      bottom: -10px;\n      right: 20px; }\n    /* line 516, ../scss/emojionearea.scss */\n    .emojionearea .emojionearea-picker.emojionearea-picker-position-top.emojionearea-filters-position-bottom .emojionearea-wrapper:after {\n      background-position: -2px -80px; }\n  /* line 522, ../scss/emojionearea.scss */\n  .emojionearea .emojionearea-picker.emojionearea-picker-position-left, .emojionearea .emojionearea-picker.emojionearea-picker-position-right {\n    margin-right: -326px;\n    top: -8px; }\n    /* line 527, ../scss/emojionearea.scss */\n    .emojionearea .emojionearea-picker.emojionearea-picker-position-left .emojionearea-wrapper:after, .emojionearea .emojionearea-picker.emojionearea-picker-position-right .emojionearea-wrapper:after {\n      width: 10px;\n      height: 19px;\n      background-position: 0px -60px;\n      top: 13px;\n      left: -10px; }\n    /* line 536, ../scss/emojionearea.scss */\n    .emojionearea .emojionearea-picker.emojionearea-picker-position-left.emojionearea-filters-position-bottom .emojionearea-wrapper:after, .emojionearea .emojionearea-picker.emojionearea-picker-position-right.emojionearea-filters-position-bottom .emojionearea-wrapper:after {\n      background-position: right -60px; }\n  /* line 542, ../scss/emojionearea.scss */\n  .emojionearea .emojionearea-picker.emojionearea-picker-position-bottom {\n    margin-top: 10px;\n    right: -14px;\n    top: 47px; }\n    /* line 547, ../scss/emojionearea.scss */\n    .emojionearea .emojionearea-picker.emojionearea-picker-position-bottom .emojionearea-wrapper:after {\n      width: 19px;\n      height: 10px;\n      background-position: -2px -100px;\n      top: -10px;\n      right: 20px; }\n    /* line 556, ../scss/emojionearea.scss */\n    .emojionearea .emojionearea-picker.emojionearea-picker-position-bottom.emojionearea-filters-position-bottom .emojionearea-wrapper:after {\n      background-position: -2px -90px; }\n/* line 564, ../scss/emojionearea.scss */\n.emojionearea .emojionearea-button.active + .emojionearea-picker {\n  filter: progid:DXImageTransform.Microsoft.Alpha(enabled=false);\n  opacity: 1; }\n/* line 568, ../scss/emojionearea.scss */\n.emojionearea .emojionearea-button.active + .emojionearea-picker-position-top {\n  margin-top: -269px; }\n/* line 572, ../scss/emojionearea.scss */\n.emojionearea .emojionearea-button.active + .emojionearea-picker-position-left,\n.emojionearea .emojionearea-button.active + .emojionearea-picker-position-right {\n  margin-right: -309px; }\n/* line 577, ../scss/emojionearea.scss */\n.emojionearea .emojionearea-button.active + .emojionearea-picker-position-bottom {\n  margin-top: -7px; }\n/* line 582, ../scss/emojionearea.scss */\n.emojionearea.emojionearea-standalone {\n  display: inline-block;\n  width: auto;\n  box-shadow: none; }\n  /* line 587, ../scss/emojionearea.scss */\n  .emojionearea.emojionearea-standalone .emojionearea-editor {\n    min-height: 33px;\n    position: relative;\n    padding: 6px 42px 6px 6px; }\n    /* line 591, ../scss/emojionearea.scss */\n    .emojionearea.emojionearea-standalone .emojionearea-editor::before {\n      content: \"\";\n      position: absolute;\n      top: 4px;\n      left: 50%;\n      bottom: 4px;\n      border-left: 1px solid #e6e6e6; }\n    /* line 599, ../scss/emojionearea.scss */\n    .emojionearea.emojionearea-standalone .emojionearea-editor.has-placeholder {\n      background-repeat: no-repeat;\n      background-position: 20px 4px; }\n      /* line 604, ../scss/emojionearea.scss */\n      .emojionearea.emojionearea-standalone .emojionearea-editor.has-placeholder .emojioneemoji {\n        opacity: 0.4; }\n  /* line 610, ../scss/emojionearea.scss */\n  .emojionearea.emojionearea-standalone .emojionearea-button {\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    width: auto;\n    height: auto; }\n    /* line 617, ../scss/emojionearea.scss */\n    .emojionearea.emojionearea-standalone .emojionearea-button > div {\n      right: 6px;\n      top: 5px; }\n  /* line 626, ../scss/emojionearea.scss */\n  .emojionearea.emojionearea-standalone .emojionearea-picker.emojionearea-picker-position-bottom .emojionearea-wrapper:after, .emojionearea.emojionearea-standalone .emojionearea-picker.emojionearea-picker-position-top .emojionearea-wrapper:after {\n    right: 23px; }\n  /* line 633, ../scss/emojionearea.scss */\n  .emojionearea.emojionearea-standalone .emojionearea-picker.emojionearea-picker-position-left .emojionearea-wrapper:after, .emojionearea.emojionearea-standalone .emojionearea-picker.emojionearea-picker-position-right .emojionearea-wrapper:after {\n    top: 15px; }\n\n/* line 32, ../scss/_image.scss */\n.emojionearea .emojionearea-button > div, .emojionearea .emojionearea-picker .emojionearea-wrapper:after {\n  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAABuCAYAAADMB4ipAAAHfElEQVRo3u1XS1NT2Rb+9uOcQF4YlAJzLymFUHaLrdxKULvEUNpdTnRqD532f+AHMLMc94gqR1Zbt8rBnUh3YXipPGKwRDoWgXvrYiFUlEdIkPPYZ/dAkwox5yQCVt/bzRrBPnt9e+211/etFeDQDu3ArL+/X37OeqmRWoH7+vpItfWawStF1tfXR+zW9xW5ne0p8loOcAKuCdwpRft60C8a+X5zTvebCqcAvmidf1GGHtqhHdpf1qqKzsrKipyensbi4iKWl5cBAMFgEG1tbYhGo2hpadlbmxseHpaDg4MAgI6ODng8HgBAPp/H/Pw8AODatWvo7e2tvUHrui7v3r2L+fl5XL58GVeuXIHH49m1N5/Py0ePHmF0dBQdHR24desWVFXdtYdXAn/48CHm5+dx8+ZNRKPRigEUDpuenpb3799H4YaOnWh5eVmOj48jFoshGo0STdPkwMCAXF5elqV7BgYGpKZpMhqNklgshrGxMbx580Y6gicSCTDGEIvFAADpdBqpVArJZLK4J5lMIpVKIZ1OAwBisRgYY0gkEs6Rp1IphMNh+Hw+AgCGYQAANE0r7in8Xfjm8/lIOBzGq1evnMHX19fR1NRU/D8UCoFzjnA4XFwLh8PgnCMUChXXmpqakM1mUfVBS62xsZHk83lZWi1nz579ZA0AhBDO4A0NDchkMsWSJIRAURRiVy26rktVVUkmk0EgEHAGP3XqFKamppDP56Vpmrhz5w5u374t/X4/OP+w3TRNZLNZ6LoO0zSRz+dlf38/Ll686Jzz8+fPQwiBeDwOt9tNrl+/jkwmU6yaQpVkMhncuHEDbrebxONxCCEQiUScIw8Gg+TBgwdyZGQEyWRSdnV1kVQqJYeGhrC6ugrGGEKhEHp7e3Hy5EmSTCblvXv30NPTg2AwSA6M/vF4HCMjI7b0/yzh8vv9AIBsNrt34aokuQsLC7skt729varkHtqftUFf++FHsrq0QN3eBvp68Tfvf9Mv12oFCYU7G//e9nVuO7dpNbe2W4M//yQr0p8yRvyBo1Zr++lwLcCt7afD/sBRizJGavrB1dDYYh47Htrq+Kb7jBNwxzfdZ44dD201NLaYVUkU7ozQpuAJBkARwnRZpunN5zaa5hJjiXLH05GeiMd7JEM5zzHGNQBGZvk/Iv0yYVWMvK0zKk1Dl6ahW5RQobjqdjy+wEZn9PKF0n2d0csXPL7AhuKq26GECtPQLdPQZVtn1LlB69p7yRVVSEiDEGJwRd12e4+8PR3piRQidnuPvOWKuk0IMSSkwRVV6Np7WVVbSqvGsgSnlKkAFNPQXdrOtuKqcxtcUTUAhmUJnVJmlleJo3CVHmAaOlPUOmYJkxFKibQsSRkXhr4juKIKO2BHVSwcoLrqCVdUYho6K3YYRRWmoUtdey/tgKtK7rUffiQAsLq08MnbNLe2WwBgB/zHzueFyD8nwlIfbvdx8eU0WV1aKD1cVAMs9+F2j9gUPEEKemEJIe3AnXy4XfkBoNKSZHNthWfX31EA69VKttyHVyIOY1wRwmS6tqNsrr31vXo5k/bUu4gT2cp9lhbm0rzCJpeUUrE0vS63+c7/6uXMbDUWl/ssLczNFrVFddUT09AZpUy1LKvO0DVfPrfR9HxqfNbuEe185l9MFX3o6tIC5YpKFLWOfdQQ93Zu49j0+FDCDtjOp1yaOQCYhs4Y40wI05XfWj8yPT40Ua2ey33mEmMTtp2IUEq0nW3FKeJPGPjRp1Iz2QUuLUu66txG9NLVSK3gBZ+C1lcE54oqKOOCK6rm8QU2unu+u1ANuNynvFsBAG1ubbdMQ5eGviMAFDuP0w3sfMpvQEtb24fOQncU1bXl8R7JnOu+ZNv97XxKJwY6+PNPsrm13drObVqUMlMIU5OWpVHOc96Go5lTnV2fzC/VfAozD7HTCa6olBBa1Imlhbmq2lLuQ5xaW6nCPfnln0Yt7bDUhzhps8cfKH5//uTXmvS81OeLdqI/ZoROzSZrHqG/OvOPzxuhK5VgJTvV2bW3EdqJRABwrvvS/kfoSkoZvXT1YEbociHr7vnuYEfogpBFL109HKH/h0fomnXg3Lff79r7/MmvVbWG7gX4QObzc99+Tz7mHKah05KcW6ahQ9feS6cbMCdgt7eBWJagjCuUAC5tZzuouuo0Spm0hElc9R4cbf4bVl8v1p6WUmCuqEwIs34ruxaeeTy4uJVd67As08UVlVmWoG5vA7FLG3WMmHEupVTyW+vh2cn4DADMTsaTuc21LiGEhzHOnQ6gNtMrJSBMCKHkNt999WLi0S7hejEZH81n174WpukiIMw0dKq66p3Bw50RwhUVXFGJKUy28Xal48VkfKrSlWenhsc23q2cEB9SR7iiItwZIbbgHn8AlDFCCMW7laXjqZnHjkNpaubJzNuVpWZCKChjxOMPVH/QlaW0f/G3ZLqWWl6ce/bvlddp7yFD/w8Z+njoX1+GoZMjgzMAMDkyeLAMnRh+uKveJ0YGD4ahEyODFRk6OfrL/hj67GnckaHPng7vjaGzyYmaGDr77KktQ38H8tqx8Wja+WIAAAAASUVORK5CYII=') !important; }\n\n/* line 32, ../scss/_image.scss */\n.emojionearea.emojionearea-standalone .emojionearea-editor.has-placeholder {\n  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMAQMAAABsu86kAAAABlBMVEUAAAC/v79T5hyIAAAAAXRSTlMAQObYZgAAABNJREFUCNdjYGNgQEb/P4AQqiAASiUEG6Vit44AAAAASUVORK5CYII=') !important; }\n", ""]);

// exports


/***/ }),

/***/ 320:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-card",
    { attrs: { height: "100%" } },
    [
      _vm.loading
        ? _c("v-progress-linear", {
            staticStyle: { margin: "0" },
            attrs: { indeterminate: true }
          })
        : _vm._e(),
      _vm._v(" "),
      _c(
        "v-card-title",
        { attrs: { "primary-title": "" } },
        [
          _c(
            "v-layout",
            { attrs: { row: "", wrap: "" } },
            [
              _c(
                "v-flex",
                { attrs: { lg2: "" } },
                [
                  _c("v-avatar", { attrs: { size: "40px" } }, [
                    _c("img", {
                      attrs: { src: _vm.user.avatar, alt: "avatar" }
                    })
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-flex",
                { staticStyle: { width: "100px" }, attrs: { lg10: "" } },
                [
                  _c("v-card-text", [
                    _c("div", { staticClass: "blockEmojionearea" }, [
                      _c("textarea", { staticClass: "emojionearea" })
                    ])
                  ])
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
        "v-card-text",
        [
          _c(
            "v-card-actions",
            [
              !_vm.dialog
                ? _c(
                    "v-btn",
                    {
                      attrs: {
                        slot: "activator",
                        flat: "",
                        color: "primary",
                        dark: ""
                      },
                      nativeOn: {
                        click: function($event) {
                          _vm.$emit("switchDialog")
                        }
                      },
                      slot: "activator"
                    },
                    [_vm._v("Enlarge")]
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.dialog
                ? _c(
                    "v-btn",
                    {
                      attrs: { flat: "", color: "primary" },
                      nativeOn: {
                        click: function($event) {
                          _vm.select($event)
                        }
                      }
                    },
                    [_c("v-icon", [_vm._v("insert_photo")]), _vm._v("Picture")],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.hasColors
                ? _c(
                    "v-menu",
                    {
                      attrs: {
                        "offset-x": "",
                        "close-on-content-click": false,
                        "nudge-width": 200
                      }
                    },
                    [
                      _c(
                        "v-btn",
                        {
                          attrs: {
                            slot: "activator",
                            flat: "",
                            color: "primary",
                            dark: ""
                          },
                          nativeOn: {
                            click: function($event) {
                              _vm.openSwatches($event)
                            }
                          },
                          slot: "activator"
                        },
                        [_c("v-icon", [_vm._v("color_lens")]), _vm._v("Color")],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-card",
                        [
                          _c(
                            "v-card-text",
                            [
                              _c("h3", [_vm._v("Custom colors")]),
                              _vm._v(" "),
                              _c(
                                "v-layout",
                                {
                                  staticStyle: { height: "25px" },
                                  attrs: {
                                    "justify-space-between": "",
                                    wrap: ""
                                  }
                                },
                                _vm._l(8, function(n) {
                                  return _c("v-flex", {
                                    key: n,
                                    class: "button background" + n,
                                    style:
                                       true
                                        ? "background-color:#ddd !important"
                                        : null,
                                    attrs: { lg1: "" },
                                    on: {
                                      click: function($event) {
                                        _vm.background("background" + n)
                                      }
                                    }
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
                  )
                : _vm._e(),
              _vm._v(" "),
              _c("v-spacer"),
              _vm._v(" "),
              _vm.dialog
                ? _c(
                    "v-btn",
                    {
                      attrs: { flat: "flat" },
                      nativeOn: {
                        click: function($event) {
                          _vm.$emit("switchDialog")
                        }
                      }
                    },
                    [_vm._v("Cancel")]
                  )
                : _vm._e(),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  attrs: { flat: "", color: "orange" },
                  nativeOn: {
                    click: function($event) {
                      _vm.publish($event)
                    }
                  }
                },
                [_vm._v("Publish")]
              )
            ],
            1
          ),
          _vm._v(" "),
          _vm.url && _vm.dialog
            ? _c(
                "v-avatar",
                {
                  staticStyle: { position: "relative" },
                  attrs: { size: "200px", tile: true }
                },
                [
                  _c("img", { attrs: { src: _vm.url, alt: "image" } }),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "nbr-photos" },
                    [
                      _c(
                        "v-btn",
                        {
                          attrs: { color: "primary", icon: "" },
                          on: {
                            click: function($event) {
                              _vm.file = null
                            }
                          }
                        },
                        [_c("v-icon", [_vm._v("close")])],
                        1
                      )
                    ],
                    1
                  )
                ]
              )
            : _vm._e()
        ],
        1
      ),
      _vm._v(" "),
      _c("input", {
        staticStyle: { display: "none" },
        attrs: { type: "file", id: "photo", name: "avatar" },
        on: { change: _vm.preview }
      })
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
    require("vue-hot-reload-api")      .rerender("data-v-684ec650", module.exports)
  }
}

/***/ }),

/***/ 321:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("CardPublicationForm", {
        attrs: { dialog: false },
        on: { switchDialog: _vm.switchDialog }
      }),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: { width: "50%", "content-class": "notOverflow" },
          model: {
            value: _vm.dialog,
            callback: function($$v) {
              _vm.dialog = $$v
            },
            expression: "dialog"
          }
        },
        [
          _c("CardPublicationForm", {
            attrs: { dialog: true },
            on: { switchDialog: _vm.switchDialog }
          })
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
    require("vue-hot-reload-api")      .rerender("data-v-e8738818", module.exports)
  }
}

/***/ }),

/***/ 322:
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
          _c("v-flex", { attrs: { xs0: "", lg3: "" } }),
          _vm._v(" "),
          _c(
            "v-flex",
            { attrs: { xs12: "", lg6: "" } },
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
                    [
                      _c(
                        "v-flex",
                        { attrs: { lg12: "" } },
                        [_c("cardPublication")],
                        1
                      ),
                      _vm._v(" "),
                      _vm._l(_vm.articles, function(article, i) {
                        return _c(
                          "v-flex",
                          { key: i, attrs: { lg12: "" } },
                          [_c("cardFont", { attrs: { article: article } })],
                          1
                        )
                      })
                    ],
                    2
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("v-flex", { attrs: { xs0: "", lg3: "" } })
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

/***/ }),

/***/ 45:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(295)
}
var normalizeComponent = __webpack_require__(11)
/* script */
var __vue_script__ = __webpack_require__(297)
/* template */
var __vue_template__ = __webpack_require__(322)
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
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});