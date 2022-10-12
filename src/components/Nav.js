import { FcSettings, FcViewDetails } from "react-icons/fc";
import { Link } from "react-router-dom";

const Nav = () => {

    return(
        <nav className="flex justify-between border-b-4 bg-white">
            <Link className="p-5 text-2xl font-black" to="/">
                <h1>
                    CopyNotes
                </h1>
            </Link>
            <div className="flex">
                <Link className="p-5 flex items-center text-2xl" to="/custom-notes">
                    <FcViewDetails />
                </Link>
                <Link className="p-5 flex items-center text-2xl" to="/settings">
                    <FcSettings />
                </Link>
            </div>
        </nav>
    )
}

export default Nav;