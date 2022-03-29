import './App.css';
import {useState, useEffect, useRef} from "react";

const Header = ({ pars, paragraphs, ps, setPars}) => {
    console.log('render')
    return (
        <header className="App-header">
            <p>Paragraph count: {pars}</p>
            {paragraphs.map((p, i) => {
                    setPars(pars + 1)

                    return <>
                        <p style={{ color: 'black', backgroundColor: 'white', height: '80px', width: '400px', display: 'flex', alignItems: 'center', paddingLeft: '20px'}}>{p}</p>
                        <p>Paragraph count: {pars}</p>
                    </>
                }
            )}
            {ps}
        </header>
    )

}

function App() {
    const paragraphs = ["paragraph 1", "paragraph 2"]

    const [pars, setPars] = useState(0)

    console.log(pars)
    const ps = <p>Paragraph count: {pars}</p>
    console.log(pars)

    return (
        <div className="App">
            <Header pars={pars} paragraphs={paragraphs} ps={ps} setPars={setPars}/>
        </div>
    );
}

export default App;
