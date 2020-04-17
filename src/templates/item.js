// This is the template for each programmatically generated item in the shop. It will be populated with data from markdown files in the content folder.

import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components"
import { Link } from 'gatsby'
import '../css/Back.css'



import Layoutproduct from "../components/Layoutproduct";
import Button from "../components/button";
//import Button from "../components/button";

const Heading = styled.h1`
  font-weight: 900;
  font-size: 1.5em;
  margin: 20px 0;
`

const ImgStyled = styled(Img)`
  width: 100%;
  height: 100%;
`

const Price = styled.p`
  margin: 20px 0;
  padding: 10px;
  font-weight: 700;
  background: transparent;
  color: white;
`
const Description = styled.p`
  margin: 20px 0;
  padding: 10px;
`

/*const Dropdown = styled.select`
  display: block;
  padding: 10px;
  margin: 10px 0;
  background: transparent;
  font-weight: 700;
  border: 2px;
  border-width: 2px 2px 2px solid white;
  border-radius: 5px;
  outline: none;
  color: white;
`
const DropdownOption = styled.option`
  padding: 10px;
  background: whitesmoke;
  font-weight: 700;
  border: none;
  outline: none;
  color: white;
`*/

const BuyButton = styled.button`
  padding: 20px;
  background: transparent;
  font-weight: 700;
  margin: 1rem 0 3rem;
  border-radius: 5px;
  border-width: 2px solid white;
  color: white;
`

class Item extends React.Component {
  state = {
    selected: this.props.data.markdownRemark.frontmatter.customField.values[0].name
  }

  setSelected = (value) => {
    this.setState({ selected: value })
  }

  // create the string required by snipcart to allow price changes based on option chosen
  createString = (values) => {
    return values.map(option => {
      const price = option.priceChange >= 0 ? `[+${option.priceChange}]` : `[${option.priceChange}]`
      return `${option.name}${price}`
    }).join('|')
  }

   // calculate price based on option selected for display on product page
  updatePrice = (basePrice, values) => {
    const selectedOption = values.find(option => option.name === this.state.selected)
    return (basePrice + selectedOption.priceChange).toFixed(2)
    
  }

  render() {
    const item = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title

    return (
      <Layoutproduct location={this.props.location} title={siteTitle}>
 
    <div className="productBack">
      <Link preload prefetch to="/shop">
      <Button primary> 
      Back
      </Button>
      </Link>
    </div>
    
      <div className="container">
        <Heading>{item.frontmatter.title}</Heading>

        <ImgStyled fluid={item.frontmatter.image.childImageSharp.fluid} />

        <Price>${this.updatePrice(item.frontmatter.price, item.frontmatter.customField.values)}</Price>
        <Description>{item.frontmatter.description}</Description>
        {/*<Dropdown
          id={item.frontmatter.customField.name}
          onChange={(e) => this.setSelected(e.target.value)}
          value={this.state.selected}>
          {item.frontmatter.customField.values.map((option) => (<DropdownOption key={option.name}>{option.name}</DropdownOption>))}
          
        </Dropdown>*/}

        <BuyButton
          className='snipcart-add-item'
          data-item-id={item.frontmatter.id}
          data-item-price={item.frontmatter.price}
          data-item-name={item.frontmatter.title}
          data-item-description={item.frontmatter.description}
          data-item-image={item.frontmatter.image.childImageSharp.fluid.src}
          data-item-url={"https://justinarreguin.thegram.online/shop/" + item.fields.slug} //REPLACE WITH OWN URL
          data-item-custom1-name={item.frontmatter.customField ? item.frontmatter.customField.name : null}
          data-item-custom1-options={this.createString(item.frontmatter.customField.values)}
          data-item-custom1-value={this.state.selected}>
          
          
            
            Add to basket
        </BuyButton>

        
        </div>
        
       

      </Layoutproduct>
    )
  }
}

export default Item

export const pageQuery = graphql`
  query ItemBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields {
        slug
      }
      frontmatter {
        title
        description
        price
        id
        image {
          childImageSharp {
            fluid {
              src
              ...GatsbyImageSharpFluid
            }
          }
        }
        customField {
          name
          values {
            name
            priceChange
          }   
        }
      }
    }
  }
`
