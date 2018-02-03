webpackJsonp([48],{

/***/ 292:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            url: null,
            file: null,
            time: "",
            date: "",
            levels: [{ text: "A1" }, { text: "A2" }, { text: "B1" }, { text: "B2" }, { text: "C1" }, { text: "C2" }],
            types: [{ text: "test" }, { text: "course" }, { text: "exercise" }],
            type: {},
            level: {},
            message: null
        };
    },
    computed: {
        published_at: function published_at() {
            var time = this.time.replace('pm', ' pm');
            time = time.replace('am', ' am');
            return new Date(this.date + " " + time);
        },
        messageParsed: function messageParsed() {
            return JSON.stringify([{ text: this.message }]);
        }
    },
    methods: {
        preview: function preview(event) {
            this.file = event.target.files[0];
            this.url = window.URL.createObjectURL(event.target.files[0]);
        },
        select: function select() {
            this.$el.querySelector("#photo").click();
        },
        publish: function publish(event) {
            if (this.published_at >= new Date()) {
                var formdata = new FormData(event.target);
                this.$http.post('/admin/book', formdata).then(function (response) {});
            } else {
                alert("Date incorrect");
            }
        }
    }
});

/***/ }),

/***/ 293:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-layout",
    [
      _c("v-flex", { attrs: { lg2: "" } }),
      _vm._v(" "),
      _c("v-flex", { attrs: { lg8: "" } }, [
        _c(
          "div",
          [
            _c(
              "v-card",
              [
                _c(
                  "v-card-text",
                  [
                    _c("v-subheader", [_vm._v("Publication")]),
                    _vm._v(" "),
                    _c(
                      "v-container",
                      { attrs: { fluid: "" } },
                      [
                        _c(
                          "v-form",
                          {
                            on: {
                              submit: function($event) {
                                $event.preventDefault()
                                _vm.publish($event)
                              }
                            }
                          },
                          [
                            _c(
                              "v-layout",
                              { attrs: { column: "" } },
                              [
                                _c(
                                  "v-flex",
                                  [
                                    _c("v-text-field", {
                                      attrs: {
                                        name: "title",
                                        label: "Title",
                                        required: ""
                                      }
                                    })
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-flex",
                                  [
                                    _c("v-text-field", {
                                      attrs: { label: "Message", textarea: "" },
                                      model: {
                                        value: _vm.message,
                                        callback: function($$v) {
                                          _vm.message = $$v
                                        },
                                        expression: "message"
                                      }
                                    })
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-flex",
                                  [
                                    _c("v-text-field", {
                                      attrs: {
                                        name: "url",
                                        label: "URL",
                                        type: "url",
                                        required: "",
                                        counter: "190",
                                        maxlength: "190"
                                      }
                                    })
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-flex",
                                  [
                                    _c("input", {
                                      staticStyle: { display: "none" },
                                      attrs: {
                                        type: "text",
                                        name: "level",
                                        required: ""
                                      },
                                      domProps: { value: _vm.level.text }
                                    }),
                                    _vm._v(" "),
                                    _c("v-select", {
                                      attrs: {
                                        items: _vm.levels,
                                        label: "Niveau",
                                        "single-line": "",
                                        bottom: ""
                                      },
                                      model: {
                                        value: _vm.level,
                                        callback: function($$v) {
                                          _vm.level = $$v
                                        },
                                        expression: "level"
                                      }
                                    })
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-flex",
                                  [
                                    _c("input", {
                                      staticStyle: { display: "none" },
                                      attrs: {
                                        type: "text",
                                        name: "type",
                                        required: ""
                                      },
                                      domProps: { value: _vm.type.text }
                                    }),
                                    _vm._v(" "),
                                    _c("v-select", {
                                      attrs: {
                                        items: _vm.types,
                                        label: "Type",
                                        "single-line": "",
                                        bottom: ""
                                      },
                                      model: {
                                        value: _vm.type,
                                        callback: function($$v) {
                                          _vm.type = $$v
                                        },
                                        expression: "type"
                                      }
                                    })
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-flex",
                                  [
                                    _c(
                                      "v-dialog",
                                      {
                                        attrs: {
                                          lazy: "",
                                          "full-width": "",
                                          width: "290px"
                                        }
                                      },
                                      [
                                        _c("v-text-field", {
                                          attrs: {
                                            slot: "activator",
                                            label: "Date",
                                            "prepend-icon": "event"
                                          },
                                          slot: "activator",
                                          model: {
                                            value: _vm.date,
                                            callback: function($$v) {
                                              _vm.date = $$v
                                            },
                                            expression: "date"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c("v-date-picker", {
                                          attrs: {
                                            type: "date",
                                            scrollable: "",
                                            actions: ""
                                          },
                                          model: {
                                            value: _vm.date,
                                            callback: function($$v) {
                                              _vm.date = $$v
                                            },
                                            expression: "date"
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
                                  [
                                    _c(
                                      "v-dialog",
                                      {
                                        attrs: {
                                          lazy: "",
                                          "full-width": "",
                                          width: "290px"
                                        }
                                      },
                                      [
                                        _c("v-text-field", {
                                          attrs: {
                                            slot: "activator",
                                            label: "Time",
                                            "prepend-icon": "access_time"
                                          },
                                          slot: "activator",
                                          model: {
                                            value: _vm.time,
                                            callback: function($$v) {
                                              _vm.time = $$v
                                            },
                                            expression: "time"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c("v-time-picker", {
                                          attrs: {
                                            scrollable: "",
                                            actions: ""
                                          },
                                          model: {
                                            value: _vm.time,
                                            callback: function($$v) {
                                              _vm.time = $$v
                                            },
                                            expression: "time"
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
                                  { staticStyle: { display: "flex" } },
                                  [
                                    _c(
                                      "v-btn",
                                      {
                                        attrs: { color: "primary" },
                                        on: { click: _vm.select }
                                      },
                                      [_vm._v("Photo")]
                                    ),
                                    _vm._v(" "),
                                    _c("v-spacer"),
                                    _vm._v(" "),
                                    _c(
                                      "v-btn",
                                      {
                                        attrs: {
                                          color: "success",
                                          type: "submit"
                                        }
                                      },
                                      [_vm._v("Publish")]
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-flex",
                                  [
                                    _c(
                                      "v-avatar",
                                      { attrs: { size: "200px", tile: "" } },
                                      [_c("img", { attrs: { src: _vm.url } })]
                                    )
                                  ],
                                  1
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c("input", {
                              staticStyle: { display: "none" },
                              attrs: {
                                type: "file",
                                id: "photo",
                                name: "image"
                              },
                              on: { change: _vm.preview }
                            }),
                            _vm._v(" "),
                            _c("input", {
                              staticStyle: { display: "none" },
                              attrs: { type: "text", name: "published_at" },
                              domProps: { value: _vm.published_at }
                            }),
                            _vm._v(" "),
                            _c("input", {
                              staticStyle: { display: "none" },
                              attrs: { type: "text", name: "message" },
                              domProps: { value: _vm.messageParsed }
                            })
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
            )
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("v-flex", { attrs: { lg2: "" } })
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
    require("vue-hot-reload-api")      .rerender("data-v-ed686afa", module.exports)
  }
}

/***/ }),

/***/ 73:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(292)
/* template */
var __vue_template__ = __webpack_require__(293)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
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
Component.options.__file = "resources/assets/js/components/admin/Books.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-ed686afa", Component.options)
  } else {
    hotAPI.reload("data-v-ed686afa", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});