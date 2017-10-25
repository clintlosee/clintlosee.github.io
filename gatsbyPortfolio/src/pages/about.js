import React from 'react';
import Link from 'gatsby-link';

const AboutPage = () => (
    <div>
        <h1>About Page</h1>
        <p>Welcome to the page</p>
        <Link to="/">Go back to the homepage</Link>
        <Link to="/page-2/">Go to Page 2</Link>
    </div>
);

export default AboutPage;
