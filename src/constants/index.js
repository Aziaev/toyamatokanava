/* * * * * * * * * * * * * * * * * * * * * * * * * * *
	Here are a few sample constants for typical actions.
	You may want to extends these to the other data
	types for your project (e.g. BLOG_POST_CREATED, BLOG_POST_UPDATED, etc)
* * * * * * * * * * * * * * * * * * * * * * * * * * * *
*/

export default {

    USERS_RECEIVED: 'USERS_RECEIVED',
    USER_CREATED: 'USER_CREATED',
    USER_LOGGED_IN: 'USER_LOGGED_IN',
    CURRENT_USER_RECEIVED: 'CURRENT_USER_RECEIVED'

}

export const apiUrl = 'https://api.foursquare.com/v2/venues/search?v=20161016&ll=55.752118%2C%2048.744554&query=coffee&intent=checkin&client_id=RMLIGNFC2NYJNV0W4XV1XCQC3KX3FOZXGJKQYOI0CELC21UY&client_secret=SPOM4AE2FDX3E44RZSQX35RFCKNRMFCT1SAH55NNFKA0UO3F';

// Innopolis
// export const kmlUrl = 'http://localhost:8080/kml/cta.kml';
export const kmlUrl = 'https://sites.google.com/site/azkmlfile/kml/cta.kml';
export const defaultCenter = {"lat":55.751586659952075,"lng":48.744511084655784};
export const defaultZoom = 14;

//Chicago example
// export const kmlUrl ='http://googlemaps.github.io/js-v2-samples/ggeoxml/cta.kml';
// export const defaultCenter = {"lat":41.83513710922671,"lng":-87.60401777734377};
// export const defaultZoom = 9;
