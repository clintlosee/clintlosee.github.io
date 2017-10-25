import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
    <div>
        <h1>Hi people</h1>
        <p>Welcome to my new Gatsby site.</p>
        <p>Now go build something great.</p>
        <p>
            <Link to="/page-2/">Go to page 2</Link>
        </p>
        <p>
            <Link to="/about/">Go to about page</Link>
        </p>
        <p>
            <Link to="/ResponsiveLayout/">Go to Responsive Layout page</Link>
        </p>
    </div>
);

export default IndexPage
