webpackJsonp([4],{

/***/ 216:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(253)
}
var normalizeComponent = __webpack_require__(10)
/* script */
var __vue_script__ = __webpack_require__(255)
/* template */
var __vue_template__ = __webpack_require__(256)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-10ddd0a8"
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
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

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
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 253:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(254);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(11)("b258b60e", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-10ddd0a8\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./Admin.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-10ddd0a8\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./Admin.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 254:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 255:
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

var toLower = function toLower(text) {
  return text.toString().toLowerCase();
};

var searchByName = function searchByName(items, term) {
  if (term) {
    return items.filter(function (item) {
      return toLower(item.name).includes(toLower(term));
    });
  }

  return items;
};

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      search: null,
      searched: [],
      users: [{
        id: 1,
        name: "Shawna Dubbin",
        email: "sdubbin0@geocities.com",
        gender: "Male",
        title: "Assistant Media Planner"
      }, {
        id: 2,
        name: "Odette Demageard",
        email: "odemageard1@spotify.com",
        gender: "Female",
        title: "Account Coordinator"
      }, {
        id: 3,
        name: "Vera Taleworth",
        email: "vtaleworth2@google.ca",
        gender: "Male",
        title: "Community Outreach Specialist"
      }, {
        id: 4,
        name: "Lonnie Izkovitz",
        email: "lizkovitz3@youtu.be",
        gender: "Female",
        title: "Operator"
      }, {
        id: 5,
        name: "Thatcher Stave",
        email: "tstave4@reference.com",
        gender: "Male",
        title: "Software Test Engineer III"
      }, {
        id: 6,
        name: "Karim Chipping",
        email: "kchipping5@scribd.com",
        gender: "Female",
        title: "Safety Technician II"
      }, {
        id: 7,
        name: "Helge Holyard",
        email: "hholyard6@howstuffworks.com",
        gender: "Female",
        title: "Internal Auditor"
      }, {
        id: 8,
        name: "Rod Titterton",
        email: "rtitterton7@nydailynews.com",
        gender: "Male",
        title: "Technical Writer"
      }, {
        id: 9,
        name: "Gawen Applewhite",
        email: "gapplewhite8@reverbnation.com",
        gender: "Female",
        title: "GIS Technical Architect"
      }, {
        id: 10,
        name: "Nero Mulgrew",
        email: "nmulgrew9@plala.or.jp",
        gender: "Female",
        title: "Staff Scientist"
      }, {
        id: 11,
        name: "Cybill Rimington",
        email: "crimingtona@usnews.com",
        gender: "Female",
        title: "Assistant Professor"
      }, {
        id: 12,
        name: "Maureene Eggleson",
        email: "megglesonb@elpais.com",
        gender: "Male",
        title: "Recruiting Manager"
      }, {
        id: 13,
        name: "Cortney Caulket",
        email: "ccaulketc@cbsnews.com",
        gender: "Male",
        title: "Safety Technician IV"
      }, {
        id: 14,
        name: "Selig Swynfen",
        email: "sswynfend@cpanel.net",
        gender: "Female",
        title: "Environmental Specialist"
      }, {
        id: 15,
        name: "Ingar Raggles",
        email: "iragglese@cbc.ca",
        gender: "Female",
        title: "VP Sales"
      }, {
        id: 16,
        name: "Karmen Mines",
        email: "kminesf@topsy.com",
        gender: "Male",
        title: "Administrative Officer"
      }, {
        id: 17,
        name: "Salome Judron",
        email: "sjudrong@jigsy.com",
        gender: "Male",
        title: "Staff Scientist"
      }, {
        id: 18,
        name: "Clarinda Marieton",
        email: "cmarietonh@theatlantic.com",
        gender: "Male",
        title: "Paralegal"
      }, {
        id: 19,
        name: "Paxon Lotterington",
        email: "plotteringtoni@netvibes.com",
        gender: "Female",
        title: "Marketing Assistant"
      }, {
        id: 20,
        name: "Maura Thoms",
        email: "mthomsj@webeden.co.uk",
        gender: "Male",
        title: "Actuary"
      }]
    };
  },
  methods: {
    newUser: function newUser() {
      window.alert('Noop');
    },
    searchOnTable: function searchOnTable() {
      this.searched = searchByName(this.users, this.search);
    }
  },
  created: function created() {
    this.searched = this.users;
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
    "md-table",
    {
      attrs: {
        "md-sort": "name",
        "md-sort-order": "asc",
        "md-card": "",
        "md-fixed-header": ""
      },
      scopedSlots: _vm._u([
        {
          key: "md-table-row",
          fn: function(ref) {
            var item = ref.item
            return _c(
              "md-table-row",
              {},
              [
                _c(
                  "md-table-cell",
                  {
                    attrs: {
                      "md-label": "state",
                      "md-sort-by": "id",
                      "md-numeric": ""
                    }
                  },
                  [_c("md-icon", [_vm._v("check")])],
                  1
                ),
                _vm._v(" "),
                _c(
                  "md-table-cell",
                  {
                    attrs: {
                      "md-label": "ID",
                      "md-sort-by": "id",
                      "md-numeric": ""
                    }
                  },
                  [_vm._v(_vm._s(item.id))]
                ),
                _vm._v(" "),
                _c(
                  "md-table-cell",
                  { attrs: { "md-label": "Name", "md-sort-by": "name" } },
                  [_vm._v(_vm._s(item.name))]
                ),
                _vm._v(" "),
                _c(
                  "md-table-cell",
                  { attrs: { "md-label": "Email", "md-sort-by": "email" } },
                  [_vm._v(_vm._s(item.email))]
                ),
                _vm._v(" "),
                _c(
                  "md-table-cell",
                  { attrs: { "md-label": "Message", "md-sort-by": "gender" } },
                  [_vm._v(_vm._s(item.gender))]
                ),
                _vm._v(" "),
                _c(
                  "md-table-cell",
                  { attrs: { "md-label": "Date", "d-sort-by": "title" } },
                  [_vm._v(_vm._s(item.title))]
                )
              ],
              1
            )
          }
        }
      ]),
      model: {
        value: _vm.searched,
        callback: function($$v) {
          _vm.searched = $$v
        },
        expression: "searched"
      }
    },
    [
      _c(
        "md-table-toolbar",
        [
          _c("div", { staticClass: "md-toolbar-section-start" }, [
            _c("h1", { staticClass: "md-title" }, [_vm._v("Users")])
          ]),
          _vm._v(" "),
          _c(
            "md-field",
            {
              staticClass: "md-toolbar-section-end",
              attrs: { "md-clearable": "" }
            },
            [
              _c("md-input", {
                attrs: { placeholder: "Search by name..." },
                on: { input: _vm.searchOnTable },
                model: {
                  value: _vm.search,
                  callback: function($$v) {
                    _vm.search = $$v
                  },
                  expression: "search"
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
        "md-table-empty-state",
        {
          attrs: {
            "md-label": "No users found",
            "md-description":
              "No user found for this '" +
              _vm.search +
              "' query. Try a different search term or create a new user."
          }
        },
        [
          _c(
            "md-button",
            { staticClass: "md-primary md-raised", on: { click: _vm.newUser } },
            [_vm._v("Create New User")]
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
    require("vue-hot-reload-api")      .rerender("data-v-10ddd0a8", module.exports)
  }
}

/***/ })

});