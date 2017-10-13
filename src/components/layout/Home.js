import React, {Component} from 'react'
import Nav from "./Nav";
import Sidebar from "./Sidebar";
import Map from "../custom/Map/Map";
import superagent from 'superagent'
import {apiUrl, appName, defaultCenter, defaultZoom, mapOptions} from "../../constants/index";

const style = {
    container: {
        padding: '0px 64px 0px 260px'
    },
    mapContainer: {
        padding: '0px 64px 0px 260px'
    },
    subheader: {
        marginBottom: 12
    },
    paragraph: {
        fontSize: 16,
        marginBottom: 10
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
            {name: 'Описание', link: '#about'},
            {name: 'Map', link: '#map'},
            {name: 'Data', link: '#data'}
        ];

        return (
            <div className="stretched side-header">
                <Nav/>

                <div>
                    <Sidebar items={menu}/>

                    <section style={{marginTop: 64, textAlign: 'center'}} className="bottommargin-lg">
                        <div className="container" style={style.container}>
                            <h1>Сервис {appName}</h1>
                            <hr />
                        </div>
                    </section>

                    <section id="about" style={{marginTop: 64}} className="bottommargin-lg">
                        <div className="container" style={style.container}>
                            <h2>Описание</h2>
                            <p style={style.paragraph}>
                                Сервис собирает информацию о состоянии дорог по координатам GPS/Глонасс с использованием показаний встроенного акселерометра мобильного устройства установленного в автомобиле.
                            </p>
                            <p style={style.paragraph}>
                                Собранная информация анализируется сервером и отображается на карте. Полученные данные позволят в автоматическом режиме анализировать состояние дорог.
                            </p>
                            <p style={style.paragraph}>
                                Используемые средства: Мобильное устройство с акселерометром на Android, Сервер Java, React JS.
                            </p>
                        </div>
                    </section>

                    <section id="map" style={{marginTop: 64}} className="bottommargin-lg">
                        <div className="container" style={style.container}>
                            <h2>Карта</h2>
                            <Map
                                center={ defaultCenter }
                                zoom={ defaultZoom }
                                containerElement={<div style={{height: `500px`}}/>}
                                mapElement={<div style={{height: 100 + '%'}}/>}
                                options ={mapOptions}
                            />
                        </div>
                    </section>


                    <section id="data" style={{marginTop: 64}} className="bottommargin-lg">
                        <div className="container" style={style.container}>
                            <h2>Статистика</h2>
                            <p>Здесь отображается статистика по собранной информации</p>
                        </div>
                    </section>

                </div>
            </div>
        )
    }
}

export default Home