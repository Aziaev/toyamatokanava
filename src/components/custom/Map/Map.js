import React, {Component} from 'react'
import {withGoogleMap, GoogleMap, Marker, KmlLayer} from 'react-google-maps'
import {defaultCenter, kmlUrl} from "../../../constants/index";

class Map extends Component {

    constructor (){
        super();
        this.state = {
            map: null
        }
    }

    mapMoved() {
        console.log('mapMoved: ' + JSON.stringify(this.state.map.getCenter()))
    }

    mapLoaded(map) {
        if (this.state.map != null)
            return;

        this.setState({
            map: map
        });

        console.log('mapLoaded: ' + JSON.stringify(map.getCenter() ))
    }

    zoomChanged() {
        console.log('zoom changed: ' + JSON.stringify(this.state.map.getZoom()))
        console.log('window.innerWidth' + JSON.stringify(window.innerWidth))
        console.log('window.innerHeight' + JSON.stringify(window.innerHeight))
    }

    render() {
        const fileName = this.props.fileName;
        console.log('kml file url :', { kmlUrl });
        console.log('kml file name :', fileName );


        return (
            <div>
                <GoogleMap
                    ref={this.mapLoaded.bind(this)}
                    onDragEnd={this.mapMoved.bind(this)}
                    onZoomChanged={this.zoomChanged.bind(this)}
                    defaultZoom={this.props.zoom}
                    defaultCenter={this.props.center}
                    defaultOptions = {this.props.options}
                >
                    <KmlLayer
                        url={ kmlUrl + this.props.fileName }
                        options={{ preserveViewport: true }}
                    />
                </GoogleMap>
            </div>
        )
    }
}

export default withGoogleMap(Map)

