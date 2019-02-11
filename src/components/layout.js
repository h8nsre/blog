import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

import Header from './header';
import '../css/style.css';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div className="flex flex-col font-sans min-h-screen text-grey-darkest">
        {/* <Header siteTitle={data.site.siteMetadata.title} /> */}

        <div className="flex flex-col flex-1  max-w-xl mx-auto px-4 py-8 md:p-8 w-full">
          <div>
            <img
              src="https://i.imgur.com/xKU9IfH.jpg"
              title="source: imgur.com"
            />
          </div>
          <h1>Hello.</h1>
          <div>
            <h1>My name is Hiep.</h1>
          </div>
          <div>
            <span>I am a software engineer.</span>
          </div>
        </div>

        <footer className="bg-blue">
          {/* <div className="flex justify-between max-w-xl mx-auto p-4 md:p-8 text-sm">
            <p className="text-white">Hiep Nguyen</p>

            <p>
              <a
                href="https://github.com/taylorbryant/gatsby-starter-tailwind"
                className="font-bold no-underline text-white"
              >
                GitHub
              </a>
            </p>
          </div> */}
        </footer>
      </div>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
