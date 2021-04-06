import '../App.css';

import {
    Link
} from "react-router-dom";

function Conditions() {
    return (
        <div className="App">
            <header className="App-header">
                <span>
                    NUTZUNGSBEDINGUNGEN
                </span>
            </header>
            <Link to="/form"  className="btn"> zurück </Link>
            
        </div>
    );
}

export default Conditions;