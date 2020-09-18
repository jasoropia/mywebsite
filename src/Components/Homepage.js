import React from 'react';
import Plant1 from "../Images/Plant (1).png";
import Plant2 from "../Images/Plant (2).png";
import Plant3 from "../Images/Plant (3).png";
import Plant4 from "../Images/Plant (4).png";
import Profile from '../Images/Joniwhite.png';
import "../CSS/homepage.css"
class Homepage extends React.Component {
    render() {
        return (
            
            <div class = 'background'>
                <div class= 'white' style = {{display: 'flex', justifyContent: 'center', alignItems: 'center', border: '2px solid red'}}>
                <div> 
                    <img src= {Plant2} class = 'plant' />
                    <img src= {Plant3} class = 'plant2' />
                    <img src={Profile} class="image" />
                    <img src= {Plant1} class = 'plant2' />
                    <img src= {Plant4} class = 'plant' />
                </div>
                </div>
                <div class="headline">  Reliable. Organized. Something</div>
                <div class="name"> Joni Soropia </div>
            </div>

        )

    }
}
export default Homepage