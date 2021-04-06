import '../App.css';

import {
    Link
} from "react-router-dom";

function Home() {
    return (
        <div className="App">
            <header className="App-header">
                <span className="introtext">
                <a>Da uns mit dem Release von Chrysalis spannende Tage bevorstehen, haben wir uns gedacht, dass wir in den kommenden Wochen ein kleines Giveaway veranstalten.</a>
                <br />
                <br />
                <a>Was gibt es zu gewinnen?</a>
                <br />
                <br />
            <div className="preise">
                <br />
                <a>1. Platz: 40 Miota + 1 IOTA Cawendar + 1 limitierten Chrysalis Dog Tag/Schlüsselanhänger #1 + 1 IOTA Münze </a>
                <br />
                <a>2. Platz: 25 Miota + 1 limitierten Chrysalis Dog Tag/Schlüsselanhänger #2 + 1 IOTA Münze</a>
                <br />
                <a>3. Platz: 10 Miota + 1 limitierten Chrysalis Dog Tag/Schlüsselanhänger #3 + 1 IOTA Münze</a>
                <br />
                <a>4. Platz: 1 limitierten Chrysalis Dog Tag/Schlüsselanhänger #4 + 1 IOTA Münze</a>
                <br />
                <a>5. Platz: 1 limitierten Chrysalis Dog Tag/Schlüsselanhänger #5 + 1 IOTA Münze</a>
                <br />
                <a>6. Platz: Trostpreis 1 limitierten "Krüsalis" Dog Tag/Schlüsselanhänger #1</a>
                <br />
                <br />
            </div>
                <br />
                <a>Was muss ich machen um zu gewinnen?</a>
                <br />
                <br />
                <a>Geb deinen Telegram-Usernamen ein und teile uns deinen IOTA-Werbespruch mit! 
                   Mit welchem Spruch würdest du IOTA promoten? </a>
                <br />
                <br />
                <a>Die Abstimmung, um einen Gewinner zu ermitteln, findet am Ende als Umfrage in der IOTA DACH Telegram Gruppe statt.</a>
                <br />
                <br />
                <a>Die Münzen wurden vom langjährigen Community-Mitglied @ONOUAGH gespendet.</a>
                <br />
                <br />
                <a>Diese Aktion ist von der Community- für die Community, und steht in keiner Verbindung zur IOTA Foundation.</a>
                <br />
                <br />

                <div className="bedingungen">
                   <br />
                   <br />
                    <a>

                   Zeitraum der Teilnahme: Freitag 09.04.2021 10 Uhr - Freitag 16.04.21 bis 20 Uhr <br/>
                   Zeitraum der Auslosung: Samstag 17.04.21 - Mittwoch 21.04.21 18 Uhr<br/>
                   <br />
                   <br />
                   </a>
                </div>
                <br />
                <br />
                   <a>
                   Liebe Grüße, euer IOTA DACH Admin Team
                   <br />
                   <br />
                   </a>


                </span>
            </header>
            <br />
            <Link to="/form"  className="btn"> weiter </Link>
            <br />
            <br />
        </div>
    );
}

export default Home;