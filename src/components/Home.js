import { useState } from "react";
import Nav from "./Nav";
import { FcAddDatabase } from "react-icons/fc";

const Home = () => {

    const [ notes, setNotes ] = useState([]) 
    
    return(
        <main>
            <Nav />
            { notes.length === 0 ? 
                <div className="flex">
                    <button className="flex p-6 m-5 text-2xl items-center w-96 justify-between font-light border rounded hover:border-lime-300">
                        <h3>
                            New note
                        </h3>
                        <FcAddDatabase />
                    </button>
                    <div>
                        <h2>

                        </h2>
                    </div>
                </div> 
                : 
                <div>no está vacío</div>
            }
        </main>
    )
}

export default Home;