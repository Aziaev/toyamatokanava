"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
var ReactDOM = _interopRequire(require("react-dom"));

var Sidebar = _interopRequire(require("./Sidebar"));

var Form = _interopRequire(require("./Form"));

var Feature = _interopRequire(require("./Feature"));

var Footer = _interopRequire(require("./Footer"));

var Table = _interopRequire(require("./Table"));

var Box = _interopRequire(require("./Box"));

var Dropdown = _interopRequire(require("./Dropdown"));

var Pricing = _interopRequire(require("./Pricing"));

// images:
var promo1 = require("../../assets/images/promo-1.jpg");
var blog1 = require("../../assets/images/blog-1.jpg");
var blog2 = require("../../assets/images/blog-2.jpg");

var Elements = (function (Component) {
    function Elements() {
        _classCallCheck(this, Elements);

        _get(Object.getPrototypeOf(Elements.prototype), "constructor", this).call(this);
        this.state = {
            selected: null
        };
    }

    _inherits(Elements, Component);

    _prototypeProperties(Elements, null, {
        selectElement: {
            value: function selectElement(element, event) {
                if (event) event.preventDefault();

                // console.log('selectElement: '+element)
                this.setState({
                    selected: element
                });
            },
            writable: true,
            configurable: true
        },
        render: {
            value: function render() {
                var content = null;
                if (this.state.selected == null) {
                    content = React.createElement(
                        "div",
                        { className: "boxed bg--secondary boxed--lg boxed--border" },
                        React.createElement(
                            "h4",
                            null,
                            "Components Guide"
                        ),
                        React.createElement(
                            "p",
                            null,
                            "To explore the components compatible with this theme, click on the 'Elements' option on the left menu and select a component."
                        )
                    );
                }

                if (this.state.selected == "table") {
                    content = React.createElement(
                        "div",
                        { className: "boxed boxed--lg" },
                        React.createElement(
                            "h4",
                            null,
                            "Tables"
                        ),
                        React.createElement(Table, { className: "border--round" }),
                        React.createElement(Table, { className: "border--round table--alternate-column" }),
                        React.createElement(Table, { className: "border--round table--alternate-row" })
                    );
                }

                if (this.state.selected == "dropdown") {
                    content = React.createElement(
                        "div",
                        { className: "boxed boxed--lg", style: { height: 500 } },
                        React.createElement(
                            "h4",
                            null,
                            "Dropdowns"
                        ),
                        React.createElement(Dropdown, { label: "Dropdown Click" }),
                        React.createElement(Dropdown, { label: "Dropdown Hover", className: "dropdown dropdown--hover" })
                    );
                }

                if (this.state.selected == "form") {
                    content = React.createElement(
                        "div",
                        { className: "boxed boxed--lg" },
                        React.createElement(
                            "h4",
                            null,
                            "Forms"
                        ),
                        React.createElement(Form, null)
                    );
                }

                if (this.state.selected == "boxes") {
                    content = React.createElement(
                        "div",
                        { className: "boxed boxed--lg" },
                        React.createElement(
                            "h4",
                            null,
                            "Boxes"
                        ),
                        React.createElement(Box, null),
                        React.createElement(Box, { className: "boxed boxed--border bg--secondary boxed--lg box-shadow" })
                    );
                }

                if (this.state.selected == "pricing") {
                    content = React.createElement(
                        "div",
                        { className: "boxed boxed--lg" },
                        React.createElement(
                            "h4",
                            null,
                            "Pricing"
                        ),
                        React.createElement(Pricing, null)
                    );
                }


                if (this.state.selected == "feature") {
                    content = React.createElement(
                        "div",
                        { className: "boxed boxed--lg" },
                        React.createElement(Feature, { image: blog1, title: "Feature", text: "This is a feature" })
                    );
                }

                if (this.state.selected == "button") {
                    content = React.createElement(
                        "div",
                        { className: "boxed boxed--lg" },
                        React.createElement(
                            "h4",
                            null,
                            "Buttons"
                        ),
                        React.createElement(
                            "div",
                            { className: "col-md-4" },
                            React.createElement(
                                "a",
                                { className: "btn btn--sm", href: "#" },
                                React.createElement(
                                    "span",
                                    { className: "btn__text" },
                                    ".btn--sm"
                                )
                            ),
                            React.createElement("br", null),
                            React.createElement("br", null),
                            React.createElement(
                                "a",
                                { className: "btn", href: "#" },
                                React.createElement(
                                    "span",
                                    { className: "btn__text" },
                                    ".btn"
                                )
                            ),
                            React.createElement("br", null),
                            React.createElement("br", null),
                            React.createElement(
                                "a",
                                { className: "btn btn--lg", href: "#" },
                                React.createElement(
                                    "span",
                                    { className: "btn__text" },
                                    ".btn--lg"
                                )
                            ),
                            React.createElement("br", null),
                            React.createElement("br", null),
                            React.createElement(
                                "a",
                                { className: "btn btn--primary", href: "#" },
                                React.createElement(
                                    "span",
                                    { className: "btn__text" },
                                    ".btn--primary"
                                )
                            ),
                            React.createElement("br", null),
                            React.createElement("br", null),
                            React.createElement(
                                "a",
                                { className: "btn btn--primary-1", href: "#" },
                                React.createElement(
                                    "span",
                                    { className: "btn__text" },
                                    ".btn--primary-1"
                                )
                            ),
                            React.createElement("br", null),
                            React.createElement("br", null),
                            React.createElement(
                                "a",
                                { className: "btn btn--primary-2", href: "#" },
                                React.createElement(
                                    "span",
                                    { className: "btn__text" },
                                    ".btn--primary-2"
                                )
                            ),
                            React.createElement("br", null),
                            React.createElement("br", null),
                            React.createElement(
                                "a",
                                { className: "btn btn--primary", href: "#", "data-tooltip": "I'm the tooltip for the button" },
                                React.createElement(
                                    "span",
                                    { className: "btn__text" },
                                    "With Tooltip"
                                )
                            )
                        ),
                        React.createElement(
                            "div",
                            { className: "col-md-4" },
                            React.createElement(
                                "a",
                                { className: "btn btn--primary btn--icon", href: "#" },
                                React.createElement(
                                    "span",
                                    { className: "btn__text" },
                                    React.createElement("i", { className: "icon-Add-File" }),
                                    " New document"
                                )
                            ),
                            React.createElement("br", null),
                            React.createElement("br", null),
                            React.createElement(
                                "a",
                                { className: "btn btn--icon btn--primary", href: "#" },
                                React.createElement(
                                    "span",
                                    { className: "btn__text" },
                                    React.createElement("i", { className: "icon-Checkout-Bag" }),
                                    " Add To Bag"
                                )
                            ),
                            React.createElement("br", null),
                            React.createElement("br", null),
                            React.createElement(
                                "a",
                                { className: "btn btn--icon bg--facebook", href: "#" },
                                React.createElement(
                                    "span",
                                    { className: "btn__text" },
                                    React.createElement("i", { className: "socicon socicon-facebook" }),
                                    "Join with Facebook"
                                )
                            ),
                            React.createElement("br", null),
                            React.createElement("br", null),
                            React.createElement(
                                "a",
                                { className: "btn btn--icon bg--twitter", href: "#" },
                                React.createElement(
                                    "span",
                                    { className: "btn__text" },
                                    React.createElement("i", { className: "socicon socicon-twitter" }),
                                    "Join with Twitter"
                                )
                            ),
                            React.createElement("br", null),
                            React.createElement("br", null),
                            React.createElement(
                                "a",
                                { className: "btn btn--icon bg--googleplus", href: "#" },
                                React.createElement(
                                    "span",
                                    { className: "btn__text" },
                                    React.createElement("i", { className: "socicon socicon-google" }),
                                    "Join with Google"
                                )
                            ),
                            React.createElement("br", null),
                            React.createElement("br", null),
                            React.createElement(
                                "a",
                                { className: "btn btn--icon bg--pinterest", href: "#" },
                                React.createElement(
                                    "span",
                                    { className: "btn__text" },
                                    React.createElement("i", { className: "socicon socicon-pinterest" }),
                                    "Join with Pinterest"
                                )
                            )
                        )
                    );
                }

                return React.createElement(
                    "div",
                    null,
                    React.createElement(Sidebar, { selectElement: this.selectElement.bind(this) }),
                    React.createElement(
                        "div",
                        { className: "main-container" },
                        React.createElement(
                            "section",
                            { className: "imagebg image--light cover cover-blocks bg--secondary" },
                            React.createElement(
                                "div",
                                { className: "background-image-holder hidden-xs" },
                                React.createElement("img", { alt: "background", src: promo1 })
                            ),
                            React.createElement(
                                "div",
                                { className: "container" },
                                React.createElement(
                                    "div",
                                    { className: "row" },
                                    React.createElement(
                                        "div",
                                        { className: "col-sm-6 col-md-5 col-md-offset-1" },
                                        React.createElement(
                                            "div",
                                            null,
                                            React.createElement(
                                                "h1",
                                                null,
                                                "Welcome to Turbo"
                                            ),
                                            React.createElement(
                                                "p",
                                                { className: "lead" },
                                                "Stack includes support for a sidebar column navigation the left, or right of the page"
                                            ),
                                            React.createElement("hr", { className: "short" })
                                        )
                                    )
                                )
                            )
                        ),
                        React.createElement(
                            "section",
                            { id: "elements" },
                            React.createElement(
                                "div",
                                { className: "container" },
                                React.createElement(
                                    "div",
                                    { className: "row" },
                                    React.createElement(
                                        "div",
                                        { className: "col-sm-12 col-md-8 col-md-offset-2" },
                                        content
                                    )
                                )
                            )
                        ),
                        React.createElement(Footer, null)
                    )
                );
            },
            writable: true,
            configurable: true
        }
    });

    return Elements;
})(Component);

module.exports = Elements;