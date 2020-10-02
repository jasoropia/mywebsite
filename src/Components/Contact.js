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

            <div class='conatactpage'>
                <img src={Cloud} class='cloud' />
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                    <div class="contact"> Contact Me </div>
                    <div class="contact1"></div>
                    <img src={Collage} class="collage" />

                    <div class='information'>
                        <div class="row"> 
                            <img src={Mail} class="mail" />
                            <p class="email"> jasoropia@gmail.com </p>
                        </div>
                        <div  class="row">
                            <img src={Home} class="home" />
                            <p class="sauga"> Mississauga, ON </p>
                        </div>
                        <div  class="row">
                            <img src={Linkedin} class="Linkedin" />
                            <p class="linkedin"> JoniSoropia </p>
                        </div>
                    </div>

                </div>



            </div>

        )

    }
}
export default Contact