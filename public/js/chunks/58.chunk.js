webpackJsonp([58],{

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

/***/ 622:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_env_modules_false_targets_browsers_last_2_versions_safari_7_debug_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_syntax_dynamic_import_node_modules_vue_loader_lib_selector_type_script_index_0_Paderborn_vue__ = __webpack_require__(623);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_8db6ddb6_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Paderborn_vue__ = __webpack_require__(626);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(3);
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(624)
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_env_modules_false_targets_browsers_last_2_versions_safari_7_debug_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_syntax_dynamic_import_node_modules_vue_loader_lib_selector_type_script_index_0_Paderborn_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_8db6ddb6_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Paderborn_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_8db6ddb6_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Paderborn_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/user/university/Paderborn.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-8db6ddb6", Component.options)
  } else {
    hotAPI.reload("data-v-8db6ddb6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 623:
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

/***/ 624:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(625);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(4).default
var update = add("74b39d95", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-8db6ddb6\",\"scoped\":false,\"sourceMap\":false}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Paderborn.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-8db6ddb6\",\"scoped\":false,\"sourceMap\":false}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Paderborn.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 625:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "\n.city .card__text{\n    font-family: 'FuturaPTWebBook',Georgia,'Times New Roman',Times,serif;\n    font-size: 18px;\n}\n", ""]);

// exports


/***/ }),

/***/ 626:
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
        [_vm._v("BIG TOWN SURROUNDED BY BEAUTIFUL NATURE")]
      ),
      _vm._v(" "),
      _c(
        "v-card-text",
        [
          _c("v-card-media", {
            attrs: {
              height: "250px",
              src:
                "https://www.study-in.de/medien/studyin.de/staedte-detailseiten-fotos/fittosize__620_192_b7c4713e0a041546c4fc9a9f6c986478_0_paderborn_fachwerkh%C3%A4user_thomas_lieven.jpg"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("v-card-text", [
        _c("p", [
          _vm._v(
            "\n            Paderborn is one of the most important centres of the computer science industry in Germany. The German computer pioneer Heinz Nixdorf played a defining role in the town. A historical town centre, a wide range of cultural activities and plenty of green areas make it a very attractive place to live. This is also where Germany's shortest river flows!\n        "
          )
        ])
      ]),
      _vm._v(" "),
      _c("v-card-title", [_c("h2", [_vm._v("WELCOME TO PADERBORN")])]),
      _vm._v(" "),
      _c("v-card-text", [
        _c("p", [
          _vm._v(
            "\n            Paderborn was founded in the eighth century and is one of the oldest and most important towns in the northern part of the state of North Rhine-Westphalia. Charlemagne visited the town on numerous occasions and commissioned the construction of the Pfalz (similar to a castle or palace) and the cathedral.\n        "
          )
        ]),
        _vm._v(" "),
        _c("p", [
          _vm._v(
            '\n            Despite heavy bombing during the Second World War, many old half-timbered houses and narrow streets have been preserved and still shape the historical town centre today. The Markplatz is dominated by Paderborn cathedral, which was built in the 13th century. One of its main features is the famous "Window of three hares", which you can admire from the inner courtyard. The cathedral is open to the public all year. It looks especially resplendent at Easter, Christmas and during services held in honour of the Cathedral\'s patron saint Liborius in July. The old Kaiserpfalz imperial palace is used today as a museum. It shows alternating exhibitions that are often related to Charlemagne and the Catholic church.\n        '
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
                "https://www.study-in.de/medien/studyin.de/staedte-detailseiten-fotos/fittosize__290_0_7f1e2a778c063fb2c8ad83c6132b0b7d_1_paderborn_kaiserpfalz_schlun-daad.jpg"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("v-card-text", [
        _c("p", [
          _vm._v(
            "\n            The IT industry plays an important role in Paderborn. Numerous IT companies are headquartered in the town, and it is also the home of the Heinz Nixdorf Museum. With over 6,000 square metres of exhibition space, it is the biggest computer museum in the world. In the different parts of the exhibition, you can trace the 5,000 year-old history of information technology, from the development of the written word in 3000 BC right up into the 21st century. Heinz Nixdorf was a German computer pioneer. His foundation also supports science and teaching in the field of information science at the\n        "
          )
        ])
      ]),
      _vm._v(" "),
      _c("v-card-title", [_c("h2", [_vm._v("LIVING IN PADERBORN")])]),
      _vm._v(" "),
      _c("v-card-text", [
        _c("p", [
          _vm._v(
            "\n            The student population has increased considerably in Paderborn in the last few years. In the town itself rent is relatively high but for between 200 and 380 euros you can find a room in one of the student residences. The Studentenwerk has around 100 apartments for international students.\n        "
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
                "https://www.study-in.de/medien/studyin.de/staedte-detailseiten-fotos/fittosize__290_0_2f4533b5d7a95b0e146a48392c4610b5_2_paderborn_hasenfenster_schlun-daad.jpg"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("v-card-text", [
        _c("p", [
          _vm._v(
            "\n            You can join in a wide range of cultural and sports activities at the university. Sports courses are available in everything from classical dance and football to more unusual types of sport such as flunkyball. You should sign up early because courses are soon full. Alongside sports, the university also has a student theatre and radio station which you can also become actively involved in.\n        "
          )
        ]),
        _vm._v(" "),
        _c("p", [
          _vm._v(
            "\n            Just a few metres from the cathedral and Kaiserpfalz is the source of the river Pader. Fed by over 200 springs, the river is only four kilometres long, making it the shortest river in Germany! The source of the river Pader is a wonderful place to take a break from city life, and it attracts numerous students in the summer months. Walkers and nature lovers can spend an enjoyable and varied day in the nearby Teutoburg Forest.\n        "
          )
        ]),
        _vm._v(" "),
        _c("p", [
          _vm._v(
            "\n            Local companies offer students lots of discounts. Just show your student ID! But prices here are also affordable for students without a student ID: You can enjoy an inexpensive breakfast at BarCelona and cheap cocktails at Havanna. You also get a discount at the Heinz Nixdorf Museum: students pay just 4 euros.\n        "
          )
        ]),
        _vm._v(" "),
        _c("p", [
          _vm._v(
            '\n            Paderborn also has plenty to offer in the way of culture. Locally, the town is famous for the "Libori" funfair. This traditional festival is held in honour of St Liborius and takes place twice a year, in April and July. Special events, concerts, culinary specialities and fairground rides are offered along a two-kilometre stretch through the town centre. The festival attracts around two million visitors every year.\n        '
          )
        ]),
        _vm._v(" "),
        _c("p", [
          _vm._v(
            "\n            Another highlight is a visit to Paderborn's local football club SC Paderborn 07 at the Benteler Arena. In 2014, the team was promoted to the first German league. But the locals love their team whatever division it's in! Lots of students like going to the matches at the Benteler Arena at weekends to cheer on their team.\n        "
          )
        ])
      ]),
      _vm._v(" "),
      _c("v-card-title", [
        _c("h2", [_vm._v("INTERVIEW WITH SHIANNE FROM THE US")])
      ]),
      _vm._v(" "),
      _c("v-card-text", [
        _c("p", [
          _vm._v(
            "\n            Shianne Spencer is 22 years old and comes from the US. In Paderborn, she's studying for her Master's in International Studies with a focus on German.\n        "
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
                "https://www.study-in.de/medien/studyin.de/staedte-detailseiten-fotos/fittosize__290_0_a2e96b7838271959b57b107d5cdc0ca7_5_paderborn_shianne_privat.jpg"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("v-card-title", [
        _c("h3", [_vm._v("How do you like life in Paderborn?")])
      ]),
      _vm._v(" "),
      _c("v-card-text", [
        _c("p", [
          _vm._v(
            "\n            I have a lot of independence here and I really love that! Paderborn is just a little bit bigger than my home town of Curwensville in Pennsylvania. It's easy to get from one place to the other by bus. But I do prefer life in the country than in the city.\n        "
          )
        ])
      ]),
      _vm._v(" "),
      _c("v-card-title", [
        _c("h3", [_vm._v("What's your student life like?")])
      ]),
      _vm._v(" "),
      _c("v-card-text", [
        _c("p", [
          _vm._v(
            "\n            It's very challenging and difficult learning German. I always have to do homework, but my German has really improved since I got here. When I'm not studying I'm always very busy. I love spending time with friends and travelling. I'm glad I've managed to visit all kinds of places, like Detmold, Schloss Neuhaus, and Hamburg. I've also been to Austria and Amsterdam. My next trip is to Bochum and Essen with Eurobiz, the university organisation that supports exchange students. In Paderborn, I like to go to the \"Mango\" club. That's my favourite club. Or I go out eating, I then like to order traditional German food.\n        "
          )
        ])
      ]),
      _vm._v(" "),
      _c("v-card-title", [
        _c("h3", [_vm._v("How did you prepare for your stay in Germany?")])
      ]),
      _vm._v(" "),
      _c(
        "v-card-text",
        [
          _c("v-card-media", {
            attrs: {
              height: "250px",
              src:
                "https://www.study-in.de/medien/studyin.de/staedte-detailseiten-fotos/fittosize__290_0_1e8938b3c8b3508640f1616c5e1de456_3_paderborn_quellgebiet_schlun-daad.jpg"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("v-card-text", [
        _c("p", [
          _vm._v(
            "\n            I'd paid for my flights beforehand, bought all the things I needed and I also paid for my entire rent before I arrived here. I sought advice about how much money I'd need every month in Germany.\n        "
          )
        ])
      ]),
      _vm._v(" "),
      _c("v-card-title", [
        _c("h3", [_vm._v("How did you find an apartment?")])
      ]),
      _vm._v(" "),
      _c(
        "v-card-text",
        [
          _c("v-card-media", {
            attrs: {
              height: "250px",
              src:
                "https://www.study-in.de/medien/studyin.de/staedte-detailseiten-fotos/fittosize__290_0_88617dfc97fe2a08e9a1cb538d3ad65b_4_paderborn_panorama_schlun-daad.jpg"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("v-card-text", [
        _c("p", [
          _vm._v(
            "\n            I applied for student residences on campus and was offered a place.\n        "
          )
        ])
      ]),
      _vm._v(" "),
      _c("v-card-title", [
        _c("h3", [_vm._v("What was one of the first things you noticed here?")])
      ]),
      _vm._v(" "),
      _c("v-card-text", [
        _c("p", [
          _vm._v(
            "\n            I found that the people in Germany are very friendly. I was afraid to speak to anyone because my German wasn't very good, but people immediately spoke to me in English. This put me at ease. There's one thing I noticed when I went shopping. Plastic bottles aren't thrown away here, and you even get money back if you take them back to the shop. This is a great idea and I'm sure a lot of people in Germany benefit from this. I was very surprised that so many bars play American hip hop music. And not just hip hop, but also other types of music. I was definitely glad about that.\n        "
          )
        ])
      ]),
      _vm._v(" "),
      _c("v-card-title", [_c("h2", [_vm._v("FACTS & FIGURES")])]),
      _vm._v(" "),
      _c("v-card-text", [
        _c("p", [
          _vm._v(
            "\n            Inhabitants:\n            142,365\n            "
          ),
          _c("br"),
          _vm._v("Students:\n            22,541\n            "),
          _c("br"),
          _vm._v("Universities:\n            3\n            "),
          _c("br"),
          _vm._v("Monthly rent:\n            301 €\n            "),
          _c("br"),
          _vm._v(
            "Tip:\n            Become a real local by cheering on the football team SC Paderborn 07!\n            "
          ),
          _c("br"),
          _vm._v("Website:"),
          _c(
            "a",
            { attrs: { href: "http://www.paderborn.de", target: "_blank" } },
            [_vm._v("www.paderborn.de")]
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
                href: "http://www.studentenwerk-pb.de/",
                target: "_blank"
              }
            },
            [_vm._v("studentenwerk-pb.de | Studentenwerk Paderborn")]
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
    require("vue-hot-reload-api")      .rerender("data-v-8db6ddb6", { render: render, staticRenderFns: staticRenderFns })
  }
}

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