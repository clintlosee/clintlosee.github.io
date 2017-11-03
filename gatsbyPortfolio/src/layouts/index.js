import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import {
    Container
} from 'semantic-ui-react';

import HeaderElement from '../components/HeaderElement';
import HeaderElement2 from '../components/HeaderElement2';
import NewHome from '../components/NewHomeLayout';

import './index.scss';
import 'semantic-ui-css/semantic.min.css';



// const HeaderElement = () => (

//     <Container>
//         <Menu stackable pointing secondary>
//             <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick}>
//                 <img src="/logo.png" />
//                 <Link to="/">Home</Link>
//             </Menu.Item>
//             <Menu.Menu position='right'>
//                 <Menu.Item name='about' active={activeItem === 'about'} onClick={this.handleItemClick}>
//                     <Link className="about" to="/about">
//                         About
//                     </Link>
//                 </Menu.Item>
//                 <Menu.Item name='projects' active={activeItem === 'projects'} onClick={this.handleItemClick}>
//                     <Link className="projects" to="/projects">
//                         Projects
//                     </Link>
//                 </Menu.Item>
//                 <Menu.Item name='contact' active={activeItem === 'contact'} onClick={this.handleItemClick}>
//                     <Link className="contact" to="/contact">
//                         Contact
//                     </Link>
//                 </Menu.Item>
//                 <Menu.Item name='responsive' active={activeItem === 'responsive'} onClick={this.handleItemClick}>
//                     <Link className="test" to="/ResponsiveLayout">
//                         Responsive Layout
//                     </Link>
//                 </Menu.Item>
//             </Menu.Menu>
//         </Menu>
//     </Container>
// );

    // <header className="header"
    //     style={{
    //         background: 'rebeccapurple',
    //         marginBottom: '1.45rem',
    //     }}
    // >
    //     <div className="header-wrap"
    //         style={{
    //         margin: '0 auto',
    //         maxWidth: 960,
    //         padding: '1.45rem 1.0875rem',
    //         }}
    //     >
    //         <Link
    //             to="/"
    //             style={{
    //                 color: 'white',
    //                 textDecoration: 'none'
    //             }}
    //         >
    //             <h1 className="name" style={{ margin: 0 }}>CL Gatsby Portfolio</h1>
    //         </Link>
    //         <nav className="main-nav">
    //             <ul>
    //                 <li><Link className="about" to="/about">About</Link></li>
    //                 <li><Link className="projects" to="/projects">Projects</Link></li>
    //                 <li><Link className="contact" to="/contact">Contact</Link></li>
    //             </ul>
    //         </nav>
    //     </div>
    // </header>

const TemplateWrapper = ({ children }) => (
    <div style={{ }}>
        <Helmet
            title="Clint Losee Web Portfolio"
            meta={[
                { name: 'description', content: 'Sample' },
                { name: 'keywords', content: 'sample, something' }
            ]}
        />

        <HeaderElement2 />

        <Container
            style={{
                margin: '0 auto',
                maxWidth: 960,
                padding: '0px 1.0875rem 1.45rem',
                paddingTop: '10px',
            }}
        >
            {children()}
        </Container>

    </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
