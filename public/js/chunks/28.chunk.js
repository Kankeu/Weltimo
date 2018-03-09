webpackJsonp([28],{

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

/***/ 236:
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

/***/ 410:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(411);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(4).default
var update = add("c580c71e", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7cca1476\",\"scoped\":false,\"sourceMap\":false}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Berlin.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7cca1476\",\"scoped\":false,\"sourceMap\":false}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Berlin.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 411:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "\n.city .card__text{\n    font-family: 'FuturaPTWebBook',Georgia,'Times New Roman',Times,serif;\n    font-size: 18px;\n}\n", ""]);

// exports


/***/ }),

/***/ 412:
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
      _c("v-card-title", { staticClass: "headline" }, [_vm._v("Berlin")]),
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
                "https://www.study-in.de/medien/studyin.de/staedte-detailseiten-fotos/fittosize__620_192_98ca0881a2cceb5e1c3d90d9d51f0228_0_berlin_bundestag_horschig-daad.jpg"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("v-card-text", [
        _c("p", [
          _vm._v(
            "\n            Thanks to its multicultural and creative flair and countless recreational opportunities, Berlin is extremely attractive to students. Indeed, Germany’s capital possesses a very special atmosphere. Those who have come to this bustling city find it difficult to leave again.\n        "
          )
        ])
      ]),
      _vm._v(" "),
      _c("v-card-title", [_c("h2", [_vm._v("WELCOME TO BERLIN")])]),
      _vm._v(" "),
      _c("v-card-text", [
        _c("p", [
          _vm._v(
            "\n            Berlin is Germany’s capital city. And not only is it the political centre of the country, it’s also the largest city with 3.5 million inhabitants. This metropolis never sleeps. Berlin is home to internationally renowned universities, large corporations and start-up companies. Berlin is also known for its multiculturalism, exciting nightlife and vibrant art scene. Not to mention the world-class theatres and museums. Simply put, Berlin is the place to be. It has made a name for itself the world over and is more en vogue than ever before. Germany’s capital has so many different facets, it’s difficult to sum it up in a nutshell.\n        "
          )
        ]),
        _vm._v(" "),
        _c("p", [
          _vm._v(
            "\n            With 60 research facilities and more than 40 institutions of higher education, Berlin offers an extremely broad range of academic and research opportunities. 200,000 people from around the world study and work in the city.\n        "
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
                "https://www.study-in.de/medien/studyin.de/staedte-detailseiten-fotos/fittosize__290_0_e61c0a5c25c55c4162cfef02a4febbb9_1_humboldt_denkmal_hu_heike_zappe.jpg"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("v-card-text", [
        _c("p", [
          _vm._v(
            "\n            Berlin is comprised of twelve districts. Berliners often call them their “Kiez”, meaning the small area inside a city quarter, the immediate vicinity. The Neukölln district, for example, is as large as the entire city of Mannheim.\n        "
          )
        ]),
        _vm._v(" "),
        _c("p", [
          _vm._v(
            "\n            Berlin is very green. Numerous parks, gardens and lakes are close by and distinctly influence the look of the city. The flea markets are popular and the list of activities is endless. Many people are enchanted by the city and its particular rhythm. The interaction of various cultures is enriching and strongly shapes the city’s unique character. Berlin is also a presentation venue for young artists. Approximately 15 percent of the city’s inhabitants are foreigners.\n        "
          )
        ])
      ]),
      _vm._v(" "),
      _c("v-card-title", [_c("h2", [_vm._v("MORE PICTURE")])]),
      _vm._v(" "),
      _c(
        "v-card-text",
        [
          _c("v-card-media", {
            attrs: {
              height: "250px",
              src:
                "https://www.study-in.de/medien/studyin.de/staedte-detailseiten-fotos/resize__948_2871_on_75e1c02030636ebc8c8e3ee9f7636755_berlin_brandenburger_tor_wahrzeichen_graff_daad.jpg"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("v-card-title", [_c("h2", [_vm._v("LIVING IN BERLIN")])]),
      _vm._v(" "),
      _c("v-card-text", [
        _c("p", [
          _vm._v(
            "\n            You will find students throughout the entire city. Some choose to live near their universities, while others consciously decide not to. The availability of student accommodation is as variable as the city itself. Rental prices have increased rapidly in recent years. Certain districts like Kreuzberg and Neukölln have become more and more popular. Many students tend to live in districts where fellow students also live. Much of life takes place in the immediate vicinity of one’s flat. In this regard, Berlin is not your typical university town. If the enormous size of the city makes you feel overwhelmed, the universities offer advising programmes for international students which can help you get acclimated faster.\n        "
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
                "https://www.study-in.de/medien/studyin.de/staedte-detailseiten-fotos/fittosize__290_0_3cc359222081c55dd83a7e2e4f9ba82b_2_berlin_gropius_museum_graff_daad.jpg"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("v-card-text", [
        _c("p", [
          _vm._v(
            "\n            Despite its size, you’ll find your way around Berlin quickly because its infrastructure is rather straightforward. Public transportation is the best way to get from place to place. You can travel everywhere within city limits for free with your semester ticket. In fact, the Berlin Public Transportation Authority clocks up so many kilometres that its trains could travel 16 times around the earth – every day! If you happen to live far away from your university, you might have to take an hour-long train ride to get to classes.\n        "
          )
        ]),
        _vm._v(" "),
        _c("p", [
          _vm._v(
            "\n            Berlin is a green city. There are countless parks, each with its own unique atmosphere. The Mauerpark, for example, is famous for its flea market and karaoke events. If you need to escape the hectic pace of life in Berlin, you don’t have to go far. There are R&R areas at numerous swimming lakes in Berlin.\n        "
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
                "https://www.study-in.de/medien/studyin.de/staedte-detailseiten-fotos/fittosize__290_0_2a27f86a09bbc0f2ae654bf41beb8dd0_3_berlin_karneval_der_kulturen_horschig-daad_.jpg"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("v-card-text", [
        _c("p", [
          _vm._v(
            "\n            Operas, concerts, plays, varieté shows, poetry slams, readings, street festivals – there are so many things to do, which this event calendar can verify. There are many days when museums offer free admission or cinemas offer concession rates. As a student, you’re almost always eligible for concession rates on tickets, e.g. at theatres like the “Berliner Ensemble”and the Schaubühne. Some movie theatres, which also show independent films, offer lower-priced subscription rates.\n        "
          )
        ]),
        _vm._v(" "),
        _c("p", [
          _vm._v(
            "\n            faced with countless possibilities. Life in Berlin is fast-paced, and so is its nightlife. What all your friends were raving about last year might be yesterday’s news today. Beach bars, festivals, open air concerts (even in the winter) are always popular. There’s a club in Berlin for every possible taste in music. However, Berlin is actually well-known for its electronic music scene.\n        "
          )
        ]),
        _vm._v(" "),
        _c("p", [
          _vm._v(
            "\n            As far as food is concerned, you can find everything your taste buds desire and your budget can afford. Two great places to go are Markthalle Neun and the Thai Meadow in the Preussenpark. If you’re looking for fresh vegetables and spices, go to the weekly markets, such as the one on Maybachufer. Berliners like meeting on Sundays for brunch at one of the many cafés in town. There are affordable places to eat in almost every street – and you can order everything to go. Curried sausages and doner kebabs are two typical and well-loved specialities. If you want some variety and don’t have very much to spend, the student dining halls are a good alternative.\n        "
          )
        ])
      ]),
      _vm._v(" "),
      _c("v-card-title", [
        _c("h2", [_vm._v("INTERVIEW WITH KRISHA FROM NEPAL")])
      ]),
      _vm._v(" "),
      _c("v-card-text", [
        _c("p", [
          _vm._v(
            "\n            Krisha Sthapit is 26 years old and comes from Nepal. She is currently pursuing her master’s degree in “Technical Environmental Protection” at the TU Berlin.\n        "
          )
        ])
      ]),
      _vm._v(" "),
      _c(
        "v-card-text",
        [
          _c("v-card-media", {
            attrs: {
              height: "350px",
              src:
                "https://www.study-in.de/medien/studyin.de/staedte-detailseiten-fotos/fittosize__290_0_0445767f42e83c6c3bf58b448014383e_6_berlin_krisha_graff_daad.jpg"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("v-card-title", [
        _c("h3", [_vm._v("What do you like about Berlin?")])
      ]),
      _vm._v(" "),
      _c("v-card-text", [
        _c("p", [
          _vm._v(
            "\n            Its diversity. You can simply discover so much here. There’s always something going on and it’s affordable. Every “Kiez” is different. My advice is to check out what’s going on, go to the parks and enjoy life in Berlin to its fullest.\n        "
          )
        ])
      ]),
      _vm._v(" "),
      _c("v-card-title", [
        _c("h3", [_vm._v("How did you end up coming to Germany?")])
      ]),
      _vm._v(" "),
      _c("v-card-text", [
        _c("p", [
          _vm._v(
            "\n            I’ve been here for six years now. Many Nepalese go to America or Australia – that’s also what I had originally planned to do. Especially because of the language. But then my uncle, who lives here, convinced me to come to Germany instead. There are no tuition fees here and living expenses are lower than in other countries. I attended an intensive German language course and then continued learning on my own. My uncle’s wife can’t speak a word of Nepalese so I had to immediately speak German. Of course, everything was strange at first. People had to show me how to eat here, how to go shopping, how to use public transportation.\n        "
          )
        ])
      ]),
      _vm._v(" "),
      _c("v-card-title", [
        _c("h3", [_vm._v("What helped you get used to living here?")])
      ]),
      _vm._v(" "),
      _c(
        "v-card-text",
        [
          _c("v-card-media", {
            attrs: {
              height: "250px",
              src:
                "https://www.study-in.de/medien/studyin.de/staedte-detailseiten-fotos/fittosize__290_0_5493357675c9852923b267f415dfc30e_4_berlin_park_graff_daad.jpg"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("v-card-text", [
        _c("p", [
          _vm._v(
            "\n            First of all, my family. And then the fact that I moved into a student hall of residence. And the German-Nepalese Society. There are many associations of this kind which host traditional events where you can meet people. I also worked at a small restaurant. I’m still very close with the people there. And then, five years ago, I met my present boyfriend.\n        "
          )
        ])
      ]),
      _vm._v(" "),
      _c("v-card-title", [
        _c("h3", [_vm._v("What is Germany for you in a nutshell?")])
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
        _c("p", [_vm._v("\n            Bread and bratwurst!\n        ")])
      ]),
      _vm._v(" "),
      _c("v-card-title", [_c("h2", [_vm._v("FACTS & FIGURES")])]),
      _vm._v(" "),
      _c("v-card-text", [
        _c("p", [
          _vm._v(
            "\n            Inhabitants:\n            3,326,000\n            "
          ),
          _c("br"),
          _vm._v("Students:\n            182,150\n            "),
          _c("br"),
          _vm._v("Universities:\n            39\n            "),
          _c("br"),
          _vm._v("Monthly rent:\n            362 €\n            "),
          _c("br"),
          _vm._v(
            "Tip:\n            Enjoy Berlin’s vibrant art scene at the exhibition hall Martin-Gropius-Bau!\n            "
          ),
          _c("br"),
          _vm._v("Website:"),
          _c(
            "a",
            { attrs: { href: "http://www.berlin.de", target: "_blank" } },
            [_vm._v("www.berlin.de")]
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
                href: "http://www.studentenwerk-berlin.de/en/",
                target: "_blank"
              }
            },
            [_vm._v("studentenwerk-berlin.de | Studentenwerk Berlin")]
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
    require("vue-hot-reload-api")      .rerender("data-v-7cca1476", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_env_modules_false_targets_browsers_last_2_versions_safari_7_debug_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_syntax_dynamic_import_node_modules_vue_loader_lib_selector_type_script_index_0_Berlin_vue__ = __webpack_require__(236);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7cca1476_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Berlin_vue__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(3);
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(410)
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_env_modules_false_targets_browsers_last_2_versions_safari_7_debug_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_syntax_dynamic_import_node_modules_vue_loader_lib_selector_type_script_index_0_Berlin_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7cca1476_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Berlin_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7cca1476_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Berlin_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/user/university/Berlin.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7cca1476", Component.options)
  } else {
    hotAPI.reload("data-v-7cca1476", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

});