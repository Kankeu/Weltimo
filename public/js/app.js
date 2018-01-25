webpackJsonp([19],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_User__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_Users__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_Setting__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modules_Article__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modules_Comment__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modules_Query__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modules_MsgFlash__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__webSocket_webSocketPlugin__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__modules_Like__ = __webpack_require__(43);

Vue.use(__WEBPACK_IMPORTED_MODULE_0_vuex__["default"]);










/* harmony default export */ __webpack_exports__["default"] = (new __WEBPACK_IMPORTED_MODULE_0_vuex__["default"].Store({
    //strict: process.env.NODE_ENV !== 'production',
    modules: {
        user: __WEBPACK_IMPORTED_MODULE_1__modules_User__["a" /* default */],
        msgflash: __WEBPACK_IMPORTED_MODULE_7__modules_MsgFlash__["a" /* default */],
        article: __WEBPACK_IMPORTED_MODULE_4__modules_Article__["a" /* default */],
        query: __WEBPACK_IMPORTED_MODULE_6__modules_Query__["a" /* default */],
        users: __WEBPACK_IMPORTED_MODULE_2__modules_Users__["a" /* default */],
        comment: __WEBPACK_IMPORTED_MODULE_5__modules_Comment__["a" /* default */],
        like: __WEBPACK_IMPORTED_MODULE_9__modules_Like__["a" /* default */],
        setting: __WEBPACK_IMPORTED_MODULE_3__modules_Setting__["a" /* default */]
    },
    plugins: [Object(__WEBPACK_IMPORTED_MODULE_8__webSocket_webSocketPlugin__["a" /* default */])()]
}));

/***/ }),
/* 16 */,
/* 17 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(45)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction) {
  isProduction = _isProduction

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(46)
}
var normalizeComponent = __webpack_require__(17)
/* script */
var __vue_script__ = __webpack_require__(48)
/* template */
var __vue_template__ = __webpack_require__(49)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-5258311c"
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
Component.options.__file = "resources/assets/js/components/route/Route.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5258311c", Component.options)
  } else {
    hotAPI.reload("data-v-5258311c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(21);


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__bootstrap__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_route_Route_vue__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_route_Route_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_route_Route_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_store_store__ = __webpack_require__(15);




var app = new Vue({
    components: { App: __WEBPACK_IMPORTED_MODULE_1__components_route_Route_vue___default.a },
    el: "#main",
    router: __WEBPACK_IMPORTED_MODULE_0__bootstrap__["a" /* router */],
    store: __WEBPACK_IMPORTED_MODULE_2__components_store_store__["default"]
});

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return router; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuetify__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuetify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vuetify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuetify_dist_vuetify_min_css__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuetify_dist_vuetify_min_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vuetify_dist_vuetify_min_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vee_validate__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vue_resource__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_mixin_config__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_mixin_config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__components_mixin_config__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_mixin_GlobalMixin__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_faceMotion_FaceMotion_css__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_faceMotion_FaceMotion_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__components_faceMotion_FaceMotion_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_jquery__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_vue_scrollto__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_vue_scrollto___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_vue_scrollto__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_vue_timeago__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_vue_timeago___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_vue_timeago__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_laravel_echo__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_laravel_echo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_laravel_echo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_emojionearea__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_emojionearea___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_emojionearea__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_emojionearea_dist_emojionearea_css__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_emojionearea_dist_emojionearea_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_emojionearea_dist_emojionearea_css__);
window.Vue = __webpack_require__(6);















window.Pusher = __webpack_require__(14);
window.Echo = new __WEBPACK_IMPORTED_MODULE_11_laravel_echo___default.a({
    broadcaster: 'pusher',
    key: 'c44c08157a6c9f6414cf',
    secret: "b3e43f210686fa6a90ff",
    cluster: "eu"
});
var store = __webpack_require__(15);
Vue.use(__WEBPACK_IMPORTED_MODULE_9_vue_scrollto___default.a);

Vue.use(__WEBPACK_IMPORTED_MODULE_3_vee_validate__["default"]);
Vue.use(__WEBPACK_IMPORTED_MODULE_1_vuetify___default.a);
Vue.use(__WEBPACK_IMPORTED_MODULE_0_vue_router__["default"]);
Vue.use(__WEBPACK_IMPORTED_MODULE_4_vue_resource__["default"]);
var token = document.head.querySelector('meta[name="csrf-token"]');
window.Vue.http.headers.common['X-CSRF-TOKEN'] = token.content;
window.Vue.http.headers.common['X-Requested-With'] = 'XMLHttpRequest';
window.Vue.http.options.emulateHTTP = true;

Vue.mixin(__WEBPACK_IMPORTED_MODULE_6__components_mixin_GlobalMixin__["a" /* default */]);
Vue.use(__WEBPACK_IMPORTED_MODULE_10_vue_timeago___default.a, {
    name: 'timeago',
    locale: 'en-US',
    locales: {
        'en-US': __webpack_require__(44)
    }
});
window.jQuery = __WEBPACK_IMPORTED_MODULE_8_jquery___default.a;
window.$ = __WEBPACK_IMPORTED_MODULE_8_jquery___default.a;

var router = new __WEBPACK_IMPORTED_MODULE_0_vue_router__["default"]({
    mode: "hash",
    routes: [{
        path: "/",
        component: function component(resolve) {
            return __webpack_require__.e/* require */(14).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(51)]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
        },
        children: [{
            path: "/",
            component: function component(resolve) {
                return __webpack_require__.e/* require */(9).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(52)]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
            }
        }, {
            path: "/sign_in",
            component: function component(resolve) {
                return __webpack_require__.e/* require */(7).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(53)]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
            },
            name: "Inscription"
        }]
    }, {
        path: "/user",
        component: function component(resolve) {
            return __webpack_require__.e/* require */(2).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(54)]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
        },
        beforeEnter: function beforeEnter(to, from, next) {
            var connected = store.default.state.user.user ? store.default.state.user.user.confirmated : 0;
            if (connected === 1) {
                next();
            } else {
                Vue.http.get('/log_in').then(function (response) {
                    if (parseInt(response.body.confirmated) === 1) {
                        store.default.dispatch("user/save", response.body);
                        store.default.dispatch("users/save", response.body);
                        next();
                    } else {
                        next('/');
                    }
                });
            }
        },
        children: [{
            path: "/",
            component: function component(resolve) {
                return __webpack_require__.e/* require */(1).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(55)]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
            },
            name: "Home"
        }, {
            path: "actus",
            component: function component(resolve) {
                return __webpack_require__.e/* require */(3).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(56)]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
            },
            name: "Actus"
        }, {
            path: "profile/:id",
            component: function component(resolve) {
                return __webpack_require__.e/* require */(5).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(57)]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
            },
            name: "Profile",
            children: [{
                path: "/",
                component: function component(resolve) {
                    return __webpack_require__.e/* require */(0).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(58)]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
                },
                children: [{
                    path: "article/:article",
                    component: function component(resolve) {
                        return __webpack_require__.e/* require */(4).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(59)]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
                    }
                }]
            }, {
                path: "following",
                component: function component(resolve) {
                    return __webpack_require__.e/* require */(15).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(60)]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
                },
                name: "Following"
            }, {
                path: "followers",
                component: function component(resolve) {
                    return __webpack_require__.e/* require */(16).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(61)]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
                },
                name: "Followers"
            }, {
                path: "albums",
                component: function component(resolve) {
                    return __webpack_require__.e/* require */(17).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(62)]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
                },
                name: "Albums"
            }]
        }, {
            path: "admin",
            component: function component(resolve) {
                return __webpack_require__.e/* require */(12).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(63)]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
            },
            name: "Admin",
            children: [{
                path: "/",
                component: function component(resolve) {
                    return __webpack_require__.e/* require */(8).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(64)]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
                }
            }, {
                path: "users",
                component: function component(resolve) {
                    return __webpack_require__.e/* require */(6).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(65)]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
                }
            }, {
                path: "edit",
                component: function component(resolve) {
                    return __webpack_require__.e/* require */(11).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(66)]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
                }
            }, {
                path: "server",
                component: function component(resolve) {
                    return __webpack_require__.e/* require */(18).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(67)]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
                }
            }, {
                path: "*",
                redirect: "/user"
            }]
        }, {
            path: "account",
            component: function component(resolve) {
                return __webpack_require__.e/* require */(10).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(68)]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
            },
            name: "Account"
        }, {
            path: "about",
            component: function component(resolve) {
                return __webpack_require__.e/* require */(13).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(69)]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
            },
            name: "About"
        }, {
            path: "*",
            redirect: "/"
        }]
    }, {
        path: "*/:text",
        redirect: "/"
    }]
});
router.afterEach(function (to, from) {
    if (to.path.match(new RegExp('/user.*?', "g"))) {
        store.default.dispatch('setting/setLoading', false);
    }
});
router.beforeEach(function (to, from, next) {
    if (to.path.match(new RegExp('/user.*?', "g"))) {
        store.default.dispatch('setting/setLoading', true);
    }
    next();
});



/***/ }),
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */
/***/ (function(module, exports) {

NodeList.prototype.map = new Array().map;
window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    methods: {
        plural: function plural(word, number) {
            return number > 1 ? word + "s" : word;
        },
        urlArticle: function urlArticle(id, user_id) {
            return window.location.origin + '/#/user/profile/' + user_id + '/article/' + id;
        }
    }
});

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(32);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(2)(content, options);
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
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, ".faceMocion { display: none;padding-bottom:8px;padding-top:8px;padding-right: 8px;\npadding-left: 0px;box-sizing: border-box;background: white;color: white;position: absolute;width: auto;height: 65px;line-height: 25px;border-radius: 50px;transition: .25sease-in-out;color:black;border: 1px solid #eee;-webkit-box-shadow: 4px 4px 21px -9px rgba(0,0,0,0.75);-moz-box-shadow: 4px 4px 21px -9px rgba(0,0,0,0.75);box-shadow: 4px 4px 21px -9px rgba(0,0,0,0.75);}.faceMocion div{margin-left: 8px;float: left;width: 48px; height: 48px; cursor: pointer; transition: all 0.2s ease;}.selectorFace{margin-left: 8px;float: left;width: 48px; height: 48px; cursor: pointer; transition: all 0.2s ease;}.faceMocion div:hover{ -webkit-transform:scale(1.25);-moz-transform:scale(1.25);-ms-transform:scale(1.25);-o-transform:scale(1.25);transform:scale(1.25);}.molesto{ margin-left: 8px;float: left;width: 48px; height: 48px; background: url(/img/default/sqhTN9lgaY1.png) 0 0; }.asusta{background: url(/img/default/sqhTN9lgaY1.png) 0 -48px; }.divierte{background: url(/img/default/sqhTN9lgaY1.png) 0 -96px; }.gusta{background: url(/img/default/sqhTN9lgaY1.png) 0 -144px; }.amo{background: url(/img/default/sqhTN9lgaY1.png) 0 -192px; }.triste{background: url(/img/default/sqhTN9lgaY1.png) 0 -240px; }.asombro{background: url(/img/default/sqhTN9lgaY1.png) 0 -288px; }.alegre{background: url(/img/default/sqhTN9lgaY1.png) 0 -336px; }.MensajeTexto{display:none;position:absolute;border:1px solid #333;background-color:#161616;\nborder-radius:5px;padding:3px;color:#fff;font-family: sans-serif;font-size: 12px;}", ""]);

// exports


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
   true ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.VueTimeago = factory());
}(this, (function () { 'use strict';

var MINUTE = 60;
var HOUR = MINUTE * 60;
var DAY = HOUR * 24;
var WEEK = DAY * 7;
var MONTH = DAY * 30;
var YEAR = DAY * 365;

function pluralOrSingular(data, locale) {
  if (data === 'just now') {
    return locale
  }
  var count = Math.round(data);
  if (Array.isArray(locale)) {
    return count > 1
      ? locale[1].replace(/%s/, count)
      : locale[0].replace(/%s/, count)
  }
  return locale.replace(/%s/, count)
}

function formatTime(time) {
  var d = new Date(time);
  return d.toLocaleString()
}

function install(
  Vue,
  ref
) {
  if ( ref === void 0 ) ref = {};
  var name = ref.name; if ( name === void 0 ) name = 'timeago';
  var locale = ref.locale; if ( locale === void 0 ) locale = 'en-US';
  var locales = ref.locales; if ( locales === void 0 ) locales = null;

  if (!locales || Object.keys(locales).length === 0) {
    throw new TypeError('Expected locales to have at least one locale.')
  }

  var VueTimeago = {
    props: {
      since: {
        required: true
      },
      locale: String,
      maxTime: Number,
      autoUpdate: Number,
      format: Function
    },
    data: function data() {
      return {
        now: new Date().getTime()
      }
    },
    computed: {
      currentLocale: function currentLocale() {
        var current = locales[this.locale || locale];
        if (!current) {
          return locales[locale]
        }
        return current
      },
      sinceTime: function sinceTime() {
        return new Date(this.since).getTime()
      },
      timeForTitle: function timeForTitle() {
        var seconds = this.now / 1000 - this.sinceTime / 1000;

        if (this.maxTime && seconds > this.maxTime) {
          return null
        }

        return this.format
          ? this.format(this.sinceTime)
          : formatTime(this.sinceTime)
      },
      timeago: function timeago() {
        var seconds = this.now / 1000 - this.sinceTime / 1000;

        if (this.maxTime && seconds > this.maxTime) {
          clearInterval(this.interval);
          return this.format
            ? this.format(this.sinceTime)
            : formatTime(this.sinceTime)
        }

        var ret =
          seconds <= 5
            ? pluralOrSingular('just now', this.currentLocale[0])
            : seconds < MINUTE
              ? pluralOrSingular(seconds, this.currentLocale[1])
              : seconds < HOUR
                ? pluralOrSingular(seconds / MINUTE, this.currentLocale[2])
                : seconds < DAY
                  ? pluralOrSingular(seconds / HOUR, this.currentLocale[3])
                  : seconds < WEEK
                    ? pluralOrSingular(seconds / DAY, this.currentLocale[4])
                    : seconds < MONTH
                      ? pluralOrSingular(seconds / WEEK, this.currentLocale[5])
                      : seconds < YEAR
                        ? pluralOrSingular(
                            seconds / MONTH,
                            this.currentLocale[6]
                          )
                        : pluralOrSingular(
                            seconds / YEAR,
                            this.currentLocale[7]
                          );

        return ret
      }
    },
    mounted: function mounted() {
      if (this.autoUpdate) {
        this.update();
      }
    },
    render: function render(h) {
      return h(
        'time',
        {
          attrs: {
            datetime: new Date(this.since),
            title: this.timeForTitle
          }
        },
        this.timeago
      )
    },
    watch: {
      autoUpdate: function autoUpdate(newAutoUpdate) {
        this.stopUpdate();
        // only update when it's not falsy value
        // which means you cans set it to 0 to disable auto-update
        if (newAutoUpdate) {
          this.update();
        }
      }
    },
    methods: {
      update: function update() {
        var this$1 = this;

        var period = this.autoUpdate * 1000;
        this.interval = setInterval(function () {
          this$1.now = new Date().getTime();
        }, period);
      },
      stopUpdate: function stopUpdate() {
        clearInterval(this.interval);
        this.interval = null;
      }
    },
    beforeDestroy: function beforeDestroy() {
      this.stopUpdate();
    }
  };

  Vue.component(name, VueTimeago);
}

return install;

})));


/***/ }),
/* 34 */,
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

var state = {
    user: null
};

var mutations = {
    SAVE: function SAVE(state, data) {
        state.user = data;
    },
    UPDATE: function UPDATE(state, data) {
        Object.keys(data).map(function (key) {
            return state.user[key] = data[key];
        });
    },
    DELETE: function DELETE(state) {
        delete state.user;
    }
};

var actions = {
    save: function save(_ref, data) {
        var commit = _ref.commit;

        commit("SAVE", data);
    },
    update: function update(_ref2, data) {
        var commit = _ref2.commit;

        commit("UPDATE", data);
    },
    delete: function _delete(_ref3) {
        var commit = _ref3.commit;

        commit("DELETE");
    }
};

/* harmony default export */ __webpack_exports__["a"] = ({ namespaced: true, state: state, mutations: mutations, actions: actions });

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var state = {
    users: []
};

var mutations = {
    SAVE: function SAVE(state, data) {
        data.map(function (dataUser) {
            var user = state.users.find(function (user) {
                return user && user.id === dataUser.id;
            });
            if (user) {
                var index = state.users.indexOf(user);
                if (index > -1) state.users.splice(index, 1, dataUser);
            } else {
                state.users.push(dataUser);
            }
        });
    },
    UPDATE: function UPDATE(state, data) {
        var user = state.users.find(function (user) {
            return user.id === data.id;
        });
        var index = state.users.indexOf(user);
        if (index > -1) state.users.splice(index, 1, data);
    },
    DELETE: function DELETE(state, data) {
        var user = state.users.find(function (user) {
            return user.id === data.id;
        });
        var index = state.users.indexOf(user);
        if (index !== -1) state.users.splice(index, 1);
    },
    REMOVEFOLLOWING: function REMOVEFOLLOWING(state, data) {
        var user = state.users.find(function (user) {
            return user.id === data.id;
        });
        var index = state.users.indexOf(user);
        user.following_count--;
        if (index > -1) state.users.splice(index, 1, user);
    },
    REMOVEFOLLOWER: function REMOVEFOLLOWER(state, data) {
        var user = state.users.find(function (user) {
            return user.id === data.id;
        });
        var index = state.users.indexOf(user);
        user.followers_count--;
        if (index > -1) state.users.splice(index, 1, user);
    },
    ADDFOLLOWING: function ADDFOLLOWING(state, data) {
        var user = state.users.find(function (user) {
            return user.id === data.id;
        });
        var index = state.users.indexOf(user);
        user.following_count++;
        if (index > -1) state.users.splice(index, 1, user);
    }
};

var actions = {
    save: function save(_ref, data) {
        var commit = _ref.commit;

        if (!Array.isArray(data)) {
            data = [data];
        }
        commit("SAVE", data);
    },
    update: function update(_ref2, data) {
        var commit = _ref2.commit;

        commit("UPDATE", data);
    },
    delete: function _delete(_ref3, data) {
        var commit = _ref3.commit;

        commit("DELETE", data);
    },
    removeFollower: function removeFollower(_ref4, data) {
        var commit = _ref4.commit;

        commit("REMOVEFOLLOWER", data);
    },
    removeFollowing: function removeFollowing(_ref5, data) {
        var commit = _ref5.commit;

        commit("REMOVEFOLLOWING", data);
    },
    addFollowing: function addFollowing(_ref6, data) {
        var commit = _ref6.commit;

        commit("ADDFOLLOWING", data);
    }
};

/* harmony default export */ __webpack_exports__["a"] = ({ namespaced: true, state: state, mutations: mutations, actions: actions });

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

var state = {
    darked: false,
    loading: false,
    notifications: [],
    scrollTops: []
};

var mutations = {
    INVERTCOLOR: function INVERTCOLOR(state) {
        state.darked = !state.darked;
    },
    SETLOADING: function SETLOADING(state, data) {
        state.loading = data;
    },
    ADDNOTIFICATION: function ADDNOTIFICATION(state, data) {
        state.notifications.unshift(data);
    },
    DELETENOTIFICATION: function DELETENOTIFICATION(state, id) {
        var notification = state.notifications.find(function (notification) {
            return notification.id === id;
        });
        var index = state.notifications.indexOf(notification);
        if (index > -1) state.notifications.splice(index, 1);
    },
    ADDSCROLLTOP: function ADDSCROLLTOP(state, data) {
        var query = state.scrollTops.find(function (e) {
            return e.name === data.name;
        });
        if (query) {
            var index = state.scrollTops.indexOf(query);
            state.scrollTops.splice(index, 1, data);
        } else state.scrollTops.push(data);
    }
};

var actions = {
    invertcolor: function invertcolor(_ref) {
        var commit = _ref.commit;

        commit("INVERTCOLOR");
    },
    setLoading: function setLoading(_ref2, data) {
        var commit = _ref2.commit;

        commit("SETLOADING", data);
    },
    addNotification: function addNotification(_ref3, data) {
        var commit = _ref3.commit;

        commit('ADDNOTIFICATION', data);
    },
    deleteNotification: function deleteNotification(_ref4, id) {
        var commit = _ref4.commit;

        commit('DELETENOTIFICATION', id);
    },
    addScrollTop: function addScrollTop(_ref5, data) {
        var commit = _ref5.commit;

        commit("ADDSCROLLTOP", data);
    }
};

/* harmony default export */ __webpack_exports__["a"] = ({ namespaced: true, state: state, mutations: mutations, actions: actions });

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

var state = {
    articles: []
};

var mutations = {
    SAVE: function SAVE(state, data) {
        data.map(function (dataArticle) {
            var article = state.articles.find(function (article) {
                return article && article.id === dataArticle.id;
            });
            if (article) {
                var index = state.articles.indexOf(article);
                if (index > -1) state.articles[index] = dataArticle;
            } else {
                state.articles.push(dataArticle);
            }
        });
        state.articles.sort(function (article1, article2) {
            return article2.id - article1.id;
        });
    },
    UPDATE: function UPDATE(state, data) {
        var article = state.articles.find(function (article) {
            return article.id === data.id;
        });
        var index = state.articles.indexOf(article);
        if (index > -1) state.articles.splice(index, 1, data);
    },
    DELETE: function DELETE(state, data) {
        var article = state.articles.find(function (article) {
            return article.id === data.id;
        });
        var key = state.articles.indexOf(article);
        state.articles.splice(key, 1);
    },
    ADDLIKE: function ADDLIKE(state, _ref) {
        var article = _ref.article,
            like = _ref.like;

        article = state.articles.find(function (e) {
            return e.id === article.id;
        });
        var key = state.articles.indexOf(article);
        if (!state.articles[key].liked) state.articles[key].likes_count++;
        state.articles[key].liked = like;
    },
    DELETELIKE: function DELETELIKE(state, _ref2) {
        var article = _ref2.article;

        article = state.articles.find(function (e) {
            return e.id === article.id;
        });
        var key = state.articles.indexOf(article);
        if (state.articles[key].liked) state.articles[key].likes_count--;
        state.articles[key].liked = null;
    },
    ADDCOMMENT: function ADDCOMMENT(state, article) {
        article = state.articles.find(function (e) {
            return e.id === article.id;
        });
        var index = state.articles.indexOf(article);
        if (index > -1) state.articles[index].comments_count++;
    },
    DELETECOMMENT: function DELETECOMMENT(state, article) {
        article = state.articles.find(function (e) {
            return e.id === article.id;
        });
        var index = state.articles.indexOf(article);
        if (index > -1) state.articles[index].comments_count--;
    }
};

var actions = {
    save: function save(_ref3, data) {
        var commit = _ref3.commit;

        if (!Array.isArray(data)) {
            data = [data];
        }
        commit("SAVE", data);
    },
    update: function update(_ref4, data) {
        var commit = _ref4.commit;

        commit("UPDATE", data);
    },
    delete: function _delete(_ref5, data) {
        var commit = _ref5.commit;

        commit("DELETE", data);
    },
    addLike: function addLike(_ref6, data) {
        var commit = _ref6.commit;

        commit("ADDLIKE", data);
    },
    deleteLike: function deleteLike(_ref7, data) {
        var commit = _ref7.commit;

        commit("DELETELIKE", data);
    },
    addComment: function addComment(_ref8, data) {
        var commit = _ref8.commit;

        commit("ADDCOMMENT", data);
    },
    deleteComment: function deleteComment(_ref9, data) {
        var commit = _ref9.commit;

        commit("DELETECOMMENT", data);
    }
};

/* harmony default export */ __webpack_exports__["a"] = ({ namespaced: true, state: state, mutations: mutations, actions: actions });

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

var state = {
    comments: []
};

var mutations = {
    SAVE: function SAVE(state, data) {
        data.map(function (datacomment) {
            var comment = state.comments.find(function (comment) {
                return comment && comment.id === datacomment.id;
            });
            if (comment) {
                if (comment.idName) datacomment.idName = comment.idName;
                var key = state.comments.indexOf(comment);
                state.comments[key] = datacomment;
            } else {
                state.comments.push(datacomment);
            }
        });
        state.comments.sort(function (comment1, comment2) {
            return comment1.id - comment2.id;
        });
    },
    UPDATE: function UPDATE(state, data) {
        var comment = state.comments.find(function (comment) {
            return comment.id === data.id;
        });
        var index = state.comments.indexOf(comment);
        if (index > -1) state.comments[index] = data;
    },
    DELETE: function DELETE(state, data) {
        var comment = state.comments.find(function (comment) {
            return comment.id === data.id;
        });
        var index = state.comments.indexOf(comment);
        if (index > -1) state.comments.splice(index, 1);
    },
    ADDLIKE: function ADDLIKE(state, _ref) {
        var comment = _ref.comment,
            like = _ref.like;

        comment = state.comments.find(function (e) {
            return e.id === comment.id;
        });
        var key = state.comments.indexOf(comment);
        if (!state.comments[key].liked) state.comments[key].likes_count++;
        state.comments[key].liked = like;
    },
    DELETELIKE: function DELETELIKE(state, _ref2) {
        var comment = _ref2.comment;

        comment = state.comments.find(function (e) {
            return e.id === comment.id;
        });
        var key = state.comments.indexOf(comment);
        state.comments[key].likes_count--;
        state.comments[key].liked = null;
    },
    ADDSCROLLTO: function ADDSCROLLTO(state, id) {
        var comment = state.comments.find(function (e) {
            return e.id === id;
        });
        var index = state.comments.indexOf(comment);
        if (index > -1) comment.idName = 'showComment';
        if (index > -1) state.comments.splice(index, 1, comment);
    },
    REMOVESCROLLTO: function REMOVESCROLLTO(state) {
        var comment = state.comments.find(function (e) {
            return e.idName === 'showComment';
        });
        var index = state.comments.indexOf(comment);
        if (index > -1) delete comment.idName;
        if (index > -1) state.comments.splice(index, 1, comment);
    }
};

var actions = {
    save: function save(_ref3, data) {
        var commit = _ref3.commit;

        if (!Array.isArray(data)) {
            data = [data];
        }
        commit("SAVE", data);
    },
    update: function update(_ref4, data) {
        var commit = _ref4.commit;

        commit("UPDATE", data);
    },
    delete: function _delete(_ref5, data) {
        var commit = _ref5.commit;

        commit("DELETE", data);
    },
    addLike: function addLike(_ref6, data) {
        var commit = _ref6.commit;

        commit("ADDLIKE", data);
    },
    deleteLike: function deleteLike(_ref7, data) {
        var commit = _ref7.commit;

        commit("DELETELIKE", data);
    },
    scrollTo: function scrollTo(_ref8, id) {
        var commit = _ref8.commit;

        commit("REMOVESCROLLTO");
        commit("ADDSCROLLTO", id);
    }
};

/* harmony default export */ __webpack_exports__["a"] = ({ namespaced: true, state: state, mutations: mutations, actions: actions });

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

var state = {
    queries: []
};

var mutations = {
    SAVE: function SAVE(state, data) {
        var query = void 0;
        query = state.queries.find(function (e) {
            return e.name === data.name;
        });
        if (data.id) query = state.queries.find(function (e) {
            return e.name === data.name && e.id === data.id;
        });
        if (data.type) query = state.queries.find(function (e) {
            return e.name === data.name && e.id === data.id && e.type === data.type;
        });
        var index = state.queries.indexOf(query);
        if (index > -1) state.queries.splice(index, 1, data);else state.queries.push(data);
    },
    UPDATE: function UPDATE(state, data) {
        var query = state.queries.find(function (query) {
            return query.name === data.name;
        });
        var key = state.queries.indexOf(query);
        state.queries[key] = data;
    },
    DELETE: function DELETE(state, data) {
        var query = state.queries.find(function (query) {
            return query.name === data.name;
        });
        var key = state.queries.indexOf(query);
        delete state.queries[key];
    }
};

var actions = {
    save: function save(_ref, data) {
        var commit = _ref.commit;

        commit("SAVE", data);
    },
    update: function update(_ref2, data) {
        var commit = _ref2.commit;

        commit("UPDATE", data);
    },
    delete: function _delete(_ref3, data) {
        var commit = _ref3.commit;

        commit("DELETE", data);
    }
};

/* harmony default export */ __webpack_exports__["a"] = ({ namespaced: true, state: state, mutations: mutations, actions: actions });

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

var state = {
    msgFlash: false
};

var mutations = {
    SAVE: function SAVE(state, msg) {
        state.msgFlash = msg;
    },
    DELETE: function DELETE(state) {
        state.msgFlash = false;
    }
};

var actions = {
    save: function save(_ref, msg) {
        var commit = _ref.commit;

        commit("SAVE", msg);
    },
    delete: function _delete(_ref2) {
        var commit = _ref2.commit;

        commit("DELETE");
    }
};

/* harmony default export */ __webpack_exports__["a"] = ({ namespaced: true, state: state, mutations: mutations, actions: actions });

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = webSocketPlugin;
function webSocketPlugin() {
    return function (store) {
        store.subscribe(function (mutation) {
            if (mutation.type === 'user/SAVE') {
                if (parseInt(store.state.user.user.confirmated) === 1) {
                    Echo.private('article.user.' + store.state.user.user.id).listen('ArticleCreatedEvent', function (event) {
                        event.message = event.article.user.name + ' ' + event.article.user.forename + ' has just posted a new article!';
                        event.isNewsletter = true;
                        event.id = Math.random();
                        var user = event.article.user;
                        delete event.article.user;
                        event.user = user;
                        store.dispatch('article/save', event.article);
                        store.dispatch('setting/addNotification', event);
                        store.dispatch('users/save', user);
                    });
                    Echo.private('comment.articleOwner.' + store.state.user.user.id).listen('CommentCreatedEvent', function (event) {
                        event.message = event.comment.user.name + ' ' + event.comment.user.forename + ' commented on your publication!';
                        event.isNewsletter = true;
                        event.id = Math.random();
                        store.dispatch('setting/addNotification', event);
                        var user = event.comment.user;
                        delete event.comment.user;
                        event.user = user;
                        store.dispatch('comment/save', event.comment);
                        store.dispatch('comment/scrollTo', event.comment.id);
                        store.dispatch('users/save', user);
                        store.dispatch('article/addComment', { id: event.comment.article_id });
                    });
                    Echo.private('comment.commentOwner.' + store.state.user.user.id).listen('CommentCreatedEvent', function (event) {
                        event.message = event.comment.user.name + ' ' + event.comment.user.forename + ' replied to your comment!';
                        event.isNewsletter = true;
                        event.id = Math.random();
                        store.dispatch('setting/addNotification', event);
                        var user = event.comment.user;
                        delete event.comment.user;
                        event.user = user;
                        var replyedUser = event.comment.replyed_user;
                        delete event.comment.replyed_user;
                        store.dispatch('comment/save', event.comment);
                        store.dispatch('comment/scrollTo', event.comment.id);
                        store.dispatch('users/save', user);
                        store.dispatch('users/save', replyedUser);
                        store.dispatch('article/addComment', { id: event.comment.article_id });
                    });
                    Echo.join('user.online.' + store.state.user.user.id).here(function (users) {
                        console.log('here', users);
                        users.map(function (user) {
                            return user.online = true;
                        });
                        store.dispatch('users/save', users);
                    }).joining(function (user) {
                        console.log('joining', user);
                        user.online = true;
                        store.dispatch('users/save', user);
                    }).leaving(function (user) {
                        console.log('leaving', user);
                        store.dispatch('users/delete', user);
                    }).listen('UserOnlineEvent', function (e) {
                        return console.log('listen', e);
                    });
                }
            }
        });
    };
}

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

var state = {
    likes: []
};

var mutations = {
    SAVE: function SAVE(state, data) {
        data.map(function (dataUser) {
            var user = state.likes.find(function (user) {
                return user && user.id === dataUser.id;
            });
            if (user) {
                var index = state.likes.indexOf(user);
                if (index > -1) state.likes.splice(index, 1, dataUser);
            } else {
                state.likes.push(dataUser);
            }
        });
    },
    DELETE: function DELETE(state, data) {
        var like = state.likes.find(function (like) {
            return like.id === data.id;
        });
        var index = state.likes.indexOf(like);
        if (index > -1) state.likes.splice(index, 1);
    }
};

var actions = {
    save: function save(_ref, data) {
        var commit = _ref.commit;

        if (!Array.isArray(data)) {
            data = [data];
        }
        commit("SAVE", data);
    },
    delete: function _delete(_ref2, data) {
        var commit = _ref2.commit;

        commit("DELETE", data);
    }
};

/* harmony default export */ __webpack_exports__["a"] = ({ namespaced: true, state: state, mutations: mutations, actions: actions });

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = ["just now",["%s second ago","%s seconds ago"],["%s minute ago","%s minutes ago"],["%s hour ago","%s hours ago"],["%s day ago","%s days ago"],["%s week ago","%s weeks ago"],["%s month ago","%s months ago"],["%s year ago","%s years ago"]]

/***/ }),
/* 45 */
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(47);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(18)("6f10e44d", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5258311c\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./Route.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5258311c\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./Route.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "\n.bounce-enter-active[data-v-5258311c] {\n    animation: bounce-in-data-v-5258311c 0.5s;\n}\n.bounce-leave-active[data-v-5258311c] {\n    animation: bounce-out-data-v-5258311c 0.5s;\n}\n@keyframes bounce-in-data-v-5258311c {\n0% {\n        transform: scale(0);\n}\n50% {\n        transform: scale(1.5);\n}\n100% {\n        transform: scale(1);\n}\n}\n@keyframes bounce-out-data-v-5258311c {\n0% {\n        transform: scale(1);\n}\n50% {\n        transform: scale(1.5);\n}\n100% {\n        transform: scale(0);\n}\n}\n", ""]);

// exports


/***/ }),
/* 48 */
/***/ (function(module, exports) {

//
//
//
//
//
//

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "transition",
    { attrs: { name: "bounce", mode: "out-in" } },
    [_c("router-view")],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-5258311c", module.exports)
  }
}

/***/ })
],[20]);