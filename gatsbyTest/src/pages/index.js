import React from 'react'
import Link from 'gatsby-link';
import {
    Button,
    Card,
    Container,
    Divider,
    Grid,
    Header,
    Icon,
    Image,
    List,
    Menu,
    Segment,
    Visibility
} from 'semantic-ui-react';

const style = {
    h1: {
        marginTop: '3em'
    },
    h2: {
        margin: '4em 0em 2em'
    },
    h3: {
        marginTop: '2em',
        padding: '2em 0em'
    },
    last: {
        marginBottom: '300px'
    }
};

const IndexPage = () => (
    <div>
        <Segment
            inverted
            textAlign="center"
            style={{ minHeight: 610, padding: '1em 0em' }}
            vertical
        >
            <Image fluid src='/static/assets/images/back.jpg' width="100%" height="100%" style={{ marginBottom: 0, position: 'absolute', top: 0, left: 0, zIndex: 1 }} />
            <Container text style={{ position: 'absolute', zIndex: 9999, left: 0, right: 0 }}>
                <Header
                    as="h6"
                    content="Hello, my name is"
                    inverted
                    style={{
                        fontSize: '1.5em',
                        fontWeight: 'normal',
                        marginTop: '3.5em',
                        marginBottom: '2em'
                    }}
                />
                <Header
                    as="h1"
                    content="CLINT LOSEE"
                    inverted
                    style={{
                        fontSize: '4em',
                        fontWeight: 'bold',
                        marginBottom: '1em'
                    }}
                />
                <Header
                    as="h2"
                    content="Web Developer &amp; Digital Media Professional"
                    inverted
                    style={{
                        fontSize: '1.7em',
                        fontWeight: 'normal',
                        marginBottom: '1.5em'
                    }}
                />
                <Button inverted size="huge">
                    <Icon name="download" /> Resume
                </Button>
            </Container>
        </Segment>

        <Segment style={{ padding: '8em 0em' }} vertical>
            <Grid container stackable verticalAlign="middle">
                <Grid.Row>
                    <Grid.Column width={8}>
                        <Header as="h3" style={{ fontSize: '2em' }}>
                            We Help Companies and Companions
                        </Header>
                        <p style={{ fontSize: '1.33em' }}>
                            We can give your company superpowers to do
                            things that they never thought possible. Let
                            us delight your customers and empower your
                            needs... through pure data analytics.
                        </p>
                        <Header as="h3" style={{ fontSize: '2em' }}>
                            We Make Bananas That Can Dance
                        </Header>
                        <p style={{ fontSize: '1.33em' }}>
                            Yes that is right, you thought it was the
                            stuff of dreams, but even bananas can be
                            bioengineered.
                        </p>
                    </Grid.Column>
                    <Grid.Column floated="right" width={6}>
                        <Image
                            bordered
                            size="large"
                            src="/assets/images/wireframe/white-image.png"
                        />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column textAlign="center">
                        <Button size="huge">Check Them Out</Button>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>


        <Segment>
            <Header
                as="h3"
                content="Portfolio Stackable Grid"
                style={style.h3}
                textAlign="center"
            />
            <Grid columns={3} stackable>
                <Grid.Column>
                    <Segment>
                        <Link to="page-2">
                            <Card fluid>
                                <Image src='/static/assets/images/portfolio/react-calculator-folio.jpg' style={{ marginBottom: 0 }} />
                                <Card.Content>
                                    <Card.Header>
                                        React Calculator
                                    </Card.Header>
                                    <Card.Meta>
                                        Technologies
                                    </Card.Meta>
                                    <Card.Description>
                                        This is a calculator built with React
                                    </Card.Description>
                                </Card.Content>
                            </Card>
                        </Link>
                    </Segment>
                </Grid.Column>
                <Grid.Column>
                    <Segment>
                        <Link to="/">
                            <Card fluid>
                                <Image src='/static/assets/images/portfolio/react-weather-folio.png' style={{ marginBottom: 0 }} />
                                <Card.Content>
                                    <Card.Header>
                                        React Weather App
                                    </Card.Header>
                                    <Card.Meta>
                                        Technologies
                                    </Card.Meta>
                                    <Card.Description>
                                        This is a weather app built with React
                                    </Card.Description>
                                </Card.Content>
                            </Card>
                        </Link>
                    </Segment>
                </Grid.Column>
                <Grid.Column>
                    <Segment>
                        <Link to="/">
                            <Card fluid>
                                <Image src='/static/assets/images/portfolio/digitalflash-folio.jpg' style={{ marginBottom: 0 }} />
                                <Card.Content>
                                    <Card.Header>
                                        Digital Flash Cards
                                    </Card.Header>
                                    <Card.Meta>
                                        Technologies
                                    </Card.Meta>
                                    <Card.Description>
                                        This is a digital flash card app built with Angular
                                    </Card.Description>
                                </Card.Content>
                            </Card>
                        </Link>
                    </Segment>
                </Grid.Column>
                <Grid.Column>
                    <Segment>

                    </Segment>
                </Grid.Column>
                <Grid.Column>
                    <Segment>Content</Segment>
                </Grid.Column>
                <Grid.Column>
                    <Segment>Content</Segment>
                </Grid.Column>
                <Grid.Column>
                    <Segment>Content</Segment>
                </Grid.Column>
                <Grid.Column>
                    <Segment>Content</Segment>
                </Grid.Column>
                <Grid.Column>
                    <Segment>Content</Segment>
                </Grid.Column>
                <Grid.Column>
                    <Segment>Content</Segment>
                </Grid.Column>
                <Grid.Column>
                    <Segment>Content</Segment>
                </Grid.Column>
                <Grid.Column>
                    <Segment>Content</Segment>
                </Grid.Column>
            </Grid>
        </Segment>



    </div>
)

export default IndexPage
