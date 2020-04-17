import React from 'react';
//import ShopCardContent from '../components/ShopCardContent'
import Card from 'react-bootstrap/Card'
import '../css/HomeCardContent.css'
import Layout from '../components/Layout';
import ItemThumbnail from '../components/ItemThumbnail/ItemThumbnail'


import { Link } from 'gatsby'
import { graphql } from "gatsby"
import styled from "styled-components"
import Button from "../components/button";

import '../css/Back.css'

const ThumbnailsWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-wrap: wrap;
    padding: 20px;
`




class Shop extends React.Component {
    render() {
      const { data } = this.props
      const siteTitle = data.site.siteMetadata.title
      const items = data.allMarkdownRemark.edges
      return (
        <Layout location={this.props.location} title={siteTitle}>
              <div className="shopBack">
      <Link preload prefetch to="/">
      <Button primary> 
      Back
      </Button>
      </Link>
    </div>
                <Card.Title>
                    <h2>
                        Welcome to My Shop. 
                    <br />
				        Coming Soon! 
                    </h2> 
                </Card.Title>

                <Card.Body>
                    <Card.Subtitle>
                            <h4 style={{textAlign: "center"}}>
                                Close Window After Adding to Cart To Continue Shopping. 
                            </h4>
			        </Card.Subtitle>

                    <ThumbnailsWrapper>
                    {items.map(({ node }) => {
                        const { title, image, price } = node.frontmatter
                            return (
                                <ItemThumbnail
                                    key={node.fields.slug}
                                    link={node.fields.slug}
                                    heading={title}
                                    image={image.childImageSharp.fluid}
                                    price={price}
                                    />
                                )
                            })}
                    </ThumbnailsWrapper>


                </Card.Body>         
            
        </Layout>
        )
    }
}


export default Shop

export const pageQuery = graphql`
query {
  site {
    siteMetadata {
      title
    }
  } 
  allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
    edges {
      node {
        excerpt
        fields {
          slug
        }
        frontmatter {
          title
          price
          image {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
}
`