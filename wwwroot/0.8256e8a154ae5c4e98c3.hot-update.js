webpackHotUpdate(0,{

/***/ 15:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'hello',\n  data: function data() {\n    return {\n      msg: 'Welcome to Your Vue.js App 1111111222222222222233334444444'\n    };\n  },\n  created: function created() {\n    var _this = this;\n\n    this.$http.get('/api/hello').then(function (res) {\n      _this.msg = res.body.message;\n    }).catch(function (ex) {\n      return console.log(ex);\n    });\n  }\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTUuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vSGVsbG8udnVlP2Y0ZDUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJoZWxsb1wiPlxyXG4gICAgPGgxPnt7IG1zZyB9fTwvaDE+XHJcbiAgICA8aDI+RXNzZW50aWFsIExpbmtzPC9oMj5cclxuICAgIDx1bD5cclxuICAgICAgPGxpPjxhIGhyZWY9XCJodHRwczovL3Z1ZWpzLm9yZ1wiIHRhcmdldD1cIl9ibGFua1wiPkNvcmUgRG9jczwvYT48L2xpPlxyXG4gICAgICA8bGk+PGEgaHJlZj1cImh0dHBzOi8vZm9ydW0udnVlanMub3JnXCIgdGFyZ2V0PVwiX2JsYW5rXCI+Rm9ydW08L2E+PC9saT5cclxuICAgICAgPGxpPjxhIGhyZWY9XCJodHRwczovL2dpdHRlci5pbS92dWVqcy92dWVcIiB0YXJnZXQ9XCJfYmxhbmtcIj5HaXR0ZXIgQ2hhdDwvYT48L2xpPlxyXG4gICAgICA8bGk+PGEgaHJlZj1cImh0dHBzOi8vdHdpdHRlci5jb20vdnVlanNcIiB0YXJnZXQ9XCJfYmxhbmtcIj5Ud2l0dGVyPC9hPjwvbGk+XHJcbiAgICAgIDxicj5cclxuICAgICAgPGxpPjxhIGhyZWY9XCJodHRwOi8vdnVlanMtdGVtcGxhdGVzLmdpdGh1Yi5pby93ZWJwYWNrL1wiIHRhcmdldD1cIl9ibGFua1wiPkRvY3MgZm9yIFRoaXMgVGVtcGxhdGU8L2E+PC9saT5cclxuICAgIDwvdWw+XHJcbiAgICA8aDI+RWNvc3lzdGVtPC9oMj5cclxuICAgIDx1bD5cclxuICAgICAgPGxpPjxhIGhyZWY9XCJodHRwOi8vcm91dGVyLnZ1ZWpzLm9yZy9cIiB0YXJnZXQ9XCJfYmxhbmtcIj52dWUtcm91dGVyPC9hPjwvbGk+XHJcbiAgICAgIDxsaT48YSBocmVmPVwiaHR0cDovL3Z1ZXgudnVlanMub3JnL1wiIHRhcmdldD1cIl9ibGFua1wiPnZ1ZXg8L2E+PC9saT5cclxuICAgICAgPGxpPjxhIGhyZWY9XCJodHRwOi8vdnVlLWxvYWRlci52dWVqcy5vcmcvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+dnVlLWxvYWRlcjwvYT48L2xpPlxyXG4gICAgICA8bGk+PGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS92dWVqcy9hd2Vzb21lLXZ1ZVwiIHRhcmdldD1cIl9ibGFua1wiPmF3ZXNvbWUtdnVlPC9hPjwvbGk+XHJcbiAgICA8L3VsPlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICBuYW1lOiAnaGVsbG8nLFxyXG4gICAgZGF0YSAoKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgbXNnOiAnV2VsY29tZSB0byBZb3VyIFZ1ZS5qcyBBcHAgMTExMTExMTIyMjIyMjIyMjIyMjIzMzMzNDQ0NDQ0NCdcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGNyZWF0ZWQgKCkge1xyXG4gICAgICB0aGlzLiRodHRwXHJcbiAgICAgICAgICAuZ2V0KCcvYXBpL2hlbGxvJylcclxuICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5tc2cgPSByZXMuYm9keS5tZXNzYWdlXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLmNhdGNoKChleCkgPT4gY29uc29sZS5sb2coZXgpKVxyXG4gICAgfVxyXG4gIH1cclxuPC9zY3JpcHQ+XHJcblxyXG48IS0tIEFkZCBcInNjb3BlZFwiIGF0dHJpYnV0ZSB0byBsaW1pdCBDU1MgdG8gdGhpcyBjb21wb25lbnQgb25seSAtLT5cclxuPHN0eWxlIHNjb3BlZD5cclxuaDEsIGgyIHtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG59XHJcblxyXG51bCB7XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbmxpIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luOiAwIDEwcHg7XHJcbn1cclxuXHJcbmEge1xyXG4gIGNvbG9yOiAjNDJiOTgzO1xyXG59XHJcbjwvc3R5bGU+XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBIZWxsby52dWU/MmFiYzA5YzYiXSwibWFwcGluZ3MiOiI7OztBQXVCQTtBQUVBO0FBQ0E7O0FBRUE7QUFEQTtBQUdBOztBQUNBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTs7QUFDQTtBQWRBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///15\n");

/***/ })

})