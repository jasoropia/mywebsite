import React from 'react';
import Header from "./Components/Header"
import "./CSS/homepage.css"
import "./CSS/fonts.css"
import Homepage from './Components/Homepage';
import Portfolio from "./Components/Portfolio";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import { Switch, Route, BrowserRouter as Router, Redirect} from "react-router-dom";
class App extends React.Component {
    render() {
        return (
            <div>

                <Router>
                    <Header></Header>
                    <Switch>
                        <Route exact path= "/">
                            <Redirect to= "/JoniSoropia"></Redirect>
                        </Route>
                        <Route exact path="/JoniSoropia">
                            <Homepage></Homepage>
                        </Route>

                        <Route exact path="/Portfolio">
                            <Portfolio></Portfolio>
                        </Route>

                        <Route exact path="/Projects">
                            <Projects></Projects>
                        </Route>

                        <Route exact path="/Contact">
                            <Contact></Contact>
                        </Route>
                        
                    </Switch>
                </Router>
            </div>
        )

    }
}
export default App