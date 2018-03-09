webpackJsonp([62],{

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_env_modules_false_targets_browsers_last_2_versions_safari_7_debug_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_syntax_dynamic_import_node_modules_vue_loader_lib_selector_type_script_index_0_ContactForm_vue__ = __webpack_require__(96);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_54d56fe0_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ContactForm_vue__ = __webpack_require__(115);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_env_modules_false_targets_browsers_last_2_versions_safari_7_debug_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_syntax_dynamic_import_node_modules_vue_loader_lib_selector_type_script_index_0_ContactForm_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_54d56fe0_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ContactForm_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_54d56fe0_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ContactForm_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/user/university/ContactForm.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-54d56fe0", Component.options)
  } else {
    hotAPI.reload("data-v-54d56fe0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-card",
    {
      staticClass: "elevation-10",
      style: _vm.darked ? null : "background:#00b4ff;color:white"
    },
    [
      _c("v-card-title", { staticClass: "headline" }, [_vm._v("Contact us")]),
      _vm._v(" "),
      _c(
        "v-card-text",
        { staticStyle: { "padding-bottom": "0", "padding-top": "0" } },
        [
          _c("i", [
            _vm._v(
              "\n            Please fill out this form for any request for pre-registration, registration, room reservation,\n            lease contract in this town to process your request. After which we will answer you by email and your account Weltimo.\n        "
            )
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "v-card-text",
        { staticStyle: { "padding-top": "0" } },
        [
          _c(
            "v-layout",
            { attrs: { column: "" } },
            [
              _c(
                "v-flex",
                { attrs: { lg12: "" } },
                [
                  _c(
                    "v-layout",
                    { attrs: { column: "" } },
                    [
                      _c(
                        "v-flex",
                        [
                          _c("v-select", {
                            staticStyle: { "min-height": "55px" },
                            attrs: {
                              label: "Offers",
                              chips: "",
                              tags: "",
                              items: _vm.items
                            },
                            model: {
                              value: _vm.select,
                              callback: function($$v) {
                                _vm.select = $$v
                              },
                              expression: "select"
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
                { attrs: { lg12: "" } },
                [
                  _c(
                    "v-btn",
                    {
                      staticStyle: { "margin-left": "0" },
                      attrs: { color: "success" },
                      on: { click: _vm.send }
                    },
                    [_vm._v("\n                    Send\n                ")]
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
        "v-snackbar",
        {
          attrs: { timeout: 6000, top: "", right: "" },
          model: {
            value: _vm.snackbar,
            callback: function($$v) {
              _vm.snackbar = $$v
            },
            expression: "snackbar"
          }
        },
        [
          _vm._v(
            "\n        Your request has been successfully received!\n        "
          ),
          _c(
            "v-btn",
            {
              attrs: { flat: "", color: "pink" },
              nativeOn: {
                click: function($event) {
                  _vm.snackbar = false
                }
              }
            },
            [_vm._v("Close")]
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
    require("vue-hot-reload-api")      .rerender("data-v-54d56fe0", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ContactForm_vue__ = __webpack_require__(114);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    components: { contactForm: __WEBPACK_IMPORTED_MODULE_0__ContactForm_vue__["a" /* default */] }
});

/***/ }),

/***/ 358:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(359);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(4).default
var update = add("38a1236c", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-165508a3\",\"scoped\":false,\"sourceMap\":false}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Ilmenau.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-165508a3\",\"scoped\":false,\"sourceMap\":false}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Ilmenau.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 359:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "\n.city .card__text{\n    font-family: 'FuturaPTWebBook',Georgia,'Times New Roman',Times,serif;\n    font-size: 18px;\n}\n", ""]);

// exports


/***/ }),

/***/ 360:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-card",
    { staticClass: "city", attrs: { flat: "" } },
    [
      _c("v-card-title", { staticClass: "headline" }, [_vm._v("Ilmenau")]),
      _vm._v(" "),
      _c(
        "v-card-title",
        {
          staticClass: "headline",
          staticStyle: { "font-size": "18px !important" }
        },
        [
          _vm._v(
            "SMALL-TOWN CHARM AND AN AFFORDABLE EDUCATION IN THE HEART OF GERMANY"
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "v-card-text",
        [
          _c("v-card-media", {
            attrs: {
              height: "350px",
              src:
                "https://www.study-in.de/medien/studyin.de/staedte-detailseiten-fotos/fittosize__620_192_5e0c58674ab9d8af3c0e9face2048b45_0_ilmenau_innenstadt_wendel-daad.jpg"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("v-card-text", [
        _c("p", [
          _vm._v(
            "\n            When you live in Ilmenau, you feel like you’re a part of a big family. Statistically speaking, one out of every four residents is a student, and many events and activities take place on campus. Ilmenau is one of the three most affordable cities in Germany for students, and if you love nature, you’ll find it right at your doorstep.\n        "
          )
        ])
      ]),
      _vm._v(" "),
      _c("v-card-title", [_c("h2", [_vm._v("WELCOME TO ILMENAU")])]),
      _vm._v(" "),
      _c(
        "v-card-text",
        [
          _c("v-card-media", {
            attrs: {
              height: "250px",
              src:
                "https://www.study-in.de/medien/studyin.de/staedte-detailseiten-fotos/fittosize__290_0_deb3f915359bc8035505fe862aaade06_1_ilmenau_rathaus_wendel-daad.jpg"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("v-card-text", [
        _c("p", [
          _vm._v(
            "\n            Ilmenau is located in the state of Thuringia in the heart of Germany at the edge of the Thuringian Forest. It’s very close to other university towns, such as Erfurt, Weimar and Jena.\n        "
          )
        ]),
        _vm._v(" "),
        _c("p", [
          _vm._v(
            "\n            Ilmenau is a cosy, familiar town. The Technical University of Ilmenau has a very good reputation and attracts students from all over Germany and around the world. If you relish the thought of studying Mathematics, Technical Physics, Computer Science and Automotive Engineering, then the university in Ilmenau is a perfect choice for you. Regenerative Energy Technology, Electrochemistry and Galvanic Technology, and Miniaturised Biotechnology are just some of the rather unusual master’s degree programmes offered here.\n        "
          )
        ]),
        _vm._v(" "),
        _c("p", [
          _vm._v(
            "\n            Ilmenau hosts the “International Student Week” every year. Students from over 70 countries participate in discussions based on specific topics, such as “responsibility”.\n        "
          )
        ])
      ]),
      _vm._v(" "),
      _c("v-card-title", [_c("h2", [_vm._v("LIVING IN ILMENAU")])]),
      _vm._v(" "),
      _c(
        "v-card-text",
        [
          _c("v-card-media", {
            attrs: {
              height: "250px",
              src:
                "https://www.study-in.de/medien/studyin.de/staedte-detailseiten-fotos/fittosize__290_0_ed26d2254633f9cb2130729b46980b77_2_ilmenau_campus_wendel-daad.jpg"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("v-card-text", [
        _c("p", [
          _vm._v(
            "\n            According to the rankings published in the student magazine “Unicum”, Ilmenau is one of the three most affordable cities for students in Germany. The university can help you find a flat or room in town. If you’re an international student coming to Ilmenau for the first time, you will find extra information about the buddy programme “We 4 You” in your notification package. A student from the TU Ilmenau will support you both before and after you arrive. He or she will explain what you have to take care of, accompany you to the various municipal authorities and show you around campus.\n        "
          )
        ]),
        _vm._v(" "),
        _c("p", [
          _vm._v(
            "\n            The majority of student life takes place on campus. There are numerous student groups which hold events on a regular basis. There are also four large clubs on campus which offer something for everyone.\n        "
          )
        ])
      ]),
      _vm._v(" "),
      _c(
        "v-card-text",
        [
          _c("v-card-media", {
            attrs: {
              height: "250px",
              src:
                "https://www.study-in.de/medien/studyin.de/staedte-detailseiten-fotos/fittosize__290_0_cc589ccf5eedc93891923b34b2594bf6_3_ilmenau_hennenbrunnen_wendel-daad.jpg"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("v-card-text", [
        _c("p", [
          _vm._v(
            "\n            The Thuringian Forest offers a diverse array of opportunities for recreational activity. There are countless hiking trails around Ilmenau which highlight different themes. On the “Nature Trail”, you can learn about the distinctive geographical features of the Thuringian Forest, and if you take the trail “From Bach to Goethe”, you can enjoy breath-taking views of the landscape.\n        "
          )
        ]),
        _vm._v(" "),
        _c("p", [
          _vm._v(
            "\n            If you ever feel a desire for more variety and want to see something new, it’s only an hour away to Erfurt with public transportation.\n        "
          )
        ])
      ]),
      _vm._v(" "),
      _c("v-card-title", [
        _c("h2", [_vm._v("INTERVIEW WITH SHERIEF FROM EGYPT")])
      ]),
      _vm._v(" "),
      _c("v-card-text", [
        _c("p", [
          _vm._v(
            "\n            Sherief Emam is 29 years old, comes from Egypt and studies Mechatronics.\n        "
          )
        ])
      ]),
      _vm._v(" "),
      _c(
        "v-card-text",
        [
          _c("v-card-media", {
            attrs: {
              height: "250px",
              src:
                "https://www.study-in.de/medien/studyin.de/staedte-detailseiten-fotos/fittosize__290_0_9526ceec13455957aa11ec8b8bbf2fa8_5_ilmenau_sherief_wendel-daad.jpg"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("v-card-title", [
        _c("h3", [_vm._v("Why did you decide to study and live in Ilmenau?")])
      ]),
      _vm._v(" "),
      _c("v-card-text", [
        _c("p", [
          _vm._v(
            "\n            I absolutely wanted to study Mechatronics, and back in 2006, there were only three universities in Germany that offered such a programme. I was accepted at both Ilmenau and Nuremberg. After getting my admission letter from Ilmenau, I originally planned to start a German course there and then transfer to Nuremberg later. It turned out that I liked it here so much that I stayed. Generally, I decided to study in Germany because it has a great reputation worldwide when it comes to Engineering programmes.\n        "
          )
        ])
      ]),
      _vm._v(" "),
      _c("v-card-title", [
        _c("h3", [
          _vm._v(
            "How did you find accommodation? What advice can you give other students who are looking for a place to stay?"
          )
        ])
      ]),
      _vm._v(" "),
      _c("v-card-text", [
        _c("p", [
          _vm._v(
            "\n            The Studentenwerk gladly helps you look for an adequate room in a student residence hall in the beginning. I myself lived in a room in a residence hall on campus for seven years. I paid 200 euros a month for a 24-m2 room. For the past year, I’ve been living in a flat-share in Ilmenau, which is, of course, a bit more expensive.\n        "
          )
        ])
      ]),
      _vm._v(" "),
      _c("v-card-title", [
        _c("h3", [_vm._v("What are you favourite places in Ilmenau?")])
      ]),
      _vm._v(" "),
      _c("v-card-text", [
        _c("p", [
          _vm._v(
            "\n            You have to admit that Ilmenau is a pretty small town, but yet it has everything you need. They have a really nice swimming pool and you don’t have to go far to do some hiking in the forest.\n        "
          )
        ])
      ]),
      _vm._v(" "),
      _c("v-card-title", [
        _c("h3", [
          _vm._v(
            "What’s the best way of coming in contact with other students?"
          )
        ])
      ]),
      _vm._v(" "),
      _c("v-card-text", [
        _c("p", [
          _vm._v(
            "\n            Basically you spend all your time together because you hardly ever leave campus. It’s practically impossible not to meet people, because in Ilmenau, you feel like a big family.\n        "
          )
        ])
      ]),
      _vm._v(" "),
      _c("v-card-title", [
        _c("h3", [_vm._v("Describe Germany in three words.")])
      ]),
      _vm._v(" "),
      _c("v-card-text", [
        _c("p", [
          _vm._v(
            "\n            1. Open – by which I mean the support and opportunities which Germany offers foreign students.\n            "
          ),
          _c("br"),
          _vm._v(
            "2. Reliable – Germany offers many possibilities and a pleasant atmosphere for foreign students, and since they changed the visa laws, you can concentrate better on your studies and take the time you need.\n            "
          ),
          _c("br"),
          _vm._v(
            "3. Quality – that is, the good quality of education that exists in Germany.\n        "
          )
        ])
      ]),
      _vm._v(" "),
      _c("v-card-title", [_c("h2", [_vm._v("FACTS & FIGURES")])]),
      _vm._v(" "),
      _c("v-card-text", [
        _c("p", [
          _vm._v(
            "\n            Inhabitants:\n            26,000\n            "
          ),
          _c("br"),
          _vm._v("Students:\n            6,253\n            "),
          _c("br"),
          _vm._v("Universities:\n            1\n            "),
          _c("br"),
          _vm._v("Monthly rent:\n            263 €\n            "),
          _c("br"),
          _vm._v(
            'Tip:\n            Ein Besuch im Cafè "Zauberhaft".\n            '
          ),
          _c("br"),
          _vm._v("Website:"),
          _c(
            "a",
            { attrs: { href: "http://www.ilmenau.de", target: "_blank" } },
            [_vm._v("www.ilmenau.de")]
          )
        ])
      ]),
      _vm._v(" "),
      _c("v-card-title", [_c("h2", [_vm._v("MORE INFORMATION")])]),
      _vm._v(" "),
      _c("v-card-text", [
        _c("p", [
          _c(
            "a",
            {
              attrs: {
                href:
                  "http://www.stw-thueringen.de/english/stw-startseite.html",
                target: "_blank"
              }
            },
            [_vm._v("stw-thueringen.de | Studentenwerk Thüringen")]
          )
        ])
      ]),
      _vm._v(" "),
      _c("contact-form")
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-165508a3", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_env_modules_false_targets_browsers_last_2_versions_safari_7_debug_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_syntax_dynamic_import_node_modules_vue_loader_lib_selector_type_script_index_0_Ilmenau_vue__ = __webpack_require__(219);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_165508a3_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Ilmenau_vue__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(3);
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(358)
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_env_modules_false_targets_browsers_last_2_versions_safari_7_debug_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_syntax_dynamic_import_node_modules_vue_loader_lib_selector_type_script_index_0_Ilmenau_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_165508a3_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Ilmenau_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_165508a3_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Ilmenau_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/user/university/Ilmenau.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-165508a3", Component.options)
  } else {
    hotAPI.reload("data-v-165508a3", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 96:
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

/* harmony default export */ __webpack_exports__["a"] = ({
    data: function data() {
        return {
            select: null,
            items: ["Room reservation", "Pre-registration", "Registration", "Lease agreement"],
            snackbar: false
        };
    },
    computed: {
        darked: function darked() {
            return this.$store.state.setting.darked;
        }
    },
    methods: {
        send: function send() {
            var _this = this;

            this.$store.dispatch('setting/setLoading', true);
            this.$http.post('user/request', { 'offer': this.select.join(', '), town: this.$route.name }).then(function (response) {
                if (response.body.id) {
                    _this.snackbar = true;
                    _this.$store.commit('boxmessage/save', response.body);
                }
                _this.$store.dispatch('setting/setLoading', false);
            });
        }
    },
    mounted: function mounted() {
        document.querySelector('body').scrollTop = 0;
    }
});

/***/ })

});