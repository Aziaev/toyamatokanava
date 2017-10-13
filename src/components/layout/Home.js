import React, {Component} from 'react'
import Nav from "./Nav";
import Sidebar from "./Sidebar";
import Map from "../custom/Map";
import superagent from 'superagent'
import {apiUrl, defaultCenter, defaultZoom} from "../../constants/index";
import Places from "./Places";

const style = {
    container: {
        padding: '0px 64px 32px 260px'
    },
    subheader: {
        marginBottom: 12
    },
    paragraph: {
        fontSize: 16,
        marginBottom: 6
    }
}

class Home extends Component {
    constructor(){
        super();
        this.state = {
            points: []
        }
    }

    componentDidMount() {
        console.log('Component did mount');

        superagent
            .get(apiUrl)
            .query(null)
            .set('Accept', 'text/json')
            .end((error, response) => {
                const points = response.body.response.venues;
                this.setState({
                    points: points
                })
            })


    }

    render() {
        const menu = [
            {name: 'Map', link: '#mapapp'},
            {name: 'Points', link: '#points'}
        ];

        return (
            <div className="stretched side-header">
                <Nav/>

                <div>
                    <Sidebar items={menu}/>

                    <section id="mapapp" style={{marginTop: 64}} className="bottommargin-lg">
                        <div className="container" style={style.container}>
                            <h1>Map App</h1>
                            <hr/>
                            <p style={style.paragraph}>
                                SEARCH FORM SHOULD BE ADDED!!!
                            </p>
                            <Map
                                center={ defaultCenter }
                                zoom={ defaultZoom }
                                containerElement={<div style={{height: `500px`}}/>}
                                mapElement={<div style={{height: 100 + '%'}}/>}
                                markers={this.state.points}
                            />
                        </div>
                    </section>


                    <section id="points" style={{marginTop: 64}} className="bottommargin-lg">
                        <div className="container" style={style.container}>
                            <Places points = {this.state.points} />
                        </div>
                    </section>

                </div>
            </div>
        )
    }
}

export default Home