import React from 'react';
import "../CSS/education.css";
import Marble from "../Images/whitemarble.jpg";
import {withRouter} from "react-router-dom";
import GBlogo from "../Images/gb.png";
import UofT from "../Images/uoft.png"

class Education extends React.Component {
    render() {
        return (
            <div>
                <div class = "education">
                <img src = {Marble} class = "whitemarble"/>
                <div class = "pinkline"></div>
                <div class = "myed"> My Education </div>
                <div class = "box" />
                    <div class = "gb">GEORGE BROWN </div>
                    <div class = "edtext">
                        <div class = "deg"> Postgraduate Certificate in Human Resources Management </div>
                        <div class = "year"> 2019-2020</div>
                        <div class = "subtext"> cGPA: 3.59 </div>
                        <div class = "subtext"> Working towards CHRP Designation </div>
                        <img src = {GBlogo} class = "gblogo"/>
                    </div>
                <div class = "box2" />
                    <div class = "uof"> UNIVERSITY OF </div>
                    <div class = "t"> TORONTO </div>
                    <div class = "edtext2"> 
                        <div class = "deg"> Bachelors of Commerce Degree</div>
                        <div class = "year"> 2014-2018 </div>
                        <div class = "subtext"> Management Specialist </div>
                        <div class = "subtext"> Economics Minor </div>
                        <div class = "subtext"> Concentrations: Strategy and Leadership </div>
                        <img src = {UofT} class = "uoft" />
                    </div>
                </div>
            </div>

        )

    }
}
export default withRouter(Education)