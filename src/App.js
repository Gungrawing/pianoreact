import React,{useState,useReducer} from "react";
import './App.css';
import {DO,RE,MI,FA,SOL,SI,LA} from "./components/piano-music";


function App() {

    const audioDo = new Audio(DO)
    const audioRe = new Audio(RE)
    const audioMi = new Audio(MI)
    const audioFa = new Audio(FA)
    const audioSol = new Audio(SOL)
    const audioLa = new Audio(LA)
    const audioSi = new Audio(SI)

    const [noteDo, setNoteDo] = useState("");
    const [noteRe, setNoteRe] = useState("");
    const [noteMi, setNoteMi] = useState("");
    const [noteFa, setNoteFa] = useState("");
    const [noteSol, setNoteSol] = useState("");
    const [noteLa, setNoteLa] = useState("");
    const [noteSi, setNoteSi] = useState("");
    const [noteDoF, setNoteDoF] = useState("");

    const bindNotes = (state, action) => {
        switch (action.type) {
            case "bindDo":
                window.addEventListener('keydown', function (ev) {
                    setNoteDo(ev.key)
                    if (noteDo === ev.key){
                        return audioDo.play()
                    }
                });
                break;
            case "bindRe":
                window.addEventListener('keydown', function (ev) {
                    setNoteRe(ev.key)
                    if (noteRe === ev.key) {
                        return audioRe.play()
                    }
                });
                break;
            case "bindMi":
                window.addEventListener('keydown', function (ev) {
                    setNoteMi(ev.key)
                    if (noteMi === ev.key) {
                        return audioMi.play()
                    }
                });
                break;
            case "bindFa":
                window.addEventListener('keydown', function (ev) {
                    setNoteFa(ev.key)
                    if (noteFa === ev.key) {
                        return audioFa.play()
                    }
                });
                break;
            case "bindSol":
                window.addEventListener('keydown', function (ev) {
                    setNoteSol(ev.key)
                    if (noteSol === ev.key) {
                        return audioSol.play()
                    }
                });
                break;
            case "bindLa":
                window.addEventListener('keydown', function (ev) {
                    setNoteLa(ev.key)
                    if (noteLa === ev.key) {
                        return audioLa.play()
                    }
                });
                break;
            case "bindSi":
                window.addEventListener('keydown', function (ev) {
                    setNoteSi(ev.key)
                    if (noteSi === ev.key) {
                        return audioSi.play()
                    }
                });
                break;
            case "bindDoF":
                window.addEventListener('keydown', function (ev) {
                    setNoteDoF(ev.key)
                    if (noteDoF === ev.key) {
                        return audioDo.play()
                    }
                });
                break;
        }

    };
    const initialState = {count: null};
    const [state, dispatch] = useReducer(bindNotes,initialState);

    return (
        <div className="App">
            <div className="piano">
                <button className="piano-notes" onClick={() => audioDo.play()}>DO</button>
                <button className="piano-notes" onClick={() => audioRe.play()}>RE</button>
                <button className="piano-notes" onClick={() => audioMi.play()}>MI</button>
                <button className="piano-notes" onClick={() => audioFa.play()}>FA</button>
                <button className="piano-notes" onClick={() => audioSol.play()}>SOL</button>
                <button className="piano-notes" onClick={() => audioLa.play()}>LA</button>
                <button className="piano-notes" onClick={() => audioSi.play()}>SI</button>
                <button className="piano-notes" onClick={() => audioDo.play()}>DOF</button>
            </div>
            <div className="div-plus">
                {/*Count: {state.count = null};*/}
                <button className="plus plus-do" onClick={() => dispatch({type: 'bindDo'})} >+</button>
                <button className="plus"  onClick={() => dispatch({type: 'bindRe'})}>+</button>
                <button className="plus" onClick={() => dispatch({type: 'bindMi'})}>+</button>
                <button className="plus" onClick={() => dispatch({type: 'bindFa'})}>+</button>
                <button className="plus" onClick={() => dispatch({type: 'bindSol'})}>+</button>
                <button className="plus" onClick={() => dispatch({type: 'bindLa'})}>+</button>
                <button className="plus" onClick={() => dispatch({type: 'bindSi'})}>+</button>
                <button className="plus" onClick={() => dispatch({type: 'bindDoF'})}>+</button>
            </div>
            <div className="div-file">
                <button>File Upload</button>
            </div>

        </div>
    )

}

export default App;





// const [plusDo,setPLusDo] = useState("")
//
// window.addEventListener('keydown', function(ev){
//     setPLusDo(ev.key)
// });
//
// const testState = () => {
//     console.log(plusDo) }
// useEffect(
//     window.addEventListener('keydown', function(ev) {
//         setNoteDo(ev.key)
//     }))