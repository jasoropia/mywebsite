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
            
            <div>
                <img src = {Cloud} class = "cloud"/>
                <div class = "contact1"></div>
                <div class = "contact"> Contact Me </div>
                <img src= {Collage} class= "collage"/>
                    <img src = {Mail} class = "mail"/>
                    <div class = "email"> jasoropia@gmail.com </div>
                    <img src = {Home} class = "home"/>
                    <div class = "sauga"> Mississauga, ON </div>
                    <img src ={Linkedin} class = "Linkedin"/>
                    <div class = "linkedin"> /Joni-Soropia </div>
            </div>
           
        )

    }
}
export default Contact