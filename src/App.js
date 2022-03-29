import './App.css';
import {useState, useEffect, useRef} from "react";

const Header = ({ pars, paragraphs, ps, color}) => {
    console.log('render')
    return (
        <header className="App-header">
            <p>Paragraph count: {pars.current}</p>
            {paragraphs.map((p, i) => {
                pars.current = pars.current + 1

                    return <>
                        <p style={{ color, backgroundColor: 'white', height: '80px', width: '400px', display: 'flex', alignItems: 'center', paddingLeft: '20px'}}>{p}</p>
                        <p>Paragraph count: {pars.current}</p>
                    </>
                }
            )}
            {ps}
        </header>
    )

}

function App() {
    const paragraphs = ["paragraph 1", "paragraph 2"]
    const [color, setColor] = useState('black')

    const pars = useRef(0)

    console.log(pars.current)
    const ps = <p>Paragraph count: {pars.current}</p>
    console.log(pars.current)

    const colors = ['red', 'green', 'cornflowerblue', 'darkgrey']

    const handleClick = () => {
        setColor(colors[0]);
        colors.shift();
    }
    console.log(color)

    return (
        <div className="App">
            <Header pars={pars} paragraphs={paragraphs} ps={ps} onClick={handleClick} color={color} />
            <button onClick={handleClick}>Button!</button>
        </div>
    );
}

export default App;
