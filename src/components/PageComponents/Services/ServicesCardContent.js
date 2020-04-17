import React from 'react'


import Card from 'react-bootstrap/Card'
import servicescardcontentStyles from "./ServicesCardContent.module.css"
import Button from '../../button'

import { Link } from 'gatsby'

//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faSnapchat } from "@fortawesome/free-brands-svg-icons"


class ServicesCardContent extends React.Component {
   render() {
    return (
        <Card.Body className={servicescardcontentStyles.cardBody}>
        
          
            <Card.Title className={servicescardcontentStyles.cardTitle}>
                <h1>Services I Offer
                </h1>
            </Card.Title>
           
            <Card.Text>
                <ul>
                    <li>
                        Website Design, Development, and Maintenance
                    </li>
                    <li>
                        Mautic Marketing Automation 
                        -Shared Accounts
                        -Personal Installs
                    </li>
                    <li>
                        Video Conferencing Server Installs
                        -Embed in your website
                    </li>
                </ul>
                {/*<div style={{
                    display: 'grid',
                    justifyContent: 'center',
                    alignContent: 'center',
                    textAlign: 'center',
                }}>
              {/ **<Button primary prefetch href="/gallery">Gallery display</Button>** /}
              <Button primary prefetch as={Link} to="/services">My Services</Button>

              <Button primary prefetch href="https://behance.net/codestaff-salem">Portfolio on Behance</Button>
              
              <Button primary prefetch href="https://codestaff-salem.appointlet.com/s/1-hour-consultation/salem">Book Consultation</Button>
            </div>*/}
                   
                
                </Card.Text>
  
                
        </Card.Body>

        )
    };
}

export default ServicesCardContent