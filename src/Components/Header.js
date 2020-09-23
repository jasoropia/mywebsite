import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Logo from "../Images/JS.png";
import {Link} from "react-router-dom";
import "../CSS/header.css";
class Header extends React.Component {
    componentDidMount (){
        this.setState({
            toggled: "/"
        })
    }

    handleChange= (index) => {
        this.setState ({
            toggled: index
        })
    }

    render() {

        const colorMap = {
            "/": 'black',
            "/Portfolio": 'black',
            "/Projects": 'black',
            "/Contact": 'black',
        }

        if (this.state && this.state.toggled) {
            colorMap[this.state.toggled] = "rgb(112, 1, 54)"} 


        return (
            <AppBar position="fixed" style={
                { backgroundColor: "#F1E8E7"}
            }>


                <Toolbar>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexDirection: "row", width: "100%",}}>
                        <div style={{ display: "flex", justifyContent: "left", alignItems: "center", flexDirection: "row"}}>
                            <img src = {Logo} class= 'logo' />
                            <div class = 'signature'>Joni Soropia</div>
                          
                        </div>
                        <div class = 'toolbar' style={{ display: "flex", justifyContent: "right", alignItems: "center",}}>
                           <Link to= "/JoniSoropia">
                                <div class = 'button' style={{ color: colorMap["/"]}} onClick={() => this.handleChange("/")}> HOME </div>
                            </Link>

                            <Link to= "/Portfolio">
                                <div class = 'button'style={{color: colorMap["/Portfolio"]}} onClick={() => this.handleChange("/Portfolio")}> PORTFOLIO </div>
                            </Link>
                               
                            <Link to= "/Projects">
                                <div class = 'button'style={{color: colorMap["/Projects"]}} onClick={() => this.handleChange("/Projects")}> PROJECTS </div>
                            </Link>
                                
                            <Link to= "/Contact">
                                <div class = 'button'style={{color: colorMap["/Contact"]}} onClick={() => this.handleChange("/Contact")}> CONTACT </div>
                            </Link>
                                
                            
                        </div>
                    </div>

                </Toolbar>

            </AppBar>
        )
    }
}
export default Header