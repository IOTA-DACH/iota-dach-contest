import '../App.css';

import {
    Link
} from "react-router-dom";

function Conditions() {
    return (
        <div className="App">
            <header className="App-header">
                <span>
                <h3>Teilnahmebedingungen:</h3>
                   <br />
                   Mehrfachteilname ist ausgeschlossen <br/>
                   Teilnahme aus Deutschland, Österreich und der Schweiz<br/>
                   Bitte nur ernstgemeinte Einsendungen
                   <br />
                   <br />
                </span>
                <span>
                <h3>Datenschutz:</h3>
                   <br />
                   Wir erhalten lediglich die von dir im Formular ausgefüllten Daten, diese werden
                   von uns für den Zeitram des Contests und der Auswertung gespeichert und danach Gelöscht.
                   <br />
                   <br />
                   Wir geben die Daten nicht an dritte weiter.
                   <br />
                   <br />
                </span>
            </header>
            <Link to="/form"  className="btn"> zurück </Link>
            
        </div>
    );
}

export default Conditions;