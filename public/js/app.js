webpackJsonp([11],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_Dashboard__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_User__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_MsgFlash__ = __webpack_require__(25);

Vue.use(__WEBPACK_IMPORTED_MODULE_0_vuex__["default"]);




/* harmony default export */ __webpack_exports__["default"] = (new __WEBPACK_IMPORTED_MODULE_0_vuex__["default"].Store({
    modules: {
        dashboard: __WEBPACK_IMPORTED_MODULE_1__modules_Dashboard__["a" /* default */],
        user: __WEBPACK_IMPORTED_MODULE_2__modules_User__["a" /* default */],
        msgflash: __WEBPACK_IMPORTED_MODULE_3__modules_MsgFlash__["a" /* default */]
    }
}));

/***/ }),
/* 9 */,
/* 10 */
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
/* 11 */
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

var listToStyles = __webpack_require__(26)

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
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(27)
}
var normalizeComponent = __webpack_require__(10)
/* script */
var __vue_script__ = __webpack_require__(29)
/* template */
var __vue_template__ = __webpack_require__(30)
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
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

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
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 13 */,
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(15);


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__bootstrap__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_route_Route_vue__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_route_Route_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_route_Route_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_store_store__ = __webpack_require__(8);




var app = new Vue({
    components: { App: __WEBPACK_IMPORTED_MODULE_1__components_route_Route_vue___default.a },
    el: "#main",
    router: __WEBPACK_IMPORTED_MODULE_0__bootstrap__["a" /* router */],
    store: __WEBPACK_IMPORTED_MODULE_2__components_store_store__["default"]
});

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return router; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_router__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuetify__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuetify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vuetify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuetify_dist_vuetify_min_css__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuetify_dist_vuetify_min_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vuetify_dist_vuetify_min_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vee_validate__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vue_resource__ = __webpack_require__(7);
window.Vue = __webpack_require__(2);
//global.faker = require('faker')






var store = __webpack_require__(8);

Vue.use(__WEBPACK_IMPORTED_MODULE_3_vee_validate__["default"]);
Vue.use(__WEBPACK_IMPORTED_MODULE_1_vuetify___default.a);
Vue.use(__WEBPACK_IMPORTED_MODULE_0_vue_router__["default"]);
Vue.use(__WEBPACK_IMPORTED_MODULE_4_vue_resource__["default"]);
var token = document.head.querySelector('meta[name="csrf-token"]');
window.Vue.http.headers.common['X-CSRF-TOKEN'] = token.content;
window.Vue.http.headers.common['X-Requested-With'] = 'XMLHttpRequest';

var router = new __WEBPACK_IMPORTED_MODULE_0_vue_router__["default"]({
    mode: "hash",
    routes: [{
        path: "/",
        component: function component(resolve) {
            return __webpack_require__.e/* require */(3).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(32)]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
        },
        children: [{
            path: "/",
            component: function component(resolve) {
                return __webpack_require__.e/* require */(6).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(33)]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
            }
        }, {
            path: "/sign_in",
            component: function component(resolve) {
                return __webpack_require__.e/* require */(1).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(34)]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
            },
            name: "Inscription"
        }, {
            path: "/actus",
            component: function component(resolve) {
                return __webpack_require__.e/* require */(7).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(35)]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
            },
            name: "Actus"
        }, {
            path: "/about",
            component: function component(resolve) {
                return __webpack_require__.e/* require */(5).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(36)]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
            },
            name: "About"
        }]
    }, {
        path: "/admin",
        component: function component(resolve) {
            return __webpack_require__.e/* require */(4).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(37)]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
        },
        name: "Admin"
    }, {
        path: "/admind",
        component: function component(resolve) {
            return __webpack_require__.e/* require */(9).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(38)]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
        },
        name: "Admind"
    }, {
        path: "/user",
        component: function component(resolve) {
            return __webpack_require__.e/* require */(2).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(39)]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
        },
        beforeEnter: function beforeEnter(to, from, next) {
            var connected = store.default.state.user.user ? store.default.state.user.user.confirmated : 0;
            if (connected === 1) {
                next();
            } else {
                Vue.http.get('/log_in').then(function (response) {
                    if (response.body.confirmated === 1) {
                        store.default.dispatch("user/save", response.body);
                        next();
                    } else {
                        next('/');
                    }
                    console.log("request login");
                });
            }
        },
        children: [{
            path: "/",
            component: function component(resolve) {
                return __webpack_require__.e/* require */(8).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(40)]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
            }
        }, {
            path: "profile",
            component: function component(resolve) {
                return __webpack_require__.e/* require */(0).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(41)]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
            },
            name: "Profile"
        }, {
            path: "*",
            redirect: "/"
        }]
    }, {
        path: "*/:text",
        redirect: "/"
    }]
});



/***/ }),
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/*let marked = require("marked")
let highlight = require("highlight.js")
marked.setOptions({
    highlight: function (code) {
        return highlight.highlightAuto(code).value
    }
})
window.marked = marked*/

var saveID = function saveID(state) {
    var idArr = [];
    for (var i = 0, len = state.articleList.length; i < len; i++) {
        idArr.push(state.articleList[i].id);
        localStorage.setItem('idArr', idArr.join(','));
    }
};

var createID = function createID() {
    var t = '';
    for (var i = 0; i < 15; i++) {
        t += Math.floor(Math.random() * 10);
    }
    return t;
};

var state = {
    showMenu: true,
    articleList: [{
        id: createID(),
        content: 'Untitled\n---\n',
        current: true
    }]
};

var mutations = {
    SHOW_MENU: function SHOW_MENU(state) {
        state.showMenu = !state.showMenu;
    },
    TEXT_INPUT: function TEXT_INPUT(state, txt) {
        for (var i = 0, len = state.articleList.length; i < len; i++) {
            if (state.articleList[i].current) {
                state.articleList[i].content = txt;
            }
        }
    },
    SAVE_TO_CACHE: function SAVE_TO_CACHE(state) {
        for (var i = 0, len = state.articleList.length; i < len; i++) {
            if (state.articleList[i].current) {
                localStorage.setItem(state.articleList[i].id, state.articleList[i].content);
                saveID(state);
            }
        }
    },
    READ_FROM_CACHE: function READ_FROM_CACHE(state) {
        for (var i = 0, len = state.articleList.length; i < len; i++) {
            if (state.articleList[i].current) {
                state.articleList[i].content = localStorage.getItem(state.articleList[i].id);
            }
        }
    },
    SELECT_THIS: function SELECT_THIS(state, index) {
        for (var i = 0, len = state.articleList.length; i < len; i++) {
            state.articleList[i].current = false;
        }
        state.articleList[index].current = true;
    },
    NEW_ARTICLE: function NEW_ARTICLE(state) {
        for (var i = 0, len = state.articleList.length; i < len; i++) {
            state.articleList[i].current = false;
        }

        var newOne = {
            id: createID(),
            content: 'Untitled\n---',
            current: true
        };

        state.articleList.push(newOne);
    },
    DELETE_THIS: function DELETE_THIS(state, index) {
        if (state.articleList.length > 1) {
            var idArr = localStorage.getItem('idArr').split(',');
            var loc = idArr.indexOf(state.articleList[index].id);
            idArr.splice(loc, 1);
            localStorage.setItem('idArr', idArr);

            localStorage.removeItem(state.articleList[index].id);
            state.articleList.splice(index, 1);

            for (var i = 0, len = state.articleList.length; i < len; i++) {
                state.articleList[i].current = false;
            }
            state.articleList[0].current = true;
        }
    },
    READ_LIST_FROM_LOCAL: function READ_LIST_FROM_LOCAL(state) {
        if (localStorage.getItem('idArr')) {
            state.articleList = null;
            var idArr = localStorage.getItem('idArr').split(',');
            var articleArr = [];
            for (var i = 0, len = idArr.length; i < len; i++) {
                var articleObj = {
                    id: '',
                    content: '',
                    current: false
                };
                articleObj.id = idArr[i];
                articleObj.content = localStorage.getItem(idArr[i]);
                articleArr.push(articleObj);
            }
            state.articleList = articleArr;
            state.articleList[0].current = true;
        }
    }
};

var actions = {
    showMenu: function showMenu(_ref) {
        var commit = _ref.commit;

        commit('SHOW_MENU');
    },
    textInput: function textInput(_ref2, txt) {
        var commit = _ref2.commit;

        commit('TEXT_INPUT', txt);
    },
    selectThis: function selectThis(_ref3, index) {
        var commit = _ref3.commit;

        commit('SELECT_THIS', index);
    },
    newArticle: function newArticle(_ref4) {
        var commit = _ref4.commit;

        commit('NEW_ARTICLE');
        commit('SAVE_TO_CACHE');
    },
    deleteThis: function deleteThis(_ref5, index) {
        var commit = _ref5.commit;

        commit('DELETE_THIS', index);
    },
    saveToCache: function saveToCache(_ref6) {
        var commit = _ref6.commit;

        commit('SAVE_TO_CACHE');
    },
    readFromCache: function readFromCache(_ref7) {
        var commit = _ref7.commit;

        commit('READ_FROM_CACHE');
    },
    loadCache: function loadCache(_ref8) {
        var commit = _ref8.commit;

        commit('READ_LIST_FROM_LOCAL');
    }
};

var getters = {
    articleRaw: function articleRaw(state) {
        var content = '';
        for (var i = 0, len = state.articleList.length; i < len; i++) {
            if (state.articleList[i].current) {
                content = state.articleList[i].content;
            }
        }
        return content;
    },
    articleMd: function articleMd(state, getters) {
        return getters.articleRaw;
    },
    articleList: function articleList(state) {
        return state.articleList;
    }
};

/* harmony default export */ __webpack_exports__["a"] = ({ namespaced: true, state: state, mutations: mutations, actions: actions, getters: getters });

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

var state = {
    user: null,
    msgFlash: false
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
    },
    ADD_MSGFLASH: function ADD_MSGFLASH(state, msg) {
        state.msgFlash = msg;
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
    },
    add_msgflash: function add_msgflash(_ref4, msg) {
        var commit = _ref4.commit;

        commit("ADD_MSGFLASH", msg);
    }
};

/* harmony default export */ __webpack_exports__["a"] = ({ namespaced: true, state: state, mutations: mutations, actions: actions });

/***/ }),
/* 25 */
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
/* 26 */
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
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(28);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(11)("6f10e44d", content, false);
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
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "\n.bounce-enter-active[data-v-5258311c] {\n    animation: bounce-in-data-v-5258311c 0.5s;\n}\n.bounce-leave-active[data-v-5258311c] {\n    animation: bounce-out-data-v-5258311c 0.5s;\n}\n@keyframes bounce-in-data-v-5258311c {\n0% {\n        transform: scale(0);\n}\n50% {\n        transform: scale(1.5);\n}\n100% {\n        transform: scale(1);\n}\n}\n@keyframes bounce-out-data-v-5258311c {\n0% {\n        transform: scale(1);\n}\n50% {\n        transform: scale(1.5);\n}\n100% {\n        transform: scale(0);\n}\n}\n", ""]);

// exports


/***/ }),
/* 29 */
/***/ (function(module, exports) {

//
//
//
//
//
//

/***/ }),
/* 30 */
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
],[14]);