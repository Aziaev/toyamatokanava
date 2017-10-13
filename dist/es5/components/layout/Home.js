"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
var Nav = _interopRequire(require("./Nav"));

var Sidebar = _interopRequire(require("./Sidebar"));

var Map = _interopRequire(require("../custom/Map"));

var superagent = _interopRequire(require("superagent"));

var _constantsIndex = require("../../constants/index");

var apiUrl = _constantsIndex.apiUrl;
var defaultCenter = _constantsIndex.defaultCenter;
var defaultZoom = _constantsIndex.defaultZoom;
var Places = _interopRequire(require("./Places"));

var style = {
    container: {
        padding: "0px 64px 32px 260px"
    },
    subheader: {
        marginBottom: 12
    },
    paragraph: {
        fontSize: 16,
        marginBottom: 6
    }
};

var Home = (function (Component) {
    function Home() {
        _classCallCheck(this, Home);

        _get(Object.getPrototypeOf(Home.prototype), "constructor", this).call(this);
        this.state = {
            points: []
        };
    }

    _inherits(Home, Component);

    _prototypeProperties(Home, null, {
        componentDidMount: {
            value: function componentDidMount() {
                var _this = this;
                console.log("Component did mount");

                superagent.get(apiUrl).query(null).set("Accept", "text/json").end(function (error, response) {
                    var points = response.body.response.venues;
                    _this.setState({
                        points: points
                    });
                });

            },
            writable: true,
            configurable: true
        },
        render: {
            value: function render() {
                var menu = [{ name: "Map", link: "#mapapp" }, { name: "Points", link: "#points" }];

                return React.createElement(
                    "div",
                    { className: "stretched side-header" },
                    React.createElement(Nav, null),
                    React.createElement(
                        "div",
                        null,
                        React.createElement(Sidebar, { items: menu }),
                        React.createElement(
                            "section",
                            { id: "mapapp", style: { marginTop: 64 }, className: "bottommargin-lg" },
                            React.createElement(
                                "div",
                                { className: "container", style: style.container },
                                React.createElement(
                                    "h1",
                                    null,
                                    "Map App"
                                ),
                                React.createElement("hr", null),
                                React.createElement(
                                    "p",
                                    { style: style.paragraph },
                                    "SEARCH FORM SHOULD BE ADDED!!!"
                                ),
                                React.createElement(Map, {
                                    center: defaultCenter,
                                    zoom: defaultZoom,
                                    containerElement: React.createElement("div", { style: { height: "500px" } }),
                                    mapElement: React.createElement("div", { style: { height: 100 + "%" } }),
                                    markers: this.state.points
                                })
                            )
                        ),
                        React.createElement(
                            "section",
                            { id: "points", style: { marginTop: 64 }, className: "bottommargin-lg" },
                            React.createElement(
                                "div",
                                { className: "container", style: style.container },
                                React.createElement(Places, { points: this.state.points })
                            )
                        )
                    )
                );
            },
            writable: true,
            configurable: true
        }
    });

    return Home;
})(Component);

module.exports = Home;