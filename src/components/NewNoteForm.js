import { useState } from "react"
import { FcAddDatabase } from "react-icons/fc";
import { FiXCircle } from "react-icons/fi";


const NewNoteForm = () => {

    const [ open, setOpen ] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()  
        setOpen(false)   
    }

    return(
        <>
            <button onClick={() => setOpen(true)} className="bg-white flex p-6 m-5 text-2xl items-center w-96 justify-between font-light border rounded hover:border-lime-300">
                <h3>
                    New note
                </h3>
                <FcAddDatabase />
            </button>
            {
                open &&
                <form className="bg-white w-96 p-6 flex flex-col border rounded m-4" onSubmit={handleSubmit}>
                    <button onClick={() => setOpen(false)} className="flex justify-end">
                        <FiXCircle className="text-red-600" />
                    </button>
                    <label htmlFor="note-text" className="text-xl m-4">
                        Text
                    </label>
                    <input className="border rounded p-4 m-4" id="note-text" type="text" placeholder="Please enter text" required />
                    <label htmlFor="note-date" className="text-xl m-4">
                        Date
                    </label>
                    <input className="border rounded p-4 m-4" input="note-date" type="date" id="note-date" />
                    <label className="flex justify-center">
                        <input type="submit" value="Send" className="text-xl border rounded p-4 m-4" />
                    </label>
                </form>
            }
        </>
    )
}

export default NewNoteForm;