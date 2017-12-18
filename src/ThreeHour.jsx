import React, { Component } from 'react';
import './app.css';

class ThreeHour extends Component {

    constructor(props) {
        super(props);
        this.state = {
            startIndex: 0,
            endIndex: 0
        }
    }

    componentDidMount() {
        const {info} = this.props;

        for(var i=0; i<4; i++) {
            if(info[i] === true) {
                break;
            }
        }
        switch (i) {
            case 0:
                this.setState({
                    startIndex: 0,
                    endIndex: info.editedArray[1].index-4
                })
                break;

            case 1:
                this.setState({
                    startIndex: info.editedArray[1].index-4,
                    endIndex: info.editedArray[2].index-4
                })
                break;

            case 2:
                this.setState({
                    startIndex: info.editedArray[2].index-4,
                    endIndex: info.editedArray[3].index-4
                })
                break;

            case 3:                
                this.setState({
                    startIndex: info.editedArray[3].index-4,
                    endIndex: info.editedArray[4].index-4
                })
                break;

            case 4:
                this.setState({
                    startIndex: info.editedArray[4].index-4,
                    endIndex: info.editedArray[4].index+4
                })
                break;
        
            default:
                break;
        }
    }

    render() {
        const {info} = this.props;
        var forecast = [];
        if(this.state.startIndex !== this.state.endIndex){
            for(var i=this.state.startIndex; i<this.state.endIndex; i++) {
                var entry = info.array[i];
                forecast.push(<div>{entry}</div>);
            }
            //console.log(forecast);
            return (
                <div>
                    <ul className="w3-ul w3-card-4" /*style={{width : 50 + '%'}}*/>
                        {forecast.map((currentEntry, k) => {
                            var temp = currentEntry.props.children.dt_txt.split(" ")[1].split(":");
                            const time = temp[0] + ":" + temp[1];
                            temp = Number(Math.round((((parseInt(currentEntry.props.children.main.temp, 10)-273.15)*1)+0)+'e2')+'e-2') + " °C"; 
                            return (
                                <li 
                                    key = {k} 
                                    className = "hourly-forecast"
                                >
                                    {time} {temp}
                                </li>
                            )
                        })}
                    </ul>
                </div>
            )
        }
        return (
            <div></div>
        )
    }
}

export default ThreeHour;