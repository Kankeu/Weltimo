webpackJsonp([55],{

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__carousel_Carousel_vue__ = __webpack_require__(311);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    components: { carousel: __WEBPACK_IMPORTED_MODULE_0__carousel_Carousel_vue__["a" /* default */] },
    data: function data() {
        return {
            ready: true,
            images: [],
            image: null,
            openCarousel: false
        };
    },
    computed: {
        user: function user() {
            return this.$store.state.user.user;
        },
        query: function query() {
            var _this = this;

            return this.$store.state.query.queries.find(function (e) {
                return e.name === "album" && e.id === _this.$route.params.id;
            });
        },
        profile: function profile() {
            var _this2 = this;

            return this.$store.state.users.users.find(function (user) {
                return user.id === parseInt(_this2.$route.params.id);
            });
        },
        end: function end() {
            var _this3 = this;

            return this.$store.state.query.queries.find(function (e) {
                return e.name === "album" && !e.next && e.id === parseInt(_this3.$route.params.id);
            });
        },
        scrollTop: function scrollTop() {
            var scroll = this.$store.state.setting.scrollTops.find(function (e) {
                return e.name === "album";
            }) || {};
            return scroll.scrollTop;
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
                            var _images;

                            _this4.$store.dispatch("query/save", { name: 'album', next: response.body.next_page_url, id: parseInt(_this4.$route.params.id) });
                            (_images = _this4.images).push.apply(_images, _toConsumableArray(response.body.data));
                        }
                        _this4.ready = true;
                        _this4.$store.dispatch('setting/setLoading', false);
                    });
                }
            }
        },
        selectImage: function selectImage(image) {
            this.image = image;
            this.openCarousel = true;
        },
        load: function load() {
            var _this5 = this;

            if (!this.query && this.ready) {
                this.ready = false;
                this.$store.dispatch('setting/setLoading', true);
                this.$http.get('/user/profile/' + this.$route.params.id + '/album').then(function (response) {
                    if (response.body.data instanceof Object) {
                        _this5.$store.dispatch("query/save", { name: 'album', next: response.body.next_page_url, id: parseInt(_this5.$route.params.id) });
                        _this5.images = response.body.data;
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
    },
    destroyed: function destroyed() {
        this.$store.dispatch('setting/addScrollTop', { scrollTop: document.body.scrollTop, name: "album" });
    },

    watch: {
        '$route.params.id': function $routeParamsId() {
            this.load();
        }
    }
});

/***/ }),

/***/ 198:
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
        image: Object,
        images: Array
    },
    data: function data() {
        return {
            dialog: false,
            index: -1,
            loading: false
        };
    },
    methods: {
        getArticle: function getArticle(image) {
            return image.imagable_type === "App\\Article" ? this.$store.state.article.articles.find(function (article) {
                return article.id === image.imagable_id;
            }) : null;
        }
    },
    watch: {
        open: function open(data) {
            if (data) {
                this.index = this.images.indexOf(this.image);
                this.dialog = data;
            }
        },
        dialog: function dialog(data) {
            if (!data) {
                this.$emit('close');
            }
        },
        image: function image(_image) {
            this.index = this.images.indexOf(_image);
        },
        index: function index(_index) {
            this.$scrollTo('#image' + this.images[_index].id, 10, { container: 'body' });
        }
    }
});

/***/ }),

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_env_modules_false_targets_browsers_last_2_versions_safari_7_debug_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_syntax_dynamic_import_node_modules_vue_loader_lib_selector_type_script_index_0_Carousel_vue__ = __webpack_require__(198);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_73129e70_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Carousel_vue__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(3);
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(312)
  __webpack_require__(314)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-73129e70"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_env_modules_false_targets_browsers_last_2_versions_safari_7_debug_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_syntax_dynamic_import_node_modules_vue_loader_lib_selector_type_script_index_0_Carousel_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_73129e70_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Carousel_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_73129e70_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Carousel_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/carousel/Carousel.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-73129e70", Component.options)
  } else {
    hotAPI.reload("data-v-73129e70", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 312:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(313);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(4).default
var update = add("77b7326b", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-73129e70\",\"scoped\":true,\"sourceMap\":false}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Carousel.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-73129e70\",\"scoped\":true,\"sourceMap\":false}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Carousel.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 313:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "\n.nbr-photos[data-v-73129e70]{\n    position:absolute;\n    width: 100%;\n    height: 25%;\n    display:none;\n    bottom: 0;\n    background-color: rgba(0, 0, 0, .4);\n    text-align: center;\n    color: #fff;\n    border-radius: 4px;\n    font-size: 18px;\n}\ndiv:hover > .nbr-photos[data-v-73129e70]{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.nbr-photos[data-v-73129e70]:hover{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n", ""]);

// exports


/***/ }),

/***/ 314:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(315);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(4).default
var update = add("16e065f2", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-73129e70\",\"scoped\":false,\"sourceMap\":false}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./Carousel.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-73129e70\",\"scoped\":false,\"sourceMap\":false}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./Carousel.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 315:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "\n.carousel_item{\n    position: relative !important\n}\n", ""]);

// exports


/***/ }),

/***/ 316:
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
            "hide-controls": _vm.images.length < 2,
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
        _vm._l(_vm.images, function(image, i) {
          return _c(
            "v-carousel-item",
            { key: i, staticClass: "carousel_item", attrs: { src: " " } },
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
                          _c("img", {
                            attrs: {
                              src: image.path,
                              width: "100%",
                              height: "100%"
                            }
                          }),
                          _vm._v(" "),
                          _vm.getArticle(image) &&
                          JSON.parse(_vm.getArticle(image).message).length > 0
                            ? _c("div", { staticClass: "nbr-photos" }, [
                                _c(
                                  "div",
                                  {
                                    staticStyle: {
                                      width: "100%",
                                      "text-align": "center",
                                      overflow: "auto"
                                    }
                                  },
                                  _vm._l(
                                    JSON.parse(_vm.getArticle(image).message),
                                    function(message, i) {
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
                                    }
                                  )
                                )
                              ])
                            : _vm._e()
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
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-73129e70", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-container",
    {
      style: _vm.$vuetify.breakpoint.smAndUp
        ? "margin-top:50px"
        : "padding:0;padding-top:8px",
      attrs: { fluid: "", md: "" }
    },
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
          ]
        },
        [
          _c(
            "v-flex",
            {
              attrs: { xs12: "", sm10: "", "offset-sm1": "", "offset-xs0": "" }
            },
            [
              _c(
                "v-card",
                [
                  _c(
                    "v-container",
                    {
                      attrs: {
                        "grid-list-md": "",
                        "text-xs-center": "",
                        fluid: ""
                      }
                    },
                    [
                      _vm.images.length > 0
                        ? _c(
                            "v-layout",
                            {
                              attrs: {
                                column: !_vm.$vuetify.breakpoint.smAndUp,
                                row: _vm.$vuetify.breakpoint.smAndUp,
                                wrap: ""
                              }
                            },
                            _vm._l(_vm.images, function(image, i) {
                              return _c(
                                "v-flex",
                                { key: i, attrs: { xs12: "", lg4: "" } },
                                [
                                  _c(
                                    "v-card",
                                    {
                                      attrs: {
                                        flat: "",
                                        id: "image" + image.id,
                                        hover: "",
                                        tile: ""
                                      },
                                      nativeOn: {
                                        click: function($event) {
                                          _vm.selectImage(image)
                                        }
                                      }
                                    },
                                    [
                                      _c("v-card-media", {
                                        attrs: {
                                          src: image.path,
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
                        : _c(
                            "v-layout",
                            {
                              staticStyle: { height: "200px" },
                              attrs: {
                                column: "",
                                "align-center": "",
                                "justify-center": ""
                              }
                            },
                            [_c("h1", [_vm._v("Album empty")])]
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
      _c("carousel", {
        attrs: { images: _vm.images, open: _vm.openCarousel, image: _vm.image },
        on: {
          close: function($event) {
            _vm.openCarousel = false
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
    require("vue-hot-reload-api")      .rerender("data-v-ebac5952", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_env_modules_false_targets_browsers_last_2_versions_safari_7_debug_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_syntax_dynamic_import_node_modules_vue_loader_lib_selector_type_script_index_0_CardAlbums_vue__ = __webpack_require__(197);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_ebac5952_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_CardAlbums_vue__ = __webpack_require__(317);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_env_modules_false_targets_browsers_last_2_versions_safari_7_debug_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_syntax_dynamic_import_node_modules_vue_loader_lib_selector_type_script_index_0_CardAlbums_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_ebac5952_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_CardAlbums_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_ebac5952_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_CardAlbums_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/user/profile/CardAlbums.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-ebac5952", Component.options)
  } else {
    hotAPI.reload("data-v-ebac5952", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

});