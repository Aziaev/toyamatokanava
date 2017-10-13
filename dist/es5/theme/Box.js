"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var React = _interopRequire(require("react"));

module.exports = function (props) {
    var className = props.className || "boxed boxed--border";

    return React.createElement(
        "div",
        { className: className },
        React.createElement(
            "h4",
            null,
            "Modern Aesthetic"
        ),
        React.createElement(
            "p",
            null,
            "Build a beautifully performant site with Stacks vast collection of modular elements."
        ),
        React.createElement(
            "a",
            { className: "btn btn--primary", href: "#" },
            React.createElement(
                "span",
                { className: "btn__text" },
                "Build Now"
            )
        )
    );
};