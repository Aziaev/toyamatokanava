"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var React = _interopRequire(require("react"));

module.exports = function (props) {
    var className = props.className || "border--round";

    return React.createElement(
        "table",
        { className: className },
        React.createElement(
            "thead",
            null,
            React.createElement(
                "tr",
                null,
                React.createElement(
                    "th",
                    null,
                    "Value 1"
                ),
                React.createElement(
                    "th",
                    null,
                    "Value 2"
                ),
                React.createElement(
                    "th",
                    null,
                    "Value 3"
                ),
                React.createElement(
                    "th",
                    null,
                    "Value 4"
                )
            )
        ),
        React.createElement(
            "tbody",
            null,
            React.createElement(
                "tr",
                null,
                React.createElement(
                    "td",
                    null,
                    "1"
                ),
                React.createElement(
                    "td",
                    null,
                    "2"
                ),
                React.createElement(
                    "td",
                    null,
                    "3"
                ),
                React.createElement(
                    "td",
                    null,
                    "4"
                )
            ),
            React.createElement(
                "tr",
                null,
                React.createElement(
                    "td",
                    null,
                    "1"
                ),
                React.createElement(
                    "td",
                    null,
                    "2"
                ),
                React.createElement(
                    "td",
                    null,
                    "3"
                ),
                React.createElement(
                    "td",
                    null,
                    "4"
                )
            ),
            React.createElement(
                "tr",
                null,
                React.createElement(
                    "td",
                    null,
                    "1"
                ),
                React.createElement(
                    "td",
                    null,
                    "2"
                ),
                React.createElement(
                    "td",
                    null,
                    "3"
                ),
                React.createElement(
                    "td",
                    null,
                    "4"
                )
            )
        )
    );
};