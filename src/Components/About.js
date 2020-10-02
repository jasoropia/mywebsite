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
                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',}}>
                    <img src= {Highpark} class = "highpark"/>
                    <div class = 'words'>
                        <div class= "me"> THIS IS ME! </div>
                        <div class= "text"> 
                            As a recent graduate, I have accomplished a lot that has 
                            showcased who I am as a person. I want to show my skill 
                            versitility and my willingness to learn in a creative way. 
                        </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
export default withRouter(About)