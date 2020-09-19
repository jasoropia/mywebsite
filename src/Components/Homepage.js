import React from 'react';
import Plant1 from "../Images/Plant (1).png";
import Plant2 from "../Images/Plant (2).png";
import Plant3 from "../Images/Plant (3).png";
import Plant4 from "../Images/Plant (4).png";
import Profile from '../Images/Joniwhite.png';
import "../CSS/homepage.css"
import Divider from '@material-ui/core/Divider';

class Homepage extends React.Component {
    render() {
        return (
            <div class="center_page" style={{height: '100%'}}>
                <div class='background'></div>
                <div class="white" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around'}}>
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                        <img src={Plant2} class='plant' />
                        <img src={Plant3} class='plant2' />
                        <img src={Profile} class="image" />
                        <img src={Plant1} class='plant2' />
                        <img src={Plant4} class='plant' />
                    </div>
                    <div style={{display: 'flex', justifyContent: 'space-around', width: '100%', marginTop: '2%'}}>
                        <Divider className="divider" style={{backgroundColor: "#F4D8D4"}}></Divider>
                        <Divider className="divider" style={{backgroundColor: "#D3BAB7"}}></Divider>
                        <Divider className="divider" style={{backgroundColor: "#FF8AC2"}}></Divider>
                        <Divider className="divider" style={{backgroundColor: "#700136"}}></Divider>
                    </div>
                    <p class="headline">  Reliable. Organized. Something</p>
                    <p class="name"> Joni Soropia </p>
                </div>
            </div>

        )

    }
}
export default Homepage