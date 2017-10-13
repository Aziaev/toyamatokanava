"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var React = _interopRequire(require("react"));

module.exports = function (props) {
    return React.createElement(
        "form",
        null,
        React.createElement(
            "div",
            { className: "col-sm-6" },
            React.createElement(
                "label",
                null,
                "Your Name:"
            ),
            React.createElement("input", { type: "text", name: "name", placeholder: "Type Name Here" })
        ),
        React.createElement(
            "div",
            { className: "col-sm-6" },
            React.createElement(
                "label",
                null,
                "Email Address:"
            ),
            React.createElement("input", { type: "email", name: "email", placeholder: "Email Address" })
        ),
        React.createElement(
            "div",
            { className: "col-sm-12" },
            React.createElement(
                "label",
                null,
                "Street Address:"
            ),
            React.createElement("input", { type: "text", name: "address", placeholder: "Street Address" }),
            React.createElement("input", { type: "text", name: "suburb", placeholder: "Suburb" }),
            React.createElement("input", { type: "text", name: "state", placeholder: "State" })
        ),
        React.createElement(
            "div",
            { className: "col-sm-12" },
            React.createElement(
                "label",
                null,
                "Message:"
            ),
            React.createElement("textarea", { name: "text", placeholder: "Message", rows: "4" })
        ),
        React.createElement(
            "div",
            { className: "col-sm-12" },
            React.createElement(
                "div",
                { className: "input-checkbox" },
                React.createElement("div", { className: "inner" }),
                React.createElement("input", { type: "checkbox", name: "agree" })
            ),
            React.createElement(
                "span",
                null,
                "I have read and agree to the ",
                React.createElement(
                    "a",
                    { href: "#" },
                    "terms and conditions"
                )
            )
        ),
        React.createElement(
            "div",
            { className: "col-sm-4" },
            React.createElement(
                "div",
                { className: "input-radio" },
                React.createElement(
                    "label",
                    null,
                    "Goji Berries"
                ),
                React.createElement("div", { className: "inner" }),
                React.createElement("input", { type: "radio", name: "radio", value: "radio1" })
            )
        ),
        React.createElement(
            "div",
            { className: "col-sm-4" },
            React.createElement(
                "div",
                { className: "input-radio" },
                React.createElement(
                    "label",
                    null,
                    "Fennel"
                ),
                React.createElement("div", { className: "inner" }),
                React.createElement("input", { type: "radio", name: "radio", value: "radio1" })
            )
        ),
        React.createElement(
            "div",
            { className: "col-sm-4" },
            React.createElement(
                "div",
                { className: "input-radio" },
                React.createElement(
                    "label",
                    null,
                    "Flaxseed"
                ),
                React.createElement("div", { className: "inner" }),
                React.createElement("input", { type: "radio", name: "radio", value: "radio1" })
            )
        ),
        React.createElement(
            "div",
            { className: "col-sm-12" },
            React.createElement(
                "div",
                { className: "input-select" },
                React.createElement(
                    "select",
                    null,
                    React.createElement(
                        "option",
                        { selected: "", value: "Default" },
                        "Select An Option"
                    ),
                    React.createElement(
                        "option",
                        { value: "Small" },
                        "Small"
                    ),
                    React.createElement(
                        "option",
                        { value: "Medium" },
                        "Medium"
                    ),
                    React.createElement(
                        "option",
                        { value: "Larger" },
                        "Large"
                    )
                )
            )
        ),
        React.createElement(
            "div",
            { className: "col-sm-12" },
            React.createElement(
                "button",
                { type: "submit", className: "btn btn--primary" },
                "Send Form"
            )
        )
    );
};