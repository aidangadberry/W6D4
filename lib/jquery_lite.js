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
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/dom_node_collection.js":
/*!************************************!*\
  !*** ./lib/dom_node_collection.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class DOMNodeCollection {\n  constructor(nodes) {\n    this.nodes = nodes;\n  }\n  html(str = null) {\n    if (str === null) {\n      return this.nodes[0].innerHTML;\n    } else {\n      this.nodes.forEach((node) => node.innerHTML = str);\n    }\n  }\n  \n  empty() {\n    this.html(\"\");\n  }\n  \n  append(el){\n    if (typeof el === 'object' && !(el instanceof DOMNodeCollection)) {\n      el = $l(el);\n    }\n    \n    if (typeof el === 'string') {\n      this.nodes.forEach((node) => node.innerHTML += el);\n    } else if (typeof el === DOMNodeCollection) {\n      this.nodes.forEach((nodeChild) => {\n        el.nodes.forEach((elChild) => {\n          nodeChild.appendChild(elChild.cloneNode(true));\n        });\n      });\n    }\n  }\n  \n  attr(attrName, value = null) {\n    if (value === null) {\n      const attrVals = this.nodes[0].getAttribute(attrName);\n      if (attrVals === null) {\n        return \"\";\n      } else {\n        return attrVals;\n      }\n    } else {\n      this.nodes[0].setAttribute(attrName, value);\n    }\n  }\n  \n  addClass(className) {\n    let prevClasses = this.attr(\"class\");\n    \n    if (prevClasses === \"\") {\n      this.attr(\"class\", className);\n    } else {\n      this.attr(\"class\", prevClasses.concat(\" \", className));\n    }\n  }\n  \n  removeClass(className) {\n    let prevClasses = this.attr(\"class\").split(\" \");\n    let idx = prevClasses.indexOf(className);\n    \n    if (idx !== -1) {\n      this.attr(\"class\", prevClasses.slice(0, idx).concat(prevClasses.slice(idx + 1)).join(\" \"));\n    }\n  }\n  \n  children(){\n    let result = [];\n    \n    for (var i = 0; i < this.nodes.length; i++) {\n      const node = this.nodes[i];\n      const nodeChildren = node.children;\n      const nodeChildrenArray = Array.from(nodeChildren);\n      result = result.concat(nodeChildrenArray);\n    }\n    \n    return new DOMNodeCollection(result);\n  }\n  \n  on(eventName, eventHandler) {\n    this.addEventListener(eventName, eventHandler);\n    \n  }\n}\n\nmodule.exports = DOMNodeCollection;\n\n//# sourceURL=webpack:///./lib/dom_node_collection.js?");

/***/ }),

/***/ "./lib/main.js":
/*!*********************!*\
  !*** ./lib/main.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const DOMNodeCollection = __webpack_require__(/*! ./dom_node_collection */ \"./lib/dom_node_collection.js\");\n\nwindow.$l = (arg) => {\n  \n  if (arg instanceof HTMLElement) {\n    return new DOMNodeCollection([arg]);\n  } else {\n    const els = Array.from(document.querySelectorAll(arg));\n    return new DOMNodeCollection(els);\n  }\n  return els;\n};\n\n//# sourceURL=webpack:///./lib/main.js?");

/***/ })

/******/ });