webpackJsonp([32],{

/***/ 22:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(325)
  __webpack_require__(327)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(329)
/* template */
var __vue_template__ = __webpack_require__(345)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-23531612"
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
Component.options.__file = "resources/assets/js/components/user/forum/ShowTopic.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-23531612", Component.options)
  } else {
    hotAPI.reload("data-v-23531612", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 325:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(326);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("0a489398", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-23531612\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./ShowTopic.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-23531612\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./ShowTopic.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 326:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "\n#showTopicResponse[data-v-23531612] {\n    padding-left: 10px;\n    margin-left: -10px;\n    border-left: 5px solid turquoise;\n}\n", ""]);

// exports


/***/ }),

/***/ 327:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(328);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("9d031284", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-23531612\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=1&bustCache!./ShowTopic.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-23531612\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=1&bustCache!./ShowTopic.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 328:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "\n.elt_topic {\n    color: #404852 !important;\n    font-family: \"Open Sans\";\n    font-size: 15px !important;\n    font: status-bar;\n}\n", ""]);

// exports


/***/ }),

/***/ 329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__HeaderShowTopic_vue__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__HeaderShowTopic_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__HeaderShowTopic_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__TopicResponse_vue__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__TopicResponse_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__TopicResponse_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ForumForm_vue__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ForumForm_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__ForumForm_vue__);
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




/* harmony default export */ __webpack_exports__["default"] = ({
    components: { topicResponse: __WEBPACK_IMPORTED_MODULE_1__TopicResponse_vue___default.a, headerShowTopic: __WEBPACK_IMPORTED_MODULE_0__HeaderShowTopic_vue___default.a, forumForm: __WEBPACK_IMPORTED_MODULE_2__ForumForm_vue___default.a },
    data: function data() {
        return {
            ready: true
        };
    },
    computed: {
        end: function end() {
            var _this = this;

            return this.$store.state.query.queries.find(function (e) {
                return e.name === 'showTopic' && !e.next && e.id === parseInt(_this.$route.params.id);
            });
        },
        query: function query() {
            var _this2 = this;

            return this.$store.state.query.queries.find(function (e) {
                return e.name === 'showTopic' && e.id === parseInt(_this2.$route.params.id);
            });
        },
        topic: function topic() {
            var _this3 = this;

            return this.$store.state.topic.topics.find(function (topic) {
                return topic.id === parseInt(_this3.$route.params.id);
            }) || {};
        },
        topicresponses: function topicresponses() {
            var _this4 = this;

            return this.$store.state.topicresponse.topicresponses.filter(function (topicresponse) {
                return topicresponse.topic_id === _this4.topic.id;
            });
        },
        owner: function owner() {
            var _this5 = this;

            return this.$store.state.users.users.find(function (user) {
                return user.id === _this5.topic.user_id;
            }) || {};
        },
        user: function user() {
            return this.$store.state.user.user;
        }
    },
    methods: {
        loadMoreResponses: function loadMoreResponses() {
            var _this6 = this;

            if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 600) {
                if (!this.end && this.ready) {
                    this.ready = false;
                    this.$store.dispatch('setting/setLoading', true);
                    this.$http.get(this.query.next).then(function (response) {
                        if (_typeof(response.body) === "object") {
                            var users = [];
                            response.body.data.map(function (topic) {
                                users.push(topic.user);
                                delete topic.user;
                            });
                            _this6.$store.dispatch("topicresponse/save", response.body.data);
                            _this6.$store.dispatch("users/save", users);
                            _this6.$store.dispatch("query/save", { name: 'showTopic', next: response.body.next_page_url, id: parseInt(_this6.$route.params.id) });
                        }
                        _this6.ready = true;
                        _this6.$store.dispatch('setting/setLoading', false);
                    });
                }
            }
        },
        loadResponses: function loadResponses() {
            var _this7 = this;

            if (!this.query && this.ready) {
                this.ready = false;
                this.$store.dispatch('setting/setLoading', true);
                this.$http.get('/user/forum/topic/' + this.$route.params.id + '/topicresponse').then(function (response) {
                    if (Array.isArray(response.body.data)) {
                        var users = [];
                        response.body.data.map(function (topic) {
                            users.push(topic.user);
                            delete topic.user;
                        });
                        _this7.$store.dispatch("topicresponse/save", response.body.data);
                        _this7.$store.dispatch("users/save", users);
                        _this7.$store.dispatch("query/save", { name: 'showTopic', next: response.body.next_page_url, id: parseInt(_this7.$route.params.id) });
                        _this7.$nextTick(function () {
                            if (_this7.$route.params.response_id) {
                                document.querySelector('#topicresponse' + _this7.$route.params.response_id).scrollIntoView(false);
                            }
                        });
                    }
                    _this7.ready = true;
                    _this7.$store.dispatch('setting/setLoading', false);
                });
            }
        },
        load: function load() {
            var _this8 = this;

            if (!this.query && this.ready) {
                this.ready = false;
                this.$store.dispatch('setting/setLoading', true);
                this.$http.get('/user/forum/topic/' + this.$route.params.id).then(function (response) {
                    _this8.ready = true;
                    if (_typeof(response.body) === "object") {
                        var user = response.body.user;
                        delete response.body.user;
                        var categories = response.body.categories;
                        delete response.body.categories;
                        _this8.$store.dispatch("topic/save", response.body);
                        _this8.$store.dispatch("category/save", categories);
                        _this8.$store.dispatch("users/save", user);
                        _this8.loadResponses();
                    }
                    _this8.$store.dispatch('setting/setLoading', false);
                });
            }
        }
    },
    mounted: function mounted() {
        this.load();
        window.temp = this;
    },

    watch: {
        '$route.params.id': function $routeParamsId(data) {
            this.load();
        },
        '$route.params.response_id': function $routeParamsResponse_id(data) {
            if (data) {
                document.querySelector('#topicresponse' + this.$route.params.response_id).scrollIntoView(false);
            }
        }
    }
});

/***/ }),

/***/ 330:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(331)
/* template */
var __vue_template__ = __webpack_require__(335)
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
Component.options.__file = "resources/assets/js/components/user/forum/HeaderShowTopic.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7a3639aa", Component.options)
  } else {
    hotAPI.reload("data-v-7a3639aa", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__share_DialogShare_vue__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__share_DialogShare_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__share_DialogShare_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ForumTopicEditForm_vue__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ForumTopicEditForm_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__ForumTopicEditForm_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    components: { dialogShare: __WEBPACK_IMPORTED_MODULE_0__share_DialogShare_vue___default.a, dialogForumTopicEditForm: __WEBPACK_IMPORTED_MODULE_1__ForumTopicEditForm_vue___default.a },
    props: {
        topic: Object
    },
    data: function data() {
        return {
            openDialogShare: false,
            topicDelete: false,
            loading: false,
            opendialogForumEditForm: false,
            userPopover: false
        };
    },
    computed: {
        user: function user() {
            return this.$store.state.user.user;
        },
        owner: function owner() {
            var _this = this;

            return this.$store.state.users.users.find(function (user) {
                return user.id === _this.topic.user_id;
            }) || {};
        }
    },
    methods: {
        copie: function copie() {
            var textarea = document.querySelector("#textareaClipboard");
            textarea.value = this.urlTopic(this.topic.id);
            textarea.select();
            document.execCommand('copy');
            textarea.blur();
        },
        destroy: function destroy() {
            var _this2 = this;

            this.loading = true;
            this.$http.delete('user/forum/topic/' + this.topic.id).then(function (response) {
                if (response.body.status === 1) {
                    _this2.$store.dispatch('topic/delete', _this2.article);
                    _this2.loading = false;
                    _this2.topicDelete = false;
                }
            });
        }
    }
});

/***/ }),

/***/ 332:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(333)
/* template */
var __vue_template__ = __webpack_require__(334)
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
Component.options.__file = "resources/assets/js/components/user/forum/ForumTopicEditForm.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1f8fa0a7", Component.options)
  } else {
    hotAPI.reload("data-v-1f8fa0a7", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
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
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    props: {
        open: Boolean,
        topic: Object
    },
    data: function data() {
        return {
            dialog: false,
            categories: [],
            title: null,
            question: null,
            loading: false,
            defaultCatogories: ['Grammatik', 'Übung', 'Vokabel', 'Konjugation', 'Unterlagen']
        };
    },
    computed: {
        questionParsed: function questionParsed() {
            return JSON.stringify([{ text: this.question.trim() }]);
        },
        topicCategories: function topicCategories() {
            var _this = this;

            return this.$store.state.category.categories.filter(function (category) {
                return category.topic_id === _this.topic.id;
            });
        }
    },
    methods: {
        edit: function edit() {
            var _this2 = this;

            if (this.question && this.question.length > 0 && this.categories.length > 0 && this.title.length > 0) {
                this.loading = true;
                var data = { question: this.questionParsed, categories: this.categories, title: this.title };
                this.$http.put('/user/forum/topic/' + this.topic.id, data).then(function (response) {
                    if (_typeof(response.body) === "object") {
                        var categories = response.body.categories;
                        delete response.body.categories;
                        _this2.$store.dispatch("topic/save", response.body);
                        _this2.$store.dispatch("category/save", categories);
                    }
                    _this2.loading = false;
                });
            }
        }
    },
    mounted: function mounted() {
        var _this3 = this;

        this.question = JSON.parse(this.topic.question)[0].text;
        this.topic.categories;
        this.topicCategories.map(function (category) {
            _this3.categories.push(category.type);
        });
        this.title = this.topic.title;
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

/***/ 334:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-dialog",
    {
      attrs: { "max-width": "800" },
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
          _vm.loading
            ? _c("v-progress-linear", { attrs: { indeterminate: true } })
            : _vm._e(),
          _vm._v(" "),
          _c(
            "v-card-title",
            [
              _vm._v("\n            Edit the Topic"),
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
            "v-card-text",
            [
              _c(
                "v-layout",
                { attrs: { column: "" } },
                [
                  _c(
                    "v-flex",
                    [
                      _c(
                        "v-layout",
                        { attrs: { row: "", wrap: "" } },
                        [
                          _c(
                            "v-flex",
                            { attrs: { lg6: "" } },
                            [
                              _c("v-text-field", {
                                attrs: {
                                  label: "Title",
                                  counter: "190",
                                  maxlength: "190",
                                  required: "",
                                  box: ""
                                },
                                model: {
                                  value: _vm.title,
                                  callback: function($$v) {
                                    _vm.title =
                                      typeof $$v === "string" ? $$v.trim() : $$v
                                  },
                                  expression: "title"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-flex",
                            { attrs: { lg6: "" } },
                            [
                              _c("v-select", {
                                staticClass: "input_forum_category",
                                attrs: {
                                  label: "Categories",
                                  chips: "",
                                  tags: "",
                                  autocomplete: "",
                                  required: "",
                                  clearable: "",
                                  "deletable-chips": "",
                                  items: _vm.defaultCatogories
                                },
                                model: {
                                  value: _vm.categories,
                                  callback: function($$v) {
                                    _vm.categories = $$v
                                  },
                                  expression: "categories"
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
                  ),
                  _vm._v(" "),
                  _c(
                    "v-flex",
                    [
                      _c("v-text-field", {
                        attrs: {
                          "multi-line": "",
                          box: "",
                          label: "Question",
                          required: ""
                        },
                        model: {
                          value: _vm.question,
                          callback: function($$v) {
                            _vm.question =
                              typeof $$v === "string" ? $$v.trim() : $$v
                          },
                          expression: "question"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-flex",
                    { attrs: { lg12: "" } },
                    [
                      _c(
                        "v-btn",
                        {
                          staticStyle: { "margin-left": "0px" },
                          attrs: { color: "success", lg: "" },
                          on: { click: _vm.edit }
                        },
                        [
                          _vm._v(
                            "\n                        Edit Topic\n                    "
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
    require("vue-hot-reload-api")      .rerender("data-v-1f8fa0a7", module.exports)
  }
}

/***/ }),

/***/ 335:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-layout",
    { staticClass: "elt_topic", attrs: { row: "" } },
    [
      _vm.$vuetify.breakpoint.smAndUp
        ? _c(
            "v-flex",
            { staticStyle: { "padding-right": "0" }, attrs: { lg1: "" } },
            [
              _c("img", {
                staticStyle: {
                  height: "48px",
                  width: "48px",
                  "border-radius": "50%"
                },
                attrs: { src: _vm.owner.avatar, alt: "avatar" }
              })
            ]
          )
        : _vm._e(),
      _vm._v(" "),
      _c(
        "v-flex",
        { staticStyle: { "padding-left": "0" }, attrs: { xs12: "", lg11: "" } },
        [
          _c(
            "v-card",
            [
              _c(
                "v-card-text",
                [
                  _c(
                    "v-layout",
                    { attrs: { column: "" } },
                    [
                      _c(
                        "v-flex",
                        {
                          staticStyle: {
                            "padding-bottom": "0",
                            "padding-top": "0"
                          },
                          attrs: { lg12: "" }
                        },
                        [
                          _c(
                            "div",
                            {
                              staticStyle: {
                                width: "100%",
                                display: "flex",
                                "justify-content": "space-between"
                              }
                            },
                            [
                              _c(
                                "div",
                                [
                                  _c(
                                    "v-menu",
                                    {
                                      attrs: {
                                        "offset-x": "",
                                        "close-on-content-click": false,
                                        "nudge-width": 200
                                      },
                                      model: {
                                        value: _vm.userPopover,
                                        callback: function($$v) {
                                          _vm.userPopover = $$v
                                        },
                                        expression: "userPopover"
                                      }
                                    },
                                    [
                                      _c(
                                        "a",
                                        {
                                          attrs: { slot: "activator" },
                                          slot: "activator"
                                        },
                                        [
                                          _vm._v(
                                            _vm._s(
                                              _vm.owner.name +
                                                " " +
                                                _vm.owner.forename
                                            )
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _vm.userPopover
                                        ? _c(
                                            "v-card",
                                            [
                                              _c(
                                                "v-list",
                                                [
                                                  _c(
                                                    "v-list-tile",
                                                    {
                                                      attrs: {
                                                        avatar: "",
                                                        to:
                                                          "/profile/" +
                                                          _vm.owner.id
                                                      }
                                                    },
                                                    [
                                                      _c("v-list-tile-avatar", [
                                                        _c("img", {
                                                          attrs: {
                                                            src:
                                                              _vm.owner.avatar,
                                                            alt: "avatar"
                                                          }
                                                        })
                                                      ]),
                                                      _vm._v(" "),
                                                      _c(
                                                        "v-list-tile-content",
                                                        [
                                                          _c(
                                                            "v-list-tile-title",
                                                            [
                                                              _vm._v(
                                                                _vm._s(
                                                                  _vm.owner
                                                                    .name +
                                                                    " " +
                                                                    _vm.owner
                                                                      .forename
                                                                )
                                                              )
                                                            ]
                                                          ),
                                                          _vm._v(" "),
                                                          _vm.owner.role ===
                                                          "admin"
                                                            ? _c(
                                                                "v-list-tile-sub-title",
                                                                [
                                                                  _vm._v(
                                                                    "Founder of Weltimo"
                                                                  )
                                                                ]
                                                              )
                                                            : _c(
                                                                "v-list-tile-sub-title"
                                                              )
                                                        ],
                                                        1
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "v-list-tile-action",
                                                        [
                                                          _vm.user.id !==
                                                          _vm.owner.id
                                                            ? _c(
                                                                "v-btn",
                                                                {
                                                                  class: _vm
                                                                    .owner
                                                                    .followed
                                                                    ? "blue--text"
                                                                    : "",
                                                                  attrs: {
                                                                    icon: ""
                                                                  },
                                                                  nativeOn: {
                                                                    click: function(
                                                                      $event
                                                                    ) {
                                                                      $event.stopPropagation()
                                                                      $event.preventDefault()
                                                                      _vm.follow(
                                                                        _vm.owner
                                                                      )
                                                                    }
                                                                  }
                                                                },
                                                                [
                                                                  _c("v-icon", [
                                                                    _vm._v(
                                                                      "person_add"
                                                                    )
                                                                  ])
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
                                                "v-layout",
                                                { attrs: { column: "" } },
                                                [
                                                  _c(
                                                    "v-flex",
                                                    {
                                                      attrs: {
                                                        lg12: "",
                                                        xs12: ""
                                                      }
                                                    },
                                                    [
                                                      _c(
                                                        "v-avatar",
                                                        {
                                                          staticClass:
                                                            "menuCover",
                                                          staticStyle: {
                                                            height: "150px"
                                                          },
                                                          attrs: {
                                                            size: "200px",
                                                            tile: true
                                                          }
                                                        },
                                                        [
                                                          _c("img", {
                                                            attrs: {
                                                              src:
                                                                _vm.owner.cover,
                                                              alt:
                                                                "cover picture"
                                                            }
                                                          })
                                                        ]
                                                      )
                                                    ],
                                                    1
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "v-flex",
                                                    {
                                                      attrs: {
                                                        lg12: "",
                                                        xs12: ""
                                                      }
                                                    },
                                                    [
                                                      _c(
                                                        "v-layout",
                                                        {
                                                          staticStyle: {
                                                            margin: "10px"
                                                          },
                                                          attrs: {
                                                            row: "",
                                                            wrap: "",
                                                            "align-center": "",
                                                            "justify-center": ""
                                                          }
                                                        },
                                                        [
                                                          _c("v-flex", [
                                                            _c(
                                                              "p",
                                                              {
                                                                staticStyle: {
                                                                  "margin-bottom":
                                                                    "0px"
                                                                }
                                                              },
                                                              [
                                                                _vm._v(
                                                                  "Following"
                                                                )
                                                              ]
                                                            ),
                                                            _c(
                                                              "span",
                                                              {
                                                                staticStyle: {
                                                                  color:
                                                                    "#1B95E0 !important",
                                                                  "font-size":
                                                                    "20px"
                                                                }
                                                              },
                                                              [
                                                                _vm._v(
                                                                  _vm._s(
                                                                    _vm.owner
                                                                      .following_count
                                                                  )
                                                                )
                                                              ]
                                                            )
                                                          ]),
                                                          _vm._v(" "),
                                                          _c("v-flex", [
                                                            _c(
                                                              "p",
                                                              {
                                                                staticStyle: {
                                                                  "margin-bottom":
                                                                    "0px"
                                                                }
                                                              },
                                                              [
                                                                _vm._v(
                                                                  "Followers"
                                                                )
                                                              ]
                                                            ),
                                                            _c(
                                                              "span",
                                                              {
                                                                staticStyle: {
                                                                  color:
                                                                    "#1B95E0 !important",
                                                                  "font-size":
                                                                    "20px"
                                                                }
                                                              },
                                                              [
                                                                _vm._v(
                                                                  _vm._s(
                                                                    _vm.owner
                                                                      .followers_count
                                                                  )
                                                                )
                                                              ]
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
                                        : _vm._e()
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "small",
                                    [
                                      _c("timeago", {
                                        attrs: {
                                          since: _vm.topic.created_at,
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
                                "v-menu",
                                [
                                  _c(
                                    "v-btn",
                                    {
                                      attrs: { slot: "activator", icon: "" },
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
                                            [
                                              _c("v-list-tile-title", [
                                                _vm._v("Share")
                                              ])
                                            ],
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
                                                  _vm.opendialogForumEditForm = true
                                                }
                                              }
                                            },
                                            [
                                              _c(
                                                "v-list-tile-action",
                                                [
                                                  _c("v-icon", [_vm._v("edit")])
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "v-list-tile-content",
                                                [
                                                  _c("v-list-tile-title", [
                                                    _vm._v("Edit")
                                                  ])
                                                ],
                                                1
                                              )
                                            ],
                                            1
                                          )
                                        : _vm._e(),
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
                                            [
                                              _c("v-list-tile-title", [
                                                _vm._v("Signal")
                                              ])
                                            ],
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
                                                  _vm.topicDelete = true
                                                }
                                              }
                                            },
                                            [
                                              _c(
                                                "v-list-tile-action",
                                                [
                                                  _c("v-icon", [
                                                    _vm._v("delete")
                                                  ])
                                                ],
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
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c("v-divider"),
                      _vm._v(" "),
                      _vm.topic.title
                        ? _c(
                            "v-flex",
                            {
                              staticStyle: {
                                "font-size": "18px",
                                "line-height": "20px"
                              },
                              attrs: { lg12: "" }
                            },
                            [_vm._v(_vm._s(_vm.topic.title))]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _c(
                        "v-flex",
                        {
                          staticStyle: {
                            height: "inherit",
                            "white-space": "pre-wrap"
                          },
                          attrs: { lg12: "" }
                        },
                        [_vm._v(_vm._s(JSON.parse(_vm.topic.question)[0].text))]
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
        "v-dialog",
        {
          attrs: { "max-width": "290" },
          model: {
            value: _vm.topicDelete,
            callback: function($$v) {
              _vm.topicDelete = $$v
            },
            expression: "topicDelete"
          }
        },
        [
          _c(
            "v-card",
            [
              _vm.loading
                ? _c("v-progress-linear", {
                    staticStyle: { margin: "0" },
                    attrs: { indeterminate: "true" }
                  })
                : _vm._e(),
              _vm._v(" "),
              _c("v-card-title", { staticClass: "headline" }, [
                _vm._v("Deleting the  response.")
              ]),
              _vm._v(" "),
              _c("v-divider"),
              _vm._v(" "),
              _c("v-card-text", [
                _vm._v(
                  "\n                Are you sure you want to delete this topic?\n            "
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
                          _vm.topicDelete = false
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
      _c("dialog-forum-topic-edit-form", {
        attrs: { topic: _vm.topic, open: _vm.opendialogForumEditForm },
        on: {
          close: function($event) {
            _vm.opendialogForumEditForm = false
          }
        }
      }),
      _vm._v(" "),
      _c("dialog-share", {
        attrs: {
          open: _vm.openDialogShare,
          url: _vm.urlTopic(this.topic.id),
          message: _vm.topic.title
        },
        on: {
          close: function($event) {
            _vm.openDialogShare = false
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
    require("vue-hot-reload-api")      .rerender("data-v-7a3639aa", module.exports)
  }
}

/***/ }),

/***/ 336:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(337)
/* template */
var __vue_template__ = __webpack_require__(341)
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
Component.options.__file = "resources/assets/js/components/user/forum/TopicResponse.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3bb005d5", Component.options)
  } else {
    hotAPI.reload("data-v-3bb005d5", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__share_DialogShare_vue__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__share_DialogShare_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__share_DialogShare_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ForumResponseEditForm_vue__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ForumResponseEditForm_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__ForumResponseEditForm_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    components: { dialogShare: __WEBPACK_IMPORTED_MODULE_0__share_DialogShare_vue___default.a, dialogForumResponseEditForm: __WEBPACK_IMPORTED_MODULE_1__ForumResponseEditForm_vue___default.a },
    props: {
        topicresponse: Object
    },
    data: function data() {
        return {
            openDialogShare: false,
            topicDelete: false,
            loading: false,
            openDialogEditForm: false,
            userPopover: false
        };
    },
    computed: {
        user: function user() {
            return this.$store.state.user.user;
        },
        owner: function owner() {
            var _this = this;

            return this.$store.state.users.users.find(function (user) {
                return user.id === _this.topicresponse.user_id;
            }) || {};
        }
    },
    methods: {
        masquer: function masquer() {
            this.$store.dispatch("topicresponse/delete", { id: this.topicresponse.id });
        },
        copie: function copie() {
            var textarea = document.querySelector("#textareaClipboard");
            textarea.value = this.urlTopicResponse(parseInt(this.$route.params.id), this.topicresponse.id);
            textarea.select();
            document.execCommand('copy');
            textarea.blur();
        },
        destroy: function destroy() {
            var _this2 = this;

            this.loading = true;
            this.$http.delete('user/forum/topic/' + parseInt(this.$route.params.id) + '/topicresponse/' + this.topicresponse.id).then(function (response) {
                if (response.body.status === 1) {
                    _this2.$store.dispatch('topicresponse/delete', _this2.topicresponse);
                    _this2.loading = false;
                    _this2.topicDelete = false;
                }
            });
        }
    }
});

/***/ }),

/***/ 338:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(339)
/* template */
var __vue_template__ = __webpack_require__(340)
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
Component.options.__file = "resources/assets/js/components/user/forum/ForumResponseEditForm.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0b7f5a56", Component.options)
  } else {
    hotAPI.reload("data-v-0b7f5a56", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
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

/* harmony default export */ __webpack_exports__["default"] = ({
    props: {
        open: Boolean,
        topicresponse: Object
    },
    data: function data() {
        return {
            dialog: false,
            response: null,
            loading: false
        };
    },
    computed: {
        responseParsed: function responseParsed() {
            return JSON.stringify([{ text: this.response.trim() }]);
        }
    },
    methods: {
        edit: function edit() {
            var _this = this;

            if (this.response && this.response.length > 0) {
                var data = { response: this.responseParsed };
                this.loading = true;
                this.$http.put('/user/forum/topic/' + this.$route.params.id + '/topicresponse/' + this.topicresponse.id, data).then(function (response) {
                    if (_typeof(response.body) === "object") {
                        _this.$store.dispatch("topicresponse/save", response.body);
                    }
                    _this.loading = false;
                });
            }
        }
    },
    mounted: function mounted() {
        this.response = JSON.parse(this.topicresponse.response)[0].text;
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

/***/ 340:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-dialog",
    {
      attrs: { "max-width": "700" },
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
          _vm.loading
            ? _c("v-progress-linear", { attrs: { indeterminate: true } })
            : _vm._e(),
          _vm._v(" "),
          _c(
            "v-card-title",
            [
              _vm._v("\n            Edit the response"),
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
            "v-card-text",
            [
              _c(
                "v-layout",
                { attrs: { column: "" } },
                [
                  _c(
                    "v-flex",
                    { attrs: { lg12: "" } },
                    [
                      _c("v-text-field", {
                        attrs: {
                          "multi-line": "",
                          box: "",
                          label: "Answer",
                          required: ""
                        },
                        model: {
                          value: _vm.response,
                          callback: function($$v) {
                            _vm.response =
                              typeof $$v === "string" ? $$v.trim() : $$v
                          },
                          expression: "response"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-flex",
                    { attrs: { lg12: "" } },
                    [
                      _c(
                        "v-btn",
                        {
                          staticStyle: { "margin-left": "0px" },
                          attrs: { color: "success", lg: "" },
                          on: { click: _vm.edit }
                        },
                        [
                          _vm._v(
                            "\n                        Edit Response\n                    "
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
    require("vue-hot-reload-api")      .rerender("data-v-0b7f5a56", module.exports)
  }
}

/***/ }),

/***/ 341:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-layout",
    {
      staticClass: "elt_topic",
      attrs: { id: "topicresponse" + _vm.topicresponse.id, row: "" }
    },
    [
      _vm.$vuetify.breakpoint.smAndUp
        ? _c(
            "v-flex",
            { staticStyle: { "padding-right": "0" }, attrs: { lg1: "" } },
            [
              _c("img", {
                staticStyle: {
                  height: "48px",
                  width: "48px",
                  "border-radius": "50%"
                },
                attrs: { src: _vm.owner.avatar, alt: "avatar" }
              })
            ]
          )
        : _vm._e(),
      _vm._v(" "),
      _c(
        "v-flex",
        { staticStyle: { "padding-left": "0" }, attrs: { lg11: "" } },
        [
          _c(
            "v-card",
            [
              _c(
                "v-card-text",
                [
                  _c(
                    "v-layout",
                    { attrs: { column: "" } },
                    [
                      _c(
                        "v-flex",
                        {
                          staticStyle: {
                            "padding-bottom": "0",
                            "padding-top": "0"
                          },
                          attrs: { lg12: "" }
                        },
                        [
                          _c(
                            "div",
                            {
                              staticStyle: {
                                width: "100%",
                                display: "flex",
                                "justify-content": "space-between"
                              }
                            },
                            [
                              _c(
                                "div",
                                [
                                  _c(
                                    "v-menu",
                                    {
                                      attrs: {
                                        "offset-x": "",
                                        "close-on-content-click": false,
                                        "nudge-width": 200
                                      },
                                      model: {
                                        value: _vm.userPopover,
                                        callback: function($$v) {
                                          _vm.userPopover = $$v
                                        },
                                        expression: "userPopover"
                                      }
                                    },
                                    [
                                      _c(
                                        "a",
                                        {
                                          attrs: { slot: "activator" },
                                          slot: "activator"
                                        },
                                        [
                                          _vm._v(
                                            _vm._s(
                                              _vm.owner.name +
                                                " " +
                                                _vm.owner.forename
                                            )
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _vm.userPopover
                                        ? _c(
                                            "v-card",
                                            [
                                              _c(
                                                "v-list",
                                                [
                                                  _c(
                                                    "v-list-tile",
                                                    {
                                                      attrs: {
                                                        avatar: "",
                                                        to:
                                                          "/profile/" +
                                                          _vm.owner.id
                                                      }
                                                    },
                                                    [
                                                      _c("v-list-tile-avatar", [
                                                        _c("img", {
                                                          attrs: {
                                                            src:
                                                              _vm.owner.avatar,
                                                            alt: "avatar"
                                                          }
                                                        })
                                                      ]),
                                                      _vm._v(" "),
                                                      _c(
                                                        "v-list-tile-content",
                                                        [
                                                          _c(
                                                            "v-list-tile-title",
                                                            [
                                                              _vm._v(
                                                                _vm._s(
                                                                  _vm.owner
                                                                    .name +
                                                                    " " +
                                                                    _vm.owner
                                                                      .forename
                                                                )
                                                              )
                                                            ]
                                                          ),
                                                          _vm._v(" "),
                                                          _vm.owner.role ===
                                                          "admin"
                                                            ? _c(
                                                                "v-list-tile-sub-title",
                                                                [
                                                                  _vm._v(
                                                                    "Founder of Weltimo"
                                                                  )
                                                                ]
                                                              )
                                                            : _c(
                                                                "v-list-tile-sub-title"
                                                              )
                                                        ],
                                                        1
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "v-list-tile-action",
                                                        [
                                                          _vm.user.id !==
                                                          _vm.owner.id
                                                            ? _c(
                                                                "v-btn",
                                                                {
                                                                  class: _vm
                                                                    .owner
                                                                    .followed
                                                                    ? "blue--text"
                                                                    : "",
                                                                  attrs: {
                                                                    icon: ""
                                                                  },
                                                                  nativeOn: {
                                                                    click: function(
                                                                      $event
                                                                    ) {
                                                                      $event.stopPropagation()
                                                                      $event.preventDefault()
                                                                      _vm.follow(
                                                                        _vm.owner
                                                                      )
                                                                    }
                                                                  }
                                                                },
                                                                [
                                                                  _c("v-icon", [
                                                                    _vm._v(
                                                                      "person_add"
                                                                    )
                                                                  ])
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
                                                "v-layout",
                                                { attrs: { column: "" } },
                                                [
                                                  _c(
                                                    "v-flex",
                                                    {
                                                      attrs: {
                                                        lg12: "",
                                                        xs12: ""
                                                      }
                                                    },
                                                    [
                                                      _c(
                                                        "v-avatar",
                                                        {
                                                          staticClass:
                                                            "menuCover",
                                                          staticStyle: {
                                                            height: "150px"
                                                          },
                                                          attrs: {
                                                            size: "200px",
                                                            tile: true
                                                          }
                                                        },
                                                        [
                                                          _c("img", {
                                                            attrs: {
                                                              src:
                                                                _vm.owner.cover,
                                                              alt:
                                                                "cover picture"
                                                            }
                                                          })
                                                        ]
                                                      )
                                                    ],
                                                    1
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "v-flex",
                                                    {
                                                      attrs: {
                                                        lg12: "",
                                                        xs12: ""
                                                      }
                                                    },
                                                    [
                                                      _c(
                                                        "v-layout",
                                                        {
                                                          staticStyle: {
                                                            margin: "10px"
                                                          },
                                                          attrs: {
                                                            row: "",
                                                            wrap: "",
                                                            "align-center": "",
                                                            "justify-center": ""
                                                          }
                                                        },
                                                        [
                                                          _c("v-flex", [
                                                            _c(
                                                              "p",
                                                              {
                                                                staticStyle: {
                                                                  "margin-bottom":
                                                                    "0px"
                                                                }
                                                              },
                                                              [
                                                                _vm._v(
                                                                  "Following"
                                                                )
                                                              ]
                                                            ),
                                                            _c(
                                                              "span",
                                                              {
                                                                staticStyle: {
                                                                  color:
                                                                    "#1B95E0 !important",
                                                                  "font-size":
                                                                    "20px"
                                                                }
                                                              },
                                                              [
                                                                _vm._v(
                                                                  _vm._s(
                                                                    _vm.owner
                                                                      .following_count
                                                                  )
                                                                )
                                                              ]
                                                            )
                                                          ]),
                                                          _vm._v(" "),
                                                          _c("v-flex", [
                                                            _c(
                                                              "p",
                                                              {
                                                                staticStyle: {
                                                                  "margin-bottom":
                                                                    "0px"
                                                                }
                                                              },
                                                              [
                                                                _vm._v(
                                                                  "Followers"
                                                                )
                                                              ]
                                                            ),
                                                            _c(
                                                              "span",
                                                              {
                                                                staticStyle: {
                                                                  color:
                                                                    "#1B95E0 !important",
                                                                  "font-size":
                                                                    "20px"
                                                                }
                                                              },
                                                              [
                                                                _vm._v(
                                                                  _vm._s(
                                                                    _vm.owner
                                                                      .followers_count
                                                                  )
                                                                )
                                                              ]
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
                                        : _vm._e()
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "small",
                                    [
                                      _c("timeago", {
                                        attrs: {
                                          since: _vm.topicresponse.created_at,
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
                                "v-menu",
                                [
                                  _c(
                                    "v-btn",
                                    {
                                      attrs: { slot: "activator", icon: "" },
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
                                            [
                                              _c("v-list-tile-title", [
                                                _vm._v("Share")
                                              ])
                                            ],
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
                                                  _vm.openDialogEditForm = true
                                                }
                                              }
                                            },
                                            [
                                              _c(
                                                "v-list-tile-action",
                                                [
                                                  _c("v-icon", [_vm._v("edit")])
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "v-list-tile-content",
                                                [
                                                  _c("v-list-tile-title", [
                                                    _vm._v("Edit")
                                                  ])
                                                ],
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
                                            [
                                              _c("v-list-tile-title", [
                                                _vm._v("Hide")
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
                                            [
                                              _c("v-list-tile-title", [
                                                _vm._v("Signal")
                                              ])
                                            ],
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
                                                  _vm.topicDelete = true
                                                }
                                              }
                                            },
                                            [
                                              _c(
                                                "v-list-tile-action",
                                                [
                                                  _c("v-icon", [
                                                    _vm._v("delete")
                                                  ])
                                                ],
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
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c("v-divider"),
                      _vm._v(" "),
                      _c(
                        "v-flex",
                        {
                          staticStyle: {
                            height: "inherit",
                            "white-space": "pre-wrap"
                          },
                          attrs: { lg12: "" }
                        },
                        [
                          _vm._v(
                            _vm._s(
                              JSON.parse(_vm.topicresponse.response)[0].text
                            )
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
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: { "max-width": "290" },
          model: {
            value: _vm.topicDelete,
            callback: function($$v) {
              _vm.topicDelete = $$v
            },
            expression: "topicDelete"
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
                _vm._v("Deleting the  response.")
              ]),
              _vm._v(" "),
              _c("v-divider"),
              _vm._v(" "),
              _c("v-card-text", [
                _vm._v(
                  "\n                Are you sure you want to delete this response?\n            "
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
                          _vm.topicDelete = false
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
      _c("dialog-forum-response-edit-form", {
        attrs: {
          open: _vm.openDialogEditForm,
          topicresponse: _vm.topicresponse
        },
        on: {
          close: function($event) {
            _vm.openDialogEditForm = false
          }
        }
      }),
      _vm._v(" "),
      _c("dialog-share", {
        attrs: {
          open: _vm.openDialogShare,
          url: _vm.urlTopicResponse(_vm.$route.params.id, _vm.topicresponse.id)
        },
        on: {
          close: function($event) {
            _vm.openDialogShare = false
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
    require("vue-hot-reload-api")      .rerender("data-v-3bb005d5", module.exports)
  }
}

/***/ }),

/***/ 342:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(343)
/* template */
var __vue_template__ = __webpack_require__(344)
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
Component.options.__file = "resources/assets/js/components/user/forum/ForumForm.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-df725e6c", Component.options)
  } else {
    hotAPI.reload("data-v-df725e6c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
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

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            emailReceive: false,
            response: null
        };
    },
    computed: {
        responseParsed: function responseParsed() {
            return JSON.stringify([{ text: this.response.trim() }]);
        }
    },
    methods: {
        publish: function publish() {
            var _this = this;

            if (this.response && this.response.length > 0) {
                var data = { response: this.responseParsed, emailReceive: this.emailReceive };
                this.$store.dispatch('setting/setLoading', true);
                this.$http.post('/user/forum/topic/' + this.$route.params.id + '/topicresponse', data).then(function (response) {
                    if (_typeof(response.body) === "object") {
                        _this.$store.dispatch("topicresponse/save", response.body);
                        _this.response = null;
                        _this.emailReceive = false;
                    }
                    _this.$store.dispatch('setting/setLoading', false);
                });
            }
        }
    }
});

/***/ }),

/***/ 344:
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
        { attrs: { lg12: "" } },
        [
          _c("v-text-field", {
            attrs: { "multi-line": "", box: "", label: "Answer", required: "" },
            model: {
              value: _vm.response,
              callback: function($$v) {
                _vm.response = typeof $$v === "string" ? $$v.trim() : $$v
              },
              expression: "response"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-flex",
        { attrs: { lg12: "" } },
        [
          _c("v-checkbox", {
            attrs: {
              label: "Receive an email alert when someone answers about it."
            },
            model: {
              value: _vm.emailReceive,
              callback: function($$v) {
                _vm.emailReceive = $$v
              },
              expression: "emailReceive"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-flex",
        { attrs: { lg12: "" } },
        [
          _c(
            "v-btn",
            {
              staticStyle: { "margin-left": "0px" },
              attrs: { color: "success", lg: "" },
              on: { click: _vm.publish }
            },
            [_vm._v("\n            Reply\n        ")]
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
    require("vue-hot-reload-api")      .rerender("data-v-df725e6c", module.exports)
  }
}

/***/ }),

/***/ 345:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.topic.id
    ? _c(
        "v-container",
        {
          directives: [
            {
              name: "scroll",
              rawName: "v-scroll",
              value: { callback: this.loadMoreResponses },
              expression: "{callback: this.loadMoreResponses}"
            }
          ],
          attrs: { "grid-list-lg": "", fluid: "" }
        },
        [
          _c(
            "v-layout",
            { attrs: { column: "" } },
            [
              _c(
                "v-flex",
                { attrs: { lg12: "" } },
                [_c("header-show-topic", { attrs: { topic: _vm.topic } })],
                1
              ),
              _vm._v(" "),
              _c("v-flex", { attrs: { lg12: "" } }, [
                _c(
                  "h2",
                  {
                    staticStyle: {
                      "font-size": "21px",
                      "font-weight": "700",
                      "line-height": "1.2"
                    }
                  },
                  [
                    _vm._v(
                      _vm._s(_vm.topic.topicresponses_count) +
                        " " +
                        _vm._s(
                          _vm.plural("Response", _vm.topic.topicresponses_count)
                        )
                    )
                  ]
                )
              ]),
              _vm._v(" "),
              _vm.topicresponses.length > 5
                ? _c("v-flex", { attrs: { lg12: "" } }, [_c("forum-form")], 1)
                : _vm._e(),
              _vm._v(" "),
              _c(
                "v-flex",
                { attrs: { lg12: "" } },
                [
                  _c(
                    "v-layout",
                    { attrs: { column: "" } },
                    _vm._l(_vm.topicresponses, function(topicresponse) {
                      return _c(
                        "v-flex",
                        { key: topicresponse.id, attrs: { lg12: "" } },
                        [
                          _c(
                            "blockquote",
                            {
                              attrs: {
                                id:
                                  topicresponse.id ===
                                  parseInt(_vm.$route.params.response_id)
                                    ? "showTopicResponse"
                                    : null
                              }
                            },
                            [
                              _c("topic-response", {
                                attrs: { topicresponse: topicresponse }
                              })
                            ],
                            1
                          )
                        ]
                      )
                    })
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("v-flex", { attrs: { lg12: "" } }, [_c("forum-form")], 1)
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
    require("vue-hot-reload-api")      .rerender("data-v-23531612", module.exports)
  }
}

/***/ }),

/***/ 87:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(92)
/* template */
var __vue_template__ = __webpack_require__(93)
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

/***/ 92:
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

/***/ 93:
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
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-9ea2bec0", module.exports)
  }
}

/***/ })

});