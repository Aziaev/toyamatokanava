"use strict";

/* * * * * * * * * * * * * * * * * * * * * * * * * * *
	Here are a few sample constants for typical actions.
	You may want to extends these to the other data
	types for your project (e.g. BLOG_POST_CREATED, BLOG_POST_UPDATED, etc)
* * * * * * * * * * * * * * * * * * * * * * * * * * * *
*/

exports["default"] = {

    USERS_RECEIVED: "USERS_RECEIVED",
    USER_CREATED: "USER_CREATED",
    USER_LOGGED_IN: "USER_LOGGED_IN",
    CURRENT_USER_RECEIVED: "CURRENT_USER_RECEIVED"

};
var apiUrl = exports.apiUrl = "http://31.13.134.171:8080/yamakanava/getkml";
// export const apiUrl = 'https://api.foursquare.com/v2/venues/search?v=20161016&ll=55.752118%2C%2048.744554&query=coffee&intent=checkin&client_id=RMLIGNFC2NYJNV0W4XV1XCQC3KX3FOZXGJKQYOI0CELC21UY&client_secret=SPOM4AE2FDX3E44RZSQX35RFCKNRMFCT1SAH55NNFKA0UO3F';

// Innopolis
// export const kmlUrl = 'https://sites.google.com/site/azkmlfile/kml/link04.kml';
// export const kmlUrl = 'https://sites.google.com/site/azkmlfile/kml/cta2.kml';
// export const kmlUrl = 'https://sites.google.com/site/azkmlfile/kml/road.kml';
// export const kmlUrl = 'https://sites.google.com/site/azkmlfile/kml/singleline.kml';
// export const kmlUrl = 'http://93.170.123.58:8090/kml/cta.kml';
var kmlUrl = exports.kmlUrl = "http://31.13.134.171:8090/kml/";
var defaultCenter = exports.defaultCenter = { lat: 55.751586659952075, lng: 48.744511084655784 };
var defaultZoom = exports.defaultZoom = 15;

//Chicago example
// export const kmlUrl ='http://googlemaps.github.io/js-v2-samples/ggeoxml/cta.kml';
// export const defaultCenter = {"lat":41.83513710922671,"lng":-87.60401777734377};
// export const defaultZoom = 9;

// Settings
var appName = exports.appName = "toyamatokanava";
var mapOptions = exports.mapOptions = {
    streetViewControl: false,
    fullscreenControl: false,
    mapTypeControl: false };
Object.defineProperty(exports, "__esModule", {
    value: true
});