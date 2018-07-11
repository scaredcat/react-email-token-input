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
/******/ 	return __webpack_require__(__webpack_require__.s = "./emailtoken.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./emailtoken.js":
/*!***********************!*\
  !*** ./emailtoken.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar tokenDivStyle = {\n  float: 'left',\n  margin: '5px',\n  background: '#ccc',\n  border: '1px solid #555',\n  borderRadius: '5px'\n};\nvar textStyle = {\n  padding: '5px',\n  display: 'inline-block'\n};\nvar crossStyle = {\n  cursor: 'pointer',\n  background: '#555',\n  color: '#fff',\n  padding: '5px',\n  display: 'inline-block',\n  borderRadius: '0 5px 5px 0'\n};\nvar highlightStyle = {\n  background: '#555',\n  color: '#fff'\n};\n\nvar Token = function (_React$Component) {\n  _inherits(Token, _React$Component);\n\n  function Token() {\n    var _ref;\n\n    var _temp, _this, _ret;\n\n    _classCallCheck(this, Token);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Token.__proto__ || Object.getPrototypeOf(Token)).call.apply(_ref, [this].concat(args))), _this), _this.deleteToken = function () {\n      _this.props.deleteToken(_this.props.data.text);\n    }, _temp), _possibleConstructorReturn(_this, _ret);\n  }\n\n  _createClass(Token, [{\n    key: 'render',\n    value: function render() {\n      var cls = 'Token';\n      if (this.props.data.highlight) {\n        cls += ' highlight';\n      }\n      return React.createElement(\n        'div',\n        { className: cls, style: Object.assign({}, tokenDivStyle, this.props.data.highlight && highlightStyle) },\n        React.createElement(\n          'span',\n          { style: textStyle },\n          this.props.data.text\n        ),\n        React.createElement(\n          'span',\n          { onClick: this.deleteToken, style: crossStyle },\n          'X'\n        )\n      );\n    }\n  }]);\n\n  return Token;\n}(React.Component);\n\nvar inputDivStyle = {\n  float: 'left',\n  padding: '2px',\n  margin: '5px',\n  font: '14px Arial'\n};\n\nvar inputStyle = {\n  border: '0px',\n  font: '15px Arial',\n  height: '22px',\n  outline: 'none'\n};\n\nvar InputBox = function (_React$Component2) {\n  _inherits(InputBox, _React$Component2);\n\n  function InputBox() {\n    var _ref2;\n\n    var _temp2, _this2, _ret2;\n\n    _classCallCheck(this, InputBox);\n\n    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {\n      args[_key2] = arguments[_key2];\n    }\n\n    return _ret2 = (_temp2 = (_this2 = _possibleConstructorReturn(this, (_ref2 = InputBox.__proto__ || Object.getPrototypeOf(InputBox)).call.apply(_ref2, [this].concat(args))), _this2), _this2.state = {\n      value: ''\n    }, _this2.focusTextInput = function () {\n      _this2.refs.emailInput.focus();\n    }, _this2.handleChange = function (event) {\n      var v = event.target.value;\n      var x = v.indexOf(' ') >= 0 || v.indexOf(',') >= 0;\n\n      if (x == true) {\n        var emails = v.split(/,| /);\n        for (var i = 0; i < emails.length; i++) {\n          var isValid = _this2.validateEmail(emails[i]);\n          if (isValid === true) {\n            _this2.addToken(emails[i]);\n          }\n        }\n        _this2.setState({ value: '' });\n        _this2.props.changeInputText('');\n      } else {\n        _this2.setState({ value: v });\n        _this2.props.changeInputText(v);\n      }\n    }, _this2.checkTokenRemoval = function () {\n      if (_this2.state.value.length == 0) {\n        _this2.props.backToken();\n      }\n    }, _this2.validateEmail = function (email) {\n      if (email.length > 0) {\n        var re = /^(([^<>()\\[\\]\\\\.,;:\\s@\"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/;\n        return re.test(email);\n      } else {\n        return false;\n      }\n    }, _this2.addToken = function (token) {\n      console.log(token);\n      _this2.props.addToken(token);\n    }, _this2.keyDown = function (event) {\n      switch (event.keyCode) {\n        case 13: // enter\n        case 32: // space\n        case 188:\n          // comma\n          event.preventDefault();\n          if (_this2.validateEmail(_this2.state.value)) {\n            _this2.addToken(_this2.state.value);\n          } else {\n            alert('Invalid Email');\n          }\n          _this2.setState({ value: '' });\n          break;\n        case 8:\n          // backspace\n          _this2.checkTokenRemoval();\n          break;\n\n        default:\n        // console.log(event.keyCode);\n      }\n    }, _temp2), _possibleConstructorReturn(_this2, _ret2);\n  }\n\n  _createClass(InputBox, [{\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      this.focusTextInput();\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      return React.createElement(\n        'div',\n        { className: 'InputBox', style: inputDivStyle },\n        React.createElement('input', { ref: 'emailInput', style: inputStyle, type: 'text', value: this.state.value, onKeyDown: this.keyDown, onChange: this.handleChange })\n      );\n    }\n  }]);\n\n  return InputBox;\n}(React.Component);\n\nvar tokenBoxDivStyle = {\n  border: '1px solid #ccc',\n  width: '500px',\n  height: 'auto',\n  minHeight: '100px',\n  font: '14px Arial',\n  cursor: 'text'\n};\n\nvar clearStyle = {\n  clear: 'both',\n  borderBottom: 'none'\n};\n\nvar TokenBox = function (_React$Component3) {\n  _inherits(TokenBox, _React$Component3);\n\n  function TokenBox() {\n    var _ref3;\n\n    var _temp3, _this3, _ret3;\n\n    _classCallCheck(this, TokenBox);\n\n    for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {\n      args[_key3] = arguments[_key3];\n    }\n\n    return _ret3 = (_temp3 = (_this3 = _possibleConstructorReturn(this, (_ref3 = TokenBox.__proto__ || Object.getPrototypeOf(TokenBox)).call.apply(_ref3, [this].concat(args))), _this3), _this3.state = {\n      tokens: [],\n      inputText: ''\n    }, _this3.onTokenAdded = function (newToken) {\n      newToken = newToken.toLowerCase();\n      var t = _this3.state.tokens;\n      var newT = true;\n      for (var i = 0; i < t.length; i++) {\n        if (t[i].text == newToken) {\n          newT = false;\n          return false;\n        }\n      }\n      if (newT) {\n        t.push({ text: newToken, highlight: false });\n        _this3.setState({ tokens: t });\n      }\n    }, _this3.changeHightlight = function (h) {\n      var ta = _this3.state.tokens;\n      if (ta && ta.length > 0) {\n        var lastToken = ta[ta.length - 1];\n        if (!h) {\n          ta[ta.length - 1].highlight = h;\n        } else {\n          if (lastToken && lastToken.highlight) {\n            // delete\n            ta.pop();\n          } else {\n            ta[ta.length - 1].highlight = h;\n          }\n        }\n        _this3.setState({ tokens: ta });\n      }\n    }, _this3.onBackKey = function () {\n      _this3.changeHightlight(true);\n    }, _this3.onInputTextChange = function (text) {\n      _this3.setState({ inputText: text });\n      if (text.length > 0) {\n        _this3.changeHightlight(false);\n      }\n    }, _this3.onClicked = function () {\n      _this3.inputBox.focusTextInput();\n    }, _this3.onTokenDelete = function (token) {\n      var t = _this3.state.tokens.slice();\n      var match = false;\n      for (var i = 0; i < t.length; i++) {\n        if (t[i].text == token) {\n          match = i + 1;\n        }\n      }\n      if (match) {\n        var to = _this3.state.tokens.filter(function (t) {\n          return t.text != token;\n        });\n        _this3.setState({ tokens: to });\n      }\n    }, _temp3), _possibleConstructorReturn(_this3, _ret3);\n  }\n\n  _createClass(TokenBox, [{\n    key: 'render',\n    value: function render() {\n      var _this4 = this;\n\n      return React.createElement(\n        'div',\n        { className: 'TokenBox', style: tokenBoxDivStyle, onClick: this.onClicked },\n        this.state.tokens.map(function (t) {\n          return React.createElement(Token, { deleteToken: this.onTokenDelete, key: t.text, data: t });\n        }.bind(this)),\n        React.createElement(InputBox, { ref: function ref(_ref4) {\n            _this4.inputBox = _ref4;\n          }, changeInputText: this.onInputTextChange, addToken: this.onTokenAdded, backToken: this.onBackKey }),\n        React.createElement('div', { style: clearStyle })\n      );\n    }\n  }]);\n\n  return TokenBox;\n}(React.Component);\n\nReactDOM.render(React.createElement(TokenBox, null), document.getElementById('example'));\n\n//# sourceURL=webpack:///./emailtoken.js?");

/***/ })

/******/ });