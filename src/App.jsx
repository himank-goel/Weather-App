import React, { Component } from 'react';
import './app.css';
import { Form, InputGroup, Glyphicon, Button} from 'react-bootstrap';
import PlacesAutocomplete from 'react-places-autocomplete'
import Weather from './Weather';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            place: '',
            json: null
        }
        this.onChange = (place) => this.setState({ place })
        this.showPosition = this.showPosition.bind(this);
    }

    search() {
        if(this.state.place !== 'Enter Location'){
            const BASE_URL = "https://api.openweathermap.org/data/2.5/forecast?q=";
            var string = this.state.place.split(",")[0];
            var replaced = string.split(' ').join('+');
            const FETCH_URL = BASE_URL + replaced + "&mode=json&APPID=6c9cca3b9c5136848c745e322db2fcca"; 
            fetch(FETCH_URL, {
                method: 'GET'
            })   
            .then(response => response.json())
            .then(json => {
                //console.log(json);
                this.setState({json})
            });
        }
        //console.log(this.state);
    }

    searchUsingLocation() {
        navigator.geolocation.getCurrentPosition(this.showPosition);   
    }

    showPosition(position) {
        //console.log("hello");
        var latitude = "lat=" + position.coords.latitude + "&lon=";
        var longitude = position.coords.longitude ;
        const BASE_URL = "https://api.openweathermap.org/data/2.5/forecast?" + latitude + longitude ;
        const FETCH_URL = BASE_URL + "&mode=json&APPID=6c9cca3b9c5136848c745e322db2fcca"; 
        //console.log(FETCH_URL);
        fetch(FETCH_URL, {
            method: 'GET'
        })   
        .then(response => response.json())
        .then(json => {
            //console.log(json);
            this.setState({json})
        });
    }               

    render() {
        const inputProps = {
            value: this.state.place,
            onChange: this.onChange,
            placeholder: 'Enter Location',
        }

        const myStyles = {
            root: { 
                fontSize: '17px' 
            },
            input: {
                borderTopLeftRadius: '5px',
                borderBottomLeftRadius: '5px',
                height: '34px',
                padding: '6px 12px',
                fontSize: '14px',
                lineHeight: '1.42857143',
                color: '#555',
                backgroundColor: '#fff',
                backgroundImage: 'none',
                border: '1px solid #ccc',
                borderRadius: '4px',
                WebkitBoxShadow: 'inset 0 1px 1px rgba(0,0,0,.075)',
                boxShadow: 'inset 0 1px 1px rgba(0,0,0,.075)',
                WebkitTransition: 'border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s',
                OTransition: 'border-color ease-in-out .15s,box-shadow ease-in-out .15s',
                transition: 'border-color ease-in-out .15s,box-shadow ease-in-out .15s'
            },
            autocompleteContainer: {
              zIndex: '5',
            },
        }

        const handleEnter = (place) => {
            console.log("hello");
            this.search();
        }
          
        return (
            <div className = "App">
                <div className = "App-title"> Weather App</div>
                <div className = "Input-form">
                    <Form horizontal>
                        <InputGroup className = "Input-field">
                            <PlacesAutocomplete 
                                placeholder = 'Enter Location'
                                styles={myStyles}
                                inputProps={inputProps} 
                                onEnterKeyDown={handleEnter}
                            />
                            <InputGroup.Addon 
                                className = "Search-Button"
                                onClick = {() => this.search()}>
                                <Glyphicon glyph = "search" />
                            </InputGroup.Addon>
                        </InputGroup>
                        <div>
                            <Button 
                                className = "Current-location-btn btn-primary"
                                onClick = {() => this.searchUsingLocation()}    
                            > 
                                Get weather at your current location
                            </Button>
                        </div>
                    </Form>
                </div>
                {   
                    this.state.json !== null                
                    ? <div> 
                        <Weather json = {this.state.json} />
                    </div>
                    : <div></div>
                }
                
            </div>
        )
    }
}

export default App;