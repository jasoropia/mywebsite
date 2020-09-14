import React from 'react';
import Profile from "../Images/joniprofile.jpg";
import Cherry from "../Images/cherry.jpeg"
import "../CSS/homepage.css"
class Homepage extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <img src={Cherry} class="background"/>
                    <div class={"pinkBox"} style={{display: 'flex', justifyContent: 'left'}} />
                </div>
                <div style={{ display: 'flex', alignItems: 'center', border: 'solid 1px red'}}>
                    <img src={Profile} class="image" style={{marginTop: '30px'}}/>
                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                        <div class="name"> JONI SOROPIA </div>
                        <div class="headline"> Human Resources Student </div>
                    </div>

                </div>
            </div>

        )

    }
}
export default Homepage