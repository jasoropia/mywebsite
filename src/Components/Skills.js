import React from 'react';
import {withRouter} from "react-router-dom";
import "../CSS/skills.css"
import Comp from "../Images/comp.png"
import Desk from "../Images/desk.png"
import Phone from "../Images/phone.png"
import Book from "../Images/book.png"

class Skills extends React.Component {
    render() {
        return (
            <div class= "skills">
                <div class = "myskill">What I Bring to the Table</div>
                <div class = "myski">My Skills</div>
                <img src = {Desk} class= "desk" />
                <img src = {Comp} class= "comp" />
                <img src = {Phone} class= "phone" />
                <img src = {Book} class= "book" />
            </div>
            
        )

    }
}
export default withRouter(Skills)