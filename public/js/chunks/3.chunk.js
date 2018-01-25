webpackJsonp([3],Array(56).concat([
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(17)
/* script */
var __vue_script__ = __webpack_require__(182)
/* template */
var __vue_template__ = __webpack_require__(186)
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
Component.options.__file = "resources/assets/js/components/user/Actu.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1d3d6300", Component.options)
  } else {
    hotAPI.reload("data-v-1d3d6300", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var state = function () {
    function state() {
        _classCallCheck(this, state);

        this.state = {
            replyUser_id: null,
            loading: false
        };
    }

    _createClass(state, [{
        key: "get",
        value: function get(key) {
            return this.state[key];
        }
    }, {
        key: "set",
        value: function set(key, val) {
            this.state[key] = val;
        }
    }]);

    return state;
}();

/* harmony default export */ __webpack_exports__["a"] = (new state());

/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    props: {
        article: Object
    },
    data: function data() {
        return {
            subscribed: false,
            openDialogComment: false,
            articleDelete: false,
            loading: false,
            userPopover: false,
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
            }].reverse()
        };
    },
    computed: {
        user: function user() {
            return this.$store.state.user.user;
        },
        owner: function owner() {
            var _this = this;

            return this.$store.state.users.users.find(function (user) {
                return user.id === _this.article.user_id;
            });
        },
        darked: function darked() {
            return this.$store.state.setting.darked;
        },
        facemotion: function facemotion() {
            var _this2 = this;

            return this.article.liked ? this.emoticons.find(function (e) {
                return e.type === _this2.article.liked.type;
            }).emocion : null;
        },
        text: function text() {
            var _this3 = this;

            return this.article.liked ? this.emoticons.find(function (e) {
                return e.type === _this3.article.liked.type;
            }).TextoEmocion : null;
        }
    },
    mounted: function mounted() {
        document.querySelector('.faceMocion').parentNode.setAttribute("menu", "like");
    },

    methods: {
        like: function like(event, name) {
            var _this4 = this;

            var facemotion = name ? name : event.target.className;
            var emoticon = this.emoticons.find(function (e) {
                return e.emocion === facemotion;
            });
            if (emoticon && !this.article.liked) {
                this.$http.get('user/article/' + this.article.id + '/like/' + emoticon.type).then(function (response) {
                    if (response.body.id) {
                        _this4.$store.dispatch("like/save", response.body);
                        _this4.$store.dispatch('article/addLike', { article: _this4.article, like: response.body });
                    }
                });
            }
        },
        deleteLike: function deleteLike() {
            var _this5 = this;

            if (this.article.liked) {
                this.$http.delete('user/article/' + this.article.id + '/like').then(function (response) {
                    if (response.body.status === 1) {
                        _this5.$store.dispatch("like/delete", _this5.article.liked);
                        _this5.$store.dispatch('article/deleteLike', { article: _this5.article });
                    }
                });
            }
        },
        follow: function follow(user) {
            var _this6 = this;

            this.$set(user, "loadingSubs", true);
            if (user.followed) {
                this.$http.delete("user/subscription/" + user.followed.id).then(function (response) {
                    if (response.body.status === 1) {
                        _this6.$set(user, "loadingSubs", false);
                        _this6.$set(user, "followed", null);
                        user.followers_count++;
                    }
                });
            } else {
                this.$http.post('user/subscription', { receiver_id: user.id }).then(function (response) {
                    if (response.body.id) {
                        _this6.$set(user, "followed", response.body);
                        user.followers_count--;
                        _this6.$set(user, "loadingSubs", false);
                    }
                });
            }
        },
        masquer: function masquer() {
            this.$store.dispatch("article/delete", { id: this.article.id });
        },
        destroy: function destroy() {
            var _this7 = this;

            this.loading = true;
            this.$http.delete('user/article/' + this.article.id).then(function (response) {
                if (response.body.status === 1) {
                    _this7.$store.dispatch('article/delete', _this7.article);
                    _this7.articleDelete = false;
                    _this7.loading = false;
                }
            });
        },
        copie: function copie() {
            var textarea = document.querySelector("#textareaClipboard");
            textarea.value = this.urlArticle(this.article.id, this.article.user_id);
            textarea.select();
            document.execCommand('copy');
        }
    }
});

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(86)
}
var normalizeComponent = __webpack_require__(17)
/* script */
var __vue_script__ = __webpack_require__(88)
/* template */
var __vue_template__ = __webpack_require__(96)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-3fa623db"
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
Component.options.__file = "resources/assets/js/components/comment/Comments.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3fa623db", Component.options)
  } else {
    hotAPI.reload("data-v-3fa623db", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(97)
}
var normalizeComponent = __webpack_require__(17)
/* script */
var __vue_script__ = __webpack_require__(99)
/* template */
var __vue_template__ = __webpack_require__(100)
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
Component.options.__file = "resources/assets/js/components/comment/CommentForm.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0b6b5d2c", Component.options)
  } else {
    hotAPI.reload("data-v-0b6b5d2c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(17)
/* script */
var __vue_script__ = __webpack_require__(101)
/* template */
var __vue_template__ = __webpack_require__(102)
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
Component.options.__file = "resources/assets/js/components/share/DialogShare.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-9ea2bec0", Component.options)
  } else {
    hotAPI.reload("data-v-9ea2bec0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(103)
}
var normalizeComponent = __webpack_require__(17)
/* script */
var __vue_script__ = __webpack_require__(105)
/* template */
var __vue_template__ = __webpack_require__(109)
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
Component.options.__file = "resources/assets/js/components/like/DialogLike.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-76898650", Component.options)
  } else {
    hotAPI.reload("data-v-76898650", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(17)
/* script */
var __vue_script__ = __webpack_require__(110)
/* template */
var __vue_template__ = __webpack_require__(118)
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
Component.options.__file = "resources/assets/js/components/card/DialogFormEdit.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-38312f8e", Component.options)
  } else {
    hotAPI.reload("data-v-38312f8e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(78)
}
var normalizeComponent = __webpack_require__(17)
/* script */
var __vue_script__ = __webpack_require__(80)
/* template */
var __vue_template__ = __webpack_require__(81)
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
Component.options.__file = "resources/assets/js/components/comment/ArticleBox.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-004b529c", Component.options)
  } else {
    hotAPI.reload("data-v-004b529c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(79);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(18)("00daeb0f", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-004b529c\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./ArticleBox.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-004b529c\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./ArticleBox.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "\n.articleBox .notSpace{\n    padding: 0;\n    margin: 0;\n}\n.articleBox .card__media__content{\n    margin: 0 !important;\n    padding: 10px;\n}\n.articleBox .card__media__content span{\n    word-wrap: break-word;\n}\n", ""]);

// exports


/***/ }),
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixin_cardMixin__ = __webpack_require__(71);
//
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
    mounted: function mounted() {}
});

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "articleBox", staticStyle: { height: "600px" } },
    [
      _c(
        "v-card-media",
        {
          staticClass: "notSpace",
          class: _vm.article.image ? null : _vm.article.color,
          attrs: {
            src: _vm.article.image ? _vm.article.image.path : null,
            height: "600px"
          }
        },
        [
          !_vm.article.image
            ? _c(
                "div",
                { staticStyle: { width: "100%", "text-align": "center" } },
                _vm._l(JSON.parse(_vm.article.message), function(message, i) {
                  return _c("span", { key: i }, [
                    _vm._v(_vm._s(message.text)),
                    message.url
                      ? _c("a", [
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
            : _vm._e()
        ]
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
    require("vue-hot-reload-api")      .rerender("data-v-004b529c", module.exports)
  }
}

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(83)
}
var normalizeComponent = __webpack_require__(17)
/* script */
var __vue_script__ = __webpack_require__(85)
/* template */
var __vue_template__ = __webpack_require__(119)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-3d827913"
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
Component.options.__file = "resources/assets/js/components/comment/CommentBox.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3d827913", Component.options)
  } else {
    hotAPI.reload("data-v-3d827913", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(84);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(18)("5514a0b3", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3d827913\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./CommentBox.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3d827913\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./CommentBox.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "\n.toolbar[data-v-3d827913]{\n    box-shadow: none;\n}\n", ""]);

// exports


/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Comments_vue__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Comments_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Comments_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__CommentForm_vue__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__CommentForm_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__CommentForm_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mixin_cardMixin__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__share_DialogShare_vue__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__share_DialogShare_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__share_DialogShare_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__like_DialogLike_vue__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__like_DialogLike_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__like_DialogLike_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__card_DialogFormEdit_vue__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__card_DialogFormEdit_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__card_DialogFormEdit_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    components: { commentForm: __WEBPACK_IMPORTED_MODULE_1__CommentForm_vue___default.a, comments: __WEBPACK_IMPORTED_MODULE_0__Comments_vue___default.a, dialogShare: __WEBPACK_IMPORTED_MODULE_3__share_DialogShare_vue___default.a, dialogLike: __WEBPACK_IMPORTED_MODULE_4__like_DialogLike_vue___default.a, dialogFormEdit: __WEBPACK_IMPORTED_MODULE_5__card_DialogFormEdit_vue___default.a },
    mixins: [__WEBPACK_IMPORTED_MODULE_2__mixin_cardMixin__["a" /* default */]],
    props: {
        open: Boolean
    },
    data: function data() {
        return {
            openDialogShare: false,
            openDialogLike: false,
            dialogFormEdit: false
        };
    },
    mounted: function mounted() {}
});

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(87);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(18)("06c88ef3", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3fa623db\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./Comments.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3fa623db\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./Comments.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "\n#showComment[data-v-3fa623db] {\n    padding-left: 10px;\n    margin-left: -10px;\n    border-left: 5px solid turquoise;\n}\n", ""]);

// exports


/***/ }),
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Comment_vue__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Comment_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Comment_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__state__ = __webpack_require__(70);
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
    components: { comment: __WEBPACK_IMPORTED_MODULE_0__Comment_vue___default.a },
    props: {
        article: Object,
        open: Boolean
    },
    data: function data() {
        return {
            ready: true
        };
    },
    computed: {
        comments: function comments() {
            var _this = this;

            return this.$store.state.comment.comments.filter(function (comment) {
                return comment.article_id === _this.article.id;
            });
        },
        end: function end() {
            var _this2 = this;

            return this.$store.state.query.queries.find(function (e) {
                return e.name === "comment" && !e.next && e.id === _this2.article.id;
            });
        },
        query: function query() {
            var _this3 = this;

            return this.$store.state.query.queries.find(function (e) {
                return e.name === "comment" && e.id === _this3.article.id;
            });
        }
    },
    methods: {
        loadMore: function loadMore() {
            var _this4 = this;

            if (!this.end && this.ready) {
                __WEBPACK_IMPORTED_MODULE_1__state__["a" /* default */].set('loading', true);
                this.ready = false;
                this.$http.get(this.query.next).then(function (response) {
                    if (response.body && _typeof(response.body) === "object") {
                        var users = [];
                        var replyed_users = [];
                        response.body.data.map(function (comment) {
                            users.push(comment.user);
                            delete comment.user;
                            if (comment.replyed_user) {
                                replyed_users.push(comment.replyed_user);
                                delete comment.replyed_user;
                            }
                        });
                        _this4.$store.dispatch('users/save', users);
                        _this4.$store.dispatch('users/save', replyed_users);
                        _this4.$store.dispatch('comment/save', response.body.data);
                        _this4.$store.dispatch("query/save", { name: 'comment', next: response.body.next_page_url, id: _this4.article.id });
                        _this4.$nextTick(function () {
                            _this4.$scrollTo('#showComment', 1000, { container: '#comments' });
                        });
                    }
                    __WEBPACK_IMPORTED_MODULE_1__state__["a" /* default */].set('loading', false);
                    _this4.ready = true;
                });
            }
        },
        load: function load() {
            var _this5 = this;

            if (!this.query && this.ready) {
                __WEBPACK_IMPORTED_MODULE_1__state__["a" /* default */].set('loading', true);
                this.ready = false;
                this.$http.get('/user/article/' + this.article.id + '/comment').then(function (response) {
                    if (response.body && _typeof(response.body) === "object") {
                        var users = [];
                        var replyed_users = [];
                        response.body.data.map(function (comment) {
                            users.push(comment.user);
                            delete comment.user;
                            if (comment.replyed_user) {
                                replyed_users.push(comment.replyed_user);
                                delete comment.replyed_user;
                            }
                        });
                        _this5.$store.dispatch('users/save', users);
                        _this5.$store.dispatch('users/save', replyed_users);
                        _this5.$store.dispatch('comment/save', response.body.data);
                        _this5.$store.dispatch("query/save", { name: 'comment', next: response.body.next_page_url, id: _this5.article.id });
                        _this5.$nextTick(function () {
                            _this5.$scrollTo('#showComment', 1000, { container: '#comments' });
                        });
                    }
                    __WEBPACK_IMPORTED_MODULE_1__state__["a" /* default */].set('loading', false);
                    _this5.ready = true;
                });
            }
        }
    },
    mounted: function mounted() {
        this.load();
    },

    watch: {
        open: function open(data) {
            var _this6 = this;

            if (data === true) {
                this.$nextTick(function () {
                    _this6.$scrollTo('#showComment', 1000, { container: '#comments' });
                });
            }
        }
    }
});

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(90)
  __webpack_require__(92)
}
var normalizeComponent = __webpack_require__(17)
/* script */
var __vue_script__ = __webpack_require__(94)
/* template */
var __vue_template__ = __webpack_require__(95)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-7dce4648"
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
Component.options.__file = "resources/assets/js/components/comment/Comment.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7dce4648", Component.options)
  } else {
    hotAPI.reload("data-v-7dce4648", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(91);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(18)("1016e2fc", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7dce4648\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./Comment.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7dce4648\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./Comment.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "\n.icon[data-v-7dce4648]{\n    font-size: 18px;\n}\n", ""]);

// exports


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(93);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(18)("0c2943b0", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7dce4648\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=1&bustCache!./Comment.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7dce4648\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=1&bustCache!./Comment.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "\n.commentActions{\n    display:flex;\n    justify-content: space-between;\n    flex-wrap: wrap;\n    width: 80%;\n}\n.commentActions button{\n    margin: 0;\n}\n.chipComment{\n    height: 25px !important;\n}\n.chipComment .chip__content{\n    cursor: pointer !important;\n}\n.chipComment .avatar{\n    width: 25px !important;\n    height: 25px !important;\n    min-width: 25px !important;\n}\n", ""]);

// exports


/***/ }),
/* 94 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__state__ = __webpack_require__(70);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        article: Object,
        comment: Object
    },
    data: function data() {
        return {
            store: __WEBPACK_IMPORTED_MODULE_0__state__["a" /* default */].state,
            commentDelete: false,
            loading: false
        };
    },

    computed: {
        owner: function owner() {
            var _this = this;

            return this.$store.state.users.users.find(function (user) {
                return user.id === _this.comment.user_id;
            });
        },
        replyed_user: function replyed_user() {
            var _this2 = this;

            return this.$store.state.users.users.find(function (user) {
                return user.id === _this2.comment.comment_id;
            });
        },
        user: function user() {
            return this.$store.state.user.user;
        }
    },
    methods: {
        reply: function reply() {
            __WEBPACK_IMPORTED_MODULE_0__state__["a" /* default */].set("replyUser_id", this.owner.id);
        },
        destroy: function destroy() {
            var _this3 = this;

            this.loading = true;
            this.$http.delete('user/article/' + this.comment.article_id + '/comment/' + this.comment.id).then(function (response) {
                if (response.body.status === 1) {
                    _this3.$store.dispatch('comment/delete', _this3.comment);
                    _this3.$store.dispatch('article/deleteComment', _this3.article);
                }
                _this3.loading = false;
                _this3.commentDelete = false;
            });
        },
        like: function like() {
            var _this4 = this;

            __WEBPACK_IMPORTED_MODULE_0__state__["a" /* default */].set('loading', true);
            this.$http.get('user/article/' + this.comment.article_id + '/comment/' + this.comment.id + '/like/' + 8).then(function (response) {
                if (response.body.id) {
                    _this4.$store.dispatch('comment/addLike', { comment: _this4.comment, like: response.body });
                }
                __WEBPACK_IMPORTED_MODULE_0__state__["a" /* default */].set('loading', false);
            });
        },
        deleteLike: function deleteLike() {
            var _this5 = this;

            __WEBPACK_IMPORTED_MODULE_0__state__["a" /* default */].set('loading', true);
            this.$http.get('user/article/' + this.comment.article_id + '/comment/' + this.comment.id + '/like/').then(function (response) {
                if (response.body.status === 1) {
                    _this5.$store.dispatch('comment/deleteLike', { comment: _this5.comment });
                }
                __WEBPACK_IMPORTED_MODULE_0__state__["a" /* default */].set('loading', false);
            });
        }
    }
});

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticStyle: { display: "flex", "flex-direction": "row" } },
    [
      _c(
        "div",
        [
          _c(
            "v-avatar",
            {
              staticStyle: { "margin-right": "10px" },
              attrs: { size: "40px" },
              on: {
                click: function($event) {
                  _vm.$router.push("/user/profile/" + _vm.comment.user_id)
                }
              }
            },
            [_c("img", { attrs: { src: _vm.owner.avatar, alt: "avatar" } })]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticStyle: {
            display: "flex",
            "flex-direction": "column",
            width: "80%",
            "word-wrap": "break-word"
          }
        },
        [
          _c("div", [
            _vm._v(
              "\n            " +
                _vm._s(_vm.owner.name + " " + _vm.owner.forename) +
                "\n        "
            )
          ]),
          _vm._v(" "),
          _c("div", [
            _c(
              "div",
              {
                staticStyle: {
                  width: "100%",
                  "text-align": "left",
                  "word-wrap": "break-word"
                }
              },
              _vm._l(JSON.parse(_vm.comment.message), function(message, i) {
                return _c("span", { key: i }, [
                  _vm.comment.comment_id && i === 0
                    ? _c(
                        "span",
                        {
                          staticClass: "text-xs-center",
                          on: {
                            click: function($event) {
                              _vm.$router.push(
                                "/user/profile/" + _vm.comment.comment_id
                              )
                            }
                          }
                        },
                        [
                          _c(
                            "v-chip",
                            { staticClass: "chipComment" },
                            [
                              _c(
                                "v-avatar",
                                {
                                  staticStyle: {
                                    height: "25px !important",
                                    width: "25px !important",
                                    "min-width": "25px !important"
                                  }
                                },
                                [
                                  _c("img", {
                                    attrs: {
                                      src: _vm.replyed_user.avatar,
                                      alt: "avatar"
                                    }
                                  })
                                ]
                              ),
                              _vm._v(
                                "\n                        " +
                                  _vm._s(
                                    _vm.replyed_user.name +
                                      " " +
                                      _vm.replyed_user.forename
                                  ) +
                                  "\n                      "
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    : _vm._e(),
                  _vm._v(
                    "\n                    " +
                      _vm._s(message.text) +
                      "\n                    "
                  ),
                  message.url
                    ? _c("span", [
                        _c("img", {
                          staticStyle: {
                            "margin-bottom": "-5px",
                            height: "20px",
                            width: "20px"
                          },
                          attrs: { src: message.url }
                        })
                      ])
                    : _vm._e()
                ])
              })
            )
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "commentActions" },
            [
              _c(
                "div",
                [
                  _vm._v(
                    "\n                " +
                      _vm._s(_vm.comment.likes_count) +
                      "\n                "
                  ),
                  _vm.comment.liked
                    ? _c(
                        "v-btn",
                        {
                          staticStyle: { color: "red" },
                          attrs: { icon: "", flat: "" },
                          nativeOn: {
                            click: function($event) {
                              _vm.deleteLike($event)
                            }
                          }
                        },
                        [_c("v-icon", [_vm._v("favorite")])],
                        1
                      )
                    : _c(
                        "v-btn",
                        {
                          attrs: { icon: "", flat: "" },
                          nativeOn: {
                            click: function($event) {
                              _vm.like($event)
                            }
                          }
                        },
                        [_c("v-icon", [_vm._v("favorite_border")])],
                        1
                      )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  attrs: { icon: "", flat: "" },
                  nativeOn: {
                    click: function($event) {
                      _vm.reply($event)
                    }
                  }
                },
                [_c("v-icon", [_vm._v("reply")])],
                1
              ),
              _vm._v(" "),
              _vm.user.id === _vm.comment.user_id
                ? _c(
                    "v-btn",
                    {
                      attrs: { icon: "", flat: "" },
                      nativeOn: {
                        click: function($event) {
                          _vm.commentDelete = true
                        }
                      }
                    },
                    [_c("v-icon", [_vm._v("delete")])],
                    1
                  )
                : _vm._e()
            ],
            1
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: { "max-width": "290" },
          model: {
            value: _vm.commentDelete,
            callback: function($$v) {
              _vm.commentDelete = $$v
            },
            expression: "commentDelete"
          }
        },
        [
          _c(
            "v-card",
            [
              _vm.loading
                ? _c("v-progress-linear", {
                    staticStyle: { margin: "0" },
                    attrs: { indeterminate: true }
                  })
                : _vm._e(),
              _vm._v(" "),
              _c("v-card-title", { staticClass: "headline" }, [
                _vm._v("Deleting the comment")
              ]),
              _vm._v(" "),
              _c("v-divider"),
              _vm._v(" "),
              _c("v-card-text", [
                _vm._v(
                  "\n                Are you sure you want to delete this comment?\n            "
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
                      attrs: { flat: "flat" },
                      nativeOn: {
                        click: function($event) {
                          _vm.commentDelete = false
                        }
                      }
                    },
                    [_vm._v("Cancel")]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { color: "primary", flat: "flat" },
                      nativeOn: {
                        click: function($event) {
                          _vm.destroy($event)
                        }
                      }
                    },
                    [_vm._v("Confirm")]
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
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-7dce4648", module.exports)
  }
}

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      !_vm.end &&
      _vm.article.comments_count !== 0 &&
      _vm.$vuetify.breakpoint.smAndUp
        ? _c("span", [
            _c("a", { on: { click: _vm.loadMore } }, [
              _vm._v("Load more comments")
            ]),
            _c("br"),
            _c("br")
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm._l(_vm.comments, function(comment, i) {
        return _c(
          "blockquote",
          { key: i, attrs: { id: comment.idName } },
          [
            _c("comment", { attrs: { comment: comment, article: _vm.article } })
          ],
          1
        )
      }),
      _vm._v(" "),
      !_vm.end &&
      _vm.article.comments_count !== 0 &&
      !_vm.$vuetify.breakpoint.smAndUp
        ? _c("span", [
            _c("a", { on: { click: _vm.loadMore } }, [
              _vm._v("Load more comments")
            ]),
            _c("br"),
            _c("br")
          ])
        : _vm._e()
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-3fa623db", module.exports)
  }
}

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(98);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(18)("f1f50f38", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0b6b5d2c\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./CommentForm.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0b6b5d2c\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./CommentForm.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "\n.enlargeCmt .emojionearea{\n    min-height: 50px;\n}\n.commentForm .emojionearea .emojionearea-editor{\n    text-align: left;\n    font-size: 18px;\n    color: black;\n    font-family: monospace;\n    min-height: inherit !important;\n    max-height: 200px !important;\n    background: transparent !important;\n    border-radius: 0;\n}\n.commentForm .emojionearea{\n    position: absolute !important;\n    bottom: -40px;\n    border-radius: 0;\n}\n.commentForm{\n    position: relative;\n}\n.commentForm .emojionearea-picker{\n    right: 0 !important;\n    border: none;\n    box-shadow: none;\n}\n.emojionearea-editor:focus {\n    border: none !important;\n    border-color: none !important;\n    box-shadow: none !important;\n    outline: 0px solid transparent !important;\n}\n", ""]);

// exports


/***/ }),
/* 99 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_emojionearea__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_emojionearea___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_emojionearea__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_emojionearea_dist_emojionearea_css__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_emojionearea_dist_emojionearea_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_emojionearea_dist_emojionearea_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__state_js__ = __webpack_require__(70);
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
    computed: {
        darked: function darked() {
            return this.$store.state.setting.darked;
        },
        replyUser: function replyUser() {
            var _this = this;

            return this.$store.state.users.users.find(function (user) {
                return user.id === _this.store.replyUser_id;
            });
        },
        user: function user() {
            return this.$store.state.user.user;
        },
        emojiClass: function emojiClass() {
            return [this.darked ? 'commentForm blackForm' : 'commentForm', !this.$vuetify.breakpoint.smAndUp ? ' noEmoji enlargeCmt' : null].join(' ');
        }
    },
    data: function data() {
        return {
            store: __WEBPACK_IMPORTED_MODULE_2__state_js__["a" /* default */].state
        };
    },

    methods: {
        publish: function publish() {
            var _this2 = this;

            var message = this.parseText();
            var data = { message: message, article_id: this.article.id, user_id: this.user.id };
            var elt = this.$el.querySelector('.emojionearea-editor').querySelector('.replyUser');
            if (elt && elt.innerText.trim().length > 1 && this.store.replyUser_id) {
                data['comment_id'] = this.store.replyUser_id;
            }
            __WEBPACK_IMPORTED_MODULE_2__state_js__["a" /* default */].set('loading', true);
            this.$http.post("/user/article/" + this.article.id + "/comment", data).then(function (response) {
                if (response.body.id) {
                    _this2.clear();
                    var replyUser = response.body.replyed_user;
                    delete response.body.replyed_user;
                    _this2.$store.dispatch('comment/save', response.body);
                    if (replyUser) _this2.$store.dispatch('users/save', replyUser);
                    _this2.$store.dispatch('article/addComment', _this2.article);
                    _this2.$store.dispatch('comment/scrollTo', response.body.id);
                    _this2.$nextTick(function () {
                        _this2.$scrollTo('#showComment', 500, { container: '#comments' });
                    });
                }
                __WEBPACK_IMPORTED_MODULE_2__state_js__["a" /* default */].set('loading', false);
            });
        },
        clear: function clear() {
            this.$el.querySelector("textarea").value = "";
            this.$el.querySelector(".emojionearea-editor").innerHTML = "";
            __WEBPACK_IMPORTED_MODULE_2__state_js__["a" /* default */].set('replyUser_id', null);
        },
        parseText: function parseText() {
            var message = this.$el.querySelector("textarea").value.trim().replace(new RegExp("@.*? "), "");
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
        var _this3 = this;

        if (!this.$el.querySelector('.emojionearea').emojioneArea) {
            $(this.$el.querySelector('.emojionearea')).emojioneArea({
                pickerPosition: "top",
                tonesStyle: "bullet",
                searchPlaceholder: "Search emoji",
                placeholder: "Add a comment...",
                autocomplete: false,
                saveEmojisAs: 'image'
            });
            $(this.$el).on("keypress", '.emojionearea-editor', function (event) {
                if (event.keyCode === 13) {
                    event.preventDefault();
                    event.stopImmediatePropagation();
                    event.target.blur();
                    _this3.publish();
                    return false;
                }
            });
        }
    },
    destroyed: function destroyed() {
        $(this.$el.querySelector(".emojionearea-editor")).unbind();
        $('.commentForm .emojionearea-editor').unbind("keypress");
    },

    watch: {
        replyUser: function replyUser(data) {
            if (data) {
                var last = this.$el.querySelector('.replyUser');
                if (last) last.remove();
                var elt = this.$el.querySelector('.emojionearea-editor');
                elt.focus();
                elt.innerHTML = '<span class="replyUser">@' + data.name + '_' + data.forename + '&nbsp;</span>' + elt.innerHTML;
                var range = document.createRange();
                range.selectNodeContents(elt);
                range.collapse(false);
                var sel = window.getSelection();
                sel.removeAllRanges();
                sel.addRange(range);
            }
        }
    }
});

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { class: _vm.emojiClass }, [
    _c("textarea", { staticClass: "emojionearea" })
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-0b6b5d2c", module.exports)
  }
}

/***/ }),
/* 101 */
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

/* harmony default export */ __webpack_exports__["default"] = ({
    props: {
        open: Boolean,
        message: String,
        url: String
    },
    data: function data() {
        return {
            dialog: false
        };
    },
    computed: {
        text: function text() {
            var text = [];
            JSON.parse(this.message).map(function (msg) {
                return text.push(msg.text);
            });
            return text.join('');
        }
    },
    methods: {
        popupCenter: function popupCenter(url, title, width, height) {
            var popupWidth = width || 640;
            var popupHeight = height || 320;
            var windowLeft = window.screenLeft || window.screenX;
            var windowTop = window.screenTop || window.screenY;
            var windowWidth = window.innerWidth || document.documentElement.clientWidth;
            var windowHeight = window.innerHeight || document.documentElement.clientHeight;
            var popupLeft = windowLeft + windowWidth / 2 - popupWidth / 2;
            var popupTop = windowTop + windowHeight / 2 - popupHeight / 2;
            var popup = window.open(url, title, 'scrollbars=yes, width=' + popupWidth + ', height=' + popupHeight + ', top=' + popupTop + ', left=' + popupLeft);
            popup.focus();
            return true;
        },
        twitter: function twitter() {
            var shareUrl = "https://twitter.com/intent/tweet?text=" + this.text + "&url=" + encodeURIComponent(this.url);
            this.popupCenter(shareUrl, "Share on Twitter");
        },
        facebook: function facebook() {
            var shareUrl = "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(this.url);
            this.popupCenter(shareUrl, "Share on facebook");
        }
    },
    watch: {
        open: function open(data) {
            if (data) this.dialog = true;
        },
        dialog: function dialog(data) {
            if (!data) this.$emit("close");
        }
    }
});

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-dialog",
    {
      attrs: { "max-width": "290" },
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
          _c("v-card-title", { staticClass: "headline" }, [
            _vm._v("Share the publication")
          ]),
          _vm._v(" "),
          _c("v-divider"),
          _vm._v(" "),
          _c(
            "v-container",
            { attrs: { "grid-list-md": "", "text-xs-left": "", fluid: "" } },
            [
              _c(
                "v-layout",
                { attrs: { column: "" } },
                [
                  _c("v-flex", [
                    _c(
                      "a",
                      { on: { click: _vm.facebook } },
                      [
                        _c("v-avatar", { attrs: { size: "32" } }, [
                          _c("img", {
                            attrs: {
                              src:
                                "https://www.gstatic.com/kpui/social/fb_32x32.png"
                            }
                          })
                        ]),
                        _vm._v(" Facebook")
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _c("v-flex", [
                    _c(
                      "a",
                      { on: { click: _vm.twitter } },
                      [
                        _c("v-avatar", { attrs: { size: "32" } }, [
                          _c("img", {
                            attrs: {
                              src:
                                "https://www.gstatic.com/kpui/social/twitter_32x32.png"
                            }
                          })
                        ]),
                        _vm._v(" Twitter")
                      ],
                      1
                    )
                  ])
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
    require("vue-hot-reload-api")      .rerender("data-v-9ea2bec0", module.exports)
  }
}

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(104);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(18)("109f3f29", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-76898650\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./DialogLike.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-76898650\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./DialogLike.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "\n.tabs__like .tabs__wrapper, .tabs__bar{\n    overflow: hidden;\n    height: 55px;\n}\n.tabs__like .tabs__container{\n    display: -webkit-box;\n}\n.tabs__like .tabs__items{\n    overflow-y: auto !important;\n    height: 490px !important;\n}\n.dialogLiketoolbar .toolbar__content{\n    height: auto !important;\n}\n", ""]);

// exports


/***/ }),
/* 105 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Liker_vue__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Liker_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Liker_vue__);
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
//
//
//
//
//
//
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
    components: { liker: __WEBPACK_IMPORTED_MODULE_0__Liker_vue___default.a },
    props: {
        article: Object,
        open: Boolean
    },
    data: function data() {
        return {
            reactions: [{ name: "love", className: "amo", type: 8 }, { name: "like", className: "gusta", type: 7 }, { name: "haha", className: "divierte", type: 6 }, { name: "wow", className: "asombro", type: 5 }, { name: "glad", className: "alegre", type: 4 }, { name: "brother", className: "asusta", type: 3 }, { name: "sad", className: "triste", type: 2 }, { name: "angry", className: "molesto", type: 1 }],
            dialog: false,
            ready: true,
            type: 8,
            loading: false
        };
    },
    computed: {
        user: function user() {
            return this.$store.state.user.user;
        },
        likes: function likes() {
            var _this = this;

            return this.$store.state.like.likes.filter(function (like) {
                return like.likable_id === _this.article.id && like.type === _this.type;
            });
        },
        end: function end() {
            var _this2 = this;

            return this.$store.state.query.queries.find(function (e) {
                return e.name === "dialogLike" && !e.next && e.type === _this2.type && e.id === _this2.article.id;
            });
        },
        query: function query() {
            var _this3 = this;

            return this.$store.state.query.queries.find(function (e) {
                return e.name === "dialogLike" && e.type === _this3.type && e.id === _this3.article.id;
            });
        }
    },
    methods: {
        loadMore: function loadMore(type) {
            var _this4 = this;

            if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
                if (!this.end && this.ready) {
                    this.ready = false;
                    this.loading = true;
                    this.$http.get(this.query.next).then(function (response) {
                        if (_typeof(response.body) === "object") {
                            var users = [];
                            response.body.data.map(function (article) {
                                users.push(article.user);
                                delete article.user;
                            });
                            _this4.$store.dispatch("like/save", response.body.data);
                            _this4.$store.dispatch("users/save", users);
                            _this4.$store.dispatch("query/save", { name: 'dialogLike', next: response.body.next_page_url, id: _this4.article.id, type: type });
                        }
                        _this4.ready = true;
                        _this4.loading = false;
                    });
                }
            }
        },
        load: function load(type) {
            var _this5 = this;

            this.type = type;
            this.dialog = true;
            if (!this.query && this.ready) {
                this.ready = false;
                this.loading = true;
                this.$http.get('/user/article/' + this.article.id + '/likers/' + type).then(function (response) {
                    if (Array.isArray(response.body.data)) {
                        var users = [];
                        response.body.data.map(function (like) {
                            users.push(like.user);
                            delete like.user;
                        });
                        _this5.$store.dispatch('like/save', response.body.data);
                        _this5.$store.dispatch("users/save", users);
                        _this5.$store.dispatch("query/save", { name: 'dialogLike', next: response.body.next_page_url, id: _this5.article.id, type: type });
                    }
                    _this5.loading = false;
                    _this5.ready = true;
                });
            }
        }
    },
    mounted: function mounted() {
        this.load(8);
    },

    watch: {
        open: function open(data) {
            if (data) this.dialog = true;
        },
        dialog: function dialog(data) {
            if (!data) this.$emit('close');
        }
    }
});

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(17)
/* script */
var __vue_script__ = __webpack_require__(107)
/* template */
var __vue_template__ = __webpack_require__(108)
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
Component.options.__file = "resources/assets/js/components/like/Liker.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-71dab2fa", Component.options)
  } else {
    hotAPI.reload("data-v-71dab2fa", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 107 */
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

/* harmony default export */ __webpack_exports__["default"] = ({
    props: {
        like: Object
    },
    computed: {
        liker: function liker() {
            var _this = this;

            return this.$store.state.users.users.find(function (user) {
                return user.id === _this.like.user_id;
            });
        },
        user: function user() {
            return this.$store.state.user.user;
        }
    },
    methods: {
        follow: function follow(user) {
            var _this2 = this;

            this.$set(user, "loadingSubs", true);
            if (user.followed) {
                this.$http.delete("user/subscription/" + user.followed.id).then(function (response) {
                    if (response.body.status === 1) {
                        _this2.$set(user, "loadingSubs", false);
                        _this2.$set(user, 'followed', null);
                        _this2.$store.dispatch('users/removeFollowing', _this2.user);
                    }
                });
            } else {
                this.$http.post('user/subscription', { receiver_id: user.id }).then(function (response) {
                    if (response.body.id) {
                        _this2.$store.dispatch('users/addFollowing', _this2.user);
                        _this2.$set(user, "loadingSubs", false);
                        _this2.$set(user, 'followed', response.body);
                    }
                });
            }
        }
    }
});

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-list-tile",
    {
      staticStyle: {
        display: "flex",
        "flex-wrap": "wrap",
        "justify-content": "center"
      },
      attrs: { to: "/user/profile/" + _vm.liker.id, avatar: "" }
    },
    [
      _c("v-list-tile-avatar", [
        _c("img", { attrs: { src: _vm.liker.avatar } })
      ]),
      _vm._v(" "),
      _c("v-list-tile-content", [
        _vm._v(
          "\n        " +
            _vm._s(_vm.liker.name + " " + _vm.liker.forename) +
            "\n    "
        )
      ]),
      _vm._v(" "),
      _c(
        "v-list-tile-action",
        [
          _vm.user.id !== _vm.liker.id
            ? _c(
                "v-btn",
                {
                  staticStyle: { width: "113px" },
                  attrs: {
                    slot: "activator",
                    loading: _vm.liker.loadingSubs,
                    color: _vm.liker.followed ? null : "primary",
                    outline: ""
                  },
                  on: {
                    click: function($event) {
                      $event.stopPropagation()
                      $event.preventDefault()
                      _vm.follow(_vm.liker)
                    }
                  },
                  slot: "activator"
                },
                [
                  !_vm.liker.followed
                    ? _c("v-icon", [_vm._v("person_add")])
                    : _vm._e(),
                  _vm._v(
                    _vm._s(_vm.liker.followed ? "Unfollow" : "Follow") +
                      "\n        "
                  )
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
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-71dab2fa", module.exports)
  }
}

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-dialog",
    {
      attrs: { scrollable: "", "max-width": "510px" },
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
            "v-toolbar",
            {
              staticClass: "dialogLiketoolbar",
              attrs: { dark: "", card: "", prominent: "" }
            },
            [
              _vm.loading
                ? _c("v-progress-linear", {
                    staticStyle: { margin: "0" },
                    attrs: { indeterminate: true }
                  })
                : _vm._e()
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-card-title",
            [
              _vm._v("Reactions "),
              _c("v-spacer"),
              _c(
                "span",
                {
                  on: {
                    click: function($event) {
                      _vm.dialog = false
                    }
                  }
                },
                [_vm._v("x")]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("v-divider"),
          _vm._v(" "),
          _c(
            "div",
            [
              _c(
                "v-tabs",
                {
                  staticClass: "tabs__like",
                  attrs: { fixed: "", centered: "" }
                },
                [
                  _c(
                    "v-tabs-bar",
                    { staticClass: "cyan", attrs: { dark: "" } },
                    [
                      _vm._l(_vm.reactions, function(reaction, i) {
                        return _c(
                          "v-tabs-item",
                          {
                            key: i,
                            attrs: { href: "#" + reaction.name, ripple: "" },
                            on: {
                              click: function($event) {
                                _vm.load(reaction.type)
                              }
                            }
                          },
                          [
                            _c("div", {
                              class: reaction.className,
                              staticStyle: { width: "48px", height: "48px" }
                            })
                          ]
                        )
                      }),
                      _vm._v(" "),
                      _c("v-tabs-slider", { attrs: { color: "yellow" } })
                    ],
                    2
                  ),
                  _vm._v(" "),
                  _c(
                    "v-tabs-items",
                    {
                      directives: [
                        {
                          name: "scroll",
                          rawName: "v-scroll",
                          value: { callback: this.loadMore },
                          expression: "{callback: this.loadMore}"
                        }
                      ],
                      staticClass: "overflow",
                      style:
                        _vm.$vuetify.breakpoint.smAndUp ||
                        "height:230px !important"
                    },
                    _vm._l(_vm.reactions, function(reaction, i) {
                      return _c(
                        "v-tabs-content",
                        { key: i, attrs: { id: reaction.name } },
                        [
                          _c(
                            "v-card",
                            { attrs: { flat: "" } },
                            [
                              _c(
                                "v-card-text",
                                [
                                  _c(
                                    "v-list",
                                    _vm._l(_vm.likes, function(like, i) {
                                      return _c("liker", {
                                        key: i,
                                        attrs: { like: like }
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
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-76898650", module.exports)
  }
}

/***/ }),
/* 110 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__CardFormEdit_vue__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__CardFormEdit_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__CardFormEdit_vue__);
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
    components: { cardFormEdit: __WEBPACK_IMPORTED_MODULE_0__CardFormEdit_vue___default.a },
    props: {
        open: Boolean,
        article: Object
    },
    data: function data() {
        return {
            dialog: false
        };
    },
    watch: {
        open: function open(data) {
            if (data) this.dialog = data;
        },
        dialog: function dialog(data) {
            if (!data) this.$emit('close');
        }
    }
});

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(112)
  __webpack_require__(114)
}
var normalizeComponent = __webpack_require__(17)
/* script */
var __vue_script__ = __webpack_require__(116)
/* template */
var __vue_template__ = __webpack_require__(117)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-7431ad54"
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
Component.options.__file = "resources/assets/js/components/card/CardFormEdit.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7431ad54", Component.options)
  } else {
    hotAPI.reload("data-v-7431ad54", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(113);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(18)("60ea1b2e", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7431ad54\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./CardFormEdit.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7431ad54\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./CardFormEdit.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "\n.noEmoji .emojionearea-button{\n    display: none;\n}\n.cardPublicationForm .emojionearea .emojionearea-editor{\n    text-align: left;\n    font-size: 30px;\n    color: black;\n    font-family: monospace;\n    min-height: 50px !important;\n    max-height: 300px !important;\n    background: transparent !important;\n    width:100%;\n    transition: font-size 1s;\n}\n.cardPublicationForm .emojionearea .emojionearea-button, .emojionearea-picker{\n    z-index: 1 !important;\n}\n.cardPublicationForm .card__text .emojionearea{\n    display: flex;\n    min-height: 50px !important;\n    font-size: 15px !important;\n    background-color: transparent;\n}\n.menuBloc .buttonColor{\n    cursor: pointer;\n    transition: transform .5s;\n    border-radius: 50%\n}\n.menuBloc .buttonColor:hover{\n    transform: scale(1.5)\n}\n.menuColor{\n    min-width: 250px !important;\n}\n", ""]);

// exports


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(115);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(18)("24903c54", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7431ad54\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=1&bustCache!./CardFormEdit.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7431ad54\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=1&bustCache!./CardFormEdit.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "\n.nbr-photos[data-v-7431ad54]{\n    position:absolute;\n    width: 100%;\n    height: 100%;\n    display:none;\n    background-color: rgba(0, 0, 0, .4);\n    text-align: center;\n    padding-top: 35%;\n    color: #fff;\n    border-radius: 4px;\n    font-size: 18px;\n}\ndiv:hover > .nbr-photos[data-v-7431ad54]{\n    display: block\n}\n.nbr-photos[data-v-7431ad54]:hover{\n    display: block\n}\n", ""]);

// exports


/***/ }),
/* 116 */
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
            box: null,
            color: "background1",
            hasColors: true,
            file: null,
            url: null,
            loading: false
        };
    },
    computed: {
        user: function user() {
            return this.$store.state.user.user;
        },
        darked: function darked() {
            return this.$store.state.setting.darked;
        },
        emojiClass: function emojiClass() {
            return [this.darked ? 'blockEmojionearea blackForm' : 'blockEmojionearea', !this.$vuetify.breakpoint.smAndUp ? ' noEmoji' : null].join(' ');
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
        publish: function publish() {
            var _this = this;

            var text = this.parseText();
            if (JSON.parse(text).length > 0 || this.file) {
                var formdata = new FormData();
                formdata.append("image", this.file);
                if (JSON.parse(text).length > 0) formdata.append("message", text);
                formdata.append("color", this.color);
                this.loading = true;
                this.$http.post("/user/article/" + this.article.id, formdata).then(function (response) {
                    if (response.body.id) {
                        _this.loading = false;
                        var user = response.body.user;
                        delete response.body.user;
                        if (_this.file) response.body.image.path += "?" + new Date().getTime();
                        _this.$store.dispatch('article/save', response.body);
                        _this.$store.dispatch('users/save', user);
                        _this.file = null;
                    }
                });
            }
        },
        parseText: function parseText() {
            var message = this.$el.querySelector("textarea").value.trim();
            var tableau = [];
            if (message.length > 0) {
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
            }
            return JSON.stringify(tableau);
        }
    },
    mounted: function mounted() {
        var _this2 = this;

        if (!this.$el.querySelector('.emojionearea').emojioneArea) {
            $(this.$el.querySelector('.emojionearea')).emojioneArea({
                pickerPosition: "right",
                tonesStyle: "bullet",
                searchPlaceholder: "Search emoji",
                autocomplete: false,
                saveEmojisAs: 'image'
            });
            if (this.article && this.article.id) {
                this.url = this.article.image ? this.article.image.path : null;
                if (this.url) this.hasColors = false;
                this.background(this.article.color);
                this.$nextTick(function () {
                    _this2.$el.querySelector('.emojionearea-editor').innerHTML = _this2.$el.querySelector('#messageHtml').innerHTML;
                });
            }
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
            }
        }
    }
});

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "cardPublicationForm" },
    [
      _c(
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
            [
              _vm._v("Edit the Publication "),
              _c("v-spacer"),
              _c(
                "span",
                {
                  on: {
                    click: function($event) {
                      _vm.$emit("switchDialog")
                    }
                  }
                },
                [_vm._v("x")]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("v-divider"),
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
                    { staticStyle: { width: "100px" }, attrs: { lg12: "" } },
                    [
                      _c("v-card-text", [
                        _c("div", { class: _vm.emojiClass }, [
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
                  _vm.$vuetify.breakpoint.smAndUp
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
                        [
                          _c("v-icon", [_vm._v("insert_photo")]),
                          _vm._v("Picture")
                        ],
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
                              slot: "activator"
                            },
                            [
                              _c("v-icon", [_vm._v("color_lens")]),
                              _vm._v("Color")
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "menuColor" },
                            [
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
                                        _vm._l(9, function(n) {
                                          return _c("v-flex", {
                                            key: n,
                                            class:
                                              n === 9
                                                ? "buttonColor backgroundSmall" +
                                                  n
                                                : "buttonColor background" + n,
                                            style:
                                              n === 1
                                                ? "cursor:pointer;border-radius:50%;background-color:#ddd !important"
                                                : "cursor:pointer;border-radius:50%;",
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
                        ],
                        1
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _c("v-spacer"),
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
                    [_vm._v("Edit")]
                  )
                ],
                1
              ),
              _vm._v(" "),
              !_vm.$vuetify.breakpoint.smAndUp
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
              _vm.url
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
                                  _vm.url = null
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
      ),
      _vm._v(" "),
      _vm.article.message
        ? _c(
            "div",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: false,
                  expression: "false"
                }
              ],
              attrs: { id: "messageHtml" }
            },
            _vm._l(JSON.parse(_vm.article.message), function(message, i) {
              return _c("span", { key: i }, [
                _vm._v(_vm._s(message.text)),
                message.url
                  ? _c("span", [
                      _c("img", {
                        staticStyle: {
                          "margin-bottom": "-5px",
                          height: "25px",
                          width: "25px"
                        },
                        attrs: { src: message.url }
                      })
                    ])
                  : _vm._e()
              ])
            })
          )
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
    require("vue-hot-reload-api")      .rerender("data-v-7431ad54", module.exports)
  }
}

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-dialog",
    {
      attrs: {
        width: _vm.$vuetify.breakpoint.smAndUp ? "50%" : "90%",
        "content-class": "overflow"
      },
      model: {
        value: _vm.dialog,
        callback: function($$v) {
          _vm.dialog = $$v
        },
        expression: "dialog"
      }
    },
    [
      _vm.dialog
        ? _c("card-form-edit", {
            attrs: { article: _vm.article },
            on: {
              switchDialog: function($event) {
                _vm.dialog = false
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
    require("vue-hot-reload-api")      .rerender("data-v-38312f8e", module.exports)
  }
}

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-layout",
    { attrs: { column: "" } },
    [
      _c(
        "v-flex",
        [
          _c(
            "v-card",
            [
              _c(
                "v-toolbar",
                { attrs: { color: !_vm.darked ? "white" : "theme--dark" } },
                [
                  _c(
                    "v-avatar",
                    {
                      staticStyle: {
                        "margin-left": "10px",
                        "margin-right": "10px"
                      },
                      attrs: { size: "40px" },
                      on: {
                        click: function($event) {
                          _vm.$router.push("user/profile/" + _vm.owner.id)
                        }
                      }
                    },
                    [
                      _c("img", {
                        attrs: { src: _vm.owner.avatar, alt: "avatar" }
                      })
                    ]
                  ),
                  _vm._v(" "),
                  _c("div", [
                    _vm._v(
                      "\n                    " +
                        _vm._s(
                          "  " +
                            _vm.owner.name +
                            " " +
                            _vm.owner.forename +
                            "  "
                        ) +
                        "\n                "
                    )
                  ]),
                  _vm._v(" "),
                  _c("v-spacer"),
                  _vm._v(" "),
                  _vm.user.id !== _vm.owner.id
                    ? _c(
                        "v-btn",
                        {
                          attrs: {
                            loading: _vm.owner.loadingSubs,
                            color: _vm.owner.followed ? null : "primary",
                            outline: ""
                          },
                          on: {
                            click: function($event) {
                              $event.stopPropagation()
                              $event.preventDefault()
                              _vm.follow(_vm.owner)
                            }
                          }
                        },
                        [
                          !_vm.owner.followed
                            ? _c("v-icon", [_vm._v("person_add")])
                            : _vm._e(),
                          _vm._v(
                            _vm._s(_vm.owner.followed ? "Unfollow" : "Follow") +
                              "\n                "
                          )
                        ],
                        1
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _c(
                    "v-menu",
                    [
                      _c(
                        "v-btn",
                        {
                          attrs: { slot: "activator", flat: "", icon: "" },
                          slot: "activator"
                        },
                        [_c("v-icon", [_vm._v("more_vert")])],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-list",
                        [
                          _c(
                            "v-list-tile",
                            { on: { click: _vm.copie } },
                            [
                              _c(
                                "v-list-tile-action",
                                [_c("v-icon", [_vm._v("link")])],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-list-tile-content",
                                [
                                  _c("v-list-tile-title", [
                                    _vm._v("copie the link")
                                  ])
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-list-tile",
                            {
                              on: {
                                click: function($event) {
                                  _vm.openDialogShare = true
                                }
                              }
                            },
                            [
                              _c(
                                "v-list-tile-action",
                                [_c("v-icon", [_vm._v("share")])],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-list-tile-content",
                                [_c("v-list-tile-title", [_vm._v("Share")])],
                                1
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _vm.user.id === _vm.owner.id
                            ? _c(
                                "v-list-tile",
                                {
                                  on: {
                                    click: function($event) {
                                      _vm.dialogFormEdit = true
                                    }
                                  }
                                },
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
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _c(
                            "v-list-tile",
                            { on: { click: _vm.masquer } },
                            [
                              _c(
                                "v-list-tile-action",
                                [_c("v-icon", [_vm._v("cancel")])],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-list-tile-content",
                                [_c("v-list-tile-title", [_vm._v("Hide")])],
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
                                [_c("v-list-tile-title", [_vm._v("Signal")])],
                                1
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _vm.user.id === _vm.owner.id
                            ? _c(
                                "v-list-tile",
                                { on: { click: _vm.destroy } },
                                [
                                  _c(
                                    "v-list-tile-action",
                                    [_c("v-icon", [_vm._v("delete")])],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-list-tile-content",
                                    [
                                      _c("v-list-tile-title", [
                                        _vm._v("Delete")
                                      ])
                                    ],
                                    1
                                  )
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
              ),
              _vm._v(" "),
              _c("v-divider"),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticStyle: {
                    padding: "10px",
                    "overflow-x": "hidden",
                    "overflow-y": "auto",
                    height: "410px"
                  },
                  attrs: { id: "comments" }
                },
                [
                  _c("div", { staticStyle: { "margin-bottom": "10px" } }, [
                    _vm.article.image
                      ? _c(
                          "div",
                          {
                            staticStyle: {
                              width: "100%",
                              "text-align": "left",
                              color: "rgb(97, 97, 97)"
                            }
                          },
                          [
                            _c("b", { staticStyle: { color: "black" } }, [
                              _vm._v(
                                _vm._s(
                                  _vm.owner.name + " " + _vm.owner.forename
                                )
                              )
                            ]),
                            _vm._v(" "),
                            _vm._l(JSON.parse(_vm.article.message), function(
                              message,
                              i
                            ) {
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
                          ],
                          2
                        )
                      : _vm._e()
                  ]),
                  _vm._v(" "),
                  _c("comments", {
                    attrs: { article: _vm.article, open: _vm.open }
                  })
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
      _c("v-flex", [
        _c(
          "div",
          {
            staticStyle: {
              display: "flex",
              "justify-content": "space-between",
              "align-items": "center"
            }
          },
          [
            _c(
              "v-menu",
              {
                staticStyle: { "font-size": "16px" },
                attrs: {
                  "open-on-hover": true,
                  "close-on-content-click": true,
                  "nudge-left": 133,
                  "nudge-top": 103,
                  origin: "center center",
                  transition: "scale-transition",
                  "offset-y": "",
                  "offset-x": "",
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
                              class: "Selector selectorFace " + _vm.facemotion,
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
                            attrs: { flat: "", icon: "" },
                            nativeOn: {
                              click: function($event) {
                                _vm.like($event, "amo")
                              }
                            }
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
            _c(
              "div",
              { staticStyle: { "margin-right": "10px" } },
              [
                _c("timeago", {
                  attrs: {
                    since: _vm.article.created_at,
                    "auto-update": 61,
                    "max-time": 86400 * 365
                  }
                })
              ],
              1
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticStyle: {
              display: "flex",
              "justify-content": "space-between",
              "margin-left": "10px",
              "margin-right": "10px"
            }
          },
          [
            _c("div", [
              _vm._v(_vm._s(_vm.article.likes_count) + " "),
              _c(
                "a",
                {
                  on: {
                    click: function($event) {
                      _vm.openDialogLike = true
                    }
                  }
                },
                [
                  _vm._v(
                    _vm._s(_vm.plural("Reaction", _vm.article.likes_count))
                  )
                ]
              )
            ]),
            _c("div", [
              _vm._v(_vm._s(_vm.article.comments_count) + " "),
              _c("a", [
                _vm._v(
                  _vm._s(_vm.plural("Comment", _vm.article.comments_count))
                )
              ])
            ])
          ]
        )
      ]),
      _vm._v(" "),
      _c(
        "v-flex",
        [_c("comment-form", { attrs: { article: _vm.article } })],
        1
      ),
      _vm._v(" "),
      _c("dialog-share", {
        attrs: {
          open: _vm.openDialogShare,
          url: _vm.urlArticle(_vm.article.id, _vm.article.user_id)
        },
        on: {
          close: function($event) {
            _vm.openDialogShare = false
          }
        }
      }),
      _vm._v(" "),
      _vm.openDialogLike
        ? _c("dialog-like", {
            attrs: { open: _vm.openDialogLike, article: _vm.article },
            on: {
              close: function($event) {
                _vm.openDialogLike = !_vm.openDialogLike
              }
            }
          })
        : _vm._e(),
      _vm._v(" "),
      _c("dialog-form-edit", {
        attrs: { article: _vm.article, open: _vm.dialogFormEdit },
        on: {
          close: function($event) {
            _vm.dialogFormEdit = false
          }
        }
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
    require("vue-hot-reload-api")      .rerender("data-v-3d827913", module.exports)
  }
}

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(121)
}
var normalizeComponent = __webpack_require__(17)
/* script */
var __vue_script__ = __webpack_require__(123)
/* template */
var __vue_template__ = __webpack_require__(124)
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
Component.options.__file = "resources/assets/js/components/comment/DialogComment.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1e39b320", Component.options)
  } else {
    hotAPI.reload("data-v-1e39b320", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(122);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(18)("c8046136", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1e39b320\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./DialogComment.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1e39b320\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./DialogComment.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "\n.notSpace{\n    padding: 0 !important;\n    margin: 0 !important;\n}\n.dialog--active{\n    overflow: hidden;\n}\n.carousel_item{\n    position: relative !important\n}\n", ""]);

// exports


/***/ }),
/* 123 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ArticleBox_vue__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ArticleBox_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__ArticleBox_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__CommentBox_vue__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__CommentBox_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__CommentBox_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__state__ = __webpack_require__(70);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    components: { articleBox: __WEBPACK_IMPORTED_MODULE_0__ArticleBox_vue___default.a, commentBox: __WEBPACK_IMPORTED_MODULE_1__CommentBox_vue___default.a },
    props: {
        open: Boolean,
        article: Object,
        articles: Array
    },
    data: function data() {
        return {
            dialog: false,
            index: -1,
            store: __WEBPACK_IMPORTED_MODULE_2__state__["a" /* default */].state
        };
    },
    computed: {
        loading: function loading() {
            return this.store.loading;
        }
    },
    watch: {
        open: function open(data) {
            if (data) {
                this.index = this.articles.indexOf(this.article);
                this.dialog = data;
            }
        },
        dialog: function dialog(data) {
            if (!data) {
                this.$emit('close');
            }
        },
        article: function article(_article) {
            this.index = this.articles.indexOf(_article);
        },
        index: function index(_index) {
            this.$scrollTo('#article' + this.articles[_index].id, 10, { container: 'body' });
        }
    }
});

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.open
    ? _c(
        "v-layout",
        { attrs: { row: "", "justify-center": "" } },
        [
          _c(
            "v-dialog",
            {
              attrs: { width: "935px" },
              model: {
                value: _vm.dialog,
                callback: function($$v) {
                  _vm.dialog = $$v
                },
                expression: "dialog"
              }
            },
            [
              _vm.loading
                ? _c("v-progress-linear", {
                    staticStyle: { margin: "0" },
                    attrs: { indeterminate: true }
                  })
                : _vm._e(),
              _vm._v(" "),
              _c(
                "v-carousel",
                {
                  staticStyle: {
                    position: "inherit",
                    height: "597px",
                    background: "transparent"
                  },
                  attrs: {
                    cycle: false,
                    "hide-controls": _vm.articles.length < 2,
                    "hide-delimiters": ""
                  },
                  model: {
                    value: _vm.index,
                    callback: function($$v) {
                      _vm.index = $$v
                    },
                    expression: "index"
                  }
                },
                _vm._l(_vm.articles, function(article, i) {
                  return _c(
                    "v-carousel-item",
                    {
                      key: i,
                      staticClass: "carousel_item",
                      attrs: { src: " " }
                    },
                    [
                      i === _vm.index
                        ? _c(
                            "v-card",
                            {
                              staticStyle: { width: "935px" },
                              attrs: { height: "600px" }
                            },
                            [
                              _c(
                                "v-container",
                                {
                                  staticClass: "notSpace",
                                  staticStyle: { overflow: "hidden" },
                                  attrs: { "grid-list-md": "" }
                                },
                                [
                                  _c(
                                    "v-layout",
                                    {
                                      staticClass: "notSpace",
                                      attrs: { row: "" }
                                    },
                                    [
                                      _c(
                                        "v-flex",
                                        {
                                          staticClass: "notSpace",
                                          attrs: { lg7: "" }
                                        },
                                        [
                                          _c("article-box", {
                                            attrs: { article: article }
                                          })
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-flex",
                                        {
                                          staticClass: "notSpace",
                                          attrs: { lg5: "" }
                                        },
                                        [
                                          _c("comment-box", {
                                            attrs: {
                                              open: _vm.open,
                                              article: article
                                            }
                                          })
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
                        : _vm._e()
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
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-1e39b320", module.exports)
  }
}

/***/ }),
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__comment_DialogComment_vue__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__comment_DialogComment_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__comment_DialogComment_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actu_Card_vue__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actu_Card_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__actu_Card_vue__);
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



/* harmony default export */ __webpack_exports__["default"] = ({
    components: { actuCard: __WEBPACK_IMPORTED_MODULE_1__actu_Card_vue___default.a, dialogComment: __WEBPACK_IMPORTED_MODULE_0__comment_DialogComment_vue___default.a },
    data: function data() {
        return {
            ready: true,
            actuality: {},
            openDialogComment: false
        };
    },
    computed: {
        end: function end() {
            return this.$store.state.query.queries.find(function (e) {
                return e.name === "actu" && !e.next;
            });
        },
        query: function query() {
            return this.$store.state.query.queries.find(function (e) {
                return e.name === "actu";
            });
        },
        actualities: function actualities() {
            return this.$store.state.article.articles.filter(function (article) {
                return article.type === "actuality";
            });
        },
        scrollTop: function scrollTop() {
            var scroll = this.$store.state.setting.scrollTops.find(function (e) {
                return e.name === "actuality";
            }) || {};
            return scroll.scrollTop;
        }
    },
    methods: {
        loadMore: function loadMore() {
            var _this = this;

            if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 600) {
                if (!this.end && this.ready) {
                    this.ready = false;
                    this.$store.dispatch('setting/setLoading', true);
                    this.$http.get(this.query.next).then(function (response) {
                        if (_typeof(response.body) === "object") {
                            _this.$store.dispatch("article/save", response.body.data);
                            _this.$store.dispatch("query/save", { name: 'actu', next: response.body.next_page_url });
                        }
                        _this.$store.dispatch('setting/setLoading', false);
                        _this.ready = true;
                    });
                }
            }
        },
        load: function load() {
            var _this2 = this;

            if (!this.query && this.ready) {
                this.ready = false;
                this.$store.dispatch('setting/setLoading', true);
                this.$http.get('/user/actuality').then(function (response) {
                    if (_typeof(response.body) === "object") {
                        _this2.$store.dispatch("article/save", response.body.data);
                        _this2.$store.dispatch("query/save", { name: 'actu', next: response.body.next_page_url });
                    }
                    _this2.$store.dispatch('setting/setLoading', false);
                    _this2.ready = true;
                });
            }
        },
        openComment: function openComment(actuality) {
            this.openDialogComment = true;
            this.actuality = actuality;
        }
    },
    mounted: function mounted() {
        this.load();
        document.body.scrollTop = this.scrollTop;
    },
    destroyed: function destroyed() {
        this.$store.dispatch('setting/addScrollTop', { scrollTop: document.body.scrollTop, name: "actuality" });
    }
});

/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(17)
/* script */
var __vue_script__ = __webpack_require__(184)
/* template */
var __vue_template__ = __webpack_require__(185)
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
Component.options.__file = "resources/assets/js/components/user/actu/Card.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-643f502f", Component.options)
  } else {
    hotAPI.reload("data-v-643f502f", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 184 */
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

/* harmony default export */ __webpack_exports__["default"] = ({
    props: {
        actuality: Object
    },
    data: function data() {
        return {
            show: false
        };
    },
    methods: {
        like: function like() {
            var _this = this;

            this.$http.get('user/article/' + this.actuality.id + '/like/8').then(function (response) {
                if (response.body.id) {
                    _this.$store.dispatch('actuality/addLike', { actuality: _this.actuality, like: response.body });
                }
            });
        },
        deleteLike: function deleteLike() {
            var _this2 = this;

            this.$http.delete('user/article/' + this.actuality.id + '/like').then(function (response) {
                if (response.body.status === 1) {
                    _this2.$store.dispatch('article/deleteLike', { actuality: _this2.actuality });
                }
            });
        }
    }

});

/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-card",
    [
      _vm.actuality.image
        ? _c("v-card-media", {
            attrs: { src: _vm.actuality.image.path, height: "300px" }
          })
        : _vm._e(),
      _vm._v(" "),
      _c("v-card-title", { attrs: { "primary-title": "" } }, [
        _c("div", [
          _c("div", { staticClass: "headline" }, [
            _vm._v(_vm._s(_vm.actuality.title))
          ]),
          _vm._v(" "),
          _vm.actuality.image
            ? _c(
                "span",
                { staticClass: "grey--text" },
                [
                  _c("timeago", {
                    attrs: {
                      since: _vm.actuality.published_at,
                      "auto-update": 61,
                      "max-time": 86400 * 365
                    }
                  })
                ],
                1
              )
            : _vm._e()
        ])
      ]),
      _vm._v(" "),
      !_vm.actuality.image
        ? _c("v-card-text", [
            _vm._v(
              "\n        " +
                _vm._s(JSON.parse(_vm.actuality.message)[0].text) +
                "\n    "
            )
          ])
        : _vm._e(),
      _vm._v(" "),
      !_vm.actuality.image
        ? _c(
            "span",
            {
              staticClass: "grey--text",
              staticStyle: {
                "text-align": "left",
                width: "100%",
                display: "block",
                "padding-left": "17px"
              }
            },
            [
              _c("timeago", {
                attrs: {
                  since: _vm.actuality.published_at,
                  "auto-update": 61,
                  "max-time": 86400 * 365
                }
              })
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _c(
        "v-card-actions",
        [
          _c(
            "div",
            [
              _vm.actuality.liked
                ? _c(
                    "v-btn",
                    {
                      staticStyle: { color: "red" },
                      attrs: { icon: "", flat: "" },
                      nativeOn: {
                        click: function($event) {
                          _vm.deleteLike($event)
                        }
                      }
                    },
                    [_c("v-icon", [_vm._v("favorite")])],
                    1
                  )
                : _c(
                    "v-btn",
                    {
                      attrs: { icon: "", flat: "" },
                      nativeOn: {
                        click: function($event) {
                          _vm.like($event)
                        }
                      }
                    },
                    [_c("v-icon", [_vm._v("favorite_border")])],
                    1
                  )
            ],
            1
          ),
          _vm._v(" "),
          !_vm.actuality.image ? _c("v-spacer") : _vm._e(),
          _vm._v(" "),
          _c(
            "v-btn",
            { attrs: { icon: "", flat: "" } },
            [_c("v-icon", [_vm._v("comment")])],
            1
          ),
          _vm._v(" "),
          _vm.actuality.image ? _c("v-spacer") : _vm._e(),
          _vm._v(" "),
          _vm.actuality.image
            ? _c(
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
                      _vm._s(
                        _vm.show ? "keyboard_arrow_down" : "keyboard_arrow_up"
                      )
                    )
                  ])
                ],
                1
              )
            : _vm._e()
        ],
        1
      ),
      _vm._v(" "),
      _vm.actuality.image
        ? _c(
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
                    "\n            " +
                      _vm._s(JSON.parse(_vm.actuality.message)[0].text) +
                      "\n        "
                  )
                ]
              )
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _c(
        "v-card-actions",
        [
          _vm._v("\n            " + _vm._s(_vm.actuality.likes_count) + " "),
          _c(
            "a",
            {
              on: {
                click: function($event) {
                  _vm.$emit("like", _vm.actuality)
                }
              }
            },
            [_vm._v(_vm._s(_vm.plural("Reaction", _vm.actuality.likes_count)))]
          ),
          _vm._v(" "),
          _c("v-spacer"),
          _vm._v("\n        " + _vm._s(_vm.actuality.comments_count) + " "),
          _c(
            "a",
            {
              on: {
                click: function($event) {
                  _vm.$emit("comment", _vm.actuality)
                }
              }
            },
            [
              _vm._v(
                _vm._s(_vm.plural("Comment", _vm.actuality.comments_count))
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
    require("vue-hot-reload-api")      .rerender("data-v-643f502f", module.exports)
  }
}

/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
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
            { attrs: { "grid-list-md": "", "text-xs-center": "", fluid: "" } },
            [
              _c(
                "v-layout",
                {
                  directives: [
                    {
                      name: "scroll",
                      rawName: "v-scroll",
                      value: { callback: this.loadMore },
                      expression: "{callback: this.loadMore}"
                    }
                  ],
                  attrs: { column: "" }
                },
                [
                  _c("v-flex", { attrs: { lg12: "" } }),
                  _vm._v(" "),
                  _vm._l(_vm.actualities, function(actuality, i) {
                    return _c(
                      "v-flex",
                      { key: i, attrs: { lg12: "" } },
                      [
                        _c("actu-card", {
                          attrs: { actuality: actuality },
                          on: { comment: _vm.openComment }
                        })
                      ],
                      1
                    )
                  }),
                  _vm._v(" "),
                  _c("dialog-comment", {
                    attrs: {
                      open: _vm.openDialogComment,
                      article: _vm.actuality,
                      articles: _vm.actualities
                    },
                    on: {
                      close: function($event) {
                        _vm.openDialogComment = !_vm.openDialogComment
                      }
                    }
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
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-1d3d6300", module.exports)
  }
}

/***/ })
]));