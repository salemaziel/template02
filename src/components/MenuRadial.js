import React, { Component } from "react"
import RadialMenu from "react-radial-menu"

const items = [
	{"href":"http://www.facebook.com", "image":"url(https://antho2407.github.io/react-radial-menu/images/social/facebook.png)"},
	{"href":"http://www.reddit.com", "image":"url(https://antho2407.github.io/react-radial-menu/images/social/reddit.png)"},
	{"href":"http://www.flickr.com", "image":"url(https://antho2407.github.io/react-radial-menu/images/social/flickr.png)"},
	{"href":"http://www.google.com", "image":"url(https://antho2407.github.io/react-radial-menu/images/social/googleplus.png)"},
	{"href":"http://www.linkedin.com", "image":"url(https://antho2407.github.io/react-radial-menu/images/social/linkedin.png)"},
	{"href":"http://www.twitter.com", "image":"url(https://antho2407.github.io/react-radial-menu/images/social/share.png)"},
	{"href":"http://www.twitter.com", "image":"url(https://antho2407.github.io/react-radial-menu/images/social/twitter.png)"}
];

const center = {
	"image": "url(https://antho2407.github.io/react-radial-menu/images/social/share.png)"
};

export default class MenuRadial extends Component {
    constructor(props) {
        super(props);
        this.setState = {
          animation: "transition.swoopIn",
          duration: 600,
          stagger: 100,
          distance: 30
        };
      }


	setAnimation = event => {
		this.setState({animation: event.target.value});
	}

	setDuration = event => {
		this.setState({duration: parseInt(event.target.value)});
	}

	setStagger = event => {
		this.setState({stagger: parseInt(event.target.value)});
	}

    setDistance = event => {
		this.setState({distance: parseInt(event.target.value)});
	}

    render() {
        const {
            animation,
            duration,
            stagger,
            distance
        } = this.state
        return <RadialMenu
          animation={}
          center={center}
        />
    }
}
