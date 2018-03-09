webpackJsonp([27],{

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

/***/ 238:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

/***/ 416:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(417);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(4).default
var update = add("6a051f5e", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7217ec5e\",\"scoped\":false,\"sourceMap\":false}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Bochum.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7217ec5e\",\"scoped\":false,\"sourceMap\":false}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Bochum.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 417:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "\n.city .card__text{\n    font-family: 'FuturaPTWebBook',Georgia,'Times New Roman',Times,serif;\n    font-size: 18px;\n}\n", ""]);

// exports


/***/ }),

/***/ 418:
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
      _c("v-card-title", { staticClass: "headline" }, [_vm._v("Bochum")]),
      _vm._v(" "),
      _c(
        "v-card-title",
        {
          staticClass: "headline",
          staticStyle: { "font-size": "18px !important" }
        },
        [_vm._v("SUBTLE CHARM AND HONEST PEOPLE")]
      ),
      _vm._v(" "),
      _c(
        "v-card-text",
        [
          _c("v-card-media", {
            attrs: {
              height: "350px",
              src:
                "https://www.study-in.de/medien/studyin.de/staedte-detailseiten-fotos/fittosize__620_192_82fd4db1f84730ef2e31d3bad4a4e18f_0_bochum__deutsches_bergbau-museum_bochum_ruhr_tourismus__jochen_schlutius.jpg"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("v-card-text", [
        _c("p", [
          _vm._v(
            "\n            Old industrial facilities and green parks – Bochum is a city undergoing significant changes. If you keep an open mind, you’ll recognise its charm and learn to appreciate the honesty of its inhabitants. Bochum is situated in the urbanised Ruhr region, a former industrial powerhouse and now one of Europe’s capitals of culture.\n        "
          )
        ])
      ]),
      _vm._v(" "),
      _c("v-card-title", [_c("h2", [_vm._v("WELCOME TO BOCHUM")])]),
      _vm._v(" "),
      _c(
        "v-card-text",
        [
          _c("v-card-media", {
            attrs: {
              height: "250px",
              src:
                "https://www.study-in.de/medien/studyin.de/staedte-detailseiten-fotos/fittosize__290_0_35f67e2bb36a7f4ebe8258a21d80d413_1_bochum_campus_ruhr_universität_bochum_ruhr-universität_bochum.jpg"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("v-card-text", [
        _c("p", [
          _vm._v(
            "\n            The residents of Bochum must have a very special relationship to their city. The former mining and industrial city located in the conurbation of the Ruhr region is adjusting to the challenges of the future, and that’s one of the reasons why its inhabitants love their city. For all of its subtle charm, you might not recognise what makes the city worth loving at first glance. The German singer Herbert Grönemeyer wrote a famous song about Bochum, in which he sings: “You’re no beauty, grey with work, you love yourself without make-up, you’re the honest type.” It’s amazing how in so few words one can sum up Bochum – not especially beautiful, but honest.\n        "
          )
        ]),
        _vm._v(" "),
        _c("p", [
          _vm._v(
            "\n            The Ruhr region used to be the centre of Germany’s heavy industry. It was a coal and steel producing region, called “Germany’s black lung”. The city was known for its mines, smelting furnaces and winding towers. In the meantime, however, the “Ruhrpott” as they call it, has transformed itself into a cultural region – home to five million people and nominated the European Capital of Culture in 2010.\n        "
          )
        ]),
        _vm._v(" "),
        _c("p", [
          _vm._v(
            "\n            Walking through the city, you can still see the traces of Bochum’s industrial past. The last mining buildings are still standing on the city outskirts, closed-down factories which had once produced steel, and the pubs where the former “Kumpel” (coal miners) still meet. Bochum used to be grey and bleak, a city of factories and workers. Its work-weary past is evident in its often plain, functional buildings. You won’t find a quaint historic centre here. Even the architectural style of the Ruhr University, located on a hill at the edge of town, was clearly designed to be functional. The boxy-looking buildings from the 1970s are divided into departments and arranged on campus accordingly.\n        "
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
                "https://www.study-in.de/medien/studyin.de/staedte-detailseiten-fotos/fittosize__290_0_de9468be035dd7ed85c6547d643a5189_2_bochum_jahrhunderthalle_01_brothe.jpg"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("v-card-text", [
        _c("p", [
          _vm._v(
            "\n            You can gain an impression of times past in Bochum’s most famous museum – the Deutsches Bergbaumuseum. There you can experience how important coal mining was to the city and see the melancholy in the eyes of some of the visitors. You also get a sense of the grandeur of the past in the Jahrhunderthalle, which now serves as a venue for concerts and performances.\n        "
          )
        ])
      ]),
      _vm._v(" "),
      _c("v-card-title", [_c("h2", [_vm._v("LIVING IN BOCHUM")])]),
      _vm._v(" "),
      _c(
        "v-card-text",
        [
          _c("v-card-media", {
            attrs: {
              height: "250px",
              src:
                "https://www.study-in.de/medien/studyin.de/staedte-detailseiten-fotos/fittosize__290_0_7f3042339a6a6ee85ea2a67f3b211b33_3_bochum_bermudadreieck_stadt_bochum_presse-_und_informationsamt.jpg"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("v-card-text", [
        _c("p", [
          _vm._v(
            "\n            If you want to visit the Jahrhunderthalle, you should definitely go in the summertime. At the nearby Westpark, you can picnic and play sports. It’s also where you’ll meet lots of students. If you happen to take a walk in the park on a quiet morning, you might notice loud hammering nearby. It’s because steel is still being produced – like in the olden days.\n        "
          )
        ]),
        _vm._v(" "),
        _c("p", [
          _vm._v(
            "\n            You can experience even more nature to the south of Bochum at Kemnader Lake. There’s an eight-kilometre path around its periphery where you can go jogging, inline-skating, biking or hiking. You’re not allowed to go swimming there, but you can rent a paddle boat or a canoe and paddle across the lake.\n        "
          )
        ]),
        _vm._v(" "),
        _c("p", [
          _vm._v(
            '\n            When people from Bochum go out, they meet up at the "Bermuda Dreieck" – several streets at the edge of downtown filled with pubs, bars and clubs. Lots of people sit at tables outside and enjoy the weather in the summertime. There are two places worth seeing on Alte Hattinger Strasse – the Orlando and the Goldkante. The Orlando is an elegant café with a wonderful atmosphere. The large, old armchairs and lovingly arranged furnishings make the place especially charming. The "Goldkante" is a pub, club and performance venue wrapped up in one. It’s the scene of concerts, parties and events of all kinds, which are especially popular among students.\n        '
          )
        ]),
        _vm._v(" "),
        _c("p", [
          _vm._v(
            "\n            One of the major summer highlights is the “Bochum Total” festival. You can enjoy concerts by well-known and new, up-and-coming bands throughout the city for four days at no charge.\n        "
          )
        ])
      ]),
      _vm._v(" "),
      _c(
        "v-layout",
        { attrs: { row: "", wrap: "" } },
        [
          _c(
            "v-flex",
            { attrs: { lg6: "" } },
            [
              _c(
                "v-card-text",
                [
                  _c("v-card-media", {
                    attrs: {
                      height: "250px",
                      src:
                        "https://www.study-in.de/medien/studyin.de/staedte-detailseiten-fotos/fittosize__290_0_7f9916df302f4c9b3d6c338a7e3234b7_4_bochum_festival_bochum_total_bochum_total.jpg"
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
            "v-flex",
            { attrs: { lg6: "" } },
            [
              _c(
                "v-card-text",
                [
                  _c("v-card-media", {
                    attrs: {
                      height: "250px",
                      src:
                        "https://www.study-in.de/medien/studyin.de/staedte-detailseiten-fotos/fittosize__290_0_71a13fb17c479cbcbb9f72fb81adfd78_5_bochum_schauspielhaus_habekuss-daad.jpg"
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
      _c("v-card-text", [
        _c("p", [
          _vm._v(
            "\n            Bochum is known far and wide for its excellent theatre and performing arts scene. The Bochum Schauspielhaus is the largest theatre in town and offers a programme of theatre classics and modern pieces. The Prinzregenttheater is a bit smaller, but just as renowned. It features a repertoire of classical and modern plays. The theatre “Rottstraße 5” performs works which are sometimes quite extraordinary. It’s a good idea to ask students who come from Bochum which performances they’d recommend watching or experiencing.\n        "
          )
        ])
      ]),
      _vm._v(" "),
      _c("v-card-title", [
        _c("h2", [_vm._v("INTERVIEW WITH GIORDANO FROM ITALY")])
      ]),
      _vm._v(" "),
      _c("v-card-text", [
        _c("p", [
          _vm._v(
            "\n            Giordano Tuvo is 22 years old and studies Modern Languages at the Ruhr-Universität Bochum (RUB).\n        "
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
                "https://www.study-in.de/medien/studyin.de/menschen-gruppen-gesichter/fittosize__290_0_13dd8477e04b4d7bbb5037520033f012_foto_giordano_interview_städtetext-bochum.jpg"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("v-card-title", [
        _c("h3", [_vm._v("Why did you choose to study in Bochum?")])
      ]),
      _vm._v(" "),
      _c("v-card-text", [
        _c("p", [
          _vm._v(
            "\n            The RUB campus is one of the largest in Germany, and I had always wanted to have this “campus experience”. I don’t really like big cities, and that’s why I thought a smaller university town would be more my thing. It’s not so expensive and the social life here is interesting, too. What’s more, Bochum is strategically well-situated. From here you can easily reach other beautiful German cities like Cologne, Düsseldorf or Bonn. And with the semester ticket, it’s doesn’t cost a thing! Bochum is also relatively close to the Netherlands and Belgium.\n        "
          )
        ])
      ]),
      _vm._v(" "),
      _c("v-card-title", [
        _c("h3", [_vm._v("How did you prepare for your stay in Bochum?")])
      ]),
      _vm._v(" "),
      _c("v-card-text", [
        _c("p", [
          _vm._v(
            "\n            I spoke with some former Erasmus students at my university in Italy and they shared some tips and tricks with me, like how to find accommodation or what courses I should take.\n        "
          )
        ])
      ]),
      _vm._v(" "),
      _c("v-card-title", [
        _c("h3", [
          _vm._v("What should you definitely do before coming to Germany?")
        ])
      ]),
      _vm._v(" "),
      _c("v-card-text", [
        _c("p", [
          _vm._v(
            "\n            I had been studying Modern Languages so I could already speak German when I came, but some of my friends didn’t know a word of German. I think it’s very useful to know at least a little German so you can deal with the bureaucratic formalities in the beginning.\n        "
          )
        ])
      ]),
      _vm._v(" "),
      _c("v-card-title", [
        _c("h3", [_vm._v("Did you have any expectations of Bochum?")])
      ]),
      _vm._v(" "),
      _c("v-card-text", [
        _c("p", [
          _vm._v(
            "\n            The main reason I chose Bochum was that the cost of living was relatively low compared to other cities. The university is also very well equipped in comparison with other universities. So that’s what I was expecting.\n        "
          )
        ])
      ]),
      _vm._v(" "),
      _c("v-card-title", [
        _c("h3", [_vm._v("Did Bochum meet your expectations?")])
      ]),
      _vm._v(" "),
      _c("v-card-text", [
        _c("p", [
          _vm._v(
            "\n            Absolutely! Both in terms of the cost of living and the university. It’s easy not to spend too much money and still have fun. RUB offers you lots of possibilities: a gigantic library, cafés, fitness rooms and an enormous botanical garden.\n        "
          )
        ])
      ]),
      _vm._v(" "),
      _c("v-card-title", [
        _c("h3", [
          _vm._v("What should you definitely do before coming to Germany?")
        ])
      ]),
      _vm._v(" "),
      _c("v-card-text", [
        _c("p", [
          _vm._v(
            "\n            I had been studying Modern Languages so I could already speak German when I came, but some of my friends didn’t know a word of German. I think it’s very useful to know at least a little German so you can deal with the bureaucratic formalities in the beginning.\n        "
          )
        ])
      ]),
      _vm._v(" "),
      _c("v-card-title", [
        _c("h3", [
          _vm._v("What was the hardest thing for you when you first arrived?")
        ])
      ]),
      _vm._v(" "),
      _c("v-card-text", [
        _c("p", [
          _vm._v(
            "\n            German bureaucracy – it definitely tests your patience in the beginning.\n        "
          )
        ])
      ]),
      _vm._v(" "),
      _c("v-card-title", [_c("h3", [_vm._v("And how did you deal with it?")])]),
      _vm._v(" "),
      _c("v-card-text", [
        _c("p", [
          _vm._v(
            "\n            I planned my days around office hours and always reminded myself to take care of all the paperwork before focusing on something else. And you don’t forget that you’re not the only exchange student who’s struggling with bureaucracy – suddenly I found my best friends standing in the queue with me at the International Office. We helped each other! But I have to say that the staff was very efficient and helpful – so there’s no reason to be afraid, just ask if you have a question!\n        "
          )
        ])
      ]),
      _vm._v(" "),
      _c("v-card-title", [
        _c("h3", [_vm._v("What was the most surprising thing about Bochum?")])
      ]),
      _vm._v(" "),
      _c("v-card-text", [
        _c("p", [
          _vm._v(
            "\n            Obviously Bochum is not the prettiest city to live in or visit, but it has a lot of history! Germany succeeded in turning one of the most polluted areas in Europe into a vibrant region with good living conditions. You can go ice-skating in an old steel mill or watch a play in a former coal mine. And those are just two examples of the unique character of this city. Bochum and the Ruhr region are highly underrated!\n        "
          )
        ])
      ]),
      _vm._v(" "),
      _c("v-card-title", [
        _c("h3", [
          _vm._v("Do you have any tips for coming in contact with Germans?")
        ])
      ]),
      _vm._v(" "),
      _c("v-card-text", [
        _c("p", [
          _vm._v(
            "\n            Germans don’t care too much for small-talk and often appear aloof at first, but that’s just a cultural peculiarity. They quickly warm up to you as soon as you get to know them better. I participated in the tandem programme, organised by RUB. The goal is to bring people together who want to learn and practice speaking each other’s native language. I think it really helped me improve my German skills and get to know some real Germans.\n        "
          )
        ])
      ]),
      _vm._v(" "),
      _c("v-card-title", [
        _c("h3", [_vm._v("For me, studying in Germany means...")])
      ]),
      _vm._v(" "),
      _c("v-card-text", [
        _c("p", [
          _vm._v(
            "\n            Immersing myself in a completely different academic system and trying to learn as much as possible from a foreign culture.\n        "
          )
        ])
      ]),
      _vm._v(" "),
      _c("v-card-title", [
        _c("h3", [_vm._v("Describe Germany in three words:")])
      ]),
      _vm._v(" "),
      _c("v-card-text", [
        _c("p", [
          _vm._v("\n            Efficient, serious, comfortable\n        ")
        ])
      ]),
      _vm._v(" "),
      _c("v-card-title", [_c("h2", [_vm._v("FACTS & FIGURES")])]),
      _vm._v(" "),
      _c("v-card-text", [
        _c("p", [
          _vm._v(
            "\n            Inhabitants:\n            363,000\n            "
          ),
          _c("br"),
          _vm._v("Students:\n            56,835\n            "),
          _c("br"),
          _vm._v("Universities:\n            5\n            "),
          _c("br"),
          _vm._v("Monthly rent:\n            320 €\n            "),
          _c("br"),
          _vm._v(
            "Tip:\n            Chips like you’ve never had before – try some delicious snacks at max Frituur!\n            "
          ),
          _c("br"),
          _vm._v("Website:\n            "),
          _c(
            "a",
            { attrs: { href: "http://www.bochum.de", target: "_blank" } },
            [_vm._v("www.bochum.de")]
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
            { attrs: { href: "http://www.akafoe.de/en/", target: "_blank" } },
            [
              _vm._v(
                "akafoe.de | Studentenwerk Bochum (Akademisches Förderungswerk)"
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
    require("vue-hot-reload-api")      .rerender("data-v-7217ec5e", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_env_modules_false_targets_browsers_last_2_versions_safari_7_debug_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_syntax_dynamic_import_node_modules_vue_loader_lib_selector_type_script_index_0_Bochum_vue__ = __webpack_require__(238);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7217ec5e_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Bochum_vue__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(3);
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(416)
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_env_modules_false_targets_browsers_last_2_versions_safari_7_debug_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_syntax_dynamic_import_node_modules_vue_loader_lib_selector_type_script_index_0_Bochum_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7217ec5e_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Bochum_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7217ec5e_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Bochum_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/user/university/Bochum.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7217ec5e", Component.options)
  } else {
    hotAPI.reload("data-v-7217ec5e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

});