import React, { Component } from 'react';
import './app.css';
import { Form, FormControl, Button} from 'react-bootstrap';

class App extends Component {
    render() {
        return (
            <div className = "App">
                <div className = "App-title"> Weather App</div>
                <Form horizontal>
                    <FormControl
                        placeholder = 'Enter Location' 
                    />
                    <Button>
                        Submit
                    </Button>
                    <Button>
                        Get weather at your current location
                    </Button>
                </Form>
            </div>
        )
    }
}

export default App;