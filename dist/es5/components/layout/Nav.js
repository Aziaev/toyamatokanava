"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
var appName = require("../../constants/index").appName;
module.exports = function (props) {
    return React.createElement(
        "div",
        { id: "page-menu" },
        React.createElement(
            "div",
            { id: "page-menu-wrap" },
            React.createElement(
                "div",
                { className: "container clearfix", style: { width: 98 + "%" } },
                React.createElement(
                    "div",
                    { style: { fontFamily: "Pathway Gothic One", fontSize: 30, fontWeight: 100 },
                        className: "menu-title" },
                    React.createElement(
                        "a",
                        { style: { color: "#fff" }, href: "/" },
                        appName
                    )
                ),
                React.createElement("nav", { className: "one-page-menu" }),
                React.createElement(
                    "div",
                    { id: "page-submenu-trigger" },
                    React.createElement("i", { className: "icon-reorder" })
                )
            )
        )
    );
};

/*<ul className="hidden-xs">*/ /*<li><a target="_blank" href="https://www.turbo360.co"><div style={{paddingTop:3}}>Home</div></a></li>*/ /*<li><a target="_blank" href="https://www.turbo360.co/docs"><div style={{paddingTop:3}}>Docs</div></a></li>*/ /*</ul>*/