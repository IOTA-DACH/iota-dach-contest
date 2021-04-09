import React from "react";
import Home from '../components/home'
import Contact from '../components/contact'
import Done from "../components/done";
import Impressum from "../components/impressum";
import ScrollToTop from "./scrolltotop"

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
                        <ScrollToTop />
                        <Home />
                    </Route>
                    <Route path="/form">
                        <ScrollToTop />
                        <Contact />
                    </Route>
                    <Route path="/thanks">
                        <ScrollToTop />
                        <Done />
                    </Route>
                    <Route path="/conditions">
                        <ScrollToTop />
                        <Conditions />
                    </Route>
                    <Route path="/impressum">
                        <Impressum />
                    </Route>

                </Switch>
          


        </Router>


    );
}