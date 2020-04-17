import React from 'react'
import { Profilepic } from '../assets/images/index'
import '../css/profilepic.css'
import { Link } from 'gatsby'

class ProfilePic extends React.Component {
    render() {

        return (
        <>
            <div className="userphoto">
                <Link preload prefetch to="/">
                <img className="photo" src={Profilepic} alt=""></img>
                <h1 className="profileName">
                        Salem Aziel
                </h1> 
                </Link>
                <h2 className="userphoto"> @rbl_art760</h2>
                
                    
                
            </div>
        </>
        )

    }
}

export default ProfilePic