import { useState } from "react";
import Nav from "./Nav";
import newNotes from "../img/undraw_add_notes_re_ln36.svg"
import NewNoteForm from "./NewNoteForm";


const Home = () => {

    const [ notes, setNotes ] = useState([])     
    
    return(
        <main className="min-h-screen bg-slate-50">
            <Nav />            
            <NewNoteForm />
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