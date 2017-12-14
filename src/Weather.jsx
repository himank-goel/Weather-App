import React, { Component } from 'react';
import './app.css';

class Weather extends Component {
    
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
        console.log(editedArray);
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
                            className = "weather"
                        >
                            {
                                (k === 0) ?  <p className = "weather-text"> Today </p> : <p></p>
                            }
                            {
                                (k === 1) ?  <p className = "weather-text"> Tomorrow </p> : <p></p>
                            }
                            {    
                                (k === 2) ?  <p className = "weather-text"> {currentDay.weatherEntry.dt_txt.split(" ")[0]} </p> : <p></p> 
                            }
                            {    
                                (k === 3) ?  <p className = "weather-text"> {currentDay.weatherEntry.dt_txt.split(" ")[0]} </p> : <p></p>     
                            }
                            {    
                                (k === 4) ?  <p className = "weather-text"> {currentDay.weatherEntry.dt_txt.split(" ")[0]} </p> : <p></p>
                            }
                            <img    
                                src = {weatherImg}
                                className = "weather-img"
                                alt = "Img"
                            />
                            <p className = "weather-text-bottom">
                                {currentDay.weatherEntry.main.temp_min}<br></br>
                                {currentDay.weatherEntry.main.temp_max}
                            </p>
                        </div>
                    )
                })}
            </div> 
        </div> 
        )
    }
}

export default Weather;