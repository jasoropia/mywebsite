import React from 'react';
import {withRouter} from "react-router-dom";
import "../CSS/projects.css"
import Recruit from "../Images/recruit.png"
import Plan from "../Images/plan.png"
import Outreach from "../Images/outreach.png"
import Evaluate from "../Images/evaluate.png"
import Train from "../Images/train.png"
import Design from "../Images/design.png"
import Inspect from "../Images/inspect.png"
import Aesthetic from "../Images/aesthetics.jpg";

class Projects extends React.Component {
    render() {
        return (
            
            <div class = "project">
                <img src = {Aesthetic} class = "aesthetic"/>
                <div class = "mypro">My Projects Involve</div>
                <img src = {Recruit} class = "pro recruit"/>
                <img src = {Plan} class = "pro plan"/>
                <img src = {Outreach} class = "pro outreach"/>
                <img src = {Inspect} class = "pro inspect"/>
                <img src = {Evaluate} class = "pro evaluate"/>
                <img src = {Design} class = "pro design"/>
                <img src = {Train} class = "pro train"/>
            </div>
           
        )

    }
}
export default withRouter(Projects)