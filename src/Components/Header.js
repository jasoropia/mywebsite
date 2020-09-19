import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Signature from "../Images/signature.png";
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
                { backgroundColor: "rgba(211, 186, 183, 0.33)" }
            }>


                <Toolbar>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexDirection: "row", width: "100%" }}>
                        <div style={{ display: "flex", justifyContent: "left", alignItems: "center", flexDirection: "row"}}>
                            
                            <div class= "initials"> JS </div>
                            <img src={Signature} width="160" height="50" alt="jonisignature" />
                        </div>
                        <div style={{ display: "flex", justifyContent: "right", alignItems: "center", flexDirection: "row"}}>
                           <Link to= "/JoniSoropia">
                                <Button style={{ color: colorMap["/"]}} onClick={() => this.handleChange("/")}> Home </Button>
                            </Link>

                            <Link to= "/Portfolio">
                                <Button style={{color: colorMap["/Portfolio"]}} onClick={() => this.handleChange("/Portfolio")}> Portfolio </Button>
                            </Link>
                               
                            <Link to= "/Projects">
                                <Button style={{color: colorMap["/Projects"]}} onClick={() => this.handleChange("/Projects")}> Projects </Button>
                            </Link>
                                
                            <Link to= "/Contact">
                                <Button style={{color: colorMap["/Contact"]}} onClick={() => this.handleChange("/Contact")}> Contact </Button>
                            </Link>
                                
                            
                        </div>
                    </div>

                </Toolbar>

            </AppBar>
        )
    }
}
export default Header