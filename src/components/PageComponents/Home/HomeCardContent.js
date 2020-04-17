import React from "react";

import Card from "react-bootstrap/Card";
import homecardcontentStyles from "./HomeCardContent.module.css";
import Button from "../../button";

//import MenuRadial from '../../MenuRadial'
import { Link } from "gatsby";
//import { TransitionLink } from "gatsby-plugin-transitions";
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faSnapchat } from "@fortawesome/free-brands-svg-icons"

class HomeCardContent extends React.Component {
  render() {
    return (
      <Card.Body className={homecardcontentStyles.cardBody}>
        <Card.Subtitle className={homecardcontentStyles.cardTitle}>
          <h2>
            System Administrator. <br />
            Web Developer. <br />
            <br />
            Hit me up.
          </h2>
        </Card.Subtitle>

        <Card.Text>
          <div
            style={{
              display: "grid",
              justifyContent: "center",
              alignContent: "center",
              textAlign: "center"
            }}
          >

              <Button primary prefetch as={Link} to="/services">
                My Services
              </Button>
            <Button primary prefetch="true" href="https://behance.net/codestaff-salem">
              Portfolio on Behance
            </Button>

            <Button
              primary
              prefetch="true"
              href="https://codestaff-salem.appointlet.com/s/1-hour-consultation/salem"
            >
              Book Consultation
            </Button>
          </div>

        </Card.Text>
      </Card.Body>
    );
  }
}

export default HomeCardContent;
