"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var React = _interopRequire(require("react"));

// images:
var logo = require("../../assets/images/logo-light.png");

module.exports = function (props) {
	return React.createElement(
		"div",
		{ className: "nav-container nav-container--sidebar" },
		React.createElement(
			"div",
			{ className: "nav-sidebar-column bg--dark" },
			React.createElement(
				"div",
				{ className: "text-center text-block" },
				React.createElement(
					"a",
					{ href: "index.html" },
					React.createElement("img", { alt: "logo", className: "logo", src: logo })
				),
				React.createElement(
					"p",
					null,
					"Build Something ",
					React.createElement(
						"em",
						null,
						"Brilliant."
					)
				)
			),
			React.createElement("hr", null),
			React.createElement(
				"div",
				{ className: "text-block" },
				React.createElement(
					"ul",
					{ className: "menu-vertical" },
					React.createElement(
						"li",
						null,
						React.createElement(
							"a",
							{ onClick: props.selectElement.bind(undefined, null), href: "/" },
							React.createElement(
								"span",
								null,
								"Home"
							)
						)
					),
					React.createElement(
						"li",
						{ className: "dropdown" },
						React.createElement(
							"span",
							{ className: "dropdown__trigger" },
							"Elements"
						),
						React.createElement(
							"div",
							{ className: "dropdown__container" },
							React.createElement(
								"div",
								{ className: "dropdown__content" },
								React.createElement(
									"ul",
									{ className: "menu-vertical" },
									["Table", "Form", "Button", "Boxes", "Dropdown", "Feature", "Pricing"].map(function (element, i) {
										return React.createElement(
											"li",
											{ key: element },
											React.createElement(
												"a",
												{ onClick: props.selectElement.bind(undefined, element.toLowerCase()), href: "#" },
												React.createElement(
													"span",
													null,
													element
												)
											)
										);
									})
								)
							)
						)
					)
				)
			),
			React.createElement("hr", null),
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
				),
				React.createElement(
					"div",
					null,
					React.createElement(
						"span",
						{ className: "type--fine-print type--fade" },
						"© Copyright",
						React.createElement("span", { className: "update-year" }),
						" Medium Rare"
					)
				)
			)
		),
		React.createElement(
			"div",
			{ className: "nav-sidebar-column-toggle visible-xs visible-sm", "data-toggle-className": ".nav-sidebar-column;active" },
			React.createElement("i", { className: "stack-menu" })
		)
	);
};