import React from 'react';
import Pinkmarble from "../Images/pinkmarble.jpeg";
import Highpark from "../Images/highpark.jpg";
import "../CSS/about.css"
import {withRouter} from "react-router-dom";
import Education from "./Education";
import Portfolio from './Portfolio';
class About extends React.Component {

    render() {
        return (
            <div>
                <div class = "about">
                <img src= {Pinkmarble} class= "pinkmarble"/>
                <div class= "me"> THIS IS ME! </div>
                <div><img src= {Highpark} class = "highpark"/></div>
                <div class= "text"> 
                    “I’ve always been shy when it comes to talking about myself. 
                    Yet I realized, the opportunities that I’ve enjoyed the most 
                    have been because I decided to step outside of my comfort 
                    zone and just do it. So, this site is dedicated to 
                    showcasing who I am and my journey to trying new things 
                    while learning to be confident outside of my comfort zone.”
                </div>
                </div>
            </div>

        )
    }
}
export default withRouter(About)