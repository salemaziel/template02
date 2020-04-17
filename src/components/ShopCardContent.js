import React from 'react'

import Card from 'react-bootstrap/Card'

import '../css/HomeCardContent.css'
//import Header from './header';

//import '../css/gallery2.css'
//import Gallery2sales from './gallery2sales';
//import Footer from './footer'




//function Cardcontent2sales() {
class ShopCardContent extends React.Component {
    render(){
            const { data } = this.props
            const siteTitle = data.site.siteMetadata.title
            const items = data.allMarkdownRemark.edges
        return (
            <>
                <Card.Title>
                    <h2>
                        Welcome to My Shop. 
                    <br />
				        Coming Soon! 
                    </h2> 
                </Card.Title>

                <Card.Body>
        
                    <Card.Title>
                            <h4 style={{
                                textAlign: "center",
                            }}>
                                Close Window After Adding to Cart To Continue Shopping. 
                            </h4>
			        </Card.Title>
           
            
          
                    {/*<ThumbnailsWrapper>
                        {products.map(({ node }) => {
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
                        </ThumbnailsWrapper>*/}
              
                
                
                
                </Card.Body>
            </>
        )
    }
}

export default ShopCardContent