import '../App.css';
import hat from '../assets/hat.png'


function Done() {
    return (
        <div className="App">
            <header className="App-header">
            <img src={hat} className="App-logo" alt="hat"/>
              <br/>
              <br/>
                <span>
                    Danke für die Teilnahme!
                </span>
            </header>
            <body className="App-body">
            
            </body>
        </div>
    );
}

export default Done;