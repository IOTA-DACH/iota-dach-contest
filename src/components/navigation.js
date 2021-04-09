import React from "react";
import Home from '../components/home'
import Contact from '../components/contact'
import Done from "../components/done";
import Impressum from "../components/impressum";

import {
    HashRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import '../css/navigation.css'
import Conditions from "./conditions";

export default function Navigation() {
    return (
        <Router >

            <header>
            </header>

         

                <div>

                    <Link to="/" className="NavbarIcon1" > </Link>


                    <Link to="/form" className="NavbarIcon2" > </Link>

                    <Link to="/thanks" className="NavbarIcon2" > </Link>

                    <Link to="/impressum" className="NavbarIcon2" > </Link>

                </div>



                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/form">
                        <Contact />
                    </Route>
                    <Route path="/thanks">
                        <Done />
                    </Route>
                    <Route path="/conditions">
                        <Conditions />
                    </Route>
                    <Route path="/impressum">
                        <Impressum />
                    </Route>

                </Switch>
          


        </Router>


    );
}