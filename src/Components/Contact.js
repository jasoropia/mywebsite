import React from 'react';
import Collage from "../Images/collage.jpg";
import Cloud from "../Images/cloud.jpg";
import Mail from "../Images/mail.png";
import Home from "../Images/home.png";
import Linkedin from "../Images/linkedin.png";
import "../CSS/contact.css";
class Contact extends React.Component {
    render() {
        return (
            
            <div class = 'conatactpage'>
                <img src = {Cloud} class = 'cloud'/>
                <div class = "contact1"></div>
                <div class = "contact"> Contact Me </div>
                <img src= {Collage} class= "collage"/>

                <div class = 'information'>               
                    <img src = {Mail} class = "mail"/>
                    <p class = "email"> jasoropia@gmail.com </p>
                    <img src = {Home} class = "home"/>
                    <p class = "sauga"> Mississauga, ON </p>
                    <img src ={Linkedin} class = "Linkedin"/>
                    <p class = "linkedin"> JoniSoropia </p>
                    </div> 
            </div>
           
        )

    }
}
export default Contact