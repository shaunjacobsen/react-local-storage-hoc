"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var utiliserStockageLocal = function utiliserStockageLocal(WrapperComponent) {
  var HOC =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(HOC, _React$Component);

    function HOC(props) {
      var _this;

      _classCallCheck(this, HOC);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(HOC).call(this, props));
      state = {
        stockageLocalDisponible: false
      };
      return _this;
    }

    _createClass(HOC, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this.verifierDisponibiliteDuStockageLocal();
      }
    }, {
      key: "verifierDisponibiliteDuStockageLocal",
      value: function verifierDisponibiliteDuStockageLocal() {
        var essai = 'essai';

        try {
          localStorage.setItem(essai, essai);
          localStorage.removeItem(essai);
          this.setState({
            stockageLocalDisponible: true
          });
        } catch (e) {
          this.setState({
            stockageLocalDisponible: false
          });
        }
      }
    }, {
      key: "charger",
      value: function charger(cle) {
        if (this.state.stockageLocalDisponible) {
          return localStorage.getItem(cle);
        }

        return undefined;
      }
    }, {
      key: "sauvegarder",
      value: function sauvegarder(cle, infos) {
        this.state.stockageLocalDisponible && localStorage.setItem(cle, infos);
      }
    }, {
      key: "supprimer",
      value: function supprimer(cle) {
        this.state.stockageLocalDisponible && localStorage.removeItem(cle);
      }
    }, {
      key: "render",
      value: function render() {
        return _react["default"].createElement(WrapperComponent, _extends({
          load: this.charger,
          charger: this.charger,
          save: this.sauvegarder,
          sauvegarder: this.sauvegarder,
          remove: this.supprimer,
          supprimer: this.supprimer
        }, this.props));
      }
    }]);

    return HOC;
  }(_react["default"].Component);

  return HOC;
};

var _default = utiliserStockageLocal;
exports["default"] = _default;
