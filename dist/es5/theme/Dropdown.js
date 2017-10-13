"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var React = _interopRequire(require("react"));

module.exports = function (props) {
    var className = props.className || "dropdown";
    var text = props.label || "Dropdown Menu";

    return React.createElement(
        "div",
        { className: className },
        React.createElement(
            "span",
            { className: "dropdown__trigger" },
            text,
            React.createElement("i", { className: "stack-down-open" })
        ),
        React.createElement(
            "div",
            { className: "dropdown__container", style: { left: -600 } },
            React.createElement(
                "div",
                { className: "container" },
                React.createElement(
                    "div",
                    { className: "row" },
                    React.createElement(
                        "div",
                        { className: "col-sm-3 col-md-2 dropdown__content", style: { left: 600 } },
                        React.createElement(
                            "h5",
                            null,
                            "Select an option"
                        ),
                        React.createElement(
                            "ul",
                            { className: "menu-vertical" },
                            React.createElement(
                                "li",
                                null,
                                React.createElement(
                                    "a",
                                    { href: "#" },
                                    "Create"
                                )
                            ),
                            React.createElement(
                                "li",
                                null,
                                React.createElement(
                                    "a",
                                    { href: "#" },
                                    "Manage"
                                )
                            ),
                            React.createElement(
                                "li",
                                null,
                                React.createElement(
                                    "a",
                                    { href: "#" },
                                    "Share"
                                )
                            ),
                            React.createElement(
                                "li",
                                null,
                                React.createElement(
                                    "a",
                                    { href: "#" },
                                    "Logout"
                                )
                            )
                        )
                    )
                )
            )
        )
    );
};