import React, { Component } from 'react';
import Link from 'gatsby-link';
import { Message, Button, Input, Container, Form } from 'semantic-ui-react';

export default class ContactPage extends Component {
    state = { success: false };
    handleChange = (e, { value }) => this.setState({ value });
    handleSubmit = () => this.setState({ success: true });

    render() {
        return (
            <Container >
                <h1>Contact Me</h1>
                <p>Send me a message:</p>

                <Form
                    action="https://send.pageclip.co/3oMr9mtH0kSj1HIHiuD8YAe4zxxOIyjG"
                    method="post"
                    className="pageclip-form"
                    onSubmit={this.handleSubmit}
                >
                    <Form.Group widths='equal'>
                        <Form.Input size='large' type='text' name='name' fluid label='Name' placeholder="What's your name?" />
                        <Form.Input size='large' type='text' name='email' fluid label='Email' placeholder='email@gmail.com' />
                    </Form.Group>
                    <Form.TextArea size='large' type='text' name='message' label='About' placeholder='Tell us more about you...' />
                    <Form.Button type='submit' content='Submit' />
                </Form>
            </Container>
        )
    }
}
