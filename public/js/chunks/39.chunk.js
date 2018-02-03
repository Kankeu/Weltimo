webpackJsonp([39],{

/***/ 258:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(259);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("24e2f814", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-10ddd0a8\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./Admin.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-10ddd0a8\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./Admin.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 259:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "\n.dialog--fullscreen{\n    overflow-y: auto !important;\n}\n", ""]);

// exports


/***/ }),

/***/ 260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store_modules_Dashboard__ = __webpack_require__(261);
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            darked: false,
            drawer: false
        };
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
        }
    },
    mounted: function mounted() {
        this.$store.registerModule('dashboard', __WEBPACK_IMPORTED_MODULE_0__store_modules_Dashboard__["a" /* default */]);
    }
});

/***/ }),

/***/ 261:
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

/***/ 262:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticStyle: { "margin-top": "80px" } },
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
    require("vue-hot-reload-api")      .rerender("data-v-10ddd0a8", module.exports)
  }
}

/***/ }),

/***/ 70:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(258)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(260)
/* template */
var __vue_template__ = __webpack_require__(262)
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
Component.options.__file = "resources/assets/js/components/admin/Admin.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-10ddd0a8", Component.options)
  } else {
    hotAPI.reload("data-v-10ddd0a8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});