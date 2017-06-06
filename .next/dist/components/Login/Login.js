"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/batugue/Documents/dwoo/embreo/react-nextjs/react-nextjs/components/Login/Login.js";


var Login = function (_Component) {
  (0, _inherits3.default)(Login, _Component);

  function Login() {
    (0, _classCallCheck3.default)(this, Login);

    return (0, _possibleConstructorReturn3.default)(this, (Login.__proto__ || (0, _getPrototypeOf2.default)(Login)).apply(this, arguments));
  }

  (0, _createClass3.default)(Login, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement("div", { className: "app flex-row align-items-center", __source: {
          fileName: _jsxFileName,
          lineNumber: 6
        }
      }, _react2.default.createElement("div", { className: "container", __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        }
      }, _react2.default.createElement("div", { className: "row justify-content-center", __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        }
      }, _react2.default.createElement("div", { className: "col-md-8", __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      }, _react2.default.createElement("div", { className: "card-group mb-0", __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      }, _react2.default.createElement("div", { className: "card p-4", __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }, _react2.default.createElement("div", { className: "card-block", __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }, _react2.default.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, "Login"), _react2.default.createElement("p", { className: "text-muted", __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, "Sign In to your account"), _react2.default.createElement("div", { className: "input-group mb-3", __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }, _react2.default.createElement("span", { className: "input-group-addon", __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, _react2.default.createElement("i", { className: "icon-user", __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      })), _react2.default.createElement("input", { type: "text", className: "form-control", placeholder: "Username", __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      })), _react2.default.createElement("div", { className: "input-group mb-4", __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, _react2.default.createElement("span", { className: "input-group-addon", __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, _react2.default.createElement("i", { className: "icon-lock", __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      })), _react2.default.createElement("input", { type: "password", className: "form-control", placeholder: "Password", __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      })), _react2.default.createElement("div", { className: "row", __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, _react2.default.createElement("div", { className: "col-6", __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, _react2.default.createElement("button", { type: "button", className: "btn btn-primary px-4", __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, "Login")), _react2.default.createElement("div", { className: "col-6 text-right", __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      })))), _react2.default.createElement("div", { className: "card card-inverse card-primary py-5 d-md-down-none", style: { width: 44 + '%' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, _react2.default.createElement("div", { className: "card-block text-center", __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, _react2.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, _react2.default.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, "Sign up"), _react2.default.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."), _react2.default.createElement("button", { type: "button", className: "btn btn-primary active mt-3", __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, "Register Now!")))))))));
    }
  }]);

  return Login;
}(_react.Component);

exports.default = Login;