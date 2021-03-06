/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./web_lab_1/scripts.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/pug-runtime/index.js":
/*!*******************************************!*\
  !*** ./node_modules/pug-runtime/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar pug_has_own_property = Object.prototype.hasOwnProperty;\n\n/**\n * Merge two attribute objects giving precedence\n * to values in object `b`. Classes are special-cased\n * allowing for arrays and merging/joining appropriately\n * resulting in a string.\n *\n * @param {Object} a\n * @param {Object} b\n * @return {Object} a\n * @api private\n */\n\nexports.merge = pug_merge;\nfunction pug_merge(a, b) {\n  if (arguments.length === 1) {\n    var attrs = a[0];\n    for (var i = 1; i < a.length; i++) {\n      attrs = pug_merge(attrs, a[i]);\n    }\n    return attrs;\n  }\n\n  for (var key in b) {\n    if (key === 'class') {\n      var valA = a[key] || [];\n      a[key] = (Array.isArray(valA) ? valA : [valA]).concat(b[key] || []);\n    } else if (key === 'style') {\n      var valA = pug_style(a[key]);\n      valA = valA && valA[valA.length - 1] !== ';' ? valA + ';' : valA;\n      var valB = pug_style(b[key]);\n      valB = valB && valB[valB.length - 1] !== ';' ? valB + ';' : valB;\n      a[key] = valA + valB;\n    } else {\n      a[key] = b[key];\n    }\n  }\n\n  return a;\n};\n\n/**\n * Process array, object, or string as a string of classes delimited by a space.\n *\n * If `val` is an array, all members of it and its subarrays are counted as\n * classes. If `escaping` is an array, then whether or not the item in `val` is\n * escaped depends on the corresponding item in `escaping`. If `escaping` is\n * not an array, no escaping is done.\n *\n * If `val` is an object, all the keys whose value is truthy are counted as\n * classes. No escaping is done.\n *\n * If `val` is a string, it is counted as a class. No escaping is done.\n *\n * @param {(Array.<string>|Object.<string, boolean>|string)} val\n * @param {?Array.<string>} escaping\n * @return {String}\n */\nexports.classes = pug_classes;\nfunction pug_classes_array(val, escaping) {\n  var classString = '', className, padding = '', escapeEnabled = Array.isArray(escaping);\n  for (var i = 0; i < val.length; i++) {\n    className = pug_classes(val[i]);\n    if (!className) continue;\n    escapeEnabled && escaping[i] && (className = pug_escape(className));\n    classString = classString + padding + className;\n    padding = ' ';\n  }\n  return classString;\n}\nfunction pug_classes_object(val) {\n  var classString = '', padding = '';\n  for (var key in val) {\n    if (key && val[key] && pug_has_own_property.call(val, key)) {\n      classString = classString + padding + key;\n      padding = ' ';\n    }\n  }\n  return classString;\n}\nfunction pug_classes(val, escaping) {\n  if (Array.isArray(val)) {\n    return pug_classes_array(val, escaping);\n  } else if (val && typeof val === 'object') {\n    return pug_classes_object(val);\n  } else {\n    return val || '';\n  }\n}\n\n/**\n * Convert object or string to a string of CSS styles delimited by a semicolon.\n *\n * @param {(Object.<string, string>|string)} val\n * @return {String}\n */\n\nexports.style = pug_style;\nfunction pug_style(val) {\n  if (!val) return '';\n  if (typeof val === 'object') {\n    var out = '';\n    for (var style in val) {\n      /* istanbul ignore else */\n      if (pug_has_own_property.call(val, style)) {\n        out = out + style + ':' + val[style] + ';';\n      }\n    }\n    return out;\n  } else {\n    return val + '';\n  }\n};\n\n/**\n * Render the given attribute.\n *\n * @param {String} key\n * @param {String} val\n * @param {Boolean} escaped\n * @param {Boolean} terse\n * @return {String}\n */\nexports.attr = pug_attr;\nfunction pug_attr(key, val, escaped, terse) {\n  if (val === false || val == null || !val && (key === 'class' || key === 'style')) {\n    return '';\n  }\n  if (val === true) {\n    return ' ' + (terse ? key : key + '=\"' + key + '\"');\n  }\n  var type = typeof val;\n  if ((type === 'object' || type === 'function') && typeof val.toJSON === 'function') {\n    val = val.toJSON();\n  }\n  if (typeof val !== 'string') {\n    val = JSON.stringify(val);\n    if (!escaped && val.indexOf('\"') !== -1) {\n      return ' ' + key + '=\\'' + val.replace(/'/g, '&#39;') + '\\'';\n    }\n  }\n  if (escaped) val = pug_escape(val);\n  return ' ' + key + '=\"' + val + '\"';\n};\n\n/**\n * Render the given attributes object.\n *\n * @param {Object} obj\n * @param {Object} terse whether to use HTML5 terse boolean attributes\n * @return {String}\n */\nexports.attrs = pug_attrs;\nfunction pug_attrs(obj, terse){\n  var attrs = '';\n\n  for (var key in obj) {\n    if (pug_has_own_property.call(obj, key)) {\n      var val = obj[key];\n\n      if ('class' === key) {\n        val = pug_classes(val);\n        attrs = pug_attr(key, val, false, terse) + attrs;\n        continue;\n      }\n      if ('style' === key) {\n        val = pug_style(val);\n      }\n      attrs += pug_attr(key, val, false, terse);\n    }\n  }\n\n  return attrs;\n};\n\n/**\n * Escape the given string of `html`.\n *\n * @param {String} html\n * @return {String}\n * @api private\n */\n\nvar pug_match_html = /[\"&<>]/;\nexports.escape = pug_escape;\nfunction pug_escape(_html){\n  var html = '' + _html;\n  var regexResult = pug_match_html.exec(html);\n  if (!regexResult) return _html;\n\n  var result = '';\n  var i, lastIndex, escape;\n  for (i = regexResult.index, lastIndex = 0; i < html.length; i++) {\n    switch (html.charCodeAt(i)) {\n      case 34: escape = '&quot;'; break;\n      case 38: escape = '&amp;'; break;\n      case 60: escape = '&lt;'; break;\n      case 62: escape = '&gt;'; break;\n      default: continue;\n    }\n    if (lastIndex !== i) result += html.substring(lastIndex, i);\n    lastIndex = i + 1;\n    result += escape;\n  }\n  if (lastIndex !== i) return result + html.substring(lastIndex, i);\n  else return result;\n};\n\n/**\n * Re-throw the given `err` in context to the\n * the pug in `filename` at the given `lineno`.\n *\n * @param {Error} err\n * @param {String} filename\n * @param {String} lineno\n * @param {String} str original source\n * @api private\n */\n\nexports.rethrow = pug_rethrow;\nfunction pug_rethrow(err, filename, lineno, str){\n  if (!(err instanceof Error)) throw err;\n  if ((typeof window != 'undefined' || !filename) && !str) {\n    err.message += ' on line ' + lineno;\n    throw err;\n  }\n  try {\n    str = str || __webpack_require__(/*! fs */ 0).readFileSync(filename, 'utf8')\n  } catch (ex) {\n    pug_rethrow(err, null, lineno)\n  }\n  var context = 3\n    , lines = str.split('\\n')\n    , start = Math.max(lineno - context, 0)\n    , end = Math.min(lines.length, lineno + context);\n\n  // Error context\n  var context = lines.slice(start, end).map(function(line, i){\n    var curr = i + start + 1;\n    return (curr == lineno ? '  > ' : '    ')\n      + curr\n      + '| '\n      + line;\n  }).join('\\n');\n\n  // Alter exception message\n  err.path = filename;\n  err.message = (filename || 'Pug') + ':' + lineno\n    + '\\n' + context + '\\n\\n' + err.message;\n  throw err;\n};\n\n\n//# sourceURL=webpack:///./node_modules/pug-runtime/index.js?");

/***/ }),

/***/ "./web_lab_1/aux_funcs.js":
/*!********************************!*\
  !*** ./web_lab_1/aux_funcs.js ***!
  \********************************/
/*! exports provided: queryfunc, parsedata */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"queryfunc\", function() { return queryfunc; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"parsedata\", function() { return parsedata; });\n\r\nlet weatherinfo = __webpack_require__(/*! ../web_lab_1/template.pug */ \"./web_lab_1/template.pug\")\r\nlet error_message = __webpack_require__(/*! ../web_lab_1/error_temp.pug */ \"./web_lab_1/error_temp.pug\")\r\n\r\nfunction parsedata(json)\r\n{\r\n\tlet locals = {\r\n\t\tcity: \"\",\r\n\t\tcountry: \"\", \r\n\t\tweather: \"\",\r\n\t\ttemperature: \"\",\r\n\t\tspeedofweend: \"\",\r\n\t\twetness: \"\"\r\n\t}\r\n\tif (json.name)\r\n\t\tlocals.city = \"Город: \"+json.name;\r\n\telse \r\n\t\tlocals.city = \"Упс, информация о городе потерялась :(\";\r\n\tif (json.sys && json.sys.country)\r\n\t\tlocals.country = \"Страна: \"+json.sys.country;\r\n\telse \r\n\t\tlocals.country = \"Упс, информация о стране потерялась :(\";\r\n\tif (json.weather && json.weather[0] && json.weather[0].main)\r\n\t\tlocals.weather = \"Погода: \"+json.weather[0].main;\r\n\telse \r\n\t\tlocals.weather = \"Упс, информация о погоде потерялась :(\";\r\n\tif (json.main && json.main.temp)\r\n\t\tlocals.temperature = \"Температура: \"+(parseInt(json.main.temp,10)-273)+\" °С\";\r\n\telse \r\n\t\tlocals.temperature = \"Упс, информация о температуре потерялась :(\";\r\n\tif (json.wind && json.wind.speed)\r\n\t\tlocals.speedofweend = \"Скорость ветра: \"+json.wind.speed+\" m/s\";\r\n\telse \r\n\t\tlocals.speedofweend = \"Упс, информация о скорости ветра потерялась :(\";\r\n\tif (json.main && json.main.humidity)\r\n\t\tlocals.wetness = \"Влажность воздуха: \"+json.main.humidity+\" %\";\r\n\telse\r\n\t\tlocals.wetness = \"Упс, информация о влажности воздуха потерялась :(\";\r\n\r\n\treturn locals;\r\n}\r\n\r\nasync function queryfunc(result)\r\n{\t\r\n\tif(result.ok)\r\n\t{\r\n\t\tlet json= await result.json();\r\n\t\tlet locals = parsedata(json);\r\n\t\treturn weatherinfo(locals);\r\n\t}\r\n\telse\r\n\t{\r\n\t\tlet locals = {\r\n\t\t\tmess: \"Ошибочка вышла :'(\"\r\n\t\t}\r\n\t\treturn error_message(locals);\r\n\t}\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./web_lab_1/aux_funcs.js?");

/***/ }),

/***/ "./web_lab_1/error_temp.pug":
/*!**********************************!*\
  !*** ./web_lab_1/error_temp.pug ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(/*! ../node_modules/pug-runtime/index.js */ \"./node_modules/pug-runtime/index.js\");\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;;var locals_for_with = (locals || {});(function (mess) {pug_html = pug_html + \"\\u003Cdiv class=\\\"VisualStyle\\\" id=\\\"errormessage\\\"\\u003E\" + (pug.escape(null == (pug_interp = mess) ? \"\" : pug_interp)) + \"\\u003C\\u002Fdiv\\u003E\";}.call(this,\"mess\" in locals_for_with?locals_for_with.mess:typeof mess!==\"undefined\"?mess:undefined));;return pug_html;};\nmodule.exports = template;\n\n//# sourceURL=webpack:///./web_lab_1/error_temp.pug?");

/***/ }),

/***/ "./web_lab_1/scripts.js":
/*!******************************!*\
  !*** ./web_lab_1/scripts.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _aux_funcs_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./aux_funcs.js */ \"./web_lab_1/aux_funcs.js\");\n\r\n\r\nwindow.onload=function(){\r\n\tlet elem = document.getElementById('button');\r\n\telem.onclick=copypaste\r\n}\r\n\r\nasync function copypaste()\r\n{\r\n\tlet city_name = document.getElementById('inp').value;\r\n\tlet apilink=\"https://api.openweathermap.org/data/2.5/weather?q=\"+city_name+\"&appid=e9931f3a56608b6f3be9e93c5d8d26b4\";\r\n\tlet result = await fetch(apilink);\r\n\tlet qery_res = await Object(_aux_funcs_js__WEBPACK_IMPORTED_MODULE_0__[\"queryfunc\"])(result);\r\n\tdocument.getElementById('maindiv').innerHTML = qery_res;\r\n}\n\n//# sourceURL=webpack:///./web_lab_1/scripts.js?");

/***/ }),

/***/ "./web_lab_1/template.pug":
/*!********************************!*\
  !*** ./web_lab_1/template.pug ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(/*! ../node_modules/pug-runtime/index.js */ \"./node_modules/pug-runtime/index.js\");\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;;var locals_for_with = (locals || {});(function (city, country, speedofweend, temperature, weather, wetness) {pug_html = pug_html + \"\\u003Cdiv class=\\\"VisualStyle\\\" id=\\\"city\\\"\\u003E\" + (pug.escape(null == (pug_interp = city) ? \"\" : pug_interp)) + \"\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"VisualStyle\\\" id=\\\"country\\\"\\u003E\" + (pug.escape(null == (pug_interp = country) ? \"\" : pug_interp)) + \"\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"VisualStyle\\\" id=\\\"weather\\\"\\u003E\" + (pug.escape(null == (pug_interp = weather) ? \"\" : pug_interp)) + \"\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"VisualStyle\\\" id=\\\"temperature\\\"\\u003E\" + (pug.escape(null == (pug_interp = temperature) ? \"\" : pug_interp)) + \"\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"VisualStyle\\\" id=\\\"speedofweend\\\"\\u003E\" + (pug.escape(null == (pug_interp = speedofweend) ? \"\" : pug_interp)) + \"\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"VisualStyle\\\" id=\\\"wetness\\\"\\u003E\" + (pug.escape(null == (pug_interp = wetness) ? \"\" : pug_interp)) + \"\\u003C\\u002Fdiv\\u003E\";}.call(this,\"city\" in locals_for_with?locals_for_with.city:typeof city!==\"undefined\"?city:undefined,\"country\" in locals_for_with?locals_for_with.country:typeof country!==\"undefined\"?country:undefined,\"speedofweend\" in locals_for_with?locals_for_with.speedofweend:typeof speedofweend!==\"undefined\"?speedofweend:undefined,\"temperature\" in locals_for_with?locals_for_with.temperature:typeof temperature!==\"undefined\"?temperature:undefined,\"weather\" in locals_for_with?locals_for_with.weather:typeof weather!==\"undefined\"?weather:undefined,\"wetness\" in locals_for_with?locals_for_with.wetness:typeof wetness!==\"undefined\"?wetness:undefined));;return pug_html;};\nmodule.exports = template;\n\n//# sourceURL=webpack:///./web_lab_1/template.pug?");

/***/ }),

/***/ 0:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* (ignored) */\n\n//# sourceURL=webpack:///fs_(ignored)?");

/***/ })

/******/ });