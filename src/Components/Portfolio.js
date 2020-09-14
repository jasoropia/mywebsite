import React from 'react';
import "../CSS/portfolio.css";
import About from "./About";
import Education from "./Education";
import Experience from "./Experience";
import Experience2 from "./Experience2";
import Skills from "./Skills";
import Achievement from "./Achievement";
import {Link} from "react-router-dom";
import { Switch, Route, BrowserRouter as Router, Redirect} from "react-router-dom";
import {withRouter} from "react-router-dom";
class Portfolio extends React.Component {
    componentDidMount () {
        this.setState({pageIndex: 1}) 
    }

    previousPage () {
        this.setState({pageIndex: this.state.pageIndex - 1 })
    }

    nextPage () {
        this.setState({pageIndex: this.state.pageIndex + 1 })
    }

    render() {
        if (!this.state || !this.state.pageIndex ) {return null}
        let subPage; 

        if (this.state.pageIndex == 1) {subPage = 
            (
            <div className= "background1">
                <div className="joni"> JONI</div>
                <div className="soropia"> SOROPIA </div>
                <div className= "student"> Student Portfolio </div>
                    
            </div>)
        }

        else if (this.state.pageIndex == 2) {subPage = <About></About>}
        else if (this.state.pageIndex == 3) {subPage = <Education></Education>}
        else if (this.state.pageIndex == 4) {subPage = <Experience></Experience>}
        else if (this.state.pageIndex == 5) {subPage = <Experience2></Experience2>}
        else if (this.state.pageIndex == 6) {subPage = <Skills></Skills>}
        else if (this.state.pageIndex == 7) {subPage = <Achievement></Achievement>}
        
        return (
            <div> {subPage}
                
                {this.state.pageIndex != 7 ?<div class = "arrow" onClick={() => this.nextPage()}> > </div> : null}
                {this.state.pageIndex != 1 ?<div class = "arrowBack" onClick={() => this.previousPage()}> {"<"} </div> : null}
            </div>
        )
    }
}
export default withRouter(Portfolio )