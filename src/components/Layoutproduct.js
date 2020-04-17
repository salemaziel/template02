import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import layoutStyles from '../css/layout.module.css'

import 'typeface-roboto'

import Footer from './footer';

import { theme } from '../styles/theme';


import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'



class Layoutproduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPreloaded: true,
    };
  }
    componentDidMount() {
    if (window.Snipcart) {
      window.Snipcart.api.configure('show_continue_shopping', true);
    }
  }


  componentDidMount() {
    this.timeoutId = setTimeout(() => {
      this.setState({ isPreloaded: false });
    }, 100);
  }

  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }

  render() {
    const { children } = this.props;
    const { isPreloaded } = this.state;
    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQueryProduct {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <>
            <Helmet
              title={data.site.siteMetadata.title}
              meta={[
                { name: 'description', content: "Gallery and Shop" },
                { name: 'keywords', content: 'gallery, shop, ecommerce, e-commerce' },
              ]}
            >

            </Helmet>
            <div className={layoutStyles.Wrapper}>
            <Container className={layoutStyles.container}>
                    <Card className={layoutStyles.cardBg}>
                        
                            
                           
                        <div className={isPreloaded ? 'main-body is-preload' : 'main-body'}>
                            {children}
                        </div>
                        <Footer />
                    </Card>
            </Container>
            </div>
            </>
        )}
      />
    );
  }
}

Layoutproduct.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layoutproduct;
