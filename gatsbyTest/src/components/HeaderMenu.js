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

const style = {
    logo: {
        fontSize: '1em',
        margin: 0,
        color: '#FF6600'
    }
};

export default class HeaderMenu extends Component {
    state = { activeItem: 'home' }
    handleItemClick = (e, { name }) => this.setState({ activeItem: name });

    render() {
        const { activeItem, visible } = this.state;

        return (
            <div style={{ backgroundColor: '#000' }}>
                <Menu stackable inverted borderless>
                    <Menu.Item name="home" as="h1" style={style.logo} onClick={this.handleItemClick}>
                        <img src="/logo.png" />
                        <Link to="/" style={style.logo}>Clint Losee Digital Portfolio</Link>
                    </Menu.Item>
                    <Menu.Menu position="right" icon="labeled">
                        <Menu.Item
                            name="home"
                            as="span"
                            active={activeItem === 'home'}
                            onClick={this.handleItemClick}
                        >
                            <Link className="home" to="/">
                                <Icon name='home' />
                                Home
                            </Link>
                        </Menu.Item>
                        <Menu.Item
                            name="about"
                            as="span"
                            active={activeItem === 'about'}
                            onClick={this.handleItemClick}
                        >
                            <Link className="about" to="/page-2">
                                Page-2
                            </Link>
                        </Menu.Item>
                        <Menu.Item
                            name="projects"
                            as="span"
                            active={activeItem === 'projects'}
                            onClick={this.handleItemClick}
                        >
                            <Link className="projects" to="/projects">
                                Projects
                            </Link>
                        </Menu.Item>
                        <Menu.Item
                            name="contact"
                            as="span"
                            active={activeItem === 'contact'}
                            onClick={this.handleItemClick}
                        >
                            <Link className="contact" to="/contact">
                                Contact
                            </Link>
                        </Menu.Item>
                        <Menu.Item
                            name="responsive"
                            as="span"
                            active={activeItem === 'responsive'}
                            onClick={this.handleItemClick}
                        >
                            <Link className="test" to="/ResponsiveLayout">
                                Responsive Layout
                            </Link>
                        </Menu.Item>
                        <Menu.Item
                            name="layout"
                            as="span"
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
