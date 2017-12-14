import React, { Component } from 'react';
import './app.css';
import { Form, FormControl, InputGroup, Glyphicon, Button} from 'react-bootstrap';

class App extends Component {
    render() {
        return (
            <div className = "App">
                <div className = "App-title"> Weather App</div>
                <div className = "Input-form">
                    <Form horizontal>
                        <InputGroup className = "Input-field">
                            <FormControl
                                placeholder = 'Enter Location' 
                            />
                            <InputGroup.Addon>
                                <Glyphicon glyph = "search" />
                            </InputGroup.Addon>
                        </InputGroup>
                        <div>
                            <Button className = "Current-location-btn btn-primary"> 
                                Get weather at your current location
                            </Button>
                        </div>
                    </Form>
                </div>
            </div>
        )
    }
}

export default App;