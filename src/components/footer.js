import React from 'react'
import '../css/footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faInstagram, faDribbble, faGithub, faSnapchat, faSnapchatGhost, faSnapchatSquare } from "@fortawesome/free-brands-svg-icons"

const Footer = () => (
    <div className="footer">
        <ul className="icons">
		    <li><a href="#" className="icon brands fa-twitter">
            <FontAwesomeIcon icon={faTwitter} />
            </a></li>

			<li><a href="#" className="icon brands fa-facebook-f">
                <FontAwesomeIcon icon={faFacebookF} />
            </a></li>
			
            <li><a href="https://www.instagram.com/justinarreguin/" className="icon brands fa-instagram">
                <FontAwesomeIcon icon={faInstagram} />
            </a></li>
                
            {/**<li><a href="#" class="icon brands fa-dribbble">
                <FontAwesomeIcon icon={faDribbble} />
</a></li>**/}
    		    
            {/**<li><a href="#" class="icon brands fa-github">
                <FontAwesomeIcon icon={faSnapchat} />
</a></li>**/}
		</ul>
    </div>
)

export default Footer