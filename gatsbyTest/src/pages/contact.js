import React, { Component } from 'react';
import Link from 'gatsby-link';
import { Header, Message, Button, Input, Container, Form, Segment, Divider } from 'semantic-ui-react';

const styles = {
    container: {
        marginTop: 20,
        marginBottom: 40
    },
    message: {
        marginTop: 40,
        marginBottom: 40
    },
    formStyle: {
        marginBottom: 20
    }
};

export default class ContactPage extends Component {
    state = { success: false };
    handleChange = (e, { value }) => this.setState({ value });
    handleSubmit = () => this.setState({ success: true });

    render() {
        return (
            <Container style={styles.container}>
                <Header size="huge">Contact Me</Header>
                <Divider horizontal style={styles.message}>
                    Send Me A Message:
                </Divider>

                <Segment raised padded color="orange" style={styles.formStyle}>
                    <Form
                        action="https://send.pageclip.co/3oMr9mtH0kSj1HIHiuD8YAe4zxxOIyjG"
                        method="post"
                        className="pageclip-form"
                        onSubmit={this.handleSubmit}
                    >
                        <Form.Group widths="equal">
                            <Form.Input
                                size="large"
                                type="text"
                                name="name"
                                fluid
                                label="Name"
                                placeholder="What's your name?"
                            />
                            <Form.Input
                                size="large"
                                type="text"
                                name="email"
                                fluid
                                label="Email"
                                placeholder="email@gmail.com"
                            />
                        </Form.Group>
                        <Form.TextArea
                            size="large"
                            type="text"
                            name="message"
                            label="Message"
                            placeholder="What can I help you with?"
                        />
                        <Form.Button type="submit" content="Submit" />
                    </Form>
                </Segment>
            </Container>
        );
    }
}