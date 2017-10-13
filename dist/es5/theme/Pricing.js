"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var React = _interopRequire(require("react"));

module.exports = function (props) {
    var className = props.className || "pricing pricing-2 boxed boxed--border boxed--lg";
    return React.createElement(
        "div",
        { className: className },
        React.createElement(
            "span",
            { className: "label" },
            "Value"
        ),
        React.createElement(
            "div",
            { className: "col-md-6 text-center" },
            React.createElement(
                "h5",
                null,
                "Medium User"
            ),
            React.createElement(
                "span",
                { className: "h1" },
                React.createElement(
                    "span",
                    { className: "pricing__dollar" },
                    "$"
                ),
                "50"
            ),
            React.createElement(
                "p",
                { className: "type--fine-print" },
                "Per Month, AUD."
            ),
            React.createElement(
                "a",
                { className: "btn btn--primary", href: "#" },
                React.createElement(
                    "span",
                    { className: "btn__text" },
                    "Purchase Plan"
                )
            )
        ),
        React.createElement(
            "div",
            { className: "col-md-6" },
            React.createElement(
                "ul",
                null,
                React.createElement(
                    "li",
                    null,
                    React.createElement("span", { className: "checkmark bg--primary-1" }),
                    React.createElement(
                        "span",
                        null,
                        "24/7 Phone Support"
                    )
                ),
                React.createElement(
                    "li",
                    null,
                    React.createElement("span", { className: "checkmark bg--primary-1" }),
                    React.createElement(
                        "span",
                        null,
                        "Unlimited Skips"
                    )
                ),
                React.createElement(
                    "li",
                    null,
                    React.createElement("span", { className: "checkmark bg--primary-1" }),
                    React.createElement(
                        "span",
                        null,
                        "Import CSV Data"
                    )
                ),
                React.createElement(
                    "li",
                    null,
                    React.createElement("span", { className: "checkmark bg--primary-1" }),
                    React.createElement(
                        "span",
                        null,
                        "Automatic Transfer"
                    )
                ),
                React.createElement(
                    "li",
                    null,
                    React.createElement("span", { className: "checkmark bg--primary-1" }),
                    React.createElement(
                        "span",
                        null,
                        "100GB Storage"
                    )
                )
            )
        )
    );
};