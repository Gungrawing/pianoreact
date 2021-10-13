import './App.css';
import DO from "./piano-notes/noty-do.mp3"
import RE from "./piano-notes/re.mp3"
import MI from "./piano-notes/mi.mp3"
import FA from "./piano-notes/fa.mp3"
import SOL from "./piano-notes/sol.mp3"
import LA from "./piano-notes/lja.mp3"
import SI from "./piano-notes/si.mp3"
import React,{useState} from "react"



function App() {
    const audioDo = new Audio(DO)
    const audioRe = new Audio(RE)
    const audioMi = new Audio(MI)
    const audioFa = new Audio(FA)
    const audioSol = new Audio(SOL)
    const audioLa = new Audio(LA)
    const audioSi = new Audio(SI)


    const [notes,setNotes] = useState("")

    const playDo = () =>{
        window.addEventListener('keydown', function(ev){
            setNotes(ev.key)
            if (notes === ev.key){
                return audioDo.play()
            }
        })
    };
    const playRe = () =>{
        window.addEventListener('keydown', function(ev){
            setNotes(ev.key)
            if (notes === ev.key){
                return audioRe.play()
            }
        })
    };
    const playMi = () =>{
        window.addEventListener('keydown', function(ev){
            setNotes(ev.key)
            if (notes === ev.key){
                return audioMi.play()
            }
        })
    };
    const playFa = () =>{
        window.addEventListener('keydown', function(ev){
            setNotes(ev.key)
            if (notes === ev.key){
                return audioFa.play()
            }
        })
    };
    const playSol = () =>{
        window.addEventListener('keydown', function(ev){
            setNotes(ev.key)
            if (notes === ev.key){
                return audioSol.play()
            }
        })
    };
    const playLa = () =>{
        window.addEventListener('keydown', function(ev){
            setNotes(ev.key)
            if (notes === ev.key){
                return audioLa.play()
            }
        })
    };
    const playSi = () =>{
        window.addEventListener('keydown', function(ev){
            setNotes(ev.key)
            if (notes === ev.key){
                return audioSi.play()
            }
        })
    };

    return (
        <div className="App">
            <div className="piano">
                <button className="piano-notes" onClick={()=>audioDo.play()}>DO
                    <button className="button-input" onClick={playDo}>+</button>
                </button>
                <button className="piano-notes" onClick={()=>audioRe.play()}>RE
                    <button className="button-input" onClick={playRe}>+</button>
                </button>
                <button className="piano-notes" onClick={()=>audioMi.play()}>MI
                    <button className="button-input" onClick={playMi}>+</button>
                </button>
                <button className="piano-notes" onClick={()=>audioFa.play()}>FA
                    <button className="button-input" onClick={playFa}>+</button>
                </button>
                <button className="piano-notes" onClick={()=>audioSol.play()}>SO
                    <button className="button-input" onClick={playSol}>+</button>
                </button>
                <button className="piano-notes" onClick={()=>audioLa.play()}>LA
                    <button className="button-input" onClick={playLa}>+</button>
                </button>
                <button className="piano-notes" onClick={()=>audioSi.play()}>SI
                    <button className="button-input" onClick={playSi}>+</button>
                </button>
                <button className="piano-notes" onClick={()=>audioDo.play()}>DOF
                    <button className="button-input" onClick={playDo}>+</button>
                </button>
            </div>
        </div>
    )
}

export default App;
