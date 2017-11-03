import React, { Component } from 'react';
import Link from 'gatsby-link';
import {
    Button,
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

export default class FixedMenu extends Component {
    state = { activeItem: 'home', visible: true }
    handleItemClick = (e, { name }) => this.setState({ activeItem: name });
    hideFixedMenu = () => this.setState({ visible: false });
    showFixedMenu = () => this.setState({ visible: true });

    render() {
        const { activeItem, visible } = this.state;

        return (
            <div>
            {visible ?
                <Menu stackable sticky pointing secondary>
                    <Container>
                        <Menu.Item name="home" onClick={this.handleItemClick}>
                            <img src="/logo.png" />
                            <Link to="/">Clint Losee Digital Portfolio</Link>
                        </Menu.Item>
                        <Menu.Menu position="right">
                            <Menu.Item
                                name="home"
                                active={activeItem === 'home'}
                                onClick={this.handleItemClick}
                            >
                                <Link className="home" to="/">
                                    Home
                                </Link>
                            </Menu.Item>
                            <Menu.Item
                                name="about"
                                active={activeItem === 'about'}
                                onClick={this.handleItemClick}
                            >
                                <Link className="about" to="/about">
                                    About
                                </Link>
                            </Menu.Item>
                            <Menu.Item
                                name="projects"
                                active={activeItem === 'projects'}
                                onClick={this.handleItemClick}
                            >
                                <Link className="projects" to="/projects">
                                    Projects
                                </Link>
                            </Menu.Item>
                            <Menu.Item
                                name="contact"
                                active={activeItem === 'contact'}
                                onClick={this.handleItemClick}
                            >
                                <Link className="contact" to="/contact">
                                    Contact
                                </Link>
                            </Menu.Item>
                            <Menu.Item
                                name="responsive"
                                active={activeItem === 'responsive'}
                                onClick={this.handleItemClick}
                            >
                                <Link className="test" to="/ResponsiveLayout">
                                    Responsive Layout
                                </Link>
                            </Menu.Item>
                            <Menu.Item
                                name="layout"
                                active={activeItem === 'layout'}
                                onClick={this.handleItemClick}
                            >
                                <Link className="test" to="/HomepageLayout">
                                    Home Layout
                                </Link>
                            </Menu.Item>
                        </Menu.Menu>

                        {// <Menu.Item as="a" active>
                        //     Home
                        // </Menu.Item>
                        // <Menu.Item as="a">Work</Menu.Item>
                        // <Menu.Item as="a">Company</Menu.Item>
                        // <Menu.Item as="a">Careers</Menu.Item>
                        // <Menu.Menu position="right">
                        //     <Menu.Item className="item">
                        //         <Button as="a">Log in</Button>
                        //     </Menu.Item>
                        //     <Menu.Item>
                        //         <Button as="a" primary>
                        //             Sign Up
                        //         </Button>
                        //     </Menu.Item>
                        // </Menu.Menu>
                        }
                    </Container>
                </Menu> : null}
            </div>
        )
    }
};
