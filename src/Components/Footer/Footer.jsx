import React from 'react'
import './Footer.css'
import tracker from "../../assets/tracker.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub,faLinkedin} from '@fortawesome/free-brands-svg-icons'
import { faChartPie,faAddressBook, } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {

    return(
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <div className="logo-container">
                            <a href="/">

                            <img className="logo" src={tracker}/>
                            </a>
                            
                        </div>
                    </div>

                    <div className="col-md-3">
                        <p className="footer-title">
                         Data Source
                         <FontAwesomeIcon icon={faChartPie} style={{marginLeft: "0.5rem"}}/>
                        </p>
                        <p style={{fontSize: "medium"}}>
                        <a href="https://api.covid19api.com/summary"  style={{textDecoration: "none"}}>
                        Link to API </a>
                        </p>
                    </div>

                    <div className="col-md-3">
                        <div className="contactContainer"> 

                        
                        <p className="footer-title">
                         AboutMe
                         <FontAwesomeIcon icon={faAddressBook} style={{marginLeft: "0.5rem"}}/>
                        </p>
                        <p>
                        <a href="https://www.linkedin.com/in/dhruvin-vekariya/"  style={{textDecoration: "none"}}>
                        <FontAwesomeIcon icon={faLinkedin} size="lg"/>
                        </a>
                        <a href="https://www.github.com/dhruvinV"  style={{textDecoration: "none"}}>
                        <FontAwesomeIcon icon={faGithub} style={{marginLeft: "0.5rem"}} size="lg"/>
                        </a>
                        </p>
                        </div>

                    </div>                    
                </div>
            </div>
        </div>



    )


}




export default Footer
