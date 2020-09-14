import React from 'react';
import Header from "./Components/Header"
import "./CSS/homepage.css"
import Homepage from './Components/Homepage';
import Portfolio from "./Components/Portfolio";
import Projects from "./Components/Projects";
import Contact from "../Components/Contact";
import About from "./About";
import Education from "./Education"
import Experience from "./Experience"
import Experience2 from "./Experience2"
import Skills from "./Skills"
import { Switch, Route, BrowserRouter as Router, Redirect} from "react-router-dom";
class App extends React.Component {
    render() {
        return (
            <div>

                <Router>
                    <Header></Header>
                    <Switch>
                    <Route exact path= "/Portfolio">
                            <Portfolio></Portfolio>
                        </Route>
                        <Route exact path= "/Portfolio/About">
                            <About></About>
                        </Route>

                        <Route exact path="/Portfolio/Education">
                            <Education></Education>
                        </Route>

                        <Route exact path="/Portfolio/Experience">
                            <Experience></Experience>
                        </Route>

                        <Route exact path="/Portfolio/Experience2">
                            <Experience2></Experience2>
                        </Route>                       

                        <Route exact path="/Portfolio/Skills">
                            <skills></skills>
                        </Route>
                        
                    </Switch>
                </Router>
            </div>
        )

    }
}
export default App