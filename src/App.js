import './App.css';
import {useState, useEffect, useRef} from "react";

function App() {
    const paragraphs = ["paragraph 1", "paragraph 2"]

    let pars = 0

    console.log(pars)
    const ps = <p>Paragraph count: {pars}</p>

    return (
        <div className="App">
            <header className="App-header">
                <p>Paragraph count: {pars}</p>
                {paragraphs.map((p, i) => {
                        pars += 1

                        return <>
                            <p style={{ color: 'black', backgroundColor: 'white', height: '80px', width: '400px', display: 'flex', alignItems: 'center', paddingLeft: '20px'}}>{p}</p>
                            <p>Paragraph count: {pars}</p>
                        </>
                    }
                )}
                {ps}
            </header>
        </div>
    );
}

export default App;
