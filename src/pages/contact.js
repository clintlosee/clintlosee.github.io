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

function encode(data) {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
        .join('&');
}

export default class ContactPage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    handleChange = () => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleSubmit = (e) => {
        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: encode({ 'form-name': 'contact', ...this.state })
        })
            .then(() => alert('Success!'))
            .catch(() => alert(error));

        e.preventDefault();
    };

    render() {
        return (
            <div>
                <h1>Contact</h1>
                <form
                    name="contact"
                    method="post"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                    // onSubmit={this.handleSubmit}
                >
                    <p hidden>
                        <label>
                            Don’t fill this out: <input name="bot-field" />
                        </label>
                    </p>
                    <p>
                        <label>
                            Your name:<br />
                            <input type="text" name="name" onChange={this.handleChange} />
                        </label>
                    </p>
                    <p>
                        <label>
                            Your email:<br />
                            <input type="email" name="email" onChange={this.handleChange} />
                        </label>
                    </p>
                    <p>
                        <label>
                            Message:<br />
                            <textarea name="message" onChange={this.handleChange} />
                        </label>
                    </p>
                    <p>
                        <button type="submit">Send</button>
                    </p>
                </form>
            </div>

            // <Container style={styles.container}>
            //     <Divider horizontal style={styles.message}>
            //         <Header size="huge">Contact Me</Header>
            //         Send Me A Message
            //     </Divider>

            //     <Segment raised padded color="orange" style={styles.formStyle}>
            //         <Form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
            //             <input type="hidden" name="form-name" value="contact" />
            //             <Form.Group widths="equal">
            //                 <Form.Input
            //                     size="large"
            //                     type="text"
            //                     name="name"
            //                     fluid
            //                     label="Name"
            //                     placeholder="What's your name?"
            //                 />
            //                 <Form.Input
            //                     size="large"
            //                     type="text"
            //                     name="email"
            //                     fluid
            //                     label="Email"
            //                     placeholder="email@gmail.com"
            //                 />
            //             </Form.Group>
            //             <Form.TextArea
            //                 size="large"
            //                 type="text"
            //                 name="message"
            //                 label="Message"
            //                 placeholder="What can I help you with?"
            //             />
            //             <Form.Button type="submit" content="Submit Netlify" />
            //         </Form>
            //     </Segment>

            //     <Segment raised padded color="orange" style={styles.formStyle}>
            //         <Form
            //             action="https://send.pageclip.co/3oMr9mtH0kSj1HIHiuD8YAe4zxxOIyjG"
            //             method="post"
            //             className="pageclip-form"
            //             onSubmit={this.handleSubmit}
            //         >
            //             <Form.Group widths="equal">
            //                 <Form.Input
            //                     size="large"
            //                     type="text"
            //                     name="name"
            //                     fluid
            //                     label="Name"
            //                     placeholder="What's your name?"
            //                 />
            //                 <Form.Input
            //                     size="large"
            //                     type="text"
            //                     name="email"
            //                     fluid
            //                     label="Email"
            //                     placeholder="email@gmail.com"
            //                 />
            //             </Form.Group>
            //             <Form.TextArea
            //                 size="large"
            //                 type="text"
            //                 name="message"
            //                 label="Message"
            //                 placeholder="What can I help you with?"
            //             />
            //             <Form.Button type="submit" content="Submit" />
            //         </Form>
            //     </Segment>
            // </Container>
        );
    }
}
