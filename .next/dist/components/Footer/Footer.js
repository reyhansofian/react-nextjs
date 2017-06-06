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

var _jsxFileName = "/Users/vicz/Projects/Research/embreo/mini-hackathon/components/Footer/Footer.js";


var Footer = function (_Component) {
  (0, _inherits3.default)(Footer, _Component);

  function Footer() {
    (0, _classCallCheck3.default)(this, Footer);

    return (0, _possibleConstructorReturn3.default)(this, (Footer.__proto__ || (0, _getPrototypeOf2.default)(Footer)).apply(this, arguments));
  }

  (0, _createClass3.default)(Footer, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement("footer", { className: "app-footer", __source: {
          fileName: _jsxFileName,
          lineNumber: 6
        }
      }, _react2.default.createElement("a", { href: "http://coreui.io", __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        }
      }, "CoreUI"), " \xA9 2017 creativeLabs.", _react2.default.createElement("span", { className: "float-right", __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        }
      }, "Powered by ", _react2.default.createElement("a", { href: "http://coreui.io", __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        }
      }, "CoreUI")));
    }
  }]);

  return Footer;
}(_react.Component);

exports.default = Footer;