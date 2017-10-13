"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var React = _interopRequire(require("react"));

var flag2 = require("../../assets/images/flag-2.png");

module.exports = function (props) {
    return React.createElement(
        "footer",
        { className: "text-center space--sm footer-5  " },
        React.createElement(
            "div",
            { className: "container" },
            React.createElement(
                "div",
                { className: "row" },
                React.createElement(
                    "div",
                    { className: "col-sm-12" },
                    React.createElement(
                        "div",
                        { className: "heading-block" },
                        React.createElement(
                            "ul",
                            { className: "list-inline list--hover" },
                            React.createElement(
                                "li",
                                null,
                                React.createElement(
                                    "a",
                                    { href: "#" },
                                    React.createElement(
                                        "span",
                                        null,
                                        "Our Company"
                                    )
                                )
                            ),
                            React.createElement(
                                "li",
                                null,
                                React.createElement(
                                    "a",
                                    { href: "#" },
                                    React.createElement(
                                        "span",
                                        null,
                                        "Locations"
                                    )
                                )
                            ),
                            React.createElement(
                                "li",
                                null,
                                React.createElement(
                                    "a",
                                    { href: "#" },
                                    React.createElement(
                                        "span",
                                        null,
                                        "Products"
                                    )
                                )
                            ),
                            React.createElement(
                                "li",
                                null,
                                React.createElement(
                                    "a",
                                    { href: "#" },
                                    React.createElement(
                                        "span",
                                        null,
                                        "Work With Us"
                                    )
                                )
                            )
                        )
                    ),
                    React.createElement(
                        "div",
                        null,
                        React.createElement(
                            "ul",
                            { className: "social-list list-inline list--hover" },
                            React.createElement(
                                "li",
                                null,
                                React.createElement(
                                    "a",
                                    { href: "#" },
                                    React.createElement("i", { className: "socicon socicon-google icon icon--xs" })
                                )
                            ),
                            React.createElement(
                                "li",
                                null,
                                React.createElement(
                                    "a",
                                    { href: "#" },
                                    React.createElement("i", { className: "socicon socicon-twitter icon icon--xs" })
                                )
                            ),
                            React.createElement(
                                "li",
                                null,
                                React.createElement(
                                    "a",
                                    { href: "#" },
                                    React.createElement("i", { className: "socicon socicon-facebook icon icon--xs" })
                                )
                            ),
                            React.createElement(
                                "li",
                                null,
                                React.createElement(
                                    "a",
                                    { href: "#" },
                                    React.createElement("i", { className: "socicon socicon-instagram icon icon--xs" })
                                )
                            )
                        )
                    ),
                    React.createElement(
                        "div",
                        null,
                        React.createElement(
                            "span",
                            { className: "type--fine-print" },
                            "Made in Melbourne"
                        ),
                        React.createElement("img", { alt: "Image", className: "flag", src: flag2 })
                    ),
                    React.createElement(
                        "div",
                        null,
                        React.createElement(
                            "span",
                            { className: "type--fine-print" },
                            "©",
                            React.createElement("span", { className: "update-year" }),
                            " Stack Inc."
                        ),
                        React.createElement(
                            "a",
                            { className: "type--fine-print", href: "#" },
                            "Privacy Policy"
                        ),
                        React.createElement(
                            "a",
                            { className: "type--fine-print", href: "#" },
                            "Legal"
                        )
                    )
                )
            )
        )
    );
};