import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";
import { Button, Checkbox, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';
/* you'll need this CSS somewhere
.fade-enter {
  opacity: 0;
  z-index: 1;
}
.fade-enter.fade-enter-active {
  opacity: 1;
  transition: opacity 250ms ease-in;
}
*/

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            full_name: '',
            technology: '',
            email: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { target: { name, value } } = event
        this.setState({ [name]: value })
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.full_name);
        alert('A name was submitted: ' + this.state.technology);
        event.preventDefault();
    }

    render() {
        return (

            <div class="container" style={{marginTop: "5em"}}>
                <div class="row">
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Field>
                            <label>First Name</label>
                            <input placeholder='Full Name' name='full_name' value={this.state.full_name} onChange={this.handleChange} />
                        </Form.Field>
                        <Form.Field>
                            <label>Email</label>
                            <input type='email' placeholder='Email' name='email' value={this.state.email} onChange={this.handleChange} />
                        </Form.Field>
                        <Form.Field>
                            <label>Technology</label>
                            <input placeholder='Last Name' name='technology' value={this.state.technology} onChange={this.handleChange} />
                        </Form.Field>
                        <Form.Field>
                            <Checkbox label='I agree to the Terms and Conditions' />
                        </Form.Field>

                        <Button type='submit'>Submit</Button>
                    </Form>
                </div>
            </div>
        );
    }
}
export default Register;
