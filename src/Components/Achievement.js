import React from 'react';
import {withRouter} from "react-router-dom";
import "../CSS/achievement.css";
import WhiteFloral from "../Images/whitefloral.jpg";
import Scholar from "../Images/scholar.png";
import Certificate from "../Images/certificate.png";
import Award from "../Images/award.png";
import Special from "../Images/special.png";

class Achievement extends React.Component {
    render() {
        return (
            <div class = "achievement">
                <img src = {WhiteFloral} class = "whitefloral"/>
                <div class = "pinkline3"></div>
                <div class = "myach"> My Achievements </div>
                <div class = "achieve">
                    <img src = {Scholar} class = "imageach"/>
                    <div class = "description pt2"> Dean's List 2020</div>
                    <div class = "description loc"> | George Brown College </div>
                    <img src = {Certificate} class = "imageach no2"/>
                    <div class = "description no2 pt2"> Women in House 2018</div>
                    <div class = "description no2 loc2"> | University of Toronto </div>
                    <img src = {Award} class = "imageach no3"/>
                    <div class = "description no3 pt2"> Ontario Scholar 2014</div>
                    <div class = "description no3 loc3"> | Philip Pocock Secondary School</div>
                    <img src = {Special} class = "imageach no4"/>
                    <div class = "description no4 pt2"> Bronze National Medalist 2009</div>
                    <div class = "description no4 loc4"> | Gold Ice Synchronized Skating </div>
                </div>
            </div> 
        )

    }
}
export default withRouter(Achievement)