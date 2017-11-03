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

export default class HeaderMenu extends Component {
    state = { activeItem: 'home' }
    handleItemClick = (e, { name }) => this.setState({ activeItem: name });

    render() {
        const { activeItem, visible } = this.state;

        return (
            <div style={{ backgroundColor: '#000' }}>
                <Menu stackable inverted borderless>
                    <Menu.Item name="home" onClick={this.handleItemClick}>
                        <img src="/logo.png" />
                        <Link to="/">Clint Losee Digital Portfolio</Link>
                    </Menu.Item>
                    <Menu.Menu position="right" icon="labeled">
                        <Menu.Item
                            name="home"
                            active={activeItem === 'home'}
                            onClick={this.handleItemClick}
                        >
                            <Link className="home" to="/">
                                <Icon name='home' />

                            </Link>
                        </Menu.Item>
                        <Menu.Item
                            name="about"
                            active={activeItem === 'about'}
                            onClick={this.handleItemClick}
                        >
                            <Link className="about" to="/page-2">
                                Page-2
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
                </Menu>
            </div>
        )
    }
};