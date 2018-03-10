webpackJsonp([6],Array(68).concat([
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_env_modules_false_targets_browsers_last_2_versions_safari_7_debug_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_syntax_dynamic_import_node_modules_vue_loader_lib_selector_type_script_index_0_User_vue__ = __webpack_require__(190);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_43998c28_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_User_vue__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(3);
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(289)
  __webpack_require__(291)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-43998c28"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_env_modules_false_targets_browsers_last_2_versions_safari_7_debug_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_syntax_dynamic_import_node_modules_vue_loader_lib_selector_type_script_index_0_User_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_43998c28_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_User_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_43998c28_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_User_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/user/User.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-43998c28", Component.options)
  } else {
    hotAPI.reload("data-v-43998c28", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */
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
/* 104 */,
/* 105 */,
/* 106 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
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
            try {
                JSON.parse(this.message).map(function (msg) {
                    return text.push(msg.text);
                });
                return text.join('');
            } catch (e) {
                return this.message || '';
            }
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
/* 107 */
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
        },
        name: function name() {
            return this.article.type ? this.article.type : 'article';
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
            if (emoticon) {
                this.$http.get('user/' + this.name + '/' + this.article.id + '/like/' + emoticon.type).then(function (response) {
                    if (response.body.id) {
                        _this4.$store.dispatch("like/save", response.body);
                        _this4.$store.dispatch(_this4.name + '/addLike', { article: _this4.article, like: response.body });
                    }
                });
            }
        },
        deleteLike: function deleteLike() {
            var _this5 = this;

            if (this.article.liked && this.article.liked.id) {
                this.$http.delete('user/' + this.name + '/' + this.article.id + '/like').then(function (response) {
                    if (response.body.status === 1) {
                        _this5.$store.dispatch("like/delete", _this5.article.liked);
                        _this5.$store.dispatch(_this5.name + '/deleteLike', { article: _this5.article });
                    }
                });
            }
        },
        follow: function follow(user) {
            var _this6 = this;

            this.$set(user, "loadingSubs", true);
            if (user.followed) {
                this.$http.get("user/unfollow/" + user.id).then(function (response) {
                    if (response.body.status === 1) {
                        _this6.$set(user, "loadingSubs", false);
                        _this6.$set(user, "followed", null);
                        user.followers_count--;
                    }
                });
            } else {
                this.$http.post('user/subscription', { receiver_id: user.id }).then(function (response) {
                    if (response.body.id) {
                        _this6.$set(user, "followed", response.body);
                        user.followers_count++;
                        _this6.$set(user, "loadingSubs", false);
                    }
                });
            }
        },
        masquer: function masquer() {
            this.$store.dispatch(this.name + "/delete", { id: this.article.id });
        },
        destroy: function destroy() {
            var _this7 = this;

            this.loading = true;
            this.$http.delete('user/' + this.name + '/' + this.article.id).then(function (response) {
                if (response.body.status === 1) {
                    _this7.$store.dispatch(_this7.name + '/delete', _this7.article);
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
            textarea.blur();
        }
    }
});

/***/ }),
/* 108 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_env_modules_false_targets_browsers_last_2_versions_safari_7_debug_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_syntax_dynamic_import_node_modules_vue_loader_lib_selector_type_script_index_0_DialogShare_vue__ = __webpack_require__(106);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_9ea2bec0_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_DialogShare_vue__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(3);
var disposed = false
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_env_modules_false_targets_browsers_last_2_versions_safari_7_debug_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_syntax_dynamic_import_node_modules_vue_loader_lib_selector_type_script_index_0_DialogShare_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_9ea2bec0_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_DialogShare_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_9ea2bec0_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_DialogShare_vue__["b" /* staticRenderFns */],
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

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 109 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixin_cardMixin__ = __webpack_require__(107);
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
    props: {
        article: Object
    },
    mounted: function mounted() {}
});

/***/ }),
/* 110 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Comments_vue__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__CommentForm_vue__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mixin_cardMixin__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__share_DialogShare_vue__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__like_DialogLike_vue__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__card_DialogFormEdit_vue__ = __webpack_require__(121);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ __webpack_exports__["a"] = ({
    components: { commentForm: __WEBPACK_IMPORTED_MODULE_1__CommentForm_vue__["a" /* default */], comments: __WEBPACK_IMPORTED_MODULE_0__Comments_vue__["a" /* default */], dialogShare: __WEBPACK_IMPORTED_MODULE_3__share_DialogShare_vue__["a" /* default */], dialogLike: __WEBPACK_IMPORTED_MODULE_4__like_DialogLike_vue__["a" /* default */], dialogFormEdit: __WEBPACK_IMPORTED_MODULE_5__card_DialogFormEdit_vue__["a" /* default */] },
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
/* 111 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Comment_vue__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__state__ = __webpack_require__(103);
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



/* harmony default export */ __webpack_exports__["a"] = ({
    components: { comment: __WEBPACK_IMPORTED_MODULE_0__Comment_vue__["a" /* default */] },
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
                return comment.commentable_id === _this.article.id && comment.commentable_type === _this.commentableType;
            });
        },
        end: function end() {
            var _this2 = this;

            return this.$store.state.query.queries.find(function (e) {
                return e.name === "comment" + _this2.name && !e.next && e.id === _this2.article.id;
            });
        },
        query: function query() {
            var _this3 = this;

            return this.$store.state.query.queries.find(function (e) {
                return e.name === "comment" + _this3.name && e.id === _this3.article.id;
            });
        },
        user: function user() {
            return this.$store.state.user.user;
        },
        name: function name() {
            return this.article.type ? this.article.type : 'article';
        },
        commentableType: function commentableType() {
            return "App\\" + this.name[0].toUpperCase() + this.name.substring(1);
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
                        _this4.$store.dispatch("query/save", { name: 'comment' + _this4.name, next: response.body.next_page_url, id: _this4.article.id });
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
                this.$http.get('/user/' + this.name + '/' + this.article.id + '/comment').then(function (response) {
                    if (response.body && _typeof(response.body.data) === "object") {
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
                        _this5.$store.dispatch("query/save", { name: 'comment' + _this5.name, next: response.body.next_page_url, id: _this5.article.id });
                        _this5.$nextTick(function () {
                            _this5.$scrollTo('#showComment', 1000, { container: '#comments' });
                        });
                    }
                    __WEBPACK_IMPORTED_MODULE_1__state__["a" /* default */].set('loading', false);
                    _this5.ready = true;
                });
            } else {
                this.$nextTick(function () {
                    _this5.$scrollTo('#showComment', 1000, { container: '#comments' });
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

            alert(document.querySelector('#showComment'));
            if (data === true) {
                this.$nextTick(function () {
                    _this6.$scrollTo('#showComment', 1000, { container: '#comments' });
                });
            }
        }
    }
});

/***/ }),
/* 112 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__state__ = __webpack_require__(103);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
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
        },
        name: function name() {
            return this.article.type ? this.article.type : 'article';
        }
    },
    methods: {
        reply: function reply() {
            __WEBPACK_IMPORTED_MODULE_0__state__["a" /* default */].set("replyUser_id", this.owner.id);
        },
        destroy: function destroy() {
            var _this3 = this;

            this.loading = true;
            this.$http.delete('user/' + this.name + '/' + this.comment.commentable_id + '/comment/' + this.comment.id).then(function (response) {
                if (response.body.status === 1) {
                    _this3.$store.dispatch('comment/delete', _this3.comment);
                    _this3.$store.dispatch(_this3.name + '/deleteComment', _this3.article);
                }
                _this3.loading = false;
                _this3.commentDelete = false;
            });
        },
        like: function like() {
            var _this4 = this;

            __WEBPACK_IMPORTED_MODULE_0__state__["a" /* default */].set('loading', true);
            this.$http.get('user/' + this.name + '/' + this.comment.commentable_id + '/comment/' + this.comment.id + '/like/' + 8).then(function (response) {
                if (response.body.id) {
                    _this4.$store.dispatch('comment/addLike', { comment: _this4.comment, like: response.body });
                }
                __WEBPACK_IMPORTED_MODULE_0__state__["a" /* default */].set('loading', false);
            });
        },
        deleteLike: function deleteLike() {
            var _this5 = this;

            __WEBPACK_IMPORTED_MODULE_0__state__["a" /* default */].set('loading', true);
            this.$http.delete('user/' + this.name + '/' + this.comment.commentable_id + '/comment/' + this.comment.id + '/like/').then(function (response) {
                if (response.body.status === 1) {
                    _this5.$store.dispatch('comment/deleteLike', { comment: _this5.comment });
                }
                __WEBPACK_IMPORTED_MODULE_0__state__["a" /* default */].set('loading', false);
            });
        }
    }
});

/***/ }),
/* 113 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__state_js__ = __webpack_require__(103);
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
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
        },
        name: function name() {
            return this.article.type ? this.article.type : 'article';
        }
    },
    data: function data() {
        return {
            store: __WEBPACK_IMPORTED_MODULE_0__state_js__["a" /* default */].state
        };
    },

    methods: {
        publish: function publish() {
            var _this2 = this;

            var message = this.parseText();
            if (JSON.parse(message).length > 0) {
                var data = { message: message, user_id: this.user.id };
                var elt = this.$el.querySelector('.emojionearea-editor').querySelector('.replyUser');
                if (elt && elt.innerText.trim().length > 1 && this.store.replyUser_id) {
                    data['comment_id'] = this.store.replyUser_id;
                }
                __WEBPACK_IMPORTED_MODULE_0__state_js__["a" /* default */].set('loading', true);
                this.$http.post("/user/" + this.name + "/" + this.article.id + "/comment", data).then(function (response) {
                    if (response.body.id) {
                        _this2.clear();
                        var replyUser = response.body.replyed_user;
                        delete response.body.replyed_user;
                        _this2.$store.dispatch('comment/save', response.body);
                        if (replyUser) _this2.$store.dispatch('users/save', replyUser);
                        _this2.$store.dispatch(_this2.name + '/addComment', _this2.article);
                        _this2.$store.dispatch('comment/scrollTo', response.body.id);
                        _this2.$nextTick(function () {
                            _this2.$scrollTo('#showComment', 500, { container: '#comments' });
                        });
                    }
                    __WEBPACK_IMPORTED_MODULE_0__state_js__["a" /* default */].set('loading', false);
                });
            } else {
                this.$el.querySelector(".emojionearea-editor").innerHTML = "";
            }
        },
        clear: function clear() {
            this.$el.querySelector("textarea").value = "";
            this.$el.querySelector(".emojionearea-editor").innerHTML = "";
            __WEBPACK_IMPORTED_MODULE_0__state_js__["a" /* default */].set('replyUser_id', null);
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
        this.clear();
    },

    watch: {
        replyUser: function replyUser(data) {
            if (data) {
                var last = this.$el.querySelector('.replyUser');
                if (last) last.remove();
                var elt = this.$el.querySelector('.emojionearea-editor');
                elt.focus();
                elt.insertAdjacentHTML('afterbegin', '<span class="replyUser">@' + data.name + '_' + data.forename + '&nbsp;</span><br>');
                console.log(elt.innerHTML);
                var range = document.createRange();
                range.selectNodeContents(elt);
                range.collapse(false);
                var sel = window.getSelection();
                sel.removeAllRanges();
                sel.addRange(range);
                console.log(elt);
            }
        }
    }
});

/***/ }),
/* 114 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Liker_vue__ = __webpack_require__(145);
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
//


/* harmony default export */ __webpack_exports__["a"] = ({
    components: { liker: __WEBPACK_IMPORTED_MODULE_0__Liker_vue__["a" /* default */] },
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
                return like.likable_id === _this.article.id && like.type === _this.type && like.likable_type === _this.likableType;
            });
        },
        end: function end() {
            var _this2 = this;

            return this.$store.state.query.queries.find(function (e) {
                return e.name === "dialogLike" + _this2.name && !e.next && e.type === _this2.type && e.id === _this2.article.id;
            });
        },
        query: function query() {
            var _this3 = this;

            return this.$store.state.query.queries.find(function (e) {
                return e.name === "dialogLike" + _this3.name && e.type === _this3.type && e.id === _this3.article.id;
            });
        },
        name: function name() {
            return this.article.type ? this.article.type : 'article';
        },
        likableType: function likableType() {
            return "App\\" + this.name[0].toUpperCase() + this.name.substring(1);
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
                            _this4.$store.dispatch("query/save", { name: 'dialogLike' + _this4.name, next: response.body.next_page_url, id: _this4.article.id, type: type });
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
                this.$http.get('/user/' + this.name + '/' + this.article.id + '/likers/' + type).then(function (response) {
                    if (Array.isArray(response.body.data)) {
                        var users = [];
                        response.body.data.map(function (like) {
                            users.push(like.user);
                            delete like.user;
                        });
                        _this5.$store.dispatch('like/save', response.body.data);
                        _this5.$store.dispatch("users/save", users);
                        _this5.$store.dispatch("query/save", { name: 'dialogLike' + _this5.name, next: response.body.next_page_url, id: _this5.article.id, type: type });
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
/* 115 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
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
/* 116 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__CardFormEdit_vue__ = __webpack_require__(148);
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
    components: { cardFormEdit: __WEBPACK_IMPORTED_MODULE_0__CardFormEdit_vue__["a" /* default */] },
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
/* 117 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
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
                placeholder: "What's up?",
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
/* 118 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_env_modules_false_targets_browsers_last_2_versions_safari_7_debug_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_syntax_dynamic_import_node_modules_vue_loader_lib_selector_type_script_index_0_Comments_vue__ = __webpack_require__(111);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3fa623db_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Comments_vue__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(3);
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(131)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-3fa623db"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_env_modules_false_targets_browsers_last_2_versions_safari_7_debug_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_syntax_dynamic_import_node_modules_vue_loader_lib_selector_type_script_index_0_Comments_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3fa623db_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Comments_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3fa623db_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Comments_vue__["b" /* staticRenderFns */],
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

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 119 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_env_modules_false_targets_browsers_last_2_versions_safari_7_debug_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_syntax_dynamic_import_node_modules_vue_loader_lib_selector_type_script_index_0_CommentForm_vue__ = __webpack_require__(113);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0b6b5d2c_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_CommentForm_vue__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(3);
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(140)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_env_modules_false_targets_browsers_last_2_versions_safari_7_debug_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_syntax_dynamic_import_node_modules_vue_loader_lib_selector_type_script_index_0_CommentForm_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0b6b5d2c_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_CommentForm_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0b6b5d2c_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_CommentForm_vue__["b" /* staticRenderFns */],
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

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 120 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_env_modules_false_targets_browsers_last_2_versions_safari_7_debug_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_syntax_dynamic_import_node_modules_vue_loader_lib_selector_type_script_index_0_DialogLike_vue__ = __webpack_require__(114);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_76898650_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_DialogLike_vue__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(3);
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(143)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_env_modules_false_targets_browsers_last_2_versions_safari_7_debug_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_syntax_dynamic_import_node_modules_vue_loader_lib_selector_type_script_index_0_DialogLike_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_76898650_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_DialogLike_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_76898650_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_DialogLike_vue__["b" /* staticRenderFns */],
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

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 121 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_env_modules_false_targets_browsers_last_2_versions_safari_7_debug_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_syntax_dynamic_import_node_modules_vue_loader_lib_selector_type_script_index_0_DialogFormEdit_vue__ = __webpack_require__(116);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_38312f8e_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_DialogFormEdit_vue__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(3);
var disposed = false
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_env_modules_false_targets_browsers_last_2_versions_safari_7_debug_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_syntax_dynamic_import_node_modules_vue_loader_lib_selector_type_script_index_0_DialogFormEdit_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_38312f8e_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_DialogFormEdit_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_38312f8e_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_DialogFormEdit_vue__["b" /* staticRenderFns */],
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

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 122 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ArticleBox_vue__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__CommentBox_vue__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__state__ = __webpack_require__(103);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["a"] = ({
    components: { articleBox: __WEBPACK_IMPORTED_MODULE_0__ArticleBox_vue__["a" /* default */], commentBox: __WEBPACK_IMPORTED_MODULE_1__CommentBox_vue__["a" /* default */] },
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
            if (this.articles[_index]) this.$scrollTo('#article' + this.articles[_index].id, 10, { container: 'body' });
        }
    }
});

/***/ }),
/* 123 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
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
          _c(
            "v-card-title",
            [
              _vm._v("Share the publication "),
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
          _c(
            "v-container",
            { attrs: { "grid-list-lg": "", "text-xs-left": "", fluid: "" } },
            [
              _c(
                "v-layout",
                { attrs: { column: "" } },
                [
                  _c("v-flex", { attrs: { lg12: "" } }, [
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
                  _c("v-flex", { attrs: { lg12: "" } }, [
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

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-9ea2bec0", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),
/* 124 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_env_modules_false_targets_browsers_last_2_versions_safari_7_debug_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_syntax_dynamic_import_node_modules_vue_loader_lib_selector_type_script_index_0_ArticleBox_vue__ = __webpack_require__(109);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_004b529c_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ArticleBox_vue__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(3);
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(125)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_env_modules_false_targets_browsers_last_2_versions_safari_7_debug_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_syntax_dynamic_import_node_modules_vue_loader_lib_selector_type_script_index_0_ArticleBox_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_004b529c_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ArticleBox_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_004b529c_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ArticleBox_vue__["b" /* staticRenderFns */],
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

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(126);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(4).default
var update = add("5f4f56b4", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-004b529c\",\"scoped\":false,\"sourceMap\":false}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ArticleBox.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-004b529c\",\"scoped\":false,\"sourceMap\":false}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ArticleBox.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "\n.articleBox .notSpace{\n    padding: 0;\n    margin: 0;\n}\n.articleBox .card__media__content{\n    margin: 0 !important;\n    padding: 10px;\n}\n.articleBox .card__media__content span{\n    word-wrap: break-word;\n}\n", ""]);

// exports


/***/ }),
/* 127 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
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
                {
                  staticStyle: {
                    width: "100%",
                    "text-align": "center",
                    overflow: "auto"
                  }
                },
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

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-004b529c", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),
/* 128 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_env_modules_false_targets_browsers_last_2_versions_safari_7_debug_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_syntax_dynamic_import_node_modules_vue_loader_lib_selector_type_script_index_0_CommentBox_vue__ = __webpack_require__(110);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3d827913_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_CommentBox_vue__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(3);
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(129)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-3d827913"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_env_modules_false_targets_browsers_last_2_versions_safari_7_debug_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_syntax_dynamic_import_node_modules_vue_loader_lib_selector_type_script_index_0_CommentBox_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3d827913_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_CommentBox_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3d827913_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_CommentBox_vue__["b" /* staticRenderFns */],
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

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(130);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(4).default
var update = add("7e409dcf", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3d827913\",\"scoped\":true,\"sourceMap\":false}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./CommentBox.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3d827913\",\"scoped\":true,\"sourceMap\":false}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./CommentBox.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "\n.toolbar[data-v-3d827913]{\n    box-shadow: none;\n}\n", ""]);

// exports


/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(132);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(4).default
var update = add("4a0a32b2", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3fa623db\",\"scoped\":true,\"sourceMap\":false}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Comments.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3fa623db\",\"scoped\":true,\"sourceMap\":false}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Comments.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "\n#showComment[data-v-3fa623db] {\n    padding-left: 10px;\n    margin-left: -10px;\n    border-left: 5px solid turquoise;\n}\n", ""]);

// exports


/***/ }),
/* 133 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_env_modules_false_targets_browsers_last_2_versions_safari_7_debug_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_syntax_dynamic_import_node_modules_vue_loader_lib_selector_type_script_index_0_Comment_vue__ = __webpack_require__(112);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7dce4648_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Comment_vue__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(3);
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(134)
  __webpack_require__(136)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-7dce4648"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_env_modules_false_targets_browsers_last_2_versions_safari_7_debug_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_syntax_dynamic_import_node_modules_vue_loader_lib_selector_type_script_index_0_Comment_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7dce4648_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Comment_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7dce4648_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Comment_vue__["b" /* staticRenderFns */],
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

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(135);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(4).default
var update = add("7659b6db", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7dce4648\",\"scoped\":true,\"sourceMap\":false}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Comment.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7dce4648\",\"scoped\":true,\"sourceMap\":false}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Comment.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "\n.icon[data-v-7dce4648]{\n    font-size: 18px;\n}\n", ""]);

// exports


/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(137);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(4).default
var update = add("f7b42c76", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7dce4648\",\"scoped\":false,\"sourceMap\":false}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./Comment.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7dce4648\",\"scoped\":false,\"sourceMap\":false}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./Comment.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "\n.commentActions{\n    display:flex;\n    justify-content: space-between;\n    flex-wrap: wrap;\n    width: 80%;\n}\n.commentActions button{\n    margin: 0;\n}\n.chipComment{\n    height: 25px !important;\n}\n.chipComment .chip__content{\n    cursor: pointer !important;\n}\n.chipComment .avatar{\n    width: 25px !important;\n    height: 25px !important;\n    min-width: 25px !important;\n}\n", ""]);

// exports


/***/ }),
/* 138 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
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
                  _vm.$router.push("profile/" + _vm.comment.user_id)
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
                                "profile/" + _vm.comment.comment_id
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

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-7dce4648", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),
/* 139 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
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
          {
            key: i,
            attrs: {
              id: comment.user_id !== _vm.user.id ? comment.idName : null
            }
          },
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

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-3fa623db", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(141);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(4).default
var update = add("30b729e2", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0b6b5d2c\",\"scoped\":false,\"sourceMap\":false}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./CommentForm.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0b6b5d2c\",\"scoped\":false,\"sourceMap\":false}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./CommentForm.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "\n.enlargeCmt .emojionearea{\n    min-height: 50px;\n}\n.commentForm .emojionearea .emojionearea-editor{\n    text-align: left;\n    font-size: 18px;\n    color: black;\n    font-family: monospace;\n    min-height: inherit !important;\n    max-height: 200px !important;\n    background: transparent !important;\n    border-radius: 0;\n}\n.commentForm .emojionearea{\n    position: absolute !important;\n    bottom: -40px;\n    border-radius: 0;\n}\n.commentForm{\n    position: relative;\n}\n.commentForm .emojionearea-picker{\n    right: 0 !important;\n    border: none;\n    box-shadow: none;\n}\n.emojionearea-editor:focus {\n    border: none !important;\n    border-color: none !important;\n    box-shadow: none !important;\n    outline: 0px solid transparent !important;\n}\n", ""]);

// exports


/***/ }),
/* 142 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-layout",
    [
      _c("v-flex", { attrs: { xs10: "", lg12: "" } }, [
        _c("div", { class: _vm.emojiClass }, [
          _c("textarea", { staticClass: "emojionearea" })
        ])
      ]),
      _vm._v(" "),
      !_vm.$vuetify.breakpoint.smAndUp
        ? _c(
            "v-flex",
            { attrs: { xs2: "", lg0: "" } },
            [
              _c(
                "v-icon",
                {
                  staticStyle: { "margin-left": "11px" },
                  attrs: { color: "primary" },
                  on: { click: _vm.publish }
                },
                [_vm._v("send")]
              )
            ],
            1
          )
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-0b6b5d2c", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(144);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(4).default
var update = add("1d93df58", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-76898650\",\"scoped\":false,\"sourceMap\":false}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./DialogLike.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-76898650\",\"scoped\":false,\"sourceMap\":false}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./DialogLike.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "\n.tabs__like .tabs__wrapper, .tabs__bar{\n    overflow: hidden;\n    height: 55px;\n}\n.tabs__like .tabs__container{\n    display: -webkit-box;\n}\n.tabs__like .tabs__items{\n    overflow-y: auto !important;\n    height: 490px !important;\n}\n.tabs__like li{\n    justify-content: flex-start !important;\n}\n.tabs__like li a{\n    width: 100%;\n}\n.dialogLiketoolbar .toolbar__content{\n    height: auto !important;\n}\n", ""]);

// exports


/***/ }),
/* 145 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_env_modules_false_targets_browsers_last_2_versions_safari_7_debug_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_syntax_dynamic_import_node_modules_vue_loader_lib_selector_type_script_index_0_Liker_vue__ = __webpack_require__(115);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_71dab2fa_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Liker_vue__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(3);
var disposed = false
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_env_modules_false_targets_browsers_last_2_versions_safari_7_debug_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_syntax_dynamic_import_node_modules_vue_loader_lib_selector_type_script_index_0_Liker_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_71dab2fa_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Liker_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_71dab2fa_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Liker_vue__["b" /* staticRenderFns */],
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

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 146 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
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

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-71dab2fa", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),
/* 147 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
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
                            }),
                            _vm._v(
                              "\n                         " +
                                _vm._s(
                                  _vm.article[
                                    "likes_" + reaction.name + "_count"
                                  ]
                                ) +
                                "\n                    "
                            )
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

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-76898650", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),
/* 148 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_env_modules_false_targets_browsers_last_2_versions_safari_7_debug_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_syntax_dynamic_import_node_modules_vue_loader_lib_selector_type_script_index_0_CardFormEdit_vue__ = __webpack_require__(117);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7431ad54_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_CardFormEdit_vue__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(3);
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(149)
  __webpack_require__(151)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-7431ad54"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_env_modules_false_targets_browsers_last_2_versions_safari_7_debug_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_syntax_dynamic_import_node_modules_vue_loader_lib_selector_type_script_index_0_CardFormEdit_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7431ad54_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_CardFormEdit_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7431ad54_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_CardFormEdit_vue__["b" /* staticRenderFns */],
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

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(150);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(4).default
var update = add("d9d1824a", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7431ad54\",\"scoped\":false,\"sourceMap\":false}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./CardFormEdit.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7431ad54\",\"scoped\":false,\"sourceMap\":false}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./CardFormEdit.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "\n.noEmoji .emojionearea-button{\n    display: none;\n}\n.cardPublicationForm .emojionearea .emojionearea-editor{\n    text-align: left;\n    font-size: 30px;\n    color: black;\n    font-family: monospace;\n    min-height: 50px !important;\n    max-height: 300px !important;\n    background: transparent !important;\n    width:100%;\n    transition: font-size 1s;\n}\n.cardPublicationForm .emojionearea .emojionearea-button, .emojionearea-picker{\n    z-index: 1 !important;\n}\n.cardPublicationForm .card__text .emojionearea{\n    display: flex;\n    min-height: 50px !important;\n    font-size: 15px !important;\n    background-color: transparent;\n}\n.menuBloc .buttonColor{\n    cursor: pointer;\n    transition: transform .5s;\n    border-radius: 50%\n}\n.menuBloc .buttonColor:hover{\n    transform: scale(1.5)\n}\n.menuColor{\n    min-width: 250px !important;\n}\n", ""]);

// exports


/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(152);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(4).default
var update = add("cdd3e9d2", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7431ad54\",\"scoped\":true,\"sourceMap\":false}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./CardFormEdit.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7431ad54\",\"scoped\":true,\"sourceMap\":false}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./CardFormEdit.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "\n.nbr-photos[data-v-7431ad54]{\n    position:absolute;\n    width: 100%;\n    height: 100%;\n    display:none;\n    background-color: rgba(0, 0, 0, .4);\n    text-align: center;\n    padding-top: 35%;\n    color: #fff;\n    border-radius: 4px;\n    font-size: 18px;\n}\ndiv:hover > .nbr-photos[data-v-7431ad54]{\n    display: block\n}\n.nbr-photos[data-v-7431ad54]:hover{\n    display: block\n}\n", ""]);

// exports


/***/ }),
/* 153 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
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
                "v-icon",
                {
                  on: {
                    click: function($event) {
                      _vm.$emit("switchDialog")
                    }
                  }
                },
                [_vm._v("close")]
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

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-7431ad54", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),
/* 154 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
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

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-38312f8e", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),
/* 155 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
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
                        cursor: "pointer",
                        "margin-left": "10px",
                        "margin-right": "10px"
                      },
                      attrs: { size: "40px" },
                      on: {
                        click: function($event) {
                          _vm.$router.push("profile/" + _vm.owner.id)
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
                                {
                                  on: {
                                    click: function($event) {
                                      _vm.articleDelete = true
                                    }
                                  }
                                },
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
                    _vm.article.image && _vm.article.type === "actuality"
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
                      : _c(
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
                            _c("span", [_vm._v(_vm._s(_vm.article.title))])
                          ]
                        )
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
      _c(
        "v-dialog",
        {
          attrs: { "max-width": "290" },
          model: {
            value: _vm.articleDelete,
            callback: function($$v) {
              _vm.articleDelete = $$v
            },
            expression: "articleDelete"
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
                _vm._v("Deleting the article")
              ]),
              _vm._v(" "),
              _c("v-divider"),
              _vm._v(" "),
              _c("v-card-text", [
                _vm._v(
                  "\n                Are you sure you want to delete this article?\n            "
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
                          _vm.articleDelete = false
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

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-3d827913", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),
/* 156 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__CardPublicationForm_vue__ = __webpack_require__(166);
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
    components: { "CardPublicationForm": __WEBPACK_IMPORTED_MODULE_0__CardPublicationForm_vue__["a" /* default */] },
    props: {
        open: Boolean,
        onlyDialog: Boolean
    },
    data: function data() {
        return {
            dialog: false
        };
    },
    methods: {
        switchDialog: function switchDialog() {
            this.dialog = !this.dialog;
        }
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
/* 157 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
    props: {
        dialog: Boolean
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
                formdata.append("message", text);
                formdata.append("color", this.color);
                this.loading = true;
                this.$http.post("/user/article", formdata).then(function (response) {
                    if (response.body.id) {
                        _this.loading = false;
                        response.body.comments_count = 0;
                        response.body.likes_count = 0;
                        response.body.liked = null;
                        if (_this.url) response.body.image = { path: _this.url };
                        _this.$store.dispatch('article/save', response.body);
                        _this.$store.dispatch('users/save', _this.user);
                        _this.clear();
                    }
                });
            }
        },
        clear: function clear() {
            this.file = null;
            this.url = null;
            this.color = "background1";
            this.$el.querySelector("textarea").value = "";
            this.$el.querySelector(".emojionearea-editor").innerHTML = "";
            document.querySelector('#photo').value = "";
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
/* 158 */,
/* 159 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_env_modules_false_targets_browsers_last_2_versions_safari_7_debug_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_syntax_dynamic_import_node_modules_vue_loader_lib_selector_type_script_index_0_DialogComment_vue__ = __webpack_require__(122);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1e39b320_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_DialogComment_vue__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(3);
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(160)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_env_modules_false_targets_browsers_last_2_versions_safari_7_debug_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_syntax_dynamic_import_node_modules_vue_loader_lib_selector_type_script_index_0_DialogComment_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1e39b320_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_DialogComment_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1e39b320_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_DialogComment_vue__["b" /* staticRenderFns */],
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

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(161);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(4).default
var update = add("5468547a", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1e39b320\",\"scoped\":false,\"sourceMap\":false}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./DialogComment.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1e39b320\",\"scoped\":false,\"sourceMap\":false}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./DialogComment.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "\n.notSpace{\n    padding: 0 !important;\n    margin: 0 !important;\n}\n.dialog--active{\n    overflow: hidden;\n}\n.carousel_item{\n    position: relative !important\n}\n", ""]);

// exports


/***/ }),
/* 162 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
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

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-1e39b320", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),
/* 163 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_env_modules_false_targets_browsers_last_2_versions_safari_7_debug_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_syntax_dynamic_import_node_modules_vue_loader_lib_selector_type_script_index_0_CardPublication_vue__ = __webpack_require__(156);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_e8738818_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_CardPublication_vue__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(3);
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(164)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_env_modules_false_targets_browsers_last_2_versions_safari_7_debug_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_syntax_dynamic_import_node_modules_vue_loader_lib_selector_type_script_index_0_CardPublication_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_e8738818_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_CardPublication_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_e8738818_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_CardPublication_vue__["b" /* staticRenderFns */],
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

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(165);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(4).default
var update = add("3058d252", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-e8738818\",\"scoped\":false,\"sourceMap\":false}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./CardPublication.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-e8738818\",\"scoped\":false,\"sourceMap\":false}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./CardPublication.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "\n.notOverflow{\n    overflow: initial !important\n}\n", ""]);

// exports


/***/ }),
/* 166 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_env_modules_false_targets_browsers_last_2_versions_safari_7_debug_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_syntax_dynamic_import_node_modules_vue_loader_lib_selector_type_script_index_0_CardPublicationForm_vue__ = __webpack_require__(157);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_684ec650_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_CardPublicationForm_vue__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(3);
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(167)
  __webpack_require__(169)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-684ec650"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_env_modules_false_targets_browsers_last_2_versions_safari_7_debug_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_syntax_dynamic_import_node_modules_vue_loader_lib_selector_type_script_index_0_CardPublicationForm_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_684ec650_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_CardPublicationForm_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_684ec650_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_CardPublicationForm_vue__["b" /* staticRenderFns */],
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

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(168);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(4).default
var update = add("77381722", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-684ec650\",\"scoped\":false,\"sourceMap\":false}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./CardPublicationForm.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-684ec650\",\"scoped\":false,\"sourceMap\":false}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./CardPublicationForm.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "\n.noEmoji .emojionearea-button{\n    display: none;\n}\n.cardPublicationForm  .emojionearea-editor{\n    text-align: left;\n    font-size: 30px !important;\n    color: black;\n    font-family: monospace;\n    min-height: 50px !important;\n    max-height: 300px !important;\n    background: transparent !important;\n    width:100%;\n    transition: font-size 1s;\n}\n.cardPublicationForm .emojionearea .emojionearea-button, .emojionearea-picker{\n    z-index: 1 !important;\n}\n.cardPublicationForm .card__text .emojionearea{\n    display: flex;\n    min-height: 50px !important;\n    font-size: 15px !important;\n    background-color: transparent;\n}\n.menuBloc .buttonColor{\n    cursor: pointer;\n    transition: transform .5s;\n    border-radius: 50%\n}\n.menuBloc .buttonColor:hover{\n    transform: scale(1.5)\n}\n.menuColor{\n    min-width: 250px !important;\n}\n", ""]);

// exports


/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(170);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(4).default
var update = add("3f116f33", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-684ec650\",\"scoped\":true,\"sourceMap\":false}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./CardPublicationForm.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-684ec650\",\"scoped\":true,\"sourceMap\":false}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./CardPublicationForm.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "\n.nbr-photos[data-v-684ec650]{\n    position:absolute;\n    width: 100%;\n    height: 100%;\n    display:none;\n    background-color: rgba(0, 0, 0, .4);\n    text-align: center;\n    padding-top: 35%;\n    color: #fff;\n    border-radius: 4px;\n    font-size: 18px;\n}\ndiv:hover > .nbr-photos[data-v-684ec650]{\n    display: block\n}\n.nbr-photos[data-v-684ec650]:hover{\n    display: block\n}\n", ""]);

// exports


/***/ }),
/* 171 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
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
        { attrs: { height: "auto" } },
        [
          _vm.loading
            ? _c("v-progress-linear", {
                staticStyle: { margin: "0" },
                attrs: { indeterminate: true }
              })
            : _vm._e(),
          _vm._v(" "),
          _vm.dialog
            ? _c(
                "v-card-title",
                [
                  _vm._v("Form Publication "),
                  _c("v-spacer"),
                  _c(
                    "v-btn",
                    {
                      attrs: { icon: "" },
                      on: {
                        click: function($event) {
                          _vm.$emit("switchDialog")
                        }
                      }
                    },
                    [_c("v-icon", [_vm._v("close")])],
                    1
                  )
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _c("v-divider"),
          _vm._v(" "),
          _c(
            "v-card-title",
            {
              style: _vm.$vuetify.breakpoint.smAndUp || "padding:0",
              attrs: { "primary-title": "" }
            },
            [
              _c(
                "v-layout",
                { attrs: { row: "", wrap: "" } },
                [
                  _vm.$vuetify.breakpoint.smAndUp
                    ? _c(
                        "v-flex",
                        { attrs: { lg2: "" } },
                        [
                          _c(
                            "v-avatar",
                            {
                              staticStyle: { "margin-top": "15px" },
                              attrs: { size: "40px" }
                            },
                            [
                              _c("img", {
                                attrs: { src: _vm.user.avatar, alt: "avatar" }
                              })
                            ]
                          )
                        ],
                        1
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _c(
                    "v-flex",
                    { staticStyle: { width: "100px" }, attrs: { lg10: "" } },
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
                  _vm.dialog && _vm.$vuetify.breakpoint.smAndUp
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
                  !_vm.dialog && _vm.$vuetify.breakpoint.smAndUp
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
                  _vm.hasColors
                    ? _c(
                        "v-menu",
                        {
                          attrs: {
                            "offset-x": "",
                            "close-on-content-click": false,
                            "nudge-width": 200,
                            "content-class":
                              _vm.$vuetify.breakpoint.smAndUp || "menuColor"
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
                            { staticClass: "menuBloc" },
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
                                            wrap: "",
                                            row: ""
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
                  _vm.dialog && _vm.$vuetify.breakpoint.smAndUp
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
              _vm.dialog && !_vm.$vuetify.breakpoint.smAndUp
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
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-684ec650", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),
/* 172 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      !_vm.onlyDialog
        ? _c("CardPublicationForm", {
            attrs: { dialog: false },
            on: { switchDialog: _vm.switchDialog }
          })
        : _vm._e(),
      _vm._v(" "),
      _c(
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

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-e8738818", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__card_CardPublication_vue__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__comment_DialogComment_vue__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__courses_PdfViewer__ = __webpack_require__(293);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["a"] = ({
    components: { cardPublication: __WEBPACK_IMPORTED_MODULE_0__card_CardPublication_vue__["a" /* default */], dialogComment: __WEBPACK_IMPORTED_MODULE_1__comment_DialogComment_vue__["a" /* default */], pdfViewer: __WEBPACK_IMPORTED_MODULE_2__courses_PdfViewer__["a" /* default */] },
    data: function data() {
        return {
            darked: false,
            drawer: false,
            speedDial: false,
            dialogPublication: false,
            body: null,
            timerIndex: null,
            openDialogComment: false,
            articles: [],
            article: {},
            drawerUsers: false,
            searchItems: [{ name: 'berlin', isUni: true }, { name: 'ilmenau', isUni: true }, { name: 'bochum', isUni: true }, { name: 'bremen', isUni: true }, { name: 'clausthal', isUni: true }, { name: 'mannheim', isUni: true }, { name: 'kaiserslautern', isUni: true }, { name: 'paderborn', isUni: true }, { name: 'munich', isUni: true }, { name: 'siegen', isUni: true }],
            selectedUser: null,
            mini: false
        };
    },

    computed: {
        user: function user() {
            return this.$store.state.user.user;
        },
        users: function users() {
            // && user.id!==this.user.id
            var usersOnline = this.$store.state.users.users.filter(function (user) {
                return user.online;
            });
            return usersOnline;
        },
        loading: function loading() {
            return this.$store.state.setting.loading;
        },
        notifications: function notifications() {
            return this.$store.state.setting.notifications;
        }
    },
    methods: {
        logout: function logout() {
            var _this = this;

            this.$http.get('/logout').then(function (response) {
                if (response.body.status === 1) {
                    _this.$store.dispatch("user/delete");
                    window.location.href = window.location.protocol + window.location.host;
                    window.location.reload();
                }
            });
        },
        scrollToTop: function scrollToTop() {
            this.$scrollTo('#showTop', 500, { container: 'body' });
        },
        show: function show(notification) {
            var _this2 = this;

            if (notification.article) {
                this.openBox(notification);
            } else {
                var article = this.$store.state.article.articles.find(function (article) {
                    return article.id === notification.comment.article_id;
                });
                if (article) {
                    notification.article = article;
                    this.openBox(notification);
                } else {
                    this.$http.get('/user/article/' + notification.comment.article_id).then(function (response) {
                        if (response.body.id) {
                            var user = response.body.user;
                            delete response.body.user;
                            _this2.$store.dispatch('article/save', response.body);
                            _this2.$store.dispatch('users/save', user);
                            notification.article = response.body;
                            _this2.openBox(notification);
                        }
                    });
                }
            }
        },
        openBox: function openBox(notification) {
            var _this3 = this;

            this.articles = [notification.article];
            this.openDialogComment = true;
            this.$nextTick(function () {
                _this3.article = notification.article;
                _this3.$store.dispatch('setting/deleteNotification', notification.id);
            });
        },
        search: function search($event) {
            var _this4 = this;

            if ($event.target.value.trim().length > 2) {
                this.$store.dispatch('setting/setLoading', true);
                this.$http.get('/user/search/' + $event.target.value.trim()).then(function (response) {
                    response.body.map(function (responseUser) {
                        var user = _this4.searchItems.find(function (user) {
                            return user.value === responseUser.id;
                        });
                        if (!user) _this4.searchItems.push({ value: responseUser.id, name: responseUser.name + " " + responseUser.forename, avatar: responseUser.avatar });
                    });
                    _this4.$store.dispatch('setting/setLoading', false);
                });
            } else {
                this.searchItems = [];
            }
        }
    },
    mounted: function mounted() {
        this.darked = this.$store.state.setting.darked;
        this.drawer = this.$vuetify.breakpoint.smAndUp;
        this.mini = this.$vuetify.breakpoint.smAndUp;
        this.body = document.querySelector('body');
    },

    watch: {
        darked: function darked(data) {
            this.$store.dispatch('setting/invertcolor');
            if (data) {
                document.querySelectorAll('.emojionearea-editor').map(function (elt) {
                    elt.style.color = "white";
                });
            } else {
                document.querySelectorAll('.emojionearea-editor').map(function (elt) {
                    elt.style.color = "#424242";
                });
            }
        },
        selectedUser: function selectedUser(data) {
            if (data.length > 0) {
                if (data[0].isUni) {
                    this.$router.push('/university/' + data[0].name);
                } else {
                    this.$router.push('/profile/' + data[0].value);
                }
            }
        },
        '$vuetify.breakpoint.smAndUp': function $vuetifyBreakpointSmAndUp(data) {
            this.drawer = data;
            this.mini = data;
        }
    }
});

/***/ }),
/* 191 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
    props: {
        open: Boolean,
        url: String
    },
    data: function data() {
        return {
            dialog: false,
            html: null
        };
    },
    computed: {
        book: function book() {
            var _this = this;

            return this.$store.state.book.books.find(function (book) {
                return book.id === parseInt(_this.$route.params.book);
            }) || {};
        }
    },
    methods: {},
    mounted: function mounted() {
        this.html = document.querySelector('html');
        if (this.$route.params.book) {
            this.dialog = true;
            this.html.style.overflow = "hidden";
        }
    },

    watch: {
        '$route.params.book': function $routeParamsBook(data) {
            if (data) {
                this.dialog = true;
                this.html.style.overflow = "hidden";
            } else {
                this.dialog = false;
                this.html.style.overflow = "auto";
            }
        }
    }
});

/***/ }),
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */,
/* 254 */,
/* 255 */,
/* 256 */,
/* 257 */,
/* 258 */,
/* 259 */,
/* 260 */,
/* 261 */,
/* 262 */,
/* 263 */,
/* 264 */,
/* 265 */,
/* 266 */,
/* 267 */,
/* 268 */,
/* 269 */,
/* 270 */,
/* 271 */,
/* 272 */,
/* 273 */,
/* 274 */,
/* 275 */,
/* 276 */,
/* 277 */,
/* 278 */,
/* 279 */,
/* 280 */,
/* 281 */,
/* 282 */,
/* 283 */,
/* 284 */,
/* 285 */,
/* 286 */,
/* 287 */,
/* 288 */,
/* 289 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(290);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(4).default
var update = add("6a1bebee", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-43998c28\",\"scoped\":true,\"sourceMap\":false}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./User.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-43998c28\",\"scoped\":true,\"sourceMap\":false}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./User.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 290 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "\n.input-group--solo .input-group__input .input-group__append-icon[data-v-43998c28]{display:none !important\n}\n", ""]);

// exports


/***/ }),
/* 291 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(292);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(4).default
var update = add("15ef796e", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-43998c28\",\"scoped\":false,\"sourceMap\":false}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./User.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-43998c28\",\"scoped\":false,\"sourceMap\":false}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./User.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 292 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*.bg_app{\n   background-color: #e6ecf0 !important;\n}*/\n#showTop{\n    overflow-x: hidden;\n}\n.noOverflow{\n    overflow: hidden !important;\n}\n.layout_bloc{\n    margin-top: 60px;\n}\n.layout_phone{\n    margin-top: 20px;\n}\n.menuNotification{\n    position: fixed !important;\n    top: 50px !important;\n    right: 10px !important;\n    left: inherit !important;\n    bottom: inherit !important\n}\n.menuCover{\n    width:350px !important;\n    height:200px !important;\n}\n.blue_sky{\n    background-color: #b3d4fc;\n}\n.card__media__content{\n    white-space: pre-line;\n    margin-bottom: -4px;\n    padding-left: 10px;\n    margin-top: -4px;\n    margin: -4px;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -ms-flex-direction: column;\n    flex-direction: column;\n    -webkit-box-pack: center;\n    -ms-flex-pack: center;\n    justify-content: center;\n    -webkit-box-align: center;\n    -ms-flex-align: center;\n    align-items: center;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-flex: 1;\n    -ms-flex: 1 1 auto;\n    flex: 1 1 auto;\n    -ms-flex-wrap: nowrap;\n    flex-wrap: nowrap;\n}\n.card__media{\n    color: rgba(255,255,255,1.00);\n    font-size: 30px;\n    line-height: 1.2000em;\n    text-align: center;\n    font-family: monospace\n}\n.overflow{\n    overflow-y: auto !important;\n}\n.blackForm .emojionearea{\n    background-color: #424242 !important;\n    color: white !important;\n}\n.blackForm .emojionearea-editor{\n    color: white !important;\n}\n.emojionearea .emojionearea-picker .emojionearea-search > input{\n    color: black;\n}\n.phone .toolbar__extension{\n    display: none;\n}\n.card--flex-toolbar {\n    margin-top: 64px;\n}\n.application .theme--dark.toolbar, .theme--dark .toolbar{\n    background-color: inherit;\n}\n.fontBlack{\n    background: #424242;\n}\n.menuDrawer{\n    margin-top:128.49px !important;\n    position: fixed;\n}\n.background0{\n    background-color: #ddd !important;\n}\n.background1{\n    background-color: transparent !important;\n    color: black !important;\n    text-align: left !important;\n}\n.background2{\n    background-color:rgba(0,244,255,1.00);background-image:-webkit-linear-gradient(45deg,rgba(0,244,255,1.00) 0%,rgba(17,55,173,1.00) 100%);background-image:-moz-linear-gradient(45deg,rgba(0,244,255,1.00) 0%,rgba(17,55,173,1.00) 100%);background-image:-ms-linear-gradient(45deg,rgba(0,244,255,1.00) 0%,rgba(17,55,173,1.00) 100%);background-image:-o-linear-gradient(45deg,rgba(0,244,255,1.00) 0%,rgba(17,55,173,1.00) 100%);background-image:-webkit-gradient(left bottom,color-stop(rgba(0,244,255,1.00) 0%),color-stop(rgba(17,55,173,1.00) 100%));background-image:linear-gradient(45deg,rgba(0,244,255,1.00) 0%,rgba(17,55,173,1.00) 100%) !important;\n    display: flex;\n    color: white !important;\n    text-align: center !important;\n    justify-content: center;\n    flex-direction: column;\n    font-size: 30px !important;\n}\n.background3{\n    background-color:rgba(23,172,255,1.00);background-image:-webkit-linear-gradient(45deg,rgba(102,244,133,1.00) 0%,rgba(23,172,255,1.00) 100%);background-image:-moz-linear-gradient(45deg,rgba(102,244,133,1.00) 0%,rgba(23,172,255,1.00) 100%);background-image:-ms-linear-gradient(45deg,rgba(102,244,133,1.00) 0%,rgba(23,172,255,1.00) 100%);background-image:-o-linear-gradient(45deg,rgba(102,244,133,1.00) 0%,rgba(23,172,255,1.00) 100%);background-image:-webkit-gradient(left bottom,color-stop(rgba(102,244,133,1.00) 0%),color-stop(rgba(23,172,255,1.00) 100%));background-image:linear-gradient(45deg,rgba(102,244,133,1.00) 0%,rgba(23,172,255,1.00) 100%) !important;\n    color: white !important;\n    text-align: center !important;\n    justify-content: center;\n    flex-direction: column;\n    font-size: 30px !important;\n}\n.background4{\n    background-color:rgba(5,174,53,1.00);background-image:-webkit-linear-gradient(45deg,rgba(248,240,35,1.00) 0%,rgba(5,174,53,1.00) 100%);background-image:-moz-linear-gradient(45deg,rgba(248,240,35,1.00) 0%,rgba(5,174,53,1.00) 100%);background-image:-ms-linear-gradient(45deg,rgba(248,240,35,1.00) 0%,rgba(5,174,53,1.00) 100%);background-image:-o-linear-gradient(45deg,rgba(248,240,35,1.00) 0%,rgba(5,174,53,1.00) 100%);background-image:-webkit-gradient(left bottom,color-stop(rgba(248,240,35,1.00) 0%),color-stop(rgba(5,174,53,1.00) 100%));background-image:linear-gradient(45deg,rgba(248,240,35,1.00) 0%,rgba(5,174,53,1.00) 100%) !important;\n    color: white !important;\n    text-align: center !important;\n    justify-content: center;\n    flex-direction: column;\n    font-size: 30px !important;\n}\n.background5{\n    background-color:rgba(255,0,71,1.00);background-image:-webkit-linear-gradient(45deg,rgba(255,0,71,1.00) 0%,rgba(44,52,199,1.00) 100%);background-image:-moz-linear-gradient(45deg,rgba(255,0,71,1.00) 0%,rgba(44,52,199,1.00) 100%);background-image:-ms-linear-gradient(45deg,rgba(255,0,71,1.00) 0%,rgba(44,52,199,1.00) 100%);background-image:-o-linear-gradient(45deg,rgba(255,0,71,1.00) 0%,rgba(44,52,199,1.00) 100%);background-image:-webkit-gradient(left bottom,color-stop(rgba(255,0,71,1.00) 0%),color-stop(rgba(44,52,199,1.00) 100%));background-image:linear-gradient(45deg,rgba(255,0,71,1.00) 0%,rgba(44,52,199,1.00) 100%) !important;\n    color: white !important;\n    text-align: center !important;\n    justify-content: center;\n    flex-direction: column;\n    font-size: 30px !important;\n}\n.background6{\n    background-color:rgba(115,33,173,1.00);background-image:-webkit-linear-gradient(-45deg,rgba(115,33,173,1.00) 0%,rgba(72,229,169,1.00) 100%);background-image:-moz-linear-gradient(-45deg,rgba(115,33,173,1.00) 0%,rgba(72,229,169,1.00) 100%);background-image:-ms-linear-gradient(-45deg,rgba(115,33,173,1.00) 0%,rgba(72,229,169,1.00) 100%);background-image:-o-linear-gradient(-45deg,rgba(115,33,173,1.00) 0%,rgba(72,229,169,1.00) 100%);background-image:-webkit-gradient(left top,right bottom,color-stop(rgba(115,33,173,1.00) 0%),color-stop(rgba(72,229,169,1.00) 100%));background-image:linear-gradient(135deg,rgba(115,33,173,1.00) 0%,rgba(72,229,169,1.00) 100%) !important;\n    color: white !important;\n    text-align: center !important;\n    justify-content: center;\n    flex-direction: column;\n    font-size: 30px !important;\n}\n.background7{\n    background-color:rgba(167,183,216,1.00);background-image:-webkit-linear-gradient(45deg,rgba(167,183,216,1.00) 0%,rgba(22,24,29,1.00) 100%);background-image:-moz-linear-gradient(45deg,rgba(167,183,216,1.00) 0%,rgba(22,24,29,1.00) 100%);background-image:-ms-linear-gradient(45deg,rgba(167,183,216,1.00) 0%,rgba(22,24,29,1.00) 100%);background-image:-o-linear-gradient(45deg,rgba(167,183,216,1.00) 0%,rgba(22,24,29,1.00) 100%);background-image:-webkit-gradient(left bottom,color-stop(rgba(167,183,216,1.00) 0%),color-stop(rgba(22,24,29,1.00) 100%));background-image:linear-gradient(45deg,rgba(167,183,216,1.00) 0%,rgba(22,24,29,1.00) 100%) !important;\n    color: white !important;\n    text-align: center !important;\n    justify-content: center;\n    flex-direction: column;\n    font-size: 30px !important;\n}\n.background8{\n    background-color:rgba(93,63,218,1.00);background-image:-webkit-linear-gradient(45deg,rgba(252,54,253,1.00) 0%,rgba(93,63,218,1.00) 100%);background-image:-moz-linear-gradient(45deg,rgba(252,54,253,1.00) 0%,rgba(93,63,218,1.00) 100%);background-image:-ms-linear-gradient(45deg,rgba(252,54,253,1.00) 0%,rgba(93,63,218,1.00) 100%);background-image:-o-linear-gradient(45deg,rgba(252,54,253,1.00) 0%,rgba(93,63,218,1.00) 100%);background-image:-webkit-gradient(left bottom,color-stop(rgba(252,54,253,1.00) 0%),color-stop(rgba(93,63,218,1.00) 100%));background-image:linear-gradient(45deg,rgba(252,54,253,1.00) 0%,rgba(93,63,218,1.00) 100%);\n    color: white !important;\n    text-align: center !important;\n    justify-content: center;\n    flex-direction: column;\n    font-size: 30px !important;\n}\n.background9{\n    background: url(https://fb-s-b-a.akamaihd.net/h-ak-fbx/v/t39.10873-6/21624555_753398934860280_5226642317791723520_n.jpg?oh=5e66dc787dfbb00fa0fba58e552f6b47&oe=5ACE152C&__gda__=1522286412_69dab1e2c504c8b996f49800a61c1edd) center center / cover no-repeat !important;\n    color: white !important;\n    text-align: center !important;\n    justify-content: center;\n    flex-direction: column;\n    font-size: 30px !important;\n}\n.backgroundSmall9{\n    background: url(https://fb-s-a-a.akamaihd.net/h-ak-fbx/v/t39.10873-6/p32x32/21274785_753398928193614_2779422909477683200_n.jpg?oh=562d5b1b9d519375f9eca0af689328d1&oe=5ACE57F0&__gda__=1522048561_b99ec82924cf40a75352e7e8db4e84f9) center center / cover no-repeat !important\n}\n", ""]);

// exports


/***/ }),
/* 293 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_env_modules_false_targets_browsers_last_2_versions_safari_7_debug_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_syntax_dynamic_import_node_modules_vue_loader_lib_selector_type_script_index_0_PdfViewer_vue__ = __webpack_require__(191);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0ccda500_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_PdfViewer_vue__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(3);
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(294)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-0ccda500"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_env_modules_false_targets_browsers_last_2_versions_safari_7_debug_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_syntax_dynamic_import_node_modules_vue_loader_lib_selector_type_script_index_0_PdfViewer_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0ccda500_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_PdfViewer_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0ccda500_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_PdfViewer_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/user/courses/PdfViewer.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0ccda500", Component.options)
  } else {
    hotAPI.reload("data-v-0ccda500", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 294 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(295);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(4).default
var update = add("03d20b8e", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0ccda500\",\"scoped\":true,\"sourceMap\":false}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./PdfViewer.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0ccda500\",\"scoped\":true,\"sourceMap\":false}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./PdfViewer.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 295 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "\n.btn-close[data-v-0ccda500]{\n    position: absolute;\n    top:0px;\n    right: 10px;\n    z-index: 1\n}\n", ""]);

// exports


/***/ }),
/* 296 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
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
            "v-btn",
            {
              staticClass: "btn-close",
              attrs: { icon: "", dark: "", exact: "" },
              on: {
                click: function($event) {
                  _vm.$router.go(-2)
                }
              }
            },
            [_c("v-icon", [_vm._v("close")])],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticStyle: {
                position: "relative",
                height: "100vh",
                width: "100%"
              }
            },
            [
              _c("iframe", {
                staticStyle: {
                  overflow: "hidden",
                  height: "100%",
                  width: "100%",
                  position: "absolute",
                  top: "0",
                  left: "0",
                  right: "0",
                  bottom: "0"
                },
                attrs: {
                  id: "viewer",
                  height: "100%",
                  width: "100%",
                  src: _vm.book.url,
                  frameborder: "0",
                  scrolling: "no"
                }
              })
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

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-0ccda500", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),
/* 297 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-app",
    { attrs: { dark: _vm.darked, id: "showTop" } },
    [
      _c(
        "v-card",
        {
          staticClass: "block_app",
          attrs: {
            dark: _vm.darked,
            color: _vm.darked ? "theme--dark" : "theme--light bg_app",
            flat: ""
          }
        },
        [
          _c(
            "v-toolbar",
            {
              class: _vm.$vuetify.breakpoint.smAndUp || "phone",
              style: _vm.darked ? "z-index:8" : "z-index:8;background: #00b4ff",
              attrs: {
                "scroll-off-screen": !_vm.$vuetify.breakpoint.smAndUp,
                dark: _vm.darked,
                color: _vm.darked ? "theme--dark" : null,
                prominent: "",
                fixed: "",
                flat: "",
                extended: ""
              }
            },
            [
              _vm.$route.path === "/" || _vm.$vuetify.breakpoint.smAndUp
                ? _c("v-toolbar-side-icon", {
                    staticClass: "white--text",
                    on: {
                      click: function($event) {
                        _vm.$vuetify.breakpoint.smAndUp
                          ? (_vm.mini = !_vm.mini)
                          : (_vm.drawer = !_vm.drawer)
                      }
                    }
                  })
                : _c(
                    "v-btn",
                    {
                      staticClass: "white--text",
                      attrs: { icon: "" },
                      on: {
                        click: function($event) {
                          _vm.$router.go(-1)
                        }
                      }
                    },
                    [_c("v-icon", [_vm._v("chevron_left")])],
                    1
                  ),
              _vm._v(" "),
              _vm.$vuetify.breakpoint.smAndUp
                ? _c("v-toolbar-title", { staticClass: "white--text" }, [
                    _vm._v("Weltimo")
                  ])
                : _vm._e(),
              _vm._v(" "),
              !_vm.$vuetify.breakpoint.smAndUp
                ? _c("v-select", {
                    attrs: {
                      light: "",
                      solo: "",
                      items: _vm.searchItems,
                      placeholder: "Search",
                      multiple: "",
                      chips: "",
                      "item-text": "name",
                      "item-value": "id",
                      "max-height": "auto",
                      "prepend-icon": "search",
                      autocomplete: ""
                    },
                    nativeOn: {
                      input: function($event) {
                        _vm.search($event)
                      }
                    },
                    scopedSlots: _vm._u([
                      {
                        key: "selection",
                        fn: function(data) {
                          return [
                            _c(
                              "v-chip",
                              {
                                key: JSON.stringify(data.item),
                                staticClass: "chip--select-multi",
                                attrs: { close: "", selected: data.selected },
                                on: {
                                  input: function($event) {
                                    data.parent.selectItem(data.item)
                                  }
                                }
                              },
                              [
                                _c("v-avatar", [
                                  _c("img", {
                                    attrs: { src: data.item.avatar }
                                  })
                                ]),
                                _vm._v(
                                  "\n                        " +
                                    _vm._s(data.item.name) +
                                    "\n                    "
                                )
                              ],
                              1
                            )
                          ]
                        }
                      },
                      {
                        key: "item",
                        fn: function(data) {
                          return [
                            typeof data.item !== "object"
                              ? [
                                  _c("v-list-tile-content", {
                                    domProps: { textContent: _vm._s(data.item) }
                                  })
                                ]
                              : [
                                  _c("v-list-tile-avatar", [
                                    _c("img", {
                                      attrs: { src: data.item.avatar }
                                    })
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "v-list-tile-content",
                                    [
                                      _c("v-list-tile-title", {
                                        domProps: {
                                          innerHTML: _vm._s(data.item.name)
                                        }
                                      })
                                    ],
                                    1
                                  )
                                ]
                          ]
                        }
                      }
                    ]),
                    model: {
                      value: _vm.selectedUser,
                      callback: function($$v) {
                        _vm.selectedUser = $$v
                      },
                      expression: "selectedUser"
                    }
                  })
                : _c("v-spacer"),
              _vm._v(" "),
              _c(
                "v-menu",
                {
                  attrs: {
                    "content-class": "menuNotification",
                    "close-on-content-click": false,
                    "max-height": "350px"
                  }
                },
                [
                  _c(
                    "v-badge",
                    {
                      attrs: { slot: "activator", color: "cyan", left: "" },
                      slot: "activator"
                    },
                    [
                      _vm.notifications.length > 0
                        ? _c(
                            "span",
                            { attrs: { slot: "badge" }, slot: "badge" },
                            [_vm._v(_vm._s(_vm.notifications.length))]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _c(
                        "v-icon",
                        { staticClass: "white--text", attrs: { icon: "" } },
                        [_vm._v("notifications")]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _vm.notifications.length > 0
                    ? _c(
                        "v-list",
                        _vm._l(_vm.notifications, function(notification, i) {
                          return _c(
                            "v-list-tile",
                            {
                              key: i,
                              attrs: {
                                avatar: "",
                                to: "/profile/" + notification.user.id
                              }
                            },
                            [
                              _c("v-list-tile-avatar", [
                                _c("img", {
                                  attrs: { src: notification.user.avatar }
                                })
                              ]),
                              _vm._v(" "),
                              _c(
                                "v-tooltip",
                                { attrs: { top: "" } },
                                [
                                  _c(
                                    "v-list-tile-content",
                                    {
                                      staticStyle: {
                                        width: "231px",
                                        "margin-right": "5px"
                                      },
                                      attrs: { slot: "activator" },
                                      slot: "activator"
                                    },
                                    [
                                      _c("v-list-tile-title", [
                                        _vm._v(_vm._s(notification.message))
                                      ])
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c("span", [
                                    _vm._v(_vm._s(notification.message))
                                  ])
                                ],
                                1
                              ),
                              _vm._v(" "),
                              notification.isFollower
                                ? _c(
                                    "v-list-tile-action",
                                    [
                                      _c(
                                        "v-btn",
                                        {
                                          attrs: {
                                            slot: "activator",
                                            color: "primary",
                                            outline: ""
                                          },
                                          on: {
                                            click: function($event) {
                                              $event.preventDefault()
                                              $event.stopPropagation()
                                            }
                                          },
                                          slot: "activator"
                                        },
                                        [
                                          _c("v-icon", [_vm._v("person_add")]),
                                          _vm._v(
                                            "Follow\n                            "
                                          )
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              notification.isNewsletter
                                ? _c(
                                    "v-list-tile-action",
                                    [
                                      _c(
                                        "v-btn",
                                        {
                                          attrs: {
                                            slot: "activator",
                                            color: "primary"
                                          },
                                          on: {
                                            click: function($event) {
                                              $event.preventDefault()
                                              $event.stopPropagation()
                                              _vm.show(notification)
                                            }
                                          },
                                          slot: "activator"
                                        },
                                        [
                                          _vm._v(
                                            "Show\n                            "
                                          )
                                        ]
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
                    : _vm._e()
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("dialog-comment", {
            attrs: {
              open: _vm.openDialogComment,
              article: _vm.article,
              articles: _vm.articles
            },
            on: {
              close: function($event) {
                _vm.openDialogComment = !_vm.openDialogComment
              }
            }
          }),
          _vm._v(" "),
          _c(
            "v-layout",
            { staticStyle: { "margin-bottom": "65px" }, attrs: { row: "" } },
            [
              _c(
                "v-flex",
                {
                  attrs: {
                    sm10: "",
                    xs12: "",
                    lg8: "",
                    md8: "",
                    "offset-lg2": "",
                    "offset-sm1": "",
                    "offset-md2": ""
                  }
                },
                [
                  _c(
                    "v-card",
                    {
                      staticClass: "card--flex-toolbar",
                      staticStyle: { height: "100%" },
                      attrs: {
                        dark: _vm.darked,
                        color: _vm.darked
                          ? "theme--dark"
                          : "theme--light bg_app"
                      }
                    },
                    [
                      _vm.loading && !_vm.$vuetify.breakpoint.smAndUp
                        ? _c("v-progress-linear", {
                            staticStyle: {
                              "z-index": "8",
                              "margin-left": "0",
                              top: "50px",
                              position: "fixed"
                            },
                            attrs: { indeterminate: true }
                          })
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.$vuetify.breakpoint.smAndUp
                        ? _c(
                            "v-toolbar",
                            {
                              style: _vm.$vuetify.breakpoint.smAndDown
                                ? "z-index:8;width:83.5%;position:fixed"
                                : "z-index:8;width:66.66666666666666%;position:fixed",
                              attrs: { dark: "", card: "", prominent: "" }
                            },
                            [
                              _vm.loading
                                ? _c("v-progress-linear", {
                                    staticStyle: {
                                      "margin-left": "0",
                                      top: "-14px",
                                      position: "absolute"
                                    },
                                    attrs: { indeterminate: true }
                                  })
                                : _vm._e(),
                              _vm._v(" "),
                              _c(
                                "v-toolbar-title",
                                { staticClass: "body-2 grey--text" },
                                [_vm._v(_vm._s(_vm.$route.name))]
                              ),
                              _vm._v(" "),
                              _c("v-spacer"),
                              _vm._v(" "),
                              _c("v-select", {
                                attrs: {
                                  light: "",
                                  solo: "",
                                  items: _vm.searchItems,
                                  placeholder: "Search",
                                  multiple: "",
                                  chips: "",
                                  "item-text": "name",
                                  "item-value": "id",
                                  "max-height": "auto",
                                  "prepend-icon": "search",
                                  autocomplete: ""
                                },
                                nativeOn: {
                                  input: function($event) {
                                    _vm.search($event)
                                  }
                                },
                                scopedSlots: _vm._u([
                                  {
                                    key: "selection",
                                    fn: function(data) {
                                      return [
                                        _c(
                                          "v-chip",
                                          {
                                            key: JSON.stringify(data.item),
                                            staticClass: "chip--select-multi",
                                            attrs: {
                                              close: "",
                                              selected: data.selected
                                            },
                                            on: {
                                              input: function($event) {
                                                data.parent.selectItem(
                                                  data.item
                                                )
                                              }
                                            }
                                          },
                                          [
                                            _c("v-avatar", [
                                              _c("img", {
                                                attrs: { src: data.item.avatar }
                                              })
                                            ]),
                                            _vm._v(
                                              "\n                                    " +
                                                _vm._s(data.item.name) +
                                                "\n                                "
                                            )
                                          ],
                                          1
                                        )
                                      ]
                                    }
                                  },
                                  {
                                    key: "item",
                                    fn: function(data) {
                                      return [
                                        typeof data.item !== "object"
                                          ? [
                                              _c("v-list-tile-content", {
                                                domProps: {
                                                  textContent: _vm._s(data.item)
                                                }
                                              })
                                            ]
                                          : [
                                              _c("v-list-tile-avatar", [
                                                _c("img", {
                                                  attrs: {
                                                    src: data.item.avatar
                                                  }
                                                })
                                              ]),
                                              _vm._v(" "),
                                              _c(
                                                "v-list-tile-content",
                                                [
                                                  _c("v-list-tile-title", {
                                                    domProps: {
                                                      innerHTML: _vm._s(
                                                        data.item.name
                                                      )
                                                    }
                                                  })
                                                ],
                                                1
                                              )
                                            ]
                                      ]
                                    }
                                  }
                                ]),
                                model: {
                                  value: _vm.selectedUser,
                                  callback: function($$v) {
                                    _vm.selectedUser = $$v
                                  },
                                  expression: "selectedUser"
                                }
                              })
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _c("v-divider"),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          class: _vm.$vuetify.breakpoint.smAndUp
                            ? "layout_bloc"
                            : "layout_phone"
                        },
                        [_c("router-view")],
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
                "v-flex",
                { attrs: { lg2: "", sm1: "", md2: "" } },
                [
                  _c(
                    "v-speed-dial",
                    {
                      style: _vm.$vuetify.breakpoint.smAndUp
                        ? "z-index:8"
                        : "bottom:0;right:0;z-index:8",
                      attrs: {
                        bottom: "",
                        right: "",
                        direction: "top",
                        hover: _vm.$vuetify.breakpoint.smAndUp,
                        fixed: ""
                      },
                      model: {
                        value: _vm.speedDial,
                        callback: function($$v) {
                          _vm.speedDial = $$v
                        },
                        expression: "speedDial"
                      }
                    },
                    [
                      _c(
                        "v-btn",
                        {
                          attrs: {
                            slot: "activator",
                            color: "blue darken-2",
                            dark: "",
                            fab: "",
                            hover: ""
                          },
                          slot: "activator",
                          model: {
                            value: _vm.speedDial,
                            callback: function($$v) {
                              _vm.speedDial = $$v
                            },
                            expression: "speedDial"
                          }
                        },
                        [
                          _c("v-icon", [_vm._v("account_circle")]),
                          _vm._v(" "),
                          _c("v-icon", [_vm._v("close")])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          attrs: {
                            fab: "",
                            dark: "",
                            small: "",
                            color: "green"
                          },
                          nativeOn: {
                            click: function($event) {
                              _vm.dialogPublication = true
                            }
                          }
                        },
                        [_c("v-icon", [_vm._v("edit")])],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          attrs: {
                            fab: "",
                            dark: "",
                            small: "",
                            color: "indigo"
                          },
                          on: {
                            click: function($event) {
                              _vm.drawerUsers = !_vm.drawerUsers
                            }
                          }
                        },
                        [_c("v-icon", [_vm._v("group")])],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-tooltip",
                        { attrs: { top: "" } },
                        [
                          _c(
                            "v-btn",
                            {
                              attrs: {
                                slot: "activator",
                                fab: "",
                                dark: "",
                                small: "",
                                color: "red"
                              },
                              on: { click: _vm.scrollToTop },
                              slot: "activator"
                            },
                            [_c("v-icon", [_vm._v("keyboard_arrow_up")])],
                            1
                          ),
                          _vm._v(" "),
                          _c("span", [_vm._v("Scroll to top!")])
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-navigation-drawer",
                    {
                      staticClass: "menuDrawer",
                      style:
                        _vm.$vuetify.breakpoint.smAndUp ||
                        "margin-top:63px !important",
                      attrs: {
                        temporary: "",
                        "hide-overlay": "",
                        right: "",
                        app: ""
                      },
                      model: {
                        value: _vm.drawerUsers,
                        callback: function($$v) {
                          _vm.drawerUsers = $$v
                        },
                        expression: "drawerUsers"
                      }
                    },
                    [
                      _c(
                        "v-list",
                        { staticClass: "pa-1" },
                        [
                          _c(
                            "v-list-tile",
                            { attrs: { avatar: "" } },
                            [
                              _c(
                                "v-list-tile-content",
                                [
                                  _c("v-list-tile-title", [
                                    _vm._v("Users online")
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
                        "v-list",
                        { staticClass: "pt-0", attrs: { dense: "" } },
                        [
                          _c("v-divider"),
                          _vm._v(" "),
                          _vm._l(_vm.users, function(user, i) {
                            return _c(
                              "v-list-tile",
                              {
                                key: i,
                                attrs: {
                                  to: "/profile/" + user.id,
                                  avatar: ""
                                },
                                on: { click: function($event) {} }
                              },
                              [
                                _c(
                                  "v-list-tile-action",
                                  [
                                    _c(
                                      "v-icon",
                                      {
                                        style: user.online
                                          ? "color:green"
                                          : null
                                      },
                                      [_vm._v("fiber_manual_record")]
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c("v-list-tile-avatar", [
                                  _c("img", { attrs: { src: user.avatar } })
                                ]),
                                _vm._v(" "),
                                _c(
                                  "v-list-tile-content",
                                  [
                                    _c("v-list-tile-title", [
                                      _vm._v(
                                        _vm._s(user.name + " " + user.forename)
                                      )
                                    ])
                                  ],
                                  1
                                )
                              ],
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
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-navigation-drawer",
        {
          class: _vm.$vuetify.breakpoint.smAndUp ? "menuDrawer" : null,
          style: !_vm.$vuetify.breakpoint.smAndUp || "margin-top:63px",
          attrs: {
            "mobile-break-point": 700,
            fixed: "",
            app: "",
            clipped: "",
            dark: _vm.darked,
            "mini-variant": _vm.mini
          },
          on: {
            "update:miniVariant": function($event) {
              _vm.mini = $event
            }
          },
          model: {
            value: _vm.drawer,
            callback: function($$v) {
              _vm.drawer = $$v
            },
            expression: "drawer"
          }
        },
        [
          _c(
            "v-toolbar",
            { staticClass: "transparent", attrs: { flat: "" } },
            [
              _c(
                "v-list",
                { staticClass: "pa-0" },
                [
                  _c(
                    "v-list-tile",
                    { attrs: { avatar: "" } },
                    [
                      _c("v-list-tile-avatar", [
                        _c("img", { attrs: { src: _vm.user.avatar } })
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-list-tile-content",
                        [
                          _c("v-list-tile-title", [
                            _vm._v(
                              _vm._s(_vm.user.name + " " + _vm.user.forename)
                            )
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
                              attrs: { icon: "" },
                              nativeOn: {
                                click: function($event) {
                                  $event.stopPropagation()
                                  _vm.mini = !_vm.mini
                                }
                              }
                            },
                            [_c("v-icon", [_vm._v("chevron_left")])],
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
            "v-list",
            { attrs: { dense: "" } },
            [
              _c(
                "v-list-group",
                [
                  _c(
                    "v-list-tile",
                    {
                      attrs: { slot: "item" },
                      on: { click: function($event) {} },
                      slot: "item"
                    },
                    [
                      _c(
                        "v-list-tile-action",
                        [_c("v-icon", [_vm._v("dashboard")])],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-list-tile-content",
                        [_c("v-list-tile-title", [_vm._v("Dashboard")])],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-list-tile-action",
                        [_c("v-icon", [_vm._v("keyboard_arrow_down")])],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-list-tile",
                    { attrs: { to: "/", exact: "" } },
                    [
                      _c(
                        "v-list-tile-action",
                        [_c("v-icon", [_vm._v("home")])],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-list-tile-content",
                        [_c("v-list-tile-title", [_vm._v("Home")])],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-list-tile",
                    { attrs: { to: "/box" } },
                    [
                      _c(
                        "v-list-tile-action",
                        [_c("v-icon", [_vm._v("email")])],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-list-tile-content",
                        [_c("v-list-tile-title", [_vm._v("Box")])],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-list-tile",
                    { attrs: { to: "/profile/" + _vm.user.id } },
                    [
                      _c(
                        "v-list-tile-action",
                        [
                          _c("v-avatar", { attrs: { size: "30px" } }, [
                            _c("img", {
                              attrs: { src: _vm.user.avatar, alt: "avatar" }
                            })
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-list-tile-content",
                        [_c("v-list-tile-title", [_vm._v("Profile")])],
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
                "v-list-group",
                [
                  _c(
                    "v-list-tile",
                    {
                      attrs: { slot: "item" },
                      on: { click: function($event) {} },
                      slot: "item"
                    },
                    [
                      _c(
                        "v-list-tile-action",
                        [_c("v-icon", [_vm._v("book")])],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-list-tile-content",
                        [_c("v-list-tile-title", [_vm._v("Programms")])],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-list-tile-action",
                        [_c("v-icon", [_vm._v("keyboard_arrow_down")])],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-list-tile",
                    { attrs: { to: "/exercises" } },
                    [
                      _c(
                        "v-list-tile-content",
                        [_c("v-list-tile-title", [_vm._v("Exercises")])],
                        1
                      ),
                      _vm._v(" "),
                      _c("v-list-tile-action", [_c("v-icon")], 1)
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-list-tile",
                    { attrs: { to: "/courses" } },
                    [
                      _c(
                        "v-list-tile-content",
                        [_c("v-list-tile-title", [_vm._v("Courses")])],
                        1
                      ),
                      _vm._v(" "),
                      _c("v-list-tile-action", [_c("v-icon")], 1)
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-list-group",
                [
                  _c(
                    "v-list-tile",
                    {
                      attrs: { slot: "item" },
                      on: { click: function($event) {} },
                      slot: "item"
                    },
                    [
                      _c(
                        "v-list-tile-action",
                        [_c("v-icon", [_vm._v("school")])],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-list-tile-content",
                        [
                          _c("v-list-tile-title", [
                            _vm._v("Germany and some universities")
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-list-tile-action",
                        [_c("v-icon", [_vm._v("keyboard_arrow_down")])],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-list-tile",
                    { attrs: { to: " " } },
                    [
                      _c(
                        "v-list-tile-content",
                        [_c("v-list-tile-title", [_vm._v("About Germany")])],
                        1
                      ),
                      _vm._v(" "),
                      _c("v-list-tile-action", [_c("v-icon")], 1)
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-list-tile",
                    { attrs: { to: " " } },
                    [
                      _c(
                        "v-list-tile-content",
                        [
                          _c("v-list-tile-title", [
                            _vm._v("Why Germany for study")
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("v-list-tile-action", [_c("v-icon")], 1)
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-list-tile",
                    { on: { click: function($event) {} } },
                    [
                      _c(
                        "v-list-tile-content",
                        [_c("v-list-tile-title", [_vm._v("Life in Germany")])],
                        1
                      ),
                      _vm._v(" "),
                      _c("v-list-tile-action", [_c("v-icon")], 1)
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-list-tile",
                    { attrs: { to: "/university" } },
                    [
                      _c(
                        "v-list-tile-content",
                        [_c("v-list-tile-title", [_vm._v("Universities")])],
                        1
                      ),
                      _vm._v(" "),
                      _c("v-list-tile-action", [_c("v-icon")], 1)
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-list-group",
                [
                  _c(
                    "v-list-tile",
                    {
                      attrs: { slot: "item" },
                      on: { click: function($event) {} },
                      slot: "item"
                    },
                    [
                      _c(
                        "v-list-tile-action",
                        [_c("v-icon", [_vm._v("apps")])],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-list-tile-content",
                        [_c("v-list-tile-title", [_vm._v("More")])],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-list-tile-action",
                        [_c("v-icon", [_vm._v("keyboard_arrow_down")])],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-list-tile",
                    { attrs: { to: "/actualities" } },
                    [
                      _c(
                        "v-list-tile-action",
                        [_c("v-icon", [_vm._v("whatshot")])],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-list-tile-content",
                        [_c("v-list-tile-title", [_vm._v("Actualities")])],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-list-tile",
                    { attrs: { to: "/forum" } },
                    [
                      _c(
                        "v-list-tile-action",
                        [_c("v-icon", [_vm._v("forum")])],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-list-tile-content",
                        [_c("v-list-tile-title", [_vm._v("Forum")])],
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
                "v-list-group",
                [
                  _c(
                    "v-list-tile",
                    {
                      attrs: { slot: "item" },
                      on: { click: function($event) {} },
                      slot: "item"
                    },
                    [
                      _c(
                        "v-list-tile-action",
                        [_c("v-icon", [_vm._v("settings")])],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-list-tile-content",
                        [_c("v-list-tile-title", [_vm._v("Parameters")])],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-list-tile-action",
                        [_c("v-icon", [_vm._v("keyboard_arrow_down")])],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-list-tile",
                    { attrs: { to: "/account" } },
                    [
                      _c(
                        "v-list-tile-action",
                        [_c("v-icon", [_vm._v("person")])],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-list-tile-content",
                        [_c("v-list-tile-title", [_vm._v("Account")])],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-list-tile",
                    { on: { click: _vm.logout } },
                    [
                      _c(
                        "v-list-tile-action",
                        [_c("v-icon", [_vm._v("exit_to_app")])],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-list-tile-content",
                        [_c("v-list-tile-title", [_vm._v("Log out")])],
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
                "v-list-group",
                [
                  _c(
                    "v-list-tile",
                    {
                      attrs: { slot: "item" },
                      on: { click: function($event) {} },
                      slot: "item"
                    },
                    [
                      _c(
                        "v-list-tile-action",
                        [_c("v-icon", [_vm._v("settings_applications")])],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-list-tile-content",
                        [_c("v-list-tile-title", [_vm._v("Application")])],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-list-tile-action",
                        [_c("v-icon", [_vm._v("keyboard_arrow_down")])],
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
                        [_c("v-icon", [_vm._v("bug_report")])],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-list-tile-content",
                        [_c("v-list-tile-title", [_vm._v("Signal bug")])],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-list-tile",
                    { attrs: { to: "/about" } },
                    [
                      _c(
                        "v-list-tile-action",
                        [_c("v-icon", [_vm._v("info")])],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-list-tile-content",
                        [_c("v-list-tile-title", [_vm._v("About us")])],
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
                        [_c("v-icon", [_vm._v("invert_colors")])],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-list-tile-content",
                        [
                          _c(
                            "v-list-tile-title",
                            [
                              _c(
                                "v-tooltip",
                                { attrs: { top: "" } },
                                [
                                  _c("v-switch", {
                                    attrs: { slot: "activator" },
                                    slot: "activator",
                                    model: {
                                      value: _vm.darked,
                                      callback: function($$v) {
                                        _vm.darked = $$v
                                      },
                                      expression: "darked"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("span", [
                                    _vm._v(
                                      "Change the background color to black"
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
                ],
                1
              ),
              _vm._v(" "),
              _vm.user.role === "admin"
                ? _c(
                    "v-list-group",
                    [
                      _c(
                        "v-list-tile",
                        {
                          attrs: { slot: "item" },
                          on: { click: function($event) {} },
                          slot: "item"
                        },
                        [
                          _c(
                            "v-list-tile-action",
                            [
                              _c("v-icon", { attrs: { dark: "" } }, [
                                _vm._v("dashboard")
                              ])
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-list-tile-content",
                            [_c("v-list-tile-title", [_vm._v("Dashboard")])],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-list-tile-action",
                            [_c("v-icon", [_vm._v("keyboard_arrow_down")])],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-list-tile",
                        { attrs: { to: "/admin", exact: "" } },
                        [
                          _c(
                            "v-list-tile-action",
                            [
                              _c("v-icon", { attrs: { dark: "" } }, [
                                _vm._v("apps")
                              ])
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-list-tile-content",
                            [_c("v-list-tile-title", [_vm._v("Home")])],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-list-tile",
                        { attrs: { to: "/admin/users" } },
                        [
                          _c(
                            "v-list-tile-action",
                            [
                              _c("v-icon", { attrs: { dark: "" } }, [
                                _vm._v("group")
                              ])
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-list-tile-content",
                            [_c("v-list-tile-title", [_vm._v("Users")])],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-list-tile",
                        { attrs: { to: "/admin/books" } },
                        [
                          _c(
                            "v-list-tile-action",
                            [
                              _c("v-icon", { attrs: { dark: "" } }, [
                                _vm._v("edit")
                              ])
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-list-tile-content",
                            [_c("v-list-tile-title", [_vm._v("Books")])],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-list-tile",
                        { attrs: { to: "/admin/university" } },
                        [
                          _c(
                            "v-list-tile-action",
                            [
                              _c("v-icon", { attrs: { dark: "" } }, [
                                _vm._v("school")
                              ])
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-list-tile-content",
                            [_c("v-list-tile-title", [_vm._v("University")])],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-list-tile",
                        { attrs: { to: "/admin/edit" } },
                        [
                          _c(
                            "v-list-tile-action",
                            [
                              _c("v-icon", { attrs: { dark: "" } }, [
                                _vm._v("edit")
                              ])
                            ],
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
                        { attrs: { to: "/admin/server" } },
                        [
                          _c(
                            "v-list-tile-action",
                            [
                              _c("v-icon", { attrs: { dark: "" } }, [
                                _vm._v("dns")
                              ])
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-list-tile-content",
                            [_c("v-list-tile-title", [_vm._v("Process")])],
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
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-footer",
        { staticClass: "pa-3", attrs: { absolute: "" } },
        [
          _c("v-spacer"),
          _vm._v(" "),
          _c("div", [
            _vm._v("© " + _vm._s(new Date().getFullYear()) + " Weltimo")
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c("textarea", {
        staticStyle: { position: "fixed", top: "-1000px", left: "-1000px" },
        attrs: { id: "textareaClipboard" },
        on: {
          focus: function($event) {
            $event.stopPropagation()
            $event.preventDefault()
          }
        }
      }),
      _vm._v(" "),
      _vm.$vuetify.breakpoint.smAndUp
        ? _c("pdf-viewer", { attrs: { url: "url" } })
        : _vm._e(),
      _vm._v(" "),
      _c("cardPublication", {
        attrs: { onlyDialog: true, open: _vm.dialogPublication },
        on: {
          close: function($event) {
            _vm.dialogPublication = false
          }
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-43998c28", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ })
]));