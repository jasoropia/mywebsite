import React from 'react';
import { withRouter } from "react-router-dom";
import "../CSS/skills.css"
import Comp from "../Images/comp.png"
import Desk from "../Images/desk.png"
import Phone from "../Images/phone.png"
import Book from "../Images/book.png"

class Skills extends React.Component {
    render() {
        return (
            <div class="skills">
                <div class="pink_background" />
                <div class="column">
                    <div class="myskill">What I Bring to the Table</div>
                    <div class="myski">My Skills</div>
                    <div class="desk_items">
                        <img src={Phone} class="phone" />
                        <img src={Comp} class="comp" />
                        <img src={Book} class="book" />
                    </div>
                    <img src={Desk} class="desk" />
                </div>
            </div>

        )

    }
}
export default withRouter(Skills)