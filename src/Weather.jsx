import React, { Component } from 'react';
import { Glyphicon } from 'react-bootstrap'; 
import ThreeHour from './ThreeHour';

class Weather extends Component {
    constructor(props) {
        super(props);
        this.state = {
            array: [],
            editedArray: [],
            0: false,
            1: false,
            2: false,
            3: false,
            4: false,
        }
    }

    componentDidMount() {
        const { json } = this.props;
        const editedArray = this.getFiveDayArray(json.list);
        if(this.state.array.length === 0){
                this.setState({
                    array: json.list,
                    editedArray
            })
        }
    }

    threeHourDisplay(k) {
       // console.log(this.state[k]);
        if(this.state[k] === false) {
            this.setState({
                0: false,
                1: false,
                2: false,
                3: false,
                4: false,
            });
            this.setState({
                [k]: true 
            });
        }
        else {
            this.setState({
                [k]: false
            })
        }
       // console.log(this.state);
    }
    
    getFiveDayArray(list = []) {
        const editedArray = [];
        if(list[0].dt_txt.split(" ")[1] === "00:00:00") {
            editedArray.push({
                weatherEntry: list[0],
                index: 0 
            });
            for(var i=0; i<4; i++) {
                editedArray.push({
                    weatherEntry: list[(i*8)+4+8],  
                    index: (i*8)+4+8  
                });
            }
            
        }
        else if(list[0].dt_txt.split(" ")[1] === "03:00:00") {
            editedArray.push({
                weatherEntry: list[0],                 
                index: 0              
            });
            for( i=0; i<4; i++) {
                editedArray.push({
                    weatherEntry: list[(i*8)+4+7],  
                    index: (i*8)+4+7
                });
            }
        }
        else if(list[0].dt_txt.split(" ")[1] === "06:00:00") {
            editedArray.push({
                weatherEntry: list[0],                 
                index: 0              
            });
            for( i=0; i<4; i++) {
                editedArray.push({
                    weatherEntry: list[(i*8)+4+6],  
                    index: (i*8)+4+6
                });
            }
        }
        else if(list[0].dt_txt.split(" ")[1] === "09:00:00") {
            editedArray.push({
                weatherEntry: list[0],                
                index: 0              
            });
            for( i=0; i<4; i++) {
                editedArray.push({
                    weatherEntry: list[(i*8)+4+5],  
                    index: (i*8)+4+5  
                });
            }
        }
        else if(list[0].dt_txt.split(" ")[1] === "12:00:00") {
            editedArray.push({
                weatherEntry: list[0],                 
                index: 0              
            });
            for( i=0; i<4; i++) {
                editedArray.push({
                    weatherEntry: list[(i*8)+4+4],                 
                    index: (i*8)+4+4              
                });
            }
        }
        else if(list[0].dt_txt.split(" ")[1] === "15:00:00") {
            editedArray.push({
                weatherEntry: list[0],                 
                index: 0             
            });
            for( i=0; i<4; i++) {
                editedArray.push({
                    weatherEntry: list[(i*8)+4+3],                 
                    index: (i*8)+4+3              
                });
            }
        }
        else if(list[0].dt_txt.split(" ")[1] === "18:00:00") {
            editedArray.push({
                weatherEntry: list[0],                 
                index: 0              
            });
            for( i=0; i<4; i++) {
                editedArray.push({
                    weatherEntry: list[(i*8)+4+2],                 
                    index: (i*8)+4+2              
                });
            }
        }
        else {
            editedArray.push({
                weatherEntry: list[0],                 
                index: 0              
            });
            for( i=0; i<4; i++) {
                editedArray.push({
                    weatherEntry: list[(i*8)+4+1],                 
                    index: (i*8)+4+1              
                });
            }
        }
        return editedArray;
    }
    
    render() {
        const { json } = this.props;
        const editedArray = this.getFiveDayArray(json.list);
        //console.log(editedArray);
        //console.log(json);
        return(
            <div>
                <div>{json.city.name}</div>
                <div>
                {editedArray.map((currentDay, k) => {
                    const weatherImg = "http://openweathermap.org/img/w/" + currentDay.weatherEntry.weather[0].icon + ".png";
                    //console.log(trackImg);
                    return (
                        <div 
                            key = {k} 
                            className = "weather w3-card-4"
                            onClick = { () => this.threeHourDisplay(k)}
                        >
                            <header className="w3-container w3-blue heading">
                                {
                                    (k === 0) ?  <p className = "weather-text"> Today </p> :                               
                                    (k === 1) ?  <p className = "weather-text"> Tomorrow </p> :
                                    (k === 2) ?  <p className = "weather-text"> {currentDay.weatherEntry.dt_txt.split(" ")[0]} </p> :                             
                                    (k === 3) ?  <p className = "weather-text"> {currentDay.weatherEntry.dt_txt.split(" ")[0]} </p> : 
                                    (k === 4) ?  <p className = "weather-text"> {currentDay.weatherEntry.dt_txt.split(" ")[0]} </p> : <p></p>
                                }
                            </header>
                            <img    
                                src = {weatherImg}
                                className="w3-container weather-img"    
                                alt = "Img"
                            />
                            <footer className="w3-container">
                                <div  /*className = "weather-text-bottom"*/>
                                    { Number(Math.round((((parseInt(currentDay.weatherEntry.main.temp_min, 10)-273.15)*1)+0)+'e2')+'e-2') + " °C" }
                                    <br></br>
                                    { Number(Math.round((((parseInt(currentDay.weatherEntry.main.temp_max, 10)-273.15)*1)+0)+'e2')+'e-2') + " °C" }
                                    {   
                                    this.state[k] === true                
                                    ? <div> 
                                        <ThreeHour
                                            info = { this.state }
                                        />
                                    </div>
                                    : <div>
                                        <Glyphicon glyph = "chevron-down" />
                                    </div>
                                }
                                </div>
                            </footer>
                        </div>
                    )
                })}
            </div> 
        </div> 
        )
    }
}

export default Weather;