import React from 'react';
import {withRouter} from "react-router-dom";
import "../CSS/experience2.css"
import WhiteTable from "../Images/whitetable.jpg"
import Buildings from "../Images/buildings.png"
import Game from "../Images/game.png"
import Avatar from "../Images/avatar.png"


class Experience extends React.Component {
    render() {
        return (
            <div class = "experience">
                <img src = {WhiteTable} class = "whitetable"/>
                <div class = "pinkline2"></div>
                <div class = "myex"> My Experiences </div>

                <div class = "ex1">
                    <div class = "number">04</div>
                    <img src = {Buildings} class = "icon2"/>
                    <div class = "position"> Residence </div>
                    <div class = "title"> Don </div>
                    <div class = "date"> 2019 </div>
                    <div class = "company"> DEEP UofT </div>
                    <div class = "date second"> 2018 </div>
                    <div class = "company other"> MWS Camps </div>
                </div>

                <div class = "ex2">
                    <div class = "number">05</div>
                    <img src = {Game} class = "icon2"/>
                    <div class = "position"> Student </div>
                    <div class = "title"> Organizations </div>
                    <div class = "date"> 2019-2020 </div>
                    <div class = "company"> Social Media Coordinator </div>
                    <div class = "company additional"> Get Lit Gaming </div>
                    <div class = "date second"> 2016-2018 </div>
                    <div class = "company other"> President </div>
                    <div class = "company other2"> Pair-a-Dice Gaming </div>
                </div>

                <div class = "ex3">
                    <div class = "number">06</div>
                    <img src = {Avatar} class = "icon2"/>
                    <div class = "position"> Volunteer </div>
                    <div class = "title"> Instructor </div>
                    <div class = "date"> 2014-2017 </div>
                    <div class = "company"> Peace by PEACE </div>
                </div>
            </div>
            
            
        )

    }
}
export default withRouter(Experience)