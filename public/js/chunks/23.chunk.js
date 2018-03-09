webpackJsonp([23],{

/***/ 102:
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
                    _this.$store.dispatch('boxmessage/save', response.body);
                    _this.select = [];
                }
                _this.$store.dispatch('setting/setLoading', false);
            });
        }
    },
    mounted: function mounted() {
        document.querySelector('body').scrollTop = 0;
    }
});

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_env_modules_false_targets_browsers_last_2_versions_safari_7_debug_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_syntax_dynamic_import_node_modules_vue_loader_lib_selector_type_script_index_0_ContactForm_vue__ = __webpack_require__(102);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_54d56fe0_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ContactForm_vue__ = __webpack_require__(105);
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

/***/ 105:
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

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ContactForm_vue__ = __webpack_require__(104);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

/***/ 428:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(429);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(4).default
var update = add("5b466782", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4cf6713b\",\"scoped\":false,\"sourceMap\":false}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Kaiserslautern.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4cf6713b\",\"scoped\":false,\"sourceMap\":false}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Kaiserslautern.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 429:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "\n.city .card__text{\n    font-family: 'FuturaPTWebBook',Georgia,'Times New Roman',Times,serif;\n    font-size: 18px;\n}\n", ""]);

// exports


/***/ }),

/***/ 430:
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
      _c("v-card-title", { staticClass: "headline" }, [
        _vm._v("Kaiserslautern")
      ]),
      _vm._v(" "),
      _c(
        "v-card-title",
        {
          staticClass: "headline",
          staticStyle: { "font-size": "18px !important" }
        },
        [_vm._v("TECHNOLOGY AND INNOVATION")]
      ),
      _vm._v(" "),
      _c(
        "v-card-text",
        [
          _c("v-card-media", {
            attrs: {
              height: "350px",
              src:
                "https://www.study-in.de/medien/studyin.de/staedte-detailseiten-fotos/fittosize__620_192_e71df1805ddd55a5b4b1942eb64fb57b_0_kaiserslautern_panorama_pfalzfrank-wikicommons.jpg"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("v-card-text", [
        _c("p", [
          _vm._v(
            "\n            Kaiserslautern has an international flair and is situated close to the French and Luxembourgian borders. This football-crazy town lies in the middle of the low-lying mountain range known as the Pfälzerwald, or Palatinate Forest. The science centre is renowned for technology and innovation. With everything close at hand, it's an ideal place to study in.\n        "
          )
        ])
      ]),
      _vm._v(" "),
      _c("v-card-title", [_c("h2", [_vm._v("WELCOME TO KAISERSLAUTERN")])]),
      _vm._v(" "),
      _c(
        "v-card-text",
        [
          _c("v-card-media", {
            attrs: {
              height: "250px",
              src:
                "https://www.study-in.de/medien/studyin.de/staedte-detailseiten-fotos/fittosize__290_0_2b200acf431b58bc9d38fd8717c1f201_1_kaiserslautern_pfalztheater_bbb-wikicommons.jpg"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("v-card-text", [
        _c("p", [
          _vm._v(
            "\n            Kaiserslautern is famous for technology and innovation. The town has gained a reputation in the past few years as a modern centre of science and information technology. It lies in south-western Germany, in the middle of the Palatinate Forest, and is just 50 kilometres from the neighbouring country of France, and 150 kilometres from Luxembourg.\n        "
          )
        ]),
        _vm._v(" "),
        _c("p", [
          _vm._v(
            "\n            At first glance, Kaiserslautern may seem rather unremarkable. But if you take a closer look, you'll discover plenty of charming details that make the town special. Kaiserslautern's landmark is the \"Rathaus\", or town hall, a plain white multi-storey building. Eighty four metres high, it was for many years the tallest town hall in Germany after its completion in 1968. The views from the bar on the 21st floor are phenomenal.\n        "
          )
        ]),
        _vm._v(" "),
        _c("p", [
          _vm._v(
            '\n            From here, you can see the 13th century Stiftskirche, the Pfalztheater and the former market hall "Fruchthalle", no longer a centre of trade but a party location. The ruins of the "Kaiserpfalz", the imperial castle where Barbarossa once resided, are at your feet.\n        '
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
                "https://www.study-in.de/medien/studyin.de/staedte-detailseiten-fotos/fittosize__290_0_e21bb75ba0f8fa96cdeb714c9b3d5250_2_kaiserslautern_fruchthalle_bbb-wikicommons.jpg"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("v-card-text", [
        _c("p", [
          _vm._v(
            '\n            The "Pfälzer", the inhabitants of the Palatinate region, are open, friendly people. When you walk through the town, you\'ll meet people from over 140 nations. In particular, you\'ll meet lots of Americans. Not surprisingly, because Kaiserslautern is the world\'s biggest US military base outside the States. The military community of "K-Town", as the Americans call it, have some 50,000 members.\n        '
          )
        ]),
        _vm._v(" "),
        _c("p", [
          _vm._v(
            "\n            The Fritz Walter Stadium on Betzenberg, where the local football team 1. FC Kaiserslautern is regularly cheered along, accommodates the same number of fans, in other words, half of the town.\n        "
          )
        ])
      ]),
      _vm._v(" "),
      _c("v-card-title", [_c("h2", [_vm._v("LIVING IN KAISERSLAUTERN")])]),
      _vm._v(" "),
      _c(
        "v-card-text",
        [
          _c("v-card-media", {
            attrs: {
              height: "250px",
              src:
                "https://www.study-in.de/medien/studyin.de/staedte-detailseiten-fotos/fittosize__290_0_3cb085618c7ab48359015edbb31871d1_3_kaiserslautern_kaiserbrunnen_e.k.-wikicommons.jpg"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("v-card-text", [
        _c("p", [
          _vm._v(
            '\n            The cost of living in Kaiserslautern is relatively low. For students, the best way to get around is by bike. There is also a well-developed bus network in the town. You\'re not likely to get bored in "Lautern". Both the Technische Universität and the town itself have a lot to offer. One of the first contact points for many foreign students is the university\'s "International Club" or "IntClub", for short. It organises excursions, parties, film evenings and visits to the theatre. The university\'s sports programme offers 90 different types of sporting activities.\n        '
          )
        ]),
        _vm._v(" "),
        _c("p", [
          _vm._v(
            '\n            The old part of town is full of bars and party venues, and lots of students like to hang out here. Steinstrasse is lined with cafés, restaurants and bars so that there\'s something to suit virtually every taste. "Wladi-Rockstock" focuses on rock, and there are often live performances here, while the cellar club "Underground" is a good place for dancing. Everything is played here from pop and rock to heavy metal.\n        '
          )
        ]),
        _vm._v(" "),
        _c("p", [
          _vm._v(
            '\n            The bistro Storchenturm is a good place to go for breakfast. If it\'s typical regional fare that you\'re looking for, "Zum Spinnrädl" is the place to go. Try hearty, home-made dishes such as stuffed pig\'s stomach ("Saumagen") or liver dumplings ("Leberknödel") washed down with a glass of wine. This building is the only remaining half-timbered house in the town and dates back to the year 1740. At "Brauhaus am Markt" you can try the restaurant\'s home-brewed beer and you can even see the brewery\'s boiler.\n        '
          )
        ]),
        _vm._v(" "),
        _c("p", [
          _vm._v(
            '\n            In the Palatinate region, there\'s always a reason to party. The "Altstadtfest" in July and "Swinging Lautern" Barbarossa festival in September are just two examples. Other major highlights are the "Lautrer Kerwe" – a big public festival in May and October, and the Halloween Parade on 30th October. This is unique in Germany and every year attracts over 30,000 visitors.\n        '
          )
        ]),
        _vm._v(" "),
        _c("p", [
          _vm._v(
            "\n            Stadtpark is a good place for sports. And the Palatinate Forest is great for hiking trips or cycle tours. Kaiserslautern has a mild climate so in the summer months lakes such as the Bärenloch, Clausensee or Sägmühlweiher are good places to hang out.\n        "
          )
        ])
      ]),
      _vm._v(" "),
      _c("v-card-title", [
        _c("h2", [_vm._v("INTERVIEW WITH OSCAR FROM MEXICO")])
      ]),
      _vm._v(" "),
      _c("v-card-text", [
        _c("p", [
          _vm._v(
            "\n            Oscar Salas Longoria comes from Mexico and is 26 years old. He is studying for a Master of Science degree in Electrical and Information Technology at the Technische Universität Kaiserslautern.\n        "
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
                "https://www.study-in.de/medien/studyin.de/staedte-detailseiten-fotos/fittosize__290_0_0f12d8e3e3bf69f26ee6d322da07a30c_5_kaiserslautern_oscar_salas_privat.jpg"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("v-card-title", [
        _c("h3", [_vm._v("Why did you decide to study in Kaiserslautern?")])
      ]),
      _vm._v(" "),
      _c("v-card-text", [
        _c("p", [
          _vm._v(
            "\n            I looked for a university that offers electrical technology and wanted to start studying in the summer semester. This was possible at the TU Kaiserslautern. The Faculty of Electrical Engineering also won a prize for being the best of its kind in Germany in 2007. And there's a Fraunhofer Institute here, so it's very well-networked.\n        "
          )
        ])
      ]),
      _vm._v(" "),
      _c("v-card-title", [
        _c("h3", [
          _vm._v("What is the best way of preparing for a stay in Germany?")
        ])
      ]),
      _vm._v(" "),
      _c("v-card-text", [
        _c("p", [
          _vm._v(
            "\n            Learning German! It's not that easy, but you mustn't be afraid of speaking. I have friends who are better at grammar than I am, but they're afraid to say anything. The food can also be very different from what you're used to at home, so you have to be open-minded.\n        "
          )
        ])
      ]),
      _vm._v(" "),
      _c("v-card-title", [
        _c("h3", [
          _vm._v(
            "Where can students find good and cheap accommodation in Kaiserslautern?"
          )
        ])
      ]),
      _vm._v(" "),
      _c("v-card-text", [
        _c("p", [
          _vm._v(
            "\n            The cost of living in Kaiserslautern is generally very low. I live in student residences, which I really like, and it's not expensive. It takes me five minutes to walk to the uni and 20 to get into town. You can also cycle everywhere. The residences are managed by the Studentenwerk, but you can also get information from the International Office or directly from the university. If you don't want to live in residences, you can also find a room in shared accommodation.\n        "
          )
        ])
      ]),
      _vm._v(" "),
      _c("v-card-title", [
        _c("h3", [
          _vm._v("What most surprised you about life in Kaiserslautern?")
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
                "https://www.study-in.de/medien/studyin.de/staedte-detailseiten-fotos/fittosize__290_0_03f8a7f93c1155d16c846864cc26e27e_4_kaiserslautern_japanischer_garten_wolfgang_staudt-flickr.jpg"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("v-card-text", [
        _c("p", [
          _vm._v(
            "\n            How well connected you are here. You can travel almost anywhere in Germany from here, or if not from here then from Mannheim, which is about an hour away. Paris is also just two hours away. That was a really nice surprise for me.\n        "
          )
        ])
      ]),
      _vm._v(" "),
      _c("v-card-title", [
        _c("h3", [_vm._v("What's the best way to get to know other students?")])
      ]),
      _vm._v(" "),
      _c("v-card-text", [
        _c("p", [
          _vm._v(
            "\n            One good way is to go to the parties at the university, such as the summer party. There are also extra-curricular activities such as salsa dancing, and many others. International students regularly organise national evenings where countries can introduce themselves. We recently had a Spanish evening, which was really good. A few Indian students have also cooked a typical Indian meal and done a presentation on their country.\n        "
          )
        ])
      ]),
      _vm._v(" "),
      _c("v-card-title", [_c("h2", [_vm._v("FACTS & FIGURES")])]),
      _vm._v(" "),
      _c("v-card-text", [
        _c("p", [
          _vm._v(
            "\n            Inhabitants:\n            96,340\n            "
          ),
          _c("br"),
          _vm._v("Students:\n            20,637\n            "),
          _c("br"),
          _vm._v("Universities:\n            2\n            "),
          _c("br"),
          _vm._v("Monthly rent:\n            270 €\n            "),
          _c("br"),
          _vm._v(
            "Tip:\n            Discover the beautiful wine-growing region on the Rhine and visit a wine festival!\n            "
          ),
          _c("br"),
          _vm._v("Website:"),
          _c(
            "a",
            {
              attrs: { href: "http://www.kaiserslautern.de", target: "_blank" }
            },
            [_vm._v("www.kaiserslautern.de")]
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
                  "http://www.studierendenwerk-kaiserslautern.de/kaiserslautern-en-US/",
                target: "_blank"
              }
            },
            [
              _vm._v(
                "studierendenwerk-kaiserslautern.de | Studentenwerk Kaiserslautern"
              )
            ]
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
    require("vue-hot-reload-api")      .rerender("data-v-4cf6713b", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_env_modules_false_targets_browsers_last_2_versions_safari_7_debug_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_syntax_dynamic_import_node_modules_vue_loader_lib_selector_type_script_index_0_Kaiserslautern_vue__ = __webpack_require__(242);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4cf6713b_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Kaiserslautern_vue__ = __webpack_require__(430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(3);
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(428)
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_env_modules_false_targets_browsers_last_2_versions_safari_7_debug_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_syntax_dynamic_import_node_modules_vue_loader_lib_selector_type_script_index_0_Kaiserslautern_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4cf6713b_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Kaiserslautern_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4cf6713b_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Kaiserslautern_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/user/university/Kaiserslautern.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4cf6713b", Component.options)
  } else {
    hotAPI.reload("data-v-4cf6713b", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

});