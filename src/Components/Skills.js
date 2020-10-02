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
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <div class="myskill">What I Bring to the Table</div>
                    <div class="myski">My Skills</div>
                    <div style={{display: 'flex', justifyContent: 'center', alignItems:'bottom', width: '100%', border: 'solid red 1px'}}>
                        <img src={Comp} class="comp" />
                        <img src={Phone} class="phone" />
                        <img src={Book} class="book" />
                    </div>
                    <img src={Desk} class="desk" />
                </div>
            </div>

        )

    }
}
export default withRouter(Skills)