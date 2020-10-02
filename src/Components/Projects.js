import React from 'react';
import { withRouter } from "react-router-dom";
import "../CSS/projects.css"
import ProImage1 from '../Images/recruit.png';
import ProImage2 from "../Images/inspect.png";
import ProImage3 from "../Images/outreach.png";
import ProImage4 from "../Images/plan.png";
import ProImage5 from "../Images/evaluate.png";
import ProImage6 from "../Images/design.png";
import Divider from '@material-ui/core/Divider';

class Projects extends React.Component {
    render() {
        return (

            <div class="project">
                <div class='centerbox'>
                    <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', width: '50%' }}>
                        <img src={ProImage1} class='proimage' />
                        <img src={ProImage2} class='proimage' />
                        <img src={ProImage3} class='proimage' />
                    </div>

                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                        <p class='subtitles'> EXPLORE MY WORK </p>
                        <p class='titles'>My Projects</p>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-around', width: '60%' }}>
                            <Divider className="divider2" style={{ backgroundColor: "#F4D8D4" }}></Divider>
                            <Divider className="divider2" style={{ backgroundColor: "#D3BAB7" }}></Divider>
                            <Divider className="divider2" style={{ backgroundColor: "#FF8AC2" }}></Divider>
                            <Divider className="divider2" style={{ backgroundColor: "#700136" }}></Divider>
                        </div>

                    <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', width: '50%', marginTop: '20px' }}>
                        <img src={ProImage4} class='proimage' />
                        <img src={ProImage5} class='proimage' />
                        <img src={ProImage6} class='proimage' />
                    </div>
                </div>
            </div>

        )

    }
}
export default withRouter(Projects)