"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var React = _interopRequire(require("react"));

module.exports = function (props) {
    return React.createElement(
        "div",
        { className: "feature feature-1" },
        React.createElement("img", { alt: "Image", src: props.image }),
        React.createElement(
            "div",
            { className: "feature__body boxed boxed--lg boxed--border" },
            React.createElement(
                "h3",
                { className: "type--uppercase" },
                React.createElement(
                    "em",
                    null,
                    React.createElement(
                        "strong",
                        null,
                        props.title
                    )
                )
            ),
            React.createElement(
                "p",
                { className: "lead" },
                props.text
            ),
            React.createElement(
                "a",
                { href: "#" },
                "Learn More"
            )
        )
    );
};