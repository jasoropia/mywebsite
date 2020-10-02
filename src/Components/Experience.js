import React from 'react';
import {withRouter} from "react-router-dom";
import "../CSS/experience.css"
import PinkBrick from "../Images/pinkbrick.jpg"
import People from "../Images/people.png"
import Buy from "../Images/buy.png"
import Marketing from "../Images/marketing.png"

class Experience extends React.Component {
    render() {
        return (
            <div class = "experience">
                <img src = {PinkBrick} class = "pinkbrick"/>
                <div class = "pinkline2"></div>
                <div class = "myex"> My Experiences </div>

                <div class = "ex1">
                    <div class = "number">01</div>
                    <img src = {People} class = "icon skater"/>
                    <div class = "position"> Skate </div>
                    <div class = "title"> Instructor </div>
                    <div class = "date"> 2017-2020 </div>
                    <div class = "company"> City of Mississauga </div>
                    <div class = "date second"> 2015-2017 </div>
                    <div class = "company other"> Habourfront Centre </div>
                </div>

                <div class = "ex2">
                    <div class = "number">02</div>
                    <img src = {Buy} class = "icon cash"/>
                    <div class = "position"> Cash </div>
                    <div class = "title"> Poster </div>
                    <div class = "date"> 2019 </div>
                    <div class = "company"> CDW Canada </div>
                </div>

                <div class = "ex3">
                 <div class = "number">03</div>
                    <img src = {Marketing} class = "icon horn"/>
                    <div class = "position"> Engagement </div>
                    <div class = "title"> Ambassador </div>
                    <div class = "date"> 2017-2018 </div>
                    <div class = "company"> Hart House </div>
                </div>
            </div>
            
            
        )

    }
}
export default withRouter(Experience)