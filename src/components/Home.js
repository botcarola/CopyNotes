import { useState } from "react";
import Nav from "./Nav";
import { FcAddDatabase } from "react-icons/fc";
import newNotes from "../img/undraw_add_notes_re_ln36.svg"


const Home = () => {

    const [ notes, setNotes ] = useState([]) 
    
    return(
        <main className="min-h-screen bg-slate-50">
            <Nav />
            <button className="bg-white flex p-6 m-5 text-2xl items-center w-96 justify-between font-light border rounded hover:border-lime-300">
                <h3>
                    New note
                </h3>
                <FcAddDatabase />
            </button>
            { notes.length === 0 ? 
                <div className="flex flex-col items-center border-t-2 content-center justify-center">
                    <div className="flex justify-center m-9">
                        <img src={newNotes} alt="add a new note" />
                    </div>
                    <h2 className="text-2xl font-light m-4 font-bold text-slate-500">
                        Add a new note
                    </h2>                                        
                </div> 
                : 
                <div>no está vacío</div>
            }
        </main>
    )
}

export default Home;